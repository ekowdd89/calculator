!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.calculator = e())
    : (t.calculator = e());
})(this, function () {
  return (
    (t = {
      579: (t) => {
        t.exports = {
          add: function (t, e) {
            return t + e;
          },
          sub: function (t, e) {
            return t - e;
          },
        };
      },
    }),
    (e = {}),
    (function o(r) {
      var n = e[r];
      if (void 0 !== n) return n.exports;
      var u = (e[r] = { exports: {} });
      return t[r](u, u.exports, o), u.exports;
    })(579)
  );
  var t, e;
});
