((typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] || []).push([[4],{

/***/ "20f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a4d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _import_datas_drupal_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_import_datas_drupal_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_import_datas_drupal_node_modules_vue_loader_lib_loaders_stylePostLoader_js_import_datas_drupal_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_import_datas_drupal_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_import_datas_drupal_node_modules_cache_loader_dist_cjs_js_ref_0_0_import_datas_drupal_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("20f1");
/* harmony import */ var _import_datas_drupal_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_import_datas_drupal_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_import_datas_drupal_node_modules_vue_loader_lib_loaders_stylePostLoader_js_import_datas_drupal_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_import_datas_drupal_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_import_datas_drupal_node_modules_cache_loader_dist_cjs_js_ref_0_0_import_datas_drupal_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_datas_drupal_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_import_datas_drupal_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_import_datas_drupal_node_modules_vue_loader_lib_loaders_stylePostLoader_js_import_datas_drupal_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_import_datas_drupal_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_import_datas_drupal_node_modules_cache_loader_dist_cjs_js_ref_0_0_import_datas_drupal_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ac30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DeleteTerms/DeleteTerms.vue?vue&type=template&id=5c71864e&
var DeleteTermsvue_type_template_id_5c71864e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"d-flex align-items-center pl-5 p-3 mb-2 border"},[_c('b-button',{staticClass:"mx-4",attrs:{"variant":"danger"},on:{"click":_vm.getVocabulary}},[_vm._v(" Suppresion des termes ")]),_c('b-form-group',{staticClass:"align-items-center"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-1","value":true,"unchecked-value":false},model:{value:(_vm.recursive),callback:function ($$v) {_vm.recursive=$$v},expression:"recursive"}},[_vm._v(" Recursive ... ")])],1),_c('b-form-group',{staticClass:"align-items-center",attrs:{"label":"Nombre de termes à supprimer"}},[_c('b-form-input',{attrs:{"type":"number"},model:{value:(_vm.NumberTermDelete),callback:function ($$v) {_vm.NumberTermDelete=$$v},expression:"NumberTermDelete"}})],1),(_vm.recursive)?_c('div',{staticClass:"mx-5"},[_c('b-icon',{attrs:{"icon":"three-dots","animation":"cylon","font-scale":"2"}})],1):_vm._e()],1),_vm._l((_vm.delteTermes),function(rows,i){return _c('div',{key:i},[_vm._v(" "+_vm._s(rows.time / 1000)+" s "),_c('hr'),_vm._l((rows.terms),function(row,k){return _c('span',{key:k},[_vm._v(" "+_vm._s(row.text)+" | ")])})],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DeleteTerms/DeleteTerms.vue?vue&type=template&id=5c71864e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ba97");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("019c");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&
var ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-success","size":"sm"},on:{"click":_vm.onSubmit}},[_c('span',[_vm._v(_vm._s(_vm.texte))]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonSavevue_type_script_lang_js_ = ({
  name: "ButtonSave",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Enregistrer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonSavevue_type_script_lang_js_ = (ButtonSavevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonSavevue_type_script_lang_js_,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_render,
  ButtonSavevue_type_template_id_29246a2e_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "29246a2e",
  null
  
)

/* harmony default export */ var ButtonSave = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-danger","size":"sm"},on:{"click":_vm.DeleteFile}},[_c('span',[_vm._v(" "+_vm._s(_vm.texte)+" ")]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonDeletevue_type_script_lang_js_ = ({
  name: "ButtonDelete",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Supprimer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    DeleteFile: function DeleteFile() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonDeletevue_type_script_lang_js_ = (ButtonDeletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue





/* normalize component */

var ButtonDelete_component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonDeletevue_type_script_lang_js_,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "0b82f270",
  null
  
)

/* harmony default export */ var ButtonDelete = (ButtonDelete_component.exports);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("1c24");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("869e");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("82e4");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.object.to-string.js
var modules_es_object_to_string = __webpack_require__("c26d");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.promise.js
var modules_es_promise = __webpack_require__("a9ce");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("9a6c");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("7973");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("47d8");

// EXTERNAL MODULE: ../wbuutilities/node_modules/axios/index.js
var axios = __webpack_require__("6b54");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ../wbuutilities/src/Ajax/basic.js









/**
 * Permet d'effectuer les requetes
 * pour modifier ou definir les paramettres par defaut de l'instance, {AjaxBasic}.axiosInstance.defaults.timeout = 30000;
 */

var InstAxios = axios_default.a.create({
  timeout: 300000
});
var basicRequest = {
  axiosInstance: InstAxios,

  /**
   * Domaine permettant d'effectuer les tests en local.
   */
  TestDomain: null,

  /**
   * Permet de determiner, si nous sommes en local ou pas.
   */
  isLocalDev: window.location.host.includes("localhost") || window.location.host.includes(".kksa") ? true : false,
  BaseUrl: function BaseUrl() {
    return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : window.location.protocol + "//" + window.location.host;
  },
  post: function post(url, datas, configs) {
    var _this = this;

    return new Promise(function (resolv, reject) {
      var urlFinal = url.includes("://") ? url : _this.BaseUrl() + url;
      InstAxios.post(urlFinal, datas, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack
        });
      });
    });
  },
  get: function get(url, configs) {
    var _this2 = this;

    return new Promise(function (resolv, reject) {
      var urlFinal = url.includes("://") ? url : _this2.BaseUrl() + url;
      InstAxios.get(urlFinal, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack
        });
      });
    });
  },

  /**
   * @param file " fichier à uploaded"
   */
  postFile: function postFile(url, file) {
    var _this3 = this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise(function (resolv, reject) {
      _this3.getBase64(file).then(function (fileEncode) {
        var headers = new Headers();
        console.log("headers : ", headers);
        var fileCompose = file.name.split(".");
        var myInit = {
          method: "POST",
          headers: headers,
          //mode: "cors",
          body: JSON.stringify({
            upload: fileEncode.base64,
            filename: fileCompose[0],
            ext: fileCompose[1],
            id: id
          }),
          cache: "default"
        };
        var urlFinal = url.includes("://") ? url : _this3.BaseUrl() + url;
        fetch(urlFinal, myInit).then(function (response) {
          response.json().then(function (json) {
            resolv(json);
          }).catch(function (error) {
            reject(error);
          });
        });
      });
    });
  },
  getBase64: function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file); //reader.onload = () => resolve(reader.result);

      reader.onloadend = function () {
        var fileArray = reader.result.split(",");
        resolve({
          src: reader.result,
          base64: fileArray[1]
        });
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }
};
/* harmony default export */ var basic = (basicRequest);
// EXTERNAL MODULE: ../wbuutilities/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("a3c2");

