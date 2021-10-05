"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();



var REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

var useRequestDelay = function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialData),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                // throw 'Test Error!';
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setData(newRecords);
                _context2.next = 4;
                return delay(delayTime);

              case 4:
                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('error thrown inside delayFunction', _context2.t0);

                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction2.apply(this, arguments);
    }

    function _delayFunction2() {
      _delayFunction2 = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                setData(newRecords);
                _context3.next = 4;
                return delay(delayTime);

              case 4:
                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log('error thrown inside delayFunction', _context3.t0);

                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      return _delayFunction2.apply(this, arguments);
    }

    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction3.apply(this, arguments);
    }

    function _delayFunction3() {
      _delayFunction3 = (0,C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_ncong_OneDrive_All_data_NCD_Duy_Data_Programming_react_pluralsight_designing_react_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                setData(newRecords);
                _context4.next = 4;
                return delay(delayTime);

              case 4:
                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log('error thrown inside delayFunction', _context4.t0);

                if (typeof doneCallback === 'function') {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      return _delayFunction3.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord
  };
};

_s(useRequestDelay, "0WQpuavHx5FE4dj88HwP1eU9HW8=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFjYTEyYmM2NmRiNTBmNjk1OGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUUsY0FBYyxHQUFHO0FBQzdCQyxFQUFBQSxPQUFPLEVBQUUsU0FEb0I7QUFFN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUZvQjtBQUc3QkMsRUFBQUEsT0FBTyxFQUFFO0FBSG9CLENBQXZCOztBQU1QLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBd0M7QUFBQTs7QUFBQSxNQUF2Q0MsU0FBdUMsdUVBQTNCLElBQTJCO0FBQUEsTUFBckJDLFdBQXFCLHVFQUFQLEVBQU87O0FBQy9ELGtCQUF3QlIsK0NBQVEsQ0FBQ1EsV0FBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUEwQ1YsK0NBQVEsQ0FBQ0UsY0FBYyxDQUFDQyxPQUFoQixDQUFsRDtBQUFBLE1BQU9RLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUEwQlosK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2EsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBRUFmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0FtQixTQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlhQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVFMLEtBQUssQ0FBQ1IsU0FBRCxDQUZiOztBQUFBO0FBR0U7QUFDQUssZ0JBQUFBLGdCQUFnQixDQUFDVixjQUFjLENB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QUEsdUJBR1FWLEtBQUssQ0FBQ1IsU0FBRCxDQUhiOztBQUFBO0FBSUUsb0JBQUksT0FBT2dCLFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDdkNBLGtCQUFBQSxZQUFZO0FBQ1o7O0FBTkg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRRU8sZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaOztBQUNBLG9CQUFJLE9BQU9SLFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDdkNBLGtCQUFBQSxZQUFZO0FBQ1o7O0FBQ0RiLGdCQUFBQSxPQUFPLENBQUNjLGVBQUQsQ0FBUDs7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUoyQztBQUFBO0FBQUE7O0FBb0IzQ0ssSUFBQUEsYUFBYTtBQUNiOztBQUVELFNBQU87QUFBRXBCLElBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRSxJQUFBQSxhQUFhLEVBQWJBLGFBQVI7QUFBdUJFLElBQUFBLEtBQUssRUFBTEEsS0FBdkI7QUFBOEJRLElBQUFBLFlBQVksRUFBWkE7QUFBOUIsR0FBUDtBQUNBLENBL0ZEOztHQUFNZjs7QUFpR04sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG5cdExPQURJTkc6ICdsb2FkaW5nJyxcclxuXHRTVUNDRVNTOiAnc3VjY2VzcycsXHJcblx0RkFJTFVSRTogJ2ZhaWx1cmUnLFxyXG59O1xyXG5cclxuY29uc3QgdXNlUmVxdWVzdERlbGF5ID0gKGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pID0+IHtcclxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcblx0Y29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcblx0XHRcdFx0Ly8gdGhyb3cgJ1Rlc3QgRXJyb3IhJztcclxuXHRcdFx0XHRzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG5cdFx0XHRcdHNldERhdGEoZGF0YSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XHJcblx0XHRcdFx0c2V0RXJyb3IoZXJyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGRlbGF5RnVuYygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcblx0XHRjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoKHJlYykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVjLmlkID09PSByZWNvcmQuaWQgPyByZWNvcmQgOiByZWM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHNldERhdGEobmV3UmVjb3Jkcyk7XHJcblx0XHRcdFx0YXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRvbmVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uJywgZXJyKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRvbmVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0ZG9uZUNhbGxiYWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGRlbGF5RnVuY3Rpb24oKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluc2VydFJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xyXG5cdFx0Y29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG5cdFx0Y29uc3QgbmV3UmVjb3JkcyA9IFtyZWNvcmQsIC4uLmRhdGFdO1xyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0c2V0RGF0YShuZXdSZWNvcmRzKTtcclxuXHRcdFx0XHRhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZG9uZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb24nLCBlcnIpO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZG9uZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRkb25lQ2FsbGJhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVsYXlGdW5jdGlvbigpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZGVsZXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcblx0XHRjb25zdCBuZXdSZWNvcmRzID0gW3JlY29yZCwgLi4uZGF0YV07XHJcblxyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRzZXREYXRhKG5ld1JlY29yZHMpO1xyXG5cdFx0XHRcdGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkb25lQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvbicsIGVycik7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBkb25lQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdGRvbmVDYWxsYmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRkZWxheUZ1bmN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBkYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvciwgdXBkYXRlUmVjb3JkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmQiLCJkb25lQ2FsbGJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJkZWxheUZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCJdLCJzb3VyY2VSb290IjoiIn0=