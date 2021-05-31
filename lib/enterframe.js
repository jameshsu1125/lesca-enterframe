"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnterFrame = /*#__PURE__*/function () {
  /**
   * call function each frame
   * @param {function} fn functuin of frame
   * @returns
   */
  function EnterFrame() {
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    _classCallCheck(this, EnterFrame);

    var _window = window,
        _EnterFrame = _window.EnterFrame;

    if (_EnterFrame !== undefined) {
      throw new Error('EnterFrame aleady Use');
      return;
    }

    this.enable = true;

    window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();

    this.time = new Date().getTime();
    this.fn = fn;
    this.frame();
    if (_EnterFrame) window.EnterFrame += 1;else window.EnterFrame = 0;
    return this;
  }
  /**
   * destroy and stop render
   */


  _createClass(EnterFrame, [{
    key: "destroy",
    value: function destroy() {
      window.requestAnimFrame = function () {};

      this.fn = function () {};

      if (window.EnterFrame) delete window.EnterFrame;
    }
    /**
     *
     * @param {function} fn add more function
     */

  }, {
    key: "add",
    value: function add(fn) {
      this.fn = function (_super) {
        return function () {
          fn(arguments[0]);
          return _super.apply(this, arguments);
        };
      }(this.fn);
    }
  }, {
    key: "frame",
    value: function frame() {
      var _this = this;

      var delta = this.getTime();
      var target = this;
      this.fn({
        delta: delta,
        target: target
      });
      if (this.enable) window.requestAnimFrame(function () {
        return _this.frame();
      });
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return new Date().getTime() - this.time;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.enable) return;
      this.enable = false;
      this.stopTime = new Date().getTime();
    }
  }, {
    key: "play",
    value: function play() {
      if (this.enable) return;
      this.enable = true;
      this.now = new Date().getTime() - this.stopTime;
      this.time += this.now;
      this.frame();
    }
  }]);

  return EnterFrame;
}();

exports["default"] = EnterFrame;