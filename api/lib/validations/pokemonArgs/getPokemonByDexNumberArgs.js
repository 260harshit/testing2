var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { basePokemonArgsSchema } from "#validations/pokemonArgs/base";
import { s } from "@sapphire/shapeshift";
const getPokemonByDexNumberSchema = basePokemonArgsSchema.extend({
  number: s.number.greaterThanOrEqual(-68).lessThanOrEqual(905)
});
function validateGetPokemonByDexNumberArgs(args) {
  return getPokemonByDexNumberSchema.parse(args);
}
__name(validateGetPokemonByDexNumberArgs, "validateGetPokemonByDexNumberArgs");
export {
  validateGetPokemonByDexNumberArgs
};
//# sourceMappingURL=getPokemonByDexNumberArgs.js.map