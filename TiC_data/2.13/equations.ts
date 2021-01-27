(() => {
  const avgDur = (parts) => {
    return parts.reduce((dur, b) => dur + b.durability, 0) / parts.length;
  };
  const generalDur = (parts) => {
    return Math.round(avgDur((parts["Head"]) + avgDur(parts["Extra"])) * parts["Handle"][0].modifier) + avgDur(parts["Handle"]);
  };

  return {
    "Pickaxe": {
      "Durability": (parts, traits, mods) => {
        let dur = generalDur(parts);

        return dur;
      },

    },
    "Hammer": {
      "Durability": (parts, traits, mods) => {
        parts["Head"].push(parts["Head"][0]); // double count Hammer Head
        let dur = generalDur(parts);
        dur = Math.round(dur * 2.5);

        return dur;
      }
    }
  };
})();
