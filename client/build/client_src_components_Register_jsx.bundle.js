(self["webpackChunkreactrecipemvp"] = self["webpackChunkreactrecipemvp"] || []).push([["client_src_components_Register_jsx"],{

/***/ "./client/src/components/Register.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Register.jsx ***!
  \********************************************/
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




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var Register = /*#__PURE__*/function (_React$Component) {
  _inherits(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register(props) {
    _classCallCheck(this, Register);

    return _super.call(this, props);
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      if (localStorage.getItem('user') === null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Register or Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Please enter username and password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          htmlFor: "username"
        }, "Username "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "text",
          id: "username",
          className: "register",
          name: "username",
          value: this.props.username,
          onChange: this.props.handleRegister
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          htmlFor: "password"
        }, "Password "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "text",
          id: "password",
          className: "register",
          name: "password",
          value: this.props.password,
          onChange: this.props.handleRegister
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          id: "register-Btn",
          className: "register-Btn",
          onClick: this.props.register
        }, "Register ", "\uD83D\uDC39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          id: "register-Btn",
          className: "register-Btn",
          onClick: this.props.login
        }, "Login ", "\uD83D\uDC39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, this.props.message));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Please Login or register with a different username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          htmlFor: "username"
        }, "Username "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "text",
          id: "username",
          className: "register",
          name: "username",
          placeholder: "".concat(this.props.username, " ( \uD83D\uDC39 Different user? Change here)"),
          onChange: this.props.handleRegister
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          htmlFor: "password"
        }, "Password "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "text",
          id: "password",
          className: "register",
          name: "password",
          value: this.props.password,
          onChange: this.props.handleLogin
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          id: "register-Btn",
          className: "register-Btn",
          onClick: this.props.login
        }, "Login ", "\uD83D\uDC39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          id: "register-Btn",
          className: "register-Btn",
          onClick: this.props.toRegister
        }, "Register ", "\uD83D\uDC39")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, this.props.message));
      }
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHJlY2lwZW12cC8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiUmVnaXN0ZXIiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VybmFtZSIsImhhbmRsZVJlZ2lzdGVyIiwicGFzc3dvcmQiLCJyZWdpc3RlciIsImxvZ2luIiwibWVzc2FnZSIsImhhbmRsZUxvZ2luIiwidG9SZWdpc3RlciIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztJQUVNQyxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixNQUFpQyxJQUFyQyxFQUEyQztBQUN6Qyw0QkFDRSwyRUFDRSxpRkFERixlQUVFLG1HQUZGLGVBR0UsMkVBQ0U7QUFBTyxpQkFBTyxFQUFDO0FBQWYsdUJBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQyxVQUF0QjtBQUFpQyxtQkFBUyxFQUFDLFVBQTNDO0FBQXNELGNBQUksRUFBQyxVQUEzRDtBQUFzRSxlQUFLLEVBQUcsS0FBS0YsS0FBTCxDQUFXRyxRQUF6RjtBQUFtRyxrQkFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBeEgsVUFGRixlQUVrSiw0REFGbEosZUFHRTtBQUFPLGlCQUFPLEVBQUM7QUFBZix1QkFIRixlQUlFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsWUFBRSxFQUFDLFVBQXRCO0FBQWlDLG1CQUFTLEVBQUMsVUFBM0M7QUFBc0QsY0FBSSxFQUFDLFVBQTNEO0FBQXNFLGVBQUssRUFBRyxLQUFLSixLQUFMLENBQVdLLFFBQXpGO0FBQW1HLGtCQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXSTtBQUF4SCxVQUpGLGVBSWtKLDREQUpsSixlQUtFO0FBQVEsWUFBRSxFQUFDLGNBQVg7QUFBMEIsbUJBQVMsRUFBQyxjQUFwQztBQUFtRCxpQkFBTyxFQUFFLEtBQUtKLEtBQUwsQ0FBV007QUFBdkUsd0JBQTJGLGNBQTNGLENBTEYsZUFNRTtBQUFRLFlBQUUsRUFBQyxjQUFYO0FBQTBCLG1CQUFTLEVBQUMsY0FBcEM7QUFBbUQsaUJBQU8sRUFBRSxLQUFLTixLQUFMLENBQVdPO0FBQXZFLHFCQUFxRixjQUFyRixDQU5GLENBSEYsZUFXRSw2REFBSyxLQUFLUCxLQUFMLENBQVdRLE9BQWhCLENBWEYsQ0FERjtBQWVELE9BaEJELE1BZ0JPO0FBQ0wsNEJBQ0UsMkVBQ0UscUVBREYsZUFFRSxrSEFGRixlQUdFLDJFQUNFO0FBQU8saUJBQU8sRUFBQztBQUFmLHVCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFFLEVBQUMsVUFBdEI7QUFBaUMsbUJBQVMsRUFBQyxVQUEzQztBQUFzRCxjQUFJLEVBQUMsVUFBM0Q7QUFBc0UscUJBQVcsWUFBSyxLQUFLUixLQUFMLENBQVdHLFFBQWhCLGlEQUFqRjtBQUF5SixrQkFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBOUssVUFGRixlQUV3TSw0REFGeE0sZUFHRTtBQUFPLGlCQUFPLEVBQUM7QUFBZix1QkFIRixlQUlFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsWUFBRSxFQUFDLFVBQXRCO0FBQWlDLG1CQUFTLEVBQUMsVUFBM0M7QUFBc0QsY0FBSSxFQUFDLFVBQTNEO0FBQXNFLGVBQUssRUFBRyxLQUFLSixLQUFMLENBQVdLLFFBQXpGO0FBQW1HLGtCQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXUztBQUF4SCxVQUpGLGVBSStJLDREQUovSSxlQUtFO0FBQVEsWUFBRSxFQUFDLGNBQVg7QUFBMEIsbUJBQVMsRUFBQyxjQUFwQztBQUFtRCxpQkFBTyxFQUFFLEtBQUtULEtBQUwsQ0FBV087QUFBdkUscUJBQXFGLGNBQXJGLENBTEYsZUFNRTtBQUFRLFlBQUUsRUFBQyxjQUFYO0FBQTBCLG1CQUFTLEVBQUMsY0FBcEM7QUFBbUQsaUJBQU8sRUFBRSxLQUFLUCxLQUFMLENBQVdVO0FBQXZFLHdCQUE2RixjQUE3RixDQU5GLENBSEYsZUFXRSw2REFBSyxLQUFLVixLQUFMLENBQVdRLE9BQWhCLENBWEYsQ0FERjtBQWVEO0FBQ0Y7Ozs7RUF2Q29CRyw0Qzs7QUEwQ3ZCLGlFQUFlWixRQUFmLEUiLCJmaWxlIjoiY2xpZW50X3NyY19jb21wb25lbnRzX1JlZ2lzdGVyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+UmVnaXN0ZXIgb3IgTG9naW48L2gxPlxuICAgICAgICAgIDxoMj5QbGVhc2UgZW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkOjwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWUgPXt0aGlzLnByb3BzLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVSZWdpc3Rlcn0+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWUgPXt0aGlzLnByb3BzLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVSZWdpc3Rlcn0+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWdpc3Rlci1CdG5cIiBjbGFzc05hbWU9XCJyZWdpc3Rlci1CdG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLnJlZ2lzdGVyfT5SZWdpc3RlciB7J1xcdUQ4M0RcXHVEQzM5J308L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWdpc3Rlci1CdG5cIiBjbGFzc05hbWU9XCJyZWdpc3Rlci1CdG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmxvZ2lufT5Mb2dpbiB7J1xcdUQ4M0RcXHVEQzM5J308L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+e3RoaXMucHJvcHMubWVzc2FnZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICAgIDxoMj5QbGVhc2UgTG9naW4gb3IgcmVnaXN0ZXIgd2l0aCBhIGRpZmZlcmVudCB1c2VybmFtZTwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9e2Ake3RoaXMucHJvcHMudXNlcm5hbWV9ICggXFx1RDgzRFxcdURDMzkgRGlmZmVyZW50IHVzZXI/IENoYW5nZSBoZXJlKWB9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZVJlZ2lzdGVyfT48L2lucHV0Pjxicj48L2JyPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZSA9e3RoaXMucHJvcHMucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUxvZ2lufT48L2lucHV0Pjxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlZ2lzdGVyLUJ0blwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyLUJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMubG9naW59PkxvZ2luIHsnXFx1RDgzRFxcdURDMzknfTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlZ2lzdGVyLUJ0blwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyLUJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9SZWdpc3Rlcn0+UmVnaXN0ZXIgeydcXHVEODNEXFx1REMzOSd9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==