import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "@/components/ui/section-header";

describe("SectionHeader", () => {
  it("renders heading text", () => {
    render(<SectionHeader title="Unsere Leistungen" />);
    expect(screen.getByRole("heading", { name: "Unsere Leistungen" })).toBeInTheDocument();
  });

  it("renders eyebrow when provided", () => {
    render(<SectionHeader eyebrow="Leistungen" title="Was wir tun" />);
    expect(screen.getByText("Leistungen")).toBeInTheDocument();
  });

  it("does not render eyebrow when not provided", () => {
    render(<SectionHeader title="Nur Titel" />);
    const container = screen.getByRole("heading").parentElement;
    expect(container?.querySelectorAll("p")).toHaveLength(0);
  });

  it("renders description when provided", () => {
    render(<SectionHeader title="Test" description="Eine Beschreibung" />);
    expect(screen.getByText("Eine Beschreibung")).toBeInTheDocument();
  });

  it("centers by default", () => {
    render(<SectionHeader title="Zentriert" />);
    const container = screen.getByRole("heading").parentElement;
    expect(container?.className).toContain("text-center");
  });

  it("does not center when centered=false", () => {
    render(<SectionHeader title="Links" centered={false} />);
    const container = screen.getByRole("heading").parentElement;
    expect(container?.className).not.toContain("text-center");
  });
});
