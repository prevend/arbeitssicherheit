import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

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

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Klick mich</Button>);
    expect(screen.getByRole("button", { name: "Klick mich" })).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/kontakt">Kontakt</Button>);
    const link = screen.getByRole("link", { name: "Kontakt" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/kontakt");
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-accent");
  });

  it("applies secondary variant classes", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-white/10");
  });

  it("applies outline variant classes", () => {
    render(<Button variant="outline">Outline</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border-slate-300");
  });

  it("applies size lg classes", () => {
    render(<Button size="lg">Gross</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("px-8");
    expect(btn.className).toContain("py-4");
  });

  it("applies size sm classes", () => {
    render(<Button size="sm">Klein</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("px-4");
    expect(btn.className).toContain("py-2");
  });
});