// EXTERNAL MODULE: ../wbuutilities/node_modules/bootstrap-vue/esm/components/toast/helpers/bv-toast.js + 3 modules
var bv_toast = __webpack_require__("0ae9");

// EXTERNAL MODULE: ../wbuutilities/node_modules/bootstrap-vue/esm/components/modal/index.js + 12 modules
var modal = __webpack_require__("1be5");

// CONCATENATED MODULE: ../wbuutilities/src/Toasts/BootStrap.js






vue_runtime_esm["default"].use(bv_toast["a" /* BVToastPlugin */]);
vue_runtime_esm["default"].use(modal["a" /* ModalPlugin */]);
var vm = new vue_runtime_esm["default"]();

var AjaxToastBootStrap = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, basic), {}, {
  $bvToast: vm.$bvToast,
  $bvModal: vm.$bvModal,
  modalMessage: function modalMessage(body, conf) {
    var _this = this;

    var confDefault = {
      size: "md",
      buttonSize: "sm",
      hideFooter: true,
      centered: true
    };

    for (var i in conf) {
      confDefault[i] = conf[i];
    }

    return new Promise(function (resolv, reject) {
      _this.$bvModal.msgBoxConfirm(body, confDefault).then(function (value) {
        if (value) resolv(value);else reject(value);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  modalConfirmDelete: function modalConfirmDelete() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Confirmer la suppression, NB : cette action est irreverssible.";
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      title: "Attention",
      okVariant: "danger",
      okTitle: "Supprimer",
      cancelTitle: "Annuler",
      footerClass: "p-2"
    };
    return this.modalMessage(body, conf);
  },
  modalSuccess: function modalSuccess() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var confDefault = {
      title: "Succes",
      headerBgVariant: "success",
      bodyClass: ["p-3"],
      hideFooter: true,
      headerTextVariant: "light"
    };

    for (var i in conf) {
      confDefault[i] = conf[i];
    }

    return this.modalMessage(body, confDefault);
  },
  notification: function notification(ajaxTitle) {
    var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    this.$bvToast.toast(" ", {
      title: ajaxTitle,
      variant: variant,
      solid: true,
      toaster: "b-toaster-top-right"
    });
  },
  bPost: function bPost(url, datas, configs) {
    var _this2 = this;

    var showNotification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return new Promise(function (resolv, reject) {
      _this2.post(url, datas, configs).then(function (reponse) {
        if (showNotification) {
          _this2.notification("success");
        }

        resolv(reponse);
      }).catch(function (error) {
        //console.log("error : ", error);
        _this2.notification(_this2.GetErrorTitle(error), "warning");

        reject(error);
      });
    });
  },
  bGet: function bGet(url, configs) {
    var _this3 = this;

    var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return new Promise(function (resolv, reject) {
      _this3.get(url, configs).then(function (reponse) {
        if (showNotification) {
          _this3.notification("success");
        }

        resolv(reponse);
      }).catch(function (error) {
        //console.log("error : ", error);
        _this3.notification(_this3.GetErrorTitle(error), "warning");

        reject(error);
      });
    });
  },
  GetErrorTitle: function GetErrorTitle(error) {
    var title; //

    if (error.code) {
      switch (error.code) {
        case "ECONNABORTED":
          var temps = this.axiosInstance.defaults.timeout / 1000 + "s";
          title = "Impossible de joindre l'hote distant, temps impartie epuisé. (" + temps + ")";
          break;

        default:
          title = "Une erreur s'est produite";
      }
    } //
    else if (error.error && error.error.statusText) {
      title = decodeURI(error.error.statusText);
    }

    return title;
  }
});
/**
 * Intercept la reponse ajax pour declenche le toast adapter.
 */

/*
 pas adapter pour gerer les messages d'erreurs.
(function() {
  AjaxToastBootStrap.axiosInstance.interceptors.response.use(
    function(response) {
      console.log("interceptor success");
      AjaxToastBootStrap.notification("success");
      return response;
    },
    function(error) {
      console.log("interceptor error");
      AjaxToastBootStrap.notification("Error", "warning");
      return error;
    }
  );
})();
/**/


/* harmony default export */ var BootStrap = (AjaxToastBootStrap);
// CONCATENATED MODULE: ../wbuutilities/index.js
//import Vue from "vue";


/*
const HelloWorldSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("button-save", ButtonSave);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
/**/




// CONCATENATED MODULE: ../drupal-vuejs/src/config.js



var config = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, basic), {}, {
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive: function getRandomIntInclusive() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 99;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});

