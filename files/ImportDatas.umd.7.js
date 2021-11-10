((typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpImportDatas"] || []).push([[7],{

/***/ "0988":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ba97");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("019c");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a60e");



/* harmony default export */ __webpack_exports__["a"] = ({
  url_session: "/session/token",
  token: null,

  /**
   * Permet d'obtenir le token.
   */
  getToken: function getToken() {
    var _this = this;

    return new Promise(function (resolv) {
      if (_this.token) resolv(_this.token);
      console.log(" Config :: ", _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].BaseUrl(), "\n this.url_session :: ", _this.url_session);
      _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get(_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].BaseUrl() + _this.url_session).then(function (resp) {
        _this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
});

/***/ }),

/***/ "8b82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1da1");
/* harmony import */ var _siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5530");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2207");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0988");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a60e");






var utilities = Object(_siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, _config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
        _this = this;

    return Object(_siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              configCustom = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
              _context.next = 3;
              return _session__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getToken();

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

    return Object(_siteweb_AppVuejs_import_datas_drupal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              configCustom = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              _context2.next = 3;
              return _session__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getToken();

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

/* harmony default export */ __webpack_exports__["a"] = (utilities);

/***/ }),

/***/ "a60e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-success","size":"sm"},on:{"click":_vm.onSubmit}},[_c('span',[_vm._v(_vm._s(_vm.texte))]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var staticRenderFns = []


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
  render,
  staticRenderFns,
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
var es_object_to_string = __webpack_require__("c26d");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("a9ce");

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

/* harmony default export */ var src_config = __webpack_exports__["a"] = (config);

/***/ }),

/***/ "c07e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7395cb18-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/import-drupal/displayRowCsv.vue?vue&type=template&id=4cb57395&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"disabled":_vm.isBusy},on:{"click":_vm.insertDepartement}},[_vm._v(" insert les departements ")]),_c('b-table',{attrs:{"striped":"","hover":"","items":_vm.rowsFile,"fields":_vm.headerFile,"per-page":_vm.perPage,"current-page":_vm.currentPage}}),(_vm.totalRows > 20)?_c('b-pagination',{staticClass:"pt-5 pb-5 mt-5 mb-0",attrs:{"total-rows":_vm.totalRows,"per-page":_vm.perPage,"align":"fill","size":"sm"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/import-drupal/displayRowCsv.vue?vue&type=template&id=4cb57395&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js
var utilities = __webpack_require__("8b82");

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
//
//
//


utilities["a" /* default */].TestDomain = "http://v2lesroisdelareno.kksa";
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
      perPage: 50,
      isBusy: false
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
  methods: {
    insertDepartement: function insertDepartement() {
      var _this = this;

      this.isBusy = true;
      var vid = "departement_de_france_2";

      var buildDeparts = function buildDeparts() {
        var departement = [];
        var preparDepart = [];

        _this.rowsFile.forEach(function (row) {
          if (row[12] && row[12] !== "" && !preparDepart.includes(row[12])) {
            preparDepart.push(row[12]);
            departement.push({
              vid: vid,
              name: row[12]
            });
          }
        });

        utilities["a" /* default */].post("/import-entity-progress/createterms", {
          terms: departement
        }).then(function () {
          _this.isBusy = false;
        });
      };

      buildDeparts();
    }
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

/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ })

}]);
//# sourceMappingURL=ImportDatas.umd.7.js.map