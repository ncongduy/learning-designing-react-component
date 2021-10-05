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
            updateRecord: updateRecord
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjgxOGE5MDg3OGRkNDY0OTlhYWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RDLHlCQU9JSiwrREFBZSxDQUFDLElBQUQsRUFBT0UsOENBQVAsQ0FQbkI7QUFBQSxNQUNPRyxZQURQLG9CQUNDSCxJQUREO0FBQUEsTUFFQ0ksYUFGRCxvQkFFQ0EsYUFGRDtBQUFBLE1BR0NDLEtBSEQsb0JBR0NBLEtBSEQ7QUFBQSxNQUlDQyxZQUpELG9CQUlDQSxZQUpEO0FBQUEsTUFLQ0MsWUFMRCxvQkFLQ0EsWUFMRDtBQUFBLE1BTUNDLFlBTkQsb0JBTUNBLFlBTkQ7O0FBU0Esb0JBQW1DYixpREFBVSxDQUFDTSxnRkFBRCxDQUE3QztBQUFBLE1BQVFRLFdBQVIsZUFBUUEsV0FBUjtBQUFBLE1BQXFCQyxTQUFyQixlQUFxQkEsU0FBckI7O0FBRUEsTUFBSU4sYUFBYSxLQUFLTCwwRUFBdEIsRUFBOEM7QUFDN0Msd0JBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNRO0FBQUEsbURBQWdDTSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQUVELHNCQUNDO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0MsOERBQUMsc0RBQUQ7QUFDQyxVQUFJLEVBQUMsT0FETjtBQUVDLFNBQUcsRUFBRSxFQUZOO0FBR0MsZUFBUyxFQUFDLDBCQUhYO0FBSUMsV0FBSyxFQUFFRCxhQUFhLEtBQUtMLDBFQUoxQjtBQUFBLDZCQU1DO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0VJLFlBQVksQ0FDWFUsTUFERCxDQUVDLFVBQUNDLE9BQUQ7QUFBQSxpQkFDQ0EsT0FBTyxDQUFDQyxLQUFSLENBQ0VDLFdBREYsR0FFRUMsUUFGRixDQUVXUixXQUFXLENBQUNPLFdBQVosRUFGWCxLQUdBRixPQUFPLENBQUNJLElBQVIsQ0FDRUYsV0FERixHQUVFQyxRQUZGLENBRVdSLFdBQVcsQ0FBQ08sV0FBWixFQUZYLENBSkQ7QUFBQSxTQUZELEVBVUNILE1BVkQsQ0FVUSxVQUFDQyxPQUFEO0FBQUEsaUJBQ1BBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkMsSUFBakIsQ0FDQyxVQUFDQyxPQUFEO0FBQUEsbUJBQWFBLE9BQU8sQ0FBQ1gsU0FBUixLQUFzQkEsU0FBbkM7QUFBQSxXQURELENBRE87QUFBQSxTQVZSLEVBZUNZLEdBZkQsQ0FlSyxVQUFDUixPQUFELEVBQWE7QUFDakIsOEJBQ0MsOERBQUMsNkNBQUQ7QUFFQyxtQkFBTyxFQUFFQSxPQUZWO0FBR0Msd0JBQVksRUFBRVI7QUFIZixhQUNNUSxPQUFPLENBQUNTLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQU9BLFNBdkJEO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQ0E7O0dBekR1QnJCO1VBUW5CSjs7O0tBUm1CSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJztcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSAnLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5JztcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uL1NwZWFrZXJEYXRhJztcclxuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2Vyc0xpc3QoKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0ZGF0YTogc3BlYWtlcnNEYXRhLFxyXG5cdFx0cmVxdWVzdFN0YXR1cyxcclxuXHRcdGVycm9yLFxyXG5cdFx0dXBkYXRlUmVjb3JkLFxyXG5cdFx0aW5zZXJ0UmVjb3JkLFxyXG5cdFx0ZGVsZXRlUmVjb3JkLFxyXG5cdH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG5cdGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcblxyXG5cdGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPlxyXG5cdFx0XHRcdEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgc3BlYWtlcnMtbGlzdCc+XHJcblx0XHRcdDxSZWFjdFBsYWNlSG9sZGVyXHJcblx0XHRcdFx0dHlwZT0nbWVkaWEnXHJcblx0XHRcdFx0cm93PXsxNX1cclxuXHRcdFx0XHRjbGFzc05hbWU9J3NwZWFrZXJzbGlzdC1wbGFjZWhvbGRlcidcclxuXHRcdFx0XHRyZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0e3NwZWFrZXJzRGF0YVxyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRcdChzcGVha2VyKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0c3BlYWtlci5maXJzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcclxuXHRcdFx0XHRcdFx0XHRcdHNwZWFrZXIubGFzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKChzcGVha2VyKSA9PlxyXG5cdFx0XHRcdFx0XHRcdHNwZWFrZXIuc2Vzc2lvbnMuZmluZChcclxuXHRcdFx0XHRcdFx0XHRcdChzZXNzaW9uKSA9PiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHNwZWFrZXIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PFNwZWFrZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtzcGVha2VyLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVha2VyPXtzcGVha2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvUmVhY3RQbGFjZUhvbGRlcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTcGVha2VyIiwiUmVhY3RQbGFjZUhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2VhcmNoUXVlcnkiLCJldmVudFllYXIiLCJGQUlMVVJFIiwiU1VDQ0VTUyIsImZpbHRlciIsInNwZWFrZXIiLCJmaXJzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsYXN0Iiwic2Vzc2lvbnMiLCJmaW5kIiwic2Vzc2lvbiIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==