/* harmony default export */ var src_config = (config);
// CONCATENATED MODULE: ../drupal-vuejs/src/App/session.js



/* harmony default export */ var session = ({
  url_session: "/session/token",
  token: null,

  /**
   * Permet d'obtenir le token.
   */
  getToken: function getToken() {
    var _this = this;

    return new Promise(function (resolv) {
      if (_this.token) resolv(_this.token);
      console.log(" Config :: ", src_config.BaseUrl(), "\n this.url_session :: ", _this.url_session);
      src_config.get(src_config.BaseUrl() + _this.url_session).then(function (resp) {
        _this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("2207");

// CONCATENATED MODULE: ../drupal-vuejs/src/App/utilities.js






var utilities = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, src_config), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
        _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              configCustom = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
              _context.next = 3;
              return session.getToken();

            case 3:
              Token = _context.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this.mergeHeaders(configCustom, configs);
              }

              return _context.abrupt("return", _this.post(url, datas, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Get datas;
   */
  dGet: function dGet(url) {
    var _arguments2 = arguments,
        _this2 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              configCustom = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              _context2.next = 3;
              return session.getToken();

            case 3:
              Token = _context2.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this2.mergeHeaders(configCustom, configs);
              }

              return _context2.abrupt("return", _this2.get(url, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   *
   */
  mergeHeaders: function mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (var i in configCustom) {
        configs[i] = configCustom[i];
      }
    }

    return configs;
  }
});

/* harmony default export */ var App_utilities = (utilities);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.function.name.js
var modules_es_function_name = __webpack_require__("8b32");

// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
/* harmony default export */ var Confs = ({
  baseURl: "/jsonapi",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  }
});
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("d701");

// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js





var buildFilter_filters = /*#__PURE__*/function () {
  function filters() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    Object(classCallCheck["a" /* default */])(this, filters);

    this.query = query; //
  }

  Object(createClass["a" /* default */])(filters, [{
    key: "addFilter",
    value: function addFilter(fieldName, operator, value) {
      var key = "fil-" + src_config.getRandomIntInclusive();
      this.addParam(key, "path", fieldName);
      this.addParam(key, "operator", operator);
      this.addParam(key, "value", value);
      return this.query;
    }
  }, {
    key: "addParam",
    value: function addParam(key, action, value) {
      if (this.query && this.query !== "") {
        this.query += "&";
      }

      this.query += "filter[".concat(key, "][condition][").concat(action, "]=").concat(value);
    }
  }]);

  return filters;
}();

/* harmony default export */ var buildFilter = (buildFilter_filters);
// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js









var termsTaxo_termsTaxo = /*#__PURE__*/function () {
  function termsTaxo(vid) {
    Object(classCallCheck["a" /* default */])(this, termsTaxo);

    this.vid = vid; //

    this.url = Confs.baseURl + "/taxonomy_term/" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */


  Object(createClass["a" /* default */])(termsTaxo, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolv) {
        App_utilities.get(_this.url, Confs.headers).then(function (resp) {
          _this.terms = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Recupere les terms
     */

  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this2 = this;

      var filter = new buildFilter();
      filter.addFilter("name", "CONTAINS", search);
      return new Promise(function (resolv) {
        App_utilities.get(_this2.url + "?" + filter.query, Confs.headers).then(function (resp) {
          _this2.terms = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Retourne les termes sous formes de liste d'otpions.
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = [];

      for (var i in this.terms.data) {
        var term = this.terms.data[i];
        options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__tid
        });
      }

      return options;
    }
  }]);

  return termsTaxo;
}();

/* harmony default export */ var jsonApi_termsTaxo = (termsTaxo_termsTaxo);
// CONCATENATED MODULE: ../drupal-vuejs/src/App/users/user.js




/* harmony default export */ var user = (Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, App_utilities), {}, {
  getCurrentUser: function getCurrentUser() {
    var _this = this;

    return new Promise(function (resolv) {
      _this.get("/appformmanager/current-user").then(function (resp) {
        resolv(resp.data);
      });
    });
  },
  getUser: function getUser(uid) {
    var _this2 = this;

    return new Promise(function (resolv) {
      _this2.get("/user/" + uid + "?_format=json").then(function (resp) {
        resolv(resp.data);
      });
    });
  }
}));
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/web.dom-collections.for-each.js
var modules_web_dom_collections_for_each = __webpack_require__("bdca");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("9d0b");

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("a2f4");

// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/InputBootstrap.js



/* harmony default export */ var InputBootstrap = ({
  modelsFields: {},

  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string: function string(h, field) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }

    var inputs = [];
    defaultValue.forEach(function (el) {
      inputs.push(h("b-form-input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function input(e) {
            el.value = e;
          }
        }
      }));
    });
    var formG = h("b-form-group", {
      props: {
        label: field.label_value,
        description: field.description
      }
    }, inputs);
    return formG;
  }
});
// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/formatFieldsBootstrap.js









