/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Fi = u(() => {
    window.tram = (function (e) {
      function t(l, g) {
        var m = new W.Bare();
        return m.init(l, g);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (g) {
          return "-" + g.toLowerCase();
        });
      }
      function n(l) {
        var g = parseInt(l.slice(1), 16),
          m = (g >> 16) & 255,
          S = (g >> 8) & 255,
          y = 255 & g;
        return [m, S, y];
      }
      function o(l, g, m) {
        return (
          "#" + ((1 << 24) | (l << 16) | (g << 8) | m).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, g) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof g + "] " + g);
      }
      function s(l, g, m) {
        f("Units do not match [" + l + "]: " + g + ", " + m);
      }
      function c(l, g, m) {
        if ((g !== void 0 && (m = g), l === void 0)) return m;
        var S = m;
        return (
          Di.test(l) || !an.test(l)
            ? (S = parseInt(l, 10))
            : an.test(l) && (S = 1e3 * parseFloat(l)),
          0 > S && (S = 0),
          S === S ? S : m
        );
      }
      function f(l) {
        ce.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var g = -1, m = l ? l.length : 0, S = []; ++g < m; ) {
          var y = l[g];
          y && S.push(y);
        }
        return S;
      }
      var v = (function (l, g, m) {
          function S(te) {
            return typeof te == "object";
          }
          function y(te) {
            return typeof te == "function";
          }
          function A() {}
          function Q(te, de) {
            function H() {
              var Ce = new oe();
              return y(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function oe() {}
            de === m && ((de = te), (te = Object)), (H.Bare = oe);
            var se,
              ye = (A[l] = te[l]),
              tt = (oe[l] = H[l] = new A());
            return (
              (tt.constructor = H),
              (H.mixin = function (Ce) {
                return (oe[l] = H[l] = Q(H, Ce)[l]), H;
              }),
              (H.open = function (Ce) {
                if (
                  ((se = {}),
                  y(Ce) ? (se = Ce.call(H, tt, ye, H, te)) : S(Ce) && (se = Ce),
                  S(se))
                )
                  for (var Ir in se) g.call(se, Ir) && (tt[Ir] = se[Ir]);
                return y(tt.init) || (tt.init = te), H;
              }),
              H.open(de)
            );
          }
          return Q;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, g, m, S) {
              var y = (l /= S) * l,
                A = y * l;
              return (
                g +
                m * (-2.75 * A * y + 11 * y * y + -15.5 * A + 8 * y + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, g, m, S) {
              var y = (l /= S) * l,
                A = y * l;
              return g + m * (-1 * A * y + 3 * y * y + -3 * A + 2 * y);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, g, m, S) {
              var y = (l /= S) * l,
                A = y * l;
              return (
                g +
                m * (0.3 * A * y + -1.6 * y * y + 2.2 * A + -1.8 * y + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, g, m, S) {
              var y = (l /= S) * l,
                A = y * l;
              return g + m * (2 * A * y + -5 * y * y + 2 * A + 2 * y);
            },
          ],
          linear: [
            "linear",
            function (l, g, m, S) {
              return (m * l) / S + g;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, g, m, S) {
              return m * (l /= S) * l + g;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, g, m, S) {
              return -m * (l /= S) * (l - 2) + g;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, g, m, S) {
              return (l /= S / 2) < 1
                ? (m / 2) * l * l + g
                : (-m / 2) * (--l * (l - 2) - 1) + g;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, g, m, S) {
              return m * (l /= S) * l * l + g;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, g, m, S) {
              return m * ((l = l / S - 1) * l * l + 1) + g;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, g, m, S) {
              return (l /= S / 2) < 1
                ? (m / 2) * l * l * l + g
                : (m / 2) * ((l -= 2) * l * l + 2) + g;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, g, m, S) {
              return m * (l /= S) * l * l * l + g;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, g, m, S) {
              return -m * ((l = l / S - 1) * l * l * l - 1) + g;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, g, m, S) {
              return (l /= S / 2) < 1
                ? (m / 2) * l * l * l * l + g
                : (-m / 2) * ((l -= 2) * l * l * l - 2) + g;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, g, m, S) {
              return m * (l /= S) * l * l * l * l + g;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, g, m, S) {
              return m * ((l = l / S - 1) * l * l * l * l + 1) + g;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, g, m, S) {
              return (l /= S / 2) < 1
                ? (m / 2) * l * l * l * l * l + g
                : (m / 2) * ((l -= 2) * l * l * l * l + 2) + g;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, g, m, S) {
              return -m * Math.cos((l / S) * (Math.PI / 2)) + m + g;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, g, m, S) {
              return m * Math.sin((l / S) * (Math.PI / 2)) + g;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, g, m, S) {
              return (-m / 2) * (Math.cos((Math.PI * l) / S) - 1) + g;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, g, m, S) {
              return l === 0 ? g : m * Math.pow(2, 10 * (l / S - 1)) + g;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, g, m, S) {
              return l === S
                ? g + m
                : m * (-Math.pow(2, (-10 * l) / S) + 1) + g;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, g, m, S) {
              return l === 0
                ? g
                : l === S
                ? g + m
                : (l /= S / 2) < 1
                ? (m / 2) * Math.pow(2, 10 * (l - 1)) + g
                : (m / 2) * (-Math.pow(2, -10 * --l) + 2) + g;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, g, m, S) {
              return -m * (Math.sqrt(1 - (l /= S) * l) - 1) + g;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, g, m, S) {
              return m * Math.sqrt(1 - (l = l / S - 1) * l) + g;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, g, m, S) {
              return (l /= S / 2) < 1
                ? (-m / 2) * (Math.sqrt(1 - l * l) - 1) + g
                : (m / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + g;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, g, m, S, y) {
              return (
                y === void 0 && (y = 1.70158),
                m * (l /= S) * l * ((y + 1) * l - y) + g
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, g, m, S, y) {
              return (
                y === void 0 && (y = 1.70158),
                m * ((l = l / S - 1) * l * ((y + 1) * l + y) + 1) + g
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, g, m, S, y) {
              return (
                y === void 0 && (y = 1.70158),
                (l /= S / 2) < 1
                  ? (m / 2) * l * l * (((y *= 1.525) + 1) * l - y) + g
                  : (m / 2) *
                      ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) +
                    g
              );
            },
          ],
        },
        _ = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        O = window,
        D = "bkwld-tram",
        b = /[\-\.0-9]/g,
        R = /[A-Z]/,
        I = "number",
        L = /^(rgb|#)/,
        x = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        z = "unitless",
        Y = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        V = " ",
        w = T.createElement("a"),
        p = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        q = function (l) {
          if (l in w.style) return { dom: l, css: l };
          var g,
            m,
            S = "",
            y = l.split("-");
          for (g = 0; g < y.length; g++)
            S += y[g].charAt(0).toUpperCase() + y[g].slice(1);
          for (g = 0; g < p.length; g++)
            if (((m = p[g] + S), m in w.style))
              return { dom: m, css: M[g] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: q("transform"),
          transition: q("transition"),
          backface: q("backface-visibility"),
          timing: q("transition-timing-function"),
        });
      if (G.transition) {
        var $ = G.timing.dom;
        if (((w.style[$] = E["ease-in-back"][0]), !w.style[$]))
          for (var Z in _) E[Z][0] = _[Z];
      }
      var F = (t.frame = (function () {
          var l =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(O)
            : function (g) {
                O.setTimeout(g, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = O.performance,
            g = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return g && G.bind
            ? g.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        K = v(function (l) {
          function g(J, ue) {
            var he = h(("" + J).split(V)),
              le = he[0];
            ue = ue || {};
            var Ne = mr[le];
            if (!Ne) return f("Unsupported property: " + le);
            if (!ue.weak || !this.props[le]) {
              var Be = Ne[0],
                Pe = this.props[le];
              return (
                Pe || (Pe = this.props[le] = new Be.Bare()),
                Pe.init(this.$el, he, Ne, ue),
                Pe
              );
            }
          }
          function m(J, ue, he) {
            if (J) {
              var le = typeof J;
              if (
                (ue ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                le == "number" && ue)
              )
                return (
                  (this.timer = new ae({
                    duration: J,
                    context: this,
                    complete: A,
                  })),
                  void (this.active = !0)
                );
              if (le == "string" && ue) {
                switch (J) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    Q.call(this);
                    break;
                  case "redraw":
                    oe.call(this);
                    break;
                  default:
                    g.call(this, J, he && he[1]);
                }
                return A.call(this);
              }
              if (le == "function") return void J.call(this, this);
              if (le == "object") {
                var Ne = 0;
                tt.call(
                  this,
                  J,
                  function (me, Dm) {
                    me.span > Ne && (Ne = me.span), me.stop(), me.animate(Dm);
                  },
                  function (me) {
                    "wait" in me && (Ne = c(me.wait, 0));
                  }
                ),
                  ye.call(this),
                  Ne > 0 &&
                    ((this.timer = new ae({ duration: Ne, context: this })),
                    (this.active = !0),
                    ue && (this.timer.complete = A));
                var Be = this,
                  Pe = !1,
                  sn = {};
                F(function () {
                  tt.call(Be, J, function (me) {
                    me.active && ((Pe = !0), (sn[me.name] = me.nextStyle));
                  }),
                    Pe && Be.$el.css(sn);
                });
              }
            }
          }
          function S(J) {
            (J = c(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new ae({
                    duration: J,
                    context: this,
                    complete: A,
                  })),
                  (this.active = !0));
          }
          function y(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = A))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function A() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              m.call(this, J.options, !0, J.args);
            }
          }
          function Q(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ue;
            typeof J == "string"
              ? ((ue = {}), (ue[J] = 1))
              : (ue = typeof J == "object" && J != null ? J : this.props),
              tt.call(this, ue, Ce),
              ye.call(this);
          }
          function te(J) {
            Q.call(this, J), tt.call(this, J, Ir, Pm);
          }
          function de(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function H() {
            Q.call(this), (this.el.style.display = "none");
          }
          function oe() {
            this.el.offsetHeight;
          }
          function se() {
            Q.call(this), e.removeData(this.el, D), (this.$el = this.el = null);
          }
          function ye() {
            var J,
              ue,
              he = [];
            this.upstream && he.push(this.upstream);
            for (J in this.props)
              (ue = this.props[J]), ue.active && he.push(ue.string);
            (he = he.join(",")),
              this.style !== he &&
                ((this.style = he), (this.el.style[G.transition.dom] = he));
          }
          function tt(J, ue, he) {
            var le,
              Ne,
              Be,
              Pe,
              sn = ue !== Ce,
              me = {};
            for (le in J)
              (Be = J[le]),
                le in et
                  ? (me.transform || (me.transform = {}),
                    (me.transform[le] = Be))
                  : (R.test(le) && (le = r(le)),
                    le in mr
                      ? (me[le] = Be)
                      : (Pe || (Pe = {}), (Pe[le] = Be)));
            for (le in me) {
              if (((Be = me[le]), (Ne = this.props[le]), !Ne)) {
                if (!sn) continue;
                Ne = g.call(this, le);
              }
              ue.call(this, Ne, Be);
            }
            he && Pe && he.call(this, Pe);
          }
          function Ce(J) {
            J.stop();
          }
          function Ir(J, ue) {
            J.set(ue);
          }
          function Pm(J) {
            this.$el.css(J);
          }
          function We(J, ue) {
            l[J] = function () {
              return this.children
                ? Mm.call(this, ue, arguments)
                : (this.el && ue.apply(this, arguments), this);
            };
          }
          function Mm(J, ue) {
            var he,
              le = this.children.length;
            for (he = 0; le > he; he++) J.apply(this.children[he], ue);
            return this;
          }
          (l.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ce.keepInherited && !ce.fallback)
            ) {
              var ue = Je(this.el, "transition");
              ue && !Y.test(ue) && (this.upstream = ue);
            }
            G.backface &&
              ce.hideBackface &&
              Ve(this.el, G.backface.css, "hidden");
          }),
            We("add", g),
            We("start", m),
            We("wait", S),
            We("then", y),
            We("next", A),
            We("stop", Q),
            We("set", te),
            We("show", de),
            We("hide", H),
            We("redraw", oe),
            We("destroy", se);
        }),
        W = v(K, function (l) {
          function g(m, S) {
            var y = e.data(m, D) || e.data(m, D, new K.Bare());
            return y.el || y.init(m), S ? y.start(S) : y;
          }
          l.init = function (m, S) {
            var y = e(m);
            if (!y.length) return this;
            if (y.length === 1) return g(y[0], S);
            var A = [];
            return (
              y.each(function (Q, te) {
                A.push(g(te, S));
              }),
              (this.children = A),
              this
            );
          };
        }),
        U = v(function (l) {
          function g() {
            var A = this.get();
            this.update("auto");
            var Q = this.get();
            return this.update(A), Q;
          }
          function m(A, Q, te) {
            return Q !== void 0 && (te = Q), A in E ? A : te;
          }
          function S(A) {
            var Q = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
            return (Q ? o(Q[1], Q[2], Q[3]) : A).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var y = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (A, Q, te, de) {
            (this.$el = A), (this.el = A[0]);
            var H = Q[0];
            te[2] && (H = te[2]),
              yr[H] && (H = yr[H]),
              (this.name = H),
              (this.type = te[1]),
              (this.duration = c(Q[1], this.duration, y.duration)),
              (this.ease = m(Q[2], this.ease, y.ease)),
              (this.delay = c(Q[3], this.delay, y.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = de.unit || this.unit || ce.defaultUnit),
              (this.angle = de.angle || this.angle || ce.defaultAngle),
              ce.fallback || de.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + E[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (l.set = function (A) {
              (A = this.convert(A, this.type)), this.update(A), this.redraw();
            }),
            (l.transition = function (A) {
              (this.active = !0),
                (A = this.convert(A, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  A == "auto" && (A = g.call(this))),
                (this.nextStyle = A);
            }),
            (l.fallback = function (A) {
              var Q =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (A = this.convert(A, this.type)),
                this.auto &&
                  (Q == "auto" && (Q = this.convert(this.get(), this.type)),
                  A == "auto" && (A = g.call(this))),
                (this.tween = new C({
                  from: Q,
                  to: A,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return Je(this.el, this.name);
            }),
            (l.update = function (A) {
              Ve(this.el, this.name, A);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Ve(this.el, this.name, this.get()));
              var A = this.tween;
              A && A.context && A.destroy();
            }),
            (l.convert = function (A, Q) {
              if (A == "auto" && this.auto) return A;
              var te,
                de = typeof A == "number",
                H = typeof A == "string";
              switch (Q) {
                case I:
                  if (de) return A;
                  if (H && A.replace(b, "") === "") return +A;
                  te = "number(unitless)";
                  break;
                case L:
                  if (H) {
                    if (A === "" && this.original) return this.original;
                    if (Q.test(A))
                      return A.charAt(0) == "#" && A.length == 7 ? A : S(A);
                  }
                  te = "hex or rgb string";
                  break;
                case x:
                  if (de) return A + this.unit;
                  if (H && Q.test(A)) return A;
                  te = "number(px) or string(unit)";
                  break;
                case P:
                  if (de) return A + this.unit;
                  if (H && Q.test(A)) return A;
                  te = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (de) return A + this.angle;
                  if (H && Q.test(A)) return A;
                  te = "number(deg) or string(angle)";
                  break;
                case z:
                  if (de || (H && P.test(A))) return A;
                  te = "number(unitless) or string(unit or %)";
              }
              return a(te, A), A;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        d = v(U, function (l, g) {
          l.init = function () {
            g.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        B = v(U, function (l, g) {
          (l.init = function () {
            g.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (m) {
              this.$el[this.name](m);
            });
        }),
        k = v(U, function (l, g) {
          function m(S, y) {
            var A, Q, te, de, H;
            for (A in S)
              (de = et[A]),
                (te = de[0]),
                (Q = de[1] || A),
                (H = this.convert(S[A], te)),
                y.call(this, Q, H, te);
          }
          (l.init = function () {
            g.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                et.perspective &&
                  ce.perspective &&
                  ((this.current.perspective = ce.perspective),
                  Ve(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (S) {
              m.call(this, S, function (y, A) {
                this.current[y] = A;
              }),
                Ve(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (S) {
              var y = this.values(S);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var A,
                Q = {};
              for (A in this.current) Q[A] = A in y ? y[A] : this.current[A];
              (this.active = !0), (this.nextStyle = this.style(Q));
            }),
            (l.fallback = function (S) {
              var y = this.values(S);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              Ve(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (S) {
              var y,
                A = "";
              for (y in S) A += y + "(" + S[y] + ") ";
              return A;
            }),
            (l.values = function (S) {
              var y,
                A = {};
              return (
                m.call(this, S, function (Q, te, de) {
                  (A[Q] = te),
                    this.current[Q] === void 0 &&
                      ((y = 0),
                      ~Q.indexOf("scale") && (y = 1),
                      (this.current[Q] = this.convert(y, de)));
                }),
                A
              );
            });
        }),
        C = v(function (l) {
          function g(H) {
            te.push(H) === 1 && F(m);
          }
          function m() {
            var H,
              oe,
              se,
              ye = te.length;
            if (ye)
              for (F(m), oe = j(), H = ye; H--; )
                (se = te[H]), se && se.render(oe);
          }
          function S(H) {
            var oe,
              se = e.inArray(H, te);
            se >= 0 &&
              ((oe = te.slice(se + 1)),
              (te.length = se),
              oe.length && (te = te.concat(oe)));
          }
          function y(H) {
            return Math.round(H * de) / de;
          }
          function A(H, oe, se) {
            return o(
              H[0] + se * (oe[0] - H[0]),
              H[1] + se * (oe[1] - H[1]),
              H[2] + se * (oe[2] - H[2])
            );
          }
          var Q = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var oe = H.ease || Q.ease;
            E[oe] && (oe = E[oe][1]),
              typeof oe != "function" && (oe = Q.ease),
              (this.ease = oe),
              (this.update = H.update || i),
              (this.complete = H.complete || i),
              (this.context = H.context || this),
              (this.name = H.name);
            var se = H.from,
              ye = H.to;
            se === void 0 && (se = Q.from),
              ye === void 0 && (ye = Q.to),
              (this.unit = H.unit || ""),
              typeof se == "number" && typeof ye == "number"
                ? ((this.begin = se), (this.change = ye - se))
                : this.format(ye, se),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              H.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), g(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (l.render = function (H) {
              var oe,
                se = H - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var ye = this.ease(se, 0, 1, this.duration);
                return (
                  (oe = this.startRGB
                    ? A(this.startRGB, this.endRGB, ye)
                    : y(this.begin + ye * this.change)),
                  (this.value = oe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (oe = this.endHex || this.begin + this.change),
                (this.value = oe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (H, oe) {
              if (((oe += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(oe)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = oe.replace(b, ""),
                  ye = H.replace(b, "");
                se !== ye && s("tween", oe, H), (this.unit = se);
              }
              (oe = parseFloat(oe)),
                (H = parseFloat(H)),
                (this.begin = this.value = oe),
                (this.change = H - oe);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var te = [],
            de = 1e3;
        }),
        ae = v(C, function (l) {
          (l.init = function (g) {
            (this.duration = g.duration || 0),
              (this.complete = g.complete || i),
              (this.context = g.context),
              this.play();
          }),
            (l.render = function (g) {
              var m = g - this.start;
              m < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Oe = v(C, function (l, g) {
          (l.init = function (m) {
            (this.context = m.context),
              (this.update = m.update),
              (this.tweens = []),
              (this.current = m.current);
            var S, y;
            for (S in m.values)
              (y = m.values[S]),
                this.current[S] !== y &&
                  this.tweens.push(
                    new C({
                      name: S,
                      from: this.current[S],
                      to: y,
                      duration: m.duration,
                      delay: m.delay,
                      ease: m.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (m) {
              var S,
                y,
                A = this.tweens.length,
                Q = !1;
              for (S = A; S--; )
                (y = this.tweens[S]),
                  y.context &&
                    (y.render(m), (this.current[y.name] = y.value), (Q = !0));
              return Q
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((g.destroy.call(this), this.tweens)) {
                var m,
                  S = this.tweens.length;
                for (m = S; m--; ) this.tweens[m].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ce = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ce.fallback = !0);
        ce.agentTests.push("(" + l + ")");
        var g = new RegExp(ce.agentTests.join("|"), "i");
        ce.fallback = g.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, g, m) {
          return new ae({ complete: g, duration: l, context: m });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var Ve = e.style,
        Je = e.css,
        yr = { transform: G.transform && G.transform.css },
        mr = {
          color: [d, L],
          background: [d, L, "background-color"],
          "outline-color": [d, L],
          "border-color": [d, L],
          "border-top-color": [d, L],
          "border-right-color": [d, L],
          "border-bottom-color": [d, L],
          "border-left-color": [d, L],
          "border-width": [U, x],
          "border-top-width": [U, x],
          "border-right-width": [U, x],
          "border-bottom-width": [U, x],
          "border-left-width": [U, x],
          "border-spacing": [U, x],
          "letter-spacing": [U, x],
          margin: [U, x],
          "margin-top": [U, x],
          "margin-right": [U, x],
          "margin-bottom": [U, x],
          "margin-left": [U, x],
          padding: [U, x],
          "padding-top": [U, x],
          "padding-right": [U, x],
          "padding-bottom": [U, x],
          "padding-left": [U, x],
          "outline-width": [U, x],
          opacity: [U, I],
          top: [U, P],
          right: [U, P],
          bottom: [U, P],
          left: [U, P],
          "font-size": [U, P],
          "text-indent": [U, P],
          "word-spacing": [U, P],
          width: [U, P],
          "min-width": [U, P],
          "max-width": [U, P],
          height: [U, P],
          "min-height": [U, P],
          "max-height": [U, P],
          "line-height": [U, z],
          "scroll-top": [B, I, "scrollTop"],
          "scroll-left": [B, I, "scrollLeft"],
        },
        et = {};
      G.transform &&
        ((mr.transform = [k]),
        (et = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [I],
          scaleX: [I],
          scaleY: [I],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        G.transform &&
          G.backface &&
          ((et.z = [P, "translateZ"]),
          (et.rotateZ = [X]),
          (et.scaleZ = [I]),
          (et.perspective = [x]));
      var Di = /ms/,
        an = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Is = u((tB, ms) => {
    var Fm = window.$,
      Gm = Fi() && Fm.tram;
    ms.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        h = r.forEach,
        v = r.map,
        E = r.reduce,
        _ = r.reduceRight,
        T = r.filter,
        O = r.every,
        D = r.some,
        b = r.indexOf,
        R = r.lastIndexOf,
        I = Array.isArray,
        L = Object.keys,
        x = o.bind,
        P =
          (e.each =
          e.forEach =
            function (p, M, q) {
              if (p == null) return p;
              if (h && p.forEach === h) p.forEach(M, q);
              else if (p.length === +p.length) {
                for (var G = 0, $ = p.length; G < $; G++)
                  if (M.call(q, p[G], G, p) === t) return;
              } else
                for (var Z = e.keys(p), G = 0, $ = Z.length; G < $; G++)
                  if (M.call(q, p[Z[G]], Z[G], p) === t) return;
              return p;
            });
      (e.map = e.collect =
        function (p, M, q) {
          var G = [];
          return p == null
            ? G
            : v && p.map === v
            ? p.map(M, q)
            : (P(p, function ($, Z, F) {
                G.push(M.call(q, $, Z, F));
              }),
              G);
        }),
        (e.find = e.detect =
          function (p, M, q) {
            var G;
            return (
              X(p, function ($, Z, F) {
                if (M.call(q, $, Z, F)) return (G = $), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (p, M, q) {
            var G = [];
            return p == null
              ? G
              : T && p.filter === T
              ? p.filter(M, q)
              : (P(p, function ($, Z, F) {
                  M.call(q, $, Z, F) && G.push($);
                }),
                G);
          });
      var X =
        (e.some =
        e.any =
          function (p, M, q) {
            M || (M = e.identity);
            var G = !1;
            return p == null
              ? G
              : D && p.some === D
              ? p.some(M, q)
              : (P(p, function ($, Z, F) {
                  if (G || (G = M.call(q, $, Z, F))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (p, M) {
          return p == null
            ? !1
            : b && p.indexOf === b
            ? p.indexOf(M) != -1
            : X(p, function (q) {
                return q === M;
              });
        }),
        (e.delay = function (p, M) {
          var q = a.call(arguments, 2);
          return setTimeout(function () {
            return p.apply(null, q);
          }, M);
        }),
        (e.defer = function (p) {
          return e.delay.apply(e, [p, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (p) {
          var M, q, G;
          return function () {
            M ||
              ((M = !0),
              (q = arguments),
              (G = this),
              Gm.frame(function () {
                (M = !1), p.apply(G, q);
              }));
          };
        }),
        (e.debounce = function (p, M, q) {
          var G,
            $,
            Z,
            F,
            j,
            K = function () {
              var W = e.now() - F;
              W < M
                ? (G = setTimeout(K, M - W))
                : ((G = null), q || ((j = p.apply(Z, $)), (Z = $ = null)));
            };
          return function () {
            (Z = this), ($ = arguments), (F = e.now());
            var W = q && !G;
            return (
              G || (G = setTimeout(K, M)),
              W && ((j = p.apply(Z, $)), (Z = $ = null)),
              j
            );
          };
        }),
        (e.defaults = function (p) {
          if (!e.isObject(p)) return p;
          for (var M = 1, q = arguments.length; M < q; M++) {
            var G = arguments[M];
            for (var $ in G) p[$] === void 0 && (p[$] = G[$]);
          }
          return p;
        }),
        (e.keys = function (p) {
          if (!e.isObject(p)) return [];
          if (L) return L(p);
          var M = [];
          for (var q in p) e.has(p, q) && M.push(q);
          return M;
        }),
        (e.has = function (p, M) {
          return f.call(p, M);
        }),
        (e.isObject = function (p) {
          return p === Object(p);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (p) {
          return "\\" + Y[p];
        },
        w = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (p, M, q) {
          !M && q && (M = q), (M = e.defaults({}, M, e.templateSettings));
          var G = RegExp(
              [
                (M.escape || z).source,
                (M.interpolate || z).source,
                (M.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            $ = 0,
            Z = "__p+='";
          p.replace(G, function (W, U, d, B, k) {
            return (
              (Z += p.slice($, k).replace(ee, V)),
              ($ = k + W.length),
              U
                ? (Z +=
                    `'+
((__t=(` +
                    U +
                    `))==null?'':_.escape(__t))+
'`)
                : d
                ? (Z +=
                    `'+
((__t=(` +
                    d +
                    `))==null?'':__t)+
'`)
                : B &&
                  (Z +=
                    `';
` +
                    B +
                    `
__p+='`),
              W
            );
          }),
            (Z += `';
`);
          var F = M.variable;
          if (F) {
            if (!w.test(F))
              throw new Error("variable is not a bare identifier: " + F);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (F = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var j;
          try {
            j = new Function(M.variable || "obj", "_", Z);
          } catch (W) {
            throw ((W.source = Z), W);
          }
          var K = function (W) {
            return j.call(this, W, e);
          };
          return (
            (K.source =
              "function(" +
              F +
              `){
` +
              Z +
              "}"),
            K
          );
        }),
        e
      );
    })();
  });
  var Me = u((rB, Cs) => {
    var fe = {},
      Wt = {},
      Bt = [],
      Ui = window.Webflow || [],
      ht = window.jQuery,
      je = ht(window),
      Um = ht(document),
      rt = ht.isFunction,
      He = (fe._ = Is()),
      Os = (fe.tram = Fi() && ht.tram),
      cn = !1,
      Xi = !1;
    Os.config.hideBackface = !1;
    Os.config.keepInherited = !0;
    fe.define = function (e, t, r) {
      Wt[e] && Ss(Wt[e]);
      var n = (Wt[e] = t(ht, He, r) || {});
      return bs(n), n;
    };
    fe.require = function (e) {
      return Wt[e];
    };
    function bs(e) {
      fe.env() &&
        (rt(e.design) && je.on("__wf_design", e.design),
        rt(e.preview) && je.on("__wf_preview", e.preview)),
        rt(e.destroy) && je.on("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && Xm(e);
    }
    function Xm(e) {
      if (cn) {
        e.ready();
        return;
      }
      He.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Ss(e) {
      rt(e.design) && je.off("__wf_design", e.design),
        rt(e.preview) && je.off("__wf_preview", e.preview),
        rt(e.destroy) && je.off("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && Vm(e);
    }
    function Vm(e) {
      Bt = He.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    fe.push = function (e) {
      if (cn) {
        rt(e) && e();
        return;
      }
      Ui.push(e);
    };
    fe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      As = (fe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Wm = (fe.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      Bm = (fe.env.ios = /(ipod|iphone|ipad)/.test(un));
    fe.env.safari = /safari/.test(un) && !Wm && !Bm;
    var Gi;
    As &&
      Um.on("touchstart mousedown", function (e) {
        Gi = e.target;
      });
    fe.validClick = As
      ? function (e) {
          return e === Gi || ht.contains(e, Gi);
        }
      : function () {
          return !0;
        };
    var ws = "resize.webflow orientationchange.webflow load.webflow",
      Hm = "scroll.webflow " + ws;
    fe.resize = Vi(je, ws);
    fe.scroll = Vi(je, Hm);
    fe.redraw = Vi();
    function Vi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = He.throttle(function (o) {
          He.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (He.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = He.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    fe.location = function (e) {
      window.location = e;
    };
    fe.env() && (fe.location = function () {});
    fe.ready = function () {
      (cn = !0), Xi ? jm() : He.each(Bt, Ts), He.each(Ui, Ts), fe.resize.up();
    };
    function Ts(e) {
      rt(e) && e();
    }
    function jm() {
      (Xi = !1), He.each(Wt, bs);
    }
    var wt;
    fe.load = function (e) {
      wt.then(e);
    };
    function Rs() {
      wt && (wt.reject(), je.off("load", wt.resolve)),
        (wt = new ht.Deferred()),
        je.on("load", wt.resolve);
    }
    fe.destroy = function (e) {
      (e = e || {}),
        (Xi = !0),
        je.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        He.each(Wt, Ss),
        fe.resize.off(),
        fe.scroll.off(),
        fe.redraw.off(),
        (Bt = []),
        (Ui = []),
        wt.state() === "pending" && Rs();
    };
    ht(fe.ready);
    Rs();
    Cs.exports = window.Webflow = fe;
  });
  var qs = u((nB, Ns) => {
    var ln = Me();
    ln.define(
      "scroll",
      (Ns.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (w) {
              window.setTimeout(w, 15);
            },
          c = ln.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          _ = document.createElement("style");
        _.appendChild(document.createTextNode(E));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function D(w) {
          return O.test(w.hash) && w.host + w.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function I(w, p) {
          var M;
          switch (p) {
            case "add":
              (M = w.attr("tabindex")),
                M
                  ? w.attr("data-wf-tabindex-swap", M)
                  : w.attr("tabindex", "-1");
              break;
            case "remove":
              (M = w.attr("data-wf-tabindex-swap")),
                M
                  ? (w.attr("tabindex", M),
                    w.removeAttr("data-wf-tabindex-swap"))
                  : w.removeAttr("tabindex");
              break;
          }
          w.toggleClass("wf-force-outline-none", p === "add");
        }
        function L(w) {
          var p = w.currentTarget;
          if (
            !(
              ln.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(p.className))
            )
          ) {
            var M = D(p) ? p.hash : "";
            if (M !== "") {
              var q = e(M);
              q.length &&
                (w && (w.preventDefault(), w.stopPropagation()),
                x(M, w),
                window.setTimeout(
                  function () {
                    P(q, function () {
                      I(q, "add"),
                        q.get(0).focus({ preventScroll: !0 }),
                        I(q, "remove");
                    });
                  },
                  w ? 0 : 300
                ));
            }
          }
        }
        function x(w) {
          if (
            r.hash !== w &&
            n &&
            n.pushState &&
            !(ln.env.chrome && r.protocol === "file:")
          ) {
            var p = n.state && n.state.hash;
            p !== w && n.pushState({ hash: w }, "", w);
          }
        }
        function P(w, p) {
          var M = o.scrollTop(),
            q = X(w);
          if (M !== q) {
            var G = z(w, M, q),
              $ = Date.now(),
              Z = function () {
                var F = Date.now() - $;
                window.scroll(0, Y(M, q, F, G)),
                  F <= G ? s(Z) : typeof p == "function" && p();
              };
            s(Z);
          }
        }
        function X(w) {
          var p = e(f),
            M = p.css("position") === "fixed" ? p.outerHeight() : 0,
            q = w.offset().top - M;
          if (w.data("scroll") === "mid") {
            var G = o.height() - M,
              $ = w.outerHeight();
            $ < G && (q -= Math.round((G - $) / 2));
          }
          return q;
        }
        function z(w, p, M) {
          if (R()) return 0;
          var q = 1;
          return (
            a.add(w).each(function (G, $) {
              var Z = parseFloat($.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (q = Z);
            }),
            (472.143 * Math.log(Math.abs(p - M) + 125) - 2e3) * q
          );
        }
        function Y(w, p, M, q) {
          return M > q ? p : w + (p - w) * ee(M / q);
        }
        function ee(w) {
          return w < 0.5
            ? 4 * w * w * w
            : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: w, WF_CLICK_SCROLL: p } = t;
          i.on(p, v, L),
            i.on(w, h, function (M) {
              M.preventDefault();
            }),
            document.head.insertBefore(_, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var Ls = u((iB, xs) => {
    var km = Me();
    km.define(
      "touch",
      (xs.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            h;
          i.addEventListener("touchstart", v, !1),
            i.addEventListener("touchmove", E, !1),
            i.addEventListener("touchend", _, !1),
            i.addEventListener("touchcancel", T, !1),
            i.addEventListener("mousedown", v, !1),
            i.addEventListener("mousemove", E, !1),
            i.addEventListener("mouseup", _, !1),
            i.addEventListener("mouseout", T, !1);
          function v(D) {
            var b = D.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = D.clientX),
              (h = f));
          }
          function E(D) {
            if (a) {
              if (s && D.type === "mousemove") {
                D.preventDefault(), D.stopPropagation();
                return;
              }
              var b = D.touches,
                R = b ? b[0].clientX : D.clientX,
                I = R - h;
              (h = R),
                Math.abs(I) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", D, { direction: I > 0 ? "right" : "left" }), T());
            }
          }
          function _(D) {
            if (a && ((a = !1), s && D.type === "mouseup")) {
              D.preventDefault(), D.stopPropagation(), (s = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function O() {
            i.removeEventListener("touchstart", v, !1),
              i.removeEventListener("touchmove", E, !1),
              i.removeEventListener("touchend", _, !1),
              i.removeEventListener("touchcancel", T, !1),
              i.removeEventListener("mousedown", v, !1),
              i.removeEventListener("mousemove", E, !1),
              i.removeEventListener("mouseup", _, !1),
              i.removeEventListener("mouseout", T, !1),
              (i = null);
          }
          this.destroy = O;
        }
        function o(i, a, s) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Ms = u((oB, Ps) => {
    var Wi = Me();
    Wi.define(
      "edit",
      (Ps.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Wi.env("test") || Wi.env("frame")) && !r.fixture && !Km())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || E,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(s, v).triggerHandler(s);
        function v() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (c = !0),
            (window.WebflowEditor = !0),
            o.off(s, v),
            R(function (L) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: _(L),
              });
            });
        }
        function _(L) {
          return function (x) {
            if (!x) {
              console.error("Could not load editor data");
              return;
            }
            (x.thirdPartyCookiesSupported = L),
              T(D(x.bugReporterScriptPath), function () {
                T(D(x.scriptPath), function () {
                  window.WebflowEditor(x);
                });
              });
          };
        }
        function T(L, x) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            x,
            O
          );
        }
        function O(L, x, P) {
          throw (console.error("Could not load editor script: " + x), P);
        }
        function D(L) {
          return L.indexOf("//") >= 0
            ? L
            : b("https://editor-api.webflow.com" + L);
        }
        function b(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function R(L) {
          var x = window.document.createElement("iframe");
          (x.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (x.style.display = "none"),
            (x.sandbox = "allow-scripts allow-same-origin");
          var P = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (I(x, P), L(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (I(x, P), L(!0));
          };
          (x.onerror = function () {
            I(x, P), L(!1);
          }),
            window.addEventListener("message", P, !1),
            window.document.body.appendChild(x);
        }
        function I(L, x) {
          window.removeEventListener("message", x, !1), L.remove();
        }
        return n;
      })
    );
    function Km() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Fs = u((aB, Ds) => {
    var zm = Me();
    zm.define(
      "focus-visible",
      (Ds.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(I) {
            return !!(
              I &&
              I !== document &&
              I.nodeName !== "HTML" &&
              I.nodeName !== "BODY" &&
              "classList" in I &&
              "contains" in I.classList
            );
          }
          function c(I) {
            var L = I.type,
              x = I.tagName;
            return !!(
              (x === "INPUT" && a[L] && !I.readOnly) ||
              (x === "TEXTAREA" && !I.readOnly) ||
              I.isContentEditable
            );
          }
          function f(I) {
            I.getAttribute("data-wf-focus-visible") ||
              I.setAttribute("data-wf-focus-visible", "true");
          }
          function h(I) {
            I.getAttribute("data-wf-focus-visible") &&
              I.removeAttribute("data-wf-focus-visible");
          }
          function v(I) {
            I.metaKey ||
              I.altKey ||
              I.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function _(I) {
            s(I.target) && (n || c(I.target)) && f(I.target);
          }
          function T(I) {
            s(I.target) &&
              I.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              h(I.target));
          }
          function O() {
            document.visibilityState === "hidden" && (o && (n = !0), D());
          }
          function D() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function b() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(I) {
            (I.target.nodeName && I.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", O, !0),
            D(),
            r.addEventListener("focus", _, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Us = u((sB, Gs) => {
    var Ht = Me();
    Ht.define(
      "links",
      (Gs.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = Ht.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          h = /\/$/,
          v,
          E;
        r.ready = r.design = r.preview = _;
        function _() {
          (o = i && Ht.env("design")),
            (E = Ht.env("slug") || a.pathname || ""),
            Ht.scroll.off(O),
            (v = []);
          for (var b = document.links, R = 0; R < b.length; ++R) T(b[R]);
          v.length && (Ht.scroll.on(O), O());
        }
        function T(b) {
          var R =
            (o && b.getAttribute("href-disabled")) || b.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var I = e(b);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var L = e(s.hash);
              L.length && v.push({ link: I, sec: L, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var x = s.href === a.href || R === E || (f.test(R) && h.test(E));
              D(I, c, x);
            }
          }
        }
        function O() {
          var b = n.scrollTop(),
            R = n.height();
          t.each(v, function (I) {
            var L = I.link,
              x = I.sec,
              P = x.offset().top,
              X = x.outerHeight(),
              z = R * 0.5,
              Y = x.is(":visible") && P + X - z >= b && P + z <= b + R;
            I.active !== Y && ((I.active = Y), D(L, c, Y));
          });
        }
        function D(b, R, I) {
          var L = b.hasClass(R);
          (I && L) || (!I && !L) || (I ? b.addClass(R) : b.removeClass(R));
        }
        return r;
      })
    );
  });
  var Ws = u((uB, Vs) => {
    var Xs = Me();
    Xs.define(
      "focus",
      (Vs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var js = u((cB, Hs) => {
    "use strict";
    var Bi = window.jQuery,
      nt = {},
      fn = [],
      Bs = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Bi(t).triggerHandler(nt.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Bi(t).triggerHandler(nt.types.OUTRO));
        },
      };
    nt.triggers = {};
    nt.types = { INTRO: "w-ix-intro" + Bs, OUTRO: "w-ix-outro" + Bs };
    nt.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Bi.extend(nt.triggers, dn);
    };
    nt.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (nt.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    nt.async();
    Hs.exports = nt;
  });
  var vn = u((lB, zs) => {
    "use strict";
    var Hi = js();
    function ks(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Ym = window.jQuery,
      pn = {},
      Ks = ".w-ix",
      $m = {
        reset: function (e, t) {
          Hi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Hi.triggers.intro(e, t), ks(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Hi.triggers.outro(e, t), ks(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
    Ym.extend(pn.triggers, $m);
    zs.exports = pn;
  });
  var $s = u((fB, Ys) => {
    var Qm = Me();
    Qm.define(
      "focus-within",
      (Ys.exports = function () {
        function e(i) {
          for (
            var a = [i], s = null;
            (s = i.parentNode || i.host || i.defaultView);

          )
            a.push(s), (i = s);
          return a;
        }
        function t(i) {
          typeof i.getAttribute != "function" ||
            i.getAttribute("data-wf-focus-within") ||
            i.setAttribute("data-wf-focus-within", "true");
        }
        function r(i) {
          typeof i.getAttribute != "function" ||
            !i.getAttribute("data-wf-focus-within") ||
            i.removeAttribute("data-wf-focus-within");
        }
        function n() {
          var i = function (a) {
            var s;
            function c() {
              (s = !1),
                a.type === "blur" &&
                  Array.prototype.slice.call(e(a.target)).forEach(r),
                a.type === "focus" &&
                  Array.prototype.slice.call(e(a.target)).forEach(t);
            }
            s || (window.requestAnimationFrame(c), (s = !0));
          };
          return (
            document.addEventListener("focus", i, !0),
            document.addEventListener("blur", i, !0),
            t(document.body),
            !0
          );
        }
        function o() {
          if (
            typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within")
          )
            try {
              document.querySelector(":focus-within");
            } catch {
              n();
            }
        }
        return { ready: o };
      })
    );
  });
  var Js = u((dB, Zs) => {
    var Qs = Me();
    Qs.define(
      "brand",
      (Zs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var _ = n.attr("data-wf-status"),
            T = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (_ = !0),
            _ &&
              !s &&
              ((f = f || v()),
              E(),
              setTimeout(E, 500),
              e(r).off(c, h).on(c, h));
        };
        function h() {
          var _ =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", _ ? "display: none !important;" : "");
        }
        function v() {
          var _ = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return _.append(T, O), _[0];
        }
        function E() {
          var _ = o.children(i),
            T = _.length && _.get(0) === f,
            O = Qs.env("editor");
          if (T) {
            O && _.remove();
            return;
          }
          _.length && _.remove(), O || o.append(f);
        }
        return t;
      })
    );
  });
  var ru = u((pB, tu) => {
    var Rt = Me(),
      Zm = vn(),
      ke = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      eu = !0,
      Jm = /^#[a-zA-Z0-9\-_]+$/;
    Rt.define(
      "dropdown",
      (tu.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Rt.env(),
          i = !1,
          a,
          s = Rt.env.touch,
          c = ".w-dropdown",
          f = "w--open",
          h = Zm.triggers,
          v = 900,
          E = "focusout" + c,
          _ = "keydown" + c,
          T = "mouseenter" + c,
          O = "mousemove" + c,
          D = "mouseleave" + c,
          b = (s ? "click" : "mouseup") + c,
          R = "w-close" + c,
          I = "setting" + c,
          L = e(document),
          x;
        (n.ready = P),
          (n.design = function () {
            i && p(), (i = !1), P();
          }),
          (n.preview = function () {
            (i = !0), P();
          });
        function P() {
          (a = o && Rt.env("design")), (x = L.find(c)), x.each(X);
        }
        function X(d, B) {
          var k = e(B),
            C = e.data(B, c);
          C ||
            (C = e.data(B, c, {
              open: !1,
              el: k,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = G(C)),
            (C.mouseLeave = Z(C)),
            (C.mouseUpOutside = q(C)),
            (C.mouseMoveOutside = F(C)),
            z(C);
          var ae = C.toggle.attr("id"),
            Oe = C.list.attr("id");
          ae || (ae = "w-dropdown-toggle-" + d),
            Oe || (Oe = "w-dropdown-list-" + d),
            C.toggle.attr("id", ae),
            C.toggle.attr("aria-controls", Oe),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", Oe),
            C.list.attr("aria-labelledby", ae),
            C.links.each(function (Ve, Je) {
              Je.hasAttribute("tabindex") || Je.setAttribute("tabindex", "0"),
                Jm.test(Je.hash) &&
                  Je.addEventListener("click", w.bind(null, C));
            }),
            C.el.off(c),
            C.toggle.off(c),
            C.nav && C.nav.off(c);
          var ce = ee(C, eu);
          a && C.el.on(I, Y(C)),
            a ||
              (o && ((C.hovering = !1), w(C)),
              C.config.hover && C.toggle.on(T, $(C)),
              C.el.on(R, ce),
              C.el.on(_, j(C)),
              C.el.on(E, U(C)),
              C.toggle.on(b, ce),
              C.toggle.on(_, W(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(R, ce));
        }
        function z(d) {
          var B = Number(d.el.css("z-index"));
          (d.manageZ = B === v || B === v + 1),
            (d.config = {
              hover: d.el.attr("data-hover") === "true" && !s,
              delay: d.el.attr("data-delay"),
            });
        }
        function Y(d) {
          return function (B, k) {
            (k = k || {}),
              z(d),
              k.open === !0 && V(d, !0),
              k.open === !1 && w(d, { immediate: !0 });
          };
        }
        function ee(d, B) {
          return r(function (k) {
            if (d.open || (k && k.type === "w-close"))
              return w(d, { forceClose: B });
            V(d);
          });
        }
        function V(d) {
          if (!d.open) {
            M(d),
              (d.open = !0),
              d.list.addClass(f),
              d.toggle.addClass(f),
              d.toggle.attr("aria-expanded", "true"),
              h.intro(0, d.el[0]),
              Rt.redraw.up(),
              d.manageZ && d.el.css("z-index", v + 1);
            var B = Rt.env("editor");
            a || L.on(b, d.mouseUpOutside),
              d.hovering && !B && d.el.on(D, d.mouseLeave),
              d.hovering && B && L.on(O, d.mouseMoveOutside),
              window.clearTimeout(d.delayId);
          }
        }
        function w(d, { immediate: B, forceClose: k } = {}) {
          if (d.open && !(d.config.hover && d.hovering && !k)) {
            d.toggle.attr("aria-expanded", "false"), (d.open = !1);
            var C = d.config;
            if (
              (h.outro(0, d.el[0]),
              L.off(b, d.mouseUpOutside),
              L.off(O, d.mouseMoveOutside),
              d.el.off(D, d.mouseLeave),
              window.clearTimeout(d.delayId),
              !C.delay || B)
            )
              return d.complete();
            d.delayId = window.setTimeout(d.complete, C.delay);
          }
        }
        function p() {
          L.find(c).each(function (d, B) {
            e(B).triggerHandler(R);
          });
        }
        function M(d) {
          var B = d.el[0];
          x.each(function (k, C) {
            var ae = e(C);
            ae.is(B) || ae.has(B).length || ae.triggerHandler(R);
          });
        }
        function q(d) {
          return (
            d.mouseUpOutside && L.off(b, d.mouseUpOutside),
            r(function (B) {
              if (d.open) {
                var k = e(B.target);
                if (!k.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(d.el[0], k.parents(c)) === -1,
                    ae = Rt.env("editor");
                  if (C) {
                    if (ae) {
                      var Oe =
                          k.parents().length === 1 &&
                          k.parents("svg").length === 1,
                        ce = k.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Oe || ce) return;
                    }
                    w(d);
                  }
                }
              }
            })
          );
        }
        function G(d) {
          return function () {
            d.list.removeClass(f),
              d.toggle.removeClass(f),
              d.manageZ && d.el.css("z-index", "");
          };
        }
        function $(d) {
          return function () {
            (d.hovering = !0), V(d);
          };
        }
        function Z(d) {
          return function () {
            (d.hovering = !1), d.links.is(":focus") || w(d);
          };
        }
        function F(d) {
          return r(function (B) {
            if (d.open) {
              var k = e(B.target),
                C = e.inArray(d.el[0], k.parents(c)) === -1;
              if (C) {
                var ae = k.parents(".w-editor-bem-EditorHoverControls").length,
                  Oe = k.parents(".w-editor-bem-RTToolbar").length,
                  ce = e(".w-editor-bem-EditorOverlay"),
                  Ve =
                    ce.find(".w-editor-edit-outline").length ||
                    ce.find(".w-editor-bem-RTToolbar").length;
                if (ae || Oe || Ve) return;
                (d.hovering = !1), w(d);
              }
            }
          });
        }
        function j(d) {
          return function (B) {
            if (!(a || !d.open))
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case ke.HOME:
                  return d.open
                    ? ((d.selectedIdx = 0), K(d), B.preventDefault())
                    : void 0;
                case ke.END:
                  return d.open
                    ? ((d.selectedIdx = d.links.length - 1),
                      K(d),
                      B.preventDefault())
                    : void 0;
                case ke.ESCAPE:
                  return w(d), d.toggle.focus(), B.stopPropagation();
                case ke.ARROW_RIGHT:
                case ke.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    K(d),
                    B.preventDefault()
                  );
                case ke.ARROW_LEFT:
                case ke.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    K(d),
                    B.preventDefault()
                  );
              }
          };
        }
        function K(d) {
          d.links[d.selectedIdx] && d.links[d.selectedIdx].focus();
        }
        function W(d) {
          var B = ee(d, eu);
          return function (k) {
            if (!a) {
              if (!d.open)
                switch (k.keyCode) {
                  case ke.ARROW_UP:
                  case ke.ARROW_DOWN:
                    return k.stopPropagation();
                }
              switch (k.keyCode) {
                case ke.SPACE:
                case ke.ENTER:
                  return B(), k.stopPropagation(), k.preventDefault();
              }
            }
          };
        }
        function U(d) {
          return r(function (B) {
            var { relatedTarget: k, target: C } = B,
              ae = d.el[0],
              Oe = ae.contains(k) || ae.contains(C);
            return Oe || w(d), B.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var iu = u((vB, nu) => {
    var gt = Me(),
      eI = vn();
    gt.define(
      "tabs",
      (nu.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          o,
          i,
          a = gt.env,
          s = a.safari,
          c = a(),
          f = "data-w-tab",
          h = "data-w-pane",
          v = ".w-tabs",
          E = "w--current",
          _ = "w--tab-active",
          T = eI.triggers,
          O = !1;
        (t.ready = t.design = t.preview = D),
          (t.redraw = function () {
            (O = !0), D(), (O = !1);
          }),
          (t.destroy = function () {
            (o = n.find(v)), o.length && (o.each(I), b());
          });
        function D() {
          (i = c && gt.env("design")),
            (o = n.find(v)),
            o.length &&
              (o.each(L), gt.env("preview") && !O && o.each(I), b(), R());
        }
        function b() {
          gt.redraw.off(t.redraw);
        }
        function R() {
          gt.redraw.on(t.redraw);
        }
        function I(V, w) {
          var p = e.data(w, v);
          p &&
            (p.links && p.links.each(T.reset),
            p.panes && p.panes.each(T.reset));
        }
        function L(V, w) {
          var p = v.substr(1) + "-" + V,
            M = e(w),
            q = e.data(w, v);
          if (
            (q || (q = e.data(w, v, { el: M, config: {} })),
            (q.current = null),
            (q.tabIdentifier = p + "-" + f),
            (q.paneIdentifier = p + "-" + h),
            (q.menu = M.children(".w-tab-menu")),
            (q.links = q.menu.children(".w-tab-link")),
            (q.content = M.children(".w-tab-content")),
            (q.panes = q.content.children(".w-tab-pane")),
            q.el.off(v),
            q.links.off(v),
            q.menu.attr("role", "tablist"),
            q.links.attr("tabindex", "-1"),
            x(q),
            !i)
          ) {
            q.links.on("click" + v, X(q)), q.links.on("keydown" + v, z(q));
            var G = q.links.filter("." + E),
              $ = G.attr(f);
            $ && Y(q, { tab: $, immediate: !0 });
          }
        }
        function x(V) {
          var w = {};
          w.easing = V.el.attr("data-easing") || "ease";
          var p = parseInt(V.el.attr("data-duration-in"), 10);
          p = w.intro = p === p ? p : 0;
          var M = parseInt(V.el.attr("data-duration-out"), 10);
          (M = w.outro = M === M ? M : 0),
            (w.immediate = !p && !M),
            (V.config = w);
        }
        function P(V) {
          var w = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (p) => p.getAttribute(f) === w,
            null
          );
        }
        function X(V) {
          return function (w) {
            w.preventDefault();
            var p = w.currentTarget.getAttribute(f);
            p && Y(V, { tab: p });
          };
        }
        function z(V) {
          return function (w) {
            var p = P(V),
              M = w.key,
              q = {
                ArrowLeft: p - 1,
                ArrowUp: p - 1,
                ArrowRight: p + 1,
                ArrowDown: p + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (M in q) {
              w.preventDefault();
              var G = q[M];
              G === -1 && (G = V.links.length - 1),
                G === V.links.length && (G = 0);
              var $ = V.links[G],
                Z = $.getAttribute(f);
              Z && Y(V, { tab: Z });
            }
          };
        }
        function Y(V, w) {
          w = w || {};
          var p = V.config,
            M = p.easing,
            q = w.tab;
          if (q !== V.current) {
            V.current = q;
            var G;
            V.links.each(function (U, d) {
              var B = e(d);
              if (w.immediate || p.immediate) {
                var k = V.panes[U];
                d.id || (d.id = V.tabIdentifier + "-" + U),
                  k.id || (k.id = V.paneIdentifier + "-" + U),
                  (d.href = "#" + k.id),
                  d.setAttribute("role", "tab"),
                  d.setAttribute("aria-controls", k.id),
                  d.setAttribute("aria-selected", "false"),
                  k.setAttribute("role", "tabpanel"),
                  k.setAttribute("aria-labelledby", d.id);
              }
              d.getAttribute(f) === q
                ? ((G = d),
                  B.addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(T.intro))
                : B.hasClass(E) &&
                  B.removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(T.outro);
            });
            var $ = [],
              Z = [];
            V.panes.each(function (U, d) {
              var B = e(d);
              d.getAttribute(f) === q ? $.push(d) : B.hasClass(_) && Z.push(d);
            });
            var F = e($),
              j = e(Z);
            if (w.immediate || p.immediate) {
              F.addClass(_).each(T.intro),
                j.removeClass(_),
                O || gt.redraw.up();
              return;
            } else {
              var K = window.scrollX,
                W = window.scrollY;
              G.focus(), window.scrollTo(K, W);
            }
            j.length && p.outro
              ? (j.each(T.outro),
                r(j)
                  .add("opacity " + p.outro + "ms " + M, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => ee(p, j, F)))
              : ee(p, j, F);
          }
        }
        function ee(V, w, p) {
          if (
            (w
              .removeClass(_)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            p.addClass(_).each(T.intro),
            gt.redraw.up(),
            !V.intro)
          )
            return r(p).set({ opacity: 1 });
          r(p)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  var ou = u((EB, dt) => {
    function ji(e) {
      return (
        (dt.exports = ji =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        ji(e)
      );
    }
    (dt.exports = ji),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var jt = u((hB, Tr) => {
    var tI = ou().default;
    function au(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (au = function (o) {
        return o ? r : t;
      })(e);
    }
    function rI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (tI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = au(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Tr.exports = rI),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var it = u((gB, Or) => {
    function nI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Or.exports = nI),
      (Or.exports.__esModule = !0),
      (Or.exports.default = Or.exports);
  });
  var Ee = u((_B, su) => {
    var En = function (e) {
      return e && e.Math == Math && e;
    };
    su.exports =
      En(typeof globalThis == "object" && globalThis) ||
      En(typeof window == "object" && window) ||
      En(typeof self == "object" && self) ||
      En(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var kt = u((yB, uu) => {
    uu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ct = u((mB, cu) => {
    var iI = kt();
    cu.exports = !iI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = u((IB, lu) => {
    var br = Function.prototype.call;
    lu.exports = br.bind
      ? br.bind(br)
      : function () {
          return br.apply(br, arguments);
        };
  });
  var vu = u((pu) => {
    "use strict";
    var fu = {}.propertyIsEnumerable,
      du = Object.getOwnPropertyDescriptor,
      oI = du && !fu.call({ 1: 2 }, 1);
    pu.f = oI
      ? function (t) {
          var r = du(this, t);
          return !!r && r.enumerable;
        }
      : fu;
  });
  var ki = u((OB, Eu) => {
    Eu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ke = u((bB, gu) => {
    var hu = Function.prototype,
      Ki = hu.bind,
      zi = hu.call,
      aI = Ki && Ki.bind(zi);
    gu.exports = Ki
      ? function (e) {
          return e && aI(zi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return zi.apply(e, arguments);
            }
          );
        };
  });
  var mu = u((SB, yu) => {
    var _u = Ke(),
      sI = _u({}.toString),
      uI = _u("".slice);
    yu.exports = function (e) {
      return uI(sI(e), 8, -1);
    };
  });
  var Tu = u((AB, Iu) => {
    var cI = Ee(),
      lI = Ke(),
      fI = kt(),
      dI = mu(),
      Yi = cI.Object,
      pI = lI("".split);
    Iu.exports = fI(function () {
      return !Yi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return dI(e) == "String" ? pI(e, "") : Yi(e);
        }
      : Yi;
  });
  var $i = u((wB, Ou) => {
    var vI = Ee(),
      EI = vI.TypeError;
    Ou.exports = function (e) {
      if (e == null) throw EI("Can't call method on " + e);
      return e;
    };
  });
  var Sr = u((RB, bu) => {
    var hI = Tu(),
      gI = $i();
    bu.exports = function (e) {
      return hI(gI(e));
    };
  });
  var ot = u((CB, Su) => {
    Su.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Kt = u((NB, Au) => {
    var _I = ot();
    Au.exports = function (e) {
      return typeof e == "object" ? e !== null : _I(e);
    };
  });
  var Ar = u((qB, wu) => {
    var Qi = Ee(),
      yI = ot(),
      mI = function (e) {
        return yI(e) ? e : void 0;
      };
    wu.exports = function (e, t) {
      return arguments.length < 2 ? mI(Qi[e]) : Qi[e] && Qi[e][t];
    };
  });
  var Cu = u((xB, Ru) => {
    var II = Ke();
    Ru.exports = II({}.isPrototypeOf);
  });
  var qu = u((LB, Nu) => {
    var TI = Ar();
    Nu.exports = TI("navigator", "userAgent") || "";
  });
  var Gu = u((PB, Fu) => {
    var Du = Ee(),
      Zi = qu(),
      xu = Du.process,
      Lu = Du.Deno,
      Pu = (xu && xu.versions) || (Lu && Lu.version),
      Mu = Pu && Pu.v8,
      ze,
      gn;
    Mu &&
      ((ze = Mu.split(".")),
      (gn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1])));
    !gn &&
      Zi &&
      ((ze = Zi.match(/Edge\/(\d+)/)),
      (!ze || ze[1] >= 74) &&
        ((ze = Zi.match(/Chrome\/(\d+)/)), ze && (gn = +ze[1])));
    Fu.exports = gn;
  });
  var Ji = u((MB, Xu) => {
    var Uu = Gu(),
      OI = kt();
    Xu.exports =
      !!Object.getOwnPropertySymbols &&
      !OI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Uu && Uu < 41)
        );
      });
  });
  var eo = u((DB, Vu) => {
    var bI = Ji();
    Vu.exports = bI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var to = u((FB, Wu) => {
    var SI = Ee(),
      AI = Ar(),
      wI = ot(),
      RI = Cu(),
      CI = eo(),
      NI = SI.Object;
    Wu.exports = CI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = AI("Symbol");
          return wI(t) && RI(t.prototype, NI(e));
        };
  });
  var Hu = u((GB, Bu) => {
    var qI = Ee(),
      xI = qI.String;
    Bu.exports = function (e) {
      try {
        return xI(e);
      } catch {
        return "Object";
      }
    };
  });
  var ku = u((UB, ju) => {
    var LI = Ee(),
      PI = ot(),
      MI = Hu(),
      DI = LI.TypeError;
    ju.exports = function (e) {
      if (PI(e)) return e;
      throw DI(MI(e) + " is not a function");
    };
  });
  var zu = u((XB, Ku) => {
    var FI = ku();
    Ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : FI(r);
    };
  });
  var $u = u((VB, Yu) => {
    var GI = Ee(),
      ro = hn(),
      no = ot(),
      io = Kt(),
      UI = GI.TypeError;
    Yu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && no((r = e.toString)) && !io((n = ro(r, e)))) ||
        (no((r = e.valueOf)) && !io((n = ro(r, e)))) ||
        (t !== "string" && no((r = e.toString)) && !io((n = ro(r, e))))
      )
        return n;
      throw UI("Can't convert object to primitive value");
    };
  });
  var Zu = u((WB, Qu) => {
    Qu.exports = !1;
  });
  var _n = u((BB, ec) => {
    var Ju = Ee(),
      XI = Object.defineProperty;
    ec.exports = function (e, t) {
      try {
        XI(Ju, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Ju[e] = t;
      }
      return t;
    };
  });
  var yn = u((HB, rc) => {
    var VI = Ee(),
      WI = _n(),
      tc = "__core-js_shared__",
      BI = VI[tc] || WI(tc, {});
    rc.exports = BI;
  });
  var oo = u((jB, ic) => {
    var HI = Zu(),
      nc = yn();
    (ic.exports = function (e, t) {
      return nc[e] || (nc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: HI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ac = u((kB, oc) => {
    var jI = Ee(),
      kI = $i(),
      KI = jI.Object;
    oc.exports = function (e) {
      return KI(kI(e));
    };
  });
  var _t = u((KB, sc) => {
    var zI = Ke(),
      YI = ac(),
      $I = zI({}.hasOwnProperty);
    sc.exports =
      Object.hasOwn ||
      function (t, r) {
        return $I(YI(t), r);
      };
  });
  var ao = u((zB, uc) => {
    var QI = Ke(),
      ZI = 0,
      JI = Math.random(),
      eT = QI((1).toString);
    uc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + eT(++ZI + JI, 36);
    };
  });
  var so = u((YB, pc) => {
    var tT = Ee(),
      rT = oo(),
      cc = _t(),
      nT = ao(),
      lc = Ji(),
      dc = eo(),
      zt = rT("wks"),
      Nt = tT.Symbol,
      fc = Nt && Nt.for,
      iT = dc ? Nt : (Nt && Nt.withoutSetter) || nT;
    pc.exports = function (e) {
      if (!cc(zt, e) || !(lc || typeof zt[e] == "string")) {
        var t = "Symbol." + e;
        lc && cc(Nt, e)
          ? (zt[e] = Nt[e])
          : dc && fc
          ? (zt[e] = fc(t))
          : (zt[e] = iT(t));
      }
      return zt[e];
    };
  });
  var gc = u(($B, hc) => {
    var oT = Ee(),
      aT = hn(),
      vc = Kt(),
      Ec = to(),
      sT = zu(),
      uT = $u(),
      cT = so(),
      lT = oT.TypeError,
      fT = cT("toPrimitive");
    hc.exports = function (e, t) {
      if (!vc(e) || Ec(e)) return e;
      var r = sT(e, fT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = aT(r, e, t)), !vc(n) || Ec(n))
        )
          return n;
        throw lT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), uT(e, t);
    };
  });
  var uo = u((QB, _c) => {
    var dT = gc(),
      pT = to();
    _c.exports = function (e) {
      var t = dT(e, "string");
      return pT(t) ? t : t + "";
    };
  });
  var lo = u((ZB, mc) => {
    var vT = Ee(),
      yc = Kt(),
      co = vT.document,
      ET = yc(co) && yc(co.createElement);
    mc.exports = function (e) {
      return ET ? co.createElement(e) : {};
    };
  });
  var fo = u((JB, Ic) => {
    var hT = Ct(),
      gT = kt(),
      _T = lo();
    Ic.exports =
      !hT &&
      !gT(function () {
        return (
          Object.defineProperty(_T("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var po = u((Oc) => {
    var yT = Ct(),
      mT = hn(),
      IT = vu(),
      TT = ki(),
      OT = Sr(),
      bT = uo(),
      ST = _t(),
      AT = fo(),
      Tc = Object.getOwnPropertyDescriptor;
    Oc.f = yT
      ? Tc
      : function (t, r) {
          if (((t = OT(t)), (r = bT(r)), AT))
            try {
              return Tc(t, r);
            } catch {}
          if (ST(t, r)) return TT(!mT(IT.f, t, r), t[r]);
        };
  });
  var wr = u((tH, Sc) => {
    var bc = Ee(),
      wT = Kt(),
      RT = bc.String,
      CT = bc.TypeError;
    Sc.exports = function (e) {
      if (wT(e)) return e;
      throw CT(RT(e) + " is not an object");
    };
  });
  var Rr = u((Rc) => {
    var NT = Ee(),
      qT = Ct(),
      xT = fo(),
      Ac = wr(),
      LT = uo(),
      PT = NT.TypeError,
      wc = Object.defineProperty;
    Rc.f = qT
      ? wc
      : function (t, r, n) {
          if ((Ac(t), (r = LT(r)), Ac(n), xT))
            try {
              return wc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw PT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var mn = u((nH, Cc) => {
    var MT = Ct(),
      DT = Rr(),
      FT = ki();
    Cc.exports = MT
      ? function (e, t, r) {
          return DT.f(e, t, FT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var Eo = u((iH, Nc) => {
    var GT = Ke(),
      UT = ot(),
      vo = yn(),
      XT = GT(Function.toString);
    UT(vo.inspectSource) ||
      (vo.inspectSource = function (e) {
        return XT(e);
      });
    Nc.exports = vo.inspectSource;
  });
  var Lc = u((oH, xc) => {
    var VT = Ee(),
      WT = ot(),
      BT = Eo(),
      qc = VT.WeakMap;
    xc.exports = WT(qc) && /native code/.test(BT(qc));
  });
  var ho = u((aH, Mc) => {
    var HT = oo(),
      jT = ao(),
      Pc = HT("keys");
    Mc.exports = function (e) {
      return Pc[e] || (Pc[e] = jT(e));
    };
  });
  var In = u((sH, Dc) => {
    Dc.exports = {};
  });
  var Wc = u((uH, Vc) => {
    var kT = Lc(),
      Xc = Ee(),
      go = Ke(),
      KT = Kt(),
      zT = mn(),
      _o = _t(),
      yo = yn(),
      YT = ho(),
      $T = In(),
      Fc = "Object already initialized",
      Io = Xc.TypeError,
      QT = Xc.WeakMap,
      Tn,
      Cr,
      On,
      ZT = function (e) {
        return On(e) ? Cr(e) : Tn(e, {});
      },
      JT = function (e) {
        return function (t) {
          var r;
          if (!KT(t) || (r = Cr(t)).type !== e)
            throw Io("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    kT || yo.state
      ? ((yt = yo.state || (yo.state = new QT())),
        (Gc = go(yt.get)),
        (mo = go(yt.has)),
        (Uc = go(yt.set)),
        (Tn = function (e, t) {
          if (mo(yt, e)) throw new Io(Fc);
          return (t.facade = e), Uc(yt, e, t), t;
        }),
        (Cr = function (e) {
          return Gc(yt, e) || {};
        }),
        (On = function (e) {
          return mo(yt, e);
        }))
      : ((qt = YT("state")),
        ($T[qt] = !0),
        (Tn = function (e, t) {
          if (_o(e, qt)) throw new Io(Fc);
          return (t.facade = e), zT(e, qt, t), t;
        }),
        (Cr = function (e) {
          return _o(e, qt) ? e[qt] : {};
        }),
        (On = function (e) {
          return _o(e, qt);
        }));
    var yt, Gc, mo, Uc, qt;
    Vc.exports = { set: Tn, get: Cr, has: On, enforce: ZT, getterFor: JT };
  });
  var jc = u((cH, Hc) => {
    var To = Ct(),
      eO = _t(),
      Bc = Function.prototype,
      tO = To && Object.getOwnPropertyDescriptor,
      Oo = eO(Bc, "name"),
      rO = Oo && function () {}.name === "something",
      nO = Oo && (!To || (To && tO(Bc, "name").configurable));
    Hc.exports = { EXISTS: Oo, PROPER: rO, CONFIGURABLE: nO };
  });
  var $c = u((lH, Yc) => {
    var iO = Ee(),
      kc = ot(),
      oO = _t(),
      Kc = mn(),
      aO = _n(),
      sO = Eo(),
      zc = Wc(),
      uO = jc().CONFIGURABLE,
      cO = zc.get,
      lO = zc.enforce,
      fO = String(String).split("String");
    (Yc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (kc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!oO(r, "name") || (uO && r.name !== s)) && Kc(r, "name", s),
          (c = lO(r)),
          c.source || (c.source = fO.join(typeof s == "string" ? s : ""))),
        e === iO)
      ) {
        i ? (e[t] = r) : aO(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (kc(this) && cO(this).source) || sO(this);
    });
  });
  var bo = u((fH, Qc) => {
    var dO = Math.ceil,
      pO = Math.floor;
    Qc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? pO : dO)(t);
    };
  });
  var Jc = u((dH, Zc) => {
    var vO = bo(),
      EO = Math.max,
      hO = Math.min;
    Zc.exports = function (e, t) {
      var r = vO(e);
      return r < 0 ? EO(r + t, 0) : hO(r, t);
    };
  });
  var tl = u((pH, el) => {
    var gO = bo(),
      _O = Math.min;
    el.exports = function (e) {
      return e > 0 ? _O(gO(e), 9007199254740991) : 0;
    };
  });
  var nl = u((vH, rl) => {
    var yO = tl();
    rl.exports = function (e) {
      return yO(e.length);
    };
  });
  var So = u((EH, ol) => {
    var mO = Sr(),
      IO = Jc(),
      TO = nl(),
      il = function (e) {
        return function (t, r, n) {
          var o = mO(t),
            i = TO(o),
            a = IO(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ol.exports = { includes: il(!0), indexOf: il(!1) };
  });
  var wo = u((hH, sl) => {
    var OO = Ke(),
      Ao = _t(),
      bO = Sr(),
      SO = So().indexOf,
      AO = In(),
      al = OO([].push);
    sl.exports = function (e, t) {
      var r = bO(e),
        n = 0,
        o = [],
        i;
      for (i in r) !Ao(AO, i) && Ao(r, i) && al(o, i);
      for (; t.length > n; ) Ao(r, (i = t[n++])) && (~SO(o, i) || al(o, i));
      return o;
    };
  });
  var bn = u((gH, ul) => {
    ul.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ll = u((cl) => {
    var wO = wo(),
      RO = bn(),
      CO = RO.concat("length", "prototype");
    cl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return wO(t, CO);
      };
  });
  var dl = u((fl) => {
    fl.f = Object.getOwnPropertySymbols;
  });
  var vl = u((mH, pl) => {
    var NO = Ar(),
      qO = Ke(),
      xO = ll(),
      LO = dl(),
      PO = wr(),
      MO = qO([].concat);
    pl.exports =
      NO("Reflect", "ownKeys") ||
      function (t) {
        var r = xO.f(PO(t)),
          n = LO.f;
        return n ? MO(r, n(t)) : r;
      };
  });
  var hl = u((IH, El) => {
    var DO = _t(),
      FO = vl(),
      GO = po(),
      UO = Rr();
    El.exports = function (e, t) {
      for (var r = FO(t), n = UO.f, o = GO.f, i = 0; i < r.length; i++) {
        var a = r[i];
        DO(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var _l = u((TH, gl) => {
    var XO = kt(),
      VO = ot(),
      WO = /#|\.prototype\./,
      Nr = function (e, t) {
        var r = HO[BO(e)];
        return r == kO ? !0 : r == jO ? !1 : VO(t) ? XO(t) : !!t;
      },
      BO = (Nr.normalize = function (e) {
        return String(e).replace(WO, ".").toLowerCase();
      }),
      HO = (Nr.data = {}),
      jO = (Nr.NATIVE = "N"),
      kO = (Nr.POLYFILL = "P");
    gl.exports = Nr;
  });
  var ml = u((OH, yl) => {
    var Ro = Ee(),
      KO = po().f,
      zO = mn(),
      YO = $c(),
      $O = _n(),
      QO = hl(),
      ZO = _l();
    yl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        c,
        f,
        h;
      if (
        (n
          ? (a = Ro)
          : o
          ? (a = Ro[r] || $O(r, {}))
          : (a = (Ro[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((h = KO(a, s)), (c = h && h.value)) : (c = a[s]),
            (i = ZO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            QO(f, c);
          }
          (e.sham || (c && c.sham)) && zO(f, "sham", !0), YO(a, s, f, e);
        }
    };
  });
  var Tl = u((bH, Il) => {
    var JO = wo(),
      eb = bn();
    Il.exports =
      Object.keys ||
      function (t) {
        return JO(t, eb);
      };
  });
  var bl = u((SH, Ol) => {
    var tb = Ct(),
      rb = Rr(),
      nb = wr(),
      ib = Sr(),
      ob = Tl();
    Ol.exports = tb
      ? Object.defineProperties
      : function (t, r) {
          nb(t);
          for (var n = ib(r), o = ob(r), i = o.length, a = 0, s; i > a; )
            rb.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var Al = u((AH, Sl) => {
    var ab = Ar();
    Sl.exports = ab("document", "documentElement");
  });
  var Pl = u((wH, Ll) => {
    var sb = wr(),
      ub = bl(),
      wl = bn(),
      cb = In(),
      lb = Al(),
      fb = lo(),
      db = ho(),
      Rl = ">",
      Cl = "<",
      No = "prototype",
      qo = "script",
      ql = db("IE_PROTO"),
      Co = function () {},
      xl = function (e) {
        return Cl + qo + Rl + e + Cl + "/" + qo + Rl;
      },
      Nl = function (e) {
        e.write(xl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      pb = function () {
        var e = fb("iframe"),
          t = "java" + qo + ":",
          r;
        return (
          (e.style.display = "none"),
          lb.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(xl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Sn,
      An = function () {
        try {
          Sn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && Sn
              ? Nl(Sn)
              : pb()
            : Nl(Sn);
        for (var e = wl.length; e--; ) delete An[No][wl[e]];
        return An();
      };
    cb[ql] = !0;
    Ll.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Co[No] = sb(t)), (n = new Co()), (Co[No] = null), (n[ql] = t))
            : (n = An()),
          r === void 0 ? n : ub(n, r)
        );
      };
  });
  var Dl = u((RH, Ml) => {
    var vb = so(),
      Eb = Pl(),
      hb = Rr(),
      xo = vb("unscopables"),
      Lo = Array.prototype;
    Lo[xo] == null && hb.f(Lo, xo, { configurable: !0, value: Eb(null) });
    Ml.exports = function (e) {
      Lo[xo][e] = !0;
    };
  });
  var Fl = u(() => {
    "use strict";
    var gb = ml(),
      _b = So().includes,
      yb = Dl();
    gb(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return _b(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    yb("includes");
  });
  var Ul = u((qH, Gl) => {
    var mb = Ee(),
      Ib = Ke();
    Gl.exports = function (e, t) {
      return Ib(mb[e].prototype[t]);
    };
  });
  var Vl = u((xH, Xl) => {
    Fl();
    var Tb = Ul();
    Xl.exports = Tb("Array", "includes");
  });
  var Bl = u((LH, Wl) => {
    var Ob = Vl();
    Wl.exports = Ob;
  });
  var jl = u((PH, Hl) => {
    var bb = Bl();
    Hl.exports = bb;
  });
  var Kl = u((MH, kl) => {
    var Sb =
      typeof global == "object" && global && global.Object === Object && global;
    kl.exports = Sb;
  });
  var Yl = u((DH, zl) => {
    var Ab = Kl(),
      wb = typeof self == "object" && self && self.Object === Object && self,
      Rb = Ab || wb || Function("return this")();
    zl.exports = Rb;
  });
  var Po = u((FH, $l) => {
    var Cb = Yl(),
      Nb = Cb.Symbol;
    $l.exports = Nb;
  });
  var ef = u((GH, Jl) => {
    var Ql = Po(),
      Zl = Object.prototype,
      qb = Zl.hasOwnProperty,
      xb = Zl.toString,
      qr = Ql ? Ql.toStringTag : void 0;
    function Lb(e) {
      var t = qb.call(e, qr),
        r = e[qr];
      try {
        e[qr] = void 0;
        var n = !0;
      } catch {}
      var o = xb.call(e);
      return n && (t ? (e[qr] = r) : delete e[qr]), o;
    }
    Jl.exports = Lb;
  });
  var rf = u((UH, tf) => {
    var Pb = Object.prototype,
      Mb = Pb.toString;
    function Db(e) {
      return Mb.call(e);
    }
    tf.exports = Db;
  });
  var sf = u((XH, af) => {
    var nf = Po(),
      Fb = ef(),
      Gb = rf(),
      Ub = "[object Null]",
      Xb = "[object Undefined]",
      of = nf ? nf.toStringTag : void 0;
    function Vb(e) {
      return e == null
        ? e === void 0
          ? Xb
          : Ub
        : of && of in Object(e)
        ? Fb(e)
        : Gb(e);
    }
    af.exports = Vb;
  });
  var cf = u((VH, uf) => {
    function Wb(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    uf.exports = Wb;
  });
  var ff = u((WH, lf) => {
    var Bb = cf(),
      Hb = Bb(Object.getPrototypeOf, Object);
    lf.exports = Hb;
  });
  var pf = u((BH, df) => {
    function jb(e) {
      return e != null && typeof e == "object";
    }
    df.exports = jb;
  });
  var Mo = u((HH, Ef) => {
    var kb = sf(),
      Kb = ff(),
      zb = pf(),
      Yb = "[object Object]",
      $b = Function.prototype,
      Qb = Object.prototype,
      vf = $b.toString,
      Zb = Qb.hasOwnProperty,
      Jb = vf.call(Object);
    function eS(e) {
      if (!zb(e) || kb(e) != Yb) return !1;
      var t = Kb(e);
      if (t === null) return !0;
      var r = Zb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && vf.call(r) == Jb;
    }
    Ef.exports = eS;
  });
  var hf = u((Do) => {
    "use strict";
    Object.defineProperty(Do, "__esModule", { value: !0 });
    Do.default = tS;
    function tS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var gf = u((Go, Fo) => {
    "use strict";
    Object.defineProperty(Go, "__esModule", { value: !0 });
    var rS = hf(),
      nS = iS(rS);
    function iS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Yt;
    typeof self < "u"
      ? (Yt = self)
      : typeof window < "u"
      ? (Yt = window)
      : typeof global < "u"
      ? (Yt = global)
      : typeof Fo < "u"
      ? (Yt = Fo)
      : (Yt = Function("return this")());
    var oS = (0, nS.default)(Yt);
    Go.default = oS;
  });
  var Uo = u((xr) => {
    "use strict";
    xr.__esModule = !0;
    xr.ActionTypes = void 0;
    xr.default = If;
    var aS = Mo(),
      sS = mf(aS),
      uS = gf(),
      _f = mf(uS);
    function mf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var yf = (xr.ActionTypes = { INIT: "@@redux/INIT" });
    function If(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(If)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function h() {
        return i;
      }
      function v(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var D = !0;
        return (
          f(),
          s.push(O),
          function () {
            if (D) {
              (D = !1), f();
              var R = s.indexOf(O);
              s.splice(R, 1);
            }
          }
        );
      }
      function E(O) {
        if (!(0, sS.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, O));
        } finally {
          c = !1;
        }
        for (var D = (a = s), b = 0; b < D.length; b++) D[b]();
        return O;
      }
      function _(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = O), E({ type: yf.INIT });
      }
      function T() {
        var O,
          D = v;
        return (
          (O = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function I() {
                R.next && R.next(h());
              }
              I();
              var L = D(I);
              return { unsubscribe: L };
            },
          }),
          (O[_f.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        E({ type: yf.INIT }),
        (n = { dispatch: E, subscribe: v, getState: h, replaceReducer: _ }),
        (n[_f.default] = T),
        n
      );
    }
  });
  var Vo = u((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    Xo.default = cS;
    function cS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var bf = u((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = vS;
    var Tf = Uo(),
      lS = Mo(),
      zH = Of(lS),
      fS = Vo(),
      YH = Of(fS);
    function Of(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function dS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function pS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Tf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Tf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function vS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        pS(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var E = !1, _ = {}, T = 0; T < i.length; T++) {
          var O = i[T],
            D = r[O],
            b = f[O],
            R = D(b, h);
          if (typeof R > "u") {
            var I = dS(O, h);
            throw new Error(I);
          }
          (_[O] = R), (E = E || R !== b);
        }
        return E ? _ : f;
      };
    }
  });
  var Af = u((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = ES;
    function Sf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function ES(e, t) {
      if (typeof e == "function") return Sf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = Sf(a, t));
      }
      return n;
    }
  });
  var jo = u((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = hS;
    function hS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var wf = u((ko) => {
    "use strict";
    ko.__esModule = !0;
    var gS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    ko.default = IS;
    var _S = jo(),
      yS = mS(_S);
    function mS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function IS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            c = s.dispatch,
            f = [],
            h = {
              getState: s.getState,
              dispatch: function (E) {
                return c(E);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(h);
            })),
            (c = yS.default.apply(void 0, f)(s.dispatch)),
            gS({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Ko = u((Ue) => {
    "use strict";
    Ue.__esModule = !0;
    Ue.compose =
      Ue.applyMiddleware =
      Ue.bindActionCreators =
      Ue.combineReducers =
      Ue.createStore =
        void 0;
    var TS = Uo(),
      OS = $t(TS),
      bS = bf(),
      SS = $t(bS),
      AS = Af(),
      wS = $t(AS),
      RS = wf(),
      CS = $t(RS),
      NS = jo(),
      qS = $t(NS),
      xS = Vo(),
      ej = $t(xS);
    function $t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ue.createStore = OS.default;
    Ue.combineReducers = SS.default;
    Ue.bindActionCreators = wS.default;
    Ue.applyMiddleware = CS.default;
    Ue.compose = qS.default;
  });
  var Rf = u((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.QuickEffectIds =
      Se.QuickEffectDirectionConsts =
      Se.EventTypeConsts =
      Se.EventLimitAffectedElements =
      Se.EventContinuousMouseAxes =
      Se.EventBasedOn =
      Se.EventAppliesTo =
        void 0;
    var LS = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Se.EventTypeConsts = LS;
    var PS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Se.EventAppliesTo = PS;
    var MS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Se.EventBasedOn = MS;
    var DS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Se.EventContinuousMouseAxes = DS;
    var FS = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Se.EventLimitAffectedElements = FS;
    var GS = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Se.QuickEffectIds = GS;
    var US = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Se.QuickEffectDirectionConsts = US;
  });
  var zo = u((Qt) => {
    "use strict";
    Object.defineProperty(Qt, "__esModule", { value: !0 });
    Qt.ActionTypeConsts = Qt.ActionAppliesTo = void 0;
    var XS = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Qt.ActionTypeConsts = XS;
    var VS = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Qt.ActionAppliesTo = VS;
  });
  var Cf = u((wn) => {
    "use strict";
    Object.defineProperty(wn, "__esModule", { value: !0 });
    wn.InteractionTypeConsts = void 0;
    var WS = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    wn.InteractionTypeConsts = WS;
  });
  var Nf = u((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.ReducedMotionTypes = void 0;
    var BS = zo(),
      {
        TRANSFORM_MOVE: HS,
        TRANSFORM_SCALE: jS,
        TRANSFORM_ROTATE: kS,
        TRANSFORM_SKEW: KS,
        STYLE_SIZE: zS,
        STYLE_FILTER: YS,
        STYLE_FONT_VARIATION: $S,
      } = BS.ActionTypeConsts,
      QS = {
        [HS]: !0,
        [jS]: !0,
        [kS]: !0,
        [KS]: !0,
        [zS]: !0,
        [YS]: !0,
        [$S]: !0,
      };
    Rn.ReducedMotionTypes = QS;
  });
  var qf = u((ne) => {
    "use strict";
    Object.defineProperty(ne, "__esModule", { value: !0 });
    ne.IX2_VIEWPORT_WIDTH_CHANGED =
      ne.IX2_TEST_FRAME_RENDERED =
      ne.IX2_STOP_REQUESTED =
      ne.IX2_SESSION_STOPPED =
      ne.IX2_SESSION_STARTED =
      ne.IX2_SESSION_INITIALIZED =
      ne.IX2_RAW_DATA_IMPORTED =
      ne.IX2_PREVIEW_REQUESTED =
      ne.IX2_PLAYBACK_REQUESTED =
      ne.IX2_PARAMETER_CHANGED =
      ne.IX2_MEDIA_QUERIES_DEFINED =
      ne.IX2_INSTANCE_STARTED =
      ne.IX2_INSTANCE_REMOVED =
      ne.IX2_INSTANCE_ADDED =
      ne.IX2_EVENT_STATE_CHANGED =
      ne.IX2_EVENT_LISTENER_ADDED =
      ne.IX2_ELEMENT_STATE_CHANGED =
      ne.IX2_CLEAR_REQUESTED =
      ne.IX2_ANIMATION_FRAME_CHANGED =
      ne.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var ZS = "IX2_RAW_DATA_IMPORTED";
    ne.IX2_RAW_DATA_IMPORTED = ZS;
    var JS = "IX2_SESSION_INITIALIZED";
    ne.IX2_SESSION_INITIALIZED = JS;
    var eA = "IX2_SESSION_STARTED";
    ne.IX2_SESSION_STARTED = eA;
    var tA = "IX2_SESSION_STOPPED";
    ne.IX2_SESSION_STOPPED = tA;
    var rA = "IX2_PREVIEW_REQUESTED";
    ne.IX2_PREVIEW_REQUESTED = rA;
    var nA = "IX2_PLAYBACK_REQUESTED";
    ne.IX2_PLAYBACK_REQUESTED = nA;
    var iA = "IX2_STOP_REQUESTED";
    ne.IX2_STOP_REQUESTED = iA;
    var oA = "IX2_CLEAR_REQUESTED";
    ne.IX2_CLEAR_REQUESTED = oA;
    var aA = "IX2_EVENT_LISTENER_ADDED";
    ne.IX2_EVENT_LISTENER_ADDED = aA;
    var sA = "IX2_EVENT_STATE_CHANGED";
    ne.IX2_EVENT_STATE_CHANGED = sA;
    var uA = "IX2_ANIMATION_FRAME_CHANGED";
    ne.IX2_ANIMATION_FRAME_CHANGED = uA;
    var cA = "IX2_PARAMETER_CHANGED";
    ne.IX2_PARAMETER_CHANGED = cA;
    var lA = "IX2_INSTANCE_ADDED";
    ne.IX2_INSTANCE_ADDED = lA;
    var fA = "IX2_INSTANCE_STARTED";
    ne.IX2_INSTANCE_STARTED = fA;
    var dA = "IX2_INSTANCE_REMOVED";
    ne.IX2_INSTANCE_REMOVED = dA;
    var pA = "IX2_ELEMENT_STATE_CHANGED";
    ne.IX2_ELEMENT_STATE_CHANGED = pA;
    var vA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ne.IX2_ACTION_LIST_PLAYBACK_CHANGED = vA;
    var EA = "IX2_VIEWPORT_WIDTH_CHANGED";
    ne.IX2_VIEWPORT_WIDTH_CHANGED = EA;
    var hA = "IX2_MEDIA_QUERIES_DEFINED";
    ne.IX2_MEDIA_QUERIES_DEFINED = hA;
    var gA = "IX2_TEST_FRAME_RENDERED";
    ne.IX2_TEST_FRAME_RENDERED = gA;
  });
  var xf = u((N) => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.W_MOD_JS =
      N.W_MOD_IX =
      N.WILL_CHANGE =
      N.WIDTH =
      N.WF_PAGE =
      N.TRANSLATE_Z =
      N.TRANSLATE_Y =
      N.TRANSLATE_X =
      N.TRANSLATE_3D =
      N.TRANSFORM =
      N.SKEW_Y =
      N.SKEW_X =
      N.SKEW =
      N.SIBLINGS =
      N.SCALE_Z =
      N.SCALE_Y =
      N.SCALE_X =
      N.SCALE_3D =
      N.ROTATE_Z =
      N.ROTATE_Y =
      N.ROTATE_X =
      N.RENDER_TRANSFORM =
      N.RENDER_STYLE =
      N.RENDER_PLUGIN =
      N.RENDER_GENERAL =
      N.PRESERVE_3D =
      N.PLAIN_OBJECT =
      N.PARENT =
      N.OPACITY =
      N.IX2_ID_DELIMITER =
      N.IMMEDIATE_CHILDREN =
      N.HTML_ELEMENT =
      N.HEIGHT =
      N.FONT_VARIATION_SETTINGS =
      N.FLEX =
      N.FILTER =
      N.DISPLAY =
      N.CONFIG_Z_VALUE =
      N.CONFIG_Z_UNIT =
      N.CONFIG_Y_VALUE =
      N.CONFIG_Y_UNIT =
      N.CONFIG_X_VALUE =
      N.CONFIG_X_UNIT =
      N.CONFIG_VALUE =
      N.CONFIG_UNIT =
      N.COMMA_DELIMITER =
      N.COLOR =
      N.COLON_DELIMITER =
      N.CHILDREN =
      N.BOUNDARY_SELECTOR =
      N.BORDER_COLOR =
      N.BAR_DELIMITER =
      N.BACKGROUND_COLOR =
      N.BACKGROUND =
      N.AUTO =
      N.ABSTRACT_NODE =
        void 0;
    var _A = "|";
    N.IX2_ID_DELIMITER = _A;
    var yA = "data-wf-page";
    N.WF_PAGE = yA;
    var mA = "w-mod-js";
    N.W_MOD_JS = mA;
    var IA = "w-mod-ix";
    N.W_MOD_IX = IA;
    var TA = ".w-dyn-item";
    N.BOUNDARY_SELECTOR = TA;
    var OA = "xValue";
    N.CONFIG_X_VALUE = OA;
    var bA = "yValue";
    N.CONFIG_Y_VALUE = bA;
    var SA = "zValue";
    N.CONFIG_Z_VALUE = SA;
    var AA = "value";
    N.CONFIG_VALUE = AA;
    var wA = "xUnit";
    N.CONFIG_X_UNIT = wA;
    var RA = "yUnit";
    N.CONFIG_Y_UNIT = RA;
    var CA = "zUnit";
    N.CONFIG_Z_UNIT = CA;
    var NA = "unit";
    N.CONFIG_UNIT = NA;
    var qA = "transform";
    N.TRANSFORM = qA;
    var xA = "translateX";
    N.TRANSLATE_X = xA;
    var LA = "translateY";
    N.TRANSLATE_Y = LA;
    var PA = "translateZ";
    N.TRANSLATE_Z = PA;
    var MA = "translate3d";
    N.TRANSLATE_3D = MA;
    var DA = "scaleX";
    N.SCALE_X = DA;
    var FA = "scaleY";
    N.SCALE_Y = FA;
    var GA = "scaleZ";
    N.SCALE_Z = GA;
    var UA = "scale3d";
    N.SCALE_3D = UA;
    var XA = "rotateX";
    N.ROTATE_X = XA;
    var VA = "rotateY";
    N.ROTATE_Y = VA;
    var WA = "rotateZ";
    N.ROTATE_Z = WA;
    var BA = "skew";
    N.SKEW = BA;
    var HA = "skewX";
    N.SKEW_X = HA;
    var jA = "skewY";
    N.SKEW_Y = jA;
    var kA = "opacity";
    N.OPACITY = kA;
    var KA = "filter";
    N.FILTER = KA;
    var zA = "font-variation-settings";
    N.FONT_VARIATION_SETTINGS = zA;
    var YA = "width";
    N.WIDTH = YA;
    var $A = "height";
    N.HEIGHT = $A;
    var QA = "backgroundColor";
    N.BACKGROUND_COLOR = QA;
    var ZA = "background";
    N.BACKGROUND = ZA;
    var JA = "borderColor";
    N.BORDER_COLOR = JA;
    var ew = "color";
    N.COLOR = ew;
    var tw = "display";
    N.DISPLAY = tw;
    var rw = "flex";
    N.FLEX = rw;
    var nw = "willChange";
    N.WILL_CHANGE = nw;
    var iw = "AUTO";
    N.AUTO = iw;
    var ow = ",";
    N.COMMA_DELIMITER = ow;
    var aw = ":";
    N.COLON_DELIMITER = aw;
    var sw = "|";
    N.BAR_DELIMITER = sw;
    var uw = "CHILDREN";
    N.CHILDREN = uw;
    var cw = "IMMEDIATE_CHILDREN";
    N.IMMEDIATE_CHILDREN = cw;
    var lw = "SIBLINGS";
    N.SIBLINGS = lw;
    var fw = "PARENT";
    N.PARENT = fw;
    var dw = "preserve-3d";
    N.PRESERVE_3D = dw;
    var pw = "HTML_ELEMENT";
    N.HTML_ELEMENT = pw;
    var vw = "PLAIN_OBJECT";
    N.PLAIN_OBJECT = vw;
    var Ew = "ABSTRACT_NODE";
    N.ABSTRACT_NODE = Ew;
    var hw = "RENDER_TRANSFORM";
    N.RENDER_TRANSFORM = hw;
    var gw = "RENDER_GENERAL";
    N.RENDER_GENERAL = gw;
    var _w = "RENDER_STYLE";
    N.RENDER_STYLE = _w;
    var yw = "RENDER_PLUGIN";
    N.RENDER_PLUGIN = yw;
  });
  var De = u((Ie) => {
    "use strict";
    var Lf = jt().default;
    Object.defineProperty(Ie, "__esModule", { value: !0 });
    var Cn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Ie.IX2EngineConstants = Ie.IX2EngineActionTypes = void 0;
    var Yo = Rf();
    Object.keys(Yo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in Ie && Ie[e] === Yo[e]) ||
        Object.defineProperty(Ie, e, {
          enumerable: !0,
          get: function () {
            return Yo[e];
          },
        });
    });
    var $o = zo();
    Object.keys($o).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in Ie && Ie[e] === $o[e]) ||
        Object.defineProperty(Ie, e, {
          enumerable: !0,
          get: function () {
            return $o[e];
          },
        });
    });
    var Qo = Cf();
    Object.keys(Qo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in Ie && Ie[e] === Qo[e]) ||
        Object.defineProperty(Ie, e, {
          enumerable: !0,
          get: function () {
            return Qo[e];
          },
        });
    });
    var Zo = Nf();
    Object.keys(Zo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in Ie && Ie[e] === Zo[e]) ||
        Object.defineProperty(Ie, e, {
          enumerable: !0,
          get: function () {
            return Zo[e];
          },
        });
    });
    var mw = Lf(qf());
    Ie.IX2EngineActionTypes = mw;
    var Iw = Lf(xf());
    Ie.IX2EngineConstants = Iw;
  });
  var Pf = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixData = void 0;
    var Tw = De(),
      { IX2_RAW_DATA_IMPORTED: Ow } = Tw.IX2EngineActionTypes,
      bw = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Ow:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Nn.ixData = bw;
  });
  var Lr = u((lj, pt) => {
    function Jo() {
      return (
        (pt.exports = Jo =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Jo.apply(this, arguments)
      );
    }
    (pt.exports = Jo),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var Zt = u((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var Sw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ge.clone = xn;
    ge.addLast = Ff;
    ge.addFirst = Gf;
    ge.removeLast = Uf;
    ge.removeFirst = Xf;
    ge.insert = Vf;
    ge.removeAt = Wf;
    ge.replaceAt = Bf;
    ge.getIn = Ln;
    ge.set = Pn;
    ge.setIn = Mn;
    ge.update = jf;
    ge.updateIn = kf;
    ge.merge = Kf;
    ge.mergeDeep = zf;
    ge.mergeIn = Yf;
    ge.omit = $f;
    ge.addDefaults = Qf;
    var Mf = "INVALID_ARGS";
    function Df(e) {
      throw new Error(e);
    }
    function ea(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Aw = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ea(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Fe(e, t, r) {
      var n = r;
      n == null && Df(Mf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var h = ea(f);
          if (h.length)
            for (var v = 0; v <= h.length; v++) {
              var E = h[v];
              if (!(e && n[E] !== void 0)) {
                var _ = f[E];
                t && qn(n[E]) && qn(_) && (_ = Fe(e, t, n[E], _)),
                  !(_ === void 0 || _ === n[E]) &&
                    (o || ((o = !0), (n = xn(n))), (n[E] = _));
              }
            }
        }
      }
      return n;
    }
    function qn(e) {
      var t = typeof e > "u" ? "undefined" : Sw(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ff(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Gf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Uf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Xf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Vf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Wf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Bf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && Df(Mf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Pn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = xn(o);
      return (i[t] = r), i;
    }
    function Hf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          qn(e) && qn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Hf(a, t, r, n + 1);
      }
      return Pn(e, i, o);
    }
    function Mn(e, t, r) {
      return t.length ? Hf(e, t, r, 0) : r;
    }
    function jf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Pn(e, t, o);
    }
    function kf(e, t, r) {
      var n = Ln(e, t),
        o = r(n);
      return Mn(e, t, o);
    }
    function Kf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Fe(!1, !1, e, t, r, n, o, i);
    }
    function zf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Fe(!1, !0, e, t, r, n, o, i);
    }
    function Yf(e, t, r, n, o, i, a) {
      var s = Ln(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          h = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        h[v - 7] = arguments[v];
      return (
        h.length
          ? (c = Fe.call.apply(Fe, [null, !1, !1, s, r, n, o, i, a].concat(h)))
          : (c = Fe(!1, !1, s, r, n, o, i, a)),
        Mn(e, t, c)
      );
    }
    function $f(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (Aw.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = ea(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Qf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Fe(!0, !1, e, t, r, n, o, i);
    }
    var ww = {
      clone: xn,
      addLast: Ff,
      addFirst: Gf,
      removeLast: Uf,
      removeFirst: Xf,
      insert: Vf,
      removeAt: Wf,
      replaceAt: Bf,
      getIn: Ln,
      set: Pn,
      setIn: Mn,
      update: jf,
      updateIn: kf,
      merge: Kf,
      mergeDeep: zf,
      mergeIn: Yf,
      omit: $f,
      addDefaults: Qf,
    };
    ge.default = ww;
  });
  var Jf = u((Dn) => {
    "use strict";
    var Rw = it().default;
    Object.defineProperty(Dn, "__esModule", { value: !0 });
    Dn.ixRequest = void 0;
    var Cw = Rw(Lr()),
      Nw = De(),
      qw = Zt(),
      {
        IX2_PREVIEW_REQUESTED: xw,
        IX2_PLAYBACK_REQUESTED: Lw,
        IX2_STOP_REQUESTED: Pw,
        IX2_CLEAR_REQUESTED: Mw,
      } = Nw.IX2EngineActionTypes,
      Dw = { preview: {}, playback: {}, stop: {}, clear: {} },
      Zf = Object.create(null, {
        [xw]: { value: "preview" },
        [Lw]: { value: "playback" },
        [Pw]: { value: "stop" },
        [Mw]: { value: "clear" },
      }),
      Fw = (e = Dw, t) => {
        if (t.type in Zf) {
          let r = [Zf[t.type]];
          return (0, qw.setIn)(e, [r], (0, Cw.default)({}, t.payload));
        }
        return e;
      };
    Dn.ixRequest = Fw;
  });
  var td = u((Fn) => {
    "use strict";
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixSession = void 0;
    var Gw = De(),
      at = Zt(),
      {
        IX2_SESSION_INITIALIZED: Uw,
        IX2_SESSION_STARTED: Xw,
        IX2_TEST_FRAME_RENDERED: Vw,
        IX2_SESSION_STOPPED: Ww,
        IX2_EVENT_LISTENER_ADDED: Bw,
        IX2_EVENT_STATE_CHANGED: Hw,
        IX2_ANIMATION_FRAME_CHANGED: jw,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: kw,
        IX2_VIEWPORT_WIDTH_CHANGED: Kw,
        IX2_MEDIA_QUERIES_DEFINED: zw,
      } = Gw.IX2EngineActionTypes,
      ed = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Yw = 20,
      $w = (e = ed, t) => {
        switch (t.type) {
          case Uw: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, at.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case Xw:
            return (0, at.set)(e, "active", !0);
          case Vw: {
            let {
              payload: { step: r = Yw },
            } = t;
            return (0, at.set)(e, "tick", e.tick + r);
          }
          case Ww:
            return ed;
          case jw: {
            let {
              payload: { now: r },
            } = t;
            return (0, at.set)(e, "tick", r);
          }
          case Bw: {
            let r = (0, at.addLast)(e.eventListeners, t.payload);
            return (0, at.set)(e, "eventListeners", r);
          }
          case Hw: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, at.setIn)(e, ["eventState", r], n);
          }
          case kw: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, at.setIn)(e, ["playbackState", r], n);
          }
          case Kw: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                i = s;
                break;
              }
            }
            return (0, at.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case zw:
            return (0, at.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Fn.ixSession = $w;
  });
  var nd = u((vj, rd) => {
    function Qw() {
      (this.__data__ = []), (this.size = 0);
    }
    rd.exports = Qw;
  });
  var Gn = u((Ej, id) => {
    function Zw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    id.exports = Zw;
  });
  var Pr = u((hj, od) => {
    var Jw = Gn();
    function e0(e, t) {
      for (var r = e.length; r--; ) if (Jw(e[r][0], t)) return r;
      return -1;
    }
    od.exports = e0;
  });
  var sd = u((gj, ad) => {
    var t0 = Pr(),
      r0 = Array.prototype,
      n0 = r0.splice;
    function i0(e) {
      var t = this.__data__,
        r = t0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : n0.call(t, r, 1), --this.size, !0;
    }
    ad.exports = i0;
  });
  var cd = u((_j, ud) => {
    var o0 = Pr();
    function a0(e) {
      var t = this.__data__,
        r = o0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ud.exports = a0;
  });
  var fd = u((yj, ld) => {
    var s0 = Pr();
    function u0(e) {
      return s0(this.__data__, e) > -1;
    }
    ld.exports = u0;
  });
  var pd = u((mj, dd) => {
    var c0 = Pr();
    function l0(e, t) {
      var r = this.__data__,
        n = c0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    dd.exports = l0;
  });
  var Mr = u((Ij, vd) => {
    var f0 = nd(),
      d0 = sd(),
      p0 = cd(),
      v0 = fd(),
      E0 = pd();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = f0;
    Jt.prototype.delete = d0;
    Jt.prototype.get = p0;
    Jt.prototype.has = v0;
    Jt.prototype.set = E0;
    vd.exports = Jt;
  });
  var hd = u((Tj, Ed) => {
    var h0 = Mr();
    function g0() {
      (this.__data__ = new h0()), (this.size = 0);
    }
    Ed.exports = g0;
  });
  var _d = u((Oj, gd) => {
    function _0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    gd.exports = _0;
  });
  var md = u((bj, yd) => {
    function y0(e) {
      return this.__data__.get(e);
    }
    yd.exports = y0;
  });
  var Td = u((Sj, Id) => {
    function m0(e) {
      return this.__data__.has(e);
    }
    Id.exports = m0;
  });
  var ta = u((Aj, Od) => {
    var I0 =
      typeof global == "object" && global && global.Object === Object && global;
    Od.exports = I0;
  });
  var Ye = u((wj, bd) => {
    var T0 = ta(),
      O0 = typeof self == "object" && self && self.Object === Object && self,
      b0 = T0 || O0 || Function("return this")();
    bd.exports = b0;
  });
  var er = u((Rj, Sd) => {
    var S0 = Ye(),
      A0 = S0.Symbol;
    Sd.exports = A0;
  });
  var Cd = u((Cj, Rd) => {
    var Ad = er(),
      wd = Object.prototype,
      w0 = wd.hasOwnProperty,
      R0 = wd.toString,
      Dr = Ad ? Ad.toStringTag : void 0;
    function C0(e) {
      var t = w0.call(e, Dr),
        r = e[Dr];
      try {
        e[Dr] = void 0;
        var n = !0;
      } catch {}
      var o = R0.call(e);
      return n && (t ? (e[Dr] = r) : delete e[Dr]), o;
    }
    Rd.exports = C0;
  });
  var qd = u((Nj, Nd) => {
    var N0 = Object.prototype,
      q0 = N0.toString;
    function x0(e) {
      return q0.call(e);
    }
    Nd.exports = x0;
  });
  var xt = u((qj, Pd) => {
    var xd = er(),
      L0 = Cd(),
      P0 = qd(),
      M0 = "[object Null]",
      D0 = "[object Undefined]",
      Ld = xd ? xd.toStringTag : void 0;
    function F0(e) {
      return e == null
        ? e === void 0
          ? D0
          : M0
        : Ld && Ld in Object(e)
        ? L0(e)
        : P0(e);
    }
    Pd.exports = F0;
  });
  var st = u((xj, Md) => {
    function G0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Md.exports = G0;
  });
  var ra = u((Lj, Dd) => {
    var U0 = xt(),
      X0 = st(),
      V0 = "[object AsyncFunction]",
      W0 = "[object Function]",
      B0 = "[object GeneratorFunction]",
      H0 = "[object Proxy]";
    function j0(e) {
      if (!X0(e)) return !1;
      var t = U0(e);
      return t == W0 || t == B0 || t == V0 || t == H0;
    }
    Dd.exports = j0;
  });
  var Gd = u((Pj, Fd) => {
    var k0 = Ye(),
      K0 = k0["__core-js_shared__"];
    Fd.exports = K0;
  });
  var Vd = u((Mj, Xd) => {
    var na = Gd(),
      Ud = (function () {
        var e = /[^.]+$/.exec((na && na.keys && na.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function z0(e) {
      return !!Ud && Ud in e;
    }
    Xd.exports = z0;
  });
  var ia = u((Dj, Wd) => {
    var Y0 = Function.prototype,
      $0 = Y0.toString;
    function Q0(e) {
      if (e != null) {
        try {
          return $0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Wd.exports = Q0;
  });
  var Hd = u((Fj, Bd) => {
    var Z0 = ra(),
      J0 = Vd(),
      eR = st(),
      tR = ia(),
      rR = /[\\^$.*+?()[\]{}|]/g,
      nR = /^\[object .+?Constructor\]$/,
      iR = Function.prototype,
      oR = Object.prototype,
      aR = iR.toString,
      sR = oR.hasOwnProperty,
      uR = RegExp(
        "^" +
          aR
            .call(sR)
            .replace(rR, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function cR(e) {
      if (!eR(e) || J0(e)) return !1;
      var t = Z0(e) ? uR : nR;
      return t.test(tR(e));
    }
    Bd.exports = cR;
  });
  var kd = u((Gj, jd) => {
    function lR(e, t) {
      return e?.[t];
    }
    jd.exports = lR;
  });
  var mt = u((Uj, Kd) => {
    var fR = Hd(),
      dR = kd();
    function pR(e, t) {
      var r = dR(e, t);
      return fR(r) ? r : void 0;
    }
    Kd.exports = pR;
  });
  var Un = u((Xj, zd) => {
    var vR = mt(),
      ER = Ye(),
      hR = vR(ER, "Map");
    zd.exports = hR;
  });
  var Fr = u((Vj, Yd) => {
    var gR = mt(),
      _R = gR(Object, "create");
    Yd.exports = _R;
  });
  var Zd = u((Wj, Qd) => {
    var $d = Fr();
    function yR() {
      (this.__data__ = $d ? $d(null) : {}), (this.size = 0);
    }
    Qd.exports = yR;
  });
  var ep = u((Bj, Jd) => {
    function mR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Jd.exports = mR;
  });
  var rp = u((Hj, tp) => {
    var IR = Fr(),
      TR = "__lodash_hash_undefined__",
      OR = Object.prototype,
      bR = OR.hasOwnProperty;
    function SR(e) {
      var t = this.__data__;
      if (IR) {
        var r = t[e];
        return r === TR ? void 0 : r;
      }
      return bR.call(t, e) ? t[e] : void 0;
    }
    tp.exports = SR;
  });
  var ip = u((jj, np) => {
    var AR = Fr(),
      wR = Object.prototype,
      RR = wR.hasOwnProperty;
    function CR(e) {
      var t = this.__data__;
      return AR ? t[e] !== void 0 : RR.call(t, e);
    }
    np.exports = CR;
  });
  var ap = u((kj, op) => {
    var NR = Fr(),
      qR = "__lodash_hash_undefined__";
    function xR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = NR && t === void 0 ? qR : t),
        this
      );
    }
    op.exports = xR;
  });
  var up = u((Kj, sp) => {
    var LR = Zd(),
      PR = ep(),
      MR = rp(),
      DR = ip(),
      FR = ap();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = LR;
    tr.prototype.delete = PR;
    tr.prototype.get = MR;
    tr.prototype.has = DR;
    tr.prototype.set = FR;
    sp.exports = tr;
  });
  var fp = u((zj, lp) => {
    var cp = up(),
      GR = Mr(),
      UR = Un();
    function XR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new cp(),
          map: new (UR || GR)(),
          string: new cp(),
        });
    }
    lp.exports = XR;
  });
  var pp = u((Yj, dp) => {
    function VR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    dp.exports = VR;
  });
  var Gr = u(($j, vp) => {
    var WR = pp();
    function BR(e, t) {
      var r = e.__data__;
      return WR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    vp.exports = BR;
  });
  var hp = u((Qj, Ep) => {
    var HR = Gr();
    function jR(e) {
      var t = HR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ep.exports = jR;
  });
  var _p = u((Zj, gp) => {
    var kR = Gr();
    function KR(e) {
      return kR(this, e).get(e);
    }
    gp.exports = KR;
  });
  var mp = u((Jj, yp) => {
    var zR = Gr();
    function YR(e) {
      return zR(this, e).has(e);
    }
    yp.exports = YR;
  });
  var Tp = u((ek, Ip) => {
    var $R = Gr();
    function QR(e, t) {
      var r = $R(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Ip.exports = QR;
  });
  var Xn = u((tk, Op) => {
    var ZR = fp(),
      JR = hp(),
      eC = _p(),
      tC = mp(),
      rC = Tp();
    function rr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    rr.prototype.clear = ZR;
    rr.prototype.delete = JR;
    rr.prototype.get = eC;
    rr.prototype.has = tC;
    rr.prototype.set = rC;
    Op.exports = rr;
  });
  var Sp = u((rk, bp) => {
    var nC = Mr(),
      iC = Un(),
      oC = Xn(),
      aC = 200;
    function sC(e, t) {
      var r = this.__data__;
      if (r instanceof nC) {
        var n = r.__data__;
        if (!iC || n.length < aC - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new oC(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    bp.exports = sC;
  });
  var oa = u((nk, Ap) => {
    var uC = Mr(),
      cC = hd(),
      lC = _d(),
      fC = md(),
      dC = Td(),
      pC = Sp();
    function nr(e) {
      var t = (this.__data__ = new uC(e));
      this.size = t.size;
    }
    nr.prototype.clear = cC;
    nr.prototype.delete = lC;
    nr.prototype.get = fC;
    nr.prototype.has = dC;
    nr.prototype.set = pC;
    Ap.exports = nr;
  });
  var Rp = u((ik, wp) => {
    var vC = "__lodash_hash_undefined__";
    function EC(e) {
      return this.__data__.set(e, vC), this;
    }
    wp.exports = EC;
  });
  var Np = u((ok, Cp) => {
    function hC(e) {
      return this.__data__.has(e);
    }
    Cp.exports = hC;
  });
  var xp = u((ak, qp) => {
    var gC = Xn(),
      _C = Rp(),
      yC = Np();
    function Vn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new gC(); ++t < r; ) this.add(e[t]);
    }
    Vn.prototype.add = Vn.prototype.push = _C;
    Vn.prototype.has = yC;
    qp.exports = Vn;
  });
  var Pp = u((sk, Lp) => {
    function mC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Lp.exports = mC;
  });
  var Dp = u((uk, Mp) => {
    function IC(e, t) {
      return e.has(t);
    }
    Mp.exports = IC;
  });
  var aa = u((ck, Fp) => {
    var TC = xp(),
      OC = Pp(),
      bC = Dp(),
      SC = 1,
      AC = 2;
    function wC(e, t, r, n, o, i) {
      var a = r & SC,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = i.get(e),
        h = i.get(t);
      if (f && h) return f == t && h == e;
      var v = -1,
        E = !0,
        _ = r & AC ? new TC() : void 0;
      for (i.set(e, t), i.set(t, e); ++v < s; ) {
        var T = e[v],
          O = t[v];
        if (n) var D = a ? n(O, T, v, t, e, i) : n(T, O, v, e, t, i);
        if (D !== void 0) {
          if (D) continue;
          E = !1;
          break;
        }
        if (_) {
          if (
            !OC(t, function (b, R) {
              if (!bC(_, R) && (T === b || o(T, b, r, n, i))) return _.push(R);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(T === O || o(T, O, r, n, i))) {
          E = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), E;
    }
    Fp.exports = wC;
  });
  var Up = u((lk, Gp) => {
    var RC = Ye(),
      CC = RC.Uint8Array;
    Gp.exports = CC;
  });
  var Vp = u((fk, Xp) => {
    function NC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    Xp.exports = NC;
  });
  var Bp = u((dk, Wp) => {
    function qC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Wp.exports = qC;
  });
  var zp = u((pk, Kp) => {
    var Hp = er(),
      jp = Up(),
      xC = Gn(),
      LC = aa(),
      PC = Vp(),
      MC = Bp(),
      DC = 1,
      FC = 2,
      GC = "[object Boolean]",
      UC = "[object Date]",
      XC = "[object Error]",
      VC = "[object Map]",
      WC = "[object Number]",
      BC = "[object RegExp]",
      HC = "[object Set]",
      jC = "[object String]",
      kC = "[object Symbol]",
      KC = "[object ArrayBuffer]",
      zC = "[object DataView]",
      kp = Hp ? Hp.prototype : void 0,
      sa = kp ? kp.valueOf : void 0;
    function YC(e, t, r, n, o, i, a) {
      switch (r) {
        case zC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case KC:
          return !(e.byteLength != t.byteLength || !i(new jp(e), new jp(t)));
        case GC:
        case UC:
        case WC:
          return xC(+e, +t);
        case XC:
          return e.name == t.name && e.message == t.message;
        case BC:
        case jC:
          return e == t + "";
        case VC:
          var s = PC;
        case HC:
          var c = n & DC;
          if ((s || (s = MC), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= FC), a.set(e, t);
          var h = LC(s(e), s(t), n, o, i, a);
          return a.delete(e), h;
        case kC:
          if (sa) return sa.call(e) == sa.call(t);
      }
      return !1;
    }
    Kp.exports = YC;
  });
  var Wn = u((vk, Yp) => {
    function $C(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Yp.exports = $C;
  });
  var Ae = u((Ek, $p) => {
    var QC = Array.isArray;
    $p.exports = QC;
  });
  var ua = u((hk, Qp) => {
    var ZC = Wn(),
      JC = Ae();
    function eN(e, t, r) {
      var n = t(e);
      return JC(e) ? n : ZC(n, r(e));
    }
    Qp.exports = eN;
  });
  var Jp = u((gk, Zp) => {
    function tN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Zp.exports = tN;
  });
  var ca = u((_k, ev) => {
    function rN() {
      return [];
    }
    ev.exports = rN;
  });
  var la = u((yk, rv) => {
    var nN = Jp(),
      iN = ca(),
      oN = Object.prototype,
      aN = oN.propertyIsEnumerable,
      tv = Object.getOwnPropertySymbols,
      sN = tv
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                nN(tv(e), function (t) {
                  return aN.call(e, t);
                }));
          }
        : iN;
    rv.exports = sN;
  });
  var iv = u((mk, nv) => {
    function uN(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    nv.exports = uN;
  });
  var It = u((Ik, ov) => {
    function cN(e) {
      return e != null && typeof e == "object";
    }
    ov.exports = cN;
  });
  var sv = u((Tk, av) => {
    var lN = xt(),
      fN = It(),
      dN = "[object Arguments]";
    function pN(e) {
      return fN(e) && lN(e) == dN;
    }
    av.exports = pN;
  });
  var Ur = u((Ok, lv) => {
    var uv = sv(),
      vN = It(),
      cv = Object.prototype,
      EN = cv.hasOwnProperty,
      hN = cv.propertyIsEnumerable,
      gN = uv(
        (function () {
          return arguments;
        })()
      )
        ? uv
        : function (e) {
            return vN(e) && EN.call(e, "callee") && !hN.call(e, "callee");
          };
    lv.exports = gN;
  });
  var dv = u((bk, fv) => {
    function _N() {
      return !1;
    }
    fv.exports = _N;
  });
  var Bn = u((Xr, ir) => {
    var yN = Ye(),
      mN = dv(),
      Ev = typeof Xr == "object" && Xr && !Xr.nodeType && Xr,
      pv = Ev && typeof ir == "object" && ir && !ir.nodeType && ir,
      IN = pv && pv.exports === Ev,
      vv = IN ? yN.Buffer : void 0,
      TN = vv ? vv.isBuffer : void 0,
      ON = TN || mN;
    ir.exports = ON;
  });
  var Hn = u((Sk, hv) => {
    var bN = 9007199254740991,
      SN = /^(?:0|[1-9]\d*)$/;
    function AN(e, t) {
      var r = typeof e;
      return (
        (t = t ?? bN),
        !!t &&
          (r == "number" || (r != "symbol" && SN.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    hv.exports = AN;
  });
  var jn = u((Ak, gv) => {
    var wN = 9007199254740991;
    function RN(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wN;
    }
    gv.exports = RN;
  });
  var yv = u((wk, _v) => {
    var CN = xt(),
      NN = jn(),
      qN = It(),
      xN = "[object Arguments]",
      LN = "[object Array]",
      PN = "[object Boolean]",
      MN = "[object Date]",
      DN = "[object Error]",
      FN = "[object Function]",
      GN = "[object Map]",
      UN = "[object Number]",
      XN = "[object Object]",
      VN = "[object RegExp]",
      WN = "[object Set]",
      BN = "[object String]",
      HN = "[object WeakMap]",
      jN = "[object ArrayBuffer]",
      kN = "[object DataView]",
      KN = "[object Float32Array]",
      zN = "[object Float64Array]",
      YN = "[object Int8Array]",
      $N = "[object Int16Array]",
      QN = "[object Int32Array]",
      ZN = "[object Uint8Array]",
      JN = "[object Uint8ClampedArray]",
      eq = "[object Uint16Array]",
      tq = "[object Uint32Array]",
      ve = {};
    ve[KN] =
      ve[zN] =
      ve[YN] =
      ve[$N] =
      ve[QN] =
      ve[ZN] =
      ve[JN] =
      ve[eq] =
      ve[tq] =
        !0;
    ve[xN] =
      ve[LN] =
      ve[jN] =
      ve[PN] =
      ve[kN] =
      ve[MN] =
      ve[DN] =
      ve[FN] =
      ve[GN] =
      ve[UN] =
      ve[XN] =
      ve[VN] =
      ve[WN] =
      ve[BN] =
      ve[HN] =
        !1;
    function rq(e) {
      return qN(e) && NN(e.length) && !!ve[CN(e)];
    }
    _v.exports = rq;
  });
  var Iv = u((Rk, mv) => {
    function nq(e) {
      return function (t) {
        return e(t);
      };
    }
    mv.exports = nq;
  });
  var Ov = u((Vr, or) => {
    var iq = ta(),
      Tv = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Wr = Tv && typeof or == "object" && or && !or.nodeType && or,
      oq = Wr && Wr.exports === Tv,
      fa = oq && iq.process,
      aq = (function () {
        try {
          var e = Wr && Wr.require && Wr.require("util").types;
          return e || (fa && fa.binding && fa.binding("util"));
        } catch {}
      })();
    or.exports = aq;
  });
  var kn = u((Ck, Av) => {
    var sq = yv(),
      uq = Iv(),
      bv = Ov(),
      Sv = bv && bv.isTypedArray,
      cq = Sv ? uq(Sv) : sq;
    Av.exports = cq;
  });
  var da = u((Nk, wv) => {
    var lq = iv(),
      fq = Ur(),
      dq = Ae(),
      pq = Bn(),
      vq = Hn(),
      Eq = kn(),
      hq = Object.prototype,
      gq = hq.hasOwnProperty;
    function _q(e, t) {
      var r = dq(e),
        n = !r && fq(e),
        o = !r && !n && pq(e),
        i = !r && !n && !o && Eq(e),
        a = r || n || o || i,
        s = a ? lq(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || gq.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              vq(f, c))
          ) &&
          s.push(f);
      return s;
    }
    wv.exports = _q;
  });
  var Kn = u((qk, Rv) => {
    var yq = Object.prototype;
    function mq(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || yq;
      return e === r;
    }
    Rv.exports = mq;
  });
  var pa = u((xk, Cv) => {
    function Iq(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Cv.exports = Iq;
  });
  var qv = u((Lk, Nv) => {
    var Tq = pa(),
      Oq = Tq(Object.keys, Object);
    Nv.exports = Oq;
  });
  var zn = u((Pk, xv) => {
    var bq = Kn(),
      Sq = qv(),
      Aq = Object.prototype,
      wq = Aq.hasOwnProperty;
    function Rq(e) {
      if (!bq(e)) return Sq(e);
      var t = [];
      for (var r in Object(e)) wq.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    xv.exports = Rq;
  });
  var Lt = u((Mk, Lv) => {
    var Cq = ra(),
      Nq = jn();
    function qq(e) {
      return e != null && Nq(e.length) && !Cq(e);
    }
    Lv.exports = qq;
  });
  var Br = u((Dk, Pv) => {
    var xq = da(),
      Lq = zn(),
      Pq = Lt();
    function Mq(e) {
      return Pq(e) ? xq(e) : Lq(e);
    }
    Pv.exports = Mq;
  });
  var Dv = u((Fk, Mv) => {
    var Dq = ua(),
      Fq = la(),
      Gq = Br();
    function Uq(e) {
      return Dq(e, Gq, Fq);
    }
    Mv.exports = Uq;
  });
  var Uv = u((Gk, Gv) => {
    var Fv = Dv(),
      Xq = 1,
      Vq = Object.prototype,
      Wq = Vq.hasOwnProperty;
    function Bq(e, t, r, n, o, i) {
      var a = r & Xq,
        s = Fv(e),
        c = s.length,
        f = Fv(t),
        h = f.length;
      if (c != h && !a) return !1;
      for (var v = c; v--; ) {
        var E = s[v];
        if (!(a ? E in t : Wq.call(t, E))) return !1;
      }
      var _ = i.get(e),
        T = i.get(t);
      if (_ && T) return _ == t && T == e;
      var O = !0;
      i.set(e, t), i.set(t, e);
      for (var D = a; ++v < c; ) {
        E = s[v];
        var b = e[E],
          R = t[E];
        if (n) var I = a ? n(R, b, E, t, e, i) : n(b, R, E, e, t, i);
        if (!(I === void 0 ? b === R || o(b, R, r, n, i) : I)) {
          O = !1;
          break;
        }
        D || (D = E == "constructor");
      }
      if (O && !D) {
        var L = e.constructor,
          x = t.constructor;
        L != x &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof x == "function" &&
            x instanceof x
          ) &&
          (O = !1);
      }
      return i.delete(e), i.delete(t), O;
    }
    Gv.exports = Bq;
  });
  var Vv = u((Uk, Xv) => {
    var Hq = mt(),
      jq = Ye(),
      kq = Hq(jq, "DataView");
    Xv.exports = kq;
  });
  var Bv = u((Xk, Wv) => {
    var Kq = mt(),
      zq = Ye(),
      Yq = Kq(zq, "Promise");
    Wv.exports = Yq;
  });
  var jv = u((Vk, Hv) => {
    var $q = mt(),
      Qq = Ye(),
      Zq = $q(Qq, "Set");
    Hv.exports = Zq;
  });
  var va = u((Wk, kv) => {
    var Jq = mt(),
      ex = Ye(),
      tx = Jq(ex, "WeakMap");
    kv.exports = tx;
  });
  var Yn = u((Bk, Jv) => {
    var Ea = Vv(),
      ha = Un(),
      ga = Bv(),
      _a = jv(),
      ya = va(),
      Zv = xt(),
      ar = ia(),
      Kv = "[object Map]",
      rx = "[object Object]",
      zv = "[object Promise]",
      Yv = "[object Set]",
      $v = "[object WeakMap]",
      Qv = "[object DataView]",
      nx = ar(Ea),
      ix = ar(ha),
      ox = ar(ga),
      ax = ar(_a),
      sx = ar(ya),
      Pt = Zv;
    ((Ea && Pt(new Ea(new ArrayBuffer(1))) != Qv) ||
      (ha && Pt(new ha()) != Kv) ||
      (ga && Pt(ga.resolve()) != zv) ||
      (_a && Pt(new _a()) != Yv) ||
      (ya && Pt(new ya()) != $v)) &&
      (Pt = function (e) {
        var t = Zv(e),
          r = t == rx ? e.constructor : void 0,
          n = r ? ar(r) : "";
        if (n)
          switch (n) {
            case nx:
              return Qv;
            case ix:
              return Kv;
            case ox:
              return zv;
            case ax:
              return Yv;
            case sx:
              return $v;
          }
        return t;
      });
    Jv.exports = Pt;
  });
  var sE = u((Hk, aE) => {
    var ma = oa(),
      ux = aa(),
      cx = zp(),
      lx = Uv(),
      eE = Yn(),
      tE = Ae(),
      rE = Bn(),
      fx = kn(),
      dx = 1,
      nE = "[object Arguments]",
      iE = "[object Array]",
      $n = "[object Object]",
      px = Object.prototype,
      oE = px.hasOwnProperty;
    function vx(e, t, r, n, o, i) {
      var a = tE(e),
        s = tE(t),
        c = a ? iE : eE(e),
        f = s ? iE : eE(t);
      (c = c == nE ? $n : c), (f = f == nE ? $n : f);
      var h = c == $n,
        v = f == $n,
        E = c == f;
      if (E && rE(e)) {
        if (!rE(t)) return !1;
        (a = !0), (h = !1);
      }
      if (E && !h)
        return (
          i || (i = new ma()),
          a || fx(e) ? ux(e, t, r, n, o, i) : cx(e, t, c, r, n, o, i)
        );
      if (!(r & dx)) {
        var _ = h && oE.call(e, "__wrapped__"),
          T = v && oE.call(t, "__wrapped__");
        if (_ || T) {
          var O = _ ? e.value() : e,
            D = T ? t.value() : t;
          return i || (i = new ma()), o(O, D, r, n, i);
        }
      }
      return E ? (i || (i = new ma()), lx(e, t, r, n, o, i)) : !1;
    }
    aE.exports = vx;
  });
  var Ia = u((jk, lE) => {
    var Ex = sE(),
      uE = It();
    function cE(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!uE(e) && !uE(t))
        ? e !== e && t !== t
        : Ex(e, t, r, n, cE, o);
    }
    lE.exports = cE;
  });
  var dE = u((kk, fE) => {
    var hx = oa(),
      gx = Ia(),
      _x = 1,
      yx = 2;
    function mx(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var c = s[0],
          f = e[c],
          h = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var v = new hx();
          if (n) var E = n(f, h, c, e, t, v);
          if (!(E === void 0 ? gx(h, f, _x | yx, n, v) : E)) return !1;
        }
      }
      return !0;
    }
    fE.exports = mx;
  });
  var Ta = u((Kk, pE) => {
    var Ix = st();
    function Tx(e) {
      return e === e && !Ix(e);
    }
    pE.exports = Tx;
  });
  var EE = u((zk, vE) => {
    var Ox = Ta(),
      bx = Br();
    function Sx(e) {
      for (var t = bx(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Ox(o)];
      }
      return t;
    }
    vE.exports = Sx;
  });
  var Oa = u((Yk, hE) => {
    function Ax(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    hE.exports = Ax;
  });
  var _E = u(($k, gE) => {
    var wx = dE(),
      Rx = EE(),
      Cx = Oa();
    function Nx(e) {
      var t = Rx(e);
      return t.length == 1 && t[0][2]
        ? Cx(t[0][0], t[0][1])
        : function (r) {
            return r === e || wx(r, e, t);
          };
    }
    gE.exports = Nx;
  });
  var Hr = u((Qk, yE) => {
    var qx = xt(),
      xx = It(),
      Lx = "[object Symbol]";
    function Px(e) {
      return typeof e == "symbol" || (xx(e) && qx(e) == Lx);
    }
    yE.exports = Px;
  });
  var Qn = u((Zk, mE) => {
    var Mx = Ae(),
      Dx = Hr(),
      Fx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Gx = /^\w*$/;
    function Ux(e, t) {
      if (Mx(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Dx(e)
        ? !0
        : Gx.test(e) || !Fx.test(e) || (t != null && e in Object(t));
    }
    mE.exports = Ux;
  });
  var OE = u((Jk, TE) => {
    var IE = Xn(),
      Xx = "Expected a function";
    function ba(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Xx);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (ba.Cache || IE)()), r;
    }
    ba.Cache = IE;
    TE.exports = ba;
  });
  var SE = u((e5, bE) => {
    var Vx = OE(),
      Wx = 500;
    function Bx(e) {
      var t = Vx(e, function (n) {
          return r.size === Wx && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    bE.exports = Bx;
  });
  var wE = u((t5, AE) => {
    var Hx = SE(),
      jx =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      kx = /\\(\\)?/g,
      Kx = Hx(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(jx, function (r, n, o, i) {
            t.push(o ? i.replace(kx, "$1") : n || r);
          }),
          t
        );
      });
    AE.exports = Kx;
  });
  var Sa = u((r5, RE) => {
    function zx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    RE.exports = zx;
  });
  var PE = u((n5, LE) => {
    var CE = er(),
      Yx = Sa(),
      $x = Ae(),
      Qx = Hr(),
      Zx = 1 / 0,
      NE = CE ? CE.prototype : void 0,
      qE = NE ? NE.toString : void 0;
    function xE(e) {
      if (typeof e == "string") return e;
      if ($x(e)) return Yx(e, xE) + "";
      if (Qx(e)) return qE ? qE.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Zx ? "-0" : t;
    }
    LE.exports = xE;
  });
  var DE = u((i5, ME) => {
    var Jx = PE();
    function eL(e) {
      return e == null ? "" : Jx(e);
    }
    ME.exports = eL;
  });
  var jr = u((o5, FE) => {
    var tL = Ae(),
      rL = Qn(),
      nL = wE(),
      iL = DE();
    function oL(e, t) {
      return tL(e) ? e : rL(e, t) ? [e] : nL(iL(e));
    }
    FE.exports = oL;
  });
  var sr = u((a5, GE) => {
    var aL = Hr(),
      sL = 1 / 0;
    function uL(e) {
      if (typeof e == "string" || aL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -sL ? "-0" : t;
    }
    GE.exports = uL;
  });
  var Zn = u((s5, UE) => {
    var cL = jr(),
      lL = sr();
    function fL(e, t) {
      t = cL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[lL(t[r++])];
      return r && r == n ? e : void 0;
    }
    UE.exports = fL;
  });
  var Jn = u((u5, XE) => {
    var dL = Zn();
    function pL(e, t, r) {
      var n = e == null ? void 0 : dL(e, t);
      return n === void 0 ? r : n;
    }
    XE.exports = pL;
  });
  var WE = u((c5, VE) => {
    function vL(e, t) {
      return e != null && t in Object(e);
    }
    VE.exports = vL;
  });
  var HE = u((l5, BE) => {
    var EL = jr(),
      hL = Ur(),
      gL = Ae(),
      _L = Hn(),
      yL = jn(),
      mL = sr();
    function IL(e, t, r) {
      t = EL(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = mL(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && yL(o) && _L(a, o) && (gL(e) || hL(e)));
    }
    BE.exports = IL;
  });
  var kE = u((f5, jE) => {
    var TL = WE(),
      OL = HE();
    function bL(e, t) {
      return e != null && OL(e, t, TL);
    }
    jE.exports = bL;
  });
  var zE = u((d5, KE) => {
    var SL = Ia(),
      AL = Jn(),
      wL = kE(),
      RL = Qn(),
      CL = Ta(),
      NL = Oa(),
      qL = sr(),
      xL = 1,
      LL = 2;
    function PL(e, t) {
      return RL(e) && CL(t)
        ? NL(qL(e), t)
        : function (r) {
            var n = AL(r, e);
            return n === void 0 && n === t ? wL(r, e) : SL(t, n, xL | LL);
          };
    }
    KE.exports = PL;
  });
  var ei = u((p5, YE) => {
    function ML(e) {
      return e;
    }
    YE.exports = ML;
  });
  var Aa = u((v5, $E) => {
    function DL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    $E.exports = DL;
  });
  var ZE = u((E5, QE) => {
    var FL = Zn();
    function GL(e) {
      return function (t) {
        return FL(t, e);
      };
    }
    QE.exports = GL;
  });
  var eh = u((h5, JE) => {
    var UL = Aa(),
      XL = ZE(),
      VL = Qn(),
      WL = sr();
    function BL(e) {
      return VL(e) ? UL(WL(e)) : XL(e);
    }
    JE.exports = BL;
  });
  var Tt = u((g5, th) => {
    var HL = _E(),
      jL = zE(),
      kL = ei(),
      KL = Ae(),
      zL = eh();
    function YL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? kL
        : typeof e == "object"
        ? KL(e)
          ? jL(e[0], e[1])
          : HL(e)
        : zL(e);
    }
    th.exports = YL;
  });
  var wa = u((_5, rh) => {
    var $L = Tt(),
      QL = Lt(),
      ZL = Br();
    function JL(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!QL(t)) {
          var i = $L(r, 3);
          (t = ZL(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    rh.exports = JL;
  });
  var Ra = u((y5, nh) => {
    function eP(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    nh.exports = eP;
  });
  var oh = u((m5, ih) => {
    var tP = /\s/;
    function rP(e) {
      for (var t = e.length; t-- && tP.test(e.charAt(t)); );
      return t;
    }
    ih.exports = rP;
  });
  var sh = u((I5, ah) => {
    var nP = oh(),
      iP = /^\s+/;
    function oP(e) {
      return e && e.slice(0, nP(e) + 1).replace(iP, "");
    }
    ah.exports = oP;
  });
  var ti = u((T5, lh) => {
    var aP = sh(),
      uh = st(),
      sP = Hr(),
      ch = 0 / 0,
      uP = /^[-+]0x[0-9a-f]+$/i,
      cP = /^0b[01]+$/i,
      lP = /^0o[0-7]+$/i,
      fP = parseInt;
    function dP(e) {
      if (typeof e == "number") return e;
      if (sP(e)) return ch;
      if (uh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = uh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = aP(e);
      var r = cP.test(e);
      return r || lP.test(e) ? fP(e.slice(2), r ? 2 : 8) : uP.test(e) ? ch : +e;
    }
    lh.exports = dP;
  });
  var ph = u((O5, dh) => {
    var pP = ti(),
      fh = 1 / 0,
      vP = 17976931348623157e292;
    function EP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = pP(e)), e === fh || e === -fh)) {
        var t = e < 0 ? -1 : 1;
        return t * vP;
      }
      return e === e ? e : 0;
    }
    dh.exports = EP;
  });
  var Ca = u((b5, vh) => {
    var hP = ph();
    function gP(e) {
      var t = hP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    vh.exports = gP;
  });
  var hh = u((S5, Eh) => {
    var _P = Ra(),
      yP = Tt(),
      mP = Ca(),
      IP = Math.max;
    function TP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : mP(r);
      return o < 0 && (o = IP(n + o, 0)), _P(e, yP(t, 3), o);
    }
    Eh.exports = TP;
  });
  var Na = u((A5, gh) => {
    var OP = wa(),
      bP = hh(),
      SP = OP(bP);
    gh.exports = SP;
  });
  var ni = u((qe) => {
    "use strict";
    var AP = it().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.withBrowser =
      qe.TRANSFORM_STYLE_PREFIXED =
      qe.TRANSFORM_PREFIXED =
      qe.IS_BROWSER_ENV =
      qe.FLEX_PREFIXED =
      qe.ELEMENT_MATCHES =
        void 0;
    var wP = AP(Na()),
      yh = typeof window < "u";
    qe.IS_BROWSER_ENV = yh;
    var ri = (e, t) => (yh ? e() : t);
    qe.withBrowser = ri;
    var RP = ri(() =>
      (0, wP.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    qe.ELEMENT_MATCHES = RP;
    var CP = ri(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    qe.FLEX_PREFIXED = CP;
    var mh = ri(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    qe.TRANSFORM_PREFIXED = mh;
    var _h = mh.split("transform")[0],
      NP = _h ? _h + "TransformStyle" : "transformStyle";
    qe.TRANSFORM_STYLE_PREFIXED = NP;
  });
  var qa = u((R5, Sh) => {
    var qP = 4,
      xP = 0.001,
      LP = 1e-7,
      PP = 10,
      kr = 11,
      ii = 1 / (kr - 1),
      MP = typeof Float32Array == "function";
    function Ih(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Th(e, t) {
      return 3 * t - 6 * e;
    }
    function Oh(e) {
      return 3 * e;
    }
    function oi(e, t, r) {
      return ((Ih(t, r) * e + Th(t, r)) * e + Oh(t)) * e;
    }
    function bh(e, t, r) {
      return 3 * Ih(t, r) * e * e + 2 * Th(t, r) * e + Oh(t);
    }
    function DP(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = oi(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > LP && ++s < PP);
      return a;
    }
    function FP(e, t, r, n) {
      for (var o = 0; o < qP; ++o) {
        var i = bh(t, r, n);
        if (i === 0) return t;
        var a = oi(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    Sh.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = MP ? new Float32Array(kr) : new Array(kr);
      if (t !== r || n !== o)
        for (var a = 0; a < kr; ++a) i[a] = oi(a * ii, t, n);
      function s(c) {
        for (var f = 0, h = 1, v = kr - 1; h !== v && i[h] <= c; ++h) f += ii;
        --h;
        var E = (c - i[h]) / (i[h + 1] - i[h]),
          _ = f + E * ii,
          T = bh(_, t, n);
        return T >= xP ? FP(c, _, t, n) : T === 0 ? _ : DP(c, f, f + ii, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : oi(s(f), r, o);
      };
    };
  });
  var xa = u((re) => {
    "use strict";
    var GP = it().default;
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.bounce = mM;
    re.bouncePast = IM;
    re.easeOut = re.easeInOut = re.easeIn = re.ease = void 0;
    re.inBack = fM;
    re.inCirc = sM;
    re.inCubic = kP;
    re.inElastic = vM;
    re.inExpo = iM;
    re.inOutBack = pM;
    re.inOutCirc = cM;
    re.inOutCubic = zP;
    re.inOutElastic = hM;
    re.inOutExpo = aM;
    re.inOutQuad = jP;
    re.inOutQuart = QP;
    re.inOutQuint = eM;
    re.inOutSine = nM;
    re.inQuad = BP;
    re.inQuart = YP;
    re.inQuint = ZP;
    re.inSine = tM;
    re.outBack = dM;
    re.outBounce = lM;
    re.outCirc = uM;
    re.outCubic = KP;
    re.outElastic = EM;
    re.outExpo = oM;
    re.outQuad = HP;
    re.outQuart = $P;
    re.outQuint = JP;
    re.outSine = rM;
    re.swingFrom = _M;
    re.swingFromTo = gM;
    re.swingTo = yM;
    var ai = GP(qa()),
      vt = 1.70158,
      UP = (0, ai.default)(0.25, 0.1, 0.25, 1);
    re.ease = UP;
    var XP = (0, ai.default)(0.42, 0, 1, 1);
    re.easeIn = XP;
    var VP = (0, ai.default)(0, 0, 0.58, 1);
    re.easeOut = VP;
    var WP = (0, ai.default)(0.42, 0, 0.58, 1);
    re.easeInOut = WP;
    function BP(e) {
      return Math.pow(e, 2);
    }
    function HP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function jP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function kP(e) {
      return Math.pow(e, 3);
    }
    function KP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function zP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function YP(e) {
      return Math.pow(e, 4);
    }
    function $P(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function QP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function ZP(e) {
      return Math.pow(e, 5);
    }
    function JP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function eM(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function tM(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function rM(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function nM(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function iM(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function oM(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function aM(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function sM(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function uM(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function cM(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function lM(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function fM(e) {
      let t = vt;
      return e * e * ((t + 1) * e - t);
    }
    function dM(e) {
      let t = vt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function pM(e) {
      let t = vt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function vM(e) {
      let t = vt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function EM(e) {
      let t = vt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function hM(e) {
      let t = vt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function gM(e) {
      let t = vt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function _M(e) {
      let t = vt;
      return e * e * ((t + 1) * e - t);
    }
    function yM(e) {
      let t = vt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function mM(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function IM(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Pa = u((Kr) => {
    "use strict";
    var TM = it().default,
      OM = jt().default;
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    Kr.applyEasing = AM;
    Kr.createBezierEasing = SM;
    Kr.optimizeFloat = La;
    var Ah = OM(xa()),
      bM = TM(qa());
    function La(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function SM(e) {
      return (0, bM.default)(...e);
    }
    function AM(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : La(r ? (t > 0 ? r(t) : t) : t > 0 && e && Ah[e] ? Ah[e](t) : t);
    }
  });
  var Nh = u((ur) => {
    "use strict";
    Object.defineProperty(ur, "__esModule", { value: !0 });
    ur.createElementState = Ch;
    ur.ixElements = void 0;
    ur.mergeActionState = Ma;
    var si = Zt(),
      Rh = De(),
      {
        HTML_ELEMENT: q5,
        PLAIN_OBJECT: wM,
        ABSTRACT_NODE: x5,
        CONFIG_X_VALUE: RM,
        CONFIG_Y_VALUE: CM,
        CONFIG_Z_VALUE: NM,
        CONFIG_VALUE: qM,
        CONFIG_X_UNIT: xM,
        CONFIG_Y_UNIT: LM,
        CONFIG_Z_UNIT: PM,
        CONFIG_UNIT: MM,
      } = Rh.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: DM,
        IX2_INSTANCE_ADDED: FM,
        IX2_ELEMENT_STATE_CHANGED: GM,
      } = Rh.IX2EngineActionTypes,
      wh = {},
      UM = "refState",
      XM = (e = wh, t = {}) => {
        switch (t.type) {
          case DM:
            return wh;
          case FM: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, si.getIn)(c, [r, n]) !== n && (c = Ch(c, n, a, r, i)),
              Ma(c, r, s, o, i)
            );
          }
          case GM: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Ma(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    ur.ixElements = XM;
    function Ch(e, t, r, n, o) {
      let i =
        r === wM ? (0, si.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, si.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Ma(e, t, r, n, o) {
      let i = WM(o),
        a = [t, UM, r];
      return (0, si.mergeIn)(e, a, n, i);
    }
    var VM = [
      [RM, xM],
      [CM, LM],
      [NM, PM],
      [qM, MM],
    ];
    function WM(e) {
      let { config: t } = e;
      return VM.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          s = t[i];
        return a != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var qh = u((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.renderPlugin =
      we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    var BM = (e) => e.value;
    we.getPluginConfig = BM;
    var HM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    we.getPluginDuration = HM;
    var jM = (e) => e || { value: 0 };
    we.getPluginOrigin = jM;
    var kM = (e) => ({ value: e.value });
    we.getPluginDestination = kM;
    var KM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    we.createPluginInstance = KM;
    var zM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    we.renderPlugin = zM;
    var YM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    we.clearPlugin = YM;
  });
  var Da = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    be.isPluginType = ZM;
    be.renderPlugin = void 0;
    var Mt = qh(),
      xh = De(),
      $M = ni(),
      QM = {
        [xh.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Mt.getPluginConfig,
          getOrigin: Mt.getPluginOrigin,
          getDuration: Mt.getPluginDuration,
          getDestination: Mt.getPluginDestination,
          createInstance: Mt.createPluginInstance,
          render: Mt.renderPlugin,
          clear: Mt.clearPlugin,
        },
      };
    function ZM(e) {
      return e === xh.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Dt = (e) => (t) => {
        if (!$M.IS_BROWSER_ENV) return () => null;
        let r = QM[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      JM = Dt("getConfig");
    be.getPluginConfig = JM;
    var eD = Dt("getOrigin");
    be.getPluginOrigin = eD;
    var tD = Dt("getDuration");
    be.getPluginDuration = tD;
    var rD = Dt("getDestination");
    be.getPluginDestination = rD;
    var nD = Dt("createInstance");
    be.createPluginInstance = nD;
    var iD = Dt("render");
    be.renderPlugin = iD;
    var oD = Dt("clear");
    be.clearPlugin = oD;
  });
  var Ph = u((D5, Lh) => {
    function aD(e, t) {
      return e == null || e !== e ? t : e;
    }
    Lh.exports = aD;
  });
  var Dh = u((F5, Mh) => {
    function sD(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    Mh.exports = sD;
  });
  var Gh = u((G5, Fh) => {
    function uD(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    Fh.exports = uD;
  });
  var Xh = u((U5, Uh) => {
    var cD = Gh(),
      lD = cD();
    Uh.exports = lD;
  });
  var Fa = u((X5, Vh) => {
    var fD = Xh(),
      dD = Br();
    function pD(e, t) {
      return e && fD(e, t, dD);
    }
    Vh.exports = pD;
  });
  var Bh = u((V5, Wh) => {
    var vD = Lt();
    function ED(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!vD(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    Wh.exports = ED;
  });
  var Ga = u((W5, Hh) => {
    var hD = Fa(),
      gD = Bh(),
      _D = gD(hD);
    Hh.exports = _D;
  });
  var kh = u((B5, jh) => {
    function yD(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    jh.exports = yD;
  });
  var zh = u((H5, Kh) => {
    var mD = Dh(),
      ID = Ga(),
      TD = Tt(),
      OD = kh(),
      bD = Ae();
    function SD(e, t, r) {
      var n = bD(e) ? mD : OD,
        o = arguments.length < 3;
      return n(e, TD(t, 4), r, o, ID);
    }
    Kh.exports = SD;
  });
  var $h = u((j5, Yh) => {
    var AD = Ra(),
      wD = Tt(),
      RD = Ca(),
      CD = Math.max,
      ND = Math.min;
    function qD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = RD(r)), (o = r < 0 ? CD(n + o, 0) : ND(o, n - 1))),
        AD(e, wD(t, 3), o, !0)
      );
    }
    Yh.exports = qD;
  });
  var Zh = u((k5, Qh) => {
    var xD = wa(),
      LD = $h(),
      PD = xD(LD);
    Qh.exports = PD;
  });
  var eg = u((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.default = void 0;
    var MD = Object.prototype.hasOwnProperty;
    function Jh(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function DD(e, t) {
      if (Jh(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!MD.call(t, r[o]) || !Jh(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var FD = DD;
    ui.default = FD;
  });
  var Ig = u((pe) => {
    "use strict";
    var fi = it().default;
    Object.defineProperty(pe, "__esModule", { value: !0 });
    pe.cleanupHTMLElement = PF;
    pe.clearAllStyles = LF;
    pe.getActionListProgress = DF;
    pe.getAffectedElements = Ha;
    pe.getComputedStyle = uF;
    pe.getDestinationValues = EF;
    pe.getElementId = iF;
    pe.getInstanceId = rF;
    pe.getInstanceOrigin = fF;
    pe.getItemConfigByKey = void 0;
    pe.getMaxDurationItemIndex = mg;
    pe.getNamespacedParameterId = UF;
    pe.getRenderType = gg;
    pe.getStyleProp = hF;
    pe.mediaQueriesEqual = VF;
    pe.observeStore = sF;
    pe.reduceListToGroup = FF;
    pe.reifyState = oF;
    pe.renderHTMLElement = gF;
    Object.defineProperty(pe, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return lg.default;
      },
    });
    pe.shouldAllowMediaQuery = XF;
    pe.shouldNamespaceEventParameter = GF;
    pe.stringifyTarget = WF;
    var Ot = fi(Ph()),
      Xa = fi(zh()),
      Ua = fi(Zh()),
      tg = Zt(),
      Ft = De(),
      lg = fi(eg()),
      GD = Pa(),
      lt = Da(),
      xe = ni(),
      {
        BACKGROUND: UD,
        TRANSFORM: XD,
        TRANSLATE_3D: VD,
        SCALE_3D: WD,
        ROTATE_X: BD,
        ROTATE_Y: HD,
        ROTATE_Z: jD,
        SKEW: kD,
        PRESERVE_3D: KD,
        FLEX: zD,
        OPACITY: ci,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: fg,
        BORDER_COLOR: YD,
        COLOR: $D,
        CHILDREN: rg,
        IMMEDIATE_CHILDREN: QD,
        SIBLINGS: ng,
        PARENT: ZD,
        DISPLAY: li,
        WILL_CHANGE: cr,
        AUTO: bt,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: JD,
        BAR_DELIMITER: ig,
        RENDER_TRANSFORM: dg,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Wa,
        RENDER_PLUGIN: pg,
      } = Ft.IX2EngineConstants,
      {
        TRANSFORM_MOVE: lr,
        TRANSFORM_SCALE: fr,
        TRANSFORM_ROTATE: dr,
        TRANSFORM_SKEW: Qr,
        STYLE_OPACITY: vg,
        STYLE_FILTER: Zr,
        STYLE_FONT_VARIATION: Jr,
        STYLE_SIZE: pr,
        STYLE_BACKGROUND_COLOR: vr,
        STYLE_BORDER: Er,
        STYLE_TEXT_COLOR: hr,
        GENERAL_DISPLAY: di,
      } = Ft.ActionTypeConsts,
      eF = "OBJECT_VALUE",
      Eg = (e) => e.trim(),
      Ba = Object.freeze({ [vr]: fg, [Er]: YD, [hr]: $D }),
      hg = Object.freeze({
        [xe.TRANSFORM_PREFIXED]: XD,
        [fg]: UD,
        [ci]: ci,
        [zr]: zr,
        [ut]: ut,
        [ct]: ct,
        [Yr]: Yr,
      }),
      og = {},
      tF = 1;
    function rF() {
      return "i" + tF++;
    }
    var nF = 1;
    function iF(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + nF++;
    }
    function oF({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Xa.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var aF = (e, t) => e === t;
    function sF({ store: e, select: t, onChange: r, comparator: n = aF }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        s = t(o());
      function c() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return a;
    }
    function ag(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Ha({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, s;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (q, G) =>
            q.concat(
              Ha({
                config: { target: G },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: h,
          queryDocument: v,
          getChildElements: E,
          getSiblingElements: _,
          matchSelector: T,
          elementContains: O,
          isSiblingNode: D,
        } = o,
        { target: b } = e;
      if (!b) return [];
      let {
        id: R,
        objectId: I,
        selector: L,
        selectorGuids: x,
        appliesTo: P,
        useEventTarget: X,
      } = ag(b);
      if (I) return [og[I] || (og[I] = {})];
      if (P === Ft.EventAppliesTo.PAGE) {
        let q = f(R);
        return q ? [q] : [];
      }
      let Y =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[R || L] || {},
        ee = !!(Y.id || Y.selector),
        V,
        w,
        p,
        M = t && h(ag(t.target));
      if (
        (ee
          ? ((V = Y.limitAffectedElements), (w = M), (p = h(Y)))
          : (w = p = h({ id: R, selector: L, selectorGuids: x })),
        t && X)
      ) {
        let q = r && (p || X === !0) ? [r] : v(M);
        if (p) {
          if (X === ZD) return v(p).filter((G) => q.some(($) => O(G, $)));
          if (X === rg) return v(p).filter((G) => q.some(($) => O($, G)));
          if (X === ng) return v(p).filter((G) => q.some(($) => D($, G)));
        }
        return q;
      }
      return w == null || p == null
        ? []
        : xe.IS_BROWSER_ENV && n
        ? v(p).filter((q) => n.contains(q))
        : V === rg
        ? v(w, p)
        : V === QD
        ? E(v(w)).filter(T(p))
        : V === ng
        ? _(v(w)).filter(T(p))
        : v(p);
    }
    function uF({ element: e, actionItem: t }) {
      if (!xe.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case pr:
        case vr:
        case Er:
        case hr:
        case di:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var sg = /px/,
      cF = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = _F[n.type]), r),
          e || {}
        ),
      lF = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = yF[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function fF(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, lt.isPluginType)(a)) return (0, lt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case lr:
        case fr:
        case dr:
        case Qr:
          return t[n.actionTypeId] || ja[n.actionTypeId];
        case Zr:
          return cF(t[n.actionTypeId], n.config.filters);
        case Jr:
          return lF(t[n.actionTypeId], n.config.fontVariations);
        case vg:
          return { value: (0, Ot.default)(parseFloat(i(e, ci)), 1) };
        case pr: {
          let s = i(e, ut),
            c = i(e, ct),
            f,
            h;
          return (
            n.config.widthUnit === bt
              ? (f = sg.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, Ot.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === bt
              ? (h = sg.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (h = (0, Ot.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: h }
          );
        }
        case vr:
        case Er:
        case hr:
          return NF({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case di:
          return { value: (0, Ot.default)(i(e, li), r.display) };
        case eF:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var dF = (e, t) => (t && (e[t.type] = t.value || 0), e),
      pF = (e, t) => (t && (e[t.type] = t.value || 0), e),
      vF = (e, t, r) => {
        if ((0, lt.isPluginType)(e)) return (0, lt.getPluginConfig)(e)(r, t);
        switch (e) {
          case Zr: {
            let n = (0, Ua.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case Jr: {
            let n = (0, Ua.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    pe.getItemConfigByKey = vF;
    function EF({ element: e, actionItem: t, elementApi: r }) {
      if ((0, lt.isPluginType)(t.actionTypeId))
        return (0, lt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case lr:
        case fr:
        case dr:
        case Qr: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case pr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!xe.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === bt) {
            let h = n(e, ut);
            o(e, ut, ""), (c = i(e, "offsetWidth")), o(e, ut, h);
          }
          if (s === bt) {
            let h = n(e, ct);
            o(e, ct, ""), (f = i(e, "offsetHeight")), o(e, ct, h);
          }
          return { widthValue: c, heightValue: f };
        }
        case vr:
        case Er:
        case hr: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case Zr:
          return t.config.filters.reduce(dF, {});
        case Jr:
          return t.config.fontVariations.reduce(pF, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function gg(e) {
      if (/^TRANSFORM_/.test(e)) return dg;
      if (/^STYLE_/.test(e)) return Wa;
      if (/^GENERAL_/.test(e)) return Va;
      if (/^PLUGIN_/.test(e)) return pg;
    }
    function hF(e, t) {
      return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function gF(e, t, r, n, o, i, a, s, c) {
      switch (s) {
        case dg:
          return TF(e, t, r, o, a);
        case Wa:
          return qF(e, t, r, o, i, a);
        case Va:
          return xF(e, o, a);
        case pg: {
          let { actionTypeId: f } = o;
          if ((0, lt.isPluginType)(f)) return (0, lt.renderPlugin)(f)(c, t, o);
        }
      }
    }
    var ja = {
        [lr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [fr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [dr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      _F = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      yF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      mF = (e, t) => {
        let r = (0, Ua.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      IF = Object.keys(ja);
    function TF(e, t, r, n, o) {
      let i = IF.map((s) => {
          let c = ja[s],
            {
              xValue: f = c.xValue,
              yValue: h = c.yValue,
              zValue: v = c.zValue,
              xUnit: E = "",
              yUnit: _ = "",
              zUnit: T = "",
            } = t[s] || {};
          switch (s) {
            case lr:
              return `${VD}(${f}${E}, ${h}${_}, ${v}${T})`;
            case fr:
              return `${WD}(${f}${E}, ${h}${_}, ${v}${T})`;
            case dr:
              return `${BD}(${f}${E}) ${HD}(${h}${_}) ${jD}(${v}${T})`;
            case Qr:
              return `${kD}(${f}${E}, ${h}${_})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = o;
      Gt(e, xe.TRANSFORM_PREFIXED, o),
        a(e, xe.TRANSFORM_PREFIXED, i),
        SF(n, r) && a(e, xe.TRANSFORM_STYLE_PREFIXED, KD);
    }
    function OF(e, t, r, n) {
      let o = (0, Xa.default)(t, (a, s, c) => `${a} ${c}(${s}${mF(c, r)})`, ""),
        { setStyle: i } = n;
      Gt(e, zr, n), i(e, zr, o);
    }
    function bF(e, t, r, n) {
      let o = (0, Xa.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Gt(e, Yr, n), i(e, Yr, o);
    }
    function SF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === lr && n !== void 0) ||
        (e === fr && n !== void 0) ||
        (e === dr && (t !== void 0 || r !== void 0))
      );
    }
    var AF = "\\(([^)]+)\\)",
      wF = /^rgb/,
      RF = RegExp(`rgba?${AF}`);
    function CF(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function NF({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = Ba[t],
        i = n(e, o),
        a = wF.test(i) ? i : r[o],
        s = CF(RF, a).split($r);
      return {
        rValue: (0, Ot.default)(parseInt(s[0], 10), 255),
        gValue: (0, Ot.default)(parseInt(s[1], 10), 255),
        bValue: (0, Ot.default)(parseInt(s[2], 10), 255),
        aValue: (0, Ot.default)(parseFloat(s[3]), 1),
      };
    }
    function qF(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case pr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: h } = r;
          f !== void 0 &&
            (s === bt && (s = "px"), Gt(e, ut, i), a(e, ut, f + s)),
            h !== void 0 &&
              (c === bt && (c = "px"), Gt(e, ct, i), a(e, ct, h + c));
          break;
        }
        case Zr: {
          OF(e, r, n.config, i);
          break;
        }
        case Jr: {
          bF(e, r, n.config, i);
          break;
        }
        case vr:
        case Er:
        case hr: {
          let s = Ba[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            h = Math.round(r.bValue),
            v = r.aValue;
          Gt(e, s, i),
            a(
              e,
              s,
              v >= 1 ? `rgb(${c},${f},${h})` : `rgba(${c},${f},${h},${v})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Gt(e, o, i), a(e, o, r.value + s);
          break;
        }
      }
    }
    function xF(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case di: {
          let { value: o } = t.config;
          o === zD && xe.IS_BROWSER_ENV
            ? n(e, li, xe.FLEX_PREFIXED)
            : n(e, li, o);
          return;
        }
      }
    }
    function Gt(e, t, r) {
      if (!xe.IS_BROWSER_ENV) return;
      let n = hg[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, cr);
      if (!a) {
        i(e, cr, n);
        return;
      }
      let s = a.split($r).map(Eg);
      s.indexOf(n) === -1 && i(e, cr, s.concat(n).join($r));
    }
    function _g(e, t, r) {
      if (!xe.IS_BROWSER_ENV) return;
      let n = hg[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, cr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          cr,
          a
            .split($r)
            .map(Eg)
            .filter((s) => s !== n)
            .join($r)
        );
    }
    function LF({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: s } = a.action,
          { actionListId: c } = s,
          f = o[c];
        f && ug({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          ug({ actionList: o[i], elementApi: t });
        });
    }
    function ug({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          cg({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((s) => {
              cg({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function cg({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, lt.isPluginType)(o)
          ? (a = (0, lt.clearPlugin)(o))
          : (a = yg({ effect: MF, actionTypeId: o, elementApi: r })),
          Ha({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function PF(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === pr) {
        let { config: a } = t;
        a.widthUnit === bt && n(e, ut, ""), a.heightUnit === bt && n(e, ct, "");
      }
      o(e, cr) && yg({ effect: _g, actionTypeId: i, elementApi: r })(e);
    }
    var yg =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case lr:
          case fr:
          case dr:
          case Qr:
            e(n, xe.TRANSFORM_PREFIXED, r);
            break;
          case Zr:
            e(n, zr, r);
            break;
          case Jr:
            e(n, Yr, r);
            break;
          case vg:
            e(n, ci, r);
            break;
          case pr:
            e(n, ut, r), e(n, ct, r);
            break;
          case vr:
          case Er:
          case hr:
            e(n, Ba[t], r);
            break;
          case di:
            e(n, li, r);
            break;
        }
      };
    function MF(e, t, r) {
      let { setStyle: n } = r;
      _g(e, t, r),
        n(e, t, ""),
        t === xe.TRANSFORM_PREFIXED && n(e, xe.TRANSFORM_STYLE_PREFIXED, "");
    }
    function mg(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function DF(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: h } = c,
            v = h[mg(h)],
            { config: E, actionTypeId: _ } = v;
          o.id === v.id && (s = a + i);
          let T = gg(_) === Va ? 0 : E.duration;
          a += E.delay + T;
        }),
        a > 0 ? (0, GD.optimizeFloat)(s / a) : 0
      );
    }
    function FF({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (s) => (
          i.push((0, tg.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        o &&
          o.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, tg.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function GF(e, { basedOn: t }) {
      return (
        (e === Ft.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Ft.EventBasedOn.ELEMENT || t == null)) ||
        (e === Ft.EventTypeConsts.MOUSE_MOVE && t === Ft.EventBasedOn.ELEMENT)
      );
    }
    function UF(e, t) {
      return e + JD + t;
    }
    function XF(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function VF(e, t) {
      return (0, lg.default)(e && e.sort(), t && t.sort());
    }
    function WF(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + ig + r + ig + n;
    }
  });
  var Ut = u((Le) => {
    "use strict";
    var gr = jt().default;
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.IX2VanillaUtils =
      Le.IX2VanillaPlugins =
      Le.IX2ElementsReducer =
      Le.IX2Easings =
      Le.IX2EasingUtils =
      Le.IX2BrowserSupport =
        void 0;
    var BF = gr(ni());
    Le.IX2BrowserSupport = BF;
    var HF = gr(xa());
    Le.IX2Easings = HF;
    var jF = gr(Pa());
    Le.IX2EasingUtils = jF;
    var kF = gr(Nh());
    Le.IX2ElementsReducer = kF;
    var KF = gr(Da());
    Le.IX2VanillaPlugins = KF;
    var zF = gr(Ig());
    Le.IX2VanillaUtils = zF;
  });
  var Sg = u((vi) => {
    "use strict";
    Object.defineProperty(vi, "__esModule", { value: !0 });
    vi.ixInstances = void 0;
    var Tg = De(),
      Og = Ut(),
      _r = Zt(),
      {
        IX2_RAW_DATA_IMPORTED: YF,
        IX2_SESSION_STOPPED: $F,
        IX2_INSTANCE_ADDED: QF,
        IX2_INSTANCE_STARTED: ZF,
        IX2_INSTANCE_REMOVED: JF,
        IX2_ANIMATION_FRAME_CHANGED: e1,
      } = Tg.IX2EngineActionTypes,
      {
        optimizeFloat: pi,
        applyEasing: bg,
        createBezierEasing: t1,
      } = Og.IX2EasingUtils,
      { RENDER_GENERAL: r1 } = Tg.IX2EngineConstants,
      {
        getItemConfigByKey: ka,
        getRenderType: n1,
        getStyleProp: i1,
      } = Og.IX2VanillaUtils,
      o1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: h,
            skipToValue: v,
          } = e,
          { parameters: E } = t.payload,
          _ = Math.max(1 - a, 0.01),
          T = E[n];
        T == null && ((_ = 1), (T = s));
        let O = Math.max(T, 0) || 0,
          D = pi(O - r),
          b = h ? v : pi(r + D * _),
          R = b * 100;
        if (b === r && e.current) return e;
        let I, L, x, P;
        for (let z = 0, { length: Y } = o; z < Y; z++) {
          let { keyframe: ee, actionItems: V } = o[z];
          if ((z === 0 && (I = V[0]), R >= ee)) {
            I = V[0];
            let w = o[z + 1],
              p = w && R !== ee;
            (L = p ? w.actionItems[0] : null),
              p && ((x = ee / 100), (P = (w.keyframe - ee) / 100));
          }
        }
        let X = {};
        if (I && !L)
          for (let z = 0, { length: Y } = i; z < Y; z++) {
            let ee = i[z];
            X[ee] = ka(c, ee, I.config);
          }
        else if (I && L && x !== void 0 && P !== void 0) {
          let z = (b - x) / P,
            Y = I.config.easing,
            ee = bg(Y, z, f);
          for (let V = 0, { length: w } = i; V < w; V++) {
            let p = i[V],
              M = ka(c, p, I.config),
              $ = (ka(c, p, L.config) - M) * ee + M;
            X[p] = $;
          }
        }
        return (0, _r.merge)(e, { position: b, current: X });
      },
      a1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: h,
            pluginDuration: v,
            instanceDelay: E,
            customEasingFn: _,
            skipMotion: T,
          } = e,
          O = c.config.easing,
          { duration: D, delay: b } = c.config;
        v != null && (D = v),
          (b = E ?? b),
          a === r1 ? (D = 0) : (i || T) && (D = b = 0);
        let { now: R } = t.payload;
        if (r && n) {
          let I = R - (o + b);
          if (s) {
            let z = R - o,
              Y = D + b,
              ee = pi(Math.min(Math.max(0, z / Y), 1));
            e = (0, _r.set)(e, "verboseTimeElapsed", Y * ee);
          }
          if (I < 0) return e;
          let L = pi(Math.min(Math.max(0, I / D), 1)),
            x = bg(O, L, _),
            P = {},
            X = null;
          return (
            h.length &&
              (X = h.reduce((z, Y) => {
                let ee = f[Y],
                  V = parseFloat(n[Y]) || 0,
                  p = (parseFloat(ee) - V) * x + V;
                return (z[Y] = p), z;
              }, {})),
            (P.current = X),
            (P.position = L),
            L === 1 && ((P.active = !1), (P.complete = !0)),
            (0, _r.merge)(e, P)
          );
        }
        return e;
      },
      s1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case YF:
            return t.payload.ixInstances || Object.freeze({});
          case $F:
            return Object.freeze({});
          case QF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: h,
                origin: v,
                destination: E,
                immediate: _,
                verbose: T,
                continuous: O,
                parameterId: D,
                actionGroups: b,
                smoothing: R,
                restingValue: I,
                pluginInstance: L,
                pluginDuration: x,
                instanceDelay: P,
                skipMotion: X,
                skipToValue: z,
              } = t.payload,
              { actionTypeId: Y } = o,
              ee = n1(Y),
              V = i1(ee, Y),
              w = Object.keys(E).filter((M) => E[M] != null),
              { easing: p } = o.config;
            return (0, _r.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: v,
              destination: E,
              destinationKeys: w,
              immediate: _,
              verbose: T,
              current: null,
              actionItem: o,
              actionTypeId: Y,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: ee,
              isCarrier: h,
              styleProp: V,
              continuous: O,
              parameterId: D,
              actionGroups: b,
              smoothing: R,
              restingValue: I,
              pluginInstance: L,
              pluginDuration: x,
              instanceDelay: P,
              skipMotion: X,
              skipToValue: z,
              customEasingFn:
                Array.isArray(p) && p.length === 4 ? t1(p) : void 0,
            });
          }
          case ZF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, _r.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case JF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case e1: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                c = s.continuous ? o1 : a1;
              r = (0, _r.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    vi.ixInstances = s1;
  });
  var Ag = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixParameters = void 0;
    var u1 = De(),
      {
        IX2_RAW_DATA_IMPORTED: c1,
        IX2_SESSION_STOPPED: l1,
        IX2_PARAMETER_CHANGED: f1,
      } = u1.IX2EngineActionTypes,
      d1 = (e = {}, t) => {
        switch (t.type) {
          case c1:
            return t.payload.ixParameters || {};
          case l1:
            return {};
          case f1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ei.ixParameters = d1;
  });
  var wg = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.default = void 0;
    var p1 = Ko(),
      v1 = Pf(),
      E1 = Jf(),
      h1 = td(),
      g1 = Ut(),
      _1 = Sg(),
      y1 = Ag(),
      { ixElements: m1 } = g1.IX2ElementsReducer,
      I1 = (0, p1.combineReducers)({
        ixData: v1.ixData,
        ixRequest: E1.ixRequest,
        ixSession: h1.ixSession,
        ixElements: m1,
        ixInstances: _1.ixInstances,
        ixParameters: y1.ixParameters,
      });
    hi.default = I1;
  });
  var Rg = u((J5, en) => {
    function T1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (en.exports = T1),
      (en.exports.__esModule = !0),
      (en.exports.default = en.exports);
  });
  var Ng = u((eK, Cg) => {
    var O1 = xt(),
      b1 = Ae(),
      S1 = It(),
      A1 = "[object String]";
    function w1(e) {
      return typeof e == "string" || (!b1(e) && S1(e) && O1(e) == A1);
    }
    Cg.exports = w1;
  });
  var xg = u((tK, qg) => {
    var R1 = Aa(),
      C1 = R1("length");
    qg.exports = C1;
  });
  var Pg = u((rK, Lg) => {
    var N1 = "\\ud800-\\udfff",
      q1 = "\\u0300-\\u036f",
      x1 = "\\ufe20-\\ufe2f",
      L1 = "\\u20d0-\\u20ff",
      P1 = q1 + x1 + L1,
      M1 = "\\ufe0e\\ufe0f",
      D1 = "\\u200d",
      F1 = RegExp("[" + D1 + N1 + P1 + M1 + "]");
    function G1(e) {
      return F1.test(e);
    }
    Lg.exports = G1;
  });
  var Bg = u((nK, Wg) => {
    var Dg = "\\ud800-\\udfff",
      U1 = "\\u0300-\\u036f",
      X1 = "\\ufe20-\\ufe2f",
      V1 = "\\u20d0-\\u20ff",
      W1 = U1 + X1 + V1,
      B1 = "\\ufe0e\\ufe0f",
      H1 = "[" + Dg + "]",
      Ka = "[" + W1 + "]",
      za = "\\ud83c[\\udffb-\\udfff]",
      j1 = "(?:" + Ka + "|" + za + ")",
      Fg = "[^" + Dg + "]",
      Gg = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ug = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      k1 = "\\u200d",
      Xg = j1 + "?",
      Vg = "[" + B1 + "]?",
      K1 = "(?:" + k1 + "(?:" + [Fg, Gg, Ug].join("|") + ")" + Vg + Xg + ")*",
      z1 = Vg + Xg + K1,
      Y1 = "(?:" + [Fg + Ka + "?", Ka, Gg, Ug, H1].join("|") + ")",
      Mg = RegExp(za + "(?=" + za + ")|" + Y1 + z1, "g");
    function $1(e) {
      for (var t = (Mg.lastIndex = 0); Mg.test(e); ) ++t;
      return t;
    }
    Wg.exports = $1;
  });
  var jg = u((iK, Hg) => {
    var Q1 = xg(),
      Z1 = Pg(),
      J1 = Bg();
    function e2(e) {
      return Z1(e) ? J1(e) : Q1(e);
    }
    Hg.exports = e2;
  });
  var Kg = u((oK, kg) => {
    var t2 = zn(),
      r2 = Yn(),
      n2 = Lt(),
      i2 = Ng(),
      o2 = jg(),
      a2 = "[object Map]",
      s2 = "[object Set]";
    function u2(e) {
      if (e == null) return 0;
      if (n2(e)) return i2(e) ? o2(e) : e.length;
      var t = r2(e);
      return t == a2 || t == s2 ? e.size : t2(e).length;
    }
    kg.exports = u2;
  });
  var Yg = u((aK, zg) => {
    var c2 = "Expected a function";
    function l2(e) {
      if (typeof e != "function") throw new TypeError(c2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    zg.exports = l2;
  });
  var Ya = u((sK, $g) => {
    var f2 = mt(),
      d2 = (function () {
        try {
          var e = f2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    $g.exports = d2;
  });
  var $a = u((uK, Zg) => {
    var Qg = Ya();
    function p2(e, t, r) {
      t == "__proto__" && Qg
        ? Qg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Zg.exports = p2;
  });
  var e_ = u((cK, Jg) => {
    var v2 = $a(),
      E2 = Gn(),
      h2 = Object.prototype,
      g2 = h2.hasOwnProperty;
    function _2(e, t, r) {
      var n = e[t];
      (!(g2.call(e, t) && E2(n, r)) || (r === void 0 && !(t in e))) &&
        v2(e, t, r);
    }
    Jg.exports = _2;
  });
  var n_ = u((lK, r_) => {
    var y2 = e_(),
      m2 = jr(),
      I2 = Hn(),
      t_ = st(),
      T2 = sr();
    function O2(e, t, r, n) {
      if (!t_(e)) return e;
      t = m2(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var c = T2(t[o]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var h = s[c];
          (f = n ? n(h, c, s) : void 0),
            f === void 0 && (f = t_(h) ? h : I2(t[o + 1]) ? [] : {});
        }
        y2(s, c, f), (s = s[c]);
      }
      return e;
    }
    r_.exports = O2;
  });
  var o_ = u((fK, i_) => {
    var b2 = Zn(),
      S2 = n_(),
      A2 = jr();
    function w2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = b2(e, a);
        r(s, a) && S2(i, A2(a, e), s);
      }
      return i;
    }
    i_.exports = w2;
  });
  var s_ = u((dK, a_) => {
    var R2 = pa(),
      C2 = R2(Object.getPrototypeOf, Object);
    a_.exports = C2;
  });
  var c_ = u((pK, u_) => {
    var N2 = Wn(),
      q2 = s_(),
      x2 = la(),
      L2 = ca(),
      P2 = Object.getOwnPropertySymbols,
      M2 = P2
        ? function (e) {
            for (var t = []; e; ) N2(t, x2(e)), (e = q2(e));
            return t;
          }
        : L2;
    u_.exports = M2;
  });
  var f_ = u((vK, l_) => {
    function D2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    l_.exports = D2;
  });
  var p_ = u((EK, d_) => {
    var F2 = st(),
      G2 = Kn(),
      U2 = f_(),
      X2 = Object.prototype,
      V2 = X2.hasOwnProperty;
    function W2(e) {
      if (!F2(e)) return U2(e);
      var t = G2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !V2.call(e, n))) || r.push(n);
      return r;
    }
    d_.exports = W2;
  });
  var E_ = u((hK, v_) => {
    var B2 = da(),
      H2 = p_(),
      j2 = Lt();
    function k2(e) {
      return j2(e) ? B2(e, !0) : H2(e);
    }
    v_.exports = k2;
  });
  var g_ = u((gK, h_) => {
    var K2 = ua(),
      z2 = c_(),
      Y2 = E_();
    function $2(e) {
      return K2(e, Y2, z2);
    }
    h_.exports = $2;
  });
  var y_ = u((_K, __) => {
    var Q2 = Sa(),
      Z2 = Tt(),
      J2 = o_(),
      eG = g_();
    function tG(e, t) {
      if (e == null) return {};
      var r = Q2(eG(e), function (n) {
        return [n];
      });
      return (
        (t = Z2(t)),
        J2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    __.exports = tG;
  });
  var I_ = u((yK, m_) => {
    var rG = Tt(),
      nG = Yg(),
      iG = y_();
    function oG(e, t) {
      return iG(e, nG(rG(t)));
    }
    m_.exports = oG;
  });
  var O_ = u((mK, T_) => {
    var aG = zn(),
      sG = Yn(),
      uG = Ur(),
      cG = Ae(),
      lG = Lt(),
      fG = Bn(),
      dG = Kn(),
      pG = kn(),
      vG = "[object Map]",
      EG = "[object Set]",
      hG = Object.prototype,
      gG = hG.hasOwnProperty;
    function _G(e) {
      if (e == null) return !0;
      if (
        lG(e) &&
        (cG(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          fG(e) ||
          pG(e) ||
          uG(e))
      )
        return !e.length;
      var t = sG(e);
      if (t == vG || t == EG) return !e.size;
      if (dG(e)) return !aG(e).length;
      for (var r in e) if (gG.call(e, r)) return !1;
      return !0;
    }
    T_.exports = _G;
  });
  var S_ = u((IK, b_) => {
    var yG = $a(),
      mG = Fa(),
      IG = Tt();
    function TG(e, t) {
      var r = {};
      return (
        (t = IG(t, 3)),
        mG(e, function (n, o, i) {
          yG(r, o, t(n, o, i));
        }),
        r
      );
    }
    b_.exports = TG;
  });
  var w_ = u((TK, A_) => {
    function OG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    A_.exports = OG;
  });
  var C_ = u((OK, R_) => {
    var bG = ei();
    function SG(e) {
      return typeof e == "function" ? e : bG;
    }
    R_.exports = SG;
  });
  var q_ = u((bK, N_) => {
    var AG = w_(),
      wG = Ga(),
      RG = C_(),
      CG = Ae();
    function NG(e, t) {
      var r = CG(e) ? AG : wG;
      return r(e, RG(t));
    }
    N_.exports = NG;
  });
  var L_ = u((SK, x_) => {
    var qG = Ye(),
      xG = function () {
        return qG.Date.now();
      };
    x_.exports = xG;
  });
  var D_ = u((AK, M_) => {
    var LG = st(),
      Qa = L_(),
      P_ = ti(),
      PG = "Expected a function",
      MG = Math.max,
      DG = Math.min;
    function FG(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        c,
        f = 0,
        h = !1,
        v = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(PG);
      (t = P_(t) || 0),
        LG(r) &&
          ((h = !!r.leading),
          (v = "maxWait" in r),
          (i = v ? MG(P_(r.maxWait) || 0, t) : i),
          (E = "trailing" in r ? !!r.trailing : E));
      function _(P) {
        var X = n,
          z = o;
        return (n = o = void 0), (f = P), (a = e.apply(z, X)), a;
      }
      function T(P) {
        return (f = P), (s = setTimeout(b, t)), h ? _(P) : a;
      }
      function O(P) {
        var X = P - c,
          z = P - f,
          Y = t - X;
        return v ? DG(Y, i - z) : Y;
      }
      function D(P) {
        var X = P - c,
          z = P - f;
        return c === void 0 || X >= t || X < 0 || (v && z >= i);
      }
      function b() {
        var P = Qa();
        if (D(P)) return R(P);
        s = setTimeout(b, O(P));
      }
      function R(P) {
        return (s = void 0), E && n ? _(P) : ((n = o = void 0), a);
      }
      function I() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = o = s = void 0);
      }
      function L() {
        return s === void 0 ? a : R(Qa());
      }
      function x() {
        var P = Qa(),
          X = D(P);
        if (((n = arguments), (o = this), (c = P), X)) {
          if (s === void 0) return T(c);
          if (v) return clearTimeout(s), (s = setTimeout(b, t)), _(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (x.cancel = I), (x.flush = L), x;
    }
    M_.exports = FG;
  });
  var G_ = u((wK, F_) => {
    var GG = D_(),
      UG = st(),
      XG = "Expected a function";
    function VG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(XG);
      return (
        UG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        GG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    F_.exports = VG;
  });
  var gi = u((ie) => {
    "use strict";
    var WG = it().default;
    Object.defineProperty(ie, "__esModule", { value: !0 });
    ie.viewportWidthChanged =
      ie.testFrameRendered =
      ie.stopRequested =
      ie.sessionStopped =
      ie.sessionStarted =
      ie.sessionInitialized =
      ie.rawDataImported =
      ie.previewRequested =
      ie.playbackRequested =
      ie.parameterChanged =
      ie.mediaQueriesDefined =
      ie.instanceStarted =
      ie.instanceRemoved =
      ie.instanceAdded =
      ie.eventStateChanged =
      ie.eventListenerAdded =
      ie.elementStateChanged =
      ie.clearRequested =
      ie.animationFrameChanged =
      ie.actionListPlaybackChanged =
        void 0;
    var U_ = WG(Lr()),
      X_ = De(),
      BG = Ut(),
      {
        IX2_RAW_DATA_IMPORTED: HG,
        IX2_SESSION_INITIALIZED: jG,
        IX2_SESSION_STARTED: kG,
        IX2_SESSION_STOPPED: KG,
        IX2_PREVIEW_REQUESTED: zG,
        IX2_PLAYBACK_REQUESTED: YG,
        IX2_STOP_REQUESTED: $G,
        IX2_CLEAR_REQUESTED: QG,
        IX2_EVENT_LISTENER_ADDED: ZG,
        IX2_TEST_FRAME_RENDERED: JG,
        IX2_EVENT_STATE_CHANGED: eU,
        IX2_ANIMATION_FRAME_CHANGED: tU,
        IX2_PARAMETER_CHANGED: rU,
        IX2_INSTANCE_ADDED: nU,
        IX2_INSTANCE_STARTED: iU,
        IX2_INSTANCE_REMOVED: oU,
        IX2_ELEMENT_STATE_CHANGED: aU,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: sU,
        IX2_VIEWPORT_WIDTH_CHANGED: uU,
        IX2_MEDIA_QUERIES_DEFINED: cU,
      } = X_.IX2EngineActionTypes,
      { reifyState: lU } = BG.IX2VanillaUtils,
      fU = (e) => ({ type: HG, payload: (0, U_.default)({}, lU(e)) });
    ie.rawDataImported = fU;
    var dU = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: jG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ie.sessionInitialized = dU;
    var pU = () => ({ type: kG });
    ie.sessionStarted = pU;
    var vU = () => ({ type: KG });
    ie.sessionStopped = vU;
    var EU = ({ rawData: e, defer: t }) => ({
      type: zG,
      payload: { defer: t, rawData: e },
    });
    ie.previewRequested = EU;
    var hU = ({
      actionTypeId: e = X_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: YG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    ie.playbackRequested = hU;
    var gU = (e) => ({ type: $G, payload: { actionListId: e } });
    ie.stopRequested = gU;
    var _U = () => ({ type: QG });
    ie.clearRequested = _U;
    var yU = (e, t) => ({
      type: ZG,
      payload: { target: e, listenerParams: t },
    });
    ie.eventListenerAdded = yU;
    var mU = (e = 1) => ({ type: JG, payload: { step: e } });
    ie.testFrameRendered = mU;
    var IU = (e, t) => ({ type: eU, payload: { stateKey: e, newState: t } });
    ie.eventStateChanged = IU;
    var TU = (e, t) => ({ type: tU, payload: { now: e, parameters: t } });
    ie.animationFrameChanged = TU;
    var OU = (e, t) => ({ type: rU, payload: { key: e, value: t } });
    ie.parameterChanged = OU;
    var bU = (e) => ({ type: nU, payload: (0, U_.default)({}, e) });
    ie.instanceAdded = bU;
    var SU = (e, t) => ({ type: iU, payload: { instanceId: e, time: t } });
    ie.instanceStarted = SU;
    var AU = (e) => ({ type: oU, payload: { instanceId: e } });
    ie.instanceRemoved = AU;
    var wU = (e, t, r, n) => ({
      type: aU,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ie.elementStateChanged = wU;
    var RU = ({ actionListId: e, isPlaying: t }) => ({
      type: sU,
      payload: { actionListId: e, isPlaying: t },
    });
    ie.actionListPlaybackChanged = RU;
    var CU = ({ width: e, mediaQueries: t }) => ({
      type: uU,
      payload: { width: e, mediaQueries: t },
    });
    ie.viewportWidthChanged = CU;
    var NU = () => ({ type: cU });
    ie.mediaQueriesDefined = NU;
  });
  var B_ = u((Re) => {
    "use strict";
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.elementContains = WU;
    Re.getChildElements = HU;
    Re.getClosestElement = void 0;
    Re.getProperty = FU;
    Re.getQuerySelector = UU;
    Re.getRefType = KU;
    Re.getSiblingElements = jU;
    Re.getStyle = DU;
    Re.getValidDocument = XU;
    Re.isSiblingNode = BU;
    Re.matchSelector = GU;
    Re.queryDocument = VU;
    Re.setStyle = MU;
    var qU = Ut(),
      xU = De(),
      { ELEMENT_MATCHES: Za } = qU.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: V_,
        HTML_ELEMENT: LU,
        PLAIN_OBJECT: PU,
        WF_PAGE: W_,
      } = xU.IX2EngineConstants;
    function MU(e, t, r) {
      e.style[t] = r;
    }
    function DU(e, t) {
      return e.style[t];
    }
    function FU(e, t) {
      return e[t];
    }
    function GU(e) {
      return (t) => t[Za](e);
    }
    function UU({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(V_) !== -1) {
          let n = e.split(V_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(W_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function XU(e) {
      return e == null || e === document.documentElement.getAttribute(W_)
        ? document
        : null;
    }
    function VU(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function WU(e, t) {
      return e.contains(t);
    }
    function BU(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function HU(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function jU(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var kU = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Za] && r[Za](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Re.getClosestElement = kU;
    function KU(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? LU
          : PU
        : null;
    }
  });
  var Ja = u((NK, j_) => {
    var zU = st(),
      H_ = Object.create,
      YU = (function () {
        function e() {}
        return function (t) {
          if (!zU(t)) return {};
          if (H_) return H_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    j_.exports = YU;
  });
  var _i = u((qK, k_) => {
    function $U() {}
    k_.exports = $U;
  });
  var mi = u((xK, K_) => {
    var QU = Ja(),
      ZU = _i();
    function yi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    yi.prototype = QU(ZU.prototype);
    yi.prototype.constructor = yi;
    K_.exports = yi;
  });
  var Q_ = u((LK, $_) => {
    var z_ = er(),
      JU = Ur(),
      eX = Ae(),
      Y_ = z_ ? z_.isConcatSpreadable : void 0;
    function tX(e) {
      return eX(e) || JU(e) || !!(Y_ && e && e[Y_]);
    }
    $_.exports = tX;
  });
  var ey = u((PK, J_) => {
    var rX = Wn(),
      nX = Q_();
    function Z_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = nX), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? Z_(s, t - 1, r, n, o)
            : rX(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    J_.exports = Z_;
  });
  var ry = u((MK, ty) => {
    var iX = ey();
    function oX(e) {
      var t = e == null ? 0 : e.length;
      return t ? iX(e, 1) : [];
    }
    ty.exports = oX;
  });
  var iy = u((DK, ny) => {
    function aX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    ny.exports = aX;
  });
  var sy = u((FK, ay) => {
    var sX = iy(),
      oy = Math.max;
    function uX(e, t, r) {
      return (
        (t = oy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = oy(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), sX(e, this, s);
        }
      );
    }
    ay.exports = uX;
  });
  var cy = u((GK, uy) => {
    function cX(e) {
      return function () {
        return e;
      };
    }
    uy.exports = cX;
  });
  var dy = u((UK, fy) => {
    var lX = cy(),
      ly = Ya(),
      fX = ei(),
      dX = ly
        ? function (e, t) {
            return ly(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: lX(t),
              writable: !0,
            });
          }
        : fX;
    fy.exports = dX;
  });
  var vy = u((XK, py) => {
    var pX = 800,
      vX = 16,
      EX = Date.now;
    function hX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = EX(),
          o = vX - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= pX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    py.exports = hX;
  });
  var hy = u((VK, Ey) => {
    var gX = dy(),
      _X = vy(),
      yX = _X(gX);
    Ey.exports = yX;
  });
  var _y = u((WK, gy) => {
    var mX = ry(),
      IX = sy(),
      TX = hy();
    function OX(e) {
      return TX(IX(e, void 0, mX), e + "");
    }
    gy.exports = OX;
  });
  var Iy = u((BK, my) => {
    var yy = va(),
      bX = yy && new yy();
    my.exports = bX;
  });
  var Oy = u((HK, Ty) => {
    function SX() {}
    Ty.exports = SX;
  });
  var es = u((jK, Sy) => {
    var by = Iy(),
      AX = Oy(),
      wX = by
        ? function (e) {
            return by.get(e);
          }
        : AX;
    Sy.exports = wX;
  });
  var wy = u((kK, Ay) => {
    var RX = {};
    Ay.exports = RX;
  });
  var ts = u((KK, Cy) => {
    var Ry = wy(),
      CX = Object.prototype,
      NX = CX.hasOwnProperty;
    function qX(e) {
      for (
        var t = e.name + "", r = Ry[t], n = NX.call(Ry, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    Cy.exports = qX;
  });
  var Ti = u((zK, Ny) => {
    var xX = Ja(),
      LX = _i(),
      PX = 4294967295;
    function Ii(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = PX),
        (this.__views__ = []);
    }
    Ii.prototype = xX(LX.prototype);
    Ii.prototype.constructor = Ii;
    Ny.exports = Ii;
  });
  var xy = u((YK, qy) => {
    function MX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    qy.exports = MX;
  });
  var Py = u(($K, Ly) => {
    var DX = Ti(),
      FX = mi(),
      GX = xy();
    function UX(e) {
      if (e instanceof DX) return e.clone();
      var t = new FX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = GX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Ly.exports = UX;
  });
  var Fy = u((QK, Dy) => {
    var XX = Ti(),
      My = mi(),
      VX = _i(),
      WX = Ae(),
      BX = It(),
      HX = Py(),
      jX = Object.prototype,
      kX = jX.hasOwnProperty;
    function Oi(e) {
      if (BX(e) && !WX(e) && !(e instanceof XX)) {
        if (e instanceof My) return e;
        if (kX.call(e, "__wrapped__")) return HX(e);
      }
      return new My(e);
    }
    Oi.prototype = VX.prototype;
    Oi.prototype.constructor = Oi;
    Dy.exports = Oi;
  });
  var Uy = u((ZK, Gy) => {
    var KX = Ti(),
      zX = es(),
      YX = ts(),
      $X = Fy();
    function QX(e) {
      var t = YX(e),
        r = $X[t];
      if (typeof r != "function" || !(t in KX.prototype)) return !1;
      if (e === r) return !0;
      var n = zX(r);
      return !!n && e === n[0];
    }
    Gy.exports = QX;
  });
  var By = u((JK, Wy) => {
    var Xy = mi(),
      ZX = _y(),
      JX = es(),
      rs = ts(),
      eV = Ae(),
      Vy = Uy(),
      tV = "Expected a function",
      rV = 8,
      nV = 32,
      iV = 128,
      oV = 256;
    function aV(e) {
      return ZX(function (t) {
        var r = t.length,
          n = r,
          o = Xy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(tV);
          if (o && !a && rs(i) == "wrapper") var a = new Xy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = rs(i),
            c = s == "wrapper" ? JX(i) : void 0;
          c &&
          Vy(c[0]) &&
          c[1] == (iV | rV | nV | oV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[rs(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && Vy(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            h = f[0];
          if (a && f.length == 1 && eV(h)) return a.plant(h).value();
          for (var v = 0, E = r ? t[v].apply(this, f) : h; ++v < r; )
            E = t[v].call(this, E);
          return E;
        };
      });
    }
    Wy.exports = aV;
  });
  var jy = u((ez, Hy) => {
    var sV = By(),
      uV = sV();
    Hy.exports = uV;
  });
  var Ky = u((tz, ky) => {
    function cV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ky.exports = cV;
  });
  var Yy = u((rz, zy) => {
    var lV = Ky(),
      ns = ti();
    function fV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ns(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ns(t)), (t = t === t ? t : 0)),
        lV(ns(e), t, r)
      );
    }
    zy.exports = fV;
  });
  var pm = u((Ri) => {
    "use strict";
    var wi = it().default;
    Object.defineProperty(Ri, "__esModule", { value: !0 });
    Ri.default = void 0;
    var Xe = wi(Lr()),
      dV = wi(jy()),
      pV = wi(Jn()),
      vV = wi(Yy()),
      Xt = De(),
      is = us(),
      bi = gi(),
      EV = Ut(),
      {
        MOUSE_CLICK: hV,
        MOUSE_SECOND_CLICK: gV,
        MOUSE_DOWN: _V,
        MOUSE_UP: yV,
        MOUSE_OVER: mV,
        MOUSE_OUT: IV,
        DROPDOWN_CLOSE: TV,
        DROPDOWN_OPEN: OV,
        SLIDER_ACTIVE: bV,
        SLIDER_INACTIVE: SV,
        TAB_ACTIVE: AV,
        TAB_INACTIVE: wV,
        NAVBAR_CLOSE: RV,
        NAVBAR_OPEN: CV,
        MOUSE_MOVE: NV,
        PAGE_SCROLL_DOWN: im,
        SCROLL_INTO_VIEW: om,
        SCROLL_OUT_OF_VIEW: qV,
        PAGE_SCROLL_UP: xV,
        SCROLLING_IN_VIEW: LV,
        PAGE_FINISH: am,
        ECOMMERCE_CART_CLOSE: PV,
        ECOMMERCE_CART_OPEN: MV,
        PAGE_START: sm,
        PAGE_SCROLL: DV,
      } = Xt.EventTypeConsts,
      os = "COMPONENT_ACTIVE",
      um = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: $y } = Xt.IX2EngineConstants,
      { getNamespacedParameterId: Qy } = EV.IX2VanillaUtils,
      cm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      rn = cm(({ element: e, nativeEvent: t }) => e === t.target),
      FV = cm(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ft = (0, dV.default)([rn, FV]),
      lm = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !UV[o.eventTypeId]) return o;
        }
        return null;
      },
      GV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!lm(e, n);
      },
      Ge = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          f = lm(e, c);
        return (
          f &&
            (0, is.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + $y + n.split($y)[1],
              actionListId: (0, pV.default)(f, "action.config.actionListId"),
            }),
          (0, is.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, is.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      },
      $e = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      nn = { handler: $e(ft, Ge) },
      fm = (0, Xe.default)({}, nn, { types: [os, um].join(" ") }),
      as = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      Zy = "mouseover mouseout",
      ss = { types: as },
      UV = { PAGE_START: sm, PAGE_FINISH: am },
      tn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, vV.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      XV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      VV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      WV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = tn(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return XV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      dm = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [os, um].indexOf(n) !== -1 ? n === os : r.isActive,
          i = (0, Xe.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      Jy = (e) => (t, r) => {
        let n = { elementHovered: VV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      BV = (e) => (t, r) => {
        let n = (0, Xe.default)({}, r, { elementVisible: WV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      em =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = tn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            h = f === "PX",
            v = o - i,
            E = Number((n / v).toFixed(2));
          if (r && r.percentTop === E) return r;
          let _ = (h ? c : (i * (c || 0)) / 100) / v,
            T,
            O,
            D = 0;
          r &&
            ((T = E > r.percentTop),
            (O = r.scrollingDown !== T),
            (D = O ? E : r.anchorTop));
          let b = s === im ? E >= D + _ : E <= D - _,
            R = (0, Xe.default)({}, r, {
              percentTop: E,
              inBounds: b,
              anchorTop: D,
              scrollingDown: T,
            });
          return (r && b && (O || R.inBounds !== r.inBounds) && e(t, R)) || R;
        },
      HV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      jV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      kV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      tm =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Si = (e = !0) =>
        (0, Xe.default)({}, fm, {
          handler: $e(
            e ? ft : rn,
            dm((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        }),
      Ai = (e = !0) =>
        (0, Xe.default)({}, fm, {
          handler: $e(
            e ? ft : rn,
            dm((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        }),
      rm = (0, Xe.default)({}, ss, {
        handler: BV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === om) === r
            ? (Ge(e), (0, Xe.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      nm = 0.05,
      KV = {
        [bV]: Si(),
        [SV]: Ai(),
        [OV]: Si(),
        [TV]: Ai(),
        [CV]: Si(!1),
        [RV]: Ai(!1),
        [AV]: Si(),
        [wV]: Ai(),
        [MV]: { types: "ecommerce-cart-open", handler: $e(ft, Ge) },
        [PV]: { types: "ecommerce-cart-close", handler: $e(ft, Ge) },
        [hV]: {
          types: "click",
          handler: $e(
            ft,
            tm((e, { clickCount: t }) => {
              GV(e) ? t === 1 && Ge(e) : Ge(e);
            })
          ),
        },
        [gV]: {
          types: "click",
          handler: $e(
            ft,
            tm((e, { clickCount: t }) => {
              t === 2 && Ge(e);
            })
          ),
        },
        [_V]: (0, Xe.default)({}, nn, { types: "mousedown" }),
        [yV]: (0, Xe.default)({}, nn, { types: "mouseup" }),
        [mV]: {
          types: Zy,
          handler: $e(
            ft,
            Jy((e, t) => {
              t.elementHovered && Ge(e);
            })
          ),
        },
        [IV]: {
          types: Zy,
          handler: $e(
            ft,
            Jy((e, t) => {
              t.elementHovered || Ge(e);
            })
          ),
        },
        [NV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: h = 0,
              } = r,
              {
                clientX: v = i.clientX,
                clientY: E = i.clientY,
                pageX: _ = i.pageX,
                pageY: T = i.pageY,
              } = n,
              O = s === "X_AXIS",
              D = n.type === "mouseout",
              b = h / 100,
              R = c,
              I = !1;
            switch (a) {
              case Xt.EventBasedOn.VIEWPORT: {
                b = O
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              }
              case Xt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: L,
                  scrollTop: x,
                  scrollWidth: P,
                  scrollHeight: X,
                } = tn();
                b = O ? Math.min(L + _, P) / P : Math.min(x + T, X) / X;
                break;
              }
              case Xt.EventBasedOn.ELEMENT:
              default: {
                R = Qy(o, c);
                let L = n.type.indexOf("mouse") === 0;
                if (L && ft({ element: t, nativeEvent: n }) !== !0) break;
                let x = t.getBoundingClientRect(),
                  { left: P, top: X, width: z, height: Y } = x;
                if (!L && !HV({ left: v, top: E }, x)) break;
                (I = !0), (b = O ? (v - P) / z : (E - X) / Y);
                break;
              }
            }
            return (
              D && (b > 1 - nm || b < nm) && (b = Math.round(b)),
              (a !== Xt.EventBasedOn.ELEMENT || I || I !== i.elementHovered) &&
                ((b = f ? 1 - b : b),
                e.dispatch((0, bi.parameterChanged)(R, b))),
              { elementHovered: I, clientX: v, clientY: E, pageX: _, pageY: T }
            );
          },
        },
        [DV]: {
          types: as,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = tn(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch((0, bi.parameterChanged)(r, s));
          },
        },
        [LV]: {
          types: as,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = tn(),
              {
                basedOn: h,
                selectedAxis: v,
                continuousParameterGroupId: E,
                startsEntering: _,
                startsExiting: T,
                addEndOffset: O,
                addStartOffset: D,
                addOffsetValue: b = 0,
                endOffsetValue: R = 0,
              } = r,
              I = v === "X_AXIS";
            if (h === Xt.EventBasedOn.VIEWPORT) {
              let L = I ? i / s : a / c;
              return (
                L !== o.scrollPercent &&
                  t.dispatch((0, bi.parameterChanged)(E, L)),
                { scrollPercent: L }
              );
            } else {
              let L = Qy(n, E),
                x = e.getBoundingClientRect(),
                P = (D ? b : 0) / 100,
                X = (O ? R : 0) / 100;
              (P = _ ? P : 1 - P), (X = T ? X : 1 - X);
              let z = x.top + Math.min(x.height * P, f),
                ee = x.top + x.height * X - z,
                V = Math.min(f + ee, c),
                p = Math.min(Math.max(0, f - z), V) / V;
              return (
                p !== o.scrollPercent &&
                  t.dispatch((0, bi.parameterChanged)(L, p)),
                { scrollPercent: p }
              );
            }
          },
        },
        [om]: rm,
        [qV]: rm,
        [im]: (0, Xe.default)({}, ss, {
          handler: em((e, t) => {
            t.scrollingDown && Ge(e);
          }),
        }),
        [xV]: (0, Xe.default)({}, ss, {
          handler: em((e, t) => {
            t.scrollingDown || Ge(e);
          }),
        }),
        [am]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: $e(rn, jV(Ge)),
        },
        [sm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: $e(rn, kV(Ge)),
        },
      };
    Ri.default = KV;
  });
  var us = u((At) => {
    "use strict";
    var Ze = it().default,
      zV = jt().default;
    Object.defineProperty(At, "__esModule", { value: !0 });
    At.observeRequests = OW;
    At.startActionGroup = Es;
    At.startEngine = xi;
    At.stopActionGroup = vs;
    At.stopAllActionGroups = Tm;
    At.stopEngine = Li;
    var YV = Ze(Lr()),
      $V = Ze(Rg()),
      QV = Ze(Na()),
      St = Ze(Jn()),
      ZV = Ze(Kg()),
      JV = Ze(I_()),
      eW = Ze(O_()),
      tW = Ze(S_()),
      on = Ze(q_()),
      rW = Ze(G_()),
      Qe = De(),
      hm = Ut(),
      _e = gi(),
      Te = zV(B_()),
      nW = Ze(pm()),
      iW = ["store", "computedStyle"],
      oW = Object.keys(Qe.QuickEffectIds),
      cs = (e) => oW.includes(e),
      {
        COLON_DELIMITER: ls,
        BOUNDARY_SELECTOR: Ci,
        HTML_ELEMENT: gm,
        RENDER_GENERAL: aW,
        W_MOD_IX: vm,
      } = Qe.IX2EngineConstants,
      {
        getAffectedElements: Ni,
        getElementId: sW,
        getDestinationValues: fs,
        observeStore: Vt,
        getInstanceId: uW,
        renderHTMLElement: cW,
        clearAllStyles: _m,
        getMaxDurationItemIndex: lW,
        getComputedStyle: fW,
        getInstanceOrigin: dW,
        reduceListToGroup: pW,
        shouldNamespaceEventParameter: vW,
        getNamespacedParameterId: EW,
        shouldAllowMediaQuery: qi,
        cleanupHTMLElement: hW,
        stringifyTarget: gW,
        mediaQueriesEqual: _W,
        shallowEqual: yW,
      } = hm.IX2VanillaUtils,
      {
        isPluginType: ds,
        createPluginInstance: ps,
        getPluginDuration: mW,
      } = hm.IX2VanillaPlugins,
      Em = navigator.userAgent,
      IW = Em.match(/iPad/i) || Em.match(/iPhone/),
      TW = 12;
    function OW(e) {
      Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: AW }),
        Vt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: wW,
        }),
        Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: RW }),
        Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: CW });
    }
    function bW(e) {
      Vt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Li(e),
            _m({ store: e, elementApi: Te }),
            xi({ store: e, allowEvents: !0 }),
            ym();
        },
      });
    }
    function SW(e, t) {
      let r = Vt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function AW({ rawData: e, defer: t }, r) {
      let n = () => {
        xi({ store: r, rawData: e, allowEvents: !0 }), ym();
      };
      t ? setTimeout(n, 0) : n();
    }
    function ym() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function wW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: h } = e;
      if (n && o && h && s) {
        let v = h.actionLists[n];
        v && (h = pW({ actionList: v, actionItemId: o, rawData: h }));
      }
      if (
        (xi({ store: t, rawData: h, allowEvents: a, testManual: c }),
        (n && r === Qe.ActionTypeConsts.GENERAL_START_ACTION) || cs(r))
      ) {
        vs({ store: t, actionListId: n }),
          Im({ store: t, actionListId: n, eventId: i });
        let v = Es({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          v &&
          t.dispatch(
            (0, _e.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function RW({ actionListId: e }, t) {
      e ? vs({ store: t, actionListId: e }) : Tm({ store: t }), Li(t);
    }
    function CW(e, t) {
      Li(t), _m({ store: t, elementApi: Te });
    }
    function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, _e.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, _e.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ci),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (MW(e),
            NW(),
            e.getState().ixSession.hasDefinedMediaQueries && bW(e)),
          e.dispatch((0, _e.sessionStarted)()),
          qW(e, n));
    }
    function NW() {
      let { documentElement: e } = document;
      e.className.indexOf(vm) === -1 && (e.className += ` ${vm}`);
    }
    function qW(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, _e.animationFrameChanged)(n, i)),
          t ? SW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Li(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(xW), e.dispatch((0, _e.sessionStopped)());
      }
    }
    function xW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function LW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: h } = e.getState(),
        { events: v } = f,
        E = v[n],
        { eventTypeId: _ } = E,
        T = {},
        O = {},
        D = [],
        { continuousActionGroups: b } = a,
        { id: R } = a;
      vW(_, o) && (R = EW(t, R));
      let I = h.hasBoundaryNodes && r ? Te.getClosestElement(r, Ci) : null;
      b.forEach((L) => {
        let { keyframe: x, actionItems: P } = L;
        P.forEach((X) => {
          let { actionTypeId: z } = X,
            { target: Y } = X.config;
          if (!Y) return;
          let ee = Y.boundaryMode ? I : null,
            V = gW(Y) + ls + z;
          if (((O[V] = PW(O[V], x, X)), !T[V])) {
            T[V] = !0;
            let { config: w } = X;
            Ni({
              config: w,
              event: E,
              eventTarget: r,
              elementRoot: ee,
              elementApi: Te,
            }).forEach((p) => {
              D.push({ element: p, key: V });
            });
          }
        });
      }),
        D.forEach(({ element: L, key: x }) => {
          let P = O[x],
            X = (0, St.default)(P, "[0].actionItems[0]", {}),
            { actionTypeId: z } = X,
            Y = ds(z) ? ps(z)(L, X) : null,
            ee = fs({ element: L, actionItem: X, elementApi: Te }, Y);
          hs({
            store: e,
            element: L,
            eventId: n,
            actionListId: i,
            actionItem: X,
            destination: ee,
            continuous: !0,
            parameterId: R,
            actionGroups: P,
            smoothing: s,
            restingValue: c,
            pluginInstance: Y,
          });
        });
    }
    function PW(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function MW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      mm(e),
        (0, on.default)(r, (o, i) => {
          let a = nW.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          VW({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && FW(e);
    }
    var DW = ["resize", "orientationchange"];
    function FW(e) {
      let t = () => {
        mm(e);
      };
      DW.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, _e.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function mm(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, _e.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var GW = (e, t) => (0, JV.default)((0, tW.default)(e, t), eW.default),
      UW = (e, t) => {
        (0, on.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + ls + i;
            t(o, n, a);
          });
        });
      },
      XW = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Ni({ config: t, elementApi: Te });
      };
    function VW({ logic: e, store: t, events: r }) {
      WW(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        s = GW(r, XW);
      if (!(0, ZV.default)(s)) return;
      (0, on.default)(s, (v, E) => {
        let _ = r[E],
          { action: T, id: O, mediaQueries: D = i.mediaQueryKeys } = _,
          { actionListId: b } = T.config;
        _W(D, i.mediaQueryKeys) || t.dispatch((0, _e.mediaQueriesDefined)()),
          T.actionTypeId === Qe.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(_.config) ? _.config : [_.config]).forEach((I) => {
              let { continuousParameterGroupId: L } = I,
                x = (0, St.default)(a, `${b}.continuousParameterGroups`, []),
                P = (0, QV.default)(x, ({ id: Y }) => Y === L),
                X = (I.smoothing || 0) / 100,
                z = (I.restingState || 0) / 100;
              P &&
                v.forEach((Y, ee) => {
                  let V = O + ls + ee;
                  LW({
                    store: t,
                    eventStateKey: V,
                    eventTarget: Y,
                    eventId: O,
                    eventConfig: I,
                    actionListId: b,
                    parameterGroup: P,
                    smoothing: X,
                    restingValue: z,
                  });
                });
            }),
          (T.actionTypeId === Qe.ActionTypeConsts.GENERAL_START_ACTION ||
            cs(T.actionTypeId)) &&
            Im({ store: t, actionListId: b, eventId: O });
      });
      let c = (v) => {
          let { ixSession: E } = t.getState();
          UW(s, (_, T, O) => {
            let D = r[T],
              b = E.eventState[O],
              { action: R, mediaQueries: I = i.mediaQueryKeys } = D;
            if (!qi(I, E.mediaQueryKey)) return;
            let L = (x = {}) => {
              let P = o(
                {
                  store: t,
                  element: _,
                  event: D,
                  eventConfig: x,
                  nativeEvent: v,
                  eventStateKey: O,
                },
                b
              );
              yW(P, b) || t.dispatch((0, _e.eventStateChanged)(O, P));
            };
            R.actionTypeId === Qe.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(D.config) ? D.config : [D.config]).forEach(L)
              : L();
          });
        },
        f = (0, rW.default)(c, TW),
        h = ({ target: v = document, types: E, throttle: _ }) => {
          E.split(" ")
            .filter(Boolean)
            .forEach((T) => {
              let O = _ ? f : c;
              v.addEventListener(T, O),
                t.dispatch((0, _e.eventListenerAdded)(v, [T, O]));
            });
        };
      Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
    }
    function WW(e) {
      if (!IW) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Te.getQuerySelector(i);
        t[a] ||
          ((o === Qe.EventTypeConsts.MOUSE_CLICK ||
            o === Qe.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Im({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        s = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, St.default)(c, "actionItemGroups[0].actionItems", []),
          h = (0, St.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!qi(h, o.mediaQueryKey)) return;
        f.forEach((v) => {
          var E;
          let { config: _, actionTypeId: T } = v,
            O =
              (_ == null || (E = _.target) === null || E === void 0
                ? void 0
                : E.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : _,
            D = Ni({ config: O, event: s, elementApi: Te }),
            b = ds(T);
          D.forEach((R) => {
            let I = b ? ps(T)(R, v) : null;
            hs({
              destination: fs({ element: R, actionItem: v, elementApi: Te }, I),
              immediate: !0,
              store: e,
              element: R,
              eventId: r,
              actionItem: v,
              actionListId: t,
              pluginInstance: I,
            });
          });
        });
      }
    }
    function Tm({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, on.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          gs(r, e),
            o &&
              e.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function vs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Te.getClosestElement(r, Ci) : null;
      (0, on.default)(i, (c) => {
        let f = (0, St.default)(c, "actionItem.config.target.boundaryMode"),
          h = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && h) {
          if (s && f && !Te.elementContains(s, c.element)) return;
          gs(c, e),
            c.verbose &&
              e.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Es({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: h } = e.getState(),
        { events: v } = f,
        E = v[t] || {},
        { mediaQueries: _ = f.mediaQueryKeys } = E,
        T = (0, St.default)(f, `actionLists.${o}`, {}),
        { actionItemGroups: O, useFirstGroupAsInitialState: D } = T;
      if (!O || !O.length) return !1;
      i >= O.length && (0, St.default)(E, "config.loop") && (i = 0),
        i === 0 && D && i++;
      let R =
          (i === 0 || (i === 1 && D)) &&
          cs((c = E.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? E.config.delay
            : void 0,
        I = (0, St.default)(O, [i, "actionItems"], []);
      if (!I.length || !qi(_, h.mediaQueryKey)) return !1;
      let L = h.hasBoundaryNodes && r ? Te.getClosestElement(r, Ci) : null,
        x = lW(I),
        P = !1;
      return (
        I.forEach((X, z) => {
          let { config: Y, actionTypeId: ee } = X,
            V = ds(ee),
            { target: w } = Y;
          if (!w) return;
          let p = w.boundaryMode ? L : null;
          Ni({
            config: Y,
            event: E,
            eventTarget: r,
            elementRoot: p,
            elementApi: Te,
          }).forEach((q, G) => {
            let $ = V ? ps(ee)(q, X) : null,
              Z = V ? mW(ee)(q, X) : null;
            P = !0;
            let F = x === z && G === 0,
              j = fW({ element: q, actionItem: X }),
              K = fs({ element: q, actionItem: X, elementApi: Te }, $);
            hs({
              store: e,
              element: q,
              actionItem: X,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: F,
              computedStyle: j,
              destination: K,
              immediate: a,
              verbose: s,
              pluginInstance: $,
              pluginDuration: Z,
              instanceDelay: R,
            });
          });
        }),
        P
      );
    }
    function hs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, $V.default)(e, iW),
        {
          element: i,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: h,
          eventId: v,
        } = o,
        E = !f,
        _ = uW(),
        { ixElements: T, ixSession: O, ixData: D } = r.getState(),
        b = sW(T, i),
        { refState: R } = T[b] || {},
        I = Te.getRefType(i),
        L = O.reducedMotion && Qe.ReducedMotionTypes[a.actionTypeId],
        x;
      if (L && f)
        switch (
          (t = D.events[v]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Qe.EventTypeConsts.MOUSE_MOVE:
          case Qe.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            x = h;
            break;
          default:
            x = 0.5;
            break;
        }
      let P = dW(i, R, n, a, Te, c);
      if (
        (r.dispatch(
          (0, _e.instanceAdded)(
            (0, YV.default)(
              {
                instanceId: _,
                elementId: b,
                origin: P,
                refType: I,
                skipMotion: L,
                skipToValue: x,
              },
              o
            )
          )
        ),
        Om(document.body, "ix2-animation-started", _),
        s)
      ) {
        BW(r, _);
        return;
      }
      Vt({ store: r, select: ({ ixInstances: X }) => X[_], onChange: bm }),
        E && r.dispatch((0, _e.instanceStarted)(_, O.tick));
    }
    function gs(e, t) {
      Om(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === gm && hW(i, n, Te), t.dispatch((0, _e.instanceRemoved)(e.id));
    }
    function Om(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function BW(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, _e.instanceStarted)(t, 0)),
        e.dispatch((0, _e.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      bm(n[t], e);
    }
    function bm(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: h,
          eventId: v,
          eventTarget: E,
          eventStateKey: _,
          actionListId: T,
          isCarrier: O,
          styleProp: D,
          verbose: b,
          pluginInstance: R,
        } = e,
        { ixData: I, ixSession: L } = t.getState(),
        { events: x } = I,
        P = x[v] || {},
        { mediaQueries: X = I.mediaQueryKeys } = P;
      if (qi(X, L.mediaQueryKey) && (n || r || o)) {
        if (f || (c === aW && o)) {
          t.dispatch((0, _e.elementStateChanged)(i, s, f, a));
          let { ixElements: z } = t.getState(),
            { ref: Y, refType: ee, refState: V } = z[i] || {},
            w = V && V[s];
          switch (ee) {
            case gm: {
              cW(Y, V, w, v, a, D, Te, c, R);
              break;
            }
          }
        }
        if (o) {
          if (O) {
            let z = Es({
              store: t,
              eventId: v,
              eventTarget: E,
              eventStateKey: _,
              actionListId: T,
              groupIndex: h + 1,
              verbose: b,
            });
            b &&
              !z &&
              t.dispatch(
                (0, _e.actionListPlaybackChanged)({
                  actionListId: T,
                  isPlaying: !1,
                })
              );
          }
          gs(e, t);
        }
      }
    }
  });
  var Am = u((Et) => {
    "use strict";
    var HW = jt().default,
      jW = it().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = Sm;
    Et.init = $W;
    Et.setEnv = YW;
    Et.store = void 0;
    jl();
    var kW = Ko(),
      KW = jW(wg()),
      _s = us(),
      zW = HW(gi());
    Et.actions = zW;
    var Pi = (0, kW.createStore)(KW.default);
    Et.store = Pi;
    function YW(e) {
      e() && (0, _s.observeRequests)(Pi);
    }
    function $W(e) {
      Sm(), (0, _s.startEngine)({ store: Pi, rawData: e, allowEvents: !0 });
    }
    function Sm() {
      (0, _s.stopEngine)(Pi);
    }
  });
  var Nm = u((az, Cm) => {
    var wm = Me(),
      Rm = Am();
    Rm.setEnv(wm.env);
    wm.define(
      "ix2",
      (Cm.exports = function () {
        return Rm;
      })
    );
  });
  var qm = u((ys) => {
    "use strict";
    Object.defineProperty(ys, "__esModule", { value: !0 });
    ys.default = QW;
    function QW(e, t, r, n, o, i, a, s, c, f, h, v, E) {
      return function (_) {
        e(_);
        var T = _.form,
          O = {
            name: T.attr("data-name") || T.attr("name") || "Untitled Form",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              T.html()
            ),
            trackingCookies: n(),
          };
        let D = T.attr("data-wf-flow");
        D && (O.wfFlow = D), o(_);
        var b = i(T, O.fields);
        if (b) return a(b);
        if (((O.fileUploads = s(T)), c(_), !f)) {
          h(_);
          return;
        }
        v.ajax({
          url: E,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (_.success = !0), h(_);
          })
          .fail(function () {
            h(_);
          });
      };
    }
  });
  var Lm = u((uz, xm) => {
    var Mi = Me();
    Mi.define(
      "forms",
      (xm.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          v = window.alert,
          E = Mi.env(),
          _,
          T,
          O,
          D = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !E && !_ && L();
            };
        function R() {
          (c = e("html").attr("data-wf-site")),
            (T = "https://webflow.com/api/v1/form/" + c),
            a &&
              T.indexOf("https://webflow.com") >= 0 &&
              (T = T.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${T}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(I);
        }
        function I(F, j) {
          var K = e(j),
            W = e.data(j, s);
          W || (W = e.data(j, s, { form: K })), x(W);
          var U = K.closest("div.w-form");
          (W.done = U.find("> .w-form-done")),
            (W.fail = U.find("> .w-form-fail")),
            (W.fileUploads = U.find(".w-file-upload")),
            W.fileUploads.each(function (k) {
              G(k, W);
            });
          var d =
            W.form.attr("aria-label") || W.form.attr("data-name") || "Form";
          W.done.attr("aria-label") || W.form.attr("aria-label", d),
            W.done.attr("tabindex", "-1"),
            W.done.attr("role", "region"),
            W.done.attr("aria-label") ||
              W.done.attr("aria-label", d + " success"),
            W.fail.attr("tabindex", "-1"),
            W.fail.attr("role", "region"),
            W.fail.attr("aria-label") ||
              W.fail.attr("aria-label", d + " failure");
          var B = (W.action = K.attr("action"));
          if (
            ((W.handler = null),
            (W.redirect = K.attr("data-redirect")),
            D.test(B))
          ) {
            W.handler = p;
            return;
          }
          if (!B) {
            if (c) {
              W.handler = (() => {
                let k = qm().default;
                return k(x, i, Mi, ee, q, X, v, z, P, c, M, e, T);
              })();
              return;
            }
            b();
          }
        }
        function L() {
          (_ = !0),
            n.on("submit", s + " form", function (k) {
              var C = e.data(this, s);
              C.handler && ((C.evt = k), C.handler(C));
            });
          let F = ".w-checkbox-input",
            j = ".w-radio-input",
            K = "w--redirected-checked",
            W = "w--redirected-focus",
            U = "w--redirected-focus-visible",
            d = ":focus-visible, [data-wf-focus-visible]",
            B = [
              ["checkbox", F],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + F + ")",
            (k) => {
              e(k.target).siblings(F).toggleClass(K);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (k) => {
              e(`input[name="${k.target.name}"]:not(${F})`).map((ae, Oe) =>
                e(Oe).siblings(j).removeClass(K)
              );
              let C = e(k.target);
              C.hasClass("w-radio-input") || C.siblings(j).addClass(K);
            }),
            B.forEach(([k, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${k}"]:not(` + C + ")",
                (ae) => {
                  e(ae.target).siblings(C).addClass(W),
                    e(ae.target).filter(d).siblings(C).addClass(U);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${k}"]:not(` + C + ")",
                  (ae) => {
                    e(ae.target).siblings(C).removeClass(`${W} ${U}`);
                  }
                );
            });
        }
        function x(F) {
          var j = (F.btn = F.form.find(':input[type="submit"]'));
          (F.wait = F.btn.attr("data-wait") || null),
            (F.success = !1),
            j.prop("disabled", !1),
            F.label && j.val(F.label);
        }
        function P(F) {
          var j = F.btn,
            K = F.wait;
          j.prop("disabled", !0), K && ((F.label = j.val()), j.val(K));
        }
        function X(F, j) {
          var K = null;
          return (
            (j = j || {}),
            F.find(':input:not([type="submit"]):not([type="file"])').each(
              function (W, U) {
                var d = e(U),
                  B = d.attr("type"),
                  k =
                    d.attr("data-name") || d.attr("name") || "Field " + (W + 1),
                  C = d.val();
                if (B === "checkbox") C = d.is(":checked");
                else if (B === "radio") {
                  if (j[k] === null || typeof j[k] == "string") return;
                  C =
                    F.find(
                      'input[name="' + d.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (j[k] = C),
                  (K = K || V(d, B, k, C));
              }
            ),
            K
          );
        }
        function z(F) {
          var j = {};
          return (
            F.find(':input[type="file"]').each(function (K, W) {
              var U = e(W),
                d = U.attr("data-name") || U.attr("name") || "File " + (K + 1),
                B = U.attr("data-value");
              typeof B == "string" && (B = e.trim(B)), (j[d] = B);
            }),
            j
          );
        }
        let Y = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (j, K) {
            let W = K.split("="),
              U = W[0];
            if (U in Y) {
              let d = Y[U],
                B = W.slice(1).join("=");
              j[d] = B;
            }
            return j;
          }, {});
        }
        function V(F, j, K, W) {
          var U = null;
          return (
            j === "password"
              ? (U = "Passwords cannot be submitted.")
              : F.attr("required")
              ? W
                ? f.test(F.attr("type")) &&
                  (h.test(W) ||
                    (U = "Please enter a valid email address for: " + K))
                : (U = "Please fill out the required field: " + K)
              : K === "g-recaptcha-response" &&
                !W &&
                (U = "Please confirm you\u2019re not a robot."),
            U
          );
        }
        function w(F) {
          q(F), M(F);
        }
        function p(F) {
          x(F);
          var j = F.form,
            K = {};
          if (/^https/.test(i.href) && !/^https/.test(F.action)) {
            j.attr("method", "post");
            return;
          }
          q(F);
          var W = X(j, K);
          if (W) return v(W);
          P(F);
          var U;
          t.each(K, function (C, ae) {
            f.test(ae) && (K.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(ae) && (U = C),
              /^(first[ _-]?name)$/i.test(ae) && (K.FNAME = C),
              /^(last[ _-]?name)$/i.test(ae) && (K.LNAME = C);
          }),
            U &&
              !K.FNAME &&
              ((U = U.split(" ")),
              (K.FNAME = U[0]),
              (K.LNAME = K.LNAME || U[1]));
          var d = F.action.replace("/post?", "/post-json?") + "&c=?",
            B = d.indexOf("u=") + 2;
          B = d.substring(B, d.indexOf("&", B));
          var k = d.indexOf("id=") + 3;
          (k = d.substring(k, d.indexOf("&", k))),
            (K["b_" + B + "_" + k] = ""),
            e
              .ajax({ url: d, data: K, dataType: "jsonp" })
              .done(function (C) {
                (F.success = C.result === "success" || /already/.test(C.msg)),
                  F.success || console.info("MailChimp error: " + C.msg),
                  M(F);
              })
              .fail(function () {
                M(F);
              });
        }
        function M(F) {
          var j = F.form,
            K = F.redirect,
            W = F.success;
          if (W && K) {
            Mi.location(K);
            return;
          }
          F.done.toggle(W),
            F.fail.toggle(!W),
            W ? F.done.focus() : F.fail.focus(),
            j.toggle(!W),
            x(F);
        }
        function q(F) {
          F.evt && F.evt.preventDefault(), (F.evt = null);
        }
        function G(F, j) {
          if (!j.fileUploads || !j.fileUploads[F]) return;
          var K,
            W = e(j.fileUploads[F]),
            U = W.find("> .w-file-upload-default"),
            d = W.find("> .w-file-upload-uploading"),
            B = W.find("> .w-file-upload-success"),
            k = W.find("> .w-file-upload-error"),
            C = U.find(".w-file-upload-input"),
            ae = U.find(".w-file-upload-label"),
            Oe = ae.children(),
            ce = k.find(".w-file-upload-error-msg"),
            Ve = B.find(".w-file-upload-file"),
            Je = B.find(".w-file-remove-link"),
            yr = Ve.find(".w-file-upload-file-name"),
            mr = ce.attr("data-w-size-error"),
            et = ce.attr("data-w-type-error"),
            Di = ce.attr("data-w-generic-error");
          if (
            (E ||
              ae.on("click keydown", function (y) {
                (y.type === "keydown" && y.which !== 13 && y.which !== 32) ||
                  (y.preventDefault(), C.click());
              }),
            ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Je.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            C.on("click", function (y) {
              y.preventDefault();
            }),
              ae.on("click", function (y) {
                y.preventDefault();
              }),
              Oe.on("click", function (y) {
                y.preventDefault();
              });
          else {
            Je.on("click keydown", function (y) {
              if (y.type === "keydown") {
                if (y.which !== 13 && y.which !== 32) return;
                y.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                yr.html(""),
                U.toggle(!0),
                B.toggle(!1),
                ae.focus();
            }),
              C.on("change", function (y) {
                (K = y.target && y.target.files && y.target.files[0]),
                  K &&
                    (U.toggle(!1),
                    k.toggle(!1),
                    d.toggle(!0),
                    d.focus(),
                    yr.text(K.name),
                    S() || P(j),
                    (j.fileUploads[F].uploading = !0),
                    $(K, g));
              });
            var an = ae.outerHeight();
            C.height(an), C.width(1);
          }
          function l(y) {
            var A = y.responseJSON && y.responseJSON.msg,
              Q = Di;
            typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0
              ? (Q = et)
              : typeof A == "string" &&
                A.indexOf("MaxFileSizeError") === 0 &&
                (Q = mr),
              ce.text(Q),
              C.removeAttr("data-value"),
              C.val(""),
              d.toggle(!1),
              U.toggle(!0),
              k.toggle(!0),
              k.focus(),
              (j.fileUploads[F].uploading = !1),
              S() || x(j);
          }
          function g(y, A) {
            if (y) return l(y);
            var Q = A.fileName,
              te = A.postData,
              de = A.fileId,
              H = A.s3Url;
            C.attr("data-value", de), Z(H, te, K, Q, m);
          }
          function m(y) {
            if (y) return l(y);
            d.toggle(!1),
              B.css("display", "inline-block"),
              B.focus(),
              (j.fileUploads[F].uploading = !1),
              S() || x(j);
          }
          function S() {
            var y = (j.fileUploads && j.fileUploads.toArray()) || [];
            return y.some(function (A) {
              return A.uploading;
            });
          }
        }
        function $(F, j) {
          var K = new URLSearchParams({ name: F.name, size: F.size });
          e.ajax({ type: "GET", url: `${O}?${K}`, crossDomain: !0 })
            .done(function (W) {
              j(null, W);
            })
            .fail(function (W) {
              j(W);
            });
        }
        function Z(F, j, K, W, U) {
          var d = new FormData();
          for (var B in j) d.append(B, j[B]);
          d.append("file", K, W),
            e
              .ajax({
                type: "POST",
                url: F,
                data: d,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                U(null);
              })
              .fail(function (k) {
                U(k);
              });
        }
        return r;
      })
    );
  });
  qs();
  Ls();
  Ms();
  Fs();
  Us();
  Ws();
  vn();
  $s();
  Js();
  ru();
  iu();
  Nm();
  Lm();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599415885,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599415886,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|3a5cccb5-e402-68df-46f2-ec0309a14f10",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|3a5cccb5-e402-68df-46f2-ec0309a14f10",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599626768,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|3a5cccb5-e402-68df-46f2-ec0309a14f10",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|3a5cccb5-e402-68df-46f2-ec0309a14f10",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599626768,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|2b708781-e788-b222-0087-946f83ee4ac7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|2b708781-e788-b222-0087-946f83ee4ac7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599627068,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|2b708781-e788-b222-0087-946f83ee4ac7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|2b708781-e788-b222-0087-946f83ee4ac7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599627068,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|bf45d259-022d-0db1-3b47-b485a87ea99f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|bf45d259-022d-0db1-3b47-b485a87ea99f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599627421,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|bf45d259-022d-0db1-3b47-b485a87ea99f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|bf45d259-022d-0db1-3b47-b485a87ea99f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677599627421,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|7362bd66-331b-8491-abf9-4c87f50b35c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|7362bd66-331b-8491-abf9-4c87f50b35c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677600604713,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|7362bd66-331b-8491-abf9-4c87f50b35c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|7362bd66-331b-8491-abf9-4c87f50b35c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677600604713,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|8a284790-d037-96f2-9c11-ed9db5dedc0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|8a284790-d037-96f2-9c11-ed9db5dedc0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677601016495,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|8a284790-d037-96f2-9c11-ed9db5dedc0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|8a284790-d037-96f2-9c11-ed9db5dedc0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677601016495,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|fce49a2f-ae5a-e43f-497e-3744856a715b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|fce49a2f-ae5a-e43f-497e-3744856a715b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677601017869,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|fce49a2f-ae5a-e43f-497e-3744856a715b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|fce49a2f-ae5a-e43f-497e-3744856a715b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677601017869,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677694275270,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677694275270,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|40624cd2-4c6f-adfb-1fde-cb19363f116e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|40624cd2-4c6f-adfb-1fde-cb19363f116e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677695009293,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|40624cd2-4c6f-adfb-1fde-cb19363f116e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|40624cd2-4c6f-adfb-1fde-cb19363f116e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677695009293,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fcfcb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fcfcb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fcfcb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fcfcb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd004",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd004",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd004",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd004",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd010",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd010",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd010",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd010",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd01c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd01c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd01c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd01c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd028",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd028",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd028",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd028",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd034",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd034",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd034",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd034",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd040",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd040",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd040",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd040",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd04c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd04c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd04c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6401b9d2879d2416cf234e50|2dc0fac1-2cc2-c860-3066-a28c9f8fd04c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677834719971,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-38" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|6bc66341-54ed-2b72-43b9-f981943f699c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|6bc66341-54ed-2b72-43b9-f981943f699c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 5000,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1667465275056,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe0340627d0e7a6ba6e47c|6bc66341-54ed-2b72-43b9-f981943f69a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe0340627d0e7a6ba6e47c|6bc66341-54ed-2b72-43b9-f981943f69a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666282401304,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Card Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
                },
                globalSwatchId: "70e7a6da",
                rValue: 234,
                bValue: 239,
                gValue: 235,
                aValue: 1,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "",
                rValue: 236,
                bValue: 254,
                gValue: 231,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
                },
                globalSwatchId: "81e82593",
                rValue: 0,
                bValue: 255,
                gValue: 41,
                aValue: 1,
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "81e82593",
                rValue: 0,
                bValue: 255,
                gValue: 41,
                aValue: 1,
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677599423248,
    },
    "a-2": {
      id: "a-2",
      title: "Card Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "63fe0340627d0e7a6ba6e47c|dba5cb3b-f27a-c4e7-dbae-71be22375845",
                },
                globalSwatchId: "70e7a6da",
                rValue: 234,
                bValue: 239,
                gValue: 235,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-bot",
                  selectorGuids: ["864220f3-ef3d-738a-b573-c855c64c012a"],
                },
                globalSwatchId: "",
                rValue: 236,
                bValue: 254,
                gValue: 231,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677599423248,
    },
    "a-3": {
      id: "a-3",
      title: "Scroll Appear",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  id: "63fe0340627d0e7a6ba6e47c|e742cb9d-e8c9-5a66-e03a-d8dbe14612aa",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677694280042,
    },
    "a-4": {
      id: "a-4",
      title: "Scroll Disappear",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  id: "63fe0340627d0e7a6ba6e47c|e742cb9d-e8c9-5a66-e03a-d8dbe14612aa",
                },
                yValue: -70,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677694280042,
    },
    "a-5": {
      id: "a-5",
      title: "Nav Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-7",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                yValue: 7,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                yValue: -7,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-5-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-15",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 0,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: "flex",
              },
            },
            {
              id: "a-5-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 0,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: "flex",
              },
            },
            {
              id: "a-5-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677695013647,
    },
    "a-6": {
      id: "a-6",
      title: "Nav Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.top",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "866d4193-cea9-1b76-a531-6a661e392977",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.bot",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "d7336240-c694-775c-2017-4625fbaa986d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hamburger-line.middle",
                  selectorGuids: [
                    "d62e0b56-8fc6-151a-99be-ad7b44f7c914",
                    "92c83ce2-fdc6-8def-4d89-5ac7c3e2639c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-6-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-shadow",
                  selectorGuids: ["8818c2b7-dc24-05b5-9089-671aab8e1742"],
                },
                value: "none",
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav",
                  selectorGuids: ["d00f1b50-56c6-d125-4fe5-01916a85c743"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677695013647,
    },
    "a-7": {
      id: "a-7",
      title: "Hide Disclaimer",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".disclaimer-section",
                  selectorGuids: ["dcdec664-23ff-077e-5bfb-41db3bbaf4cc"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666282404687,
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
