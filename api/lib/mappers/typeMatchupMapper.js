var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { typechart } from "#assets/typechart";
import { addPropertyToObjectFieldBased } from "#utils/addPropertyToObject";
import { filterNullish } from "@sapphire/utilities";
function mapTypesToTypeMatchupGraphQL(args, requestedFields) {
  const atk = {
    doubleEffectiveTypes: [],
    doubleResistedTypes: [],
    effectiveTypes: [],
    effectlessTypes: [],
    multi: {
      bug: 1,
      dark: 1,
      dragon: 1,
      electric: 1,
      fairy: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      steel: 1,
      water: 1
    },
    normalTypes: [],
    resistedTypes: []
  };
  const def = JSON.parse(JSON.stringify(atk));
  if (args.primaryType === args.secondaryType) {
    args.secondaryType = null;
  }
  const typesAsArray = [args.primaryType, args.secondaryType].filter(filterNullish);
  for (const curType of typesAsArray) {
    const dDealt = typechart.get(curType).damageDealt;
    const dTaken = typechart.get(curType).damageTaken;
    for (const [type, multiplier] of Object.entries(dTaken)) {
      switch (multiplier) {
        case 1:
          def.multi[type] *= 2;
          break;
        case 2:
          def.multi[type] *= 0.5;
          break;
        case 3:
          def.multi[type] = 0;
          break;
      }
    }
    for (const [type, multiplier] of Object.entries(dDealt)) {
      switch (multiplier) {
        case 1:
          atk.multi[type] *= 2;
          break;
        case 2:
          atk.multi[type] *= 0.5;
          break;
        case 3:
          atk.multi[type] = 0;
          break;
      }
    }
  }
  const attackingTypeEntry = {};
  const defendingTypeEntry = {};
  if (requestedFields.has("attacking")) {
    for (const [attack, multiplier] of Object.entries(atk.multi)) {
      switch (multiplier) {
        case 0:
          atk.effectlessTypes.push(attack);
          break;
        case 0.25:
          atk.doubleResistedTypes.push(attack);
          break;
        case 0.5:
          atk.resistedTypes.push(attack);
          break;
        case 1:
          atk.normalTypes.push(attack);
          break;
        case 2:
          atk.effectiveTypes.push(attack);
          break;
        case 4:
          atk.doubleEffectiveTypes.push(attack);
          break;
      }
    }
    const attackingTypeEntryFields = requestedFields.filterStartsWith("attacking.", true);
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "doubleEffectiveTypes",
      propertyValue: atk.doubleEffectiveTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "doubleResistedTypes",
      propertyValue: atk.doubleResistedTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "effectiveTypes",
      propertyValue: atk.effectiveTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "effectlessTypes",
      propertyValue: atk.effectlessTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "normalTypes",
      propertyValue: atk.normalTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: "resistedTypes",
      propertyValue: atk.resistedTypes,
      requestedFields: attackingTypeEntryFields
    });
  }
  if (requestedFields.has("defending")) {
    for (const [defense, multiplier] of Object.entries(def.multi)) {
      switch (multiplier) {
        case 0:
          def.effectlessTypes.push(defense);
          break;
        case 0.25:
          def.doubleResistedTypes.push(defense);
          break;
        case 0.5:
          def.resistedTypes.push(defense);
          break;
        case 1:
          def.normalTypes.push(defense);
          break;
        case 2:
          def.effectiveTypes.push(defense);
          break;
        case 4:
          def.doubleEffectiveTypes.push(defense);
          break;
      }
    }
    const defendingTypeEntryFields = requestedFields.filterStartsWith("defending.", true);
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "doubleEffectiveTypes",
      propertyValue: def.doubleEffectiveTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "doubleResistedTypes",
      propertyValue: def.doubleResistedTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "effectiveTypes",
      propertyValue: def.effectiveTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "effectlessTypes",
      propertyValue: def.effectlessTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "normalTypes",
      propertyValue: def.normalTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: "resistedTypes",
      propertyValue: def.resistedTypes,
      requestedFields: defendingTypeEntryFields
    });
  }
  const typeMatchups = {};
  addPropertyToObjectFieldBased({ objectTarget: typeMatchups, propertyKey: "attacking", propertyValue: attackingTypeEntry, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: typeMatchups, propertyKey: "defending", propertyValue: defendingTypeEntry, requestedFields });
  return typeMatchups;
}
__name(mapTypesToTypeMatchupGraphQL, "mapTypesToTypeMatchupGraphQL");
export {
  mapTypesToTypeMatchupGraphQL
};
//# sourceMappingURL=typeMatchupMapper.js.map