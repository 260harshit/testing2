var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { TypesEnum } from "#utils/pokemonTypes";
import { s } from "@sapphire/shapeshift";
const getTypeMatchupSchema = s.object({
  primaryType: s.nativeEnum(TypesEnum),
  secondaryType: s.nativeEnum(TypesEnum).nullish
});
function validateGetTypeMatchupArgs(args) {
  return getTypeMatchupSchema.parse(args);
}
__name(validateGetTypeMatchupArgs, "validateGetTypeMatchupArgs");
export {
  validateGetTypeMatchupArgs
};
//# sourceMappingURL=getTypeMatchupArgs.js.map