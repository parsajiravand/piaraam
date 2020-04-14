"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _vueScrollProgressBar = _interopRequireDefault(require("@guillaumebriday/vue-scroll-progress-bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].component("font-awesome-icon", _vueFontawesome.FontAwesomeIcon);

_vue["default"].config.productionTip = false;

var VueScrollTo = require("vue-scrollto");

_vue["default"].use(VueScrollTo);

_vue["default"].use(_vueScrollProgressBar["default"]);

_vue["default"].use(VueScrollTo);

_vue["default"].config.productionTip = false;
setTimeout(function () {
  new _vue["default"]({
    router: _router["default"],
    store: _store["default"],
    render: function render(h) {
      return h(_App["default"]);
    }
  }).$mount("#app");
}, 5000);