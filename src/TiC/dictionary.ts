
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

export class TiCDictionary {
  static _instance?: TiCDictionary;
  static get instance() {
    if (!TiCDictionary._instance) {
      TiCDictionary._instance = new TiCDictionary();
    }
    return TiCDictionary._instance;
  }

  dict: TiCDict = {};

  get versions() {
    return Object.keys(this.dict);
  }

}

const d = TiCDictionary.instance;
export { d as TiC} ;
