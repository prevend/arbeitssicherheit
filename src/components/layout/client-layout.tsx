"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

export function ClientLayout() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
