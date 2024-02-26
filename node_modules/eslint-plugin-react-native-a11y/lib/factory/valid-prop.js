"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxAstUtils = require("jsx-ast-utils");

var _schemas = require("../util/schemas");

var _isOneOf = _interopRequireDefault(require("../util/isOneOf"));

var _isNodePropExpression = _interopRequireDefault(require("../util/isNodePropExpression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Produces an ESLint rule that validates a prop against an array of acceptable values
 *
 * @param {string} propName Name of prop to validate
 * @param {Array<string>} validValues Array of possible valid values
 * @param {string} errorMessage Error message to present if prop is not a valid value
 */
var createValidPropRule = function createValidPropRule(propName, validValues, errorMessage, meta, _create) {
  return {
    meta: _objectSpread({
      docs: {},
      schema: [(0, _schemas.generateObjSchema)()]
    }, meta),
    create: function create(context) {
      return _objectSpread({
        JSXAttribute: function JSXAttribute(node) {
          var attrName = (0, _jsxAstUtils.elementType)(node);

          if (attrName === propName) {
            var isExpression = (0, _isNodePropExpression.default)(node);

            if (!isExpression) {
              // ensure we are only checking literal prop values
              var attrValue = (0, _jsxAstUtils.getLiteralPropValue)(node);

              if (attrValue !== null) {
                var invalid = false;

                if (Array.isArray(attrValue)) {
                  var validate = attrValue.map(function (strValue) {
                    return (0, _isOneOf.default)(strValue, validValues);
                  });
                  invalid = validate.indexOf(false) > -1;
                } else {
                  invalid = !(0, _isOneOf.default)(attrValue, validValues);
                }

                if (invalid) {
                  context.report({
                    node,
                    message: errorMessage
                  });
                }
              }
            }
          }
        }
      }, _create);
    }
  };
};

var _default = createValidPropRule;
exports.default = _default;