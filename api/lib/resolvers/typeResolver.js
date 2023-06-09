var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { mapTypesToTypeMatchupGraphQL } from "#mappers/typeMatchupMapper";
import { validateGetTypeMatchupArgs } from "#validations/getTypeMatchupArgs";
function getTypeMatchup(args, requestedFields) {
  args = validateGetTypeMatchupArgs(args);
  const entry = mapTypesToTypeMatchupGraphQL(args, requestedFields);
  if (entry === void 0) {
    const resolvedTypeMatchupArgs = args.secondaryType ? `${args.primaryType} and ${args.secondaryType}` : args.primaryType;
    throw new Error(`Failed to get type matchups for ${resolvedTypeMatchupArgs}`);
  }
  return entry;
}
__name(getTypeMatchup, "getTypeMatchup");
export {
  getTypeMatchup
};
//# sourceMappingURL=typeResolver.js.map