var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { baseFuzzySchema } from "#validations/fuzzyArgs/base.ts";
import { s } from "@sapphire/shapeshift";
const getFuzzyMoveSchema = baseFuzzySchema.extend({
  move: s.string
});
function validateGetFuzzyMoveArgs(args) {
  return getFuzzyMoveSchema.parse(args);
}
__name(validateGetFuzzyMoveArgs, "validateGetFuzzyMoveArgs");
export {
  validateGetFuzzyMoveArgs
};
//# sourceMappingURL=fuzzyMoveArgs.js.map