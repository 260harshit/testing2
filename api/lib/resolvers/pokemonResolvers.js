var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { pokedex } from "#assets/pokedex";
import { mapPokemonDataToPokemonGraphQL } from "#mappers/pokemonMapper";
import { FuzzySearch } from "#utils/FuzzySearch";
import { preParseInput } from "#utils/util";
import { validateGetAllPokemonArgs } from "#validations/pokemonArgs/getAllPokemonArgs";
import { validateGetFuzzyPokemonArgs } from "#validations/pokemonArgs/getFuzzyPokemonArgs";
import { validateGetPokemonArgs } from "#validations/pokemonArgs/getPokemonArgs";
import { validateGetPokemonByDexNumberArgs } from "#validations/pokemonArgs/getPokemonByDexNumberArgs";
const fuzzySearch = new FuzzySearch(pokedex, ["num", "species", "aliases"]);
function getPokemonByDexNumber(args, requestedFields) {
  args = validateGetPokemonByDexNumberArgs(args);
  const pokemonFromDataset = pokedex.find((pokemon) => pokemon.num === args.number);
  if (!pokemonFromDataset) {
    throw new Error(`No Pok\xE9mon found for ${args.number}`);
  }
  const graphqlObject = mapPokemonDataToPokemonGraphQL({
    data: pokemonFromDataset,
    requestedFields,
    offsetFlavorTexts: args.offsetFlavorTexts,
    reverseFlavorTexts: args.reverseFlavorTexts,
    takeFlavorTexts: args.takeFlavorTexts
  });
  if (!graphqlObject) {
    throw new Error(`Failed to get data for Pok\xE9mon: ${args.number}`);
  }
  return graphqlObject;
}
__name(getPokemonByDexNumber, "getPokemonByDexNumber");
function getPokemon(args, requestedFields) {
  args = validateGetPokemonArgs(args);
  const pokemonData = pokedex.get(args.pokemon);
  if (!pokemonData) {
    throw new Error(`No Pok\xE9mon found for ${args.pokemon}`);
  }
  const graphqlObject = mapPokemonDataToPokemonGraphQL({
    data: pokemonData,
    offsetFlavorTexts: args.offsetFlavorTexts,
    reverseFlavorTexts: args.reverseFlavorTexts,
    takeFlavorTexts: args.takeFlavorTexts,
    requestedFields
  });
  if (!graphqlObject) {
    throw new Error(`Failed to get data for Pok\xE9mon: ${args.pokemon}`);
  }
  return graphqlObject;
}
__name(getPokemon, "getPokemon");
function getAllPokemon(args, requestedFields) {
  args = validateGetAllPokemonArgs(args);
  const clonedPokedex = pokedex.clone();
  if (args.reverse) {
    clonedPokedex.reverse();
  }
  const pokemonValues = [...clonedPokedex.values()].slice(args.offset, args.offset + args.take);
  const graphqlObjects = [];
  for (const pokemonData of pokemonValues) {
    graphqlObjects.push(
      mapPokemonDataToPokemonGraphQL({
        data: pokemonData,
        requestedFields,
        offsetFlavorTexts: 0,
        reverseFlavorTexts: true,
        takeFlavorTexts: 1
      })
    );
  }
  if (!graphqlObjects.length) {
    throw new Error("Failed to get data for Pok\xE9mon");
  }
  return graphqlObjects;
}
__name(getAllPokemon, "getAllPokemon");
function getFuzzyPokemon(args, requestedFields) {
  args = validateGetFuzzyPokemonArgs(args);
  args.pokemon = parseFormeIdentifiers(preParseInput(args.pokemon));
  let fuzzyEntries = fuzzySearch.runFuzzy(args.pokemon);
  if (!fuzzyEntries.length) {
    throw new Error(`No Pok\xE9mon found for ${args.pokemon}`);
  }
  if (args.reverse) {
    fuzzyEntries.reverse();
  }
  fuzzyEntries = fuzzyEntries.slice(args.offset, args.offset + args.take);
  const graphqlObjects = [];
  for (const pokemonData of fuzzyEntries) {
    graphqlObjects.push(
      mapPokemonDataToPokemonGraphQL({
        data: pokemonData,
        requestedFields,
        offsetFlavorTexts: args.offsetFlavorTexts,
        reverseFlavorTexts: args.reverseFlavorTexts,
        takeFlavorTexts: args.takeFlavorTexts
      })
    );
  }
  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for Pok\xE9mon: ${args.pokemon}`);
  }
  return graphqlObjects;
}
__name(getFuzzyPokemon, "getFuzzyPokemon");
function parseFormeIdentifiers(pokemon) {
  switch (pokemon.split(" ")[0]) {
    case "mega":
      pokemon = `${pokemon.substring(pokemon.split(" ")[0].length + 1)}-mega`;
      break;
    case "gigantamax":
    case "gmax":
      pokemon = `${pokemon.substring(pokemon.split(" ")[0].length + 1)}-gmax`;
      break;
    case "alola":
    case "alolan":
      pokemon = `${pokemon.substring(pokemon.split(" ")[0].length + 1)}-alola`;
      break;
    case "galar":
    case "galarian":
      pokemon = `${pokemon.substring(pokemon.split(" ")[0].length + 1)}-galar`;
      break;
    case "paldea":
    case "paldean":
      pokemon = `${pokemon.substring(pokemon.split(" ")[0].length + 1)}-paldea`;
      break;
    default:
      break;
  }
  if (pokemon.startsWith("mega")) {
    pokemon = `${pokemon.substring(4, pokemon.length)}mega`;
  }
  if (pokemon.startsWith("gigantamax")) {
    pokemon = `${pokemon.substring(10, pokemon.length)}gmax`;
  } else if (pokemon.startsWith("gmax")) {
    pokemon = `${pokemon.substring(4, pokemon.length)}gmax`;
  }
  if (pokemon.startsWith("alolan")) {
    pokemon = `${pokemon.substring(6, pokemon.length)}alola`;
  } else if (pokemon.startsWith("alola")) {
    pokemon = `${pokemon.substring(5, pokemon.length)}alola`;
  }
  if (pokemon.startsWith("galarian")) {
    pokemon = `${pokemon.substring(8, pokemon.length)}galar`;
  } else if (pokemon.startsWith("galar")) {
    pokemon = `${pokemon.substring(5, pokemon.length)}galar`;
  }
  if (pokemon.startsWith("paldean")) {
    pokemon = `${pokemon.substring(7, pokemon.length)}paldea`;
  } else if (pokemon.startsWith("paldea")) {
    pokemon = `${pokemon.substring(6, pokemon.length)}paldea`;
  }
  return pokemon;
}
__name(parseFormeIdentifiers, "parseFormeIdentifiers");
export {
  fuzzySearch,
  getAllPokemon,
  getFuzzyPokemon,
  getPokemon,
  getPokemonByDexNumber
};
//# sourceMappingURL=pokemonResolvers.js.map