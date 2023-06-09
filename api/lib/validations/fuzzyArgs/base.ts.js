import { s } from "@sapphire/shapeshift";
const baseFuzzySchema = s.object({
  take: s.number.greaterThanOrEqual(1).lessThanOrEqual(50).nullish.transform((v) => v ?? 1),
  offset: s.number.greaterThanOrEqual(0).nullish.transform((v) => v ?? 0),
  reverse: s.boolean.nullish.transform((v) => v ?? false)
});
export {
  baseFuzzySchema
};
//# sourceMappingURL=base.ts.js.map