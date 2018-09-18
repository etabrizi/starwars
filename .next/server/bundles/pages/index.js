module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/emyrtabrizi/Documents/star-wars-test/components/bio.js";



var Bio = function Bio(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-586672768"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-586672768"
  }, "Name: ", props.selectedStar), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-586672768"
  }, "Height: ", props.height), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-586672768"
  }, "Hair colour: ", props.hairColor), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-586672768"
  }, "Skin color: ", props.skinColor), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-586672768"
  }, "Eye color: ", props.eyeColor), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-586672768"
  }, "Birth year: ", props.birthYear), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-586672768"
  }, "Gender: ", props.gender), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "586672768",
    css: "p.jsx-586672768{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUlTLFNBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9iaW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VteXJ0YWJyaXppL0RvY3VtZW50cy9zdGFyLXdhcnMtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJpbyA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxwPk5hbWU6IHtwcm9wcy5zZWxlY3RlZFN0YXJ9PC9wPlxuICAgICAgICA8cD5IZWlnaHQ6IHtwcm9wcy5oZWlnaHR9PC9wPlxuICAgICAgICA8cD5IYWlyIGNvbG91cjoge3Byb3BzLmhhaXJDb2xvcn08L3A+XG4gICAgICAgIDxwPlNraW4gY29sb3I6IHtwcm9wcy5za2luQ29sb3J9PC9wPlxuICAgICAgICA8cD5FeWUgY29sb3I6IHtwcm9wcy5leWVDb2xvcn08L3A+XG4gICAgICAgIDxwPkJpcnRoIHllYXI6IHtwcm9wcy5iaXJ0aFllYXJ9PC9wPlxuICAgICAgICA8cD5HZW5kZXI6IHtwcm9wcy5nZW5kZXJ9PC9wPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBwIHsgXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgICAgIFxuICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBCaW87Il19 */\n/*@ sourceURL=components/bio.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Bio);

/***/ }),

