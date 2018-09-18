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
        className: "jsx-3001003530"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3001003530" + " " + "body-content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterIncrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3001003530" + " " + "cycle-up"
      }, "Cycle up"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3001003530"
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
        className: "jsx-3001003530"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterDecrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3001003530" + " " + "cycle-down"
      }, "Cycle down")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3001003530" + " " + "lower-links"
      }, fullList), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3001003530",
        css: ".body-content.jsx-3001003530{background:#fff;color:#000;text-align:center;padding:30px;}.cycle-up.jsx-3001003530{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;right:-45px;height:50px;width:50px;text-indent:-5555px;}.cycle-down.jsx-3001003530{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;left:-45px;height:50px;width:50px;text-indent:-5555px;}.lower-links.jsx-3001003530 ul.jsx-3001003530{list-style:none;margin:0;padding:0;color:#fff;}.lower-links.jsx-3001003530 ul.jsx-3001003530 li.jsx-3001003530{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVENEIsQUFJNkMsQUFReTBCLEFBV0UsQUFXMzBCLEFBT0ssZ0JBcENWLEFBOEJILEtBT1osSUFOYSxFQTlCUyxRQStCUCxVQTlCRSxDQWdDakIsWUE5QkEsbXlCQUk0QixFQVdBLDBCQVZWLEVBV0EsZ0JBVlIsRUFXQSxRQVZFLEVBV0QsVUFWQyxDQVdBLFdBVkQsQ0FXQSxVQVZTLENBV0EsbUJBVnBCLENBV0EiLCJmaWxlIjoiY29tcG9uZW50cy9jaGFyYWN0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VteXJ0YWJyaXppL0RvY3VtZW50cy9zdGFyLXdhcnMtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaW8gZnJvbSAnLi9iaW8nXG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlOiAneWVzJyxcbiAgICAgICAgY291bnRlcjogMFxuICAgIH1cbiAgICBjb3VudGVyQ2hhcmFjdGVySW5jcmVhc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY291bnRlciA9PT0gKHRoaXMucHJvcHMucGVvcGxlVGhpbmdzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogMCB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlciArIDEgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb3VudGVyQ2hhcmFjdGVyRGVjcmVhc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY291bnRlciA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6ICh0aGlzLnByb3BzLnBlb3BsZVRoaW5ncy5sZW5ndGggLSAxKSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlciAtIDEgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wQ2hhcmFjdGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiBldmVudC50YXJnZXQuaWQgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZnVsbExpc3QgPSB0aGlzLnByb3BzLnBlb3BsZVRoaW5ncy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSBocmVmPVwiI1wiIGlkPXtpfSBvbkNsaWNrPXt0aGlzLmp1bXBDaGFyYWN0ZXJ9PntpdGVtLm5hbWV9PC9hPjwvbGk+XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImN5Y2xlLXVwXCIgb25DbGljaz17dGhpcy5jb3VudGVyQ2hhcmFjdGVySW5jcmVhc2V9PkN5Y2xlIHVwPC9hPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3Rhcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhaXJDb2xvcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5oYWlyX2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbkNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLnNraW5fY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBleWVDb2xvcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5leWVfY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aFllYXI9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uYmlydGhfeWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5nZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImN5Y2xlLWRvd25cIiBvbkNsaWNrPXt0aGlzLmNvdW50ZXJDaGFyYWN0ZXJEZWNyZWFzZX0+Q3ljbGUgZG93bjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxvd2VyLWxpbmtzXCI+e2Z1bGxMaXN0fTwvdWw+XG5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvZHktY29udGVudCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLXVwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDJTNGeG1sJTIwdmVyc2lvbiUzRCUyMjEuMCUyMiUyMGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlMEElM0MlMjEtLSUyMEdlbmVyYXRvciUzQSUyMEFkb2JlJTIwSWxsdXN0cmF0b3IlMjAyMi4xLjAlMkMlMjBTVkclMjBFeHBvcnQlMjBQbHVnLUluJTIwLiUyMFNWRyUyMFZlcnNpb24lM0ElMjA2LjAwJTIwQnVpbGQlMjAwJTI5JTIwJTIwLS0lM0UlMEElM0NzdmclMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIwaWQlM0QlMjJMYXllcl8xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIweG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMTk5OS94bGluayUyMiUyMHglM0QlMjIxMDAlMjUlMjIlMjB5JTNEJTIyMTAwJTI1JTIyJTBBJTA5JTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNzUuNiUyMDc1LjYlMjIlMjBzdHlsZSUzRCUyMmVuYWJsZS1iYWNrZ3JvdW5kJTNBbmV3JTIwMCUyMDAlMjA3NS42JTIwNzUuNiUzQiUyMiUyMHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlMEElM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0L2NzcyUyMiUzRSUwQSUwOS5zdDAlN0JmaWxsJTNBJTIzNkQ2RDZDJTNCJTdEJTBBJTNDL3N0eWxlJTNFJTBBJTNDY2lyY2xlJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBjeCUzRCUyMjM3LjglMjIlMjBjeSUzRCUyMjM3LjglMjIlMjByJTNEJTIyMzcuOCUyMi8lM0UlMEElM0Nwb2x5Z29uJTIwcG9pbnRzJTNEJTIyNTYuNiUyQzM2LjElMjAyNyUyQzE5JTIwMjclMkM1My4zJTIwJTIyLyUzRSUwQSUzQy9zdmclM0UlMEEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmN5Y2xlLWRvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0MlM0Z4bWwlMjB2ZXJzaW9uJTNEJTIyMS4wJTIyJTIwZW5jb2RpbmclM0QlMjJ1dGYtOCUyMiUzRiUzRSUwQSUzQyUyMS0tJTIwR2VuZXJhdG9yJTNBJTIwQWRvYmUlMjBJbGx1c3RyYXRvciUyMDIyLjEuMCUyQyUyMFNWRyUyMEV4cG9ydCUyMFBsdWctSW4lMjAuJTIwU1ZHJTIwVmVyc2lvbiUzQSUyMDYuMDAlMjBCdWlsZCUyMDAlMjklMjAlMjAtLSUzRSUwQSUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjBpZCUzRCUyMkxheWVyXzElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTIyJTIweCUzRCUyMjEwMCUyNSUyMiUyMHklM0QlMjIxMDAlMjUlMjIlMEElMDklMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA3NS42JTIwNzUuNiUyMiUyMHN0eWxlJTNEJTIyZW5hYmxlLWJhY2tncm91bmQlM0FuZXclMjAwJTIwMCUyMDc1LjYlMjA3NS42JTNCJTIyJTIweG1sJTNBc3BhY2UlM0QlMjJwcmVzZXJ2ZSUyMiUzRSUwQSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQvY3NzJTIyJTNFJTBBJTA5LnN0MCU3QmZpbGwlM0ElMjM2RDZENkMlM0IlN0QlMEElM0Mvc3R5bGUlM0UlMEElM0NjaXJjbGUlMjBjbGFzcyUzRCUyMnN0MCUyMiUyMGN4JTNEJTIyMzcuOCUyMiUyMGN5JTNEJTIyMzcuOCUyMiUyMHIlM0QlMjIzNy44JTIyLyUzRSUwQSUzQ3BvbHlnb24lMjBwb2ludHMlM0QlMjIxOSUyQzM2LjElMjA0OC42JTJDMTklMjA0OC42JTJDNTMuMyUyMCUyMi8lM0UlMEElM0Mvc3ZnJTNFJTBBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTU1NTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvd2VyLWxpbmtzIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb3dlci1saW5rcyB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG5cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyJdfQ== */\n/*@ sourceURL=components/character.js */"
      }));
    }
  }]);

  return Character;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })

})
//# sourceMappingURL=4.0d56b460df7249f2f1a8.hot-update.js.map