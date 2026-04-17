const { requestAnimationFrame: l } = window, n = () => (/* @__PURE__ */ new Date()).getTime(), p = "There is nothing to undo.", i = n(), m = {
  enable: !1,
  timestamp: i,
  stopTime: i,
  lastTime: i,
  fps: 0
}, t = { ...m }, s = {
  do: () => {
  },
  list: []
}, o = {
  do: () => {
  },
  list: []
}, d = (e) => {
  s.list.push(s.do), s.do = /* @__PURE__ */ (function(a) {
    return function() {
      return e(arguments[0]), a.apply(this, arguments);
    };
  })(s.do);
}, u = (e) => {
  o.list.push(o.do), o.do = /* @__PURE__ */ (function(a) {
    return function() {
      return e(arguments[0]), a.apply(this, arguments);
    };
  })(o.do);
}, r = () => {
  if (!t.enable) return;
  const e = n(), a = t.fps ? 1e3 / t.fps : 0;
  if (e - t.lastTime < a) {
    l(() => r());
    return;
  }
  t.lastTime = e;
  const c = e - t.timestamp;
  s.do({ delta: c }), o.do({ delta: c }), l(() => r());
}, f = () => {
  if (t.enable) return;
  t.enable = !0;
  const e = n() - t.stopTime;
  t.timestamp += e, r();
}, T = () => {
  t.enable = !1, t.stopTime = n();
}, g = () => {
  t.enable = m.enable, s.do = () => {
  }, s.list = [];
}, h = () => {
  const { list: e } = s;
  if (e.length === 0) {
    console.warn(p);
    return;
  }
  s.do = e[e.length - 1], e.pop();
}, b = (e = 30) => {
  t.fps = e;
}, w = () => {
  t.timestamp = n(), t.stopTime = n(), t.lastTime = n();
}, y = {
  add: d,
  addStatic: u,
  todo: s,
  staticTodo: o,
  play: f,
  stop: T,
  destroy: g,
  undo: h,
  setFPS: b,
  reset: w
};
export {
  y as default
};
