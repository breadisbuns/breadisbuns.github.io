"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOneOf;

/**
 * Returns boolean indicating whether a value to check
 * is one of a given set of values.
 * 
 */
// should be expanded to work with more than just strings
// as and when it's needed
function isOneOf() {
  var toCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return values.includes(toCheck);
}