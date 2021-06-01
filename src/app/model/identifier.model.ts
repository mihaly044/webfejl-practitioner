import { Period } from "./period.model";

export interface Identifier {
  use?: "Official" | "Secondary" | "Usual" | "Old";
  type?: "TAX" | "MCN" | "MR" | "etc";
  value?: string;
  system?: string;
  period?: Period;
}
