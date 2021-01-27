
export interface Schema {
  parts: { [key: string]: string[] };
  props: string[];
  propEquations: { [key: string]: () => string | number };
}

export interface Material {
  part: {[key: string]: any };
}

export interface TiCData {
  schemas: { [key: string]: Schema};
}

/**
 * Dictionary of TiC version to TiC data
 */
export interface TiCDict { [key: string]: TiCData; }

const d: TiCDict = {};
export { d as TiC} ;
