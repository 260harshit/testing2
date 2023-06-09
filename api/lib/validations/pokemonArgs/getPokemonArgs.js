var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { basePokemonArgsSchema } from "#validations/pokemonArgs/base";
import { s } from "@sapphire/shapeshift";
const getPokemonSchema = basePokemonArgsSchema.extend({
  pokemon: s.string
});
function validateGetPokemonArgs(args) {
  return getPokemonSchema.parse(args);
}
__name(validateGetPokemonArgs, "validateGetPokemonArgs");
export {
  getPokemonSchema,
  validateGetPokemonArgs
};
//# sourceMappingURL=getPokemonArgs.js.map