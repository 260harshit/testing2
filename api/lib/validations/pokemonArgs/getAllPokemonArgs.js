var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { baseFuzzySchema } from "#validations/fuzzyArgs/base.ts";
import { basePokemonArgsSchema } from "#validations/pokemonArgs/base";
import { s } from "@sapphire/shapeshift";
const getAllPokemonSchema = baseFuzzySchema.extend(basePokemonArgsSchema).extend({
  offset: s.number.greaterThanOrEqual(0).lessThanOrEqual(1389).nullish.transform((v) => v ?? 0),
  take: s.number.greaterThanOrEqual(1).lessThanOrEqual(1392).nullish.transform((v) => v ?? 1)
});
function validateGetAllPokemonArgs(args) {
  return getAllPokemonSchema.parse(args);
}
__name(validateGetAllPokemonArgs, "validateGetAllPokemonArgs");
export {
  validateGetAllPokemonArgs
};
//# sourceMappingURL=getAllPokemonArgs.js.map