"use client";

import { useState, useId, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactContent } from "@/lib/content";
import { z } from "zod";

/**
 * Maps service slugs (from ?thema= param) to human-readable German service names.
 */
const THEMA_LABELS: Record<string, string> = {
  arbeitsschutzbetreuung: "Arbeitsschutzbetreuung (Sifa-Betreuung)",
  gefaehrdungsbeurteilungen: "Gefährdungsbeurteilungen",
  unterweisungen: "Betriebsanweisungen & Unterweisungen",
  pruefungen: "Prüfungen (DGUV / UVV)",
  schulungen: "Schulungen & Ausbildungen",
  sigeko: "SiGeKo (Sicherheitskoordination)",
  erstanalyse: "Kostenfreie Erstanalyse",
  "sifa-betreuung": "Arbeitsschutzbetreuung (Sifa-Betreuung)",
};

interface ContactFormProps {
  variant?: "light" | "dark";
}

const contactFormSchema = z.object({
  name: z.string().min(1, "Bitte geben Sie Ihren Namen ein."),
  firma: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine g\u00fcltige E-Mail-Adresse ein."),
  telefon: z.string().optional(),
  nachricht: z.string().min(1, "Bitte geben Sie eine Nachricht ein."),
  dsgvo: z.literal("accepted", {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerkl\u00e4rung zu." }),
  }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactFormSchema>, string>>;

async function submitForm(formData: FormData): Promise<{ success: boolean }> {
  // TODO: Replace with real backend (e.g. Resend, Nodemailer, or Formspree)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  formData.get("name");
  return { success: true };
}

function ContactFormInner({ variant = "light" }: ContactFormProps) {
  const isDark = variant === "dark";
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const id = useId();
  const searchParams = useSearchParams();

  const initialNachricht = (() => {
    const thema = searchParams.get("thema");
    const branche = searchParams.get("branche");
    const parts: string[] = [];
    if (thema) {
      const label = THEMA_LABELS[thema] ?? thema;
      parts.push(`Ich interessiere mich für: ${label}.`);
    }
    if (branche) {
      parts.push(`Unsere Branche: ${branche}.`);
    }
    if (parts.length > 0) {
      parts.push("\n\n");
      return parts.join("\n");
    }
    return "";
  })();

  const [nachricht, setNachricht] = useState(initialNachricht);

  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: string) => `${id}-${name}-error`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const raw = {
      name: formData.get("name") as string,
      firma: formData.get("firma") as string,
      email: formData.get("email") as string,
      telefon: formData.get("telefon") as string,
      nachricht: formData.get("nachricht") as string,
      dsgvo: formData.get("dsgvo") as string | null,
    };

    const result = contactFormSchema.safeParse(raw);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await submitForm(formData);
      if (response.success) {
        setStatus("success");
        form.reset();
        setNachricht("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg" role="status">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-emerald-800">
              {contactContent.successMessage.title}
            </p>
            <p className="text-sm text-emerald-700 mt-1">
              {contactContent.successMessage.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const inputClasses = (fieldError?: string) =>
    [
      "w-full px-4 py-3 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400",
      "focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
      "transition-colors duration-200",
      fieldError
        ? "border-red-500 focus:ring-red-600/20 focus:border-red-600"
        : "border-slate-300",
    ].join(" ");

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor={fieldId("name")} className={`block text-sm font-medium mb-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
          Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id={fieldId("name")}
          type="text"
          name="name"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? errorId("name") : undefined}
          className={inputClasses(errors.name)}
          placeholder="Ihr Name"
        />
        {errors.name && (
          <p id={errorId("name")} role="alert" className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Firma */}
      <div>
        <label htmlFor={fieldId("firma")} className={`block text-sm font-medium mb-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
          Firma
        </label>
        <input
          id={fieldId("firma")}
          type="text"
          name="firma"
          autoComplete="organization"
          className={inputClasses()}
          placeholder="Firmenname (optional)"
        />
      </div>

      {/* Email + Telefon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={fieldId("email")} className={`block text-sm font-medium mb-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
            E-Mail <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id={fieldId("email")}
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={inputClasses(errors.email)}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p id={errorId("email")} role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("telefon")} className={`block text-sm font-medium mb-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
            Telefon
          </label>
          <input
            id={fieldId("telefon")}
            type="tel"
            name="telefon"
            autoComplete="tel"
            className={inputClasses()}
            placeholder="+49 ..."
          />
        </div>
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor={fieldId("nachricht")} className={`block text-sm font-medium mb-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
          Worum geht es? <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id={fieldId("nachricht")}
          name="nachricht"
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.nachricht}
          aria-describedby={errors.nachricht ? errorId("nachricht") : undefined}
          className={[inputClasses(errors.nachricht), "resize-y"].join(" ")}
          placeholder="Schildern Sie kurz Ihre Situation."
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
        />
        {errors.nachricht && (
          <p id={errorId("nachricht")} role="alert" className="mt-1 text-sm text-red-600">{errors.nachricht}</p>
        )}
      </div>

      {/* DSGVO Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id={fieldId("dsgvo")}
          type="checkbox"
          name="dsgvo"
          value="accepted"
          required
          aria-required="true"
          aria-invalid={!!errors.dsgvo}
          aria-describedby={errors.dsgvo ? errorId("dsgvo") : undefined}
          className="mt-1 w-4 h-4 text-accent border-slate-300 rounded focus:ring-2 focus:ring-accent/20"
        />
        <label htmlFor={fieldId("dsgvo")} className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-slate-600"}`}>
          Ich stimme der Verarbeitung meiner Daten gem\u00e4\u00df der{" "}
          <a
            href="/datenschutz"
            className="text-accent hover:text-accent-hover underline"
          >
            Datenschutzerkl\u00e4rung
          </a>{" "}
          zu. <span aria-hidden="true" className="text-red-500">*</span>
        </label>
      </div>
      {errors.dsgvo && (
        <p id={errorId("dsgvo")} role="alert" className="text-sm text-red-600">{errors.dsgvo}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8 py-4 bg-accent text-white text-base font-semibold rounded-lg hover:bg-accent-hover active:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center">
            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" aria-hidden="true" />
            Wird gesendet...
          </span>
        ) : (
          "Nachricht senden"
        )}
      </button>

      {/* Error message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-red-800">
                {contactContent.errorMessage.title}
              </p>
              <p className="text-sm text-red-700 mt-1">
                {contactContent.errorMessage.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

/**
 * Exported ContactForm wraps the inner component in a Suspense boundary.
 * This is required by Next.js because useSearchParams() needs Suspense
 * to avoid de-opting the entire page into client-side rendering.
 */
export function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<ContactFormFallback />}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}

function ContactFormFallback() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-12 bg-slate-200 rounded-lg" />
      <div className="h-12 bg-slate-200 rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-12 bg-slate-200 rounded-lg" />
        <div className="h-12 bg-slate-200 rounded-lg" />
      </div>
      <div className="h-32 bg-slate-200 rounded-lg" />
      <div className="h-12 bg-slate-200 rounded-lg w-48" />
    </div>
  );
}
