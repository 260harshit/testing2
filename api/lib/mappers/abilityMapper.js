var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { pokedex } from "#assets/pokedex";
import { mapPokemonDataToPokemonGraphQL, PokemonReferencedCallIdentifier } from "#mappers/pokemonMapper";
import { addPropertyToObjectFieldBased } from "#utils/addPropertyToObject";
import { isNullishOrEmpty, toTitleCase } from "@sapphire/utilities";
function mapAbilityDataToAbilityGraphQL({
  data,
  requestedFields,
  referencedCall = "none" /* None */
}) {
  const abilityObject = {};
  addPropertyToObjectFieldBased({ objectTarget: abilityObject, propertyKey: "key", propertyValue: data.key, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: abilityObject, propertyKey: "name", propertyValue: data.name, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: abilityObject, propertyKey: "desc", propertyValue: data.desc, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: abilityObject, propertyKey: "shortDesc", propertyValue: data.shortDesc, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: abilityObject,
    propertyKey: "isFieldAbility",
    propertyValue: data.isFieldAbility,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilityObject,
    propertyKey: "bulbapediaPage",
    propertyValue: `https://bulbapedia.bulbagarden.net/wiki/${toTitleCase(data.name).replace(/ /g, "_")}_(Ability)`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilityObject,
    propertyKey: "serebiiPage",
    propertyValue: `https://www.serebii.net/abilitydex/${data.name.replace(/ /g, "_").toLowerCase()}.shtml`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilityObject,
    propertyKey: "smogonPage",
    propertyValue: `https://www.smogon.com/dex/ss/abilities/${data.name.toLowerCase().replace(/ /g, "_")}`,
    requestedFields
  });
  if (requestedFields.hasStartsWith("pokemonThatHaveThisAbility.")) {
    if (referencedCall === "pokemonToAbility" /* PokemonToAbility */) {
      Reflect.set(abilityObject, "pokemonThatHaveThisAbility", []);
    } else {
      const pokemonThatHaveThisAbility = pokedex.filter(
        (pokemon) => !isNullishOrEmpty(pokemon.abilities.first) && pokemon.abilities.first === data.key || !isNullishOrEmpty(pokemon.abilities.second) && pokemon.abilities.second === data.key || !isNullishOrEmpty(pokemon.abilities.hidden) && pokemon.abilities.hidden === data.key || !isNullishOrEmpty(pokemon.abilities.special) && pokemon.abilities.special === data.key
      );
      let pokemonData = [];
      if (pokemonThatHaveThisAbility.size) {
        const pokemonFields = requestedFields.filterStartsWith("pokemonThatHaveThisAbility.", true);
        pokemonData = pokemonThatHaveThisAbility.map(
          (pokemon) => mapPokemonDataToPokemonGraphQL({
            data: pokemon,
            requestedFields: pokemonFields,
            referencedCall: PokemonReferencedCallIdentifier.AbilityToPokemon,
            offsetFlavorTexts: 0,
            takeFlavorTexts: 1,
            reverseFlavorTexts: true
          })
        );
      }
      Reflect.set(abilityObject, "pokemonThatHaveThisAbility", pokemonData);
    }
  }
  return abilityObject;
}
__name(mapAbilityDataToAbilityGraphQL, "mapAbilityDataToAbilityGraphQL");
var AbilityReferencedCallIdentifier = /* @__PURE__ */ ((AbilityReferencedCallIdentifier2) => {
  AbilityReferencedCallIdentifier2["None"] = "none";
  AbilityReferencedCallIdentifier2["PokemonToAbility"] = "pokemonToAbility";
  return AbilityReferencedCallIdentifier2;
})(AbilityReferencedCallIdentifier || {});
export {
  AbilityReferencedCallIdentifier,
  mapAbilityDataToAbilityGraphQL
};
//# sourceMappingURL=abilityMapper.js.map