"use strict";

module.exports = {
  go: true,
  init: function init() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();

    this.time = new Date().getTime();
    this.fn = fn;
    this.frame();
    window.EnterFrame = window.EnterFrame || this;
  },
  destroy: function destroy() {
    window.requestAnimFrame = function () {};
  },
  add: function add(fn) {
    this.fn = function (_super) {
      return function () {
        fn(arguments[0]);
        return _super.apply(this, arguments);
      };
    }(this.fn);
  },
  frame: function frame() {
    var t = this.getTime();
    this.fn(t);
    if (this.go) window.requestAnimFrame(this.frame.bind(this));
  },
  getTime: function getTime() {
    return new Date().getTime() - this.time;
  },
  stop: function stop() {
    this.go = false;
    this.stopTime = new Date().getTime();
  },
  play: function play() {
    this.now = new Date().getTime() - this.stopTime;
    this.time += this.now;
    this.go = true;
    this.frame();
  }
};