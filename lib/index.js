"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _window = window,
  requestAnimationFrame = _window.requestAnimationFrame;
var getTime = function getTime() {
  return new Date().getTime();
};
var undoMessage = 'There is no funnction to undo.';
var now = getTime();
var initializeState = {
  enable: false,
  timestamp: now,
  stopTime: now,
  lastTime: now,
  fps: 0
};
var state = _objectSpread({}, initializeState);
var todo = {
  "do": function _do() {},
  list: []
};
var add = function add(doSomething) {
  todo.list.push(todo["do"]);
  todo["do"] = function (_super) {
    return function () {
      doSomething(arguments[0]);
      return _super.apply(this, arguments);
    };
  }(todo["do"]);
};
var update = function update() {
  if (!state.enable) return;
  var now = getTime();
  var fpsTime = state.fps ? 1000 / state.fps : 0;
  var fpsFrame = now - state.lastTime;
  if (fpsFrame < fpsTime) {
    requestAnimationFrame(function () {
      return update();
    });
    return;
  }
  state.lastTime = now;
  var delta = now - state.timestamp;
  todo["do"]({
    delta: delta
  });
  requestAnimationFrame(function () {
    return update();
  });
};
var play = function play() {
  if (state.enable) return;
  state.enable = true;
  var totalStopTime = getTime() - state.stopTime;
  state.timestamp += totalStopTime;
  update();
};
var stop = function stop() {
  state.enable = false;
  state.stopTime = getTime();
};
var destroy = function destroy() {
  state.enable = initializeState.enable;
  todo["do"] = function () {};
  todo.list = [];
};
var undo = function undo() {
  var list = todo.list;
  if (list.length === 0) {
    console.warn(undoMessage);
    return;
  }
  todo["do"] = list[list.length - 1];
  list.pop();
};
var setFPS = function setFPS() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  state.fps = value;
};
var reset = function reset() {
  state.timestamp = getTime();
  state.stopTime = getTime();
  state.lastTime = getTime();
};
var EnterFrame = {
  add: add,
  todo: todo,
  play: play,
  stop: stop,
  destroy: destroy,
  undo: undo,
  setFPS: setFPS,
  reset: reset
};
var _default = EnterFrame;
exports["default"] = _default;