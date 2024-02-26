"use strict";

var _jsxAstUtils = require("jsx-ast-utils");

var _schemas = require("../util/schemas");

/**
 * @fileoverview Represents the current value of a component.
 * @author JP Driver
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var PROP_NAME = 'accessibilityValue';
module.exports = {
  meta: {
    docs: {},
    schema: [(0, _schemas.generateObjSchema)()]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        if ((0, _jsxAstUtils.hasProp)(node.attributes, PROP_NAME)) {
          var _valueProp$value$expr;

          var valueProp = node.attributes.find( // $FlowFixMe
          function (f) {
            var _f$name;

            return ((_f$name = f.name) === null || _f$name === void 0 ? void 0 : _f$name.name) === PROP_NAME;
          });
          var valuePropType = // $FlowFixMe
          ((_valueProp$value$expr = valueProp.value.expression) === null || _valueProp$value$expr === void 0 ? void 0 : _valueProp$value$expr.type) || valueProp.value.type;

          var error = function error(message) {
            return context.report({
              node,
              message
            });
          };

          if (valuePropType === 'Literal') {
            error('accessibilityValue must be an object');
          } else if (valuePropType === 'ObjectExpression') {
            var _valueProp$value$expr2;

            var attrValue = (0, _jsxAstUtils.getPropValue)(valueProp);
            var keys = Object.keys(attrValue); // $FlowFixMe

            var properties = ((_valueProp$value$expr2 = valueProp.value.expression) === null || _valueProp$value$expr2 === void 0 ? void 0 : _valueProp$value$expr2.properties) || [];

            if (keys.includes('text')) {
              if (keys.length > 1) {
                error('accessibilityValue object must only contain either min, now, max *or* text');
              } // $FlowFixMe


              properties.forEach(function (_ref) {
                var key = _ref.key,
                    value = _ref.value;

                if (key.name === 'text' && // $FlowFixMe
                value.type === 'Literal' && // $FlowFixMe
                typeof value.value !== 'string') {
                  error('accessibilityValue text value must be a string');
                }
              });
            } else {
              ['min', 'max', 'now'].forEach(function (key) {
                if (!keys.includes(key)) {
                  error(`accessibilityValue object is missing ${key} value`);
                }
              }); // $FlowFixMe

              properties.forEach(function (_ref2) {
                var key = _ref2.key,
                    value = _ref2.value;

                // $FlowFixMe
                if (value.type === 'Literal' && typeof value.value !== 'number') {
                  error( // $FlowFixMe
                  `accessibilityValue ${key.name} value must be an integer`);
                }
              });
            }
          }
        }
      }
    };
  }
};