/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */

var formatFieldsBootstrap_formatField = /*#__PURE__*/function () {
  function formatField(entity, bundle) {
    Object(classCallCheck["a" /* default */])(this, formatField);

    this.entity = entity;
    this.bundle = bundle; // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */


  Object(createClass["a" /* default */])(formatField, [{
    key: "format",
    value: function () {
      var _format = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var fields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getFields();

              case 2:
                fields = _context.sent;
                return _context.abrupt("return", new Promise(function (resolv, reject) {
                  if (fields.data && fields.data.fields) {
                    InputBootstrap.modelsFields = _this.buildModel(fields.data.fields);
                    var formatFields = [];

                    var _loop = function _loop(i) {
                      formatFields.push({
                        ref: i,
                        props: {
                          name: {
                            type: String,
                            default: fields.data.fields[i].name
                          }
                        },
                        render: function render(createElement) {
                          var renderField = [];

                          switch (fields.data.fields[i].type) {
                            case "string":
                              renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                              break;
                          }

                          return createElement("div", renderField);
                        }
                      });
                    };

                    for (var i in fields.data.fields) {
                      _loop(i);
                    }

                    resolv({
                      templates: formatFields,
                      models: InputBootstrap.modelsFields
                    });
                  } else {
                    reject("Aucune donnée disponible");
                  }
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function format() {
        return _format.apply(this, arguments);
      }

      return format;
    }()
    /**
     * Get fileds in drupal.
     * @returns
     */

  }, {
    key: "getFields",
    value: function getFields() {
      var url = "/api/form-node/generate-form";

      if (this.entity === "user") {
        url = "/api/form-node/generate-user";
      }

      url += "/" + this.bundle;
      return App_utilities.get(url);
    }
    /**
     * - Cet object permet de rendre les elements de l'object ecoutable.
     *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs. Decette facon vuejs peut ecouter les MAJ de champs.
     */

  }, {
    key: "buildModel",
    value: function buildModel(fields) {
      var models = {};

      for (var i in fields) {
        if (fields[i].type) models[i] = [];
      }

      return models;
    }
  }]);

  return formatField;
}();

/* harmony default export */ var formatFieldsBootstrap = (formatFieldsBootstrap_formatField);
// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/facebook.js
//const FB = window.Fb;
/* harmony default export */ var facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",

  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup: function openPopup() {
    var _this = this;

    var self = this;
    window.FB.login(function (resp) {
      _this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut: function logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut: function onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },

  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback: function statusChangeCallback(r) {
    var getInfoUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.user = r;

    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }

    console.log("status", this.user);
  },
  getUserStatus: function getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement: function chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021"; // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //

    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(function () {
            checkFB();
          }, 900);
        }
      }

      checkFB();
    };

    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});
