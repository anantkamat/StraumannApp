export interface RangeSelectorType {
  minValue: number;
  maxValue: number;
}

interface Search {
  mode: string;
}

export interface Name {
  family: string;
  text: string;
  given: string[];
}

interface Identifier {
  system: string;
  value: string;
}
interface Text {
  status: string;
  div: string;
}

interface Meta {
  versionId: string;
  lastUpdated: string;
  source: string;
}

interface Telecom {
  system: string;
  value: string;
  use: string;
}

interface Communication {
  language: {
    text: string;
  };
}

export interface Address {
  line: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PatientResource {
  resourceType: string;
  id: string;
  meta: Meta;
  text: Text;
  identifier: Identifier[];
  active: boolean;
  name: Name[];
  gender: string;
  birthDate: string;
  telecom: Telecom[];
  communication: Communication[];
  address: Address[];
}

export interface Patient {
  fullUrl: string;
  resource: PatientResource;
  search: Search;
}

export type debounceFunction = (a: RangeSelectorType) => void;
