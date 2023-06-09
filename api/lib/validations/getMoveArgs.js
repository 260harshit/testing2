var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s } from "@sapphire/shapeshift";
const getMoveSchema = s.object({
  move: s.string
});
function validateGetMoveArgs(args) {
  return getMoveSchema.parse(args);
}
__name(validateGetMoveArgs, "validateGetMoveArgs");
export {
  validateGetMoveArgs
};
//# sourceMappingURL=getMoveArgs.js.map