/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=template&id=44fdffac&
var logingooglevue_type_template_id_44fdffac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttton-google-aouth",attrs:{"id":_vm.idHtmlrender}})}
var logingooglevue_type_template_id_44fdffac_staticRenderFns = []


// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=template&id=44fdffac&

// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&




//
//
//
//
function loadScript(src) {
  return new Promise(function (resolv) {
    var s = document.createElement("script");
    s.setAttribute("src", src);

    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };

    document.head.appendChild(s);
  });
}



/* harmony default export */ var logingooglevue_type_script_lang_js_ = ({
  name: "logingoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(function () {
        _this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  computed: {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    }
  },
  methods: {
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var self = this;

      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }

      console.log(" window.onload ! ", window.onload);

      var goo = function goo() {
        window.google.accounts.id.initialize({
          client_id: google.client_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle: function TryToLoginWithGoogle() {
      var _this2 = this;

      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-success";
          _this2.alertText = "Connexion réussie";

          _this2.$emit("ev_logingoogle", resp.data);

          if (_this2.returnUidInfo) {
            resolv(resp);
            return;
          } // --; Si l'utilisateur est redirigé vers un autre domaine.


          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          } // Il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            _this2.stepe = "final-gl-register";
          } else {
            window.location.assign(window.location.origin);
          }

          resolv(resp);
        }).catch(function (errors) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-danger";
          _this2.alertText = "Google : Erreur de connexion";

          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this2.alertText = errors.error.statusText;
          }

          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_logingooglevue_type_script_lang_js_ = (logingooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&
var logingooglevue_type_style_index_0_lang_scss_ = __webpack_require__("a4d5");

// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue






/* normalize component */

var logingoogle_component = Object(componentNormalizer["a" /* default */])(
  components_logingooglevue_type_script_lang_js_,
  logingooglevue_type_template_id_44fdffac_render,
  logingooglevue_type_template_id_44fdffac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logingoogle = (logingoogle_component.exports);
// CONCATENATED MODULE: ../drupal-vuejs/index.js







// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DeleteTerms/DeleteTerms.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


App_utilities.TestDomain = "http://v2lesroisdelareno.kksa";
/* harmony default export */ var DeleteTermsvue_type_script_lang_js_ = ({
  name: "DeleteTerms",
  data: function data() {
    return {
      delteTermes: [],
      recursive: false,
      NumberTermDelete: 1
    };
  },
  mounted: function mounted() {// this.getVocabulary();
  },
  methods: {
    getVocabulary: function getVocabulary() {
      var _this = this;

      var start = new Date();
      var vid = "departement_de_france";
      var terms = new jsonApi_termsTaxo(vid);

      var DeleteProgess = function DeleteProgess() {
        terms.get().then(function () {
          var t = terms.getOptions();
          var tids = [];
          t.forEach(function (term) {
            if (tids.length < _this.NumberTermDelete) tids.push(term.value);
          });
          App_utilities.post("/import-entity-progress/deleteterms", {
            vid: vid,
            tids: tids
          }).then(function () {
            var time = new Date() - start;
            t.splice(tids.length, t.length - tids.length);

            _this.delteTermes.push({
              terms: t,
              time: time
            });

            if (_this.recursive) DeleteProgess();
          });
        });
      };

      DeleteProgess();
    }
  }
});
// CONCATENATED MODULE: ./src/components/DeleteTerms/DeleteTerms.vue?vue&type=script&lang=js&
 /* harmony default export */ var DeleteTerms_DeleteTermsvue_type_script_lang_js_ = (DeleteTermsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DeleteTerms/DeleteTerms.vue





/* normalize component */

var DeleteTerms_component = Object(componentNormalizer["a" /* default */])(
  DeleteTerms_DeleteTermsvue_type_script_lang_js_,
  DeleteTermsvue_type_template_id_5c71864e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DeleteTerms = __webpack_exports__["default"] = (DeleteTerms_component.exports);

/***/ })

}]);
//# sourceMappingURL=ImportDatas.common.4.js.map