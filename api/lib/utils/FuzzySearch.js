var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jaroWinkler } from "@skyra/jaro-winkler";
class FuzzySearch {
  #collection;
  #accessKeys;
  constructor(collection, keys) {
    this.#collection = collection;
    this.#accessKeys = keys;
  }
  runFuzzy(query) {
    const results = [];
    const threshold = 0.3;
    let current;
    let lowerCaseName;
    let similarity;
    let almostExacts = 0;
    for (const [key, value] of this.#collection.entries()) {
      const resultsFromAccessKeys = [];
      for (const accessKey of this.#accessKeys) {
        current = value[accessKey];
        if (Array.isArray(current)) {
          const resultsFromArray = [];
          for (const arrayEntry of current) {
            lowerCaseName = arrayEntry.toLowerCase();
            if (lowerCaseName === query) {
              similarity = 1;
            } else {
              similarity = jaroWinkler(query, lowerCaseName);
            }
            if (similarity < threshold)
              continue;
            resultsFromArray.push([key, value, similarity]);
            if (similarity >= 0.9)
              almostExacts++;
            if (almostExacts === 10)
              break;
          }
          if (resultsFromArray.length) {
            const sorted = resultsFromArray.sort((a, b) => b[2] - a[2]);
            resultsFromAccessKeys.push(sorted[0]);
          }
        } else if (typeof current === "string") {
          lowerCaseName = current.toLowerCase();
          if (lowerCaseName === query) {
            similarity = 1;
          } else {
            similarity = jaroWinkler(query, lowerCaseName);
          }
          if (similarity < threshold)
            continue;
          resultsFromAccessKeys.push([key, value, similarity]);
          if (similarity >= 0.9)
            almostExacts++;
          if (almostExacts === 10)
            break;
        }
      }
      if (resultsFromAccessKeys.length) {
        const sorted = resultsFromAccessKeys.sort((a, b) => b[2] - a[2]);
        results.push(sorted[0]);
      }
    }
    if (!results.length)
      return [];
    const finalSortedResults = results.sort((a, b) => b[2] - a[2]);
    return finalSortedResults.map(([, value]) => value);
  }
}
__name(FuzzySearch, "FuzzySearch");
export {
  FuzzySearch
};
//# sourceMappingURL=FuzzySearch.js.map