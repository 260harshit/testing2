var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { baseFuzzySchema } from "#validations/fuzzyArgs/base.ts";
import { basePokemonArgsSchema } from "#validations/pokemonArgs/base";
import { s } from "@sapphire/shapeshift";
const getFuzzyPokemonSchema = baseFuzzySchema.extend(basePokemonArgsSchema).extend({
  pokemon: s.string
});
function validateGetFuzzyPokemonArgs(args) {
  return getFuzzyPokemonSchema.parse(args);
}
__name(validateGetFuzzyPokemonArgs, "validateGetFuzzyPokemonArgs");
export {
  validateGetFuzzyPokemonArgs
};
//# sourceMappingURL=getFuzzyPokemonArgs.js.map