var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { baseFuzzySchema } from "#validations/fuzzyArgs/base.ts";
import { s } from "@sapphire/shapeshift";
const getFuzzyItemSchema = baseFuzzySchema.extend({
  item: s.string
});
function validateGetFuzzyItemArgs(args) {
  return getFuzzyItemSchema.parse(args);
}
__name(validateGetFuzzyItemArgs, "validateGetFuzzyItemArgs");
export {
  validateGetFuzzyItemArgs
};
//# sourceMappingURL=fuzzyItemArgs.js.map