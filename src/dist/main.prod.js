"use strict";var _vue=_interopRequireDefault(require("vue")),_App=_interopRequireDefault(require("./App.vue")),_router=_interopRequireDefault(require("./router")),_store=_interopRequireDefault(require("./store")),_vueFontawesome=require("@fortawesome/vue-fontawesome"),_vueScrollProgressBar=_interopRequireDefault(require("@guillaumebriday/vue-scroll-progress-bar"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.component("font-awesome-icon",_vueFontawesome.FontAwesomeIcon),_vue.default.config.productionTip=!1;var VueScrollTo=require("vue-scrollto");_vue.default.use(VueScrollTo),_vue.default.use(_vueScrollProgressBar.default),_vue.default.use(VueScrollTo),_vue.default.config.productionTip=!1,setTimeout(function(){new _vue.default({router:_router.default,store:_store.default,render:function(e){return e(_App.default)}}).$mount("#app")},1e3);