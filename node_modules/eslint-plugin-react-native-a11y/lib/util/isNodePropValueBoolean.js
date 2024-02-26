"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isattrPropValueBoolean;

var _isNodePropExpression = _interopRequireDefault(require("./isNodePropExpression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isattrPropValueBoolean(attr) {
  /**
   * Using `typeof getLiteralPropValue(attr) === 'boolean'` with getLiteralPropValue/getPropValue
   * from `jsx-ast-utils` doesn't work as expected, because it "converts" strings `"true"` and `"false"`
   * to booleans `true` and `false`. This function aims to correctly identify uses of the string instead
   * of the boolean, so that we can correctly identify this error.
   */
  var isExpression = (0, _isNodePropExpression.default)(attr);

  if (isExpression || attr.value === null) {
    // we can't determine the resulting value type of JSXExpressions
    // attr.value is null when it is declared as a prop but not equal to anything. This defaults to `true` in JSX
    // treat these cases as though they are valid
    return true;
  } else {
    // $FlowFixMe
    var expression = attr.value.expression;

    if ((expression === null || expression === void 0 ? void 0 : expression.type) !== 'Literal') {
      // If not a literal, it cannot be a boolean
      return false;
    } // $FlowFixMe


    return typeof (expression === null || expression === void 0 ? void 0 : expression.value) === 'boolean';
  }
}