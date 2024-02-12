export interface RangeSelectorType {
  minValue: number;
  maxValue: number;
}

export interface Patient {
  fullUrl: string;
  resource: PatientResource;
  search: Search;
}

interface Search {
  mode: string;
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
}

interface Name {
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

export type debounceFunction = (a: RangeSelectorType) => void;
