var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { learnsets } from "#assets/learnsets";
import { moves } from "#assets/moves";
import { pokedex } from "#assets/pokedex";
import { mapMoveDataToMoveGraphQL } from "#mappers/moveMapper";
import { addPropertyToObjectFieldBased } from "#utils/addPropertyToObject";
import { parseSpeciesForSprite } from "#utils/spriteParser";
import { toLowerSingleWordCase } from "#utils/util";
import { cast, isNullish } from "@sapphire/utilities";
function mapPokemonAndMovesToLearnsetGraphQL({ args, requestedFields }) {
  const learnsetFromDataset = getLearnsetDataset(args.pokemon);
  if (isNullish(learnsetFromDataset)) {
    return null;
  }
  const learnset = {};
  if (learnsetFromDataset.eventOnly === void 0) {
    const levelupMoves = [];
    const virtualTransferMoves = [];
    const tutorMoves = [];
    const tmMoves = [];
    const eggMoves = [];
    const eventMoves = [];
    const dreamworldMoves = [];
    for (const move of args.moves) {
      if (Reflect.has(learnsetFromDataset, move)) {
        const methods = learnsetFromDataset[move];
        const {
          virtualTransferMoves: generationalVirtualTransferMoves,
          tutorMoves: generationalTutorMoves,
          tmMoves: generationalTmMoves,
          eggMoves: generationalEggMoves,
          eventMoves: generationalEventMoves,
          dreamworldMoves: generationalDreamworldMoves,
          levelupMoves: generationalLevelupMoves
        } = mapMoveAndMethodsToLearnsets({ move, methods, generation: args.generation, requestedFields });
        levelupMoves.push(...generationalLevelupMoves);
        virtualTransferMoves.push(...generationalVirtualTransferMoves);
        tutorMoves.push(...generationalTutorMoves);
        tmMoves.push(...generationalTmMoves);
        eggMoves.push(...generationalEggMoves);
        eventMoves.push(...generationalEventMoves);
        dreamworldMoves.push(...generationalDreamworldMoves);
      }
    }
    addLearnsetPropertiesToGraphQLObject({
      objectTarget: learnset,
      data: {
        virtualTransferMoves,
        tutorMoves,
        tmMoves,
        eggMoves,
        eventMoves,
        dreamworldMoves,
        levelupMoves
      },
      requestedFields: cast(requestedFields)
    });
  }
  if (shouldIncludePokemonDetails(requestedFields)) {
    const pokemonEntry = pokedex.get(args.pokemon);
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "sprite",
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "shinySprite",
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        shiny: true
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "backSprite",
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        backSprite: true
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "shinyBackSprite",
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        shiny: true,
        backSprite: true
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "num",
      propertyValue: pokemonEntry.num,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "pokemonKey",
      propertyValue: pokemonEntry.key,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "color",
      propertyValue: pokemonEntry.color,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: "species",
      propertyValue: pokemonEntry.species,
      requestedFields
    });
  }
  return learnset;
}
__name(mapPokemonAndMovesToLearnsetGraphQL, "mapPokemonAndMovesToLearnsetGraphQL");
function getLearnsetDataset(pokemon) {
  let learnsetFromDataset = learnsets.get(pokemon);
  let pokemonFromDataset = void 0;
  if (learnsetFromDataset?.eventOnly?.[0] === "See base forme of this Pok\xE9mon") {
    learnsetFromDataset = void 0;
  }
  if (!learnsetFromDataset) {
    pokemonFromDataset = pokedex.get(toLowerSingleWordCase(pokemon));
    learnsetFromDataset = learnsets.get(toLowerSingleWordCase(pokemonFromDataset?.baseSpecies ?? ""));
  }
  if (!learnsetFromDataset) {
    if (!pokemonFromDataset) {
      pokemonFromDataset = pokedex.get(toLowerSingleWordCase(pokemon));
    }
    for (const otherForm of pokemonFromDataset?.otherFormes ?? []) {
      learnsetFromDataset = learnsets.get(toLowerSingleWordCase(otherForm));
      if (learnsetFromDataset) {
        break;
      }
    }
  }
  return learnsetFromDataset ?? null;
}
__name(getLearnsetDataset, "getLearnsetDataset");
function mapPokemonToPokemonLearnsetGraphQL({
  learnsetFromDataset,
  generation,
  requestedFields
}) {
  const pokemonLearnset = {};
  if (learnsetFromDataset.eventOnly === void 0) {
    const levelupMoves = [];
    const virtualTransferMoves = [];
    const tutorMoves = [];
    const tmMoves = [];
    const eggMoves = [];
    const eventMoves = [];
    const dreamworldMoves = [];
    for (const [move, methods] of Object.entries(learnsetFromDataset)) {
      const {
        virtualTransferMoves: generationalVirtualTransferMoves,
        tutorMoves: generationalTutorMoves,
        tmMoves: generationalTmMoves,
        eggMoves: generationalEggMoves,
        eventMoves: generationalEventMoves,
        dreamworldMoves: generationalDreamworldMoves,
        levelupMoves: generationalLevelupMoves
      } = mapMoveAndMethodsToLearnsets({ move, methods, generation, requestedFields });
      levelupMoves.push(...generationalLevelupMoves);
      virtualTransferMoves.push(...generationalVirtualTransferMoves);
      tutorMoves.push(...generationalTutorMoves);
      tmMoves.push(...generationalTmMoves);
      eggMoves.push(...generationalEggMoves);
      eventMoves.push(...generationalEventMoves);
      dreamworldMoves.push(...generationalDreamworldMoves);
    }
    addLearnsetPropertiesToGraphQLObject({
      objectTarget: pokemonLearnset,
      data: {
        levelupMoves,
        virtualTransferMoves,
        tutorMoves,
        tmMoves,
        eggMoves,
        eventMoves,
        dreamworldMoves
      },
      requestedFields
    });
  }
  return pokemonLearnset;
}
__name(mapPokemonToPokemonLearnsetGraphQL, "mapPokemonToPokemonLearnsetGraphQL");
function mapMoveAndMethodsToLearnsets({ move, methods, generation, requestedFields }) {
  const levelupMoves = [];
  const virtualTransferMoves = [];
  const tutorMoves = [];
  const tmMoves = [];
  const eggMoves = [];
  const eventMoves = [];
  const dreamworldMoves = [];
  for (const method of methods) {
    if (generation && getMethodGeneration(method) !== generation)
      continue;
    switch (getMethodType(method)) {
      case "L":
        if (requestedFields.has("levelUpMoves")) {
          levelupMoves.push(
            createLevelupMove({
              move,
              level: getMethodLevel(method),
              generation: getMethodGeneration(method),
              requestedFields
            })
          );
        }
        break;
      case "V":
        if (requestedFields.has("virtualTransferMoves")) {
          virtualTransferMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "virtualTransferMoves.move."
            })
          );
        }
        break;
      case "T":
        if (requestedFields.has("tutorMoves")) {
          tutorMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "tutorMoves.move."
            })
          );
        }
        break;
      case "M":
        if (requestedFields.has("tmMoves")) {
          tmMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "tmMoves.move."
            })
          );
        }
        break;
      case "E":
        if (requestedFields.has("eggMoves")) {
          eggMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "eggMoves.move."
            })
          );
        }
        break;
      case "S":
        if (requestedFields.has("eventMoves")) {
          eventMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "eventMoves.move."
            })
          );
        }
        break;
      case "D":
        if (requestedFields.has("dreamworldMoves")) {
          dreamworldMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: "eggMoves.move."
            })
          );
        }
        break;
    }
  }
  return {
    levelupMoves,
    virtualTransferMoves,
    tutorMoves,
    tmMoves,
    eggMoves,
    eventMoves,
    dreamworldMoves
  };
}
__name(mapMoveAndMethodsToLearnsets, "mapMoveAndMethodsToLearnsets");
function addLearnsetPropertiesToGraphQLObject({ objectTarget, data, requestedFields }) {
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "levelUpMoves",
    propertyValue: data.levelupMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "virtualTransferMoves",
    propertyValue: data.virtualTransferMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "tutorMoves",
    propertyValue: data.tutorMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "tmMoves",
    propertyValue: data.tmMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "eggMoves",
    propertyValue: data.eggMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "eventMoves",
    propertyValue: data.eventMoves,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: "dreamworldMoves",
    propertyValue: data.dreamworldMoves,
    requestedFields
  });
}
__name(addLearnsetPropertiesToGraphQLObject, "addLearnsetPropertiesToGraphQLObject");
function createLearnsetMove({ move, generation, requestedFields, requestedFieldsPrefix }) {
  const moveData = moves.get(move);
  const requestedMoveFields = requestedFields.filterStartsWith(requestedFieldsPrefix, true);
  return {
    move: mapMoveDataToMoveGraphQL({ data: moveData, requestedFields: requestedMoveFields }),
    generation
  };
}
__name(createLearnsetMove, "createLearnsetMove");
function createLevelupMove({ level, ...params }) {
  return {
    ...createLearnsetMove({ ...params, requestedFieldsPrefix: "levelUpMoves.move." }),
    level
  };
}
__name(createLevelupMove, "createLevelupMove");
function getMethodGeneration(method) {
  return parseInt(method.slice(0, 1), 10);
}
__name(getMethodGeneration, "getMethodGeneration");
function getMethodLevel(method) {
  return parseInt(method.slice(2), 10);
}
__name(getMethodLevel, "getMethodLevel");
function getMethodType(method) {
  return method.slice(1, 2);
}
__name(getMethodType, "getMethodType");
function shouldIncludePokemonDetails(requestedFields) {
  return requestedFields.has("sprite") || requestedFields.has("backSprite") || requestedFields.has("shinySprite") || requestedFields.has("shinyBackSprite") || requestedFields.has("num") || requestedFields.has("color") || requestedFields.has("species");
}
__name(shouldIncludePokemonDetails, "shouldIncludePokemonDetails");
export {
  getLearnsetDataset,
  mapPokemonAndMovesToLearnsetGraphQL,
  mapPokemonToPokemonLearnsetGraphQL
};
//# sourceMappingURL=learnsetMapper.js.map