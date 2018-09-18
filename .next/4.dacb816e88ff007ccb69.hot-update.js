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
        className: "jsx-2556318991"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-2556318991" + " " + "body-content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterIncrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-2556318991" + " " + "cycle-up"
      }, "Cycle up"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2556318991"
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
        className: "jsx-2556318991"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: this.counterCharacterDecrease,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2556318991" + " " + "cycle-down"
      }, "Cycle down")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2556318991" + " " + "lower"
      }, fullList), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2556318991",
        css: ".body-content.jsx-2556318991{background:#fff;color:#000;text-align:center;padding:30px;}.cycle-up.jsx-2556318991{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;right:-45px;height:50px;width:50px;text-indent:-5555px;}.cycle-down.jsx-2556318991{background-image:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');background-repeat:no-repeat;position:absolute;top:100px;left:-45px;height:50px;width:50px;text-indent:-5555px;}.lower-links.jsx-2556318991{list-style:none;margin:0;padding:40px;}.lower-links.jsx-2556318991 li.jsx-2556318991{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFENEIsQUFJNkMsQUFReTBCLEFBV0UsQUFXMzBCLEFBS0ssZ0JBbENWLEFBOEJGLEtBS2IsSUFKaUIsRUE5QkssV0ErQnRCLE9BOUJpQixhQUVqQixteUJBSTRCLEVBV0EsMEJBVlYsRUFXQSxnQkFWUixFQVdBLFFBVkUsRUFXRCxVQVZDLENBV0EsV0FWRCxDQVdBLFVBVlMsQ0FXQSxtQkFWcEIsQ0FXQSIsImZpbGUiOiJjb21wb25lbnRzL2NoYXJhY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZW15cnRhYnJpemkvRG9jdW1lbnRzL3N0YXItd2Fycy10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpbyBmcm9tICcuL2JpbydcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBhY3RpdmU6ICd5ZXMnLFxuICAgICAgICBjb3VudGVyOiAwXG4gICAgfVxuICAgIGNvdW50ZXJDaGFyYWN0ZXJJbmNyZWFzZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAodGhpcy5wcm9wcy5wZW9wbGVUaGluZ3MubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAwIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMSB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvdW50ZXJDaGFyYWN0ZXJEZWNyZWFzZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogKHRoaXMucHJvcHMucGVvcGxlVGhpbmdzLmxlbmd0aCAtIDEpIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyIC0gMSB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGp1bXBDaGFyYWN0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IGV2ZW50LnRhcmdldC5pZCB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmdWxsTGlzdCA9IHRoaXMucHJvcHMucGVvcGxlVGhpbmdzLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PjxhIGhyZWY9XCIjXCIgaWQ9e2l9IG9uQ2xpY2s9e3RoaXMuanVtcENoYXJhY3Rlcn0+e2l0ZW0ubmFtZX08L2E+PC9saT5cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3ljbGUtdXBcIiBvbkNsaWNrPXt0aGlzLmNvdW50ZXJDaGFyYWN0ZXJJbmNyZWFzZX0+Q3ljbGUgdXA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJpb1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdGFyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFpckNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmhhaXJfY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBza2luQ29sb3I9e3RoaXMucHJvcHMucGVvcGxlVGhpbmdzW3RoaXMuc3RhdGUuY291bnRlcl0uc2tpbl9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV5ZUNvbG9yPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmV5ZV9jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoWWVhcj17dGhpcy5wcm9wcy5wZW9wbGVUaGluZ3NbdGhpcy5zdGF0ZS5jb3VudGVyXS5iaXJ0aF95ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyPXt0aGlzLnByb3BzLnBlb3BsZVRoaW5nc1t0aGlzLnN0YXRlLmNvdW50ZXJdLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3ljbGUtZG93blwiIG9uQ2xpY2s9e3RoaXMuY291bnRlckNoYXJhY3RlckRlY3JlYXNlfT5DeWNsZSBkb3duPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibG93ZXJcIj57ZnVsbExpc3R9PC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5LWNvbnRlbnQgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jeWNsZS11cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQyUzRnhtbCUyMHZlcnNpb24lM0QlMjIxLjAlMjIlMjBlbmNvZGluZyUzRCUyMnV0Zi04JTIyJTNGJTNFJTBBJTNDJTIxLS0lMjBHZW5lcmF0b3IlM0ElMjBBZG9iZSUyMElsbHVzdHJhdG9yJTIwMjIuMS4wJTJDJTIwU1ZHJTIwRXhwb3J0JTIwUGx1Zy1JbiUyMC4lMjBTVkclMjBWZXJzaW9uJTNBJTIwNi4wMCUyMEJ1aWxkJTIwMCUyOSUyMCUyMC0tJTNFJTBBJTNDc3ZnJTIwdmVyc2lvbiUzRCUyMjEuMSUyMiUyMGlkJTNEJTIyTGF5ZXJfMSUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHhtbG5zJTNBeGxpbmslM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzE5OTkveGxpbmslMjIlMjB4JTNEJTIyMTAwJTI1JTIyJTIweSUzRCUyMjEwMCUyNSUyMiUwQSUwOSUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDc1LjYlMjA3NS42JTIyJTIwc3R5bGUlM0QlMjJlbmFibGUtYmFja2dyb3VuZCUzQW5ldyUyMDAlMjAwJTIwNzUuNiUyMDc1LjYlM0IlMjIlMjB4bWwlM0FzcGFjZSUzRCUyMnByZXNlcnZlJTIyJTNFJTBBJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dC9jc3MlMjIlM0UlMEElMDkuc3QwJTdCZmlsbCUzQSUyMzZENkQ2QyUzQiU3RCUwQSUzQy9zdHlsZSUzRSUwQSUzQ2NpcmNsZSUyMGNsYXNzJTNEJTIyc3QwJTIyJTIwY3glM0QlMjIzNy44JTIyJTIwY3klM0QlMjIzNy44JTIyJTIwciUzRCUyMjM3LjglMjIvJTNFJTBBJTNDcG9seWdvbiUyMHBvaW50cyUzRCUyMjU2LjYlMkMzNi4xJTIwMjclMkMxOSUyMDI3JTJDNTMuMyUyMCUyMi8lM0UlMEElM0Mvc3ZnJTNFJTBBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC01NTU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jeWNsZS1kb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDJTNGeG1sJTIwdmVyc2lvbiUzRCUyMjEuMCUyMiUyMGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlMEElM0MlMjEtLSUyMEdlbmVyYXRvciUzQSUyMEFkb2JlJTIwSWxsdXN0cmF0b3IlMjAyMi4xLjAlMkMlMjBTVkclMjBFeHBvcnQlMjBQbHVnLUluJTIwLiUyMFNWRyUyMFZlcnNpb24lM0ElMjA2LjAwJTIwQnVpbGQlMjAwJTI5JTIwJTIwLS0lM0UlMEElM0NzdmclMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIwaWQlM0QlMjJMYXllcl8xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIweG1sbnMlM0F4bGluayUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMTk5OS94bGluayUyMiUyMHglM0QlMjIxMDAlMjUlMjIlMjB5JTNEJTIyMTAwJTI1JTIyJTBBJTA5JTIwdmlld0JveCUzRCUyMjAlMjAwJTIwNzUuNiUyMDc1LjYlMjIlMjBzdHlsZSUzRCUyMmVuYWJsZS1iYWNrZ3JvdW5kJTNBbmV3JTIwMCUyMDAlMjA3NS42JTIwNzUuNiUzQiUyMiUyMHhtbCUzQXNwYWNlJTNEJTIycHJlc2VydmUlMjIlM0UlMEElM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0L2NzcyUyMiUzRSUwQSUwOS5zdDAlN0JmaWxsJTNBJTIzNkQ2RDZDJTNCJTdEJTBBJTNDL3N0eWxlJTNFJTBBJTNDY2lyY2xlJTIwY2xhc3MlM0QlMjJzdDAlMjIlMjBjeCUzRCUyMjM3LjglMjIlMjBjeSUzRCUyMjM3LjglMjIlMjByJTNEJTIyMzcuOCUyMi8lM0UlMEElM0Nwb2x5Z29uJTIwcG9pbnRzJTNEJTIyMTklMkMzNi4xJTIwNDguNiUyQzE5JTIwNDguNiUyQzUzLjMlMjAlMjIvJTNFJTBBJTNDL3N2ZyUzRSUwQScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC01NTU1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb3dlci1saW5rcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb3dlci1saW5rcyBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG5cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyJdfQ== */\n/*@ sourceURL=components/character.js */"
      }));
    }
  }]);

  return Character;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })

})
//# sourceMappingURL=4.dacb816e88ff007ccb69.hot-update.js.map