/***/ "./components/character.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio__ = __webpack_require__("./components/bio.js");
var _jsxFileName = "/Users/emyrtabrizi/Documents/star-wars-test/components/character.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Character =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Character, _React$Component);

  function Character() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Character);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Character.__proto__ || Object.getPrototypeOf(Character)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        counter: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "counterCharacterIncrease", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        if (_this.state.counter === _this.props.peopleThings.length - 1) {
          _this.setState({
            counter: 0
          });
        } else {
          _this.setState({
            counter: _this.state.counter + 1
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "counterCharacterDecrease", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        if (_this.state.counter === 0) {
          _this.setState({
            counter: _this.props.peopleThings.length - 1
          });
        } else {
          _this.setState({
            counter: _this.state.counter - 1
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "jumpCharacter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _this.setState({
          counter: event.target.id
        });
      }
    }), _temp));
  }

  _createClass(Character, [{
    key: "render",
    value: function render() {
      var fullList = this.props.peopleThings.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "#",
          id: i,
          onClick: this.jumpCharacter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, item.name));
      }, this);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-3382866555"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-3382866555" + " " + "body-content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterIncrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3382866555" + " " + "cycle-up"
      }, "Cycle up"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__bio__["a" /* default */], {
        selectedStar: this.props.peopleThings[this.state.counter].name,
        height: this.props.peopleThings[this.state.counter].height,
        hairColor: this.props.peopleThings[this.state.counter].hair_color,
        skinColor: this.props.peopleThings[this.state.counter].skin_color,
        eyeColor: this.props.peopleThings[this.state.counter].eye_color,
        birthYear: this.props.peopleThings[this.state.counter].birth_year,
        gender: this.props.peopleThings[this.state.counter].gender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3382866555"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterDecrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3382866555" + " " + "cycle-down"
      }, "Cycle down")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3382866555" + " " + "lower-links"
      }, fullList), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3382866555",
        css: ".body-content.jsx-3382866555{background:#fff;color:#000;text-align:center;padding:30px;border-radius:20px;margin:20px;}.cycle-up.jsx-3382866555{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;right:-70px;height:50px;width:50px;text-indent:-5555px;}.cycle-down.jsx-3382866555{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;left:-70px;height:50px;width:50px;text-indent:-5555px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIsQUFJNkMsQUFTeTBCLEFBV0UsZ0JBbkJoMUIsV0FDTyxrQkFDTCxhQUNNLG1CQUNQLFlBQ2hCLG93QkFJNEIsRUFXQSwwQkFWVixFQVdBLGdCQVZSLEVBV0EsUUFWRSxFQVdELFVBVkMsQ0FXQSxXQVZELENBV0EsVUFWUyxDQVdBLG1CQVZwQixDQVdBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lbXlydGFicml6aS9Eb2N1bWVudHMvc3Rhci13YXJzLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmlvIGZyb20gJy4vYmlvJ1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvdW50ZXI6IDBcbiAgICB9XG4gICAgY291bnRlckNoYXJhY3RlckluY3JlYXNlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09ICh0aGlzLnByb3BzLnBlb3BsZVRoaW5ncy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IDAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY291bnRlckNoYXJhY3RlckRlY3JlYXNlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAodGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubGVuZ3RoIC0gMSkgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgLSAxIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcENoYXJhY3RlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogZXZlbnQudGFyZ2V0LmlkIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZ1bGxMaXN0ID0gdGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgaHJlZj1cIiNcIiBpZD17aX0gb25DbGljaz17dGhpcy5qdW1wQ2hhcmFjdGVyfT57aXRlbS5uYW1lfTwvYT48L2xpPlxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjeWNsZS11cFwiIG9uQ2xpY2s9e3RoaXMuY291bnRlckNoYXJhY3RlckluY3JlYXNlfT5DeWNsZSB1cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPEJpb1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdGFyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFpckNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmhhaXJfY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBza2luQ29sb3I9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uc2tpbl9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV5ZUNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmV5ZV9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoWWVhcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5iaXJ0aF95ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3ljbGUtZG93blwiIG9uQ2xpY2s9e3RoaXMuY291bnRlckNoYXJhY3RlckRlY3JlYXNlfT5DeWNsZSBkb3duPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibG93ZXItbGlua3NcIj57ZnVsbExpc3R9PC91bD5cblxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9keS1jb250ZW50IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLXVwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDJTNGeG1sJTIwdmVyc2lvbiUzRCUyMjEuMCUyMiUyMGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlMEElM0MlMjEtLSUyMEdlbmVyYXRvciUzQSUyMEFkb2JlJTIwSWxsdXN0cmF0b3IlMjAyMi4xLjAlMkMlMjBTVkclMjBFeHBvcnQlMjBQbHVnLUluJTIwLiUyMFNWRyUyMFZlcnNpb24lM0ElMjA2LjAwJTIwQnVpbGQlMjAwJTI5JTIwJTIwLS0lM0UlMEElM0NzdmclMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIwaWQlM0QlMjJMYXllcl8xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIweG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMTk5OS94bGluayUyMiUyMHglM0QlMjIxMDAlMjUlMjIlMjB5JTNEJTIyMTAwJTI1JTIyJTBBJTA5JTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNzUuNiUyMDc1LjYlMjIlMjBzdHlsZSUzRCUyMmVuYWJsZS1iYWNrZ3JvdW5kJTNBbmV3JTIwMCUyMDAlMjA3NS42JTIwNzUuNiUzQiUyMiUyMHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlMEElM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0L2NzcyUyMiUzRSUwQSUwOS5zdDAlN0JmaWxsJTNBJTIzNkQ2RDZDJTNCJTdEJTBBJTNDL3N0eWxlJTNFJTBBJTNDY2lyY2xlJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBjeCUzRCUyMjM3LjglMjIlMjBjeSUzRCUyMjM3LjglMjIlMjByJTNEJTIyMzcuOCUyMi8lM0UlMEElM0Nwb2x5Z29uJTIwcG9pbnRzJTNEJTIyNTYuNiUyQzM2LjElMjAyNyUyQzE5JTIwMjclMkM1My4zJTIwJTIyLyUzRSUwQSUzQy9zdmclM0UlMEEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC03MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLWRvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0MlM0Z4bWwlMjB2ZXJzaW9uJTNEJTIyMS4wJTIyJTIwZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUwQSUzQyUyMS0tJTIwR2VuZXJhdG9yJTNBJTIwQWRvYmUlMjBJbGx1c3RyYXRvciUyMDIyLjEuMCUyQyUyMFNWRyUyMEV4cG9ydCUyMFBsdWctSW4lMjAuJTIwU1ZHJTIwVmVyc2lvbiUzQSUyMDYuMDAlMjBCdWlsZCUyMDAlMjklMjAlMjAtLSUzRSUwQSUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjBpZCUzRCUyMkxheWVyXzElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTIyJTIweCUzRCUyMjEwMCUyNSUyMiUyMHklM0QlMjIxMDAlMjUlMjIlMEElMDklMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA3NS42JTIwNzUuNiUyMiUyMHN0eWxlJTNEJTIyZW5hYmxlLWJhY2tncm91bmQlM0FuZXclMjAwJTIwMCUyMDc1LjYlMjA3NS42JTNCJTIyJTIweG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUwQSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQvY3NzJTIyJTNFJTBBJTA5LnN0MCU3QmZpbGwlM0ElMjM2RDZENkMlM0IlN0QlMEElM0Mvc3R5bGUlM0UlMEElM0NjaXJjbGUlMjBjbGFzcyUzRCUyMnN0MCUyMiUyMGN4JTNEJTIyMzcuOCUyMiUyMGN5JTNEJTIyMzcuOCUyMiUyMHIlM0QlMjIzNy44JTIyLyUzRSUwQSUzQ3BvbHlnb24lMjBwb2ludHMlM0QlMjIxOSUyQzM2LjElMjA0OC42JTJDMTklMjA0OC42JTJDNTMuMyUyMCUyMi8lM0UlMEElM0Mvc3ZnJTNFJTBBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC03MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG5cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyJdfQ== */\n/*@ sourceURL=components/character.js */"
      }));
    }
  }]);

  return Character;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/Users/emyrtabrizi/Documents/star-wars-test/components/layout.js";





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-741030831"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-741030831" + " " + "wrapper animated fadeIn"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-741030831"
  }, "Star wars"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-741030831"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-741030831" + " " + "star-wars-logo"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-741030831"
  }, "Star wars")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__navigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "741030831",
    css: "body{background:#000;margin:0;padding:0;color:#fff;}body *{box-sizing:border-box;}.wrapper{border:2px solid yellow;width:480px;margin:40px auto;border-radius:40px;position:relative;font-family:arial;}header{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%20693.6%20419.4%22%20style%3D%22enable-background%3Anew%200%200%20693.6%20419.4%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%23FFE81F%3B%7D%0A%3C/style%3E%0A%3Cg%20id%3D%22Layer_2_1_%22%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M131%2C209.8l9.5%2C27.8c5.1%2C15%2C9.7%2C27.1%2C10.3%2C27.1c0%2C0%2C0%2C0%2C0%2C0c0.7-0.6%2C19.2-54.4%2C19.2-54.4h35.9l-43.3%2C126.2%0A%09%09%09h-25c0%2C0-26.6-76.9-26.5-77.2l-27.8%2C76.3H58.6L15.8%2C209.8l35.7%2C0c0%2C0%2C19.6%2C55.5%2C19.8%2C55.5c0%2C0%2C0%2C0%2C0%2C0l19.5-55.5L131%2C209.8%0A%09%09%09%20M3.6%2C201.1l3.9%2C11.6l42.8%2C125.7l2%2C5.9h6.3h24.7h6.1l2.1-5.7l19.3-53c1.7%2C4.8%2C3.5%2C10.1%2C5.3%2C15.3c6.6%2C19.3%2C13.3%2C38.5%2C13.3%2C38.5%0A%09%09%09l2%2C5.9h6.2h25h6.2l2-5.9l43.3-126.2l4-11.6h-12.2H170h-6.2l-2%2C5.9c-3.2%2C9.4-7.6%2C21.9-11.2%2C32.4c-0.6-1.6-1.1-3.3-1.7-5l-9.5-27.8%0A%09%09%09l-2-5.9H131H90.9h-6.2l-2.1%2C5.8l-11.4%2C32.4c-3.8-10.6-8.1-22.9-11.5-32.4l-2.1-5.8l-6.2%2C0l-35.7%2C0L3.6%2C201.1L3.6%2C201.1z%22/%3E%0A%09%3C/g%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M684.1%2C209.3l-0.1%2C33.1c0%2C0-35.6-0.1-53.8-0.1c-6%2C0-10.1%2C0-10.3%2C0c-3.1%2C0.6-5.1%2C7.2-4.2%2C10.1%0A%09%09%09c0.4%2C1.5%2C3.7%2C6.3%2C7.2%2C10.7c3.5%2C4.4%2C9.3%2C11.7%2C12.9%2C16.1c9.1%2C11.3%2C10.3%2C13.6%2C11.2%2C20.1c1.4%2C10.6-3.6%2C22-12.9%2C29.6%0A%09%09%09c-9.3%2C7.6-8.9%2C7.6-77.9%2C7.6c-1%2C0-2%2C0-3%2C0c-42%2C0-64.2-0.4-67.4-1.1c-5.7-1.3-14.9-8.8-39.1-32c-8.7-8.3-16.7-15.6-17.1-15.6%0A%09%09%09c0%2C0%2C0%2C0%2C0%2C0l-0.3%2C48.7l-39.2-0.2l-0.2-125.5h49.4h38c26.3%2C1%2C44.2%2C27.2%2C40.6%2C43.9c-0.8%2C3.8-2.9%2C9.3-4.6%2C12.2%0A%09%09%09c-3.5%2C6-12.4%2C13.7-19.7%2C17c-2.7%2C1.2-4.9%2C2.6-4.9%2C3.1c0%2C1.9%2C8.8%2C10.5%2C12.1%2C11.9c2.8%2C1.2%2C11%2C1.4%2C47.2%2C1.4c4.2%2C0%2C8.1%2C0%2C11.6%2C0%0A%09%09%09c36.3%2C0%2C34.5-0.3%2C37.3-6.3c2-4.2%2C0.5-6.7-13.4-22.3c-17.5-17.4-15.7-25.8-15.8-32c-0.3-7.4%2C5.6-30.6%2C35.8-30.6L684.1%2C209.3%0A%09%09%09%20M449.2%2C267.3c16.8%2C0%2C20.2-0.3%2C23.8-1.8c12.1-5.2%2C12.7-20.7%2C1.1-27.6c-2.5-1.5-5.8-1.8-24-1.9l-21-0.1c0.2%2C0.2-0.1%2C30.1-0.1%2C30.1%0A%09%09%09S434.3%2C267.3%2C449.2%2C267.3%20M692.8%2C200.6h-8.8h-80.6c-17.5%2C0-27.9%2C6.9-33.5%2C12.7c-9.1%2C9.4-11.3%2C21.3-11.1%2C26.9c0%2C0.5%2C0%2C0.9%2C0%2C1.4%0A%09%09%09c-0.1%2C9.1%2C1.3%2C19.4%2C18.2%2C36.3c3.3%2C3.8%2C8.9%2C10.1%2C11.1%2C13.2c-4.6%2C0.6-16.4%2C0.6-28.7%2C0.6h-5.2l-6.3%2C0c-21.7%2C0-40.1-0.1-43.8-0.8%0A%09%09%09c-0.5-0.3-1.3-0.9-2.1-1.6c7.5-4.6%2C15.1-11.8%2C18.7-17.9c2.2-3.7%2C4.6-10.1%2C5.6-14.8c2.2-10.5-1.4-23.2-9.8-33.9%0A%09%09%09c-9.8-12.5-24-20-39-20.6l-0.2%2C0h-0.2h-38h-49.4h-8.8l0%2C8.8l0.2%2C125.5l0%2C8.7l8.7%2C0l39.2%2C0.2l8.7%2C0l0.1-8.7l0.2-29.2%0A%09%09%09c0.8%2C0.8%2C1.6%2C1.5%2C2.5%2C2.4c26.5%2C25.4%2C35.3%2C32.4%2C43.2%2C34.2c2.2%2C0.5%2C5.7%2C1.3%2C69.4%2C1.3h3c34.4%2C0%2C51.7%2C0%2C62-1%0A%09%09%09c11.8-1.1%2C15.6-3.8%2C21.2-8.4l0.2-0.2c11.7-9.5%2C17.8-23.8%2C16.1-37.4c-1.1-8.9-3.5-12.5-13-24.4l-2.8-3.5c-3.3-4.1-7.3-9.2-10-12.5%0A%09%09%09c-2.2-2.7-3.9-5.1-4.9-6.7c1.3%2C0%2C3.1%2C0%2C5.4%2C0c17.9%2C0%2C53.4%2C0.1%2C53.7%2C0.1l8.7%2C0l0-8.7l0.1-33.1L692.8%2C200.6L692.8%2C200.6z%0A%09%09%09%20M437.8%2C258.3c0-2.2%2C0-4.7%2C0-7.2c0-2.2%2C0-4.4%2C0-6.4l12.2%2C0.1c7%2C0%2C17.6%2C0.1%2C19.6%2C0.7c2.6%2C1.6%2C4.1%2C4.1%2C3.9%2C6.6%0A%09%09%09c-0.1%2C1.4-0.7%2C3.9-4.2%2C5.4c-1.9%2C0.8-5%2C1.1-20.3%2C1.1C444.4%2C258.6%2C440.6%2C258.4%2C437.8%2C258.3L437.8%2C258.3z%22/%3E%0A%09%3C/g%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M310.3%2C208.8l44%2C126.6l-35.8%2C0.2l-6-19l-64.1-0.5l-5.7%2C19l-35.5-0.4l43.4-125.8L310.3%2C208.8%20M281.4%2C227.4%0A%09%09%09c-0.1%2C0.4-5.6%2C15.5-11.2%2C30.7c-5.6%2C15.3-11.2%2C30.6-11.3%2C30.7c0%2C0%2C0%2C0%2C0%2C0l0%2C0c0%2C0%2C0%2C0%2C0%2C0c0.1%2C0%2C20-0.1%2C32.7-0.1%0A%09%09%09c6%2C0%2C10.3%2C0%2C10.4%2C0c0%2C0%2C0%2C0%2C0%2C0s0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0C301.9%2C288.1%2C281.5%2C228.1%2C281.4%2C227.4C281.4%2C227.4%2C281.4%2C227.4%2C281.4%2C227.4%0A%09%09%09L281.4%2C227.4C281.4%2C227.4%2C281.4%2C227.4%2C281.4%2C227.4%20M316.5%2C200.1l-6.2%2C0l-59.6%2C0.1l-6.2%2C0l-2%2C5.9L199%2C331.8l-4%2C11.5l12.1%2C0.1%0A%09%09%09l35.5%2C0.4l6.6%2C0.1l1.9-6.3l3.8-12.7l51.2%2C0.4l4%2C12.9l1.9%2C6.2l6.4%2C0l35.8-0.2l12.2-0.1l-4-11.5l-44-126.6L316.5%2C200.1L316.5%2C200.1z%0A%09%09%09%20M271.6%2C279.9c1.7-4.5%2C3.9-10.6%2C6.9-18.9c0.9-2.6%2C1.8-5%2C2.6-7.1c0.7%2C2.1%2C1.5%2C4.5%2C2.4%2C7c0.7%2C2.1%2C3.8%2C11.2%2C6.5%2C19%0A%09%09%09C282%2C279.9%2C276.1%2C279.9%2C271.6%2C279.9L271.6%2C279.9z%22/%3E%0A%09%3C/g%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M325.1%2C57.7V89h-62.5v95.5h-37.3V88.9l-73%2C0.2c-8.8%2C0-10%2C7-10%2C9.7c0%2C3.3%2C2.2%2C6.6%2C14%2C21.6%0A%09%09%09c7.7%2C9.7%2C14.7%2C19.4%2C15.6%2C21.5c5.1%2C11.7-1.5%2C29.8-13.4%2C37.2c-8.5%2C5.3-7.1%2C5.4-70.2%2C5.4c-3.2%2C0-6.7%2C0-10.3%2C0H10v-35.1h106.9l3.2-2.2%0A%09%09%09c2.1-1.5%2C3.4-3.5%2C3.8-6.3c0.7-4%2C0.3-4.5-12.9-19.4c-15.6-17.6-17.3-20.8-16.4-32C95.5%2C76.6%2C106.9%2C58%2C126.9%2C58L325.1%2C57.7%0A%09%09%09%20M333.8%2C49l-8.7%2C0l-198.2%2C0.3c-11.4%2C0-22%2C4.9-29.9%2C13.9C90.7%2C70.5%2C86.5%2C80%2C85.9%2C88.8c-1.1%2C14.8%2C2.3%2C20.1%2C18.6%2C38.4%0A%09%09%09c4.7%2C5.3%2C9.2%2C10.4%2C10.7%2C12.5c0%2C0.1%2C0%2C0.1-0.1%2C0.2c0%2C0%2C0%2C0-0.1%2C0.1l-0.9%2C0.6H10H1.3v8.7v35.1v8.7H10h68h5.4h4.9%0A%09%09%09c31.1%2C0%2C46.5%2C0%2C55.6-0.7c10.4-0.8%2C13.7-2.5%2C18.6-5.6l0.6-0.4c15.6-9.6%2C23.6-32.6%2C16.8-48.1c-2.1-4.8-15.3-21.6-16.8-23.5%0A%09%09%09c-4.1-5.2-11-13.9-12.1-16.4c0-0.2%2C0.1-0.4%2C0.1-0.6c0.2%2C0%2C0.5-0.1%2C1.1-0.1l64.3-0.2v86.8v8.7h8.7h37.3h8.7v-8.7V97.7h53.8h8.7V89%0A%09%09%09V57.7V49L333.8%2C49z%22/%3E%0A%09%3C/g%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M426.7%2C58.8l43.9%2C126.9l-35.8-0.2l-5.8-19l-63.8-0.3l-5.7%2C18.3H323l43.4-125.7L426.7%2C58.8%20M375.6%2C139.1%0A%09%09%09l43.5-0.1c0%2C0%2C0%2C0%2C0%2C0c0.1%2C0-21.1-62.5-21.3-62.5l0%2C0C397.6%2C76.6%2C375.1%2C139.1%2C375.6%2C139.1%20M432.9%2C50h-6.2h-60.3h-6.2l-2%2C5.9%0A%09%09%09l-43.4%2C125.7l-4%2C11.6h12.3h36.4h6.4l1.9-6.1l3.8-12.1l50.9%2C0.2l3.9%2C12.9l1.9%2C6.1l6.4%2C0l35.8%2C0.2l12.3%2C0.1l-4-11.7L435%2C55.9%0A%09%09%09L432.9%2C50L432.9%2C50z%20M387.7%2C130.4c2.7-7.7%2C6.4-18.2%2C9.8-27.6c3.2%2C9.4%2C6.8%2C19.9%2C9.4%2C27.6L387.7%2C130.4L387.7%2C130.4z%22/%3E%0A%09%3C/g%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M549.9%2C58.8c28.3%2C0%2C47.9%2C0.4%2C51.7%2C1.1c8.7%2C1.5%2C16.6%2C6.2%2C22.5%2C13.3c6.2%2C7.5%2C7.6%2C11.1%2C8.4%2C21.3%0A%09%09%09c1.2%2C14.5-5.7%2C27-19.3%2C35.1c-4%2C2.4-8%2C4.7-9.1%2C5.1c-1.6%2C0.7-1.4%2C1.4%2C1.4%2C4.7c1.8%2C2.1%2C4.9%2C5.1%2C6.9%2C6.7l3.7%2C2.8l67.8%2C1l0.7%2C34.6%0A%09%09%09h-41.6c-32.1%2C0-42.4-0.3-45.4-1.3c-4.5-1.5-15.4-10.7-37.4-31.7l-15.7-15l0.2%2C48h-40.4V58.8H549.9%20M544%2C115.3h21.5%0A%09%09%09c20.9%2C0%2C21.6-0.1%2C24.5-2.3c5.3-4%2C7.2-8.1%2C6.7-14.4c-0.6-6.5-3.1-9.9-9.4-12.6c-3.5-1.6-7-1.8-23.7-1.8H544V115.3%20M549.9%2C50h-45.6%0A%09%09%09h-8.7v8.7v125.7v8.7h8.7h40.4h8.8l0-8.8l-0.1-27.5l0.9%2C0.9c27.3%2C26%2C35.3%2C31.9%2C40.6%2C33.7c4.1%2C1.4%2C10.9%2C1.8%2C48.2%2C1.8h41.6h8.9%0A%09%09%09l-0.2-8.9l-0.7-34.6l-0.2-8.4l-8.4-0.1l-64.9-0.9l-1.4-1.1c-0.4-0.3-1-0.8-1.5-1.3c0.5-0.3%2C0.9-0.6%2C1.3-0.8%0A%09%09%09c16.4-9.8%2C25-25.6%2C23.5-43.3c-0.9-12-3.1-17.4-10.4-26.2c-7.2-8.7-17.1-14.5-27.8-16.4C597.2%2C50.2%2C567.2%2C50%2C549.9%2C50L549.9%2C50z%0A%09%09%09%20M552.7%2C92.8h10.8c15.3%2C0%2C18.3%2C0.3%2C20.2%2C1.1c3.5%2C1.5%2C3.9%2C2.3%2C4.2%2C5.4c0.3%2C3.1-0.1%2C4.4-3.2%2C6.7c-0.1%2C0.1-0.2%2C0.1-0.2%2C0.2%0A%09%09%09c-2%2C0.4-9.6%2C0.4-19%2C0.4h-12.7L552.7%2C92.8L552.7%2C92.8z%22/%3E%0A%09%3C/g%3E%0A%3C/g%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;height:100px;background-position:center;text-indent:-5555px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWUyQixBQUdpQyxBQU1NLEFBR0UsQUFRdzdQLGdCQWhCeDhQLE1BTVosRUFHZ0IsQ0FSSCxVQUNFLENBUU0sVUFQckIsT0FRdUIsbUJBQ0Qsa0JBQ0Esa0JBQ3RCLHcyUEFHNEIsNEJBQ2hCLGFBQ2UsMkJBQ1Asb0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lbXlydGFicml6aS9Eb2N1bWVudHMvc3Rhci13YXJzLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U3RhciB3YXJzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNS4yL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0YXItd2Fycy1sb2dvXCI+PGgxPlN0YXIgd2FyczwvaDE+PC9oZWFkZXI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSB7IFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4OyAgXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0MlM0Z4bWwlMjB2ZXJzaW9uJTNEJTIyMS4wJTIyJTIwZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUwQSUzQyUyMS0tJTIwR2VuZXJhdG9yJTNBJTIwQWRvYmUlMjBJbGx1c3RyYXRvciUyMDIyLjEuMCUyQyUyMFNWRyUyMEV4cG9ydCUyMFBsdWctSW4lMjAuJTIwU1ZHJTIwVmVyc2lvbiUzQSUyMDYuMDAlMjBCdWlsZCUyMDAlMjklMjAlMjAtLSUzRSUwQSUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjBpZCUzRCUyMkxheWVyXzElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTIyJTIweCUzRCUyMjEwMCUyNSUyMiUyMHklM0QlMjIxMDAlMjUlMjIlMEElMDklMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA2OTMuNiUyMDQxOS40JTIyJTIwc3R5bGUlM0QlMjJlbmFibGUtYmFja2dyb3VuZCUzQW5ldyUyMDAlMjAwJTIwNjkzLjYlMjA0MTkuNCUzQiUyMiUyMHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlMEElM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0L2NzcyUyMiUzRSUwQSUwOS5zdDAlN0JmaWxsJTNBJTIzRkZFODFGJTNCJTdEJTBBJTNDL3N0eWxlJTNFJTBBJTNDZyUyMGlkJTNEJTIyTGF5ZXJfMl8xXyUyMiUzRSUwQSUwOSUzQ2clM0UlMEElMDklMDklM0NwYXRoJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBkJTNEJTIyTTEzMSUyQzIwOS44bDkuNSUyQzI3LjhjNS4xJTJDMTUlMkM5LjclMkMyNy4xJTJDMTAuMyUyQzI3LjFjMCUyQzAlMkMwJTJDMCUyQzAlMkMwYzAuNy0wLjYlMkMxOS4yLTU0LjQlMkMxOS4yLTU0LjRoMzUuOWwtNDMuMyUyQzEyNi4yJTBBJTA5JTA5JTA5aC0yNWMwJTJDMC0yNi42LTc2LjktMjYuNS03Ny4ybC0yNy44JTJDNzYuM0g1OC42TDE1LjglMkMyMDkuOGwzNS43JTJDMGMwJTJDMCUyQzE5LjYlMkM1NS41JTJDMTkuOCUyQzU1LjVjMCUyQzAlMkMwJTJDMCUyQzAlMkMwbDE5LjUtNTUuNUwxMzElMkMyMDkuOCUwQSUwOSUwOSUwOSUyME0zLjYlMkMyMDEuMWwzLjklMkMxMS42bDQyLjglMkMxMjUuN2wyJTJDNS45aDYuM2gyNC43aDYuMWwyLjEtNS43bDE5LjMtNTNjMS43JTJDNC44JTJDMy41JTJDMTAuMSUyQzUuMyUyQzE1LjNjNi42JTJDMTkuMyUyQzEzLjMlMkMzOC41JTJDMTMuMyUyQzM4LjUlMEElMDklMDklMDlsMiUyQzUuOWg2LjJoMjVoNi4ybDItNS45bDQzLjMtMTI2LjJsNC0xMS42aC0xMi4ySDE3MGgtNi4ybC0yJTJDNS45Yy0zLjIlMkM5LjQtNy42JTJDMjEuOS0xMS4yJTJDMzIuNGMtMC42LTEuNi0xLjEtMy4zLTEuNy01bC05LjUtMjcuOCUwQSUwOSUwOSUwOWwtMi01LjlIMTMxSDkwLjloLTYuMmwtMi4xJTJDNS44bC0xMS40JTJDMzIuNGMtMy44LTEwLjYtOC4xLTIyLjktMTEuNS0zMi40bC0yLjEtNS44bC02LjIlMkMwbC0zNS43JTJDMEwzLjYlMkMyMDEuMUwzLjYlMkMyMDEuMXolMjIvJTNFJTBBJTA5JTNDL2clM0UlMEElMDklM0NnJTNFJTBBJTA5JTA5JTNDcGF0aCUyMGNsYXNzJTNEJTIyc3QwJTIyJTIwZCUzRCUyMk02ODQuMSUyQzIwOS4zbC0wLjElMkMzMy4xYzAlMkMwLTM1LjYtMC4xLTUzLjgtMC4xYy02JTJDMC0xMC4xJTJDMC0xMC4zJTJDMGMtMy4xJTJDMC42LTUuMSUyQzcuMi00LjIlMkMxMC4xJTBBJTA5JTA5JTA5YzAuNCUyQzEuNSUyQzMuNyUyQzYuMyUyQzcuMiUyQzEwLjdjMy41JTJDNC40JTJDOS4zJTJDMTEuNyUyQzEyLjklMkMxNi4xYzkuMSUyQzExLjMlMkMxMC4zJTJDMTMuNiUyQzExLjIlMkMyMC4xYzEuNCUyQzEwLjYtMy42JTJDMjItMTIuOSUyQzI5LjYlMEElMDklMDklMDljLTkuMyUyQzcuNi04LjklMkM3LjYtNzcuOSUyQzcuNmMtMSUyQzAtMiUyQzAtMyUyQzBjLTQyJTJDMC02NC4yLTAuNC02Ny40LTEuMWMtNS43LTEuMy0xNC45LTguOC0zOS4xLTMyYy04LjctOC4zLTE2LjctMTUuNi0xNy4xLTE1LjYlMEElMDklMDklMDljMCUyQzAlMkMwJTJDMCUyQzAlMkMwbC0wLjMlMkM0OC43bC0zOS4yLTAuMmwtMC4yLTEyNS41aDQ5LjRoMzhjMjYuMyUyQzElMkM0NC4yJTJDMjcuMiUyQzQwLjYlMkM0My45Yy0wLjglMkMzLjgtMi45JTJDOS4zLTQuNiUyQzEyLjIlMEElMDklMDklMDljLTMuNSUyQzYtMTIuNCUyQzEzLjctMTkuNyUyQzE3Yy0yLjclMkMxLjItNC45JTJDMi42LTQuOSUyQzMuMWMwJTJDMS45JTJDOC44JTJDMTAuNSUyQzEyLjElMkMxMS45YzIuOCUyQzEuMiUyQzExJTJDMS40JTJDNDcuMiUyQzEuNGM0LjIlMkMwJTJDOC4xJTJDMCUyQzExLjYlMkMwJTBBJTA5JTA5JTA5YzM2LjMlMkMwJTJDMzQuNS0wLjMlMkMzNy4zLTYuM2MyLTQuMiUyQzAuNS02LjctMTMuNC0yMi4zYy0xNy41LTE3LjQtMTUuNy0yNS44LTE1LjgtMzJjLTAuMy03LjQlMkM1LjYtMzAuNiUyQzM1LjgtMzAuNkw2ODQuMSUyQzIwOS4zJTBBJTA5JTA5JTA5JTIwTTQ0OS4yJTJDMjY3LjNjMTYuOCUyQzAlMkMyMC4yLTAuMyUyQzIzLjgtMS44YzEyLjEtNS4yJTJDMTIuNy0yMC43JTJDMS4xLTI3LjZjLTIuNS0xLjUtNS44LTEuOC0yNC0xLjlsLTIxLTAuMWMwLjIlMkMwLjItMC4xJTJDMzAuMS0wLjElMkMzMC4xJTBBJTA5JTA5JTA5UzQzNC4zJTJDMjY3LjMlMkM0NDkuMiUyQzI2Ny4zJTIwTTY5Mi44JTJDMjAwLjZoLTguOGgtODAuNmMtMTcuNSUyQzAtMjcuOSUyQzYuOS0zMy41JTJDMTIuN2MtOS4xJTJDOS40LTExLjMlMkMyMS4zLTExLjElMkMyNi45YzAlMkMwLjUlMkMwJTJDMC45JTJDMCUyQzEuNCUwQSUwOSUwOSUwOWMtMC4xJTJDOS4xJTJDMS4zJTJDMTkuNCUyQzE4LjIlMkMzNi4zYzMuMyUyQzMuOCUyQzguOSUyQzEwLjElMkMxMS4xJTJDMTMuMmMtNC42JTJDMC42LTE2LjQlMkMwLjYtMjguNyUyQzAuNmgtNS4ybC02LjMlMkMwYy0yMS43JTJDMC00MC4xLTAuMS00My44LTAuOCUwQSUwOSUwOSUwOWMtMC41LTAuMy0xLjMtMC45LTIuMS0xLjZjNy41LTQuNiUyQzE1LjEtMTEuOCUyQzE4LjctMTcuOWMyLjItMy43JTJDNC42LTEwLjElMkM1LjYtMTQuOGMyLjItMTAuNS0xLjQtMjMuMi05LjgtMzMuOSUwQSUwOSUwOSUwOWMtOS44LTEyLjUtMjQtMjAtMzktMjAuNmwtMC4yJTJDMGgtMC4yaC0zOGgtNDkuNGgtOC44bDAlMkM4LjhsMC4yJTJDMTI1LjVsMCUyQzguN2w4LjclMkMwbDM5LjIlMkMwLjJsOC43JTJDMGwwLjEtOC43bDAuMi0yOS4yJTBBJTA5JTA5JTA5YzAuOCUyQzAuOCUyQzEuNiUyQzEuNSUyQzIuNSUyQzIuNGMyNi41JTJDMjUuNCUyQzM1LjMlMkMzMi40JTJDNDMuMiUyQzM0LjJjMi4yJTJDMC41JTJDNS43JTJDMS4zJTJDNjkuNCUyQzEuM2gzYzM0LjQlMkMwJTJDNTEuNyUyQzAlMkM2Mi0xJTBBJTA5JTA5JTA5YzExLjgtMS4xJTJDMTUuNi0zLjglMkMyMS4yLTguNGwwLjItMC4yYzExLjctOS41JTJDMTcuOC0yMy44JTJDMTYuMS0zNy40Yy0xLjEtOC45LTMuNS0xMi41LTEzLTI0LjRsLTIuOC0zLjVjLTMuMy00LjEtNy4zLTkuMi0xMC0xMi41JTBBJTA5JTA5JTA5Yy0yLjItMi43LTMuOS01LjEtNC45LTYuN2MxLjMlMkMwJTJDMy4xJTJDMCUyQzUuNCUyQzBjMTcuOSUyQzAlMkM1My40JTJDMC4xJTJDNTMuNyUyQzAuMWw4LjclMkMwbDAtOC43bDAuMS0zMy4xTDY5Mi44JTJDMjAwLjZMNjkyLjglMkMyMDAuNnolMEElMDklMDklMDklMjBNNDM3LjglMkMyNTguM2MwLTIuMiUyQzAtNC43JTJDMC03LjJjMC0yLjIlMkMwLTQuNCUyQzAtNi40bDEyLjIlMkMwLjFjNyUyQzAlMkMxNy42JTJDMC4xJTJDMTkuNiUyQzAuN2MyLjYlMkMxLjYlMkM0LjElMkM0LjElMkMzLjklMkM2LjYlMEElMDklMDklMDljLTAuMSUyQzEuNC0wLjclMkMzLjktNC4yJTJDNS40Yy0xLjklMkMwLjgtNSUyQzEuMS0yMC4zJTJDMS4xQzQ0NC40JTJDMjU4LjYlMkM0NDAuNiUyQzI1OC40JTJDNDM3LjglMkMyNTguM0w0MzcuOCUyQzI1OC4zeiUyMi8lM0UlMEElMDklM0MvZyUzRSUwQSUwOSUzQ2clM0UlMEElMDklMDklM0NwYXRoJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBkJTNEJTIyTTMxMC4zJTJDMjA4LjhsNDQlMkMxMjYuNmwtMzUuOCUyQzAuMmwtNi0xOWwtNjQuMS0wLjVsLTUuNyUyQzE5bC0zNS41LTAuNGw0My40LTEyNS44TDMxMC4zJTJDMjA4LjglMjBNMjgxLjQlMkMyMjcuNCUwQSUwOSUwOSUwOWMtMC4xJTJDMC40LTUuNiUyQzE1LjUtMTEuMiUyQzMwLjdjLTUuNiUyQzE1LjMtMTEuMiUyQzMwLjYtMTEuMyUyQzMwLjdjMCUyQzAlMkMwJTJDMCUyQzAlMkMwbDAlMkMwYzAlMkMwJTJDMCUyQzAlMkMwJTJDMGMwLjElMkMwJTJDMjAtMC4xJTJDMzIuNy0wLjElMEElMDklMDklMDljNiUyQzAlMkMxMC4zJTJDMCUyQzEwLjQlMkMwYzAlMkMwJTJDMCUyQzAlMkMwJTJDMHMwJTJDMCUyQzAlMkMwYzAlMkMwJTJDMCUyQzAlMkMwJTJDMEMzMDEuOSUyQzI4OC4xJTJDMjgxLjUlMkMyMjguMSUyQzI4MS40JTJDMjI3LjRDMjgxLjQlMkMyMjcuNCUyQzI4MS40JTJDMjI3LjQlMkMyODEuNCUyQzIyNy40JTBBJTA5JTA5JTA5TDI4MS40JTJDMjI3LjRDMjgxLjQlMkMyMjcuNCUyQzI4MS40JTJDMjI3LjQlMkMyODEuNCUyQzIyNy40JTIwTTMxNi41JTJDMjAwLjFsLTYuMiUyQzBsLTU5LjYlMkMwLjFsLTYuMiUyQzBsLTIlMkM1LjlMMTk5JTJDMzMxLjhsLTQlMkMxMS41bDEyLjElMkMwLjElMEElMDklMDklMDlsMzUuNSUyQzAuNGw2LjYlMkMwLjFsMS45LTYuM2wzLjgtMTIuN2w1MS4yJTJDMC40bDQlMkMxMi45bDEuOSUyQzYuMmw2LjQlMkMwbDM1LjgtMC4ybDEyLjItMC4xbC00LTExLjVsLTQ0LTEyNi42TDMxNi41JTJDMjAwLjFMMzE2LjUlMkMyMDAuMXolMEElMDklMDklMDklMjBNMjcxLjYlMkMyNzkuOWMxLjctNC41JTJDMy45LTEwLjYlMkM2LjktMTguOWMwLjktMi42JTJDMS44LTUlMkMyLjYtNy4xYzAuNyUyQzIuMSUyQzEuNSUyQzQuNSUyQzIuNCUyQzdjMC43JTJDMi4xJTJDMy44JTJDMTEuMiUyQzYuNSUyQzE5JTBBJTA5JTA5JTA5QzI4MiUyQzI3OS45JTJDMjc2LjElMkMyNzkuOSUyQzI3MS42JTJDMjc5LjlMMjcxLjYlMkMyNzkuOXolMjIvJTNFJTBBJTA5JTNDL2clM0UlMEElMDklM0NnJTNFJTBBJTA5JTA5JTNDcGF0aCUyMGNsYXNzJTNEJTIyc3QwJTIyJTIwZCUzRCUyMk0zMjUuMSUyQzU3LjdWODloLTYyLjV2OTUuNWgtMzcuM1Y4OC45bC03MyUyQzAuMmMtOC44JTJDMC0xMCUyQzctMTAlMkM5LjdjMCUyQzMuMyUyQzIuMiUyQzYuNiUyQzE0JTJDMjEuNiUwQSUwOSUwOSUwOWM3LjclMkM5LjclMkMxNC43JTJDMTkuNCUyQzE1LjYlMkMyMS41YzUuMSUyQzExLjctMS41JTJDMjkuOC0xMy40JTJDMzcuMmMtOC41JTJDNS4zLTcuMSUyQzUuNC03MC4yJTJDNS40Yy0zLjIlMkMwLTYuNyUyQzAtMTAuMyUyQzBIMTB2LTM1LjFoMTA2LjlsMy4yLTIuMiUwQSUwOSUwOSUwOWMyLjEtMS41JTJDMy40LTMuNSUyQzMuOC02LjNjMC43LTQlMkMwLjMtNC41LTEyLjktMTkuNGMtMTUuNi0xNy42LTE3LjMtMjAuOC0xNi40LTMyQzk1LjUlMkM3Ni42JTJDMTA2LjklMkM1OCUyQzEyNi45JTJDNThMMzI1LjElMkM1Ny43JTBBJTA5JTA5JTA5JTIwTTMzMy44JTJDNDlsLTguNyUyQzBsLTE5OC4yJTJDMC4zYy0xMS40JTJDMC0yMiUyQzQuOS0yOS45JTJDMTMuOUM5MC43JTJDNzAuNSUyQzg2LjUlMkM4MCUyQzg1LjklMkM4OC44Yy0xLjElMkMxNC44JTJDMi4zJTJDMjAuMSUyQzE4LjYlMkMzOC40JTBBJTA5JTA5JTA5YzQuNyUyQzUuMyUyQzkuMiUyQzEwLjQlMkMxMC43JTJDMTIuNWMwJTJDMC4xJTJDMCUyQzAuMS0wLjElMkMwLjJjMCUyQzAlMkMwJTJDMC0wLjElMkMwLjFsLTAuOSUyQzAuNkgxMEgxLjN2OC43djM1LjF2OC43SDEwaDY4aDUuNGg0LjklMEElMDklMDklMDljMzEuMSUyQzAlMkM0Ni41JTJDMCUyQzU1LjYtMC43YzEwLjQtMC44JTJDMTMuNy0yLjUlMkMxOC42LTUuNmwwLjYtMC40YzE1LjYtOS42JTJDMjMuNi0zMi42JTJDMTYuOC00OC4xYy0yLjEtNC44LTE1LjMtMjEuNi0xNi44LTIzLjUlMEElMDklMDklMDljLTQuMS01LjItMTEtMTMuOS0xMi4xLTE2LjRjMC0wLjIlMkMwLjEtMC40JTJDMC4xLTAuNmMwLjIlMkMwJTJDMC41LTAuMSUyQzEuMS0wLjFsNjQuMy0wLjJ2ODYuOHY4LjdoOC43aDM3LjNoOC43di04LjdWOTcuN2g1My44aDguN1Y4OSUwQSUwOSUwOSUwOVY1Ny43VjQ5TDMzMy44JTJDNDl6JTIyLyUzRSUwQSUwOSUzQy9nJTNFJTBBJTA5JTNDZyUzRSUwQSUwOSUwOSUzQ3BhdGglMjBjbGFzcyUzRCUyMnN0MCUyMiUyMGQlM0QlMjJNNDI2LjclMkM1OC44bDQzLjklMkMxMjYuOWwtMzUuOC0wLjJsLTUuOC0xOWwtNjMuOC0wLjNsLTUuNyUyQzE4LjNIMzIzbDQzLjQtMTI1LjdMNDI2LjclMkM1OC44JTIwTTM3NS42JTJDMTM5LjElMEElMDklMDklMDlsNDMuNS0wLjFjMCUyQzAlMkMwJTJDMCUyQzAlMkMwYzAuMSUyQzAtMjEuMS02Mi41LTIxLjMtNjIuNWwwJTJDMEMzOTcuNiUyQzc2LjYlMkMzNzUuMSUyQzEzOS4xJTJDMzc1LjYlMkMxMzkuMSUyME00MzIuOSUyQzUwaC02LjJoLTYwLjNoLTYuMmwtMiUyQzUuOSUwQSUwOSUwOSUwOWwtNDMuNCUyQzEyNS43bC00JTJDMTEuNmgxMi4zaDM2LjRoNi40bDEuOS02LjFsMy44LTEyLjFsNTAuOSUyQzAuMmwzLjklMkMxMi45bDEuOSUyQzYuMWw2LjQlMkMwbDM1LjglMkMwLjJsMTIuMyUyQzAuMWwtNC0xMS43TDQzNSUyQzU1LjklMEElMDklMDklMDlMNDMyLjklMkM1MEw0MzIuOSUyQzUweiUyME0zODcuNyUyQzEzMC40YzIuNy03LjclMkM2LjQtMTguMiUyQzkuOC0yNy42YzMuMiUyQzkuNCUyQzYuOCUyQzE5LjklMkM5LjQlMkMyNy42TDM4Ny43JTJDMTMwLjRMMzg3LjclMkMxMzAuNHolMjIvJTNFJTBBJTA5JTNDL2clM0UlMEElMDklM0NnJTNFJTBBJTA5JTA5JTNDcGF0aCUyMGNsYXNzJTNEJTIyc3QwJTIyJTIwZCUzRCUyMk01NDkuOSUyQzU4LjhjMjguMyUyQzAlMkM0Ny45JTJDMC40JTJDNTEuNyUyQzEuMWM4LjclMkMxLjUlMkMxNi42JTJDNi4yJTJDMjIuNSUyQzEzLjNjNi4yJTJDNy41JTJDNy42JTJDMTEuMSUyQzguNCUyQzIxLjMlMEElMDklMDklMDljMS4yJTJDMTQuNS01LjclMkMyNy0xOS4zJTJDMzUuMWMtNCUyQzIuNC04JTJDNC43LTkuMSUyQzUuMWMtMS42JTJDMC43LTEuNCUyQzEuNCUyQzEuNCUyQzQuN2MxLjglMkMyLjElMkM0LjklMkM1LjElMkM2LjklMkM2LjdsMy43JTJDMi44bDY3LjglMkMxbDAuNyUyQzM0LjYlMEElMDklMDklMDloLTQxLjZjLTMyLjElMkMwLTQyLjQtMC4zLTQ1LjQtMS4zYy00LjUtMS41LTE1LjQtMTAuNy0zNy40LTMxLjdsLTE1LjctMTVsMC4yJTJDNDhoLTQwLjRWNTguOEg1NDkuOSUyME01NDQlMkMxMTUuM2gyMS41JTBBJTA5JTA5JTA5YzIwLjklMkMwJTJDMjEuNi0wLjElMkMyNC41LTIuM2M1LjMtNCUyQzcuMi04LjElMkM2LjctMTQuNGMtMC42LTYuNS0zLjEtOS45LTkuNC0xMi42Yy0zLjUtMS42LTctMS44LTIzLjctMS44SDU0NFYxMTUuMyUyME01NDkuOSUyQzUwaC00NS42JTBBJTA5JTA5JTA5aC04Ljd2OC43djEyNS43djguN2g4LjdoNDAuNGg4LjhsMC04LjhsLTAuMS0yNy41bDAuOSUyQzAuOWMyNy4zJTJDMjYlMkMzNS4zJTJDMzEuOSUyQzQwLjYlMkMzMy43YzQuMSUyQzEuNCUyQzEwLjklMkMxLjglMkM0OC4yJTJDMS44aDQxLjZoOC45JTBBJTA5JTA5JTA5bC0wLjItOC45bC0wLjctMzQuNmwtMC4yLTguNGwtOC40LTAuMWwtNjQuOS0wLjlsLTEuNC0xLjFjLTAuNC0wLjMtMS0wLjgtMS41LTEuM2MwLjUtMC4zJTJDMC45LTAuNiUyQzEuMy0wLjglMEElMDklMDklMDljMTYuNC05LjglMkMyNS0yNS42JTJDMjMuNS00My4zYy0wLjktMTItMy4xLTE3LjQtMTAuNC0yNi4yYy03LjItOC43LTE3LjEtMTQuNS0yNy44LTE2LjRDNTk3LjIlMkM1MC4yJTJDNTY3LjIlMkM1MCUyQzU0OS45JTJDNTBMNTQ5LjklMkM1MHolMEElMDklMDklMDklMjBNNTUyLjclMkM5Mi44aDEwLjhjMTUuMyUyQzAlMkMxOC4zJTJDMC4zJTJDMjAuMiUyQzEuMWMzLjUlMkMxLjUlMkMzLjklMkMyLjMlMkM0LjIlMkM1LjRjMC4zJTJDMy4xLTAuMSUyQzQuNC0zLjIlMkM2LjdjLTAuMSUyQzAuMS0wLjIlMkMwLjEtMC4yJTJDMC4yJTBBJTA5JTA5JTA5Yy0yJTJDMC40LTkuNiUyQzAuNC0xOSUyQzAuNGgtMTIuN0w1NTIuNyUyQzkyLjhMNTUyLjclMkM5Mi44eiUyMi8lM0UlMEElMDklM0MvZyUzRSUwQSUzQy9nJTNFJTBBJTNDL3N2ZyUzRSUwQScpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAtNTU1NXB4O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=components/layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/emyrtabrizi/Documents/star-wars-test/components/navigation.js";




