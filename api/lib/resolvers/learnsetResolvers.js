var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { moves } from "#assets/moves";
import { pokedex } from "#assets/pokedex";
import { mapPokemonAndMovesToLearnsetGraphQL } from "#mappers/learnsetMapper";
import { fuzzySearch as moveFuzzySearch } from "#resolvers/moveResolvers";
import { fuzzySearch as pokemonFuzzySearch } from "#resolvers/pokemonResolvers";
import { toLowerSingleWordCase } from "#utils/util";
import { validateGetLearnsetArgs } from "#validations/getLearnsetArgs";
import { lazy } from "@sapphire/utilities";
const formatter = lazy(() => new Intl.ListFormat("en", { style: "long", type: "conjunction" }));
function getLearnset(args, requestedFields) {
  args = validateGetLearnsetArgs(args);
  const graphqlObject = mapPokemonAndMovesToLearnsetGraphQL({ args, requestedFields });
  if (!graphqlObject) {
    const movesString = args.moves.length > 1 ? "moves" : "move";
    const movesList = formatter().format(args.moves);
    const generationString = args.generation ? ` with generation filter set to ${args.generation}` : "";
    throw new Error(`Failed to get learnsets for the combination of Pok\xE9mon "${args.pokemon}", and ${movesString} "${movesList}"${generationString}`);
  }
  return graphqlObject;
}
__name(getLearnset, "getLearnset");
function getFuzzyLearnset(args, requestedFields) {
  args = validateGetLearnsetArgs(args);
  const pokemonData = pokedex.get(args.pokemon);
  if (!pokemonData) {
    const fuzzyEntry = pokemonFuzzySearch.runFuzzy(args.pokemon);
    if (fuzzyEntry === void 0 || !fuzzyEntry.length) {
      throw new Error(`Failed to get data for Pok\xE9mon: ${args.pokemon}`);
    }
    args.pokemon = toLowerSingleWordCase(fuzzyEntry[0].species);
  }
  for (const [index, move] of args.moves.entries()) {
    const moveFromDataset = moves.get(move);
    if (!moveFromDataset) {
      const fuzzyEntry = moveFuzzySearch.runFuzzy(move);
      if (fuzzyEntry === void 0 || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for move: ${move}`);
      }
      args.moves[index] = toLowerSingleWordCase(fuzzyEntry[0].name);
    }
  }
  return getLearnset(args, requestedFields);
}
__name(getFuzzyLearnset, "getFuzzyLearnset");
export {
  getFuzzyLearnset,
  getLearnset
};
//# sourceMappingURL=learnsetResolvers.js.map