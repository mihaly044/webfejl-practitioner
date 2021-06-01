import { Address } from "./address-model";
import { ContactPoint } from "./contact-point.model";
import { HumanName } from "./human-name.model";
import { Identifier } from "./identifier.model";
import { Qualification } from "./qualification-model";
import firebase from 'firebase/app';

export interface Pracititioner {
  identifier?: Identifier;
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address[];
  qualification?: Qualification[];
  communication?: string;
  birthDate?: firebase.firestore.Timestamp;
}
