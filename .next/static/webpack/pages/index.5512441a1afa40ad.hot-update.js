"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Content/Index.js":
/*!*************************************!*\
  !*** ./components/Content/Index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pills */ \"./components/Pills/index.js\");\n/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RangeSlider */ \"./components/RangeSlider/index.js\");\n/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Select */ \"./components/Select/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Content() {\n    _s();\n    const [selectedTopic, setSelectedTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Fun\");\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filteredList = ()=>{\n        return _data__WEBPACK_IMPORTED_MODULE_5__.data.filter((item)=>item.title === selectedTopic);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#12111A] px-6 min-h-[90vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-[32px] md:pt-[61px] sm:pb-[32px] pb-[20px]  border-b border-[#3A3940]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-medium md:text-2xl\",\n                        children: \"Content Type\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#D0CFD1]\",\n                        children: \"Choose a content type that best fits your needs.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-[24px] sm:pt-[40px] pb-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pb-4 font-medium sm:pb-6 sm:text-lg\",\n                        children: \"What type of content are you creating ?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap gap-2 pb-8\",\n                        children: _data__WEBPACK_IMPORTED_MODULE_5__.data.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: (e)=>{\n                                    setSelectedValue(\"\");\n                                    setSelectedTopic(item.title);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pills__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        value: item.title,\n                                        active: selectedTopic === (item === null || item === void 0 ? void 0 : item.title)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                                lineNumber: 28,\n                                columnNumber: 20\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pb-4 font-medium sm:pb-6 sm:text-lg\",\n                        children: [\n                            'What type of \"',\n                            selectedTopic,\n                            '\" content do you want to create ?'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        list: filteredList(),\n                        selectedValue: selectedValue,\n                        setSelectedValue: setSelectedValue\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pt-8 sm:text-lg font-medium sm:pb-[36px]\",\n                        children: \"Set the number of words for output text.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RangeSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahzadasalman/WebProjects/kosmicai/components/Content/Index.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n_s(Content, \"F6wmNcbhQEwME5c+OUDMK4s1H5M=\");\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRlbnQvSW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDVjtBQUNhO0FBQ1Y7QUFDRDtBQUU3QixTQUFTTTs7SUFFVCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUdqRCxNQUFNVSxlQUFlO1FBQ25CLE9BQU9OLHVDQUFJQSxDQUFDTyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEtBQUssS0FBS1A7SUFDNUM7SUFHQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtDOzs7Ozs7a0NBQ2hELDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQXNDOzs7Ozs7a0NBQ3BELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlgsdUNBQUlBLENBQUNlLEdBQUcsQ0FBQyxDQUFDUCxNQUFNUTs0QkFDZixxQkFBTyw4REFBQ0M7Z0NBQUtDLFNBQVMsQ0FBQ0M7b0NBQ3JCZCxpQkFBaUI7b0NBQ2pCRixpQkFBaUJLLEtBQUtDLEtBQUs7Z0NBQzdCOztrREFDRSw4REFBQ1osOENBQUlBO3dDQUFDdUIsT0FBT1osS0FBS0MsS0FBSzt3Q0FBRVksUUFBUW5CLG1CQUFrQk0saUJBQUFBLDJCQUFBQSxLQUFNQyxLQUFLOzs7Ozs7b0NBQUk7OytCQUQzRE87Ozs7O3dCQUVYOzs7Ozs7a0NBRUYsOERBQUNGO3dCQUFHSCxXQUFVOzs0QkFBc0M7NEJBQW9CVDs0QkFBYzs7Ozs7OztrQ0FDdEYsOERBQUNILCtDQUFNQTt3QkFBQ3VCLE1BQU1oQjt3QkFBaUJGLGVBQWVBO3dCQUFlQyxrQkFBa0JBOzs7Ozs7a0NBQy9FLDhEQUFDUzt3QkFBR0gsV0FBVTtrQ0FBMkM7Ozs7OztrQ0FDekQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYixvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0FyQ1NHO0tBQUFBO0FBdUNULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGVudC9JbmRleC5qcz9lOWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGxzJ1xuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJy4uL1JhbmdlU2xpZGVyJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9TZWxlY3QnXG5pbXBvcnQgeyBkYXRhfSBmcm9tIFwiQC9kYXRhXCI7XG5cbmZ1bmN0aW9uIENvbnRlbnQoKSB7XG5cbmNvbnN0IFtzZWxlY3RlZFRvcGljLCBzZXRTZWxlY3RlZFRvcGljXSA9IHVzZVN0YXRlKCdGdW4nKTtcbmNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udGl0bGUgPT09IHNlbGVjdGVkVG9waWMpO1xuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyMxMjExMUFdIHB4LTYgbWluLWgtWzkwdmhdJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC1bMzJweF0gbWQ6cHQtWzYxcHhdIHNtOnBiLVszMnB4XSBwYi1bMjBweF0gIGJvcmRlci1iIGJvcmRlci1bIzNBMzk0MF0nPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1tZWRpdW0gbWQ6dGV4dC0yeGwnPkNvbnRlbnQgVHlwZTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsjRDBDRkQxXSc+Q2hvb3NlIGEgY29udGVudCB0eXBlIHRoYXQgYmVzdCBmaXRzIHlvdXIgbmVlZHMuPC9wPiAgXG4gICAgICAgIDwvZGl2PiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC1bMjRweF0gc206cHQtWzQwcHhdIHBiLTEyJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ncGItNCBmb250LW1lZGl1bSBzbTpwYi02IHNtOnRleHQtbGcnPldoYXQgdHlwZSBvZiBjb250ZW50IGFyZSB5b3UgY3JlYXRpbmcgPzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBnYXAtMiBwYi04Jz5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZShcIlwiKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUb3BpYyhpdGVtLnRpdGxlKVxuICAgICAgICAgICAgfSB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8UGlsbCB2YWx1ZT17aXRlbS50aXRsZX0gYWN0aXZlPXtzZWxlY3RlZFRvcGljID09PSBpdGVtPy50aXRsZX0gLz4gPC9zcGFuPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ncGItNCBmb250LW1lZGl1bSBzbTpwYi02IHNtOnRleHQtbGcnPldoYXQgdHlwZSBvZiAmcXVvdDt7c2VsZWN0ZWRUb3BpY30mcXVvdDsgY29udGVudCBkbyB5b3Ugd2FudCB0byBjcmVhdGUgPzwvaDI+ICAgICAgICBcbiAgICAgICAgPFNlbGVjdCBsaXN0PXtmaWx0ZXJlZExpc3QoKX0gIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVmFsdWV9IHNldFNlbGVjdGVkVmFsdWU9e3NldFNlbGVjdGVkVmFsdWV9ICAvPiAgICAgXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3B0LTggc206dGV4dC1sZyBmb250LW1lZGl1bSBzbTpwYi1bMzZweF0nPlNldCB0aGUgbnVtYmVyIG9mIHdvcmRzIGZvciBvdXRwdXQgdGV4dC48L2gyPiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LSc+XG4gICAgICAgICAgPFJhbmdlU2xpZGVyIC8+ICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQaWxsIiwiUmFuZ2VTbGlkZXIiLCJTZWxlY3QiLCJkYXRhIiwiQ29udGVudCIsInNlbGVjdGVkVG9waWMiLCJzZXRTZWxlY3RlZFRvcGljIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJmaWx0ZXJlZExpc3QiLCJmaWx0ZXIiLCJpdGVtIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJoMiIsIm1hcCIsImluZGV4Iiwic3BhbiIsIm9uQ2xpY2siLCJlIiwidmFsdWUiLCJhY3RpdmUiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Content/Index.js\n"));

/***/ })

});