export type EvidenceKind =
  | "peer-reviewed-study"
  | "veterinary-guidance"
  | "government-guidance"
  | "professional-standard"
  | "law-or-regulation"
  | "court-decision"
  | "institutional-report"
  | "book"
  | "editorial-analysis";

export type EvidenceStrength =
  | "foundational"
  | "strong"
  | "moderate"
  | "contextual"
  | "editorial";

export type EvidenceSource = {
  id: string;
  title: string;
  author?: string;
  organisation?: string;
  year?: number;
  url?: string;
  kind: EvidenceKind;
  strength: EvidenceStrength;
  jurisdiction?: string;
  note?: string;
};

export type ArticleEvidence = {
  evidenceLevel:
    | "foundational"
    | "strong"
    | "moderate"
    | "developing"
    | "editorial";
  sources: EvidenceSource[];
  editorialNote?: string;
};

export const evidenceKindLabels: Record<EvidenceKind, string> = {
  "peer-reviewed-study": "Peer-reviewed study",
  "veterinary-guidance": "Veterinary guidance",
  "government-guidance": "Government guidance",
  "professional-standard": "Professional standard",
  "law-or-regulation": "Law or regulation",
  "court-decision": "Court decision",
  "institutional-report": "Institutional report",
  book: "Book",
  "editorial-analysis": "Editorial analysis",
};

export const evidenceStrengthLabels: Record<EvidenceStrength, string> = {
  foundational: "Foundational",
  strong: "Strong",
  moderate: "Moderate",
  contextual: "Contextual",
  editorial: "Editorial",
};

export function getEvidenceSummary(evidence?: ArticleEvidence) {
  if (!evidence) {
    return {
      sourceCount: 0,
      label: "Evidence record not yet added",
    };
  }

  const sourceCount = evidence.sources.length;

  return {
    sourceCount,
    label:
      sourceCount === 1
        ? "1 source reviewed"
        : `${sourceCount} sources reviewed`,
  };
}
