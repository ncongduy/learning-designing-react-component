"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ "./src/contexts/SpeakerContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ncong\\OneDrive\\All data\\NCD\\Duy - Data\\Programming\\react-pluralsight\\designing-react-components\\src\\components\\Speaker.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Session = function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = Session;

var Sessions = function Sessions() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext),
      eventYear = _useContext.eventYear;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext),
      speaker = _useContext2.speaker;

  var sessions = speaker.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, _this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_s(Sessions, "Mbmdx4PcMD6cs0fOkUGItK70sHk=");

_c2 = Sessions;

var SpeakerImage = function SpeakerImage() {
  _s2();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext),
      speaker = _useContext3.speaker;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(speaker.id, ".jpg"),
      "with": "300",
      alt: "".concat(speaker.first, " ").concat(speaker.last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, _this);
};

_s2(SpeakerImage, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c3 = SpeakerImage;

var SpeakerFavorite = function SpeakerFavorite() {
  _s3();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext),
      speaker = _useContext4.speaker,
      updateRecord = _useContext4.updateRecord;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

  function doneCallback() {
    setInTransition(false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
        className: speaker.favorite === true ? 'fa fa-star orange' : 'fa fa-star-o orange'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this), ' ', "Favorite", ' ', inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};

_s3(SpeakerFavorite, "JYNF7jT9pd2MEJCpvqZnBM3xISU=");

_c4 = SpeakerFavorite;

var SpeakerDemographics = function SpeakerDemographics() {
  _s4();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext),
      speaker = _useContext5.speaker;

  var first = speaker.first,
      last = speaker.last,
      bio = speaker.bio,
      company = speaker.company,
      twitterHandle = speaker.twitterHandle,
      favorite = speaker.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 3
  }, _this);
};

_s4(SpeakerDemographics, "+GLFQhMVC35zrtukZQzc41tR8Ok=");

_c5 = SpeakerDemographics;

var Speaker = function Speaker(_ref2) {
  _s5();

  var speaker = _ref2.speaker,
      updateRecord = _ref2.updateRecord,
      insertRecord = _ref2.insertRecord,
      deleteRecord = _ref2.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext),
      showSessions = _useContext6.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, _this), showSessions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 3
  }, _this);
};

_s5(Speaker, "TltPt07ZHCSa0bZmdBKJaXz9l1w=");

