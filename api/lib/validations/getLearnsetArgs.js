var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { getPokemonSchema } from "#validations/pokemonArgs/getPokemonArgs";
import { s } from "@sapphire/shapeshift";
const getLearnsetSchema = getPokemonSchema.extend({
  moves: s.array(s.string).unique.lengthGreaterThanOrEqual(1),
  generation: s.number.int.greaterThanOrEqual(1).lessThanOrEqual(9).nullish.transform((v) => v ?? 9)
});
function validateGetLearnsetArgs(args) {
  return getLearnsetSchema.parse(args);
}
__name(validateGetLearnsetArgs, "validateGetLearnsetArgs");
export {
  validateGetLearnsetArgs
};
//# sourceMappingURL=getLearnsetArgs.js.map