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
        className: "jsx-3586254124"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3586254124" + " " + "body-content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterIncrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3586254124" + " " + "cycle-up"
      }, "Cycle up"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3586254124"
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
        className: "jsx-3586254124"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterDecrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3586254124" + " " + "cycle-down"
      }, "Cycle down")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3586254124" + " " + "lower-links"
      }, fullList), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3586254124",
        css: ".body-content.jsx-3586254124{background:#fff;color:#000;text-align:center;padding:30px;}.cycle-up.jsx-3586254124{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;right:-45px;height:50px;width:50px;text-indent:-5555px;}.cycle-down.jsx-3586254124{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;left:-45px;height:50px;width:50px;text-indent:-5555px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIsQUFJNkMsQUFReTBCLEFBV0UsZ0JBbEJoMUIsV0FDTyxrQkFDTCxhQUVqQixteUJBSTRCLEVBV0EsMEJBVlYsRUFXQSxnQkFWUixFQVdBLFFBVkUsRUFXRCxVQVZDLENBV0EsV0FWRCxDQVdBLFVBVlMsQ0FXQSxtQkFWcEIsQ0FXQSIsImZpbGUiOiJjb21wb25lbnRzL2NoYXJhY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZW15cnRhYnJpemkvRG9jdW1lbnRzL3N0YXItd2Fycy10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbyBmcm9tICcuL2JpbydcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBhY3RpdmU6ICd5ZXMnLFxuICAgICAgICBjb3VudGVyOiAwXG4gICAgfVxuICAgIGNvdW50ZXJDaGFyYWN0ZXJJbmNyZWFzZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAodGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAwIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMSB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvdW50ZXJDaGFyYWN0ZXJEZWNyZWFzZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogKHRoaXMucHJvcHMucGVvcGxlVGhpbmdzLmxlbmd0aCAtIDEpIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyIC0gMSB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGp1bXBDaGFyYWN0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IGV2ZW50LnRhcmdldC5pZCB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmdWxsTGlzdCA9IHRoaXMucHJvcHMucGVvcGxlVGhpbmdzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIGhyZWY9XCIjXCIgaWQ9e2l9IG9uQ2xpY2s9e3RoaXMuanVtcENoYXJhY3Rlcn0+e2l0ZW0ubmFtZX08L2E+PC9saT5cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3ljbGUtdXBcIiBvbkNsaWNrPXt0aGlzLmNvdW50ZXJDaGFyYWN0ZXJJbmNyZWFzZX0+Q3ljbGUgdXA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJpb1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdGFyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFpckNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmhhaXJfY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBza2luQ29sb3I9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uc2tpbl9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV5ZUNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmV5ZV9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoWWVhcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5iaXJ0aF95ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3ljbGUtZG93blwiIG9uQ2xpY2s9e3RoaXMuY291bnRlckNoYXJhY3RlckRlY3JlYXNlfT5DeWNsZSBkb3duPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibG93ZXItbGlua3NcIj57ZnVsbExpc3R9PC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5LWNvbnRlbnQgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3ljbGUtdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0MlM0Z4bWwlMjB2ZXJzaW9uJTNEJTIyMS4wJTIyJTIwZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUwQSUzQyUyMS0tJTIwR2VuZXJhdG9yJTNBJTIwQWRvYmUlMjBJbGx1c3RyYXRvciUyMDIyLjEuMCUyQyUyMFNWRyUyMEV4cG9ydCUyMFBsdWctSW4lMjAuJTIwU1ZHJTIwVmVyc2lvbiUzQSUyMDYuMDAlMjBCdWlsZCUyMDAlMjklMjAlMjAtLSUzRSUwQSUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjBpZCUzRCUyMkxheWVyXzElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTIyJTIweCUzRCUyMjEwMCUyNSUyMiUyMHklM0QlMjIxMDAlMjUlMjIlMEElMDklMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA3NS42JTIwNzUuNiUyMiUyMHN0eWxlJTNEJTIyZW5hYmxlLWJhY2tncm91bmQlM0FuZXclMjAwJTIwMCUyMDc1LjYlMjA3NS42JTNCJTIyJTIweG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUwQSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQvY3NzJTIyJTNFJTBBJTA5LnN0MCU3QmZpbGwlM0ElMjM2RDZENkMlM0IlN0QlMEElM0Mvc3R5bGUlM0UlMEElM0NjaXJjbGUlMjBjbGFzcyUzRCUyMnN0MCUyMiUyMGN4JTNEJTIyMzcuOCUyMiUyMGN5JTNEJTIyMzcuOCUyMiUyMHIlM0QlMjIzNy44JTIyLyUzRSUwQSUzQ3BvbHlnb24lMjBwb2ludHMlM0QlMjI1Ni42JTJDMzYuMSUyMDI3JTJDMTklMjAyNyUyQzUzLjMlMjAlMjIvJTNFJTBBJTNDL3N2ZyUzRSUwQScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtNTU1NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3ljbGUtZG93biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQyUzRnhtbCUyMHZlcnNpb24lM0QlMjIxLjAlMjIlMjBlbmNvZGluZyUzRCUyMnV0Zi04JTIyJTNGJTNFJTBBJTNDJTIxLS0lMjBHZW5lcmF0b3IlM0ElMjBBZG9iZSUyMElsbHVzdHJhdG9yJTIwMjIuMS4wJTJDJTIwU1ZHJTIwRXhwb3J0JTIwUGx1Zy1JbiUyMC4lMjBTVkclMjBWZXJzaW9uJTNBJTIwNi4wMCUyMEJ1aWxkJTIwMCUyOSUyMCUyMC0tJTNFJTBBJTNDc3ZnJTIwdmVyc2lvbiUzRCUyMjEuMSUyMiUyMGlkJTNEJTIyTGF5ZXJfMSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHhtbG5zJTNBeGxpbmslM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzE5OTkveGxpbmslMjIlMjB4JTNEJTIyMTAwJTI1JTIyJTIweSUzRCUyMjEwMCUyNSUyMiUwQSUwOSUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDc1LjYlMjA3NS42JTIyJTIwc3R5bGUlM0QlMjJlbmFibGUtYmFja2dyb3VuZCUzQW5ldyUyMDAlMjAwJTIwNzUuNiUyMDc1LjYlM0IlMjIlMjB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTBBJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dC9jc3MlMjIlM0UlMEElMDkuc3QwJTdCZmlsbCUzQSUyMzZENkQ2QyUzQiU3RCUwQSUzQy9zdHlsZSUzRSUwQSUzQ2NpcmNsZSUyMGNsYXNzJTNEJTIyc3QwJTIyJTIwY3glM0QlMjIzNy44JTIyJTIwY3klM0QlMjIzNy44JTIyJTIwciUzRCUyMjM3LjglMjIvJTNFJTBBJTNDcG9seWdvbiUyMHBvaW50cyUzRCUyMjE5JTJDMzYuMSUyMDQ4LjYlMkMxOSUyMDQ4LjYlMkM1My4zJTIwJTIyLyUzRSUwQSUzQy9zdmclM0UlMEEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtNTU1NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuXG5cbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiXX0= */\n/*@ sourceURL=components/character.js */"
      }));
    }
  }]);

  return Character;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })

})
//# sourceMappingURL=4.50f3a4bd68db73a959c9.hot-update.js.map