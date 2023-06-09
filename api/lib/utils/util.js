var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { toTitleCase } from "@sapphire/utilities";
const COMMON_SYMBOLS = /[$%&'()*+,./:'<>=?{}}~!"^_`[\] .'-]/g;
const COMMON_SYMBOLS_WITHOUT_HYPHEN = /[$%&'()*+,./:'<>=?{}}~!"^_`[\] .']/g;
function toTitleSnakeCaseWithoutHyphenConvert(str) {
  return replaceSymbols(toTitleCase(str), "_", COMMON_SYMBOLS_WITHOUT_HYPHEN);
}
__name(toTitleSnakeCaseWithoutHyphenConvert, "toTitleSnakeCaseWithoutHyphenConvert");
function toLowerHyphenCase(str) {
  return replaceSymbols(str, "-").toLowerCase();
}
__name(toLowerHyphenCase, "toLowerHyphenCase");
function toLowerSingleWordCase(str) {
  return replaceSymbols(str, "").toLowerCase();
}
__name(toLowerSingleWordCase, "toLowerSingleWordCase");
function parseZCrystal(str) {
  if (str === void 0)
    return str;
  return `${toTitleCase(str.substr(0, str.length - 1))} Z`;
}
__name(parseZCrystal, "parseZCrystal");
function preParseInput(str) {
  return str.toLowerCase().trim();
}
__name(preParseInput, "preParseInput");
function replaceSymbols(str, replacement, symbols = COMMON_SYMBOLS) {
  return str.replace(symbols, replacement);
}
__name(replaceSymbols, "replaceSymbols");
export {
  parseZCrystal,
  preParseInput,
  toLowerHyphenCase,
  toLowerSingleWordCase,
  toTitleSnakeCaseWithoutHyphenConvert
};
//# sourceMappingURL=util.js.map