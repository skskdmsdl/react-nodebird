webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-nodebird\\prepare\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // const id = me && me.id; -> 옵셔널 체이닝 연산자로 아래처럼 사용 가능(새로 생긴 문법)


  var id = me === null || me === void 0 ? void 0 : me.id; // const id = useSelector((state) => state.user.me?.id ); 이렇게 한번에도 표현 가능

  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 42
      }
    }) // 배열안에 jsx를 넣을때는 꼭 key를 넣어주기!
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 41
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 41
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 35
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 45
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  })));
};

_s(PostCard, "U5/lZD+NWvx5n9gEintD85eUGyM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "E:\\workspace\\react-nodebird\\prepare\\front\\components\\PostCardContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return (// 첫 번째 게시글 #해시태그 #익스프레스
    __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }
    }, postData.split(/(#[^\s#]+)/g).map(function (v) {
      if (postData.text(/(#[^\s#]+)/)) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/hashtag/".concat(v.slice(1)),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 24
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 62
          }
        }, v));
      }

      return v;
    }))
  );
};

_c = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0IiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpZCIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZUF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsInRleHQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRXVCRixzREFBUSxDQUFDLEtBQUQsQ0FGL0I7QUFBQSxNQUVwQkcsaUJBRm9CO0FBQUEsTUFFREMsb0JBRkM7O0FBRzNCLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ25DSixZQUFRLENBQUMsVUFBQ0ssSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBUjtBQUNILEdBRitCLEVBRTdCLEVBRjZCLENBQWhDO0FBR0EsTUFBTUMsZUFBZSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDdENGLHdCQUFvQixDQUFDLFVBQUNHLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQXBCO0FBQ0gsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7O0FBTjJCLHFCQVVaRSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQVZDO0FBQUEsTUFVbkJDLEVBVm1CLGdCQVVuQkEsRUFWbUIsRUFXM0I7OztBQUNBLE1BQU1DLEVBQUUsR0FBR0QsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVDLEVBQWYsQ0FaMkIsQ0FhM0I7O0FBRUEsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUVmLElBQUksQ0FBQ2dCLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLE1BQUMsbURBQUQ7QUFBWSxZQUFNLEVBQUVoQixJQUFJLENBQUNnQixNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDdCLENBRUk7QUFGSjtBQUdJLFdBQU8sRUFBRSxDQUNMLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESyxFQUVMZCxLQUFLLEdBQ0MsTUFBQyw4REFBRDtBQUFjLGtCQUFZLEVBQUMsU0FBM0I7QUFBcUMsU0FBRyxFQUFDLE9BQXpDO0FBQWlELGFBQU8sRUFBRUksWUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELEdBRUMsTUFBQywrREFBRDtBQUFlLFNBQUcsRUFBQyxPQUFuQjtBQUEyQixhQUFPLEVBQUVBLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRCxFQUtMLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQStCLGFBQU8sRUFBRUcsZUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxLLEVBTUwsTUFBQyw0Q0FBRDtBQUFTLFNBQUcsRUFBQyxNQUFiO0FBQW9CLGFBQU8sRUFDdkIsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tLLEVBQUUsSUFBSWQsSUFBSSxDQUFDaUIsSUFBTCxDQUFVSCxFQUFWLEtBQWlCQSxFQUF2QixHQUVPLG1FQUNJLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJLE1BQUMsMkNBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBRlAsR0FPSyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUlYsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkosQ0FOSyxDQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F5QkksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNkLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixDQUFULENBRFo7QUFFSSxTQUFLLEVBQUVsQixJQUFJLENBQUNpQixJQUFMLENBQVVDLFFBRnJCO0FBR0ksZUFBVyxFQUFFLE1BQUMsd0RBQUQ7QUFBaUIsY0FBUSxFQUFFbEIsSUFBSSxDQUFDbUIsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJKLEVBOEJJLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCSixDQURKLEVBaUNLZixpQkFBaUIsSUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFhLFFBQUksRUFBRUosSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyx5Q0FBRDtBQUNJLFVBQU0sWUFBS0EsSUFBSSxDQUFDb0IsUUFBTCxDQUFjQyxNQUFuQiw4QkFEVjtBQUVJLGNBQVUsRUFBQyxZQUZmO0FBR0ksY0FBVSxFQUFFckIsSUFBSSxDQUFDb0IsUUFIckI7QUFJSSxjQUFVLEVBQUUsb0JBQUNFLElBQUQ7QUFBQSxhQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDRDQUFEO0FBQ0ksY0FBTSxFQUFFQSxJQUFJLENBQUNMLElBQUwsQ0FBVUMsUUFEdEI7QUFFSSxjQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVNJLElBQUksQ0FBQ0wsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLENBQVQsQ0FGWjtBQUdJLGVBQU8sRUFBRUksSUFBSSxDQUFDSCxPQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FEUTtBQUFBLEtBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQWxDUixDQURKO0FBdURILENBdEVEOztHQUFNcEIsUTtVQVVhVyx1RDs7O0tBVmJYLFE7QUF3RU5BLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUI7QUFDakJ2QixNQUFJLEVBQUV3QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xCWCxNQUFFLEVBQUVVLGlEQUFTLENBQUNFLE1BREk7QUFFbEJULFFBQUksRUFBRU8saURBQVMsQ0FBQ0csTUFGRTtBQUdsQlIsV0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhEO0FBSWxCQyxZQUFRLEVBQUVMLGlEQUFTLENBQUNHLE1BSkY7QUFLbEJQLFlBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUTtBQU1sQlgsVUFBTSxFQUFFUSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQU5VLEdBQWhCLEVBT0hJO0FBUmMsQ0FBckI7QUFXZWhDLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBOztBQUVBLElBQU1pQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBd0I7QUFDNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxhQUFmLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxDQUFELEVBQU87QUFDdEMsVUFBSUgsUUFBUSxDQUFDSSxJQUFULENBQWMsWUFBZCxDQUFKLEVBQWlDO0FBQzdCLGVBQU8sTUFBQyxnREFBRDtBQUFNLGNBQUkscUJBQWNELENBQUMsQ0FBQ0UsS0FBRixDQUFRLENBQVIsQ0FBZCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJRixDQUFKLENBQXRDLENBQVA7QUFDSDs7QUFDRCxhQUFPQSxDQUFQO0FBQ0gsS0FMQSxDQURMO0FBRG9CO0FBQUEsQ0FBeEI7O0tBQU1KLGU7QUFXTkEsZUFBZSxDQUFDVCxTQUFoQixHQUE0QjtBQUFFVSxVQUFRLEVBQUVULGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJHO0FBQTdCLENBQTVCO0FBRWVDLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlMWFiYWZkNmRlNDRjN2RlNjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIFBvcG92ZXIsIEF2YXRhciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBcclxuICAgIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBIZWFydFR3b1RvbmUgXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgLy8gY29uc3QgaWQgPSBtZSAmJiBtZS5pZDsgLT4g7Ji17IWU64SQIOyytOydtOuLnSDsl7DsgrDsnpDroZwg7JWE656Y7LKY65+8IOyCrOyaqSDqsIDriqUo7IOI66GcIOyDneq4tCDrrLjrspUpXHJcbiAgICBjb25zdCBpZCA9IG1lPy5pZDtcclxuICAgIC8vIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCApOyDsnbTroIfqsowg7ZWc67KI7JeQ64+EIO2RnO2YhCDqsIDriqVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICAgIC8vIOuwsOyXtOyViOyXkCBqc3jrpbwg64Sj7J2E65WM64qUIOq8rSBrZXnrpbwg64Sj7Ja07KO86riwIVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+ICggICAgIC8vIOyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFxyXG4gICAgPGRpdj5cclxuICAgICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocG9zdERhdGEudGV4dCgvKCNbXlxccyNdKykvKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0+PGE+e3Z9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHsgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=