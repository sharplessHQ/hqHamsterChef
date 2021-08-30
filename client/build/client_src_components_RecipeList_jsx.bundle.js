(self["webpackChunkreactrecipemvp"] = self["webpackChunkreactrecipemvp"] || []).push([["client_src_components_RecipeList_jsx"],{

/***/ "./client/src/components/RecipeList.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/RecipeList.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _RecipeList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeList.css */ "./client/src/components/RecipeList.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var RecipeList = /*#__PURE__*/function (_React$Component) {
  _inherits(RecipeList, _React$Component);

  var _super = _createSuper(RecipeList);

  function RecipeList(props) {
    var _this;

    _classCallCheck(this, RecipeList);

    _this = _super.call(this, props);
    _this.state = {
      keyword: 'pie'
    };
    return _this;
  }

  _createClass(RecipeList, [{
    key: "getKeyRecipes",
    value: function getKeyRecipes(e) {
      this.setState({
        keyword: e.target.textContent
      });
      this.props.getRecipes(e.target.textContent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "There are total ", this.props.recipes.length, " recipes in your database!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "fav-recipe-Btn",
        className: "fav-recipe-Btn",
        onClick: this.props.showFavRecipe
      }, " Show Fav ", "\uD83D\uDC39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "fav-recipe-Btn",
        className: "fav-recipe-Btn",
        onClick: this.props.showAllRecipe
      }, " Show All ", "\uD83D\uDC39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "fav-recipe-Btn",
        className: "fav-recipe-Btn",
        onClick: this.props.deleteAllRecipe
      }, " Delete All ", "\uD83D\uDC39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        id: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Keyword List"), this.props.keywordList.map(function (keyword) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          onClick: _this2.getKeyRecipes.bind(_this2),
          id: "keyList",
          key: _this2.props.keywordList.indexOf(keyword)
        }, keyword);
      })))));
    }
  }]);

  return RecipeList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/RecipeList.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/RecipeList.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "h3 {\n  color: #005E61;\n}\n\ntable {\n  font-weight: bold;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\ntd {\n  border: 1px solid #00A8AD;\n  padding-inline-end: 10px;\n  padding-inline-start: 10px;\n}\n\n#keyList {\n  color: #005E61;\n}\n\n.fav-recipe-Btn {\n  /* width: 50%; */\n  cursor: pointer;\n  color: #005E61;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: #06C0C2;\n  margin-left: 20px;\n}", "",{"version":3,"sources":["webpack://./client/src/components/RecipeList.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["h3 {\n  color: #005E61;\n}\n\ntable {\n  font-weight: bold;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\ntd {\n  border: 1px solid #00A8AD;\n  padding-inline-end: 10px;\n  padding-inline-start: 10px;\n}\n\n#keyList {\n  color: #005E61;\n}\n\n.fav-recipe-Btn {\n  /* width: 50%; */\n  cursor: pointer;\n  color: #005E61;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 10px;\n  background-color: #06C0C2;\n  margin-left: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/src/components/RecipeList.css":
/*!**********************************************!*\
  !*** ./client/src/components/RecipeList.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_RecipeList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./RecipeList.css */ "./node_modules/css-loader/dist/cjs.js!./client/src/components/RecipeList.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_RecipeList_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_RecipeList_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVMaXN0LmpzeCIsIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVMaXN0LmNzcyIsIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVMaXN0LmNzcz83OTk1Il0sIm5hbWVzIjpbIlJlY2lwZUxpc3QiLCJwcm9wcyIsInN0YXRlIiwia2V5d29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInRleHRDb250ZW50IiwiZ2V0UmVjaXBlcyIsInJlY2lwZXMiLCJsZW5ndGgiLCJzaG93RmF2UmVjaXBlIiwic2hvd0FsbFJlY2lwZSIsImRlbGV0ZUFsbFJlY2lwZSIsImtleXdvcmRMaXN0IiwibWFwIiwiZ2V0S2V5UmVjaXBlcyIsImJpbmQiLCJpbmRleE9mIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFHTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUU7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7O1dBRUQsdUJBQWNDLENBQWQsRUFBaUI7QUFDZixXQUFLQyxRQUFMLENBQWU7QUFDYkYsZUFBTyxFQUFFQyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFETCxPQUFmO0FBR0EsV0FBS04sS0FBTCxDQUFXTyxVQUFYLENBQXNCSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsV0FBL0I7QUFDRDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDUCwwQkFDRSwyRUFDRSxpRkFBcUIsS0FBS04sS0FBTCxDQUFXUSxPQUFYLENBQW1CQyxNQUF4Qyw2Q0FDRTtBQUFRLFVBQUUsRUFBQyxnQkFBWDtBQUE0QixpQkFBUyxFQUFDLGdCQUF0QztBQUF1RCxlQUFPLEVBQUUsS0FBS1QsS0FBTCxDQUFXVTtBQUEzRSx1QkFBcUcsY0FBckcsQ0FERixlQUVFO0FBQVEsVUFBRSxFQUFDLGdCQUFYO0FBQTRCLGlCQUFTLEVBQUMsZ0JBQXRDO0FBQXVELGVBQU8sRUFBRSxLQUFLVixLQUFMLENBQVdXO0FBQTNFLHVCQUFxRyxjQUFyRyxDQUZGLGVBR0U7QUFBUSxVQUFFLEVBQUMsZ0JBQVg7QUFBNEIsaUJBQVMsRUFBQyxnQkFBdEM7QUFBdUQsZUFBTyxFQUFFLEtBQUtYLEtBQUwsQ0FBV1k7QUFBM0UseUJBQXlHLGNBQXpHLENBSEYsQ0FERixlQU1FO0FBQU8sVUFBRSxFQUFDO0FBQVYsc0JBQ0UsNkVBQ0UsMEVBQ0EsNERBREEsQ0FERixDQURGLGVBT0UsNkVBQ0UsMEVBQ0EsNEVBREEsRUFHRSxLQUFLWixLQUFMLENBQVdhLFdBQVgsQ0FBdUJDLEdBQXZCLENBQTRCLFVBQUFaLE9BQU87QUFBQSw0QkFDaEM7QUFBSSxpQkFBTyxFQUFFLE1BQUksQ0FBQ2EsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsTUFBeEIsQ0FBYjtBQUE0QyxZQUFFLEVBQUMsU0FBL0M7QUFBeUQsYUFBRyxFQUFFLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV2EsV0FBWCxDQUF1QkksT0FBdkIsQ0FBK0JmLE9BQS9CO0FBQTlELFdBQXdHQSxPQUF4RyxDQURnQztBQUFBLE9BQW5DLENBSEYsQ0FERixDQVBGLENBTkYsQ0FERjtBQTJCRDs7OztFQTNDc0JnQiw0Qzs7QUErQ3pCLGlFQUFlbkIsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw4Q0FBOEMsbUJBQW1CLEdBQUcsV0FBVyxzQkFBc0Isc0JBQXNCLHVCQUF1Qix3QkFBd0IsR0FBRyxRQUFRLDhCQUE4Qiw2QkFBNkIsK0JBQStCLEdBQUcsY0FBYyxtQkFBbUIsR0FBRyxxQkFBcUIsa0JBQWtCLHVCQUF1QixtQkFBbUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsOEJBQThCLHNCQUFzQixHQUFHLE9BQU8sdUdBQXVHLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsOEJBQThCLG1CQUFtQixHQUFHLFdBQVcsc0JBQXNCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcsUUFBUSw4QkFBOEIsNkJBQTZCLCtCQUErQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcscUJBQXFCLGtCQUFrQix1QkFBdUIsbUJBQW1CLHNCQUFzQixpQkFBaUIsd0JBQXdCLDhCQUE4QixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDdDJDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBa0c7O0FBRWxHOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSXhCLGlFQUFlLCtGQUFjLE1BQU0sRSIsImZpbGUiOiJjbGllbnRfc3JjX2NvbXBvbmVudHNfUmVjaXBlTGlzdF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9SZWNpcGVMaXN0LmNzcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmNsYXNzIFJlY2lwZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAga2V5d29yZDogJ3BpZSdcbiAgICB9XG4gIH1cblxuICBnZXRLZXlSZWNpcGVzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICBrZXl3b3JkOiBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZ2V0UmVjaXBlcyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5UaGVyZSBhcmUgdG90YWwge3RoaXMucHJvcHMucmVjaXBlcy5sZW5ndGh9IHJlY2lwZXMgaW4geW91ciBkYXRhYmFzZSFcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZmF2LXJlY2lwZS1CdG5cIiBjbGFzc05hbWU9XCJmYXYtcmVjaXBlLUJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd0ZhdlJlY2lwZX0+IFNob3cgRmF2IHsnXFx1RDgzRFxcdURDMzknfTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJmYXYtcmVjaXBlLUJ0blwiIGNsYXNzTmFtZT1cImZhdi1yZWNpcGUtQnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWxsUmVjaXBlfT4gU2hvdyBBbGwgeydcXHVEODNEXFx1REMzOSd9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImZhdi1yZWNpcGUtQnRuXCIgY2xhc3NOYW1lPVwiZmF2LXJlY2lwZS1CdG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUFsbFJlY2lwZX0+IERlbGV0ZSBBbGwgeydcXHVEODNEXFx1REMzOSd9PC9idXR0b24+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDx0YWJsZSBpZD1cInRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+S2V5d29yZCBMaXN0PC90aD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5rZXl3b3JkTGlzdC5tYXAoIGtleXdvcmQgPT5cbiAgICAgICAgICAgICAgICAoPHRkIG9uQ2xpY2s9e3RoaXMuZ2V0S2V5UmVjaXBlcy5iaW5kKHRoaXMpfSBpZD1cImtleUxpc3RcIiBrZXk9e3RoaXMucHJvcHMua2V5d29yZExpc3QuaW5kZXhPZihrZXl3b3JkKX0+e2tleXdvcmR9PC90ZD4pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUxpc3Q7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMyB7XFxuICBjb2xvcjogIzAwNUU2MTtcXG59XFxuXFxudGFibGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbnRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEE4QUQ7XFxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcXG59XFxuXFxuI2tleUxpc3Qge1xcbiAgY29sb3I6ICMwMDVFNjE7XFxufVxcblxcbi5mYXYtcmVjaXBlLUJ0biB7XFxuICAvKiB3aWR0aDogNTAlOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwMDVFNjE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZDMEMyO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWNpcGVMaXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgzIHtcXG4gIGNvbG9yOiAjMDA1RTYxO1xcbn1cXG5cXG50YWJsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQThBRDtcXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xcbn1cXG5cXG4ja2V5TGlzdCB7XFxuICBjb2xvcjogIzAwNUU2MTtcXG59XFxuXFxuLmZhdi1yZWNpcGUtQnRuIHtcXG4gIC8qIHdpZHRoOiA1MCU7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzAwNUU2MTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNkMwQzI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVjaXBlTGlzdC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9