import { Schema, Material } from "./dictionary";

export default class Builder {
  _parts: { [key: string]: Material } = {};

  constructor(public schema: Schema) {}

  getStats(): { [key: string]: string | number } {
    const stats: { [key: string]: string | number } = {};
    stats["stat1"] = 1;
    stats["stat2"] = "STONE";
    return stats;
  }
}
