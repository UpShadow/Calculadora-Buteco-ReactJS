"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("CalcButeco/Index",{

/***/ "./src/views/CalcButeco/Index.js":
/*!***************************************!*\
  !*** ./src/views/CalcButeco/Index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"calculate\", function () {\n      var TipCalculation = parseInt(_this.state.Tip) * parseFloat(_this.state.AccountValue) / 100; //realiza o calculo da gorjeta\n\n      var TotalPayCalculation = parse(AccountValue) + TipCalculation; //soma o valor da conta + o valor da gorjeta\n\n      var PayPerPersonCalculation = TotalPayCalculation / QuantityPerson;\n\n      _this.setState({\n        //TipValue: (this.state.Tip * this.state.AccountValue) / 100;\n        TipValue: TipCalculation,\n        TotalPay: TotalPayCalculation,\n        TotalPayPerPerson: PayPerPersonCalculation\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"clearFields\", function (i) {\n      _this.setState({\n        AccountValue: \"\",\n        Tip: \"\",\n        QuantityPerson: \"\"\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var saida = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h2\", null, \"Calculadora de Buteco\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \"Conta\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        value: _this.state.AccountValue,\n        onChange: function onChange(e) {\n          return _this.setState({\n            AccountValue: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \"Gorjeta\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"number\",\n        value: _this.state.Tip,\n        onChange: function onChange(e) {\n          return _this.setState({\n            Tip: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \"Quantidade de Pessoas\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        value: _this.state.QuantityPerson,\n        onChange: function onChange(e) {\n          return _this.setState({\n            QuantityPerson: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return _this.calculate(i);\n        }\n      }, \"Calcular\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: _this.clearFields\n      }, \"Zerar\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \" Gorjeta: \", _this.state.TipValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \" Total a pagar: \", _this.state.TotalPay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"p\", null, \" Total a pagar por pessoa: \", _this.state.TotalPayPerPerson));\n      return saida;\n    });\n\n    _this.state = {\n      AccountValue: \"\",\n      Tip: \"\",\n      QuantityPerson: \"\",\n      TipValue: \"\",\n      TotalPay: \"\",\n      TotalPayPerPerson: \"\"\n    };\n    return _this;\n  }\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_7__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Index, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/CalcButeco/Index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c09e6fedf97d10f6df26"; }
/******/ }();
/******/ 
/******/ }
);