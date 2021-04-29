webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
var _this = undefined,
    _jsxFileName = "D:\\euni\\workspaces\\react_nodebird\\react-nodebird\\prepare\\front\\pages\\user\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var User = function User() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, userInfo && __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, userInfo.nickname, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://nodebird.com/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://nodebird.com/user/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), userInfo ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), userInfo.Posts), __jsx("div", {
      key: "following",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), userInfo.Followings), __jsx("div", {
      key: "follower",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }), userInfo.Followers)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }
    }, userInfo.nickname[0]),
    title: userInfo.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })) : null, mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 32
      }
    });
  }));
};

_s(User, "FXTbcjoVaSS4w2oveElPGfnTqkc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = User;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlciIsInVzZXJJbmZvIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidHlwZSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwibGFzdElkIiwibGVuZ3RoIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGaUIsTUFHVEMsRUFIUyxHQUdGRixNQUFNLENBQUNHLEtBSEwsQ0FHVEQsRUFIUzs7QUFBQSxxQkFJcUNFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSmhEO0FBQUEsTUFJVEMsU0FKUyxnQkFJVEEsU0FKUztBQUFBLE1BSUVDLFlBSkYsZ0JBSUVBLFlBSkY7QUFBQSxNQUlnQkMsZ0JBSmhCLGdCQUlnQkEsZ0JBSmhCOztBQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0dsQixRQUFRLENBQUNtQixTQUhaLENBWE8sQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbUJFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTbkIsUUFBUSxDQUFDZ0IsUUFBVCxDQUFrQixDQUFsQixDQUFULENBRFY7QUFFRSxTQUFLLEVBQUVoQixRQUFRLENBQUNnQixRQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBRkssR0EyQkwsSUF6Q04sRUEwQ0dwQixTQUFTLENBQUN3QixHQUFWLENBQWMsVUFBQ3pCLElBQUQ7QUFBQSxXQUFVLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0osRUFBcEI7QUFBd0IsVUFBSSxFQUFFSSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFkLENBMUNILENBREY7QUE4Q0QsQ0F2RUQ7O0dBQU1ULEk7VUFDYUUsdUQsRUFDRkUscUQsRUFFdUNHLHVELEVBQ2pDQSx1RDs7O0tBTGpCUCxJOztBQWdHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLmRkOGQ4NmUzZWNhMjNkZjQ1NGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlckluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdICYmIG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMubGVuZ3RoLCBoYXNNb3JlUG9zdHMsIGlkLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7dXNlckluZm8gJiYgKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7dXNlckluZm8ubmlja25hbWV9XHJcbiAgICAgICAgICAgIOuLmOydmCDquIBcclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vdXNlci8ke2lkfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlckluZm9cclxuICAgICAgICA/IChcclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cclxuICAgICAgICAgICAgICAgIOynueynuVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlckluZm8uUG9zdHN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+XHJcbiAgICAgICAgICAgICAgICDtjJTroZzsnolcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2luZ3N9XHJcbiAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJcIj5cclxuICAgICAgICAgICAgICAgIO2MlOuhnOybjFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlckluZm8uRm9sbG93ZXJzfVxyXG4gICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57dXNlckluZm8ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgY29uc29sZS5sb2coJ2dldFN0YXRlJywgY29udGV4dC5zdG9yZS5nZXRTdGF0ZSgpLnBvc3QubWFpblBvc3RzKTtcclxuICByZXR1cm4geyBwcm9wczoge30gfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=