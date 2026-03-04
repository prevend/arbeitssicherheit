import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { navigation, siteConfig } from "@/lib/content";
import { Header } from "@/components/layout/header";

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

let mockPathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: Record<string, unknown>) => <img {...props} />,
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("lucide-react", () => ({
  Phone: (props: Record<string, unknown>) => (
    <svg data-testid="phone-icon" {...props} />
  ),
  Menu: (props: Record<string, unknown>) => (
    <svg data-testid="menu-icon" {...props} />
  ),
  X: (props: Record<string, unknown>) => (
    <svg data-testid="x-icon" {...props} />
  ),
  ChevronDown: (props: Record<string, unknown>) => (
    <svg data-testid="chevron-icon" {...props} />
  ),
}));

vi.mock("@/components/layout/mobile-nav", () => ({
  MobileNav: () => <div data-testid="mobile-nav" />,
}));

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("Header", () => {
  beforeEach(() => {
    mockPathname = "/";
  });

  it("renders the header with navigation", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it('has aria-label="Hauptnavigation" on nav element', () => {
    render(<Header />);

    const nav = screen.getByRole("navigation", { name: "Hauptnavigation" });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Hauptnavigation");
  });

  it("renders all navigation items from content", () => {
    render(<Header />);

    for (const item of navigation) {
      const links = screen.getAllByRole("link", { name: item.label });
      expect(links.length).toBeGreaterThanOrEqual(1);
      const navLink = links.find((l) => l.getAttribute("href") === item.href);
      expect(navLink).toBeDefined();
    }
  });

  it('active page link has aria-current="page"', () => {
    mockPathname = "/leistungen";
    render(<Header />);

    const activeLink = screen.getByRole("link", { name: "Dienstleistungen" });
    expect(activeLink).toHaveAttribute("aria-current", "page");
  });

  it("non-active links don't have aria-current", () => {
    mockPathname = "/leistungen";
    render(<Header />);

    const nonActiveLinks = navigation.filter(
      (item) => item.href !== mockPathname
    );

    for (const item of nonActiveLinks) {
      const links = screen.getAllByRole("link", { name: item.label });
      for (const link of links) {
        expect(link).not.toHaveAttribute("aria-current");
      }
    }
  });

  it("renders logo with proper alt text", () => {
    render(<Header />);

    const logo = screen.getByAltText(
      "Arbeitssicherheit-MG Hoersen GmbH – Arbeitsschutz Mönchengladbach"
    );
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe("img");
  });

  it("renders hamburger button with aria-label", () => {
    render(<Header />);

    const hamburger = screen.getByRole("button", {
      name: "Navigation oeffnen",
    });
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveAttribute("aria-label", "Navigation oeffnen");
  });

  it("renders phone link and CTA button", () => {
    render(<Header />);

    // Phone link
    const phoneLink = screen.getByRole("link", { name: new RegExp(siteConfig.phone) });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", siteConfig.phoneHref);

    // CTA button (desktop version contains "Erstanalyse anfordern")
    const ctaLinks = screen.getAllByRole("link", {
      name: /Erstanalyse/,
    });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
    // At least one should link to /erstanalyse
    const erstanalyseCta = ctaLinks.find(
      (link) => link.getAttribute("href") === "/erstanalyse"
    );
    expect(erstanalyseCta).toBeDefined();
  });
});
