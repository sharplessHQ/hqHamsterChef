(self["webpackChunkreactrecipemvp"] = self["webpackChunkreactrecipemvp"] || []).push([["client_src_components_SearchRecipe_jsx"],{

/***/ "./client/src/components/SearchRecipe.jsx":
/*!************************************************!*\
  !*** ./client/src/components/SearchRecipe.jsx ***!
  \************************************************/
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




var SearchRecipe = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchRecipe, _React$Component);

  var _super = _createSuper(SearchRecipe);

  function SearchRecipe(props) {
    var _this;

    _classCallCheck(this, SearchRecipe);

    _this = _super.call(this, props);
    _this.state = {
      key: ''
    };
    return _this;
  }

  _createClass(SearchRecipe, [{
    key: "onChange",
    value: function onChange(e) {
      // console.log(e.target.value);
      this.setState({
        key: e.target.value
      });
    }
  }, {
    key: "keyress",
    value: function keyress(e) {
      // console.log(e.target.value);
      if (e.key === 'Enter') {
        this.search();
      }
    }
  }, {
    key: "search",
    value: function search() {
      this.props.searchRecipe(this.state.key);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search').val('');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "search",
        name: "search",
        id: "search",
        className: "search",
        placeholder: "Search recipe keyword here (Search: fish)",
        onChange: this.onChange.bind(this),
        onKeyPress: this.keyress.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        id: "search-Btn",
        className: "search-Btn",
        onClick: this.search.bind(this)
      }, "Search ", "\uD83D\uDC39"));
    }
  }]);

  return SearchRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchRecipe);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2hSZWNpcGUuanN4Il0sIm5hbWVzIjpbIlNlYXJjaFJlY2lwZSIsInByb3BzIiwic3RhdGUiLCJrZXkiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsInNlYXJjaFJlY2lwZSIsIiQiLCJ2YWwiLCJvbkNoYW5nZSIsImJpbmQiLCJrZXlyZXNzIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxTQUFHLEVBQUU7QUFETSxLQUFiO0FBRmlCO0FBS2xCOzs7O1dBRUQsa0JBQVNDLENBQVQsRUFBWTtBQUNWO0FBQ0EsV0FBS0MsUUFBTCxDQUFlO0FBQ2JGLFdBQUcsRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREQsT0FBZjtBQUdEOzs7V0FFRCxpQkFBUUgsQ0FBUixFQUFXO0FBQ1Q7QUFDQSxVQUFJQSxDQUFDLENBQUNELEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCLGFBQUtLLE1BQUw7QUFDRDtBQUNGOzs7V0FFRCxrQkFBUztBQUNQLFdBQUtQLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QixLQUFLUCxLQUFMLENBQVdDLEdBQW5DO0FBQ0FPLG1EQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsQ0FBaUIsRUFBakI7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSwyRUFDRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUksRUFBQyxRQUExQjtBQUFtQyxVQUFFLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBQyxRQUF6RDtBQUFrRSxtQkFBVyxFQUFDLDJDQUE5RTtBQUEwSCxnQkFBUSxFQUFFLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFwSTtBQUE4SixrQkFBVSxFQUFFLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQjtBQUExSyxRQURGLGVBRUU7QUFBUSxVQUFFLEVBQUMsWUFBWDtBQUF3QixpQkFBUyxFQUFDLFlBQWxDO0FBQStDLGVBQU8sRUFBRSxLQUFLTCxNQUFMLENBQVlLLElBQVosQ0FBaUIsSUFBakI7QUFBeEQsb0JBQXdGLGNBQXhGLENBRkYsQ0FERjtBQU1EOzs7O0VBbEN3QkUsNEM7O0FBcUMzQixpRUFBZWYsWUFBZixFIiwiZmlsZSI6ImNsaWVudF9zcmNfY29tcG9uZW50c19TZWFyY2hSZWNpcGVfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBTZWFyY2hSZWNpcGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAga2V5OiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIGtleTogZS50YXJnZXQudmFsdWVcbiAgICB9IClcbiAgfVxuXG4gIGtleXJlc3MoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIHRoaXMucHJvcHMuc2VhcmNoUmVjaXBlKHRoaXMuc3RhdGUua2V5KTtcbiAgICAkKCcjc2VhcmNoJykudmFsKCcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCByZWNpcGUga2V5d29yZCBoZXJlIChTZWFyY2g6IGZpc2gpXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gb25LZXlQcmVzcz17dGhpcy5rZXlyZXNzLmJpbmQodGhpcyl9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2gtQnRuXCIgY2xhc3NOYW1lPVwic2VhcmNoLUJ0blwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoLmJpbmQodGhpcyl9PlNlYXJjaCB7J1xcdUQ4M0RcXHVEQzM5J308L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZWNpcGU7XG4iXSwic291cmNlUm9vdCI6IiJ9