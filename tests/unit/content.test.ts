import { describe, it, expect } from "vitest";
import {
  siteConfig,
  navigation,
  newHeroContent,
  homeServiceCards,
  services,
  industries,
  faqs,
  teamMembers,
  testimonials,
  footerColumns,
} from "@/lib/content";

describe("siteConfig", () => {
  it("has all required fields", () => {
    expect(siteConfig.companyName).toBeTruthy();
    expect(siteConfig.phone).toBeTruthy();
    expect(siteConfig.phoneHref).toMatch(/^tel:/);
    expect(siteConfig.email).toMatch(/@/);
    expect(siteConfig.emailHref).toMatch(/^mailto:/);
    expect(siteConfig.address.street).toBeTruthy();
    expect(siteConfig.address.zip).toBeTruthy();
    expect(siteConfig.address.city).toBeTruthy();
    expect(siteConfig.openingHours).toBeTruthy();
    expect(siteConfig.region).toBeTruthy();
  });
});

describe("navigation", () => {
  it("has items with label and href", () => {
    expect(navigation.length).toBeGreaterThan(0);
    for (const item of navigation) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    }
  });

  it("includes Startseite as first item", () => {
    expect(navigation[0].label).toBe("Startseite");
    expect(navigation[0].href).toBe("/");
  });
});

describe("newHeroContent", () => {
  it("has headline and CTA", () => {
    expect(newHeroContent.headline).toBeTruthy();
    expect(newHeroContent.primaryCta).toBeTruthy();
    expect(newHeroContent.primaryCtaHref).toBeTruthy();
  });
});

describe("homeServiceCards", () => {
  it("is a non-empty array with required properties", () => {
    expect(homeServiceCards.length).toBeGreaterThan(0);
    for (const s of homeServiceCards) {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.href).toBeTruthy();
    }
  });
});

describe("services", () => {
  it("has detail data for each service", () => {
    expect(services.length).toBeGreaterThan(0);
    for (const s of services) {
      expect(s.title).toBeTruthy();
      expect(s.slug).toBeTruthy();
      expect(s.details.intro).toBeTruthy();
      expect(s.details.body).toBeTruthy();
      expect(s.details.ctaText).toBeTruthy();
    }
  });
});

describe("industries", () => {
  it("has items with title and scenario", () => {
    expect(industries.length).toBeGreaterThan(0);
    for (const i of industries) {
      expect(i.title).toBeTruthy();
      expect(i.scenario).toBeTruthy();
    }
  });
});

describe("faqs", () => {
  it("has question and answer for each item", () => {
    expect(faqs.length).toBeGreaterThan(0);
    for (const f of faqs) {
      expect(f.question).toBeTruthy();
      expect(f.answer).toBeTruthy();
    }
  });
});

describe("teamMembers", () => {
  it("has members with name and role", () => {
    expect(teamMembers.length).toBeGreaterThan(0);
    for (const m of teamMembers) {
      expect(m.name).toBeTruthy();
      expect(m.role).toBeTruthy();
      expect(m.initials).toBeTruthy();
    }
  });
});

describe("testimonials", () => {
  it("has quotes with name and context", () => {
    expect(testimonials.length).toBeGreaterThan(0);
    for (const t of testimonials) {
      expect(t.quote).toBeTruthy();
      expect(t.name).toBeTruthy();
      expect(t.context).toBeTruthy();
    }
  });
});

describe("footerColumns", () => {
  it("has columns with links", () => {
    expect(footerColumns.length).toBeGreaterThan(0);
    for (const col of footerColumns) {
      expect(col.title).toBeTruthy();
      expect(col.links.length).toBeGreaterThan(0);
      for (const link of col.links) {
        expect(link.label).toBeTruthy();
        expect(link.href).toBeTruthy();
      }
    }
  });
});
