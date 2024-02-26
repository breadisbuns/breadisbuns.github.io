"use strict";

var _validProp = _interopRequireDefault(require("../factory/valid-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Enforce accessibilityTraits property value is valid
 * @author Alex Saunders
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage = 'accessibilityTraits must be one of defined values';
var validValues = ['none', 'button', 'link', 'header', 'search', 'image', 'selected', 'plays', 'key', 'text', 'summary', 'disabled', 'frequentUpdates', 'startsMedia', 'adjustable', 'allowsDirectInteraction', 'pageTurn'];
module.exports = (0, _validProp.default)('accessibilityTraits', validValues, errorMessage);