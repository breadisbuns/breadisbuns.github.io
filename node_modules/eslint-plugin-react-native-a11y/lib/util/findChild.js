"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findChild;

/**
 * Recursively searches for an child element within a
 * JSXOpeningElement that matches the condition specificed in
 * `callback`
 */
function findChild(node, callback) {
  var children = node.children;

  if (children && children.length > 0) {
    for (var i = 0; i < children.length; i += 1) {
      // $FlowFixMe
      var _child = children[i];

      if (_child.openingElement && _child.openingElement.name) {
        if (callback(_child.openingElement)) {
          return _child.openingElement;
        }
      }

      var foundChild = findChild(_child, callback);

      if (foundChild) {
        return foundChild;
      }
    }
  }

  return null;
}