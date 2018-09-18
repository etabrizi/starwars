webpackHotUpdate(4,{

/***/ "./components/character.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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
        active: 'yes',
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
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "#",
          id: i,
          onClick: this.jumpCharacter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, item.name));
      }, this);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-2645657052"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-2645657052" + " " + "body-content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterIncrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-2645657052" + " " + "cycle-up"
      }, "Cycle up"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2645657052"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__bio__["a" /* default */], {
        selectedStar: this.props.peopleThings[this.state.counter].name,
        height: this.props.peopleThings[this.state.counter].height,
        hairColor: this.props.peopleThings[this.state.counter].hair_color,
        skinColor: this.props.peopleThings[this.state.counter].skin_color,
        eyeColor: this.props.peopleThings[this.state.counter].eye_color,
        birthYear: this.props.peopleThings[this.state.counter].birth_year,
        gender: this.props.peopleThings[this.state.counter].gender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2645657052"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterDecrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2645657052" + " " + "cycle-down"
      }, "Cycle down")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2645657052" + " " + "lower-links"
      }, fullList), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2645657052",
        css: ".cycle-up.jsx-2645657052{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;right:-45px;height:50px;width:50px;text-indent:-5555px;}.cycle-down.jsx-2645657052{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;left:-45px;height:50px;width:50px;text-indent:-5555px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIsQUFJczNCLEFBV0UsNjFCQVZuMEIsRUFXQSwwQkFWVixFQVdBLGdCQVZSLEVBV0EsUUFWRSxFQVdELFVBVkMsQ0FXQSxXQVZELENBV0EsVUFWUyxDQVdBLG1CQVZwQixDQVdBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lbXlydGFicml6aS9Eb2N1bWVudHMvc3Rhci13YXJzLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmlvIGZyb20gJy4vYmlvJ1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGFjdGl2ZTogJ3llcycsXG4gICAgICAgIGNvdW50ZXI6IDBcbiAgICB9XG4gICAgY291bnRlckNoYXJhY3RlckluY3JlYXNlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09ICh0aGlzLnByb3BzLnBlb3BsZVRoaW5ncy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IDAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY291bnRlckNoYXJhY3RlckRlY3JlYXNlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAodGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubGVuZ3RoIC0gMSkgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgLSAxIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcENoYXJhY3RlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogZXZlbnQudGFyZ2V0LmlkIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZ1bGxMaXN0ID0gdGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGEgaHJlZj1cIiNcIiBpZD17aX0gb25DbGljaz17dGhpcy5qdW1wQ2hhcmFjdGVyfT57aXRlbS5uYW1lfTwvYT48L2xpPlxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjeWNsZS11cFwiIG9uQ2xpY2s9e3RoaXMuY291bnRlckNoYXJhY3RlckluY3JlYXNlfT5DeWNsZSB1cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QmlvXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFN0YXI9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWlyQ29sb3I9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uaGFpcl9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW5Db2xvcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5za2luX2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXllQ29sb3I9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uZXllX2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhZZWFyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmJpcnRoX3llYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uZ2VuZGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjeWNsZS1kb3duXCIgb25DbGljaz17dGhpcy5jb3VudGVyQ2hhcmFjdGVyRGVjcmVhc2V9PkN5Y2xlIGRvd248L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsb3dlci1saW5rc1wiPntmdWxsTGlzdH08L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLXVwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDJTNGeG1sJTIwdmVyc2lvbiUzRCUyMjEuMCUyMiUyMGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlMEElM0MlMjEtLSUyMEdlbmVyYXRvciUzQSUyMEFkb2JlJTIwSWxsdXN0cmF0b3IlMjAyMi4xLjAlMkMlMjBTVkclMjBFeHBvcnQlMjBQbHVnLUluJTIwLiUyMFNWRyUyMFZlcnNpb24lM0ElMjA2LjAwJTIwQnVpbGQlMjAwJTI5JTIwJTIwLS0lM0UlMEElM0NzdmclMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIwaWQlM0QlMjJMYXllcl8xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIweG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMTk5OS94bGluayUyMiUyMHglM0QlMjIxMDAlMjUlMjIlMjB5JTNEJTIyMTAwJTI1JTIyJTBBJTA5JTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNzUuNiUyMDc1LjYlMjIlMjBzdHlsZSUzRCUyMmVuYWJsZS1iYWNrZ3JvdW5kJTNBbmV3JTIwMCUyMDAlMjA3NS42JTIwNzUuNiUzQiUyMiUyMHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlMEElM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0L2NzcyUyMiUzRSUwQSUwOS5zdDAlN0JmaWxsJTNBJTIzNkQ2RDZDJTNCJTdEJTBBJTNDL3N0eWxlJTNFJTBBJTNDY2lyY2xlJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBjeCUzRCUyMjM3LjglMjIlMjBjeSUzRCUyMjM3LjglMjIlMjByJTNEJTIyMzcuOCUyMi8lM0UlMEElM0Nwb2x5Z29uJTIwcG9pbnRzJTNEJTIyNTYuNiUyQzM2LjElMjAyNyUyQzE5JTIwMjclMkM1My4zJTIwJTIyLyUzRSUwQSUzQy9zdmclM0UlMEEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLWRvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0MlM0Z4bWwlMjB2ZXJzaW9uJTNEJTIyMS4wJTIyJTIwZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUwQSUzQyUyMS0tJTIwR2VuZXJhdG9yJTNBJTIwQWRvYmUlMjBJbGx1c3RyYXRvciUyMDIyLjEuMCUyQyUyMFNWRyUyMEV4cG9ydCUyMFBsdWctSW4lMjAuJTIwU1ZHJTIwVmVyc2lvbiUzQSUyMDYuMDAlMjBCdWlsZCUyMDAlMjklMjAlMjAtLSUzRSUwQSUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjBpZCUzRCUyMkxheWVyXzElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTIyJTIweCUzRCUyMjEwMCUyNSUyMiUyMHklM0QlMjIxMDAlMjUlMjIlMEElMDklMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA3NS42JTIwNzUuNiUyMiUyMHN0eWxlJTNEJTIyZW5hYmxlLWJhY2tncm91bmQlM0FuZXclMjAwJTIwMCUyMDc1LjYlMjA3NS42JTNCJTIyJTIweG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUwQSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQvY3NzJTIyJTNFJTBBJTA5LnN0MCU3QmZpbGwlM0ElMjM2RDZENkMlM0IlN0QlMEElM0Mvc3R5bGUlM0UlMEElM0NjaXJjbGUlMjBjbGFzcyUzRCUyMnN0MCUyMiUyMGN4JTNEJTIyMzcuOCUyMiUyMGN5JTNEJTIyMzcuOCUyMiUyMHIlM0QlMjIzNy44JTIyLyUzRSUwQSUzQ3BvbHlnb24lMjBwb2ludHMlM0QlMjIxOSUyQzM2LjElMjA0OC42JTJDMTklMjA0OC42JTJDNTMuMyUyMCUyMi8lM0UlMEElM0Mvc3ZnJTNFJTBBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il19 */\n/*@ sourceURL=components/character.js */"
      }));
    }
  }]);

  return Character;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })

})
//# sourceMappingURL=4.f25d655144eac57cd4a5.hot-update.js.map