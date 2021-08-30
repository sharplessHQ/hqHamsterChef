(self["webpackChunkreactrecipemvp"] = self["webpackChunkreactrecipemvp"] || []).push([["client_src_components_SearchIngredients_jsx"],{

/***/ "./client/src/components/SearchIngredients.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/SearchIngredients.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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




var SearchIngredients = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchIngredients, _React$Component);

  var _super = _createSuper(SearchIngredients);

  function SearchIngredients(props) {
    var _this;

    _classCallCheck(this, SearchIngredients);

    _this = _super.call(this, props);
    _this.state = {
      ingredients: []
    };
    return _this;
  }

  _createClass(SearchIngredients, [{
    key: "onChange",
    value: function onChange(e) {
      var values = e.target.value; // console.log('change,,,,', values.toUpperCase().split(' '));

      this.setState({
        ingredients: values.toUpperCase().split(' ')
      });
    }
  }, {
    key: "keyress",
    value: function keyress(e) {
      var values = e.target.value; // console.log(values, values.toUpperCase().split(' '));

      if (e.key === 'Enter') {
        // this.setState( {
        //   ingredients: values.toUpperCase().split(' ')
        // } )
        this.search();
      }
    }
  }, {
    key: "search",
    value: function search() {
      this.props.getRecipes(this.state.ingredients);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#searchIng').val('');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "search",
        name: "search",
        id: "searchIng",
        className: "search",
        placeholder: "Need cooking ideas from your saved recipes? (Search: cider lemon)",
        onChange: this.onChange.bind(this),
        onKeyPress: this.keyress.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "searchIng-Btn",
        className: "search-Btn",
        onClick: this.search.bind(this)
      }, "Search ", "\uD83D\uDC39"));
    }
  }]);

  return SearchIngredients;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIngredients);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2hJbmdyZWRpZW50cy5qc3giXSwibmFtZXMiOlsiU2VhcmNoSW5ncmVkaWVudHMiLCJwcm9wcyIsInN0YXRlIiwiaW5ncmVkaWVudHMiLCJlIiwidmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJrZXkiLCJzZWFyY2giLCJnZXRSZWNpcGVzIiwiJCIsInZhbCIsIm9uQ2hhbmdlIiwiYmluZCIsImtleXJlc3MiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxpQjs7Ozs7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQUFFO0FBREYsS0FBYjtBQUZpQjtBQUtsQjs7OztXQUVELGtCQUFTQyxDQUFULEVBQVk7QUFDVixVQUFJQyxNQUFNLEdBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQixDQURVLENBRVY7O0FBQ0EsV0FBS0MsUUFBTCxDQUFlO0FBQ2JMLG1CQUFXLEVBQUVFLE1BQU0sQ0FBQ0ksV0FBUCxHQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0I7QUFEQSxPQUFmO0FBR0Q7OztXQUVELGlCQUFRTixDQUFSLEVBQVc7QUFDVCxVQUFJQyxNQUFNLEdBQUVELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFyQixDQURTLENBRVQ7O0FBQ0EsVUFBSUgsQ0FBQyxDQUFDTyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFLQyxNQUFMO0FBQ0Q7QUFDRjs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLWCxLQUFMLENBQVdZLFVBQVgsQ0FBc0IsS0FBS1gsS0FBTCxDQUFXQyxXQUFqQztBQUNBVyxtREFBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsR0FBaEIsQ0FBb0IsRUFBcEI7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSwyRUFDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUksRUFBQyxRQUExQjtBQUFtQyxVQUFFLEVBQUMsV0FBdEM7QUFBa0QsaUJBQVMsRUFBQyxRQUE1RDtBQUFxRSxtQkFBVyxFQUFDLG1FQUFqRjtBQUFxSixnQkFBUSxFQUFFLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUEvSjtBQUF5TCxrQkFBVSxFQUFFLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQjtBQUFyTSxRQURGLGVBRUU7QUFBUSxVQUFFLEVBQUMsZUFBWDtBQUEyQixpQkFBUyxFQUFDLFlBQXJDO0FBQWtELGVBQU8sRUFBRSxLQUFLTCxNQUFMLENBQVlLLElBQVosQ0FBaUIsSUFBakI7QUFBM0Qsb0JBQTJGLGNBQTNGLENBRkYsQ0FERjtBQU1EOzs7O0VBdkM2QkUsNEM7O0FBMENoQyxpRUFBZW5CLGlCQUFmLEUiLCJmaWxlIjoiY2xpZW50X3NyY19jb21wb25lbnRzX1NlYXJjaEluZ3JlZGllbnRzX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgU2VhcmNoSW5ncmVkaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5ncmVkaWVudHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdmFsdWVzPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlLCwsLCcsIHZhbHVlcy50b1VwcGVyQ2FzZSgpLnNwbGl0KCcgJykpO1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIGluZ3JlZGllbnRzOiB2YWx1ZXMudG9VcHBlckNhc2UoKS5zcGxpdCgnICcpXG4gICAgfSApXG4gIH1cblxuICBrZXlyZXNzKGUpIHtcbiAgICBsZXQgdmFsdWVzPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMsIHZhbHVlcy50b1VwcGVyQ2FzZSgpLnNwbGl0KCcgJykpO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSgge1xuICAgICAgLy8gICBpbmdyZWRpZW50czogdmFsdWVzLnRvVXBwZXJDYXNlKCkuc3BsaXQoJyAnKVxuICAgICAgLy8gfSApXG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFJlY2lwZXModGhpcy5zdGF0ZS5pbmdyZWRpZW50cyk7XG4gICAgJCgnI3NlYXJjaEluZycpLnZhbCgnJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgbmFtZT1cInNlYXJjaFwiIGlkPVwic2VhcmNoSW5nXCIgY2xhc3NOYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJOZWVkIGNvb2tpbmcgaWRlYXMgZnJvbSB5b3VyIHNhdmVkIHJlY2lwZXM/IChTZWFyY2g6IGNpZGVyIGxlbW9uKVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IG9uS2V5UHJlc3M9e3RoaXMua2V5cmVzcy5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGlkPVwic2VhcmNoSW5nLUJ0blwiIGNsYXNzTmFtZT1cInNlYXJjaC1CdG5cIiBvbkNsaWNrPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfT5TZWFyY2ggeydcXHVEODNEXFx1REMzOSd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5ncmVkaWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9