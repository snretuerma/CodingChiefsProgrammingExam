"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_auth_AddEditModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  props: {
    title: {
      type: String,
      required: true
    },
    dialog: {
      type: Boolean,
      "default": false
    },
    item: {
      type: Object,
      required: true
    },
    user_token: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      form: {
        category: '',
        description: '',
        downloads: '',
        license: '',
        name: '',
        vertices: '',
        slug: '',
        avatar: null
      }
    };
  },
  methods: {
    editItem: function editItem() {
      var _this = this;

      if (this.form.avatar) {
        var data = new FormData();

        for (var key in this.form) {
          data.append(key, this.form[key]);
        }

        axios.patch("api/items/".concat(this.item.slug), data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer ".concat(this.user_token)
          }
        }).then(function (response) {
          _this.$emit('edit-item-complete', response.data);
        });
      } else {
        axios.patch("api/items/".concat(this.item.slug), this.form, {
          headers: {
            'Authorization': "Bearer ".concat(this.user_token)
          }
        }).then(function (response) {
          _this.$emit('edit-item-complete', response.data);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/auth/AddEditModal.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/auth/AddEditModal.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEditModal.vue?vue&type=template&id=d99c897a& */ "./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a&");
/* harmony import */ var _AddEditModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEditModal.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddEditModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/auth/AddEditModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddEditModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditModal_vue_vue_type_template_id_d99c897a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddEditModal.vue?vue&type=template&id=d99c897a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/auth/AddEditModal.vue?vue&type=template&id=d99c897a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "800px" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "text-h5" }, [_vm._v(_vm._s(_vm.title))])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Name",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "name",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Category",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.category,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "category",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "form.category"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              label: "Description",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.description,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "description",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "form.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Downloads",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.downloads,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "downloads", _vm._n($$v))
                              },
                              expression: "form.downloads"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Vertices",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.vertices,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "vertices", _vm._n($$v))
                              },
                              expression: "form.vertices"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "License",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.license,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "license",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "form.license"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Slug",
                              clearable: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.form.slug,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form,
                                  "slug",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "form.slug"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              chips: "",
                              multiple: "",
                              label: "Avatar",
                              outlined: "",
                              clearable: ""
                            },
                            model: {
                              value: _vm.form.avatar,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "avatar", $$v)
                              },
                              expression: "form.avatar"
                            }
                          })
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
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "deep-purple lighten-2", text: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.$emit("close-edit-dialog")
                    }
                  }
                },
                [_vm._v("\n                Cancel\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "deep-purple lighten-2", text: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.editItem.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("\n                Accept\n            ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);