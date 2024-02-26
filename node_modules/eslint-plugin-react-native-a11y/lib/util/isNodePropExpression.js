"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isattrPropExpression;
var ALLOWED_TYPES = ['Identifier', 'CallExpression', 'ConditionalExpression', 'MemberExpression'];

function isattrPropExpression(attr) {
  var _attr$value;

  // $FlowFixMe
  var expression = (_attr$value = attr.value) === null || _attr$value === void 0 ? void 0 : _attr$value.expression; // $FlowFixMe

  return expression && ALLOWED_TYPES.includes(expression.type);
}