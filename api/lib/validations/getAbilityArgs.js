var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s } from "@sapphire/shapeshift";
const getAbilitySchema = s.object({
  ability: s.string
});
function validateGetAbilityArgs(args) {
  return getAbilitySchema.parse(args);
}
__name(validateGetAbilityArgs, "validateGetAbilityArgs");
export {
  validateGetAbilityArgs
};
//# sourceMappingURL=getAbilityArgs.js.map