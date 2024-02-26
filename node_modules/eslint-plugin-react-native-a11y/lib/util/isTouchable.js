"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTouchable;

var _jsxAstUtils = require("jsx-ast-utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultTouchables = {
  Touchable: true,
  TouchableOpacity: true,
  TouchableHighlight: true,
  TouchableWithoutFeedback: true,
  TouchableNativeFeedback: true,
  TouchableBounce: true,
  Pressable: true
};

function isTouchable(element) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    id: '',
    options: [],
    report: function report() {}
  };
  var options = context.options;
  var extraTouchables = [];

  if (options[0] && Object.prototype.hasOwnProperty.call(options[0], 'touchables')) {
    var touchables = options[0].touchables;
    extraTouchables = _toConsumableArray(touchables);
  }

  var elType = (0, _jsxAstUtils.elementType)(element);
  return defaultTouchables[elType] || extraTouchables.includes(elType);
}