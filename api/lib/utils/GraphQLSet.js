var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { cast } from "@sapphire/utilities";
class GraphQLSet extends Set {
  constructor(entries) {
    super(entries);
  }
  /**
   * Similar to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a GraphQLSet instead of an Array.
   * Also instead of receiving a callback predicate this will use `String.startsWith`.
   *
   * If the value starts with the given {@link checkString}, and {@link removeCheckString} is true,
   * then that {@link checkString} is removed from the start of the value
   * and the remaining value is added to the result.
   *
   * @param checkString The string that will be used in the `.startsWith` check
   * @param removeCheckString Whether the {@link checkString} should be removed from the start of the value
   * @example graphqlSet.filter('parentKey.');
   */
  filterStartsWith(checkString, removeCheckString = false) {
    const results = new GraphQLSet();
    for (const val of this) {
      if (typeof val === "string" && val.startsWith(checkString)) {
        const resolvedValue = cast(removeCheckString ? val.replace(checkString, "") : val);
        results.add(resolvedValue);
      }
    }
    return results;
  }
  /**
   * Similar to
   * [Set.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has),
   * but checks whether the set that has a value that starts with the given {@link checkString}.
   * This will use `String.startsWith`.
   *
   * @param checkString The string that will be used in the `.startsWith` check
   * @example graphqlSet.hasStartsWith('parentKey.');
   */
  hasStartsWith(checkString) {
    for (const val of this) {
      if (typeof val === "string" && val.startsWith(checkString)) {
        return true;
      }
    }
    return false;
  }
}
__name(GraphQLSet, "GraphQLSet");
export {
  GraphQLSet
};
//# sourceMappingURL=GraphQLSet.js.map