"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_auth_ItemPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DeleteConfirmation: function DeleteConfirmation() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_pages_auth_DeleteConfirmation_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DeleteConfirmation.vue */ "./resources/js/components/pages/auth/DeleteConfirmation.vue"));
    },
    AddEditDialog: function AddEditDialog() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_pages_auth_AddEditModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./AddEditModal.vue */ "./resources/js/components/pages/auth/AddEditModal.vue"));
    }
  },
  props: {
    user_token: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      items: [],
      dialog: false,
      edit_dialog: false,
      selected: {},
      title: ''
    };
  },
  methods: {
    fetchItems: function fetchItems() {
      var _this = this;

      axios.get('/api/items', {
        headers: {
          'Authorization': "Bearer ".concat(this.user_token.plainTextToken)
        }
      }).then(function (response) {
        _this.items = response.data;
        _this.fetching_data = false;
      })["catch"](function (error) {});
    },
    removeItemFromList: function removeItemFromList() {
      var _this2 = this;

      this.items = this.items.filter(function (obj) {
        return obj.slug !== _this2.selected.slug;
      });
      this.selected = {};
      this.dialog = false;
    },
    editItemFromList: function editItemFromList(payload) {
      var _this3 = this;

      this.items = this.items.filter(function (obj) {
        return obj.slug !== _this3.selected.slug;
      });
      this.selected = payload;
      this.edit_dialog = false;
    },
    closeDeleteDialog: function closeDeleteDialog() {
      this.selected = {};
      this.dialog = false;
    },
    closeEditDialog: function closeEditDialog() {
      this.selected = {};
      this.edit_dialog = false;
    }
  },
  mounted: function mounted() {
    this.fetchItems();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/auth/ItemPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/auth/ItemPage.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPage.vue?vue&type=template&id=47c7c8e3& */ "./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3&");
/* harmony import */ var _ItemPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/auth/ItemPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_template_id_47c7c8e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPage.vue?vue&type=template&id=47c7c8e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/ItemPage.vue?vue&type=template&id=47c7c8e3& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { justify: "center", align: "center" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "", "max-width": "700" } },
                [
                  _c(
                    "v-carousel",
                    {
                      attrs: {
                        height: "800",
                        "hide-delimiters": "",
                        "show-arrows-on-hover": "",
                        "fill-height": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "prev",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: { color: "deep-purple lighten-2" }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_vm._v("Previous")]
                              )
                            ]
                          }
                        },
                        {
                          key: "next",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: { color: "deep-purple lighten-2" }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_vm._v("Next")]
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(slide, i) {
                        return _c(
                          "v-carousel-item",
                          { key: i },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto",
                                attrs: {
                                  color: "grey lighten-3",
                                  height: "100%"
                                }
                              },
                              [
                                _c("v-img", {
                                  attrs: {
                                    src: slide.avatar,
                                    width: "100%",
                                    height: "590",
                                    contain: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-card-title", { staticClass: "mt-2" }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(slide.name) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-row",
                                      {
                                        staticClass: "mx-0",
                                        attrs: { align: "center" }
                                      },
                                      [
                                        _c("div", [
                                          _vm._v(_vm._s(slide.description))
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "mx-0" },
                                      [
                                        _c(
                                          "v-chip-group",
                                          { attrs: { column: "" } },
                                          [
                                            _c(
                                              "v-chip",
                                              { attrs: { label: "" } },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { left: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-label\n                                            "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(slide.category) +
                                                    "\n                                        "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-chip",
                                              { attrs: { label: "" } },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { left: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-download\n                                            "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(slide.downloads) +
                                                    "\n                                        "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-chip",
                                              { attrs: { label: "" } },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { left: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-license\n                                            "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(slide.license) +
                                                    "\n                                        "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-chip",
                                              { attrs: { label: "" } },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { left: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                mdi-ray-start-vertex-end\n                                            "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(slide.vertices) +
                                                    "\n                                        "
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "mt-1" },
                                      [
                                        _c(
                                          "v-col",
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color:
                                                    "deep-purple lighten-2",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    _vm.selected = slide
                                                    _vm.edit_dialog = true
                                                    _vm.title = "Edit Item"
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Edit\n                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color:
                                                    "deep-purple lighten-2",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    _vm.selected = slide
                                                    _vm.dialog = true
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Delete\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("delete-confirmation", {
        attrs: {
          user_token: _vm.user_token.plainTextToken,
          dialog: _vm.dialog,
          item: _vm.selected
        },
        on: {
          "close-delete-dialog": _vm.closeDeleteDialog,
          "show-delete-notif": _vm.removeItemFromList
        }
      }),
      _vm._v(" "),
      _c("add-edit-dialog", {
        attrs: {
          user_token: _vm.user_token.plainTextToken,
          dialog: _vm.edit_dialog,
          item: _vm.selected,
          title: _vm.title
        },
        on: {
          "close-edit-dialog": _vm.closeEditDialog,
          "edit-item-complete": _vm.editItemFromList
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);