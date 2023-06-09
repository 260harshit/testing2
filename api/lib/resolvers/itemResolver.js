var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { items } from "#assets/items";
import { mapItemDataToItemGraphQL } from "#mappers/itemMapper";
import { FuzzySearch } from "#utils/FuzzySearch";
import { preParseInput } from "#utils/util";
import { validateGetFuzzyItemArgs } from "#validations/fuzzyArgs/fuzzyItemArgs";
import { validateGetItemArgs } from "#validations/getItemArgs";
const fuzzySearch = new FuzzySearch(items, ["name", "aliases"]);
function getItem(args, requestedFields) {
  args = validateGetItemArgs(args);
  const itemFromDataset = items.get(args.item);
  if (!itemFromDataset) {
    throw new Error(`No item found for ${args.item}`);
  }
  const graphqlObject = mapItemDataToItemGraphQL({ data: itemFromDataset, requestedFields });
  if (!graphqlObject) {
    throw new Error(`Failed to get data for item: ${args.item}`);
  }
  return graphqlObject;
}
__name(getItem, "getItem");
function getFuzzyItem(args, requestedFields) {
  args = validateGetFuzzyItemArgs(args);
  let { item } = args;
  const { offset, reverse, take } = args;
  item = preParseInput(item);
  const fuzzyResult = fuzzySearch.runFuzzy(item);
  if (reverse) {
    fuzzyResult.reverse();
  }
  const fuzzyEntries = fuzzyResult.slice(offset, offset + take);
  if (!fuzzyEntries.length) {
    throw new Error(`No items found for: ${args.item}`);
  }
  const graphqlObjects = fuzzyEntries.map((itemData) => mapItemDataToItemGraphQL({ data: itemData, requestedFields }));
  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for item: ${args.item}`);
  }
  return graphqlObjects;
}
__name(getFuzzyItem, "getFuzzyItem");
export {
  getFuzzyItem,
  getItem
};
//# sourceMappingURL=itemResolver.js.map