import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/features/contact-form";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock("lucide-react", () => ({
  CheckCircle: (props: Record<string, unknown>) => (
    <svg data-testid="check-circle" {...props} />
  ),
  AlertCircle: (props: Record<string, unknown>) => (
    <svg data-testid="alert-circle" {...props} />
  ),
  Loader2: (props: Record<string, unknown>) => (
    <svg data-testid="loader" {...props} />
  ),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  // -------------------------------------------------------
  // 1. Renders all form fields
  // -------------------------------------------------------
  describe("renders all form fields", () => {
    it("renders name input", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Name/)).toBeInTheDocument();
    });

    it("renders firma input", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Firma/)).toBeInTheDocument();
    });

    it("renders email input", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^E-Mail/)).toBeInTheDocument();
    });

    it("renders telefon input", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Telefon/)).toBeInTheDocument();
    });

    it("renders nachricht textarea", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Worum geht es/)).toBeInTheDocument();
    });

    it("renders dsgvo checkbox", () => {
      render(<ContactForm />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders submit button", () => {
      render(<ContactForm />);
      expect(
        screen.getByRole("button", { name: "Nachricht senden" })
      ).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 2. Required fields have aria-required="true"
  // -------------------------------------------------------
  describe("required fields have aria-required", () => {
    it("name field has aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Name/)).toHaveAttribute(
        "aria-required",
        "true"
      );
    });

    it("email field has aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^E-Mail/)).toHaveAttribute(
        "aria-required",
        "true"
      );
    });

    it("nachricht field has aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Worum geht es/)).toHaveAttribute(
        "aria-required",
        "true"
      );
    });

    it("dsgvo checkbox has aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "aria-required",
        "true"
      );
    });

    it("firma field does NOT have aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Firma/)).not.toHaveAttribute(
        "aria-required"
      );
    });

    it("telefon field does NOT have aria-required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Telefon/)).not.toHaveAttribute(
        "aria-required"
      );
    });
  });

  // -------------------------------------------------------
  // 3. Labels are properly associated with inputs
  // -------------------------------------------------------
  describe("labels are associated with inputs via htmlFor/id", () => {
    it("name label is linked to name input", () => {
      render(<ContactForm />);
      const input = screen.getByLabelText(/^Name/);
      expect(input).toHaveAttribute("id");
      expect(input.id).toBeTruthy();
      expect(input.tagName).toBe("INPUT");
    });

    it("firma label is linked to firma input", () => {
      render(<ContactForm />);
      const input = screen.getByLabelText(/^Firma/);
      expect(input).toHaveAttribute("id");
      expect(input.id).toBeTruthy();
    });

    it("email label is linked to email input", () => {
      render(<ContactForm />);
      const input = screen.getByLabelText(/^E-Mail/);
      expect(input).toHaveAttribute("id");
      expect(input.id).toBeTruthy();
    });

    it("telefon label is linked to telefon input", () => {
      render(<ContactForm />);
      const input = screen.getByLabelText(/^Telefon/);
      expect(input).toHaveAttribute("id");
      expect(input.id).toBeTruthy();
    });

    it("nachricht label is linked to textarea", () => {
      render(<ContactForm />);
      const textarea = screen.getByLabelText(/^Worum geht es/);
      expect(textarea).toHaveAttribute("id");
      expect(textarea.id).toBeTruthy();
      expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("dsgvo label is linked to checkbox", () => {
      render(<ContactForm />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("id");
      expect(checkbox.id).toBeTruthy();
    });
  });

  // -------------------------------------------------------
  // 4. Shows validation errors when submitting empty form
  // -------------------------------------------------------
  describe("shows validation errors on empty submit", () => {
    it("shows name required error", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText("Bitte geben Sie Ihren Namen ein.")
      ).toBeInTheDocument();
    });

    it("shows email required error", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText(
          "Bitte geben Sie eine gültige E-Mail-Adresse ein."
        )
      ).toBeInTheDocument();
    });

    it("shows nachricht required error", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText("Bitte geben Sie eine Nachricht ein.")
      ).toBeInTheDocument();
    });

    it("shows dsgvo required error", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText(
          "Bitte stimmen Sie der Datenschutzerklärung zu."
        )
      ).toBeInTheDocument();
    });

    it("all validation errors have role=alert", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      await screen.findByText("Bitte geben Sie Ihren Namen ein.");
      const alerts = screen.getAllByRole("alert");
      expect(alerts.length).toBeGreaterThanOrEqual(4);
    });

    it("sets aria-invalid on fields with errors", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      await screen.findByText("Bitte geben Sie Ihren Namen ein.");

      expect(screen.getByLabelText(/^Name/)).toHaveAttribute(
        "aria-invalid",
        "true"
      );
      expect(screen.getByLabelText(/^E-Mail/)).toHaveAttribute(
        "aria-invalid",
        "true"
      );
      expect(screen.getByLabelText(/^Worum geht es/)).toHaveAttribute(
        "aria-invalid",
        "true"
      );
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "aria-invalid",
        "true"
      );
    });

    it("links error messages to inputs via aria-describedby", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      await screen.findByText("Bitte geben Sie Ihren Namen ein.");

      const nameInput = screen.getByLabelText(/^Name/);
      const describedBy = nameInput.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();

      const errorElement = document.getElementById(describedBy!);
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent(
        "Bitte geben Sie Ihren Namen ein."
      );
    });
  });

  // -------------------------------------------------------
  // 5. Shows email validation error for invalid email
  // -------------------------------------------------------
  describe("email validation", () => {
    it("shows error for invalid email format", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(screen.getByLabelText(/^E-Mail/), "ungueltige-email");
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText(
          "Bitte geben Sie eine gültige E-Mail-Adresse ein."
        )
      ).toBeInTheDocument();
    });

    it("shows error for email without domain", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(screen.getByLabelText(/^E-Mail/), "user@");
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText(
          "Bitte geben Sie eine gültige E-Mail-Adresse ein."
        )
      ).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 6. Clears errors and submits successfully with valid data
  // -------------------------------------------------------
  describe("clears errors and submits with valid data", () => {
    it("clears previous validation errors on valid submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // First: submit empty to trigger errors
      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );
      await screen.findByText("Bitte geben Sie Ihren Namen ein.");

      // Now fill all required fields
      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Anfrage zur Arbeitssicherheit"
      );
      await user.click(screen.getByRole("checkbox"));

      // Submit with valid data
      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      // Validation errors should be gone
      await waitFor(() => {
        expect(
          screen.queryByText("Bitte geben Sie Ihren Namen ein.")
        ).not.toBeInTheDocument();
        expect(
          screen.queryByText(
            "Bitte geben Sie eine gültige E-Mail-Adresse ein."
          )
        ).not.toBeInTheDocument();
        expect(
          screen.queryByText("Bitte geben Sie eine Nachricht ein.")
        ).not.toBeInTheDocument();
        expect(
          screen.queryByText(
            "Bitte stimmen Sie der Datenschutzerklärung zu."
          )
        ).not.toBeInTheDocument();
      });
    });

    it("does not show validation errors when optional fields are empty", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill only required fields, leave firma and telefon empty
      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Anfrage"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      // No validation errors should appear
      await waitFor(() => {
        expect(screen.queryAllByRole("alert")).toHaveLength(0);
      });
    });
  });

  // -------------------------------------------------------
  // 7. Shows success message after successful submit
  // -------------------------------------------------------
  describe("shows success message after submit", () => {
    it("displays success message with role=status", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      const successMessage = await screen.findByRole("status");
      expect(successMessage).toBeInTheDocument();
    });

    it("shows the correct success title text", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText("Nachricht ist angekommen.")
      ).toBeInTheDocument();
    });

    it("shows the correct success body text", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(
        await screen.findByText(
          "Wir melden uns bei Ihnen. In der Regel innerhalb eines Werktages."
        )
      ).toBeInTheDocument();
    });

    it("hides the form after successful submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      await screen.findByRole("status");

      // Form should no longer be rendered
      expect(
        screen.queryByRole("button", { name: "Nachricht senden" })
      ).not.toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 8. Submit button shows loading state during submission
  // -------------------------------------------------------
  describe("loading state during submission", () => {
    it("shows loading text while submitting", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      // During the 1000ms setTimeout, the button should show loading state
      expect(
        await screen.findByText("Wird gesendet...")
      ).toBeInTheDocument();
    });

    it("disables submit button while loading", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      await waitFor(() => {
        expect(screen.getByRole("button")).toBeDisabled();
      });
    });

    it("shows loader icon while submitting", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/^Name/), "Max Mustermann");
      await user.type(
        screen.getByLabelText(/^E-Mail/),
        "max@beispiel.de"
      );
      await user.type(
        screen.getByLabelText(/^Worum geht es/),
        "Testnachricht"
      );
      await user.click(screen.getByRole("checkbox"));

      await user.click(
        screen.getByRole("button", { name: "Nachricht senden" })
      );

      expect(await screen.findByTestId("loader")).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 9. AutoComplete attributes are set correctly
  // -------------------------------------------------------
  describe("autocomplete attributes", () => {
    it("name input has autocomplete=name", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Name/)).toHaveAttribute(
        "autocomplete",
        "name"
      );
    });

    it("firma input has autocomplete=organization", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Firma/)).toHaveAttribute(
        "autocomplete",
        "organization"
      );
    });

    it("email input has autocomplete=email", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^E-Mail/)).toHaveAttribute(
        "autocomplete",
        "email"
      );
    });

    it("telefon input has autocomplete=tel", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/^Telefon/)).toHaveAttribute(
        "autocomplete",
        "tel"
      );
    });
  });
});
