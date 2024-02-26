"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable global-require */
var defaultConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react-native-a11y']
};
var basicRules = {
  'react-native-a11y/has-accessibility-hint': 'error',
  'react-native-a11y/has-accessibility-props': 'error',
  'react-native-a11y/has-valid-accessibility-actions': 'error',
  'react-native-a11y/has-valid-accessibility-component-type': 'error',
  'react-native-a11y/has-valid-accessibility-descriptors': 'error',
  'react-native-a11y/has-valid-accessibility-role': 'error',
  'react-native-a11y/has-valid-accessibility-state': 'error',
  'react-native-a11y/has-valid-accessibility-states': 'error',
  'react-native-a11y/has-valid-accessibility-traits': 'error',
  'react-native-a11y/has-valid-accessibility-value': 'error',
  'react-native-a11y/no-nested-touchables': 'error'
};
var iOSRules = {
  'react-native-a11y/has-valid-accessibility-ignores-invert-colors': 'error'
};
var AndroidRules = {
  'react-native-a11y/has-valid-accessibility-live-region': 'error',
  'react-native-a11y/has-valid-important-for-accessibility': 'error'
};
module.exports = {
  rules: {
    'has-accessibility-hint': require('./rules/has-accessibility-hint'),
    'has-accessibility-props': require('./rules/has-accessibility-props'),
    'has-valid-accessibility-actions': require('./rules/has-valid-accessibility-actions'),
    'has-valid-accessibility-component-type': require('./rules/has-valid-accessibility-component-type'),
    'has-valid-accessibility-descriptors': require('./rules/has-valid-accessibility-descriptors'),
    'has-valid-accessibility-ignores-invert-colors': require('./rules/has-valid-accessibility-ignores-invert-colors'),
    'has-valid-accessibility-live-region': require('./rules/has-valid-accessibility-live-region'),
    'has-valid-accessibility-role': require('./rules/has-valid-accessibility-role'),
    'has-valid-accessibility-state': require('./rules/has-valid-accessibility-state'),
    'has-valid-accessibility-states': require('./rules/has-valid-accessibility-states'),
    'has-valid-accessibility-traits': require('./rules/has-valid-accessibility-traits'),
    'has-valid-accessibility-value': require('./rules/has-valid-accessibility-value'),
    'has-valid-important-for-accessibility': require('./rules/has-valid-important-for-accessibility'),
    'no-nested-touchables': require('./rules/no-nested-touchables')
  },
  configs: {
    basic: _objectSpread(_objectSpread({}, defaultConfig), {}, {
      rules: basicRules
    }),
    ios: _objectSpread(_objectSpread({}, defaultConfig), {}, {
      rules: _objectSpread(_objectSpread({}, basicRules), iOSRules)
    }),
    android: _objectSpread(_objectSpread({}, defaultConfig), {}, {
      rules: _objectSpread(_objectSpread({}, basicRules), AndroidRules)
    }),
    all: _objectSpread(_objectSpread({}, defaultConfig), {}, {
      rules: _objectSpread(_objectSpread(_objectSpread({}, basicRules), iOSRules), AndroidRules)
    })
  }
};