var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { addPropertyToObjectFieldBased } from "#utils/addPropertyToObject";
import { toLowerHyphenCase, toLowerSingleWordCase } from "#utils/util";
import { toTitleCase } from "@sapphire/utilities";
function mapItemDataToItemGraphQL({ data, requestedFields }) {
  const itemObject = {};
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "isNonstandard", propertyValue: data.isNonstandard, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: "sprite",
    propertyValue: data.specialSprite ?? `https://play.pokemonshowdown.com/sprites/itemicons/${toLowerHyphenCase(data.name)}.png`,
    requestedFields
  });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "generationIntroduced", propertyValue: data.gen, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "key", propertyValue: data.key, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "name", propertyValue: data.name, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "desc", propertyValue: data.desc, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: "shortDesc", propertyValue: data.shortDesc, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: "bulbapediaPage",
    propertyValue: `https://bulbapedia.bulbagarden.net/wiki/${toTitleCase(data.name).replace(/ /g, "_")}`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: "serebiiPage",
    propertyValue: `https://www.serebii.net/itemdex/${toLowerSingleWordCase(data.name).replaceAll("\xE9", "e")}.shtml`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: "smogonPage",
    propertyValue: `https://www.smogon.com/dex/sv/items/${toLowerHyphenCase(data.name)}`,
    requestedFields
  });
  return itemObject;
}
__name(mapItemDataToItemGraphQL, "mapItemDataToItemGraphQL");
export {
  mapItemDataToItemGraphQL
};
//# sourceMappingURL=itemMapper.js.map