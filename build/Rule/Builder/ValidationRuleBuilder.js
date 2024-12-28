"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RequiredFieldRule = require("../ValidationRule/RequiredFieldRule").RequiredFieldRule;
var MinLengthRule = require("../ValidationRule/MinLengthValidationRule").MinLengthValidationRule;
var RegexValidationRule = require("../ValidationRule/RegexValidationRule").RegexValidationRule;
var CompositeValidationRule = require("../Composite/CompositeValidationRule").CompositeValidationRule;
var ValidationRuleBuilder = /*#__PURE__*/function () {
  function ValidationRuleBuilder() {
    _classCallCheck(this, ValidationRuleBuilder);
    this.rules = [];
  }
  return _createClass(ValidationRuleBuilder, [{
    key: "addRequired",
    value: function addRequired() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This field is required";
      this.rules.push(new RequiredFieldRule(message));
      return this;
    }
  }, {
    key: "addMinLength",
    value: function addMinLength(minLength, message) {
      this.rules.push(new MinLengthRule(minLength, message));
      return this;
    }
  }, {
    key: "addRegex",
    value: function addRegex(regex, message) {
      this.rules.push(new RegexValidationRule(regex, message));
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      var composite = new CompositeValidationRule();
      this.rules.forEach(function (rule) {
        return composite.addRule(rule);
      });
      return composite;
    }
  }]);
}();
module.exports.ValidationRuleBuilder = ValidationRuleBuilder;