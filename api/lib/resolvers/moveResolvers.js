var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { moves } from "#assets/moves";
import { mapMoveDataToMoveGraphQL } from "#mappers/moveMapper";
import { FuzzySearch } from "#utils/FuzzySearch";
import { preParseInput } from "#utils/util";
import { validateGetFuzzyMoveArgs } from "#validations/fuzzyArgs/fuzzyMoveArgs";
import { validateGetMoveArgs } from "#validations/getMoveArgs";
const fuzzySearch = new FuzzySearch(moves, ["name", "aliases"]);
function getMove(args, requestedFields) {
  args = validateGetMoveArgs(args);
  const moveFromDataset = moves.get(args.move);
  if (!moveFromDataset) {
    throw new Error(`No move found for ${args.move}`);
  }
  const graphqlObject = mapMoveDataToMoveGraphQL({ data: moveFromDataset, requestedFields });
  if (!graphqlObject) {
    throw new Error(`Failed to get data for move: ${args.move}`);
  }
  return graphqlObject;
}
__name(getMove, "getMove");
function getFuzzyMove(args, requestedFields) {
  args = validateGetFuzzyMoveArgs(args);
  let { move } = args;
  const { offset, reverse, take } = args;
  move = preParseInput(move);
  const fuzzyResult = fuzzySearch.runFuzzy(move);
  if (reverse) {
    fuzzyResult.reverse();
  }
  const fuzzyEntries = fuzzyResult.slice(offset, offset + take);
  if (!fuzzyEntries.length) {
    throw new Error(`No moves found for: ${args.move}`);
  }
  const graphqlObjects = fuzzyEntries.map((moveData) => mapMoveDataToMoveGraphQL({ data: moveData, requestedFields }));
  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for move: ${args.move}`);
  }
  return graphqlObjects;
}
__name(getFuzzyMove, "getFuzzyMove");
export {
  fuzzySearch,
  getFuzzyMove,
  getMove
};
//# sourceMappingURL=moveResolvers.js.map