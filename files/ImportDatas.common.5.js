((typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] || []).push([[5],{

/***/ "c07e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/import-drupal/displayRowCsv.vue?vue&type=template&id=06c799e7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-table',{attrs:{"striped":"","hover":"","items":_vm.rowsFile,"fields":_vm.headerFile,"per-page":_vm.perPage,"current-page":_vm.currentPage}}),(_vm.totalRows > 20)?_c('b-pagination',{staticClass:"pt-5 pb-5 mt-5 mb-0",attrs:{"total-rows":_vm.totalRows,"per-page":_vm.perPage,"align":"fill","size":"sm"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/import-drupal/displayRowCsv.vue?vue&type=template&id=06c799e7&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/import-drupal/displayRowCsv.vue?vue&type=script&lang=js&

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

/* harmony default export */ var displayRowCsvvue_type_script_lang_js_ = ({
  name: "displayRowCsv",
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      currentPage: 1,
      perPage: 50
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapState */])(["headerFile", "rowsFile"])), {}, {
    totalRows: function totalRows() {
      if (this.rowsFile.length) {
        return this.rowsFile.length;
      } else {
        return 0;
      }
    }
  }),
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/components/import-drupal/displayRowCsv.vue?vue&type=script&lang=js&
 /* harmony default export */ var import_drupal_displayRowCsvvue_type_script_lang_js_ = (displayRowCsvvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/import-drupal/displayRowCsv.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_drupal_displayRowCsvvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var displayRowCsv = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=ImportDatas.common.5.js.map