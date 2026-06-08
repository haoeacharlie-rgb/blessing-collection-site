export type JourneyStep = "welcome" | "form" | "success";

export interface BlessingInput {
  name?: string;
  message: string;
}

export interface BlessingSubmissionResult {
  totalCount: number | null;
  submittedName?: string;
}

