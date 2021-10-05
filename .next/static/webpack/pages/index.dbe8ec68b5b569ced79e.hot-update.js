"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakersList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\ncong\\OneDrive\\All data\\NCD\\Duy - Data\\Programming\\react-pluralsight\\designing-react-components\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();








function SpeakersList() {
  _s();

  var _this = this;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord,
      insertRecord = _useRequestDelay.insertRecord,
      deleteRecord = _useRequestDelay.deleteRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext),
      searchQuery = _useContext.searchQuery,
      eventYear = _useContext.eventYear;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      row: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row",
        children: speakersData.filter(function (speaker) {
          return speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) || speaker.last.toLowerCase().includes(searchQuery.toLowerCase());
        }).filter(function (speaker) {
          return speaker.sessions.find(function (session) {
            return session.eventYear === eventYear;
          });
        }).map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            updateRecord: updateRecord,
            insertRecord: insertRecord,
            deleteRecord: deleteRecord
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 9
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

_s(SpeakersList, "oZS6TfBai+hObnFEMBlI5HYefj0=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = SpeakersList;

var _c;

$RefreshReg$(_c, "SpeakersList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJlOGVjNjhiNWI1NjljZWQ3OWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RDLHlCQU9JSiwrREFBZSxDQUFDLElBQUQsRUFBT0UsOENBQVAsQ0FQbkI7QUFBQSxNQUNPRyxZQURQLG9CQUNDSCxJQUREO0FBQUEsTUFFQ0ksYUFGRCxvQkFFQ0EsYUFGRDtBQUFBLE1BR0NDLEtBSEQsb0JBR0NBLEtBSEQ7QUFBQSxNQUlDQyxZQUpELG9CQUlDQSxZQUpEO0FBQUEsTUFLQ0MsWUFMRCxvQkFLQ0EsWUFMRDtBQUFBLE1BTUNDLFlBTkQsb0JBTUNBLFlBTkQ7O0FBU0Esb0JBQW1DYixpREFBVSxDQUFDTSxnRkFBRCxDQUE3QztBQUFBLE1BQVFRLFdBQVIsZUFBUUEsV0FBUjtBQUFBLE1BQXFCQyxTQUFyQixlQUFxQkEsU0FBckI7O0FBRUEsTUFBSU4sYUFBYSxLQUFLTCwwRUFBdEIsRUFBOEM7QUFDN0Msd0JBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNRO0FBQUEsbURBQWdDTSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQUVELHNCQUNDO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0MsOERBQUMsc0RBQUQ7QUFDQyxVQUFJLEVBQUMsT0FETjtBQUVDLFNBQUcsRUFBRSxFQUZOO0FBR0MsZUFBUyxFQUFDLDBCQUhYO0FBSUMsV0FBSyxFQUFFRCxhQUFhLEtBQUtMLDBFQUoxQjtBQUFBLDZCQU1DO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0VJLFlBQVksQ0FDWFUsTUFERCxDQUVDLFVBQUNDLE9BQUQ7QUFBQSxpQkFDQ0EsT0FBTyxDQUFDQyxLQUFSLENBQ0VDLFdBREYsR0FFRUMsUUFGRixDQUVXUixXQUFXLENBQUNPLFdBQVosRUFGWCxLQUdBRixPQUFPLENBQUNJLElBQVIsQ0FDRUYsV0FERixHQUVFQyxRQUZGLENBRVdSLFdBQVcsQ0FBQ08sV0FBWixFQUZYLENBSkQ7QUFBQSxTQUZELEVBVUNILE1BVkQsQ0FVUSxVQUFDQyxPQUFEO0FBQUEsaUJBQ1BBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkMsSUFBakIsQ0FDQyxVQUFDQyxPQUFEO0FBQUEsbUJBQWFBLE9BQU8sQ0FBQ1gsU0FBUixLQUFzQkEsU0FBbkM7QUFBQSxXQURELENBRE87QUFBQSxTQVZSLEVBZUNZLEdBZkQsQ0FlSyxVQUFDUixPQUFELEVBQWE7QUFDakIsOEJBQ0MsOERBQUMsNkNBQUQ7QUFFQyxtQkFBTyxFQUFFQSxPQUZWO0FBR0Msd0JBQVksRUFBRVIsWUFIZjtBQUlDLHdCQUFZLEVBQUVDLFlBSmY7QUFLQyx3QkFBWSxFQUFFQztBQUxmLGFBQ01NLE9BQU8sQ0FBQ1MsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBU0EsU0F6QkQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXVDQTs7R0EzRHVCckI7VUFRbkJKOzs7S0FSbUJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tICdyZWFjdC1wbGFjZWhvbGRlcic7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tICcuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXknO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vU3BlYWtlckRhdGEnO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuXHRjb25zdCB7XHJcblx0XHRkYXRhOiBzcGVha2Vyc0RhdGEsXHJcblx0XHRyZXF1ZXN0U3RhdHVzLFxyXG5cdFx0ZXJyb3IsXHJcblx0XHR1cGRhdGVSZWNvcmQsXHJcblx0XHRpbnNlcnRSZWNvcmQsXHJcblx0XHRkZWxldGVSZWNvcmQsXHJcblx0fSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcblx0Y29uc3QgeyBzZWFyY2hRdWVyeSwgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcblx0aWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+XHJcblx0XHRcdFx0RVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBzcGVha2Vycy1saXN0Jz5cclxuXHRcdFx0PFJlYWN0UGxhY2VIb2xkZXJcclxuXHRcdFx0XHR0eXBlPSdtZWRpYSdcclxuXHRcdFx0XHRyb3c9ezE1fVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nc3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyJ1xyXG5cdFx0XHRcdHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHR7c3BlYWtlcnNEYXRhXHJcblx0XHRcdFx0XHRcdC5maWx0ZXIoXHJcblx0XHRcdFx0XHRcdFx0KHNwZWFrZXIpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRzcGVha2VyLmZpcnN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0c3BlYWtlci5sYXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHNwZWFrZXIpID0+XHJcblx0XHRcdFx0XHRcdFx0c3BlYWtlci5zZXNzaW9ucy5maW5kKFxyXG5cdFx0XHRcdFx0XHRcdFx0KHNlc3Npb24pID0+IHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXJcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0Lm1hcCgoc3BlYWtlcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8U3BlYWtlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3NwZWFrZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWFrZXI9e3NwZWFrZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1JlYWN0UGxhY2VIb2xkZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU3BlYWtlciIsIlJlYWN0UGxhY2VIb2xkZXIiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJSRVFVRVNUX1NUQVRVUyIsImRhdGEiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJzTGlzdCIsInNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNlYXJjaFF1ZXJ5IiwiZXZlbnRZZWFyIiwiRkFJTFVSRSIsIlNVQ0NFU1MiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=