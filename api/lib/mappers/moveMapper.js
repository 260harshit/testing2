var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { addPropertyToObjectFieldBased } from "#utils/addPropertyToObject";
import { parseZCrystal, toLowerHyphenCase, toLowerSingleWordCase, toTitleSnakeCaseWithoutHyphenConvert } from "#utils/util";
function mapMoveDataToMoveGraphQL({ data, requestedFields }) {
  const moveObject = {};
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "key", propertyValue: data.key, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "name", propertyValue: data.name, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "desc", propertyValue: data.desc, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "shortDesc", propertyValue: data.shortDesc, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "type", propertyValue: data.type, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "contestType", propertyValue: data.contestType, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "basePower", propertyValue: data.basePower, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "pp", propertyValue: data.pp, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "category", propertyValue: data.category, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "accuracy", propertyValue: data.accuracy, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "priority", propertyValue: data.priority, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "target", propertyValue: data.target, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "isNonstandard", propertyValue: data.isNonstandard, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "isGMax", propertyValue: data.isGMax, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "isZ", propertyValue: parseZCrystal(data.isZ), requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "isFieldMove", propertyValue: data.isFieldMove, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: moveObject, propertyKey: "maxMovePower", propertyValue: data.maxMovePower, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: moveObject,
    propertyKey: "zMovePower",
    propertyValue: parseZMovePower(data.basePower, data.zMovePower),
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: moveObject,
    propertyKey: "serebiiPage",
    propertyValue: `https://www.serebii.net/attackdex-swsh/${toLowerSingleWordCase(data.name)}.shtml`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: moveObject,
    propertyKey: "bulbapediaPage",
    propertyValue: `https://bulbapedia.bulbagarden.net/wiki/${toTitleSnakeCaseWithoutHyphenConvert(data.name)}_(move)`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: moveObject,
    propertyKey: "smogonPage",
    propertyValue: `https://www.smogon.com/dex/ss/moves/${toLowerHyphenCase(data.name)}`,
    requestedFields
  });
  return moveObject;
}
__name(mapMoveDataToMoveGraphQL, "mapMoveDataToMoveGraphQL");
function parseZMovePower(basePower, zMovePower) {
  if (typeof zMovePower === "number")
    return zMovePower;
  if (basePower === "0")
    return 0;
  const basePowerAsNumber = Number(basePower);
  if (basePowerAsNumber >= 0 && basePowerAsNumber <= 55)
    return 100;
  if (basePowerAsNumber >= 60 && basePowerAsNumber <= 65)
    return 120;
  if (basePowerAsNumber >= 70 && basePowerAsNumber <= 75)
    return 140;
  if (basePowerAsNumber >= 80 && basePowerAsNumber <= 85)
    return 160;
  if (basePowerAsNumber >= 90 && basePowerAsNumber <= 95)
    return 175;
  if (basePowerAsNumber === 100)
    return 180;
  if (basePowerAsNumber === 110)
    return 185;
  if (basePowerAsNumber >= 120 && basePowerAsNumber <= 125)
    return 190;
  if (basePowerAsNumber === 130)
    return 195;
  if (basePowerAsNumber >= 140)
    return 200;
  return 0;
}
__name(parseZMovePower, "parseZMovePower");
export {
  mapMoveDataToMoveGraphQL
};
//# sourceMappingURL=moveMapper.js.map