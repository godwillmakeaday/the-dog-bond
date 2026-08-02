import type { Metadata } from "next";

import { SearchInsightsDashboard } from "@/components/SearchInsightsDashboard";

export const metadata: Metadata = {
  title: "Search Insights | The Dog Bond",
  description:
    "A local dashboard for understanding searches, zero-result gaps, filter usage, and recent search activity.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SearchInsightsPage() {
  return <SearchInsightsDashboard />;
}
