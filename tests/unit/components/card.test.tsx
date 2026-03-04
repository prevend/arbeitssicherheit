import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/card";

describe("Card", () => {
  it("renders with children", () => {
    render(<Card>Inhalt der Card</Card>);
    expect(screen.getByText("Inhalt der Card")).toBeInTheDocument();
  });

  it("applies large padding by default", () => {
    const { container } = render(<Card>Test</Card>);
    expect(container.firstElementChild?.className).toContain("p-8");
  });

  it("applies sm padding", () => {
    const { container } = render(<Card padding="sm">Test</Card>);
    expect(container.firstElementChild?.className).toContain("p-5");
  });

  it("applies md padding", () => {
    const { container } = render(<Card padding="md">Test</Card>);
    expect(container.firstElementChild?.className).toContain("p-6");
  });

  it("includes hover classes by default", () => {
    const { container } = render(<Card>Test</Card>);
    expect(container.firstElementChild?.className).toContain("card-hover");
  });

  it("excludes hover classes when hover=false", () => {
    const { container } = render(<Card hover={false}>Test</Card>);
    expect(container.firstElementChild?.className).not.toContain("card-hover");
  });

  it("accepts custom className", () => {
    const { container } = render(<Card className="mt-4">Test</Card>);
    expect(container.firstElementChild?.className).toContain("mt-4");
  });
});
