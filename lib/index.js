const { requestAnimationFrame: m } = window, n = () => (/* @__PURE__ */ new Date()).getTime(), c = "There is nothing to undo.", a = n(), l = {
  enable: !1,
  timestamp: a,
  stopTime: a,
  lastTime: a,
  fps: 0
}, t = { ...l }, s = {
  do: () => {
  },
  list: []
}, p = (e) => {
  s.list.push(s.do), s.do = /* @__PURE__ */ function(o) {
    return function() {
      return e(arguments[0]), o.apply(this, arguments);
    };
  }(s.do);
}, i = () => {
  if (!t.enable) return;
  const e = n(), o = t.fps ? 1e3 / t.fps : 0;
  if (e - t.lastTime < o) {
    m(() => i());
    return;
  }
  t.lastTime = e;
  const r = e - t.timestamp;
  s.do({ delta: r }), m(() => i());
}, d = () => {
  if (t.enable) return;
  t.enable = !0;
  const e = n() - t.stopTime;
  t.timestamp += e, i();
}, u = () => {
  t.enable = !1, t.stopTime = n();
}, f = () => {
  t.enable = l.enable, s.do = () => {
  }, s.list = [];
}, T = () => {
  const { list: e } = s;
  if (e.length === 0) {
    console.warn(c);
    return;
  }
  s.do = e[e.length - 1], e.pop();
}, g = (e = 30) => {
  t.fps = e;
}, b = () => {
  t.timestamp = n(), t.stopTime = n(), t.lastTime = n();
}, w = { add: p, todo: s, play: d, stop: u, destroy: f, undo: T, setFPS: g, reset: b };
export {
  w as default
};
