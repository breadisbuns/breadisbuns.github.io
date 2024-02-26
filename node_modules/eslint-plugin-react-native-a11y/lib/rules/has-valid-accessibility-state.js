"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _schemas = require("../util/schemas");

var _getPropValue = _interopRequireDefault(require("jsx-ast-utils/lib/getPropValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var PROP_NAME = 'accessibilityState';
var validKeys = ['disabled', 'selected', 'checked', 'busy', 'expanded'];
module.exports = {
  meta: {
    docs: {},
    schema: [(0, _schemas.generateObjSchema)()]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        if ((0, _jsxAstUtils.hasProp)(node.attributes, PROP_NAME)) {
          var _stateProp$value$expr;

          var stateProp = node.attributes.find( // $FlowFixMe
          function (f) {
            var _f$name;

            return ((_f$name = f.name) === null || _f$name === void 0 ? void 0 : _f$name.name) === PROP_NAME;
          });
          var statePropType = // $FlowFixMe
          ((_stateProp$value$expr = stateProp.value.expression) === null || _stateProp$value$expr === void 0 ? void 0 : _stateProp$value$expr.type) || stateProp.value.type;

          var error = function error(message) {
            return context.report({
              node,
              message
            });
          };

          if (statePropType === 'Literal' || statePropType === 'ArrayExpression') {
            error('accessibilityState must be an object');
          } else if (statePropType === 'ObjectExpression') {
            var stateValue = (0, _getPropValue.default)(stateProp);
            Object.entries(stateValue).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              if (!validKeys.includes(key)) {
                error(`accessibilityState object: "${key}" is not a valid key`);
              } else if ( // we can't determine the associated value type of non-Literal expressions
              // treat these cases as though they are valid
              // $FlowFixMe
              stateProp.value.expression.properties.every( // $FlowFixMe
              function (p) {
                return p.value.type === 'Literal';
              })) {
                if (key === 'checked' && !(typeof value === 'boolean' || value === 'mixed')) {
                  error(`accessibilityState object: "checked" value is not either a boolean or 'mixed'`);
                } else if (key !== 'checked' && typeof value !== 'boolean') {
                  error(`accessibilityState object: "${key}" value is not a boolean`);
                }
              }
            });
          }
        }
      }
    };
  }
};