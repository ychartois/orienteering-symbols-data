export interface ControlDescription {
  ref: string;
  name: string;
  column: string;
  type: string;
  description: string;
  image: string;
  map_symbols: string[];
}

export interface MapSymbol {
  code: string;
  name: string;
  type: string;
  description: string;
  control_description: string[];
  image: string;
}

export interface Languages<T> {
  en: T[];
  [languageCode: string]: T[];
}

export const controlDescriptions: Languages<ControlDescription>;
export const mapSymbols: Languages<MapSymbol>;
