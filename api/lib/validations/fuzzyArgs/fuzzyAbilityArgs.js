var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { baseFuzzySchema } from "#validations/fuzzyArgs/base.ts";
import { s } from "@sapphire/shapeshift";
const getFuzzyAbilitySchema = baseFuzzySchema.extend({
  ability: s.string
});
function validateGetFuzzyAbilityArgs(args) {
  return getFuzzyAbilitySchema.parse(args);
}
__name(validateGetFuzzyAbilityArgs, "validateGetFuzzyAbilityArgs");
export {
  validateGetFuzzyAbilityArgs
};
//# sourceMappingURL=fuzzyAbilityArgs.js.map