_c6 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerFavorite");
$RefreshReg$(_c5, "SpeakerDemographics");
$RefreshReg$(_c6, "Speaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI2YTBiZWQ0N2NhOGNlMzMzM2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBcUI7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3BDLHNCQUNDO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUEsZUFDRUQsS0FERixvQkFDUztBQUFBLDJCQUFlQyxJQUFJLENBQUNDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FORDs7S0FBTUg7O0FBUU4sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUN0QixvQkFBc0JSLGlEQUFVLENBQUNDLGdGQUFELENBQWhDO0FBQUEsTUFBUVEsU0FBUixlQUFRQSxTQUFSOztBQUVBLHFCQUFvQlQsaURBQVUsQ0FBQ0csb0VBQUQsQ0FBOUI7QUFBQSxNQUFRTyxPQUFSLGdCQUFRQSxPQUFSOztBQUNBLE1BQVFDLFFBQVIsR0FBcUJELE9BQXJCLENBQVFDLFFBQVI7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLGNBQ0VBLFFBQVEsQ0FDUEMsTUFERCxDQUNRLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNKLFNBQVIsS0FBc0JBLFNBQW5DO0FBQUEsS0FEUixFQUVDSyxHQUZELENBRUssVUFBQ0QsT0FBRDtBQUFBLDBCQUNKO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0MsOERBQUMsT0FBRCxvQkFBYUEsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsU0FBb0NBLE9BQU8sQ0FBQ0UsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJO0FBQUEsS0FGTDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdBLENBakJEOztHQUFNUDs7TUFBQUE7O0FBbUJOLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDMUIscUJBQW9CaEIsaURBQVUsQ0FBQ0csb0VBQUQsQ0FBOUI7QUFBQSxNQUFRTyxPQUFSLGdCQUFRQSxPQUFSOztBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLDZFQUFmO0FBQUEsMkJBQ0M7QUFDQyxlQUFTLEVBQUMsYUFEWDtBQUVDLFNBQUcsNEJBQXFCQSxPQUFPLENBQUNLLEVBQTdCLFNBRko7QUFHQyxjQUFLLEtBSE47QUFJQyxTQUFHLFlBQUtMLE9BQU8sQ0FBQ08sS0FBYixjQUFzQlAsT0FBTyxDQUFDUSxJQUE5QjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFVQSxDQWJEOztJQUFNRjs7TUFBQUE7O0FBZU4sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzdCLHFCQUFrQ25CLGlEQUFVLENBQUNHLG9FQUFELENBQTVDO0FBQUEsTUFBUU8sT0FBUixnQkFBUUEsT0FBUjtBQUFBLE1BQWlCVSxZQUFqQixnQkFBaUJBLFlBQWpCOztBQUVBLGtCQUF3Q3JCLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9zQixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLFdBQVNDLFlBQVQsR0FBd0I7QUFDdkJELElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQTs7QUFFRCxzQkFDQztBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsMkJBQ0M7QUFDQyxhQUFPLEVBQUUsbUJBQU07QUFDZEEsUUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRixRQUFBQSxZQUFZLGlDQUVQVixPQUZPO0FBR1ZjLFVBQUFBLFFBQVEsRUFBRSxDQUFDZCxPQUFPLENBQUNjO0FBSFQsWUFLWEQsWUFMVyxDQUFaO0FBT0EsT0FWRjtBQUFBLDhCQVlDO0FBQ0MsaUJBQVMsRUFDUmIsT0FBTyxDQUFDYyxRQUFSLEtBQXFCLElBQXJCLEdBQ0csbUJBREgsR0FFRztBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRCxFQWtCSSxHQWxCSixjQW1CVSxHQW5CVixFQW9CRUgsWUFBWSxnQkFDWjtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZLEdBRVQsSUF0Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNEJBLENBckNEOztJQUFNRjs7TUFBQUE7O0FBdUNOLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUNqQyxxQkFBb0J6QixpREFBVSxDQUFDRyxvRUFBRCxDQUE5QjtBQUFBLE1BQVFPLE9BQVIsZ0JBQVFBLE9BQVI7O0FBQ0EsTUFBUU8sS0FBUixHQUErRFAsT0FBL0QsQ0FBUU8sS0FBUjtBQUFBLE1BQWVDLElBQWYsR0FBK0RSLE9BQS9ELENBQWVRLElBQWY7QUFBQSxNQUFxQlEsR0FBckIsR0FBK0RoQixPQUEvRCxDQUFxQmdCLEdBQXJCO0FBQUEsTUFBMEJDLE9BQTFCLEdBQStEakIsT0FBL0QsQ0FBMEJpQixPQUExQjtBQUFBLE1BQW1DQyxhQUFuQyxHQUErRGxCLE9BQS9ELENBQW1Da0IsYUFBbkM7QUFBQSxNQUFrREosUUFBbEQsR0FBK0RkLE9BQS9ELENBQWtEYyxRQUFsRDtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFBLDZCQUNDO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLG1CQUNFUCxLQURGLE9BQ1VDLElBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBTUMsOERBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsZUFPQztBQUFBLDhCQUNDO0FBQUcsaUJBQVMsRUFBQyxrQkFBYjtBQUFBLGtCQUFpQ1E7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUEsc0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFLQztBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTNCRDs7SUFBTUg7O01BQUFBOztBQTZCTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEyRDtBQUFBOztBQUFBLE1BQXhEbkIsT0FBd0QsU0FBeERBLE9BQXdEO0FBQUEsTUFBL0NVLFlBQStDLFNBQS9DQSxZQUErQztBQUFBLE1BQWpDVSxZQUFpQyxTQUFqQ0EsWUFBaUM7QUFBQSxNQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1COztBQUMxRSxxQkFBeUIvQixpREFBVSxDQUFDQyxnRkFBRCxDQUFuQztBQUFBLE1BQVErQixZQUFSLGdCQUFRQSxZQUFSOztBQUVBLHNCQUNDLDhEQUFDLHFFQUFEO0FBQ0MsV0FBTyxFQUFFdEIsT0FEVjtBQUVDLGdCQUFZLEVBQUVVLFlBRmY7QUFHQyxnQkFBWSxFQUFFVSxZQUhmO0FBSUMsZ0JBQVksRUFBRUMsWUFKZjtBQUFBLDJCQU1DO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0MsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMsOERBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQUtFQyxZQUFZLGdCQUFHLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQWtCLElBTGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdCQSxDQW5CRDs7SUFBTUg7O01BQUFBO0FBcUJOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgU3BlYWtlclByb3ZpZGVyLCBTcGVha2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJDb250ZXh0JztcclxuXHJcbmNvbnN0IFNlc3Npb24gPSAoeyB0aXRsZSwgcm9vbSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzcGFuIGNsYXNzTmFtZT0nc2Vzc2lvbiB3LTEwMCc+XHJcblx0XHRcdHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0PC9zcGFuPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTZXNzaW9ucyA9ICgpID0+IHtcclxuXHRjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XHJcblx0Y29uc3QgeyBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdzZXNzaW9uQm94IGNhcmQgaC0yNTAnPlxyXG5cdFx0XHR7c2Vzc2lvbnNcclxuXHRcdFx0XHQuZmlsdGVyKChzZXNzaW9uKSA9PiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyKVxyXG5cdFx0XHRcdC5tYXAoKHNlc3Npb24pID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZXNzaW9uIHctMTAwJyBrZXk9e3Nlc3Npb24uaWR9PlxyXG5cdFx0XHRcdFx0XHQ8U2Vzc2lvbiB7Li4uc2Vzc2lvbn0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFNwZWFrZXJJbWFnZSA9ICgpID0+IHtcclxuXHRjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3NwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMCc+XHJcblx0XHRcdDxpbWdcclxuXHRcdFx0XHRjbGFzc05hbWU9J2NvbnRhaW4tZml0J1xyXG5cdFx0XHRcdHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke3NwZWFrZXIuaWR9LmpwZ2B9XHJcblx0XHRcdFx0d2l0aD0nMzAwJ1xyXG5cdFx0XHRcdGFsdD17YCR7c3BlYWtlci5maXJzdH0gJHtzcGVha2VyLmxhc3R9YH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xyXG5cclxuXHRjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcblx0XHRzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24gcGFkQjEnPlxyXG5cdFx0XHQ8c3BhblxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuXHRcdFx0XHRcdHVwZGF0ZVJlY29yZChcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC4uLnNwZWFrZXIsXHJcblx0XHRcdFx0XHRcdFx0ZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRkb25lQ2FsbGJhY2tcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRzcGVha2VyLmZhdm9yaXRlID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0PyAnZmEgZmEtc3RhciBvcmFuZ2UnXHJcblx0XHRcdFx0XHRcdFx0OiAnZmEgZmEtc3Rhci1vIG9yYW5nZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPnsnICd9XHJcblx0XHRcdFx0RmF2b3JpdGV7JyAnfVxyXG5cdFx0XHRcdHtpblRyYW5zaXRpb24gPyAoXHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2ZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3Bpbic+PC9zcGFuPlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU3BlYWtlckRlbW9ncmFwaGljcyA9ICgpID0+IHtcclxuXHRjb25zdCB7IHNwZWFrZXIgfSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xyXG5cdGNvbnN0IHsgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgfSA9IHNwZWFrZXI7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlYWtlci1pbmZvJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zJz5cclxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlIHctMjAwJz5cclxuXHRcdFx0XHRcdHtmaXJzdH0ge2xhc3R9XHJcblx0XHRcdFx0PC9oMz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTcGVha2VyRmF2b3JpdGUgLz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2NhcmQtZGVzY3JpcHRpb24nPntiaW99PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbXBhbnknPlxyXG5cdFx0XHRcdFx0XHQ8aDU+Q29tcGFueTwvaDU+XHJcblx0XHRcdFx0XHRcdDxoNj57Y29tcGFueX08L2g2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHdpdHRlcic+XHJcblx0XHRcdFx0XHRcdDxoNT5Ud2l0dGVyPC9oNT5cclxuXHRcdFx0XHRcdFx0PGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU3BlYWtlciA9ICh7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkgPT4ge1xyXG5cdGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTcGVha2VyUHJvdmlkZXJcclxuXHRcdFx0c3BlYWtlcj17c3BlYWtlcn1cclxuXHRcdFx0dXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XHJcblx0XHRcdGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxyXG5cdFx0XHRkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQgY2FyZC1oZWlnaHQgcC00IG10LTQnPlxyXG5cdFx0XHRcdFx0PFNwZWFrZXJJbWFnZSAvPlxyXG5cdFx0XHRcdFx0PFNwZWFrZXJEZW1vZ3JhcGhpY3MgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c2hvd1Nlc3Npb25zID8gPFNlc3Npb25zIC8+IDogbnVsbH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1NwZWFrZXJQcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTcGVha2VyUHJvdmlkZXIiLCJTcGVha2VyQ29udGV4dCIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJldmVudFllYXIiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJmaWx0ZXIiLCJzZXNzaW9uIiwibWFwIiwiaWQiLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJmYXZvcml0ZSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsIlNwZWFrZXIiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9