"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;
        return (
          <div key={index}>
            <button
              id={triggerId}
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span
                className={[
                  "text-base font-medium pr-4 transition-colors duration-200",
                  isOpen
                    ? "text-primary"
                    : "text-slate-900 group-hover:text-primary",
                ].join(" ")}
              >
                {item.question}
              </span>
              <ChevronDown
                className={[
                  "w-5 h-5 shrink-0 transition-transform duration-300",
                  isOpen ? "text-primary rotate-180" : "text-slate-400",
                ].join(" ")}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`accordion-content ${isOpen ? "is-open" : ""}`}
            >
              <div className="pb-5 pr-12">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
