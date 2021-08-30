(self["webpackChunkreactrecipemvp"] = self["webpackChunkreactrecipemvp"] || []).push([["client_src_components_Recipes_jsx"],{

/***/ "./client/src/components/Recipes.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/Recipes.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Recipes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipes.css */ "./client/src/components/Recipes.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Recipes = /*#__PURE__*/function (_React$Component) {
  _inherits(Recipes, _React$Component);

  var _super = _createSuper(Recipes);

  function Recipes(props) {
    _classCallCheck(this, Recipes);

    return _super.call(this, props);
  }

  _createClass(Recipes, [{
    key: "checkFav",
    value: function checkFav(recipe) {
      if (recipe.favorite && !this.props.showFav) {
        return 'Faved';
      } else {
        return this.props.favBtn;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "recipes"
      }, this.props.recipes.map(function (recipe) {
        var _React$createElement;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "recipe-container",
          key: recipe.label + 'div'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          id: "label",
          key: recipe.label
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          href: recipe.url
        }, "\uD83D\uDC39", " ", recipe.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement = {
          id: "save-recipe-Btn"
        }, _defineProperty(_React$createElement, "id", recipe._id), _defineProperty(_React$createElement, "className", "save-recipe-Btn"), _defineProperty(_React$createElement, "onClick", _this.props.favRecipe), _React$createElement), " ", _this.checkFav(recipe), "\uD83D\uDC39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", _defineProperty({
          className: "recipeImage",
          key: recipe.label + 'image',
          src: recipe.image,
          alt: "RecipeImgMissing",
          width: "200",
          height: "200"
        }, "alt", "RecipePhoto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          id: "cuisineType",
          key: recipe.label + 'calories'
        }, "CuisineType: ", (recipe.cuisineType + '').toUpperCase()[0] + (recipe.cuisineType + '').substring(1), " ", "\uD83D\uDC39", " Calories per Serving: ", Math.round(recipe.calories / recipe["yield"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: "list",
          key: recipe.label + 'ingredient'
        }, recipe.ingredientLines.map(function (ingredient, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: recipe.label + ingredient + i
          }, ingredient);
        })));
      }));
    }
  }]);

  return Recipes;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipes);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Recipes.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Recipes.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#label {\n  font-weight: bold;\n  font-size: large;\n  color: #005E61;\n  padding-top: 20px;\n}\n\n#cuisineType {\n  color: #005E61;\n  font-weight: bold;\n}\n\na {\n  color: #005E61;\n}\n\n.recipeImage {\n  border-radius: 30px;\n}\n\nul{\n  display: inline-block;\n  text-align: left;\n  margin-right: 20px;\n}\n\n.save-recipe-Btn {\n  /* width: 50%; */\n  cursor: pointer;\n  color: #005E61;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: #06C0C2;\n  margin-left: 20px;\n}\n\n.recipes {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.recipe-container {\n  border-radius: 10px;\n  box-shadow: 0px 5px 20px grey;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /* background: rgb(218, 214, 214); */\n  align-items: center;\n  min-width: 30%;\n}\n", "",{"version":3,"sources":["webpack://./client/src/components/Recipes.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,oCAAoC;EACpC,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":["#label {\n  font-weight: bold;\n  font-size: large;\n  color: #005E61;\n  padding-top: 20px;\n}\n\n#cuisineType {\n  color: #005E61;\n  font-weight: bold;\n}\n\na {\n  color: #005E61;\n}\n\n.recipeImage {\n  border-radius: 30px;\n}\n\nul{\n  display: inline-block;\n  text-align: left;\n  margin-right: 20px;\n}\n\n.save-recipe-Btn {\n  /* width: 50%; */\n  cursor: pointer;\n  color: #005E61;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: #06C0C2;\n  margin-left: 20px;\n}\n\n.recipes {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.recipe-container {\n  border-radius: 10px;\n  box-shadow: 0px 5px 20px grey;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /* background: rgb(218, 214, 214); */\n  align-items: center;\n  min-width: 30%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/src/components/Recipes.css":
