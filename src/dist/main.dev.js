"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _bootstrapVue = require("bootstrap-vue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Install BootstrapVue
_vue["default"].use(_bootstrapVue.BootstrapVue); // Optionally install the BootstrapVue icon components plugin


_vue["default"].use(_bootstrapVue.IconsPlugin);

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