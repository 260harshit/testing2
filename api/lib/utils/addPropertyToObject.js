var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { isFunction, isNullish } from "@sapphire/utilities";
function addPropertyToObjectConditional({
  objectTarget,
  propertyKey,
  propertyValue,
  condition
}) {
  if (condition) {
    addPropertyToObject({
      objectTarget,
      propertyKey,
      propertyValue
    });
  }
  return objectTarget;
}
__name(addPropertyToObjectConditional, "addPropertyToObjectConditional");
function addPropertyToObjectFieldBased({
  objectTarget,
  propertyKey,
  propertyValue,
  requestedFields,
  fieldAccessor = propertyKey
}) {
  if (requestedFields.has(fieldAccessor)) {
    addPropertyToObject({
      objectTarget,
      propertyKey,
      propertyValue
    });
  }
  return objectTarget;
}
__name(addPropertyToObjectFieldBased, "addPropertyToObjectFieldBased");
function addPropertyToObject({
  objectTarget,
  propertyKey,
  propertyValue
}) {
  const resolvedPropertyValue = isFunction(propertyValue) ? propertyValue() : propertyValue;
  if (!isNullish(resolvedPropertyValue)) {
    Reflect.set(objectTarget, propertyKey, resolvedPropertyValue);
  }
}
__name(addPropertyToObject, "addPropertyToObject");
export {
  addPropertyToObjectConditional,
  addPropertyToObjectFieldBased
};
//# sourceMappingURL=addPropertyToObject.js.map