import { Identifier } from "./identifier.model";
import { Period } from "./period.model";

export interface Qualification {
  identifier?: Identifier[]
  title?: string;
  issuer?: string;
  issuedOn?: string;
  period?: Period;
}
