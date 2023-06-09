var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { abilities } from "#assets/abilities";
import { mapAbilityDataToAbilityGraphQL } from "#mappers/abilityMapper";
import { FuzzySearch } from "#utils/FuzzySearch";
import { preParseInput } from "#utils/util";
import { validateGetFuzzyAbilityArgs } from "#validations/fuzzyArgs/fuzzyAbilityArgs";
import { validateGetAbilityArgs } from "#validations/getAbilityArgs";
const fuzzySearch = new FuzzySearch(abilities, ["name", "aliases"]);
function getAbility(args, requestedFields) {
  args = validateGetAbilityArgs(args);
  const abilityFromDataset = abilities.get(args.ability);
  if (!abilityFromDataset) {
    throw new Error(`No ability found for ${args.ability}`);
  }
  const graphqlObject = mapAbilityDataToAbilityGraphQL({ data: abilityFromDataset, requestedFields });
  if (!graphqlObject) {
    throw new Error(`Failed to get data for ability: ${args.ability}`);
  }
  return graphqlObject;
}
__name(getAbility, "getAbility");
function getFuzzyAbility(args, requestedFields) {
  args = validateGetFuzzyAbilityArgs(args);
  let { ability } = args;
  const { offset, reverse, take } = args;
  ability = preParseInput(ability);
  const fuzzyResult = fuzzySearch.runFuzzy(ability);
  if (reverse) {
    fuzzyResult.reverse();
  }
  const fuzzyEntries = fuzzyResult.slice(offset, offset + take);
  if (!fuzzyEntries.length) {
    throw new Error(`No abilities found for: ${args.ability}`);
  }
  const graphqlObjects = fuzzyEntries.map((abilityData) => mapAbilityDataToAbilityGraphQL({ data: abilityData, requestedFields }));
  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for ability: ${args.ability}`);
  }
  return graphqlObjects;
}
__name(getFuzzyAbility, "getFuzzyAbility");
export {
  getAbility,
  getFuzzyAbility
};
//# sourceMappingURL=abilityResolvers.js.map