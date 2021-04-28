webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-nodebird\\prepare\\front\\components\\NicknameEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var NicknameEditForm = function NicknameEditForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    value: nickname,
    onChange: onChangeNickname,
    addonBefore: "\uB2C9\uB124\uC784",
    enterButton: "\uC218\uC815",
    onSearch: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

_s(NicknameEditForm, "N7qq+s3xxzry3hENaoydffT6TQU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxxQkFDZEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FERztBQUFBLE1BQ3JCQyxFQURxQixnQkFDckJBLEVBRHFCOztBQUFBLGtCQUVRQywrREFBUSxDQUFDLENBQUFELEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFRSxRQUFKLEtBQWdCLEVBQWpCLENBRmhCO0FBQUE7QUFBQSxNQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxnQkFGWTs7QUFHN0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDSCxZQUFRLENBQUM7QUFDUEksVUFBSSxFQUFFQyxzRUFEQztBQUVQQyxVQUFJLEVBQUVSO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ0EsUUFBRCxDQUx5QixDQUE1QjtBQU9BLFNBQ0UsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRTtBQUFFUyxrQkFBWSxFQUFFLE1BQWhCO0FBQXdCQyxZQUFNLEVBQUUsbUJBQWhDO0FBQXFEQyxhQUFPLEVBQUU7QUFBOUQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSxTQUFLLEVBQUVYLFFBRFQ7QUFFRSxZQUFRLEVBQUVDLGdCQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsZUFBVyxFQUFDLGNBSmQ7QUFLRSxZQUFRLEVBQUVHLFFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFXRCxDQXZCRDs7R0FBTVYsZ0I7VUFDV0MsdUQsRUFDc0JJLHVELEVBQ3BCSSx1RDs7O0tBSGJULGdCO0FBeUJTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjhkZTc5NzE1YmJiMTc5NDMyMWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCAnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgfSk7XHJcbiAgfSwgW25pY2tuYW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNkOWQ5ZDknLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgIDxJbnB1dC5TZWFyY2hcclxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgYWRkb25CZWZvcmU9XCLri4nrhKTsnoRcIlxyXG4gICAgICAgIGVudGVyQnV0dG9uPVwi7IiY7KCVXCJcclxuICAgICAgICBvblNlYXJjaD17b25TdWJtaXR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=