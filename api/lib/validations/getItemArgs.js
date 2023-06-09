var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s } from "@sapphire/shapeshift";
const getItemSchema = s.object({
  item: s.string
});
function validateGetItemArgs(args) {
  return getItemSchema.parse(args);
}
__name(validateGetItemArgs, "validateGetItemArgs");
export {
  validateGetItemArgs
};
//# sourceMappingURL=getItemArgs.js.map