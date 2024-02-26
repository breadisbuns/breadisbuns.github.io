"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _isNodePropExpression = _interopRequireDefault(require("../util/isNodePropExpression"));

var _schemas = require("../util/schemas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Allow an assistive technology to programmatically invoke the actions of a component.
 * @author JP Driver
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var standardActions = ['magicTap', // iOS only
'escape', // iOS only
'activate', 'increment', 'decrement', 'longpress' // Android only
];
module.exports = {
  meta: {
    docs: {},
    schema: [(0, _schemas.generateObjSchema)()]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var error = function error(message) {
          return context.report({
            node,
            message
          });
        };

        if ((0, _jsxAstUtils.hasEveryProp)(node.attributes, ['accessibilityActions', 'onAccessibilityAction'])) {
          var handlerProp = (0, _jsxAstUtils.getProp)(node.attributes, 'onAccessibilityAction');
          var isHandlerExpression = (0, _isNodePropExpression.default)(handlerProp);

          if (!isHandlerExpression) {
            var handlerPropValue = (0, _jsxAstUtils.getPropValue)(handlerProp);

            if (typeof handlerPropValue !== 'function') {
              error('accessibilityActions: has accessibilityActions but onAccessibilityAction is not a function');
            }
          }

          var actionsProp = (0, _jsxAstUtils.getProp)(node.attributes, 'accessibilityActions');
          var isActionsExpression = (0, _isNodePropExpression.default)(actionsProp);

          if (!isActionsExpression) {
            var attrValue = (0, _jsxAstUtils.getPropValue)(actionsProp);

            if (!Array.isArray(attrValue)) {
              error('accessibilityActions: value must be an Array');
            } else if (attrValue.length === 0) {
              error('accessibilityActions: Array cannot be empty');
            } else {
              attrValue.forEach(function (action) {
                if (!action.name) {
                  error('accessibilityActions: action missing name');
                } else if (standardActions.indexOf(action.name) < 0 && !action.label) {
                  error(`accessibilityActions: custom action "${action.name}" missing label`);
                }

                if (Object.keys(action).filter(function (f) {
                  return f !== 'name' && f !== 'label';
                }).length > 0) {
                  error(`accessibilityActions: action "${action.name}" contains unrecognised keys`);
                }
              });
            }
          }
        } else {
          if ((0, _jsxAstUtils.hasProp)(node.attributes, 'accessibilityActions')) {
            error('accessibilityActions: has accessibilityActions but onAccessibilityAction is not a function');
          } else if ((0, _jsxAstUtils.hasProp)(node.attributes, 'onAccessibilityAction')) {
            error('accessibilityActions: has onAccessibilityAction function but no accessibilityActions Array');
          }
        }
      }
    };
  }
};