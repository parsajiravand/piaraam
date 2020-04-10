"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _About = _interopRequireDefault(require("../components/About.vue"));

var _Songs = _interopRequireDefault(require("../components/Songs.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = new _vueRouter["default"]({
  path: "/home",
  name: "Home",
  component: _Home["default"],
  children: [{
    path: "/about",
    name: "About",
    component: _About["default"]
  }, {
    path: "/songs",
    name: "Songs",
    component: _Songs["default"]
  }],
  scrollBehavior: function scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  base: process.env.BASE_URL,
  mode: "history"
});
/* const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
}); */

var _default = routes;
exports["default"] = _default;