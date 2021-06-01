import { Period } from "./period.model";

export interface ContactPoint {
  system?: string;
  value?: string;
  rank?: number;
  period: Period;
}