/*!*******************************************!*\
  !*** ./client/src/components/Recipes.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Recipes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Recipes.css */ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Recipes.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Recipes_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Recipes_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVzLmpzeCIsIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVzLmNzcyIsIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVzLmNzcz9hNmVlIl0sIm5hbWVzIjpbIlJlY2lwZXMiLCJwcm9wcyIsInJlY2lwZSIsImZhdm9yaXRlIiwic2hvd0ZhdiIsImZhdkJ0biIsInJlY2lwZXMiLCJtYXAiLCJsYWJlbCIsInVybCIsIl9pZCIsImZhdlJlY2lwZSIsImNoZWNrRmF2IiwiaW1hZ2UiLCJjdWlzaW5lVHlwZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiTWF0aCIsInJvdW5kIiwiY2Fsb3JpZXMiLCJpbmdyZWRpZW50TGluZXMiLCJpbmdyZWRpZW50IiwiaSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7V0FFRCxrQkFBU0MsTUFBVCxFQUFpQjtBQUNmLFVBQUlBLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixDQUFDLEtBQUtGLEtBQUwsQ0FBV0csT0FBbkMsRUFBNEM7QUFDMUMsZUFBTyxPQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLSCxLQUFMLENBQVdJLE1BQWxCO0FBQ0Q7QUFDRjs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVJLEtBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsR0FBbkIsQ0FBd0IsVUFBQUwsTUFBTTtBQUFBOztBQUFBLDRCQUUxQjtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBa0MsYUFBRyxFQUFFQSxNQUFNLENBQUNNLEtBQVAsR0FBYTtBQUFwRCx3QkFDRTtBQUFHLFlBQUUsRUFBQyxPQUFOO0FBQWMsYUFBRyxFQUFFTixNQUFNLENBQUNNO0FBQTFCLHdCQUFpQztBQUFHLGNBQUksRUFBRU4sTUFBTSxDQUFDTztBQUFoQixXQUFzQixjQUF0QixPQUF1Q1AsTUFBTSxDQUFDTSxLQUE5QyxDQUFqQyxlQUF5RjtBQUFRLFlBQUUsRUFBQztBQUFYLHVEQUFpQ04sTUFBTSxDQUFDUSxHQUF4QyxzREFBdUQsaUJBQXZELG9EQUFrRixLQUFJLENBQUNULEtBQUwsQ0FBV1UsU0FBN0YsK0JBQTBHLEtBQUksQ0FBQ0MsUUFBTCxDQUFjVixNQUFkLENBQTFHLEVBQWlJLGNBQWpJLENBQXpGLENBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFHLEVBQUVBLE1BQU0sQ0FBQ00sS0FBUCxHQUFhLE9BQS9DO0FBQXdELGFBQUcsRUFBRU4sTUFBTSxDQUFDVyxLQUFwRTtBQUEyRSxhQUFHLEVBQUMsa0JBQS9FO0FBQW1HLGVBQUssRUFBQyxLQUF6RztBQUErRyxnQkFBTSxFQUFDO0FBQXRILGtCQUFnSSxhQUFoSSxFQUZGLGVBR0U7QUFBRyxZQUFFLEVBQUMsYUFBTjtBQUFvQixhQUFHLEVBQUVYLE1BQU0sQ0FBQ00sS0FBUCxHQUFhO0FBQXRDLDRCQUFnRSxDQUFDTixNQUFNLENBQUNZLFdBQVAsR0FBbUIsRUFBcEIsRUFBd0JDLFdBQXhCLEdBQXNDLENBQXRDLElBQXlDLENBQUNiLE1BQU0sQ0FBQ1ksV0FBUCxHQUFtQixFQUFwQixFQUF3QkUsU0FBeEIsQ0FBa0MsQ0FBbEMsQ0FBekcsT0FBZ0osY0FBaEosNkJBQXVMQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2hCLE1BQU0sQ0FBQ2lCLFFBQVAsR0FBZ0JqQixNQUFNLFNBQWpDLENBQXZMLENBSEYsZUFJRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFxQixhQUFHLEVBQUVBLE1BQU0sQ0FBQ00sS0FBUCxHQUFhO0FBQXZDLFdBRUlOLE1BQU0sQ0FBQ2tCLGVBQVAsQ0FBdUJiLEdBQXZCLENBQTRCLFVBQUNjLFVBQUQsRUFBYUMsQ0FBYixFQUFtQjtBQUM3Qyw4QkFBUTtBQUFJLGVBQUcsRUFBRXBCLE1BQU0sQ0FBQ00sS0FBUCxHQUFhYSxVQUFiLEdBQXdCQztBQUFqQyxhQUFxQ0QsVUFBckMsQ0FBUjtBQUNELFNBRkQsQ0FGSixDQUpGLENBRjBCO0FBQUEsT0FBOUIsQ0FGSixDQURGO0FBc0JEOzs7O0VBcENtQkUsNEM7O0FBdUN0QixpRUFBZXZCLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHNCQUFzQixxQkFBcUIsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQixtQkFBbUIsc0JBQXNCLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsT0FBTywwQkFBMEIscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsdUJBQXVCLG1CQUFtQixzQkFBc0IsaUJBQWlCLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0Isa0NBQWtDLG9CQUFvQixHQUFHLHVCQUF1Qix3QkFBd0Isa0NBQWtDLGlCQUFpQixrQkFBa0IsMkJBQTJCLGtDQUFrQyxzQ0FBc0MsMkJBQTJCLG1CQUFtQixHQUFHLFNBQVMsb0dBQW9HLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtDQUFrQyxzQkFBc0IscUJBQXFCLG1CQUFtQixzQkFBc0IsR0FBRyxrQkFBa0IsbUJBQW1CLHNCQUFzQixHQUFHLE9BQU8sbUJBQW1CLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyxzQkFBc0Isa0JBQWtCLHVCQUF1QixtQkFBbUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsOEJBQThCLHNCQUFzQixHQUFHLGNBQWMsa0JBQWtCLGtDQUFrQyxvQkFBb0IsR0FBRyx1QkFBdUIsd0JBQXdCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLDJCQUEyQixrQ0FBa0Msc0NBQXNDLDJCQUEyQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDdjBFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBK0Y7O0FBRS9GOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSXhCLGlFQUFlLDRGQUFjLE1BQU0sRSIsImZpbGUiOiJjbGllbnRfc3JjX2NvbXBvbmVudHNfUmVjaXBlc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9SZWNpcGVzLmNzcyc7XG5cbmNsYXNzIFJlY2lwZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNoZWNrRmF2KHJlY2lwZSkge1xuICAgIGlmIChyZWNpcGUuZmF2b3JpdGUgJiYgIXRoaXMucHJvcHMuc2hvd0Zhdikge1xuICAgICAgcmV0dXJuICdGYXZlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZhdkJ0bjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yZWNpcGVzLm1hcCggcmVjaXBlID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlLWNvbnRhaW5lclwiIGtleT17cmVjaXBlLmxhYmVsKydkaXYnfT5cbiAgICAgICAgICAgICAgICA8cCBpZD1cImxhYmVsXCIga2V5PXtyZWNpcGUubGFiZWx9PjxhIGhyZWY9e3JlY2lwZS51cmx9PnsnXFx1RDgzRFxcdURDMzknfSB7cmVjaXBlLmxhYmVsfTwvYT48YnV0dG9uIGlkPVwic2F2ZS1yZWNpcGUtQnRuXCIgaWQ9e3JlY2lwZS5faWR9IGNsYXNzTmFtZT1cInNhdmUtcmVjaXBlLUJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZmF2UmVjaXBlfT4ge3RoaXMuY2hlY2tGYXYocmVjaXBlKX17J1xcdUQ4M0RcXHVEQzM5J308L2J1dHRvbj48L3A+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWNpcGVJbWFnZVwiIGtleT17cmVjaXBlLmxhYmVsKydpbWFnZSd9IHNyYz17cmVjaXBlLmltYWdlfSBhbHQ9XCJSZWNpcGVJbWdNaXNzaW5nXCIgIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgYWx0PVwiUmVjaXBlUGhvdG9cIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8cCBpZD1cImN1aXNpbmVUeXBlXCIga2V5PXtyZWNpcGUubGFiZWwrJ2NhbG9yaWVzJ30+Q3Vpc2luZVR5cGU6IHsocmVjaXBlLmN1aXNpbmVUeXBlKycnKS50b1VwcGVyQ2FzZSgpWzBdKyhyZWNpcGUuY3Vpc2luZVR5cGUrJycpLnN1YnN0cmluZygxKX0geydcXHVEODNEXFx1REMzOSd9IENhbG9yaWVzIHBlciBTZXJ2aW5nOiB7TWF0aC5yb3VuZChyZWNpcGUuY2Fsb3JpZXMvcmVjaXBlLnlpZWxkKX08L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9e3JlY2lwZS5sYWJlbCsnaW5ncmVkaWVudCd9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWNpcGUuaW5ncmVkaWVudExpbmVzLm1hcCggKGluZ3JlZGllbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e3JlY2lwZS5sYWJlbCtpbmdyZWRpZW50K2l9PntpbmdyZWRpZW50fTwvbGk+KVxuICAgICAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2xhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGNvbG9yOiAjMDA1RTYxO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbiNjdWlzaW5lVHlwZSB7XFxuICBjb2xvcjogIzAwNUU2MTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMDA1RTYxO1xcbn1cXG5cXG4ucmVjaXBlSW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxudWx7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2F2ZS1yZWNpcGUtQnRuIHtcXG4gIC8qIHdpZHRoOiA1MCU7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzAwNUU2MTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNkMwQzI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnJlY2lwZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucmVjaXBlLWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IGdyZXk7XFxuICBtYXJnaW46IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLyogYmFja2dyb3VuZDogcmdiKDIxOCwgMjE0LCAyMTQpOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMzAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVjaXBlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgY29sb3I6ICMwMDVFNjE7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuI2N1aXNpbmVUeXBlIHtcXG4gIGNvbG9yOiAjMDA1RTYxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDVFNjE7XFxufVxcblxcbi5yZWNpcGVJbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG51bHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zYXZlLXJlY2lwZS1CdG4ge1xcbiAgLyogd2lkdGg6IDUwJTsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMDA1RTYxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2QzBDMjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucmVjaXBlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5yZWNpcGUtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggZ3JleTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjE4LCAyMTQsIDIxNCk7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAzMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlY2lwZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==