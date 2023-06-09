var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { toLowerSingleWordCase } from "#utils/util";
const MegaSpriteRegex = /^(.+)-(x|y)$/g;
const SpriteUrls = {
  baseUrl: "https://play.pokemonshowdown.com/sprites/",
  animatedShinyBackSprites: "ani-back-shiny/",
  animatedBackSprites: "ani-back/",
  animatedSprites: "ani/",
  animatedShinySprites: "ani-shiny/"
};
const Gen9SpriteUrls = {
  animatedShinyBackSprites: "gen5-back-shiny/",
  animatedBackSprites: "gen5-back/",
  animatedSprites: "gen5/",
  animatedShinySprites: "gen5-shiny/"
};
const parseSpeciesForSprite = /* @__PURE__ */ __name(({
  pokemonName,
  pokemonNumber,
  baseSpecies,
  specialSprite,
  specialShinySprite,
  specialBackSprite,
  specialShinyBackSprite,
  shiny = false,
  backSprite = false
}) => {
  if (shiny && backSprite && specialShinyBackSprite)
    return specialShinyBackSprite;
  if (backSprite && specialBackSprite)
    return specialBackSprite;
  if (shiny && specialShinySprite)
    return specialShinySprite;
  if (specialSprite)
    return specialSprite;
  if (!baseSpecies) {
    pokemonName = toLowerSingleWordCase(pokemonName);
  }
  if (pokemonName.match(MegaSpriteRegex)) {
    pokemonName = pokemonName.replace(MegaSpriteRegex, "$1$2");
  }
  if (pokemonNumber >= 906) {
    const pokemonPng = `${pokemonName}.png`;
    if (shiny && backSprite)
      return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinyBackSprites + pokemonPng;
    if (backSprite)
      return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedBackSprites + pokemonPng;
    if (shiny)
      return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinySprites + pokemonPng;
    return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedSprites + pokemonPng;
  }
  const pokemonGif = `${pokemonName}.gif`;
  if (shiny && backSprite)
    return SpriteUrls.baseUrl + SpriteUrls.animatedShinyBackSprites + pokemonGif;
  if (backSprite)
    return SpriteUrls.baseUrl + SpriteUrls.animatedBackSprites + pokemonGif;
  if (shiny)
    return SpriteUrls.baseUrl + SpriteUrls.animatedShinySprites + pokemonGif;
  return SpriteUrls.baseUrl + SpriteUrls.animatedSprites + pokemonGif;
}, "parseSpeciesForSprite");
export {
  parseSpeciesForSprite
};
//# sourceMappingURL=spriteParser.js.map