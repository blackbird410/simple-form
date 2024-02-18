/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./albert.jpg */ \"./src/albert.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --myBlue: #0096ff;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  background: gray;\n  padding: 1rem;\n  border-radius: 1rem;\n  opacity: 0.9;\n  font-weight: bold;\n}\n\n.field-wrapper {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nselect,\ninput {\n  outline: none;\n  border-radius: 16px;\n  border: none;\n  padding: 0.5rem;\n  background: white;\n}\n\ninput {\n  border-bottom: 2px solid var(--myBlue);\n}\n\n.btn-wrapper {\n  display: flex;\n  justify-content: space-around;\n  gap: 1rem;\n}\n\nbutton {\n  border: none;\n  border-radius: 1rem;\n  padding: 0.5rem 2rem;\n  background: var(--myBlue);\n  font-weight: bold;\n  font-size: 0.9rem;\n  color: white;\n}\n\nbutton:hover {\n  background: orange;\n  opacity: 1;\n}\n\n.input-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.error {\n  color: red;\n  font-weight: normal;\n  font-size: 0.8rem;\n  max-width: 200px;\n  display: none;\n}\n\ninput.invalid {\n  border-bottom-color: red;\n}\n\ninput.valid {\n  border-bottom-color: green;\n}\n\n.error.active {\n  display: block;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://simple-form/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://simple-form/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://simple-form/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://simple-form/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://simple-form/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://simple-form/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/countryDropDown.js":
/*!********************************!*\
  !*** ./src/countryDropDown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countryDropDown: () => (/* binding */ countryDropDown)\n/* harmony export */ });\nconst countryDropDown = `        \n            <select id=\"country\" name=\"country\" class=\"form-control\">\n                <option value=\"Afghanistan\">Afghanistan</option>\n                <option value=\"Åland Islands\">Åland Islands</option>\n                <option value=\"Albania\">Albania</option>\n                <option value=\"Algeria\">Algeria</option>\n                <option value=\"American Samoa\">American Samoa</option>\n                <option value=\"Andorra\">Andorra</option>\n                <option value=\"Angola\">Angola</option>\n                <option value=\"Anguilla\">Anguilla</option>\n                <option value=\"Antarctica\">Antarctica</option>\n                <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n                <option value=\"Argentina\">Argentina</option>\n                <option value=\"Armenia\">Armenia</option>\n                <option value=\"Aruba\">Aruba</option>\n                <option value=\"Australia\">Australia</option>\n                <option value=\"Austria\">Austria</option>\n                <option value=\"Azerbaijan\">Azerbaijan</option>\n                <option value=\"Bahamas\">Bahamas</option>\n                <option value=\"Bahrain\">Bahrain</option>\n                <option value=\"Bangladesh\">Bangladesh</option>\n                <option value=\"Barbados\">Barbados</option>\n                <option value=\"Belarus\">Belarus</option>\n                <option value=\"Belgium\">Belgium</option>\n                <option value=\"Belize\">Belize</option>\n                <option value=\"Benin\">Benin</option>\n                <option value=\"Bermuda\">Bermuda</option>\n                <option value=\"Bhutan\">Bhutan</option>\n                <option value=\"Bolivia\">Bolivia</option>\n                <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n                <option value=\"Botswana\">Botswana</option>\n                <option value=\"Bouvet Island\">Bouvet Island</option>\n                <option value=\"Brazil\">Brazil</option>\n                <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n                <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n                <option value=\"Bulgaria\">Bulgaria</option>\n                <option value=\"Burkina Faso\">Burkina Faso</option>\n                <option value=\"Burundi\">Burundi</option>\n                <option value=\"Cambodia\">Cambodia</option>\n                <option value=\"Cameroon\">Cameroon</option>\n                <option value=\"Canada\">Canada</option>\n                <option value=\"Cape Verde\">Cape Verde</option>\n                <option value=\"Cayman Islands\">Cayman Islands</option>\n                <option value=\"Central African Republic\">Central African Republic</option>\n                <option value=\"Chad\">Chad</option>\n                <option value=\"Chile\">Chile</option>\n                <option value=\"China\">China</option>\n                <option value=\"Christmas Island\">Christmas Island</option>\n                <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n                <option value=\"Colombia\">Colombia</option>\n                <option value=\"Comoros\">Comoros</option>\n                <option value=\"Congo\">Congo</option>\n                <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\n                <option value=\"Cook Islands\">Cook Islands</option>\n                <option value=\"Costa Rica\">Costa Rica</option>\n                <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n                <option value=\"Croatia\">Croatia</option>\n                <option value=\"Cuba\">Cuba</option>\n                <option value=\"Cyprus\">Cyprus</option>\n                <option value=\"Czech Republic\">Czech Republic</option>\n                <option value=\"Denmark\">Denmark</option>\n                <option value=\"Djibouti\">Djibouti</option>\n                <option value=\"Dominica\">Dominica</option>\n                <option value=\"Dominican Republic\">Dominican Republic</option>\n                <option value=\"Ecuador\">Ecuador</option>\n                <option value=\"Egypt\">Egypt</option>\n                <option value=\"El Salvador\">El Salvador</option>\n                <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n                <option value=\"Eritrea\">Eritrea</option>\n                <option value=\"Estonia\">Estonia</option>\n                <option value=\"Ethiopia\">Ethiopia</option>\n                <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n                <option value=\"Faroe Islands\">Faroe Islands</option>\n                <option value=\"Fiji\">Fiji</option>\n                <option value=\"Finland\">Finland</option>\n                <option value=\"France\">France</option>\n                <option value=\"French Guiana\">French Guiana</option>\n                <option value=\"French Polynesia\">French Polynesia</option>\n                <option value=\"French Southern Territories\">French Southern Territories</option>\n                <option value=\"Gabon\">Gabon</option>\n                <option value=\"Gambia\">Gambia</option>\n                <option value=\"Georgia\">Georgia</option>\n                <option value=\"Germany\">Germany</option>\n                <option value=\"Ghana\">Ghana</option>\n                <option value=\"Gibraltar\">Gibraltar</option>\n                <option value=\"Greece\">Greece</option>\n                <option value=\"Greenland\">Greenland</option>\n                <option value=\"Grenada\">Grenada</option>\n                <option value=\"Guadeloupe\">Guadeloupe</option>\n                <option value=\"Guam\">Guam</option>\n                <option value=\"Guatemala\">Guatemala</option>\n                <option value=\"Guernsey\">Guernsey</option>\n                <option value=\"Guinea\">Guinea</option>\n                <option value=\"Guinea-bissau\">Guinea-bissau</option>\n                <option value=\"Guyana\">Guyana</option>\n                <option value=\"Haiti\">Haiti</option>\n                <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n                <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n                <option value=\"Honduras\">Honduras</option>\n                <option value=\"Hong Kong\">Hong Kong</option>\n                <option value=\"Hungary\">Hungary</option>\n                <option value=\"Iceland\">Iceland</option>\n                <option value=\"India\">India</option>\n                <option value=\"Indonesia\">Indonesia</option>\n                <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n                <option value=\"Iraq\">Iraq</option>\n                <option value=\"Ireland\">Ireland</option>\n                <option value=\"Isle of Man\">Isle of Man</option>\n                <option value=\"Israel\">Israel</option>\n                <option value=\"Italy\">Italy</option>\n                <option value=\"Jamaica\">Jamaica</option>\n                <option value=\"Japan\">Japan</option>\n                <option value=\"Jersey\">Jersey</option>\n                <option value=\"Jordan\">Jordan</option>\n                <option value=\"Kazakhstan\">Kazakhstan</option>\n                <option value=\"Kenya\">Kenya</option>\n                <option value=\"Kiribati\">Kiribati</option>\n                <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n                <option value=\"Korea, Republic of\">Korea, Republic of</option>\n                <option value=\"Kuwait\">Kuwait</option>\n                <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n                <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n                <option value=\"Latvia\">Latvia</option>\n                <option value=\"Lebanon\">Lebanon</option>\n                <option value=\"Lesotho\">Lesotho</option>\n                <option value=\"Liberia\">Liberia</option>\n                <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n                <option value=\"Liechtenstein\">Liechtenstein</option>\n                <option value=\"Lithuania\">Lithuania</option>\n                <option value=\"Luxembourg\">Luxembourg</option>\n                <option value=\"Macao\">Macao</option>\n                <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of</option>\n                <option value=\"Madagascar\">Madagascar</option>\n                <option value=\"Malawi\">Malawi</option>\n                <option value=\"Malaysia\">Malaysia</option>\n                <option value=\"Maldives\">Maldives</option>\n                <option value=\"Mali\">Mali</option>\n                <option value=\"Malta\">Malta</option>\n                <option value=\"Marshall Islands\">Marshall Islands</option>\n                <option value=\"Martinique\">Martinique</option>\n                <option value=\"Mauritania\">Mauritania</option>\n                <option value=\"Mauritius\">Mauritius</option>\n                <option value=\"Mayotte\">Mayotte</option>\n                <option value=\"Mexico\">Mexico</option>\n                <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n                <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n                <option value=\"Monaco\">Monaco</option>\n                <option value=\"Mongolia\">Mongolia</option>\n                <option value=\"Montenegro\">Montenegro</option>\n                <option value=\"Montserrat\">Montserrat</option>\n                <option value=\"Morocco\">Morocco</option>\n                <option value=\"Mozambique\">Mozambique</option>\n                <option value=\"Myanmar\">Myanmar</option>\n                <option value=\"Namibia\">Namibia</option>\n                <option value=\"Nauru\">Nauru</option>\n                <option value=\"Nepal\">Nepal</option>\n                <option value=\"Netherlands\">Netherlands</option>\n                <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n                <option value=\"New Caledonia\">New Caledonia</option>\n                <option value=\"New Zealand\">New Zealand</option>\n                <option value=\"Nicaragua\">Nicaragua</option>\n                <option value=\"Niger\">Niger</option>\n                <option value=\"Nigeria\">Nigeria</option>\n                <option value=\"Niue\">Niue</option>\n                <option value=\"Norfolk Island\">Norfolk Island</option>\n                <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n                <option value=\"Norway\">Norway</option>\n                <option value=\"Oman\">Oman</option>\n                <option value=\"Pakistan\">Pakistan</option>\n                <option value=\"Palau\">Palau</option>\n                <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n                <option value=\"Panama\">Panama</option>\n                <option value=\"Papua New Guinea\">Papua New Guinea</option>\n                <option value=\"Paraguay\">Paraguay</option>\n                <option value=\"Peru\">Peru</option>\n                <option value=\"Philippines\">Philippines</option>\n                <option value=\"Pitcairn\">Pitcairn</option>\n                <option value=\"Poland\">Poland</option>\n                <option value=\"Portugal\">Portugal</option>\n                <option value=\"Puerto Rico\">Puerto Rico</option>\n                <option value=\"Qatar\">Qatar</option>\n                <option value=\"Reunion\">Reunion</option>\n                <option value=\"Romania\">Romania</option>\n                <option value=\"Russian Federation\">Russian Federation</option>\n                <option value=\"Rwanda\">Rwanda</option>\n                <option value=\"Saint Helena\">Saint Helena</option>\n                <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n                <option value=\"Saint Lucia\">Saint Lucia</option>\n                <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n                <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n                <option value=\"Samoa\">Samoa</option>\n                <option value=\"San Marino\">San Marino</option>\n                <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n                <option value=\"Saudi Arabia\">Saudi Arabia</option>\n                <option value=\"Senegal\">Senegal</option>\n                <option value=\"Serbia\">Serbia</option>\n                <option value=\"Seychelles\">Seychelles</option>\n                <option value=\"Sierra Leone\">Sierra Leone</option>\n                <option value=\"Singapore\">Singapore</option>\n                <option value=\"Slovakia\">Slovakia</option>\n                <option value=\"Slovenia\">Slovenia</option>\n                <option value=\"Solomon Islands\">Solomon Islands</option>\n                <option value=\"Somalia\">Somalia</option>\n                <option value=\"South Africa\">South Africa</option>\n                <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands</option>\n                <option value=\"Spain\">Spain</option>\n                <option value=\"Sri Lanka\">Sri Lanka</option>\n                <option value=\"Sudan\">Sudan</option>\n                <option value=\"Suriname\">Suriname</option>\n                <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n                <option value=\"Swaziland\">Swaziland</option>\n                <option value=\"Sweden\">Sweden</option>\n                <option value=\"Switzerland\">Switzerland</option>\n                <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n                <option value=\"Taiwan\">Taiwan</option>\n                <option value=\"Tajikistan\">Tajikistan</option>\n                <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n                <option value=\"Thailand\">Thailand</option>\n                <option value=\"Timor-leste\">Timor-leste</option>\n                <option value=\"Togo\">Togo</option>\n                <option value=\"Tokelau\">Tokelau</option>\n                <option value=\"Tonga\">Tonga</option>\n                <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n                <option value=\"Tunisia\">Tunisia</option>\n                <option value=\"Turkey\">Turkey</option>\n                <option value=\"Turkmenistan\">Turkmenistan</option>\n                <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n                <option value=\"Tuvalu\">Tuvalu</option>\n                <option value=\"Uganda\">Uganda</option>\n                <option value=\"Ukraine\">Ukraine</option>\n                <option value=\"United Arab Emirates\">United Arab Emirates</option>\n                <option value=\"United Kingdom\">United Kingdom</option>\n                <option value=\"United States\">United States</option>\n                <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n                <option value=\"Uruguay\">Uruguay</option>\n                <option value=\"Uzbekistan\">Uzbekistan</option>\n                <option value=\"Vanuatu\">Vanuatu</option>\n                <option value=\"Venezuela\">Venezuela</option>\n                <option value=\"Viet Nam\">Viet Nam</option>\n                <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n                <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n                <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n                <option value=\"Western Sahara\">Western Sahara</option>\n                <option value=\"Yemen\">Yemen</option>\n                <option value=\"Zambia\">Zambia</option>\n                <option value=\"Zimbabwe\">Zimbabwe</option>\n            </select>`;\n\n\n//# sourceURL=webpack://simple-form/./src/countryDropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _countryDropDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countryDropDown.js */ \"./src/countryDropDown.js\");\n\n\n\n// As per the HTML Specification\nconst emailRegExp =\n  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\nconst passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;\nconst globalZipCodeRegex = /^[a-zA-Z0-9-]{5,10}$/;\n\nconst pwdFormat =\n  \"Must contain at least 8 characters with at least 1 uppercase, 1 lowercase and 1 number.\";\nconst zipCodeFormat = \"Must have 5-10 characters and no space\";\n\nconst getId = (f) => {\n  const parts = f.toLowerCase().split(\" \");\n  if (parts.length !== 1) return parts.join(\"-\");\n  return parts[0];\n};\n\nconst toggleError = (e, isValid) => {\n  e.className = isValid ? \"valid\" : \"invalid\";\n  e.nextElementSibling.className = isValid ? \"error\" : \"error active\";\n};\nconst validateEmail = (e) => {\n  const isValid = emailRegExp.test(e.currentTarget.value);\n  toggleError(e.currentTarget, isValid);\n};\n\nconst validateZipCode = (e) => {\n  const code = e.currentTarget.value;\n  const isValid = globalZipCodeRegex.test(code);\n  toggleError(e.currentTarget, isValid);\n};\n\nconst validatePassword = (e) => {\n  const v = e.currentTarget.value;\n  const isValid = passwordRegex.test(v);\n  toggleError(e.currentTarget, isValid);\n};\n\nconst confirmPwd = (e) => {\n  const pwd = document.querySelector(\"#password\").value;\n  const isValid =\n    e.currentTarget.value === pwd && passwordRegex.test(e.currentTarget.value);\n  toggleError(e.currentTarget, isValid);\n  if (!isValid)\n    e.currentTarget.nextElementSibling.textContent = !passwordRegex.test(\n      e.currentTarget.value,\n    )\n      ? pwdFormat\n      : \"Passwords do not match\";\n};\n\nconst validateForm = (e) => {\n  e.preventDefault();\n  const email = document.querySelector(\"#email\");\n  const zipCode = document.querySelector(\"#zip-code\");\n  const pwd = document.querySelector(\"#password\");\n  const pwdConfirm = document.querySelector(\"#password-confirmation\");\n\n  let isValid = true;\n  for (const input of [email, zipCode, pwd, pwdConfirm]) {\n    if (input.classList.contains(\"invalid\") || input.value.length === 0) {\n      isValid = false;\n      break;\n    }\n  }\n\n  if (isValid) document.body.querySelector(\"form\").reset();\n  else {\n    [email, zipCode, pwd, pwdConfirm].forEach((input) => {\n      if (!input.value.length) {\n        toggleError(input, false);\n      }\n    });\n  }\n};\n\nclass Form {\n  constructor() {\n    this.wrapper = document.createElement(\"form\");\n    this.btnWrapper = document.createElement(\"div\");\n    const fields = [\n      \"Email\",\n      \"Country\",\n      \"Zip Code\",\n      \"Password\",\n      \"Password Confirmation\",\n    ];\n\n    this.wrapper.noValidate = true;\n    this.btnWrapper.className = \"btn-wrapper\";\n\n    fields.forEach((field) => {\n      const fieldWrapper = document.createElement(\"div\");\n      const inputWrapper = document.createElement(\"div\");\n      const spanError = document.createElement(\"span\");\n      const label = document.createElement(\"label\");\n      const id = getId(field);\n\n      fieldWrapper.className = \"field-wrapper\";\n      inputWrapper.className = \"input-wrapper\";\n      spanError.className = \"error\";\n      label.setAttribute(\"for\", id);\n      label.textContent = field;\n\n      if (field === \"Country\") {\n        inputWrapper.innerHTML = _countryDropDown_js__WEBPACK_IMPORTED_MODULE_1__.countryDropDown;\n      } else {\n        const input = document.createElement(\"input\");\n\n        input.id = id;\n        input.name = id;\n\n        switch (field) {\n          case \"Email\":\n            input.setAttribute(\"type\", \"email\");\n            input.autocomplete = true;\n            input.placeholder = \"erenjaeger@gmail.com\";\n            spanError.textContent = \"Email incorrect\";\n            input.addEventListener(\"input\", validateEmail);\n            break;\n          case \"Password\":\n            input.addEventListener(\"input\", validatePassword);\n            input.setAttribute(\"type\", \"password\");\n            input.setAttribute(\"placeholder\", \"Sung1492\");\n            spanError.textContent = pwdFormat;\n            break;\n          case \"Password Confirmation\":\n            input.setAttribute(\"type\", \"password\");\n            input.setAttribute(\"placeholder\", \"Sung1492\");\n            input.addEventListener(\"input\", confirmPwd);\n            spanError.textContent = \"Password incorrect\";\n            break;\n          default:\n            input.autocomplete = true;\n            input.placeholder = \"320317\";\n            input.addEventListener(\"input\", validateZipCode);\n            spanError.textContent = zipCodeFormat;\n            break;\n        }\n        inputWrapper.appendChild(input);\n        inputWrapper.appendChild(spanError);\n      }\n\n      fieldWrapper.appendChild(label);\n      fieldWrapper.appendChild(inputWrapper);\n      this.wrapper.appendChild(fieldWrapper);\n    });\n\n    [\"Submit\", \"Reset\"].forEach((b) => {\n      const btn = document.createElement(\"button\");\n      btn.classList.add(\"form-btn\");\n      btn.textContent = b.toUpperCase();\n      btn.type = b.toLowerCase();\n\n      if (b === \"Submit\") btn.addEventListener(\"click\", validateForm);\n\n      this.btnWrapper.appendChild(btn);\n    });\n\n    this.wrapper.appendChild(this.btnWrapper);\n  }\n}\n\ndocument.body.appendChild(new Form().wrapper);\n\n\n//# sourceURL=webpack://simple-form/./src/index.js?");

/***/ }),

/***/ "./src/albert.jpg":
/*!************************!*\
  !*** ./src/albert.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd5268622da82ce97ef9.jpg\";\n\n//# sourceURL=webpack://simple-form/./src/albert.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;