import { s } from "@sapphire/shapeshift";
const basePokemonArgsSchema = s.object({
  offsetFlavorTexts: s.number.greaterThanOrEqual(0).nullish.transform((v) => v ?? 0),
  takeFlavorTexts: s.number.greaterThanOrEqual(1).lessThanOrEqual(50).nullish.transform((v) => v ?? 1),
  reverseFlavorTexts: s.boolean.nullish.transform((v) => v ?? true)
});
export {
  basePokemonArgsSchema
};
//# sourceMappingURL=base.js.map