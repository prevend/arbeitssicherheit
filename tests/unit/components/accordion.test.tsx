import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "@/components/ui/accordion";

vi.mock("lucide-react", () => ({
  ChevronDown: (props: Record<string, unknown>) => (
    <svg data-testid="chevron" {...props} />
  ),
}));

const mockItems = [
  {
    question: "Was ist eine Gefaehrdungsbeurteilung?",
    answer:
      "Eine systematische Ermittlung und Bewertung aller relevanten Gefaehrdungen.",
  },
  {
    question: "Wer ist fuer Arbeitssicherheit verantwortlich?",
    answer: "Der Arbeitgeber traegt die Hauptverantwortung.",
  },
  {
    question: "Wie oft muss unterwiesen werden?",
    answer: "Mindestens einmal jaehrlich sowie bei besonderen Anlaessen.",
  },
];

describe("Accordion", () => {
  it("renders all questions as buttons", () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(mockItems.length);

    for (const item of mockItems) {
      expect(
        screen.getByRole("button", { name: item.question })
      ).toBeInTheDocument();
    }
  });

  it("all panels start closed with hidden attribute present", () => {
    render(<Accordion items={mockItems} />);

    const regions = screen.getAllByRole("region", { hidden: true });
    expect(regions).toHaveLength(mockItems.length);

    for (const region of regions) {
      expect(region).toHaveAttribute("hidden");
    }
  });

  it("all buttons start with aria-expanded=false", () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole("button");
    for (const button of buttons) {
      expect(button).toHaveAttribute("aria-expanded", "false");
    }
  });

  it("clicking a question opens its panel", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", {
      name: mockItems[0].question,
    });

    await user.click(firstButton);

    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    const panelId = firstButton.getAttribute("aria-controls")!;
    const panel = document.getElementById(panelId)!;
    expect(panel).not.toHaveAttribute("hidden");
  });

  it("clicking the same question again closes it", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", {
      name: mockItems[0].question,
    });

    // Open
    await user.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    const panelId = firstButton.getAttribute("aria-controls")!;
    const panel = document.getElementById(panelId)!;
    expect(panel).not.toHaveAttribute("hidden");

    // Close
    await user.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("hidden");
  });

  it("opening a different question closes the previous one (only one open at a time)", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const firstButton = screen.getByRole("button", {
      name: mockItems[0].question,
    });
    const secondButton = screen.getByRole("button", {
      name: mockItems[1].question,
    });

    const firstPanelId = firstButton.getAttribute("aria-controls")!;
    const secondPanelId = secondButton.getAttribute("aria-controls")!;
    const firstPanel = document.getElementById(firstPanelId)!;
    const secondPanel = document.getElementById(secondPanelId)!;

    // Open first
    await user.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "true");
    expect(firstPanel).not.toHaveAttribute("hidden");
    expect(secondButton).toHaveAttribute("aria-expanded", "false");
    expect(secondPanel).toHaveAttribute("hidden");

    // Open second — first should close
    await user.click(secondButton);
    expect(secondButton).toHaveAttribute("aria-expanded", "true");
    expect(secondPanel).not.toHaveAttribute("hidden");
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(firstPanel).toHaveAttribute("hidden");
  });

  it("aria-controls on button matches the corresponding panel id", () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole("button");

    for (const button of buttons) {
      const controlsId = button.getAttribute("aria-controls");
      expect(controlsId).toBeTruthy();

      const panel = document.getElementById(controlsId!);
      expect(panel).toBeInTheDocument();
      expect(panel).toHaveAttribute("role", "region");
    }
  });

  it("aria-labelledby on panel matches the corresponding button id", () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole("button");

    for (const button of buttons) {
      const buttonId = button.getAttribute("id");
      expect(buttonId).toBeTruthy();

      const panelId = button.getAttribute("aria-controls")!;
      const panel = document.getElementById(panelId)!;

      expect(panel).toHaveAttribute("aria-labelledby", buttonId);
    }
  });

  it("each panel has role='region'", () => {
    render(<Accordion items={mockItems} />);

    // Panels are hidden, so we need to include hidden elements
    const regions = screen.getAllByRole("region", { hidden: true });
    expect(regions).toHaveLength(mockItems.length);

    for (const region of regions) {
      expect(region).toHaveAttribute("role", "region");
    }
  });

  it("renders answer text inside the corresponding panel", async () => {
    render(<Accordion items={mockItems} />);

    for (let i = 0; i < mockItems.length; i++) {
      const button = screen.getByRole("button", {
        name: mockItems[i].question,
      });
      const panelId = button.getAttribute("aria-controls")!;
      const panel = document.getElementById(panelId)!;

      // The answer text should exist in the DOM even when hidden
      expect(within(panel).getByText(mockItems[i].answer)).toBeInTheDocument();
    }
  });

  it("renders with an empty items array without errors", () => {
    const { container } = render(<Accordion items={[]} />);

    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(container.firstElementChild).toBeInTheDocument();
  });
});