var Navigation = function Navigation() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-48897931"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-48897931"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-48897931"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-48897931"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-48897931"
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-48897931"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-48897931"
  }, "About"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "48897931",
    css: "ul.jsx-48897931{list-style:none;margin:0;padding:0;}ul.jsx-48897931 li.jsx-48897931{display:inline-block;}ul.jsx-48897931 li.jsx-48897931 a.jsx-48897931{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin-right:10px;}nav.jsx-48897931{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHaUMsQUFLSyxBQUdWLEFBS08sV0FKRyxLQVJaLEVBYWIsR0FSQSxJQUpjLFVBQ2QsMEJBT3NCLGtCQUN0QiIsImZpbGUiOiJjb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VteXJ0YWJyaXppL0RvY3VtZW50cy9zdGFyLXdhcnMtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGxpPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPjwvTGluaz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICB1bCB7IFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=components/navigation.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_character__ = __webpack_require__("./components/character.js");

var _jsxFileName = "/Users/emyrtabrizi/Documents/star-wars-test/pages/index.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1472210046" + " " + "top-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1472210046"
  }, "May the force be with you ...."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_character__["a" /* default */], {
    peopleThings: props.people,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1472210046",
    css: ".top-content{padding:20px;text-align:center;color:#679cde;}.lower-links{list-style:none;margin:0;padding:0;}.lower-links li{display:inline-block;background:#679cde;border-radius:10px;padding:10px;margin:5px;}.lower-links li a{color:#000;-webkit-text-decoration:none;text-decoration:none;}.lower-links li:hover{background:#fff;-webkit-transition:all .2s;transition:all .2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUrQixBQUc4QixBQUtHLEFBS0ssQUFPVixBQUlJLFdBSE0sRUFqQkgsR0FLVixBQWdCVyxLQVhBLElBSlYsTUFMSyxJQU1sQixLQUl1QixLQVR2QixjQVVpQixFQU1qQixDQUlBLFVBVGUsV0FDZiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZW15cnRhYnJpemkvRG9jdW1lbnRzL3N0YXItd2Fycy10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcmFjdGVyJ1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY29udGVudFwiPlxuICAgICAgICAgICAgPHA+TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdSAuLi4uPC9wPlxuICAgICAgICAgICAgPENoYXJhY3RlciBwZW9wbGVUaGluZ3M9e3Byb3BzLnBlb3BsZX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAudG9wLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjc5Y2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvd2VyLWxpbmtzIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb3dlci1saW5rcyBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NzljZGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvd2VyLWxpbmtzIGxpIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb3dlci1saW5rcyBsaTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc3dhcGkuY28vYXBpL3Blb3BsZScpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBlb3BsZTogZGF0YS5yZXN1bHRzXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js */"
  })));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://swapi.co/api/people');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            people: data.results
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map