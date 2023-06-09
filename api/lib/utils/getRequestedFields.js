var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GraphQLSet } from "#utils/GraphQLSet";
import { parseResolveInfo } from "graphql-parse-resolve-info";
function infoIsResolveTree(info) {
  if (!info)
    return false;
  return info.fieldsByTypeName !== void 0;
}
__name(infoIsResolveTree, "infoIsResolveTree");
function collectRequestedFields(fieldsToParse, collectedFields = new GraphQLSet(), parent = "") {
  for (const fieldValue of Object.values(fieldsToParse)) {
    if (Object.keys(fieldValue.fieldsByTypeName).length === 0) {
      if (parent && !collectedFields.has(parent)) {
        collectedFields.add(parent);
      }
      collectedFields.add(`${parent ? `${parent}.` : ""}${fieldValue.name}`);
    } else {
      collectRequestedFields(Object.values(fieldValue.fieldsByTypeName)[0], collectedFields, `${parent ? `${parent}.` : ""}${fieldValue.name}`);
    }
  }
  return collectedFields;
}
__name(collectRequestedFields, "collectRequestedFields");
function graphqlResolveInfoToRequestedFields(info) {
  const resolvedInfo = parseResolveInfo(info, { deep: true });
  if (infoIsResolveTree(resolvedInfo)) {
    return collectRequestedFields(Object.values(resolvedInfo.fieldsByTypeName)[0]);
  }
  return new GraphQLSet();
}
__name(graphqlResolveInfoToRequestedFields, "graphqlResolveInfoToRequestedFields");
export {
  graphqlResolveInfoToRequestedFields
};
//# sourceMappingURL=getRequestedFields.js.map