/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var $b = Object.create;
  var an = Object.defineProperty;
  var Qb = Object.getOwnPropertyDescriptor;
  var Zb = Object.getOwnPropertyNames;
  var Jb = Object.getPrototypeOf,
    e_ = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) an(e, r, { get: t[r], enumerable: !0 });
    },
    Ns = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Zb(t))
          !e_.call(e, i) &&
            i !== r &&
            an(e, i, {
              get: () => t[i],
              enumerable: !(n = Qb(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? $b(Jb(e)) : {}),
      Ns(
        t || !e || !e.__esModule
          ? an(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Ns(an({}, "__esModule", { value: !0 }), e);
  var Ni = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, T) {
        var x = new b.Bare();
        return x.init(l, T);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(l) {
        var T = parseInt(l.slice(1), 16),
          x = (T >> 16) & 255,
          R = (T >> 8) & 255,
          A = 255 & T;
        return [x, R, A];
      }
      function i(l, T, x) {
        return (
          "#" + ((1 << 24) | (l << 16) | (T << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, T) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof T + "] " + T);
      }
      function s(l, T, x) {
        f("Units do not match [" + l + "]: " + T + ", " + x);
      }
      function u(l, T, x) {
        if ((T !== void 0 && (x = T), l === void 0)) return x;
        var R = x;
        return (
          Fe.test(l) || !He.test(l)
            ? (R = parseInt(l, 10))
            : He.test(l) && (R = 1e3 * parseFloat(l)),
          0 > R && (R = 0),
          R === R ? R : x
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function E(l) {
        for (var T = -1, x = l ? l.length : 0, R = []; ++T < x; ) {
          var A = l[T];
          A && R.push(A);
        }
        return R;
      }
      var v = (function (l, T, x) {
          function R(ie) {
            return typeof ie == "object";
          }
          function A(ie) {
            return typeof ie == "function";
          }
          function P() {}
          function ee(ie, ve) {
            function z() {
              var Re = new ae();
              return A(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function ae() {}
            ve === x && ((ve = ie), (ie = Object)), (z.Bare = ae);
            var se,
              _e = (P[l] = ie[l]),
              tt = (ae[l] = z[l] = new P());
            return (
              (tt.constructor = z),
              (z.mixin = function (Re) {
                return (ae[l] = z[l] = ee(z, Re)[l]), z;
              }),
              (z.open = function (Re) {
                if (
                  ((se = {}),
                  A(Re) ? (se = Re.call(z, tt, _e, z, ie)) : R(Re) && (se = Re),
                  R(se))
                )
                  for (var Er in se) T.call(se, Er) && (tt[Er] = se[Er]);
                return A(tt.init) || (tt.init = ie), z;
              }),
              z.open(ve)
            );
          }
          return ee;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, T, x, R) {
              var A = (l /= R) * l,
                P = A * l;
              return (
                T +
                x * (-2.75 * P * A + 11 * A * A + -15.5 * P + 8 * A + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, T, x, R) {
              var A = (l /= R) * l,
                P = A * l;
              return T + x * (-1 * P * A + 3 * A * A + -3 * P + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, T, x, R) {
              var A = (l /= R) * l,
                P = A * l;
              return (
                T +
                x * (0.3 * P * A + -1.6 * A * A + 2.2 * P + -1.8 * A + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, T, x, R) {
              var A = (l /= R) * l,
                P = A * l;
              return T + x * (2 * P * A + -5 * A * A + 2 * P + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (l, T, x, R) {
              return (x * l) / R + T;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, T, x, R) {
              return x * (l /= R) * l + T;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, T, x, R) {
              return -x * (l /= R) * (l - 2) + T;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, T, x, R) {
              return (l /= R / 2) < 1
                ? (x / 2) * l * l + T
                : (-x / 2) * (--l * (l - 2) - 1) + T;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, T, x, R) {
              return x * (l /= R) * l * l + T;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, T, x, R) {
              return x * ((l = l / R - 1) * l * l + 1) + T;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, T, x, R) {
              return (l /= R / 2) < 1
                ? (x / 2) * l * l * l + T
                : (x / 2) * ((l -= 2) * l * l + 2) + T;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, T, x, R) {
              return x * (l /= R) * l * l * l + T;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, T, x, R) {
              return -x * ((l = l / R - 1) * l * l * l - 1) + T;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, T, x, R) {
              return (l /= R / 2) < 1
                ? (x / 2) * l * l * l * l + T
                : (-x / 2) * ((l -= 2) * l * l * l - 2) + T;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, T, x, R) {
              return x * (l /= R) * l * l * l * l + T;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, T, x, R) {
              return x * ((l = l / R - 1) * l * l * l * l + 1) + T;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, T, x, R) {
              return (l /= R / 2) < 1
                ? (x / 2) * l * l * l * l * l + T
                : (x / 2) * ((l -= 2) * l * l * l * l + 2) + T;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, T, x, R) {
              return -x * Math.cos((l / R) * (Math.PI / 2)) + x + T;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, T, x, R) {
              return x * Math.sin((l / R) * (Math.PI / 2)) + T;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, T, x, R) {
              return (-x / 2) * (Math.cos((Math.PI * l) / R) - 1) + T;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, T, x, R) {
              return l === 0 ? T : x * Math.pow(2, 10 * (l / R - 1)) + T;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, T, x, R) {
              return l === R
                ? T + x
                : x * (-Math.pow(2, (-10 * l) / R) + 1) + T;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, T, x, R) {
              return l === 0
                ? T
                : l === R
                ? T + x
                : (l /= R / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (l - 1)) + T
                : (x / 2) * (-Math.pow(2, -10 * --l) + 2) + T;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, T, x, R) {
              return -x * (Math.sqrt(1 - (l /= R) * l) - 1) + T;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, T, x, R) {
              return x * Math.sqrt(1 - (l = l / R - 1) * l) + T;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, T, x, R) {
              return (l /= R / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - l * l) - 1) + T
                : (x / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + T;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, T, x, R, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * (l /= R) * l * ((A + 1) * l - A) + T
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, T, x, R, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * ((l = l / R - 1) * l * ((A + 1) * l + A) + 1) + T
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, T, x, R, A) {
              return (
                A === void 0 && (A = 1.70158),
                (l /= R / 2) < 1
                  ? (x / 2) * l * l * (((A *= 1.525) + 1) * l - A) + T
                  : (x / 2) *
                      ((l -= 2) * l * (((A *= 1.525) + 1) * l + A) + 2) +
                    T
              );
            },
          ],
        },
        y = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        w = document,
        I = window,
        S = "bkwld-tram",
        O = /[\-\.0-9]/g,
        q = /[A-Z]/,
        C = "number",
        M = /^(rgb|#)/,
        D = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        K = "unitless",
        Y = /(all|none) 0s ease 0s/,
        te = /^(width|height)$/,
        U = " ",
        L = w.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        k = function (l) {
          if (l in L.style) return { dom: l, css: l };
          var T,
            x,
            R = "",
            A = l.split("-");
          for (T = 0; T < A.length; T++)
            R += A[T].charAt(0).toUpperCase() + A[T].slice(1);
          for (T = 0; T < m.length; T++)
            if (((x = m[T] + R), x in L.style))
              return { dom: x, css: N[T] + l };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: k("transform"),
          transition: k("transition"),
          backface: k("backface-visibility"),
          timing: k("transition-timing-function"),
        });
      if (V.transition) {
        var Z = V.timing.dom;
        if (((L.style[Z] = g["ease-in-back"][0]), !L.style[Z]))
          for (var re in y) g[re][0] = y[re];
      }
      var G = (t.frame = (function () {
          var l =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return l && V.bind
            ? l.bind(I)
            : function (T) {
                I.setTimeout(T, 16);
              };
        })()),
        W = (t.now = (function () {
          var l = I.performance,
            T = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return T && V.bind
            ? T.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = v(function (l) {
          function T(ne, ce) {
            var ye = E(("" + ne).split(U)),
              de = ye[0];
            ce = ce || {};
            var Le = j[de];
            if (!Le) return f("Unsupported property: " + de);
            if (!ce.weak || !this.props[de]) {
              var je = Le[0],
                Me = this.props[de];
              return (
                Me || (Me = this.props[de] = new je.Bare()),
                Me.init(this.$el, ye, Le, ce),
                Me
              );
            }
          }
          function x(ne, ce, ye) {
            if (ne) {
              var de = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ce)
              )
                return (
                  (this.timer = new ue({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ce) {
                switch (ne) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    ee.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    T.call(this, ne, ye && ye[1]);
                }
                return P.call(this);
              }
              if (de == "function") return void ne.call(this, this);
              if (de == "object") {
                var Le = 0;
                tt.call(
                  this,
                  ne,
                  function (Te, Yb) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(Yb);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  _e.call(this),
                  Le > 0 &&
                    ((this.timer = new ue({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = P));
                var je = this,
                  Me = !1,
                  on = {};
                G(function () {
                  tt.call(je, ne, function (Te) {
                    Te.active && ((Me = !0), (on[Te.name] = Te.nextStyle));
                  }),
                    Me && je.$el.css(on);
                });
              }
            }
          }
          function R(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ue({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  (this.active = !0));
          }
          function A(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = P))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function P() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              x.call(this, ne.options, !0, ne.args);
            }
          }
          function ee(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              tt.call(this, ce, Re),
              _e.call(this);
          }
          function ie(ne) {
            ee.call(this, ne), tt.call(this, ne, Er, zb);
          }
          function ve(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function z() {
            ee.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function se() {
            ee.call(this),
              e.removeData(this.el, S),
              (this.$el = this.el = null);
          }
          function _e() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[V.transition.dom] = ye));
          }
          function tt(ne, ce, ye) {
            var de,
              Le,
              je,
              Me,
              on = ce !== Re,
              Te = {};
            for (de in ne)
              (je = ne[de]),
                de in fe
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[de] = je))
                  : (q.test(de) && (de = r(de)),
                    de in j ? (Te[de] = je) : (Me || (Me = {}), (Me[de] = je)));
            for (de in Te) {
              if (((je = Te[de]), (Le = this.props[de]), !Le)) {
                if (!on) continue;
                Le = T.call(this, de);
              }
              ce.call(this, Le, je);
            }
            ye && Me && ye.call(this, Me);
          }
          function Re(ne) {
            ne.stop();
          }
          function Er(ne, ce) {
            ne.set(ce);
          }
          function zb(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            l[ne] = function () {
              return this.children
                ? Kb.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function Kb(ne, ce) {
            var ye,
              de = this.children.length;
            for (ye = 0; de > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (l.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = B(this.el, "transition");
              ce && !Y.test(ce) && (this.upstream = ce);
            }
            V.backface &&
              oe.hideBackface &&
              h(this.el, V.backface.css, "hidden");
          }),
            Xe("add", T),
            Xe("start", x),
            Xe("wait", R),
            Xe("then", A),
            Xe("next", P),
            Xe("stop", ee),
            Xe("set", ie),
            Xe("show", ve),
            Xe("hide", z),
            Xe("redraw", ae),
            Xe("destroy", se);
        }),
        b = v(d, function (l) {
          function T(x, R) {
            var A = e.data(x, S) || e.data(x, S, new d.Bare());
            return A.el || A.init(x), R ? A.start(R) : A;
          }
          l.init = function (x, R) {
            var A = e(x);
            if (!A.length) return this;
            if (A.length === 1) return T(A[0], R);
            var P = [];
            return (
              A.each(function (ee, ie) {
                P.push(T(ie, R));
              }),
              (this.children = P),
              this
            );
          };
        }),
        _ = v(function (l) {
          function T() {
            var P = this.get();
            this.update("auto");
            var ee = this.get();
            return this.update(P), ee;
          }
          function x(P, ee, ie) {
            return ee !== void 0 && (ie = ee), P in g ? P : ie;
          }
          function R(P) {
            var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
            return (ee ? i(ee[1], ee[2], ee[3]) : P).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (P, ee, ie, ve) {
            (this.$el = P), (this.el = P[0]);
            var z = ee[0];
            ie[2] && (z = ie[2]),
              Q[z] && (z = Q[z]),
              (this.name = z),
              (this.type = ie[1]),
              (this.duration = u(ee[1], this.duration, A.duration)),
              (this.ease = x(ee[2], this.ease, A.ease)),
              (this.delay = u(ee[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = te.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    U +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? U + g[this.ease][0] : "") +
                    (this.delay ? U + this.delay + "ms" : "")));
          }),
            (l.set = function (P) {
              (P = this.convert(P, this.type)), this.update(P), this.redraw();
            }),
            (l.transition = function (P) {
              (this.active = !0),
                (P = this.convert(P, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  P == "auto" && (P = T.call(this))),
                (this.nextStyle = P);
            }),
            (l.fallback = function (P) {
              var ee =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (P = this.convert(P, this.type)),
                this.auto &&
                  (ee == "auto" && (ee = this.convert(this.get(), this.type)),
                  P == "auto" && (P = T.call(this))),
                (this.tween = new J({
                  from: ee,
                  to: P,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return B(this.el, this.name);
            }),
            (l.update = function (P) {
              h(this.el, this.name, P);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                h(this.el, this.name, this.get()));
              var P = this.tween;
              P && P.context && P.destroy();
            }),
            (l.convert = function (P, ee) {
              if (P == "auto" && this.auto) return P;
              var ie,
                ve = typeof P == "number",
                z = typeof P == "string";
              switch (ee) {
                case C:
                  if (ve) return P;
                  if (z && P.replace(O, "") === "") return +P;
                  ie = "number(unitless)";
                  break;
                case M:
                  if (z) {
                    if (P === "" && this.original) return this.original;
                    if (ee.test(P))
                      return P.charAt(0) == "#" && P.length == 7 ? P : R(P);
                  }
                  ie = "hex or rgb string";
                  break;
                case D:
                  if (ve) return P + this.unit;
                  if (z && ee.test(P)) return P;
                  ie = "number(px) or string(unit)";
                  break;
                case F:
                  if (ve) return P + this.unit;
                  if (z && ee.test(P)) return P;
                  ie = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (ve) return P + this.angle;
                  if (z && ee.test(P)) return P;
                  ie = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ve || (z && F.test(P))) return P;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, P), P;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = v(_, function (l, T) {
          l.init = function () {
            T.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        H = v(_, function (l, T) {
          (l.init = function () {
            T.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        $ = v(_, function (l, T) {
          function x(R, A) {
            var P, ee, ie, ve, z;
            for (P in R)
              (ve = fe[P]),
                (ie = ve[0]),
                (ee = ve[1] || P),
                (z = this.convert(R[P], ie)),
                A.call(this, ee, z, ie);
          }
          (l.init = function () {
            T.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (R) {
              x.call(this, R, function (A, P) {
                this.current[A] = P;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (R) {
              var A = this.values(R);
              this.tween = new be({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var P,
                ee = {};
              for (P in this.current) ee[P] = P in A ? A[P] : this.current[P];
              (this.active = !0), (this.nextStyle = this.style(ee));
            }),
            (l.fallback = function (R) {
              var A = this.values(R);
              this.tween = new be({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (R) {
              var A,
                P = "";
              for (A in R) P += A + "(" + R[A] + ") ";
              return P;
            }),
            (l.values = function (R) {
              var A,
                P = {};
              return (
                x.call(this, R, function (ee, ie, ve) {
                  (P[ee] = ie),
                    this.current[ee] === void 0 &&
                      ((A = 0),
                      ~ee.indexOf("scale") && (A = 1),
                      (this.current[ee] = this.convert(A, ve)));
                }),
                P
              );
            });
        }),
        J = v(function (l) {
          function T(z) {
            ie.push(z) === 1 && G(x);
          }
          function x() {
            var z,
              ae,
              se,
              _e = ie.length;
            if (_e)
              for (G(x), ae = W(), z = _e; z--; )
                (se = ie[z]), se && se.render(ae);
          }
          function R(z) {
            var ae,
              se = e.inArray(z, ie);
            se >= 0 &&
              ((ae = ie.slice(se + 1)),
              (ie.length = se),
              ae.length && (ie = ie.concat(ae)));
          }
          function A(z) {
            return Math.round(z * ve) / ve;
          }
          function P(z, ae, se) {
            return i(
              z[0] + se * (ae[0] - z[0]),
              z[1] + se * (ae[1] - z[1]),
              z[2] + se * (ae[2] - z[2])
            );
          }
          var ee = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (z) {
            (this.duration = z.duration || 0), (this.delay = z.delay || 0);
            var ae = z.ease || ee.ease;
            g[ae] && (ae = g[ae][1]),
              typeof ae != "function" && (ae = ee.ease),
              (this.ease = ae),
              (this.update = z.update || o),
              (this.complete = z.complete || o),
              (this.context = z.context || this),
              (this.name = z.name);
            var se = z.from,
              _e = z.to;
            se === void 0 && (se = ee.from),
              _e === void 0 && (_e = ee.to),
              (this.unit = z.unit || ""),
              typeof se == "number" && typeof _e == "number"
                ? ((this.begin = se), (this.change = _e - se))
                : this.format(_e, se),
              (this.value = this.begin + this.unit),
              (this.start = W()),
              z.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = W()), (this.active = !0), T(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), R(this));
            }),
            (l.render = function (z) {
              var ae,
                se = z - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var _e = this.ease(se, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? P(this.startRGB, this.endRGB, _e)
                    : A(this.begin + _e * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (z, ae) {
              if (((ae += ""), (z += ""), z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(z)),
                  (this.endHex = z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = ae.replace(O, ""),
                  _e = z.replace(O, "");
                se !== _e && s("tween", ae, z), (this.unit = se);
              }
              (ae = parseFloat(ae)),
                (z = parseFloat(z)),
                (this.begin = this.value = ae),
                (this.change = z - ae);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            ve = 1e3;
        }),
        ue = v(J, function (l) {
          (l.init = function (T) {
            (this.duration = T.duration || 0),
              (this.complete = T.complete || o),
              (this.context = T.context),
              this.play();
          }),
            (l.render = function (T) {
              var x = T - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        be = v(J, function (l, T) {
          (l.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var R, A;
            for (R in x.values)
              (A = x.values[R]),
                this.current[R] !== A &&
                  this.tweens.push(
                    new J({
                      name: R,
                      from: this.current[R],
                      to: A,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (x) {
              var R,
                A,
                P = this.tweens.length,
                ee = !1;
              for (R = P; R--; )
                (A = this.tweens[R]),
                  A.context &&
                    (A.render(x), (this.current[A.name] = A.value), (ee = !0));
              return ee
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((T.destroy.call(this), this.tweens)) {
                var x,
                  R = this.tweens.length;
                for (x = R; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!V.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new J(l);
        }),
        (t.delay = function (l, T, x) {
          return new ue({ complete: T, duration: l, context: x });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var h = e.style,
        B = e.css,
        Q = { transform: V.transform && V.transform.css },
        j = {
          color: [p, M],
          background: [p, M, "background-color"],
          "outline-color": [p, M],
          "border-color": [p, M],
          "border-top-color": [p, M],
          "border-right-color": [p, M],
          "border-bottom-color": [p, M],
          "border-left-color": [p, M],
          "border-width": [_, D],
          "border-top-width": [_, D],
          "border-right-width": [_, D],
          "border-bottom-width": [_, D],
          "border-left-width": [_, D],
          "border-spacing": [_, D],
          "letter-spacing": [_, D],
          margin: [_, D],
          "margin-top": [_, D],
          "margin-right": [_, D],
          "margin-bottom": [_, D],
          "margin-left": [_, D],
          padding: [_, D],
          "padding-top": [_, D],
          "padding-right": [_, D],
          "padding-bottom": [_, D],
          "padding-left": [_, D],
          "outline-width": [_, D],
          opacity: [_, C],
          top: [_, F],
          right: [_, F],
          bottom: [_, F],
          left: [_, F],
          "font-size": [_, F],
          "text-indent": [_, F],
          "word-spacing": [_, F],
          width: [_, F],
          "min-width": [_, F],
          "max-width": [_, F],
          height: [_, F],
          "min-height": [_, F],
          "max-height": [_, F],
          "line-height": [_, K],
          "scroll-top": [H, C, "scrollTop"],
          "scroll-left": [H, C, "scrollLeft"],
        },
        fe = {};
      V.transform &&
        ((j.transform = [$]),
        (fe = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [C],
          scaleX: [C],
          scaleY: [C],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        V.transform &&
          V.backface &&
          ((fe.z = [F, "translateZ"]),
          (fe.rotateZ = [X]),
          (fe.scaleZ = [C]),
          (fe.perspective = [D]));
      var Fe = /ms/,
        He = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var qs = c((BU, Ps) => {
    "use strict";
    var t_ = window.$,
      r_ = Ni() && t_.tram;
    Ps.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        E = r.forEach,
        v = r.map,
        g = r.reduce,
        y = r.reduceRight,
        w = r.filter,
        I = r.every,
        S = r.some,
        O = r.indexOf,
        q = r.lastIndexOf,
        C = Array.isArray,
        M = Object.keys,
        D = i.bind,
        F =
          (e.each =
          e.forEach =
            function (m, N, k) {
              if (m == null) return m;
              if (E && m.forEach === E) m.forEach(N, k);
              else if (m.length === +m.length) {
                for (var V = 0, Z = m.length; V < Z; V++)
                  if (N.call(k, m[V], V, m) === t) return;
              } else
                for (var re = e.keys(m), V = 0, Z = re.length; V < Z; V++)
                  if (N.call(k, m[re[V]], re[V], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, N, k) {
          var V = [];
          return m == null
            ? V
            : v && m.map === v
            ? m.map(N, k)
            : (F(m, function (Z, re, G) {
                V.push(N.call(k, Z, re, G));
              }),
              V);
        }),
        (e.find = e.detect =
          function (m, N, k) {
            var V;
            return (
              X(m, function (Z, re, G) {
                if (N.call(k, Z, re, G)) return (V = Z), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (m, N, k) {
            var V = [];
            return m == null
              ? V
              : w && m.filter === w
              ? m.filter(N, k)
              : (F(m, function (Z, re, G) {
                  N.call(k, Z, re, G) && V.push(Z);
                }),
                V);
          });
      var X =
        (e.some =
        e.any =
          function (m, N, k) {
            N || (N = e.identity);
            var V = !1;
            return m == null
              ? V
              : S && m.some === S
              ? m.some(N, k)
              : (F(m, function (Z, re, G) {
                  if (V || (V = N.call(k, Z, re, G))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (m, N) {
          return m == null
            ? !1
            : O && m.indexOf === O
            ? m.indexOf(N) != -1
            : X(m, function (k) {
                return k === N;
              });
        }),
        (e.delay = function (m, N) {
          var k = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, k);
          }, N);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var N, k, V;
          return function () {
            N ||
              ((N = !0),
              (k = arguments),
              (V = this),
              r_.frame(function () {
                (N = !1), m.apply(V, k);
              }));
          };
        }),
        (e.debounce = function (m, N, k) {
          var V,
            Z,
            re,
            G,
            W,
            d = function () {
              var b = e.now() - G;
              b < N
                ? (V = setTimeout(d, N - b))
                : ((V = null), k || ((W = m.apply(re, Z)), (re = Z = null)));
            };
          return function () {
            (re = this), (Z = arguments), (G = e.now());
            var b = k && !V;
            return (
              V || (V = setTimeout(d, N)),
              b && ((W = m.apply(re, Z)), (re = Z = null)),
              W
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var N = 1, k = arguments.length; N < k; N++) {
            var V = arguments[N];
            for (var Z in V) m[Z] === void 0 && (m[Z] = V[Z]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (M) return M(m);
          var N = [];
          for (var k in m) e.has(m, k) && N.push(k);
          return N;
        }),
        (e.has = function (m, N) {
          return f.call(m, N);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
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
      var K = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        te = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function (m) {
          return "\\" + Y[m];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, N, k) {
          !N && k && (N = k), (N = e.defaults({}, N, e.templateSettings));
          var V = RegExp(
              [
                (N.escape || K).source,
                (N.interpolate || K).source,
                (N.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            re = "__p+='";
          m.replace(V, function (b, _, p, H, $) {
            return (
              (re += m.slice(Z, $).replace(te, U)),
              (Z = $ + b.length),
              _
                ? (re +=
                    `'+
    ((__t=(` +
                    _ +
                    `))==null?'':_.escape(__t))+
    '`)
                : p
                ? (re +=
                    `'+
    ((__t=(` +
                    p +
                    `))==null?'':__t)+
    '`)
                : H &&
                  (re +=
                    `';
    ` +
                    H +
                    `
    __p+='`),
              b
            );
          }),
            (re += `';
    `);
          var G = N.variable;
          if (G) {
            if (!L.test(G))
              throw new Error("variable is not a bare identifier: " + G);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (G = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var W;
          try {
            W = new Function(N.variable || "obj", "_", re);
          } catch (b) {
            throw ((b.source = re), b);
          }
          var d = function (b) {
            return W.call(this, b, e);
          };
          return (
            (d.source =
              "function(" +
              G +
              `){
    ` +
              re +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var ke = c((WU, Bs) => {
    "use strict";
    var pe = {},
      Ut = {},
      Bt = [],
      qi = window.Webflow || [],
      Et = window.jQuery,
      Ke = Et(window),
      n_ = Et(document),
      nt = Et.isFunction,
      ze = (pe._ = qs()),
      Ms = (pe.tram = Ni() && Et.tram),
      un = !1,
      Fi = !1;
    Ms.config.hideBackface = !1;
    Ms.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Ut[e] && ks(Ut[e]);
      var n = (Ut[e] = t(Et, ze, r) || {});
      return Ds(n), n;
    };
    pe.require = function (e) {
      return Ut[e];
    };
    function Ds(e) {
      pe.env() &&
        (nt(e.design) && Ke.on("__wf_design", e.design),
        nt(e.preview) && Ke.on("__wf_preview", e.preview)),
        nt(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && i_(e);
    }
    function i_(e) {
      if (un) {
        e.ready();
        return;
      }
      ze.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function ks(e) {
      nt(e.design) && Ke.off("__wf_design", e.design),
        nt(e.preview) && Ke.off("__wf_preview", e.preview),
        nt(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && o_(e);
    }
    function o_(e) {
      Bt = ze.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (un) {
        nt(e) && e();
        return;
      }
      qi.push(e);
    };
    pe.env = function (e) {
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
    var sn = navigator.userAgent.toLowerCase(),
      Gs = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      a_ = (pe.env.chrome =
        /chrome/.test(sn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(sn.match(/chrome\/(\d+)\./)[1], 10)),
      s_ = (pe.env.ios = /(ipod|iphone|ipad)/.test(sn));
    pe.env.safari = /safari/.test(sn) && !a_ && !s_;
    var Pi;
    Gs &&
      n_.on("touchstart mousedown", function (e) {
        Pi = e.target;
      });
    pe.validClick = Gs
      ? function (e) {
          return e === Pi || Et.contains(e, Pi);
        }
      : function () {
          return !0;
        };
    var Vs = "resize.webflow orientationchange.webflow load.webflow",
      u_ = "scroll.webflow " + Vs;
    pe.resize = Mi(Ke, Vs);
    pe.scroll = Mi(Ke, u_);
    pe.redraw = Mi();
    function Mi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (un = !0), Fi ? c_() : ze.each(Bt, Fs), ze.each(qi, Fs), pe.resize.up();
    };
    function Fs(e) {
      nt(e) && e();
    }
    function c_() {
      (Fi = !1), ze.each(Ut, Ds);
    }
    var Rt;
    pe.load = function (e) {
      Rt.then(e);
    };
    function Us() {
      Rt && (Rt.reject(), Ke.off("load", Rt.resolve)),
        (Rt = new Et.Deferred()),
        Ke.on("load", Rt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Fi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (un = e.domready),
        ze.each(Ut, ks),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (Bt = []),
        (qi = []),
        Rt.state() === "pending" && Us();
    };
    Et(pe.ready);
    Us();
    Bs.exports = window.Webflow = pe;
  });
  var Xs = c((HU, Hs) => {
    "use strict";
    var Ws = ke();
    Ws.define(
      "brand",
      (Hs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var y = n.attr("data-wf-status"),
            w = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(w) && a.hostname !== w && (y = !0),
            y &&
              !s &&
              ((f = f || v()),
              g(),
              setTimeout(g, 500),
              e(r).off(u, E).on(u, E));
        };
        function E() {
          var y =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", y ? "display: none !important;" : "");
        }
        
        function g() {
          var y = i.children(o),
            w = y.length && y.get(0) === f,
            I = Ws.env("editor");
          if (w) {
            I && y.remove();
            return;
          }
          y.length && y.remove(), I || i.append(f);
        }
        return t;
      })
    );
  });
  var zs = c((XU, js) => {
    "use strict";
    var Di = ke();
    Di.define(
      "edit",
      (js.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Di.env("test") || Di.env("frame")) && !r.fixture && !l_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || g,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            q(function (M) {
              e.ajax({
                url: O("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: y(M),
              });
            });
        }
        function y(M) {
          return function (D) {
            if (!D) {
              console.error("Could not load editor data");
              return;
            }
            (D.thirdPartyCookiesSupported = M),
              w(S(D.scriptPath), function () {
                window.WebflowEditor(D);
              });
          };
        }
        function w(M, D) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            D,
            I
          );
        }
        function I(M, D, F) {
          throw (console.error("Could not load editor script: " + D), F);
        }
        function S(M) {
          return M.indexOf("//") >= 0
            ? M
            : O("https://editor-api.webflow.com" + M);
        }
        function O(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function q(M) {
          var D = window.document.createElement("iframe");
          (D.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (D.style.display = "none"),
            (D.sandbox = "allow-scripts allow-same-origin");
          var F = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (C(D, F), M(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (C(D, F), M(!0));
          };
          (D.onerror = function () {
            C(D, F), M(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(D);
        }
        function C(M, D) {
          window.removeEventListener("message", D, !1), M.remove();
        }
        return n;
      })
    );
    function l_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ys = c((jU, Ks) => {
    "use strict";
    var f_ = ke();
    f_.define(
      "focus-visible",
      (Ks.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
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
          function s(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function u(C) {
            var M = C.type,
              D = C.tagName;
            return !!(
              (D === "INPUT" && a[M] && !C.readOnly) ||
              (D === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function f(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function E(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function v(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function y(C) {
            s(C.target) && (n || u(C.target)) && f(C.target);
          }
          function w(C) {
            s(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(C.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), S());
          }
          function S() {
            document.addEventListener("mousemove", q),
              document.addEventListener("mousedown", q),
              document.addEventListener("mouseup", q),
              document.addEventListener("pointermove", q),
              document.addEventListener("pointerdown", q),
              document.addEventListener("pointerup", q),
              document.addEventListener("touchmove", q),
              document.addEventListener("touchstart", q),
              document.addEventListener("touchend", q);
          }
          function O() {
            document.removeEventListener("mousemove", q),
              document.removeEventListener("mousedown", q),
              document.removeEventListener("mouseup", q),
              document.removeEventListener("pointermove", q),
              document.removeEventListener("pointerdown", q),
              document.removeEventListener("pointerup", q),
              document.removeEventListener("touchmove", q),
              document.removeEventListener("touchstart", q),
              document.removeEventListener("touchend", q);
          }
          function q(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), O());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", I, !0),
            S(),
            r.addEventListener("focus", y, !0),
            r.addEventListener("blur", w, !0);
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
  var Zs = c((zU, Qs) => {
    "use strict";
    var $s = ke();
    $s.define(
      "focus",
      (Qs.exports = function () {
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
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            $s.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var tu = c((KU, eu) => {
    "use strict";
    var ki = window.jQuery,
      it = {},
      cn = [],
      Js = ".w-ix",
      ln = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ki(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ki(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    it.init = function () {
      for (var e = cn.length, t = 0; t < e; t++) {
        var r = cn[t];
        r[0](0, r[1]);
      }
      (cn = []), ki.extend(it.triggers, ln);
    };
    it.async = function () {
      for (var e in ln) {
        var t = ln[e];
        ln.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            cn.push([t, n]);
          });
      }
    };
    it.async();
    eu.exports = it;
  });
  var br = c((YU, iu) => {
    "use strict";
    var Gi = tu();
    function ru(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var d_ = window.jQuery,
      fn = {},
      nu = ".w-ix",
      p_ = {
        reset: function (e, t) {
          Gi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Gi.triggers.intro(e, t), ru(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Gi.triggers.outro(e, t), ru(t, "COMPONENT_INACTIVE");
        },
      };
    fn.triggers = {};
    fn.types = { INTRO: "w-ix-intro" + nu, OUTRO: "w-ix-outro" + nu };
    d_.extend(fn.triggers, p_);
    iu.exports = fn;
  });
  var ou = c(($U, dt) => {
    function Vi(e) {
      return (
        (dt.exports = Vi =
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
        Vi(e)
      );
    }
    (dt.exports = Vi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var dn = c((QU, _r) => {
    var v_ = ou().default;
    function au(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (au = function (i) {
        return i ? r : t;
      })(e);
    }
    function g_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (v_(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = au(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (_r.exports = g_),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var su = c((ZU, Tr) => {
    function h_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = h_),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var me = c((JU, uu) => {
    var pn = function (e) {
      return e && e.Math == Math && e;
    };
    uu.exports =
      pn(typeof globalThis == "object" && globalThis) ||
      pn(typeof window == "object" && window) ||
      pn(typeof self == "object" && self) ||
      pn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Wt = c((eB, cu) => {
    cu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Lt = c((tB, lu) => {
    var m_ = Wt();
    lu.exports = !m_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var vn = c((rB, fu) => {
    var Ir = Function.prototype.call;
    fu.exports = Ir.bind
      ? Ir.bind(Ir)
      : function () {
          return Ir.apply(Ir, arguments);
        };
  });
  var gu = c((vu) => {
    "use strict";
    var du = {}.propertyIsEnumerable,
      pu = Object.getOwnPropertyDescriptor,
      y_ = pu && !du.call({ 1: 2 }, 1);
    vu.f = y_
      ? function (t) {
          var r = pu(this, t);
          return !!r && r.enumerable;
        }
      : du;
  });
  var Ui = c((iB, hu) => {
    hu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((oB, yu) => {
    var mu = Function.prototype,
      Bi = mu.bind,
      Wi = mu.call,
      E_ = Bi && Bi.bind(Wi);
    yu.exports = Bi
      ? function (e) {
          return e && E_(Wi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Wi.apply(e, arguments);
            }
          );
        };
  });
  var _u = c((aB, bu) => {
    var Eu = Ye(),
      b_ = Eu({}.toString),
      __ = Eu("".slice);
    bu.exports = function (e) {
      return __(b_(e), 8, -1);
    };
  });
  var Iu = c((sB, Tu) => {
    var T_ = me(),
      I_ = Ye(),
      w_ = Wt(),
      O_ = _u(),
      Hi = T_.Object,
      A_ = I_("".split);
    Tu.exports = w_(function () {
      return !Hi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return O_(e) == "String" ? A_(e, "") : Hi(e);
        }
      : Hi;
  });
  var Xi = c((uB, wu) => {
    var x_ = me(),
      S_ = x_.TypeError;
    wu.exports = function (e) {
      if (e == null) throw S_("Can't call method on " + e);
      return e;
    };
  });
  var wr = c((cB, Ou) => {
    var C_ = Iu(),
      R_ = Xi();
    Ou.exports = function (e) {
      return C_(R_(e));
    };
  });
  var ot = c((lB, Au) => {
    Au.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ht = c((fB, xu) => {
    var L_ = ot();
    xu.exports = function (e) {
      return typeof e == "object" ? e !== null : L_(e);
    };
  });
  var Or = c((dB, Su) => {
    var ji = me(),
      N_ = ot(),
      P_ = function (e) {
        return N_(e) ? e : void 0;
      };
    Su.exports = function (e, t) {
      return arguments.length < 2 ? P_(ji[e]) : ji[e] && ji[e][t];
    };
  });
  var Ru = c((pB, Cu) => {
    var q_ = Ye();
    Cu.exports = q_({}.isPrototypeOf);
  });
  var Nu = c((vB, Lu) => {
    var F_ = Or();
    Lu.exports = F_("navigator", "userAgent") || "";
  });
  var Gu = c((gB, ku) => {
    var Du = me(),
      zi = Nu(),
      Pu = Du.process,
      qu = Du.Deno,
      Fu = (Pu && Pu.versions) || (qu && qu.version),
      Mu = Fu && Fu.v8,
      $e,
      gn;
    Mu &&
      (($e = Mu.split(".")),
      (gn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !gn &&
      zi &&
      (($e = zi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = zi.match(/Chrome\/(\d+)/)), $e && (gn = +$e[1])));
    ku.exports = gn;
  });
  var Ki = c((hB, Uu) => {
    var Vu = Gu(),
      M_ = Wt();
    Uu.exports =
      !!Object.getOwnPropertySymbols &&
      !M_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Vu && Vu < 41)
        );
      });
  });
  var Yi = c((mB, Bu) => {
    var D_ = Ki();
    Bu.exports = D_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var $i = c((yB, Wu) => {
    var k_ = me(),
      G_ = Or(),
      V_ = ot(),
      U_ = Ru(),
      B_ = Yi(),
      W_ = k_.Object;
    Wu.exports = B_
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = G_("Symbol");
          return V_(t) && U_(t.prototype, W_(e));
        };
  });
  var Xu = c((EB, Hu) => {
    var H_ = me(),
      X_ = H_.String;
    Hu.exports = function (e) {
      try {
        return X_(e);
      } catch {
        return "Object";
      }
    };
  });
  var zu = c((bB, ju) => {
    var j_ = me(),
      z_ = ot(),
      K_ = Xu(),
      Y_ = j_.TypeError;
    ju.exports = function (e) {
      if (z_(e)) return e;
      throw Y_(K_(e) + " is not a function");
    };
  });
  var Yu = c((_B, Ku) => {
    var $_ = zu();
    Ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : $_(r);
    };
  });
  var Qu = c((TB, $u) => {
    var Q_ = me(),
      Qi = vn(),
      Zi = ot(),
      Ji = Ht(),
      Z_ = Q_.TypeError;
    $u.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Zi((r = e.toString)) && !Ji((n = Qi(r, e)))) ||
        (Zi((r = e.valueOf)) && !Ji((n = Qi(r, e)))) ||
        (t !== "string" && Zi((r = e.toString)) && !Ji((n = Qi(r, e))))
      )
        return n;
      throw Z_("Can't convert object to primitive value");
    };
  });
  var Ju = c((IB, Zu) => {
    Zu.exports = !1;
  });
  var hn = c((wB, tc) => {
    var ec = me(),
      J_ = Object.defineProperty;
    tc.exports = function (e, t) {
      try {
        J_(ec, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ec[e] = t;
      }
      return t;
    };
  });
  var mn = c((OB, nc) => {
    var eT = me(),
      tT = hn(),
      rc = "__core-js_shared__",
      rT = eT[rc] || tT(rc, {});
    nc.exports = rT;
  });
  var eo = c((AB, oc) => {
    var nT = Ju(),
      ic = mn();
    (oc.exports = function (e, t) {
      return ic[e] || (ic[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: nT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var sc = c((xB, ac) => {
    var iT = me(),
      oT = Xi(),
      aT = iT.Object;
    ac.exports = function (e) {
      return aT(oT(e));
    };
  });
  var bt = c((SB, uc) => {
    var sT = Ye(),
      uT = sc(),
      cT = sT({}.hasOwnProperty);
    uc.exports =
      Object.hasOwn ||
      function (t, r) {
        return cT(uT(t), r);
      };
  });
  var to = c((CB, cc) => {
    var lT = Ye(),
      fT = 0,
      dT = Math.random(),
      pT = lT((1).toString);
    cc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + pT(++fT + dT, 36);
    };
  });
  var ro = c((RB, vc) => {
    var vT = me(),
      gT = eo(),
      lc = bt(),
      hT = to(),
      fc = Ki(),
      pc = Yi(),
      Xt = gT("wks"),
      Nt = vT.Symbol,
      dc = Nt && Nt.for,
      mT = pc ? Nt : (Nt && Nt.withoutSetter) || hT;
    vc.exports = function (e) {
      if (!lc(Xt, e) || !(fc || typeof Xt[e] == "string")) {
        var t = "Symbol." + e;
        fc && lc(Nt, e)
          ? (Xt[e] = Nt[e])
          : pc && dc
          ? (Xt[e] = dc(t))
          : (Xt[e] = mT(t));
      }
      return Xt[e];
    };
  });
  var yc = c((LB, mc) => {
    var yT = me(),
      ET = vn(),
      gc = Ht(),
      hc = $i(),
      bT = Yu(),
      _T = Qu(),
      TT = ro(),
      IT = yT.TypeError,
      wT = TT("toPrimitive");
    mc.exports = function (e, t) {
      if (!gc(e) || hc(e)) return e;
      var r = bT(e, wT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = ET(r, e, t)), !gc(n) || hc(n))
        )
          return n;
        throw IT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), _T(e, t);
    };
  });
  var no = c((NB, Ec) => {
    var OT = yc(),
      AT = $i();
    Ec.exports = function (e) {
      var t = OT(e, "string");
      return AT(t) ? t : t + "";
    };
  });
  var oo = c((PB, _c) => {
    var xT = me(),
      bc = Ht(),
      io = xT.document,
      ST = bc(io) && bc(io.createElement);
    _c.exports = function (e) {
      return ST ? io.createElement(e) : {};
    };
  });
  var ao = c((qB, Tc) => {
    var CT = Lt(),
      RT = Wt(),
      LT = oo();
    Tc.exports =
      !CT &&
      !RT(function () {
        return (
          Object.defineProperty(LT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var so = c((wc) => {
    var NT = Lt(),
      PT = vn(),
      qT = gu(),
      FT = Ui(),
      MT = wr(),
      DT = no(),
      kT = bt(),
      GT = ao(),
      Ic = Object.getOwnPropertyDescriptor;
    wc.f = NT
      ? Ic
      : function (t, r) {
          if (((t = MT(t)), (r = DT(r)), GT))
            try {
              return Ic(t, r);
            } catch {}
          if (kT(t, r)) return FT(!PT(qT.f, t, r), t[r]);
        };
  });
  var Ar = c((MB, Ac) => {
    var Oc = me(),
      VT = Ht(),
      UT = Oc.String,
      BT = Oc.TypeError;
    Ac.exports = function (e) {
      if (VT(e)) return e;
      throw BT(UT(e) + " is not an object");
    };
  });
  var xr = c((Cc) => {
    var WT = me(),
      HT = Lt(),
      XT = ao(),
      xc = Ar(),
      jT = no(),
      zT = WT.TypeError,
      Sc = Object.defineProperty;
    Cc.f = HT
      ? Sc
      : function (t, r, n) {
          if ((xc(t), (r = jT(r)), xc(n), XT))
            try {
              return Sc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw zT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((kB, Rc) => {
    var KT = Lt(),
      YT = xr(),
      $T = Ui();
    Rc.exports = KT
      ? function (e, t, r) {
          return YT.f(e, t, $T(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var co = c((GB, Lc) => {
    var QT = Ye(),
      ZT = ot(),
      uo = mn(),
      JT = QT(Function.toString);
    ZT(uo.inspectSource) ||
      (uo.inspectSource = function (e) {
        return JT(e);
      });
    Lc.exports = uo.inspectSource;
  });
  var qc = c((VB, Pc) => {
    var eI = me(),
      tI = ot(),
      rI = co(),
      Nc = eI.WeakMap;
    Pc.exports = tI(Nc) && /native code/.test(rI(Nc));
  });
  var lo = c((UB, Mc) => {
    var nI = eo(),
      iI = to(),
      Fc = nI("keys");
    Mc.exports = function (e) {
      return Fc[e] || (Fc[e] = iI(e));
    };
  });
  var En = c((BB, Dc) => {
    Dc.exports = {};
  });
  var Wc = c((WB, Bc) => {
    var oI = qc(),
      Uc = me(),
      fo = Ye(),
      aI = Ht(),
      sI = yn(),
      po = bt(),
      vo = mn(),
      uI = lo(),
      cI = En(),
      kc = "Object already initialized",
      ho = Uc.TypeError,
      lI = Uc.WeakMap,
      bn,
      Sr,
      _n,
      fI = function (e) {
        return _n(e) ? Sr(e) : bn(e, {});
      },
      dI = function (e) {
        return function (t) {
          var r;
          if (!aI(t) || (r = Sr(t)).type !== e)
            throw ho("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    oI || vo.state
      ? ((_t = vo.state || (vo.state = new lI())),
        (Gc = fo(_t.get)),
        (go = fo(_t.has)),
        (Vc = fo(_t.set)),
        (bn = function (e, t) {
          if (go(_t, e)) throw new ho(kc);
          return (t.facade = e), Vc(_t, e, t), t;
        }),
        (Sr = function (e) {
          return Gc(_t, e) || {};
        }),
        (_n = function (e) {
          return go(_t, e);
        }))
      : ((Pt = uI("state")),
        (cI[Pt] = !0),
        (bn = function (e, t) {
          if (po(e, Pt)) throw new ho(kc);
          return (t.facade = e), sI(e, Pt, t), t;
        }),
        (Sr = function (e) {
          return po(e, Pt) ? e[Pt] : {};
        }),
        (_n = function (e) {
          return po(e, Pt);
        }));
    var _t, Gc, go, Vc, Pt;
    Bc.exports = { set: bn, get: Sr, has: _n, enforce: fI, getterFor: dI };
  });
  var jc = c((HB, Xc) => {
    var mo = Lt(),
      pI = bt(),
      Hc = Function.prototype,
      vI = mo && Object.getOwnPropertyDescriptor,
      yo = pI(Hc, "name"),
      gI = yo && function () {}.name === "something",
      hI = yo && (!mo || (mo && vI(Hc, "name").configurable));
    Xc.exports = { EXISTS: yo, PROPER: gI, CONFIGURABLE: hI };
  });
  var Qc = c((XB, $c) => {
    var mI = me(),
      zc = ot(),
      yI = bt(),
      Kc = yn(),
      EI = hn(),
      bI = co(),
      Yc = Wc(),
      _I = jc().CONFIGURABLE,
      TI = Yc.get,
      II = Yc.enforce,
      wI = String(String).split("String");
    ($c.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (zc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!yI(r, "name") || (_I && r.name !== s)) && Kc(r, "name", s),
          (u = II(r)),
          u.source || (u.source = wI.join(typeof s == "string" ? s : ""))),
        e === mI)
      ) {
        o ? (e[t] = r) : EI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (zc(this) && TI(this).source) || bI(this);
    });
  });
  var Eo = c((jB, Zc) => {
    var OI = Math.ceil,
      AI = Math.floor;
    Zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? AI : OI)(t);
    };
  });
  var el = c((zB, Jc) => {
    var xI = Eo(),
      SI = Math.max,
      CI = Math.min;
    Jc.exports = function (e, t) {
      var r = xI(e);
      return r < 0 ? SI(r + t, 0) : CI(r, t);
    };
  });
  var rl = c((KB, tl) => {
    var RI = Eo(),
      LI = Math.min;
    tl.exports = function (e) {
      return e > 0 ? LI(RI(e), 9007199254740991) : 0;
    };
  });
  var il = c((YB, nl) => {
    var NI = rl();
    nl.exports = function (e) {
      return NI(e.length);
    };
  });
  var bo = c(($B, al) => {
    var PI = wr(),
      qI = el(),
      FI = il(),
      ol = function (e) {
        return function (t, r, n) {
          var i = PI(t),
            o = FI(i),
            a = qI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    al.exports = { includes: ol(!0), indexOf: ol(!1) };
  });
  var To = c((QB, ul) => {
    var MI = Ye(),
      _o = bt(),
      DI = wr(),
      kI = bo().indexOf,
      GI = En(),
      sl = MI([].push);
    ul.exports = function (e, t) {
      var r = DI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !_o(GI, o) && _o(r, o) && sl(i, o);
      for (; t.length > n; ) _o(r, (o = t[n++])) && (~kI(i, o) || sl(i, o));
      return i;
    };
  });
  var Tn = c((ZB, cl) => {
    cl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var fl = c((ll) => {
    var VI = To(),
      UI = Tn(),
      BI = UI.concat("length", "prototype");
    ll.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return VI(t, BI);
      };
  });
  var pl = c((dl) => {
    dl.f = Object.getOwnPropertySymbols;
  });
  var gl = c((tW, vl) => {
    var WI = Or(),
      HI = Ye(),
      XI = fl(),
      jI = pl(),
      zI = Ar(),
      KI = HI([].concat);
    vl.exports =
      WI("Reflect", "ownKeys") ||
      function (t) {
        var r = XI.f(zI(t)),
          n = jI.f;
        return n ? KI(r, n(t)) : r;
      };
  });
  var ml = c((rW, hl) => {
    var YI = bt(),
      $I = gl(),
      QI = so(),
      ZI = xr();
    hl.exports = function (e, t) {
      for (var r = $I(t), n = ZI.f, i = QI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        YI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var El = c((nW, yl) => {
    var JI = Wt(),
      e0 = ot(),
      t0 = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = n0[r0(e)];
        return r == o0 ? !0 : r == i0 ? !1 : e0(t) ? JI(t) : !!t;
      },
      r0 = (Cr.normalize = function (e) {
        return String(e).replace(t0, ".").toLowerCase();
      }),
      n0 = (Cr.data = {}),
      i0 = (Cr.NATIVE = "N"),
      o0 = (Cr.POLYFILL = "P");
    yl.exports = Cr;
  });
  var _l = c((iW, bl) => {
    var Io = me(),
      a0 = so().f,
      s0 = yn(),
      u0 = Qc(),
      c0 = hn(),
      l0 = ml(),
      f0 = El();
    bl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        E;
      if (
        (n
          ? (a = Io)
          : i
          ? (a = Io[r] || c0(r, {}))
          : (a = (Io[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((E = a0(a, s)), (u = E && E.value)) : (u = a[s]),
            (o = f0(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            l0(f, u);
          }
          (e.sham || (u && u.sham)) && s0(f, "sham", !0), u0(a, s, f, e);
        }
    };
  });
  var Il = c((oW, Tl) => {
    var d0 = To(),
      p0 = Tn();
    Tl.exports =
      Object.keys ||
      function (t) {
        return d0(t, p0);
      };
  });
  var Ol = c((aW, wl) => {
    var v0 = Lt(),
      g0 = xr(),
      h0 = Ar(),
      m0 = wr(),
      y0 = Il();
    wl.exports = v0
      ? Object.defineProperties
      : function (t, r) {
          h0(t);
          for (var n = m0(r), i = y0(r), o = i.length, a = 0, s; o > a; )
            g0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var xl = c((sW, Al) => {
    var E0 = Or();
    Al.exports = E0("document", "documentElement");
  });
  var Fl = c((uW, ql) => {
    var b0 = Ar(),
      _0 = Ol(),
      Sl = Tn(),
      T0 = En(),
      I0 = xl(),
      w0 = oo(),
      O0 = lo(),
      Cl = ">",
      Rl = "<",
      Oo = "prototype",
      Ao = "script",
      Nl = O0("IE_PROTO"),
      wo = function () {},
      Pl = function (e) {
        return Rl + Ao + Cl + e + Rl + "/" + Ao + Cl;
      },
      Ll = function (e) {
        e.write(Pl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      A0 = function () {
        var e = w0("iframe"),
          t = "java" + Ao + ":",
          r;
        return (
          (e.style.display = "none"),
          I0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Pl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      In,
      wn = function () {
        try {
          In = new ActiveXObject("htmlfile");
        } catch {}
        wn =
          typeof document < "u"
            ? document.domain && In
              ? Ll(In)
              : A0()
            : Ll(In);
        for (var e = Sl.length; e--; ) delete wn[Oo][Sl[e]];
        return wn();
      };
    T0[Nl] = !0;
    ql.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((wo[Oo] = b0(t)), (n = new wo()), (wo[Oo] = null), (n[Nl] = t))
            : (n = wn()),
          r === void 0 ? n : _0(n, r)
        );
      };
  });
  var Dl = c((cW, Ml) => {
    var x0 = ro(),
      S0 = Fl(),
      C0 = xr(),
      xo = x0("unscopables"),
      So = Array.prototype;
    So[xo] == null && C0.f(So, xo, { configurable: !0, value: S0(null) });
    Ml.exports = function (e) {
      So[xo][e] = !0;
    };
  });
  var kl = c(() => {
    "use strict";
    var R0 = _l(),
      L0 = bo().includes,
      N0 = Dl();
    R0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return L0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    N0("includes");
  });
  var Vl = c((dW, Gl) => {
    var P0 = me(),
      q0 = Ye();
    Gl.exports = function (e, t) {
      return q0(P0[e].prototype[t]);
    };
  });
  var Bl = c((pW, Ul) => {
    kl();
    var F0 = Vl();
    Ul.exports = F0("Array", "includes");
  });
  var Hl = c((vW, Wl) => {
    var M0 = Bl();
    Wl.exports = M0;
  });
  var jl = c((gW, Xl) => {
    var D0 = Hl();
    Xl.exports = D0;
  });
  var Co = c((hW, zl) => {
    var k0 =
      typeof global == "object" && global && global.Object === Object && global;
    zl.exports = k0;
  });
  var Qe = c((mW, Kl) => {
    var G0 = Co(),
      V0 = typeof self == "object" && self && self.Object === Object && self,
      U0 = G0 || V0 || Function("return this")();
    Kl.exports = U0;
  });
  var jt = c((yW, Yl) => {
    var B0 = Qe(),
      W0 = B0.Symbol;
    Yl.exports = W0;
  });
  var Jl = c((EW, Zl) => {
    var $l = jt(),
      Ql = Object.prototype,
      H0 = Ql.hasOwnProperty,
      X0 = Ql.toString,
      Rr = $l ? $l.toStringTag : void 0;
    function j0(e) {
      var t = H0.call(e, Rr),
        r = e[Rr];
      try {
        e[Rr] = void 0;
        var n = !0;
      } catch {}
      var i = X0.call(e);
      return n && (t ? (e[Rr] = r) : delete e[Rr]), i;
    }
    Zl.exports = j0;
  });
  var tf = c((bW, ef) => {
    var z0 = Object.prototype,
      K0 = z0.toString;
    function Y0(e) {
      return K0.call(e);
    }
    ef.exports = Y0;
  });
  var Tt = c((_W, of) => {
    var rf = jt(),
      $0 = Jl(),
      Q0 = tf(),
      Z0 = "[object Null]",
      J0 = "[object Undefined]",
      nf = rf ? rf.toStringTag : void 0;
    function ew(e) {
      return e == null
        ? e === void 0
          ? J0
          : Z0
        : nf && nf in Object(e)
        ? $0(e)
        : Q0(e);
    }
    of.exports = ew;
  });
  var Ro = c((TW, af) => {
    function tw(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    af.exports = tw;
  });
  var Lo = c((IW, sf) => {
    var rw = Ro(),
      nw = rw(Object.getPrototypeOf, Object);
    sf.exports = nw;
  });
  var pt = c((wW, uf) => {
    function iw(e) {
      return e != null && typeof e == "object";
    }
    uf.exports = iw;
  });
  var No = c((OW, lf) => {
    var ow = Tt(),
      aw = Lo(),
      sw = pt(),
      uw = "[object Object]",
      cw = Function.prototype,
      lw = Object.prototype,
      cf = cw.toString,
      fw = lw.hasOwnProperty,
      dw = cf.call(Object);
    function pw(e) {
      if (!sw(e) || ow(e) != uw) return !1;
      var t = aw(e);
      if (t === null) return !0;
      var r = fw.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && cf.call(r) == dw;
    }
    lf.exports = pw;
  });
  var ff = c((Po) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    Po.default = vw;
    function vw(e) {
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
  var df = c((Fo, qo) => {
    "use strict";
    Object.defineProperty(Fo, "__esModule", { value: !0 });
    var gw = ff(),
      hw = mw(gw);
    function mw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zt;
    typeof self < "u"
      ? (zt = self)
      : typeof window < "u"
      ? (zt = window)
      : typeof global < "u"
      ? (zt = global)
      : typeof qo < "u"
      ? (zt = qo)
      : (zt = Function("return this")());
    var yw = (0, hw.default)(zt);
    Fo.default = yw;
  });
  var Mo = c((Lr) => {
    "use strict";
    Lr.__esModule = !0;
    Lr.ActionTypes = void 0;
    Lr.default = hf;
    var Ew = No(),
      bw = gf(Ew),
      _w = df(),
      pf = gf(_w);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var vf = (Lr.ActionTypes = { INIT: "@@redux/INIT" });
    function hf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(hf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function E() {
        return o;
      }
      function v(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var S = !0;
        return (
          f(),
          s.push(I),
          function () {
            if (S) {
              (S = !1), f();
              var q = s.indexOf(I);
              s.splice(q, 1);
            }
          }
        );
      }
      function g(I) {
        if (!(0, bw.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, I));
        } finally {
          u = !1;
        }
        for (var S = (a = s), O = 0; O < S.length; O++) S[O]();
        return I;
      }
      function y(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), g({ type: vf.INIT });
      }
      function w() {
        var I,
          S = v;
        return (
          (I = {
            subscribe: function (q) {
              if (typeof q != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                q.next && q.next(E());
              }
              C();
              var M = S(C);
              return { unsubscribe: M };
            },
          }),
          (I[pf.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        g({ type: vf.INIT }),
        (n = { dispatch: g, subscribe: v, getState: E, replaceReducer: y }),
        (n[pf.default] = w),
        n
      );
    }
  });
  var ko = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = Tw;
    function Tw(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ef = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = xw;
    var mf = Mo(),
      Iw = No(),
      CW = yf(Iw),
      ww = ko(),
      RW = yf(ww);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ow(e, t) {
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
    function Aw(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: mf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                mf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function xw(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Aw(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var g = !1, y = {}, w = 0; w < o.length; w++) {
          var I = o[w],
            S = r[I],
            O = f[I],
            q = S(O, E);
          if (typeof q > "u") {
            var C = Ow(I, E);
            throw new Error(C);
          }
          (y[I] = q), (g = g || q !== O);
        }
        return g ? y : f;
      };
    }
  });
  var _f = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = Sw;
    function bf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Sw(e, t) {
      if (typeof e == "function") return bf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = bf(a, t));
      }
      return n;
    }
  });
  var Bo = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = Cw;
    function Cw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Tf = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    var Rw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Wo.default = qw;
    var Lw = Bo(),
      Nw = Pw(Lw);
    function Pw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function qw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            E = {
              getState: s.getState,
              dispatch: function (g) {
                return u(g);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(E);
            })),
            (u = Nw.default.apply(void 0, f)(s.dispatch)),
            Rw({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Ho = c((We) => {
    "use strict";
    We.__esModule = !0;
    We.compose =
      We.applyMiddleware =
      We.bindActionCreators =
      We.combineReducers =
      We.createStore =
        void 0;
    var Fw = Mo(),
      Mw = Kt(Fw),
      Dw = Ef(),
      kw = Kt(Dw),
      Gw = _f(),
      Vw = Kt(Gw),
      Uw = Tf(),
      Bw = Kt(Uw),
      Ww = Bo(),
      Hw = Kt(Ww),
      Xw = ko(),
      FW = Kt(Xw);
    function Kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    We.createStore = Mw.default;
    We.combineReducers = kw.default;
    We.bindActionCreators = Vw.default;
    We.applyMiddleware = Bw.default;
    We.compose = Hw.default;
  });
  var Ze,
    Xo,
    at,
    jw,
    zw,
    On,
    Kw,
    jo = he(() => {
      "use strict";
      (Ze = {
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
      }),
        (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (jw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (zw = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (On = {
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
        }),
        (Kw = {
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
        });
    });
  var Ge,
    Yw,
    An = he(() => {
      "use strict";
      (Ge = {
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
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Yw = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var $w,
    If = he(() => {
      "use strict";
      $w = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Qw,
    Zw,
    Jw,
    eO,
    tO,
    rO,
    nO,
    zo,
    wf = he(() => {
      "use strict";
      An();
      ({
        TRANSFORM_MOVE: Qw,
        TRANSFORM_SCALE: Zw,
        TRANSFORM_ROTATE: Jw,
        TRANSFORM_SKEW: eO,
        STYLE_SIZE: tO,
        STYLE_FILTER: rO,
        STYLE_FONT_VARIATION: nO,
      } = Ge),
        (zo = {
          [Qw]: !0,
          [Zw]: !0,
          [Jw]: !0,
          [eO]: !0,
          [tO]: !0,
          [rO]: !0,
          [nO]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => bO,
    IX2_ANIMATION_FRAME_CHANGED: () => vO,
    IX2_CLEAR_REQUESTED: () => fO,
    IX2_ELEMENT_STATE_CHANGED: () => EO,
    IX2_EVENT_LISTENER_ADDED: () => dO,
    IX2_EVENT_STATE_CHANGED: () => pO,
    IX2_INSTANCE_ADDED: () => hO,
    IX2_INSTANCE_REMOVED: () => yO,
    IX2_INSTANCE_STARTED: () => mO,
    IX2_MEDIA_QUERIES_DEFINED: () => TO,
    IX2_PARAMETER_CHANGED: () => gO,
    IX2_PLAYBACK_REQUESTED: () => cO,
    IX2_PREVIEW_REQUESTED: () => uO,
    IX2_RAW_DATA_IMPORTED: () => iO,
    IX2_SESSION_INITIALIZED: () => oO,
    IX2_SESSION_STARTED: () => aO,
    IX2_SESSION_STOPPED: () => sO,
    IX2_STOP_REQUESTED: () => lO,
    IX2_TEST_FRAME_RENDERED: () => IO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => _O,
  });
  var iO,
    oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    yO,
    EO,
    bO,
    _O,
    TO,
    IO,
    Of = he(() => {
      "use strict";
      (iO = "IX2_RAW_DATA_IMPORTED"),
        (oO = "IX2_SESSION_INITIALIZED"),
        (aO = "IX2_SESSION_STARTED"),
        (sO = "IX2_SESSION_STOPPED"),
        (uO = "IX2_PREVIEW_REQUESTED"),
        (cO = "IX2_PLAYBACK_REQUESTED"),
        (lO = "IX2_STOP_REQUESTED"),
        (fO = "IX2_CLEAR_REQUESTED"),
        (dO = "IX2_EVENT_LISTENER_ADDED"),
        (pO = "IX2_EVENT_STATE_CHANGED"),
        (vO = "IX2_ANIMATION_FRAME_CHANGED"),
        (gO = "IX2_PARAMETER_CHANGED"),
        (hO = "IX2_INSTANCE_ADDED"),
        (mO = "IX2_INSTANCE_STARTED"),
        (yO = "IX2_INSTANCE_REMOVED"),
        (EO = "IX2_ELEMENT_STATE_CHANGED"),
        (bO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (_O = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (TO = "IX2_MEDIA_QUERIES_DEFINED"),
        (IO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  De(Ce, {
    ABSTRACT_NODE: () => _A,
    AUTO: () => lA,
    BACKGROUND: () => iA,
    BACKGROUND_COLOR: () => nA,
    BAR_DELIMITER: () => pA,
    BORDER_COLOR: () => oA,
    BOUNDARY_SELECTOR: () => SO,
    CHILDREN: () => vA,
    COLON_DELIMITER: () => dA,
    COLOR: () => aA,
    COMMA_DELIMITER: () => fA,
    CONFIG_UNIT: () => MO,
    CONFIG_VALUE: () => NO,
    CONFIG_X_UNIT: () => PO,
    CONFIG_X_VALUE: () => CO,
    CONFIG_Y_UNIT: () => qO,
    CONFIG_Y_VALUE: () => RO,
    CONFIG_Z_UNIT: () => FO,
    CONFIG_Z_VALUE: () => LO,
    DISPLAY: () => sA,
    FILTER: () => JO,
    FLEX: () => uA,
    FONT_VARIATION_SETTINGS: () => eA,
    HEIGHT: () => rA,
    HTML_ELEMENT: () => EA,
    IMMEDIATE_CHILDREN: () => gA,
    IX2_ID_DELIMITER: () => wO,
    OPACITY: () => ZO,
    PARENT: () => mA,
    PLAIN_OBJECT: () => bA,
    PRESERVE_3D: () => yA,
    RENDER_GENERAL: () => IA,
    RENDER_PLUGIN: () => OA,
    RENDER_STYLE: () => wA,
    RENDER_TRANSFORM: () => TA,
    ROTATE_X: () => jO,
    ROTATE_Y: () => zO,
    ROTATE_Z: () => KO,
    SCALE_3D: () => XO,
    SCALE_X: () => BO,
    SCALE_Y: () => WO,
    SCALE_Z: () => HO,
    SIBLINGS: () => hA,
    SKEW: () => YO,
    SKEW_X: () => $O,
    SKEW_Y: () => QO,
    TRANSFORM: () => DO,
    TRANSLATE_3D: () => UO,
    TRANSLATE_X: () => kO,
    TRANSLATE_Y: () => GO,
    TRANSLATE_Z: () => VO,
    WF_PAGE: () => OO,
    WIDTH: () => tA,
    WILL_CHANGE: () => cA,
    W_MOD_IX: () => xO,
    W_MOD_JS: () => AO,
  });
  var wO,
    OO,
    AO,
    xO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    FO,
    MO,
    DO,
    kO,
    GO,
    VO,
    UO,
    BO,
    WO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    yA,
    EA,
    bA,
    _A,
    TA,
    IA,
    wA,
    OA,
    Af = he(() => {
      "use strict";
      (wO = "|"),
        (OO = "data-wf-page"),
        (AO = "w-mod-js"),
        (xO = "w-mod-ix"),
        (SO = ".w-dyn-item"),
        (CO = "xValue"),
        (RO = "yValue"),
        (LO = "zValue"),
        (NO = "value"),
        (PO = "xUnit"),
        (qO = "yUnit"),
        (FO = "zUnit"),
        (MO = "unit"),
        (DO = "transform"),
        (kO = "translateX"),
        (GO = "translateY"),
        (VO = "translateZ"),
        (UO = "translate3d"),
        (BO = "scaleX"),
        (WO = "scaleY"),
        (HO = "scaleZ"),
        (XO = "scale3d"),
        (jO = "rotateX"),
        (zO = "rotateY"),
        (KO = "rotateZ"),
        (YO = "skew"),
        ($O = "skewX"),
        (QO = "skewY"),
        (ZO = "opacity"),
        (JO = "filter"),
        (eA = "font-variation-settings"),
        (tA = "width"),
        (rA = "height"),
        (nA = "backgroundColor"),
        (iA = "background"),
        (oA = "borderColor"),
        (aA = "color"),
        (sA = "display"),
        (uA = "flex"),
        (cA = "willChange"),
        (lA = "AUTO"),
        (fA = ","),
        (dA = ":"),
        (pA = "|"),
        (vA = "CHILDREN"),
        (gA = "IMMEDIATE_CHILDREN"),
        (hA = "SIBLINGS"),
        (mA = "PARENT"),
        (yA = "preserve-3d"),
        (EA = "HTML_ELEMENT"),
        (bA = "PLAIN_OBJECT"),
        (_A = "ABSTRACT_NODE"),
        (TA = "RENDER_TRANSFORM"),
        (IA = "RENDER_GENERAL"),
        (wA = "RENDER_STYLE"),
        (OA = "RENDER_PLUGIN");
    });
  var xf = {};
  De(xf, {
    ActionAppliesTo: () => Yw,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => Xo,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => jw,
    EventLimitAffectedElements: () => zw,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => $w,
    QuickEffectDirectionConsts: () => Kw,
    QuickEffectIds: () => On,
    ReducedMotionTypes: () => zo,
  });
  var Ve = he(() => {
    "use strict";
    jo();
    An();
    If();
    wf();
    Of();
    Af();
    An();
    jo();
  });
  var AA,
    Sf,
    Cf = he(() => {
      "use strict";
      Ve();
      ({ IX2_RAW_DATA_IMPORTED: AA } = Ie),
        (Sf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case AA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Yt = c((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    var xA =
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
    Ee.clone = Sn;
    Ee.addLast = Nf;
    Ee.addFirst = Pf;
    Ee.removeLast = qf;
    Ee.removeFirst = Ff;
    Ee.insert = Mf;
    Ee.removeAt = Df;
    Ee.replaceAt = kf;
    Ee.getIn = Cn;
    Ee.set = Rn;
    Ee.setIn = Ln;
    Ee.update = Vf;
    Ee.updateIn = Uf;
    Ee.merge = Bf;
    Ee.mergeDeep = Wf;
    Ee.mergeIn = Hf;
    Ee.omit = Xf;
    Ee.addDefaults = jf;
    var Rf = "INVALID_ARGS";
    function Lf(e) {
      throw new Error(e);
    }
    function Ko(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var SA = {}.hasOwnProperty;
    function Sn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ue(e, t, r) {
      var n = r;
      n == null && Lf(Rf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var E = Ko(f);
          if (E.length)
            for (var v = 0; v <= E.length; v++) {
              var g = E[v];
              if (!(e && n[g] !== void 0)) {
                var y = f[g];
                t && xn(n[g]) && xn(y) && (y = Ue(e, t, n[g], y)),
                  !(y === void 0 || y === n[g]) &&
                    (i || ((i = !0), (n = Sn(n))), (n[g] = y));
              }
            }
        }
      }
      return n;
    }
    function xn(e) {
      var t = typeof e > "u" ? "undefined" : xA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Nf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Pf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function qf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ff(e) {
      return e.length ? e.slice(1) : e;
    }
    function Mf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Df(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function kf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Cn(e, t) {
      if ((!Array.isArray(t) && Lf(Rf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Rn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Sn(i);
      return (o[t] = r), o;
    }
    function Gf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Gf(a, t, r, n + 1);
      }
      return Rn(e, o, i);
    }
    function Ln(e, t, r) {
      return t.length ? Gf(e, t, r, 0) : r;
    }
    function Vf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Rn(e, t, i);
    }
    function Uf(e, t, r) {
      var n = Cn(e, t),
        i = r(n);
      return Ln(e, t, i);
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ue(!1, !1, e, t, r, n, i, o);
    }
    function Wf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ue(!1, !0, e, t, r, n, i, o);
    }
    function Hf(e, t, r, n, i, o, a) {
      var s = Cn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          E = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        E[v - 7] = arguments[v];
      return (
        E.length
          ? (u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(E)))
          : (u = Ue(!1, !1, s, r, n, i, o, a)),
        Ln(e, t, u)
      );
    }
    function Xf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (SA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ko(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function jf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ue(!0, !1, e, t, r, n, i, o);
    }
    var CA = {
      clone: Sn,
      addLast: Nf,
      addFirst: Pf,
      removeLast: qf,
      removeFirst: Ff,
      insert: Mf,
      removeAt: Df,
      replaceAt: kf,
      getIn: Cn,
      set: Rn,
      setIn: Ln,
      update: Vf,
      updateIn: Uf,
      merge: Bf,
      mergeDeep: Wf,
      mergeIn: Hf,
      omit: Xf,
      addDefaults: jf,
    };
    Ee.default = CA;
  });
  var Kf,
    RA,
    LA,
    NA,
    PA,
    qA,
    zf,
    Yf,
    $f = he(() => {
      "use strict";
      Ve();
      (Kf = le(Yt())),
        ({
          IX2_PREVIEW_REQUESTED: RA,
          IX2_PLAYBACK_REQUESTED: LA,
          IX2_STOP_REQUESTED: NA,
          IX2_CLEAR_REQUESTED: PA,
        } = Ie),
        (qA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (zf = Object.create(null, {
          [RA]: { value: "preview" },
          [LA]: { value: "playback" },
          [NA]: { value: "stop" },
          [PA]: { value: "clear" },
        })),
        (Yf = (e = qA, t) => {
          if (t.type in zf) {
            let r = [zf[t.type]];
            return (0, Kf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    FA,
    MA,
    DA,
    kA,
    GA,
    VA,
    UA,
    BA,
    WA,
    HA,
    Qf,
    XA,
    Zf,
    Jf = he(() => {
      "use strict";
      Ve();
      (Ne = le(Yt())),
        ({
          IX2_SESSION_INITIALIZED: FA,
          IX2_SESSION_STARTED: MA,
          IX2_TEST_FRAME_RENDERED: DA,
          IX2_SESSION_STOPPED: kA,
          IX2_EVENT_LISTENER_ADDED: GA,
          IX2_EVENT_STATE_CHANGED: VA,
          IX2_ANIMATION_FRAME_CHANGED: UA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: BA,
          IX2_VIEWPORT_WIDTH_CHANGED: WA,
          IX2_MEDIA_QUERIES_DEFINED: HA,
        } = Ie),
        (Qf = {
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
        }),
        (XA = 20),
        (Zf = (e = Qf, t) => {
          switch (t.type) {
            case FA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case MA:
              return (0, Ne.set)(e, "active", !0);
            case DA: {
              let {
                payload: { step: r = XA },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case kA:
              return Qf;
            case UA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case GA: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case VA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case BA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case WA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case HA:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var td = c((t5, ed) => {
    function jA() {
      (this.__data__ = []), (this.size = 0);
    }
    ed.exports = jA;
  });
  var Nn = c((r5, rd) => {
    function zA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    rd.exports = zA;
  });
  var Nr = c((n5, nd) => {
    var KA = Nn();
    function YA(e, t) {
      for (var r = e.length; r--; ) if (KA(e[r][0], t)) return r;
      return -1;
    }
    nd.exports = YA;
  });
  var od = c((i5, id) => {
    var $A = Nr(),
      QA = Array.prototype,
      ZA = QA.splice;
    function JA(e) {
      var t = this.__data__,
        r = $A(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : ZA.call(t, r, 1), --this.size, !0;
    }
    id.exports = JA;
  });
  var sd = c((o5, ad) => {
    var ex = Nr();
    function tx(e) {
      var t = this.__data__,
        r = ex(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ad.exports = tx;
  });
  var cd = c((a5, ud) => {
    var rx = Nr();
    function nx(e) {
      return rx(this.__data__, e) > -1;
    }
    ud.exports = nx;
  });
  var fd = c((s5, ld) => {
    var ix = Nr();
    function ox(e, t) {
      var r = this.__data__,
        n = ix(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ld.exports = ox;
  });
  var Pr = c((u5, dd) => {
    var ax = td(),
      sx = od(),
      ux = sd(),
      cx = cd(),
      lx = fd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = ax;
    $t.prototype.delete = sx;
    $t.prototype.get = ux;
    $t.prototype.has = cx;
    $t.prototype.set = lx;
    dd.exports = $t;
  });
  var vd = c((c5, pd) => {
    var fx = Pr();
    function dx() {
      (this.__data__ = new fx()), (this.size = 0);
    }
    pd.exports = dx;
  });
  var hd = c((l5, gd) => {
    function px(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    gd.exports = px;
  });
  var yd = c((f5, md) => {
    function vx(e) {
      return this.__data__.get(e);
    }
    md.exports = vx;
  });
  var bd = c((d5, Ed) => {
    function gx(e) {
      return this.__data__.has(e);
    }
    Ed.exports = gx;
  });
  var st = c((p5, _d) => {
    function hx(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    _d.exports = hx;
  });
  var Yo = c((v5, Td) => {
    var mx = Tt(),
      yx = st(),
      Ex = "[object AsyncFunction]",
      bx = "[object Function]",
      _x = "[object GeneratorFunction]",
      Tx = "[object Proxy]";
    function Ix(e) {
      if (!yx(e)) return !1;
      var t = mx(e);
      return t == bx || t == _x || t == Ex || t == Tx;
    }
    Td.exports = Ix;
  });
  var wd = c((g5, Id) => {
    var wx = Qe(),
      Ox = wx["__core-js_shared__"];
    Id.exports = Ox;
  });
  var xd = c((h5, Ad) => {
    var $o = wd(),
      Od = (function () {
        var e = /[^.]+$/.exec(($o && $o.keys && $o.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Ax(e) {
      return !!Od && Od in e;
    }
    Ad.exports = Ax;
  });
  var Qo = c((m5, Sd) => {
    var xx = Function.prototype,
      Sx = xx.toString;
    function Cx(e) {
      if (e != null) {
        try {
          return Sx.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Sd.exports = Cx;
  });
  var Rd = c((y5, Cd) => {
    var Rx = Yo(),
      Lx = xd(),
      Nx = st(),
      Px = Qo(),
      qx = /[\\^$.*+?()[\]{}|]/g,
      Fx = /^\[object .+?Constructor\]$/,
      Mx = Function.prototype,
      Dx = Object.prototype,
      kx = Mx.toString,
      Gx = Dx.hasOwnProperty,
      Vx = RegExp(
        "^" +
          kx
            .call(Gx)
            .replace(qx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Ux(e) {
      if (!Nx(e) || Lx(e)) return !1;
      var t = Rx(e) ? Vx : Fx;
      return t.test(Px(e));
    }
    Cd.exports = Ux;
  });
  var Nd = c((E5, Ld) => {
    function Bx(e, t) {
      return e?.[t];
    }
    Ld.exports = Bx;
  });
  var It = c((b5, Pd) => {
    var Wx = Rd(),
      Hx = Nd();
    function Xx(e, t) {
      var r = Hx(e, t);
      return Wx(r) ? r : void 0;
    }
    Pd.exports = Xx;
  });
  var Pn = c((_5, qd) => {
    var jx = It(),
      zx = Qe(),
      Kx = jx(zx, "Map");
    qd.exports = Kx;
  });
  var qr = c((T5, Fd) => {
    var Yx = It(),
      $x = Yx(Object, "create");
    Fd.exports = $x;
  });
  var kd = c((I5, Dd) => {
    var Md = qr();
    function Qx() {
      (this.__data__ = Md ? Md(null) : {}), (this.size = 0);
    }
    Dd.exports = Qx;
  });
  var Vd = c((w5, Gd) => {
    function Zx(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Gd.exports = Zx;
  });
  var Bd = c((O5, Ud) => {
    var Jx = qr(),
      eS = "__lodash_hash_undefined__",
      tS = Object.prototype,
      rS = tS.hasOwnProperty;
    function nS(e) {
      var t = this.__data__;
      if (Jx) {
        var r = t[e];
        return r === eS ? void 0 : r;
      }
      return rS.call(t, e) ? t[e] : void 0;
    }
    Ud.exports = nS;
  });
  var Hd = c((A5, Wd) => {
    var iS = qr(),
      oS = Object.prototype,
      aS = oS.hasOwnProperty;
    function sS(e) {
      var t = this.__data__;
      return iS ? t[e] !== void 0 : aS.call(t, e);
    }
    Wd.exports = sS;
  });
  var jd = c((x5, Xd) => {
    var uS = qr(),
      cS = "__lodash_hash_undefined__";
    function lS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = uS && t === void 0 ? cS : t),
        this
      );
    }
    Xd.exports = lS;
  });
  var Kd = c((S5, zd) => {
    var fS = kd(),
      dS = Vd(),
      pS = Bd(),
      vS = Hd(),
      gS = jd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = fS;
    Qt.prototype.delete = dS;
    Qt.prototype.get = pS;
    Qt.prototype.has = vS;
    Qt.prototype.set = gS;
    zd.exports = Qt;
  });
  var Qd = c((C5, $d) => {
    var Yd = Kd(),
      hS = Pr(),
      mS = Pn();
    function yS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Yd(),
          map: new (mS || hS)(),
          string: new Yd(),
        });
    }
    $d.exports = yS;
  });
  var Jd = c((R5, Zd) => {
    function ES(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Zd.exports = ES;
  });
  var Fr = c((L5, ep) => {
    var bS = Jd();
    function _S(e, t) {
      var r = e.__data__;
      return bS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    ep.exports = _S;
  });
  var rp = c((N5, tp) => {
    var TS = Fr();
    function IS(e) {
      var t = TS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    tp.exports = IS;
  });
  var ip = c((P5, np) => {
    var wS = Fr();
    function OS(e) {
      return wS(this, e).get(e);
    }
    np.exports = OS;
  });
  var ap = c((q5, op) => {
    var AS = Fr();
    function xS(e) {
      return AS(this, e).has(e);
    }
    op.exports = xS;
  });
  var up = c((F5, sp) => {
    var SS = Fr();
    function CS(e, t) {
      var r = SS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    sp.exports = CS;
  });
  var qn = c((M5, cp) => {
    var RS = Qd(),
      LS = rp(),
      NS = ip(),
      PS = ap(),
      qS = up();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = RS;
    Zt.prototype.delete = LS;
    Zt.prototype.get = NS;
    Zt.prototype.has = PS;
    Zt.prototype.set = qS;
    cp.exports = Zt;
  });
  var fp = c((D5, lp) => {
    var FS = Pr(),
      MS = Pn(),
      DS = qn(),
      kS = 200;
    function GS(e, t) {
      var r = this.__data__;
      if (r instanceof FS) {
        var n = r.__data__;
        if (!MS || n.length < kS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new DS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    lp.exports = GS;
  });
  var Zo = c((k5, dp) => {
    var VS = Pr(),
      US = vd(),
      BS = hd(),
      WS = yd(),
      HS = bd(),
      XS = fp();
    function Jt(e) {
      var t = (this.__data__ = new VS(e));
      this.size = t.size;
    }
    Jt.prototype.clear = US;
    Jt.prototype.delete = BS;
    Jt.prototype.get = WS;
    Jt.prototype.has = HS;
    Jt.prototype.set = XS;
    dp.exports = Jt;
  });
  var vp = c((G5, pp) => {
    var jS = "__lodash_hash_undefined__";
    function zS(e) {
      return this.__data__.set(e, jS), this;
    }
    pp.exports = zS;
  });
  var hp = c((V5, gp) => {
    function KS(e) {
      return this.__data__.has(e);
    }
    gp.exports = KS;
  });
  var yp = c((U5, mp) => {
    var YS = qn(),
      $S = vp(),
      QS = hp();
    function Fn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new YS(); ++t < r; ) this.add(e[t]);
    }
    Fn.prototype.add = Fn.prototype.push = $S;
    Fn.prototype.has = QS;
    mp.exports = Fn;
  });
  var bp = c((B5, Ep) => {
    function ZS(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ep.exports = ZS;
  });
  var Tp = c((W5, _p) => {
    function JS(e, t) {
      return e.has(t);
    }
    _p.exports = JS;
  });
  var Jo = c((H5, Ip) => {
    var eC = yp(),
      tC = bp(),
      rC = Tp(),
      nC = 1,
      iC = 2;
    function oC(e, t, r, n, i, o) {
      var a = r & nC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        E = o.get(t);
      if (f && E) return f == t && E == e;
      var v = -1,
        g = !0,
        y = r & iC ? new eC() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var w = e[v],
          I = t[v];
        if (n) var S = a ? n(I, w, v, t, e, o) : n(w, I, v, e, t, o);
        if (S !== void 0) {
          if (S) continue;
          g = !1;
          break;
        }
        if (y) {
          if (
            !tC(t, function (O, q) {
              if (!rC(y, q) && (w === O || i(w, O, r, n, o))) return y.push(q);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(w === I || i(w, I, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    Ip.exports = oC;
  });
  var Op = c((X5, wp) => {
    var aC = Qe(),
      sC = aC.Uint8Array;
    wp.exports = sC;
  });
  var xp = c((j5, Ap) => {
    function uC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Ap.exports = uC;
  });
  var Cp = c((z5, Sp) => {
    function cC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Sp.exports = cC;
  });
  var qp = c((K5, Pp) => {
    var Rp = jt(),
      Lp = Op(),
      lC = Nn(),
      fC = Jo(),
      dC = xp(),
      pC = Cp(),
      vC = 1,
      gC = 2,
      hC = "[object Boolean]",
      mC = "[object Date]",
      yC = "[object Error]",
      EC = "[object Map]",
      bC = "[object Number]",
      _C = "[object RegExp]",
      TC = "[object Set]",
      IC = "[object String]",
      wC = "[object Symbol]",
      OC = "[object ArrayBuffer]",
      AC = "[object DataView]",
      Np = Rp ? Rp.prototype : void 0,
      ea = Np ? Np.valueOf : void 0;
    function xC(e, t, r, n, i, o, a) {
      switch (r) {
        case AC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case OC:
          return !(e.byteLength != t.byteLength || !o(new Lp(e), new Lp(t)));
        case hC:
        case mC:
        case bC:
          return lC(+e, +t);
        case yC:
          return e.name == t.name && e.message == t.message;
        case _C:
        case IC:
          return e == t + "";
        case EC:
          var s = dC;
        case TC:
          var u = n & vC;
          if ((s || (s = pC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= gC), a.set(e, t);
          var E = fC(s(e), s(t), n, i, o, a);
          return a.delete(e), E;
        case wC:
          if (ea) return ea.call(e) == ea.call(t);
      }
      return !1;
    }
    Pp.exports = xC;
  });
  var Mn = c((Y5, Fp) => {
    function SC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Fp.exports = SC;
  });
  var we = c(($5, Mp) => {
    var CC = Array.isArray;
    Mp.exports = CC;
  });
  var ta = c((Q5, Dp) => {
    var RC = Mn(),
      LC = we();
    function NC(e, t, r) {
      var n = t(e);
      return LC(e) ? n : RC(n, r(e));
    }
    Dp.exports = NC;
  });
  var Gp = c((Z5, kp) => {
    function PC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    kp.exports = PC;
  });
  var ra = c((J5, Vp) => {
    function qC() {
      return [];
    }
    Vp.exports = qC;
  });
  var na = c((eH, Bp) => {
    var FC = Gp(),
      MC = ra(),
      DC = Object.prototype,
      kC = DC.propertyIsEnumerable,
      Up = Object.getOwnPropertySymbols,
      GC = Up
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                FC(Up(e), function (t) {
                  return kC.call(e, t);
                }));
          }
        : MC;
    Bp.exports = GC;
  });
  var Hp = c((tH, Wp) => {
    function VC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Wp.exports = VC;
  });
  var jp = c((rH, Xp) => {
    var UC = Tt(),
      BC = pt(),
      WC = "[object Arguments]";
    function HC(e) {
      return BC(e) && UC(e) == WC;
    }
    Xp.exports = HC;
  });
  var Mr = c((nH, Yp) => {
    var zp = jp(),
      XC = pt(),
      Kp = Object.prototype,
      jC = Kp.hasOwnProperty,
      zC = Kp.propertyIsEnumerable,
      KC = zp(
        (function () {
          return arguments;
        })()
      )
        ? zp
        : function (e) {
            return XC(e) && jC.call(e, "callee") && !zC.call(e, "callee");
          };
    Yp.exports = KC;
  });
  var Qp = c((iH, $p) => {
    function YC() {
      return !1;
    }
    $p.exports = YC;
  });
  var Dn = c((Dr, er) => {
    var $C = Qe(),
      QC = Qp(),
      ev = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      Zp = ev && typeof er == "object" && er && !er.nodeType && er,
      ZC = Zp && Zp.exports === ev,
      Jp = ZC ? $C.Buffer : void 0,
      JC = Jp ? Jp.isBuffer : void 0,
      eR = JC || QC;
    er.exports = eR;
  });
  var kn = c((oH, tv) => {
    var tR = 9007199254740991,
      rR = /^(?:0|[1-9]\d*)$/;
    function nR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? tR),
        !!t &&
          (r == "number" || (r != "symbol" && rR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    tv.exports = nR;
  });
  var Gn = c((aH, rv) => {
    var iR = 9007199254740991;
    function oR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iR;
    }
    rv.exports = oR;
  });
  var iv = c((sH, nv) => {
    var aR = Tt(),
      sR = Gn(),
      uR = pt(),
      cR = "[object Arguments]",
      lR = "[object Array]",
      fR = "[object Boolean]",
      dR = "[object Date]",
      pR = "[object Error]",
      vR = "[object Function]",
      gR = "[object Map]",
      hR = "[object Number]",
      mR = "[object Object]",
      yR = "[object RegExp]",
      ER = "[object Set]",
      bR = "[object String]",
      _R = "[object WeakMap]",
      TR = "[object ArrayBuffer]",
      IR = "[object DataView]",
      wR = "[object Float32Array]",
      OR = "[object Float64Array]",
      AR = "[object Int8Array]",
      xR = "[object Int16Array]",
      SR = "[object Int32Array]",
      CR = "[object Uint8Array]",
      RR = "[object Uint8ClampedArray]",
      LR = "[object Uint16Array]",
      NR = "[object Uint32Array]",
      ge = {};
    ge[wR] =
      ge[OR] =
      ge[AR] =
      ge[xR] =
      ge[SR] =
      ge[CR] =
      ge[RR] =
      ge[LR] =
      ge[NR] =
        !0;
    ge[cR] =
      ge[lR] =
      ge[TR] =
      ge[fR] =
      ge[IR] =
      ge[dR] =
      ge[pR] =
      ge[vR] =
      ge[gR] =
      ge[hR] =
      ge[mR] =
      ge[yR] =
      ge[ER] =
      ge[bR] =
      ge[_R] =
        !1;
    function PR(e) {
      return uR(e) && sR(e.length) && !!ge[aR(e)];
    }
    nv.exports = PR;
  });
  var av = c((uH, ov) => {
    function qR(e) {
      return function (t) {
        return e(t);
      };
    }
    ov.exports = qR;
  });
  var uv = c((kr, tr) => {
    var FR = Co(),
      sv = typeof kr == "object" && kr && !kr.nodeType && kr,
      Gr = sv && typeof tr == "object" && tr && !tr.nodeType && tr,
      MR = Gr && Gr.exports === sv,
      ia = MR && FR.process,
      DR = (function () {
        try {
          var e = Gr && Gr.require && Gr.require("util").types;
          return e || (ia && ia.binding && ia.binding("util"));
        } catch {}
      })();
    tr.exports = DR;
  });
  var Vn = c((cH, fv) => {
    var kR = iv(),
      GR = av(),
      cv = uv(),
      lv = cv && cv.isTypedArray,
      VR = lv ? GR(lv) : kR;
    fv.exports = VR;
  });
  var oa = c((lH, dv) => {
    var UR = Hp(),
      BR = Mr(),
      WR = we(),
      HR = Dn(),
      XR = kn(),
      jR = Vn(),
      zR = Object.prototype,
      KR = zR.hasOwnProperty;
    function YR(e, t) {
      var r = WR(e),
        n = !r && BR(e),
        i = !r && !n && HR(e),
        o = !r && !n && !i && jR(e),
        a = r || n || i || o,
        s = a ? UR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || KR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              XR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    dv.exports = YR;
  });
  var Un = c((fH, pv) => {
    var $R = Object.prototype;
    function QR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || $R;
      return e === r;
    }
    pv.exports = QR;
  });
  var gv = c((dH, vv) => {
    var ZR = Ro(),
      JR = ZR(Object.keys, Object);
    vv.exports = JR;
  });
  var Bn = c((pH, hv) => {
    var eL = Un(),
      tL = gv(),
      rL = Object.prototype,
      nL = rL.hasOwnProperty;
    function iL(e) {
      if (!eL(e)) return tL(e);
      var t = [];
      for (var r in Object(e)) nL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    hv.exports = iL;
  });
  var qt = c((vH, mv) => {
    var oL = Yo(),
      aL = Gn();
    function sL(e) {
      return e != null && aL(e.length) && !oL(e);
    }
    mv.exports = sL;
  });
  var Vr = c((gH, yv) => {
    var uL = oa(),
      cL = Bn(),
      lL = qt();
    function fL(e) {
      return lL(e) ? uL(e) : cL(e);
    }
    yv.exports = fL;
  });
  var bv = c((hH, Ev) => {
    var dL = ta(),
      pL = na(),
      vL = Vr();
    function gL(e) {
      return dL(e, vL, pL);
    }
    Ev.exports = gL;
  });
  var Iv = c((mH, Tv) => {
    var _v = bv(),
      hL = 1,
      mL = Object.prototype,
      yL = mL.hasOwnProperty;
    function EL(e, t, r, n, i, o) {
      var a = r & hL,
        s = _v(e),
        u = s.length,
        f = _v(t),
        E = f.length;
      if (u != E && !a) return !1;
      for (var v = u; v--; ) {
        var g = s[v];
        if (!(a ? g in t : yL.call(t, g))) return !1;
      }
      var y = o.get(e),
        w = o.get(t);
      if (y && w) return y == t && w == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var S = a; ++v < u; ) {
        g = s[v];
        var O = e[g],
          q = t[g];
        if (n) var C = a ? n(q, O, g, t, e, o) : n(O, q, g, e, t, o);
        if (!(C === void 0 ? O === q || i(O, q, r, n, o) : C)) {
          I = !1;
          break;
        }
        S || (S = g == "constructor");
      }
      if (I && !S) {
        var M = e.constructor,
          D = t.constructor;
        M != D &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof D == "function" &&
            D instanceof D
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    Tv.exports = EL;
  });
  var Ov = c((yH, wv) => {
    var bL = It(),
      _L = Qe(),
      TL = bL(_L, "DataView");
    wv.exports = TL;
  });
  var xv = c((EH, Av) => {
    var IL = It(),
      wL = Qe(),
      OL = IL(wL, "Promise");
    Av.exports = OL;
  });
  var Cv = c((bH, Sv) => {
    var AL = It(),
      xL = Qe(),
      SL = AL(xL, "Set");
    Sv.exports = SL;
  });
  var aa = c((_H, Rv) => {
    var CL = It(),
      RL = Qe(),
      LL = CL(RL, "WeakMap");
    Rv.exports = LL;
  });
  var Wn = c((TH, Dv) => {
    var sa = Ov(),
      ua = Pn(),
      ca = xv(),
      la = Cv(),
      fa = aa(),
      Mv = Tt(),
      rr = Qo(),
      Lv = "[object Map]",
      NL = "[object Object]",
      Nv = "[object Promise]",
      Pv = "[object Set]",
      qv = "[object WeakMap]",
      Fv = "[object DataView]",
      PL = rr(sa),
      qL = rr(ua),
      FL = rr(ca),
      ML = rr(la),
      DL = rr(fa),
      Ft = Mv;
    ((sa && Ft(new sa(new ArrayBuffer(1))) != Fv) ||
      (ua && Ft(new ua()) != Lv) ||
      (ca && Ft(ca.resolve()) != Nv) ||
      (la && Ft(new la()) != Pv) ||
      (fa && Ft(new fa()) != qv)) &&
      (Ft = function (e) {
        var t = Mv(e),
          r = t == NL ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case PL:
              return Fv;
            case qL:
              return Lv;
            case FL:
              return Nv;
            case ML:
              return Pv;
            case DL:
              return qv;
          }
        return t;
      });
    Dv.exports = Ft;
  });
  var Xv = c((IH, Hv) => {
    var da = Zo(),
      kL = Jo(),
      GL = qp(),
      VL = Iv(),
      kv = Wn(),
      Gv = we(),
      Vv = Dn(),
      UL = Vn(),
      BL = 1,
      Uv = "[object Arguments]",
      Bv = "[object Array]",
      Hn = "[object Object]",
      WL = Object.prototype,
      Wv = WL.hasOwnProperty;
    function HL(e, t, r, n, i, o) {
      var a = Gv(e),
        s = Gv(t),
        u = a ? Bv : kv(e),
        f = s ? Bv : kv(t);
      (u = u == Uv ? Hn : u), (f = f == Uv ? Hn : f);
      var E = u == Hn,
        v = f == Hn,
        g = u == f;
      if (g && Vv(e)) {
        if (!Vv(t)) return !1;
        (a = !0), (E = !1);
      }
      if (g && !E)
        return (
          o || (o = new da()),
          a || UL(e) ? kL(e, t, r, n, i, o) : GL(e, t, u, r, n, i, o)
        );
      if (!(r & BL)) {
        var y = E && Wv.call(e, "__wrapped__"),
          w = v && Wv.call(t, "__wrapped__");
        if (y || w) {
          var I = y ? e.value() : e,
            S = w ? t.value() : t;
          return o || (o = new da()), i(I, S, r, n, o);
        }
      }
      return g ? (o || (o = new da()), VL(e, t, r, n, i, o)) : !1;
    }
    Hv.exports = HL;
  });
  var pa = c((wH, Kv) => {
    var XL = Xv(),
      jv = pt();
    function zv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!jv(e) && !jv(t))
        ? e !== e && t !== t
        : XL(e, t, r, n, zv, i);
    }
    Kv.exports = zv;
  });
  var $v = c((OH, Yv) => {
    var jL = Zo(),
      zL = pa(),
      KL = 1,
      YL = 2;
    function $L(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          E = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var v = new jL();
          if (n) var g = n(f, E, u, e, t, v);
          if (!(g === void 0 ? zL(E, f, KL | YL, n, v) : g)) return !1;
        }
      }
      return !0;
    }
    Yv.exports = $L;
  });
  var va = c((AH, Qv) => {
    var QL = st();
    function ZL(e) {
      return e === e && !QL(e);
    }
    Qv.exports = ZL;
  });
  var Jv = c((xH, Zv) => {
    var JL = va(),
      eN = Vr();
    function tN(e) {
      for (var t = eN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, JL(i)];
      }
      return t;
    }
    Zv.exports = tN;
  });
  var ga = c((SH, eg) => {
    function rN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    eg.exports = rN;
  });
  var rg = c((CH, tg) => {
    var nN = $v(),
      iN = Jv(),
      oN = ga();
    function aN(e) {
      var t = iN(e);
      return t.length == 1 && t[0][2]
        ? oN(t[0][0], t[0][1])
        : function (r) {
            return r === e || nN(r, e, t);
          };
    }
    tg.exports = aN;
  });
  var Ur = c((RH, ng) => {
    var sN = Tt(),
      uN = pt(),
      cN = "[object Symbol]";
    function lN(e) {
      return typeof e == "symbol" || (uN(e) && sN(e) == cN);
    }
    ng.exports = lN;
  });
  var Xn = c((LH, ig) => {
    var fN = we(),
      dN = Ur(),
      pN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      vN = /^\w*$/;
    function gN(e, t) {
      if (fN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        dN(e)
        ? !0
        : vN.test(e) || !pN.test(e) || (t != null && e in Object(t));
    }
    ig.exports = gN;
  });
  var sg = c((NH, ag) => {
    var og = qn(),
      hN = "Expected a function";
    function ha(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(hN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ha.Cache || og)()), r;
    }
    ha.Cache = og;
    ag.exports = ha;
  });
  var cg = c((PH, ug) => {
    var mN = sg(),
      yN = 500;
    function EN(e) {
      var t = mN(e, function (n) {
          return r.size === yN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    ug.exports = EN;
  });
  var fg = c((qH, lg) => {
    var bN = cg(),
      _N =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      TN = /\\(\\)?/g,
      IN = bN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(_N, function (r, n, i, o) {
            t.push(i ? o.replace(TN, "$1") : n || r);
          }),
          t
        );
      });
    lg.exports = IN;
  });
  var ma = c((FH, dg) => {
    function wN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    dg.exports = wN;
  });
  var yg = c((MH, mg) => {
    var pg = jt(),
      ON = ma(),
      AN = we(),
      xN = Ur(),
      SN = 1 / 0,
      vg = pg ? pg.prototype : void 0,
      gg = vg ? vg.toString : void 0;
    function hg(e) {
      if (typeof e == "string") return e;
      if (AN(e)) return ON(e, hg) + "";
      if (xN(e)) return gg ? gg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -SN ? "-0" : t;
    }
    mg.exports = hg;
  });
  var bg = c((DH, Eg) => {
    var CN = yg();
    function RN(e) {
      return e == null ? "" : CN(e);
    }
    Eg.exports = RN;
  });
  var Br = c((kH, _g) => {
    var LN = we(),
      NN = Xn(),
      PN = fg(),
      qN = bg();
    function FN(e, t) {
      return LN(e) ? e : NN(e, t) ? [e] : PN(qN(e));
    }
    _g.exports = FN;
  });
  var nr = c((GH, Tg) => {
    var MN = Ur(),
      DN = 1 / 0;
    function kN(e) {
      if (typeof e == "string" || MN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -DN ? "-0" : t;
    }
    Tg.exports = kN;
  });
  var jn = c((VH, Ig) => {
    var GN = Br(),
      VN = nr();
    function UN(e, t) {
      t = GN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[VN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Ig.exports = UN;
  });
  var zn = c((UH, wg) => {
    var BN = jn();
    function WN(e, t, r) {
      var n = e == null ? void 0 : BN(e, t);
      return n === void 0 ? r : n;
    }
    wg.exports = WN;
  });
  var Ag = c((BH, Og) => {
    function HN(e, t) {
      return e != null && t in Object(e);
    }
    Og.exports = HN;
  });
  var Sg = c((WH, xg) => {
    var XN = Br(),
      jN = Mr(),
      zN = we(),
      KN = kn(),
      YN = Gn(),
      $N = nr();
    function QN(e, t, r) {
      t = XN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = $N(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && YN(i) && KN(a, i) && (zN(e) || jN(e)));
    }
    xg.exports = QN;
  });
  var Rg = c((HH, Cg) => {
    var ZN = Ag(),
      JN = Sg();
    function eP(e, t) {
      return e != null && JN(e, t, ZN);
    }
    Cg.exports = eP;
  });
  var Ng = c((XH, Lg) => {
    var tP = pa(),
      rP = zn(),
      nP = Rg(),
      iP = Xn(),
      oP = va(),
      aP = ga(),
      sP = nr(),
      uP = 1,
      cP = 2;
    function lP(e, t) {
      return iP(e) && oP(t)
        ? aP(sP(e), t)
        : function (r) {
            var n = rP(r, e);
            return n === void 0 && n === t ? nP(r, e) : tP(t, n, uP | cP);
          };
    }
    Lg.exports = lP;
  });
  var Kn = c((jH, Pg) => {
    function fP(e) {
      return e;
    }
    Pg.exports = fP;
  });
  var ya = c((zH, qg) => {
    function dP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    qg.exports = dP;
  });
  var Mg = c((KH, Fg) => {
    var pP = jn();
    function vP(e) {
      return function (t) {
        return pP(t, e);
      };
    }
    Fg.exports = vP;
  });
  var kg = c((YH, Dg) => {
    var gP = ya(),
      hP = Mg(),
      mP = Xn(),
      yP = nr();
    function EP(e) {
      return mP(e) ? gP(yP(e)) : hP(e);
    }
    Dg.exports = EP;
  });
  var wt = c(($H, Gg) => {
    var bP = rg(),
      _P = Ng(),
      TP = Kn(),
      IP = we(),
      wP = kg();
    function OP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? TP
        : typeof e == "object"
        ? IP(e)
          ? _P(e[0], e[1])
          : bP(e)
        : wP(e);
    }
    Gg.exports = OP;
  });
  var Ea = c((QH, Vg) => {
    var AP = wt(),
      xP = qt(),
      SP = Vr();
    function CP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!xP(t)) {
          var o = AP(r, 3);
          (t = SP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Vg.exports = CP;
  });
  var ba = c((ZH, Ug) => {
    function RP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ug.exports = RP;
  });
  var Wg = c((JH, Bg) => {
    var LP = /\s/;
    function NP(e) {
      for (var t = e.length; t-- && LP.test(e.charAt(t)); );
      return t;
    }
    Bg.exports = NP;
  });
  var Xg = c((eX, Hg) => {
    var PP = Wg(),
      qP = /^\s+/;
    function FP(e) {
      return e && e.slice(0, PP(e) + 1).replace(qP, "");
    }
    Hg.exports = FP;
  });
  var Yn = c((tX, Kg) => {
    var MP = Xg(),
      jg = st(),
      DP = Ur(),
      zg = 0 / 0,
      kP = /^[-+]0x[0-9a-f]+$/i,
      GP = /^0b[01]+$/i,
      VP = /^0o[0-7]+$/i,
      UP = parseInt;
    function BP(e) {
      if (typeof e == "number") return e;
      if (DP(e)) return zg;
      if (jg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = jg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = MP(e);
      var r = GP.test(e);
      return r || VP.test(e) ? UP(e.slice(2), r ? 2 : 8) : kP.test(e) ? zg : +e;
    }
    Kg.exports = BP;
  });
  var Qg = c((rX, $g) => {
    var WP = Yn(),
      Yg = 1 / 0,
      HP = 17976931348623157e292;
    function XP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = WP(e)), e === Yg || e === -Yg)) {
        var t = e < 0 ? -1 : 1;
        return t * HP;
      }
      return e === e ? e : 0;
    }
    $g.exports = XP;
  });
  var _a = c((nX, Zg) => {
    var jP = Qg();
    function zP(e) {
      var t = jP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Zg.exports = zP;
  });
  var eh = c((iX, Jg) => {
    var KP = ba(),
      YP = wt(),
      $P = _a(),
      QP = Math.max;
    function ZP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : $P(r);
      return i < 0 && (i = QP(n + i, 0)), KP(e, YP(t, 3), i);
    }
    Jg.exports = ZP;
  });
  var Ta = c((oX, th) => {
    var JP = Ea(),
      eq = eh(),
      tq = JP(eq);
    th.exports = tq;
  });
  var ih = {};
  De(ih, {
    ELEMENT_MATCHES: () => rq,
    FLEX_PREFIXED: () => Ia,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => Ot,
    TRANSFORM_STYLE_PREFIXED: () => Qn,
    withBrowser: () => $n,
  });
  var nh,
    Je,
    $n,
    rq,
    Ia,
    Ot,
    rh,
    Qn,
    Zn = he(() => {
      "use strict";
      (nh = le(Ta())),
        (Je = typeof window < "u"),
        ($n = (e, t) => (Je ? e() : t)),
        (rq = $n(() =>
          (0, nh.default)(
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
        )),
        (Ia = $n(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Ot = $n(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (rh = Ot.split("transform")[0]),
        (Qn = rh ? rh + "TransformStyle" : "transformStyle");
    });
  var wa = c((aX, ch) => {
    var nq = 4,
      iq = 0.001,
      oq = 1e-7,
      aq = 10,
      Wr = 11,
      Jn = 1 / (Wr - 1),
      sq = typeof Float32Array == "function";
    function oh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ah(e, t) {
      return 3 * t - 6 * e;
    }
    function sh(e) {
      return 3 * e;
    }
    function ei(e, t, r) {
      return ((oh(t, r) * e + ah(t, r)) * e + sh(t)) * e;
    }
    function uh(e, t, r) {
      return 3 * oh(t, r) * e * e + 2 * ah(t, r) * e + sh(t);
    }
    function uq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ei(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > oq && ++s < aq);
      return a;
    }
    function cq(e, t, r, n) {
      for (var i = 0; i < nq; ++i) {
        var o = uh(t, r, n);
        if (o === 0) return t;
        var a = ei(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ch.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = sq ? new Float32Array(Wr) : new Array(Wr);
      if (t !== r || n !== i)
        for (var a = 0; a < Wr; ++a) o[a] = ei(a * Jn, t, n);
      function s(u) {
        for (var f = 0, E = 1, v = Wr - 1; E !== v && o[E] <= u; ++E) f += Jn;
        --E;
        var g = (u - o[E]) / (o[E + 1] - o[E]),
          y = f + g * Jn,
          w = uh(y, t, n);
        return w >= iq ? cq(u, y, t, n) : w === 0 ? y : uq(u, f, f + Jn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ei(s(f), r, i);
      };
    };
  });
  var Xr = {};
  De(Xr, {
    bounce: () => Xq,
    bouncePast: () => jq,
    ease: () => lq,
    easeIn: () => fq,
    easeInOut: () => pq,
    easeOut: () => dq,
    inBack: () => Mq,
    inCirc: () => Nq,
    inCubic: () => mq,
    inElastic: () => Gq,
    inExpo: () => Cq,
    inOutBack: () => kq,
    inOutCirc: () => qq,
    inOutCubic: () => Eq,
    inOutElastic: () => Uq,
    inOutExpo: () => Lq,
    inOutQuad: () => hq,
    inOutQuart: () => Tq,
    inOutQuint: () => Oq,
    inOutSine: () => Sq,
    inQuad: () => vq,
    inQuart: () => bq,
    inQuint: () => Iq,
    inSine: () => Aq,
    outBack: () => Dq,
    outBounce: () => Fq,
    outCirc: () => Pq,
    outCubic: () => yq,
    outElastic: () => Vq,
    outExpo: () => Rq,
    outQuad: () => gq,
    outQuart: () => _q,
    outQuint: () => wq,
    outSine: () => xq,
    swingFrom: () => Wq,
    swingFromTo: () => Bq,
    swingTo: () => Hq,
  });
  function vq(e) {
    return Math.pow(e, 2);
  }
  function gq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function hq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function mq(e) {
    return Math.pow(e, 3);
  }
  function yq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Eq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function bq(e) {
    return Math.pow(e, 4);
  }
  function _q(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Iq(e) {
    return Math.pow(e, 5);
  }
  function wq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Oq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Aq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function xq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Sq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Cq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Rq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Lq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Nq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Pq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function qq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Fq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Mq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Dq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function kq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Gq(e) {
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
  function Vq(e) {
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
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Uq(e) {
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
  function Bq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Wq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Hq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Xq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function jq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Hr,
    vt,
    lq,
    fq,
    dq,
    pq,
    Oa = he(() => {
      "use strict";
      (Hr = le(wa())),
        (vt = 1.70158),
        (lq = (0, Hr.default)(0.25, 0.1, 0.25, 1)),
        (fq = (0, Hr.default)(0.42, 0, 1, 1)),
        (dq = (0, Hr.default)(0, 0, 0.58, 1)),
        (pq = (0, Hr.default)(0.42, 0, 0.58, 1));
    });
  var fh = {};
  De(fh, {
    applyEasing: () => Kq,
    createBezierEasing: () => zq,
    optimizeFloat: () => jr,
  });
  function jr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function zq(e) {
    return (0, lh.default)(...e);
  }
  function Kq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : jr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Xr[e] ? Xr[e](t) : t);
  }
  var lh,
    Aa = he(() => {
      "use strict";
      Oa();
      lh = le(wa());
    });
  var vh = {};
  De(vh, {
    createElementState: () => ph,
    ixElements: () => uF,
    mergeActionState: () => xa,
  });
  function ph(e, t, r, n, i) {
    let o =
      r === Yq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ir.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function xa(e, t, r, n, i) {
    let o = lF(i);
    return (0, ir.mergeIn)(e, [t, sF, r], n, o);
  }
  function lF(e) {
    let { config: t } = e;
    return cF.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ir,
    uX,
    Yq,
    cX,
    $q,
    Qq,
    Zq,
    Jq,
    eF,
    tF,
    rF,
    nF,
    iF,
    oF,
    aF,
    dh,
    sF,
    uF,
    cF,
    gh = he(() => {
      "use strict";
      ir = le(Yt());
      Ve();
      ({
        HTML_ELEMENT: uX,
        PLAIN_OBJECT: Yq,
        ABSTRACT_NODE: cX,
        CONFIG_X_VALUE: $q,
        CONFIG_Y_VALUE: Qq,
        CONFIG_Z_VALUE: Zq,
        CONFIG_VALUE: Jq,
        CONFIG_X_UNIT: eF,
        CONFIG_Y_UNIT: tF,
        CONFIG_Z_UNIT: rF,
        CONFIG_UNIT: nF,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: iF,
          IX2_INSTANCE_ADDED: oF,
          IX2_ELEMENT_STATE_CHANGED: aF,
        } = Ie),
        (dh = {}),
        (sF = "refState"),
        (uF = (e = dh, t = {}) => {
          switch (t.type) {
            case iF:
              return dh;
            case oF: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ir.getIn)(u, [r, n]) !== n && (u = ph(u, n, a, r, o)),
                xa(u, r, s, i, o)
              );
            }
            case aF: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return xa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      cF = [
        [$q, eF],
        [Qq, tF],
        [Zq, rF],
        [Jq, nF],
      ];
    });
  var hh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var fF = (e) => e.value;
    Oe.getPluginConfig = fF;
    var dF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = dF;
    var pF = (e) => e || { value: 0 };
    Oe.getPluginOrigin = pF;
    var vF = (e) => ({ value: e.value });
    Oe.getPluginDestination = vF;
    var gF = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = gF;
    var hF = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = hF;
    var mF = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = mF;
  });
  var yh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var yF = (e) => document.querySelector(`[data-w-id="${e}"]`),
      EF = () => window.Webflow.require("spline"),
      bF = (e, t) => e.filter((r) => !t.includes(r)),
      _F = (e, t) => e.value[t];
    Ae.getPluginConfig = _F;
    var TF = () => null;
    Ae.getPluginDuration = TF;
    var mh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      IF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = bF(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = mh[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = mh[a]), o), {});
      };
    Ae.getPluginOrigin = IF;
    var wF = (e) => e.value;
    Ae.getPluginDestination = wF;
    var OF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? yF(n) : null;
    };
    Ae.createPluginInstance = OF;
    var AF = (e, t, r) => {
      let n = EF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = AF;
    var xF = () => null;
    Ae.clearPlugin = xF;
  });
  var Ca = c((Sa) => {
    "use strict";
    Object.defineProperty(Sa, "__esModule", { value: !0 });
    Sa.normalizeColor = SF;
    var Eh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function SF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Eh[o] == "string" ? Eh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let g = (1 - Math.abs(2 * v - 1)) * E,
          y = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          w = v - g / 2,
          I,
          S,
          O;
        f >= 0 && f < 60
          ? ((I = g), (S = y), (O = 0))
          : f >= 60 && f < 120
          ? ((I = y), (S = g), (O = 0))
          : f >= 120 && f < 180
          ? ((I = 0), (S = g), (O = y))
          : f >= 180 && f < 240
          ? ((I = 0), (S = y), (O = g))
          : f >= 240 && f < 300
          ? ((I = y), (S = 0), (O = g))
          : ((I = g), (S = 0), (O = y)),
          (t = Math.round((I + w) * 255)),
          (r = Math.round((S + w) * 255)),
          (n = Math.round((O + w) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * v - 1)) * E,
          y = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          w = v - g / 2,
          I,
          S,
          O;
        f >= 0 && f < 60
          ? ((I = g), (S = y), (O = 0))
          : f >= 60 && f < 120
          ? ((I = y), (S = g), (O = 0))
          : f >= 120 && f < 180
          ? ((I = 0), (S = g), (O = y))
          : f >= 180 && f < 240
          ? ((I = 0), (S = y), (O = g))
          : f >= 240 && f < 300
          ? ((I = y), (S = 0), (O = g))
          : ((I = g), (S = 0), (O = y)),
          (t = Math.round((I + w) * 255)),
          (r = Math.round((S + w) * 255)),
          (n = Math.round((O + w) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var bh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var CF = Ca(),
      RF = (e, t) => e.value[t];
    xe.getPluginConfig = RF;
    var LF = () => null;
    xe.getPluginDuration = LF;
    var NF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, CF.normalizeColor)(i);
    };
    xe.getPluginOrigin = NF;
    var PF = (e) => e.value;
    xe.getPluginDestination = PF;
    var qF = () => null;
    xe.createPluginInstance = qF;
    var FF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: E } = o,
        v;
      a != null && (v = a + i),
        s != null &&
          f != null &&
          u != null &&
          E != null &&
          (v = `rgba(${s}, ${u}, ${f}, ${E})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    xe.renderPlugin = FF;
    var MF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = MF;
  });
  var _h = c((ti) => {
    "use strict";
    var La = dn().default;
    Object.defineProperty(ti, "__esModule", { value: !0 });
    ti.pluginMethodMap = void 0;
    var Ra = (Ve(), rt(xf)),
      DF = La(hh()),
      kF = La(yh()),
      GF = La(bh()),
      vX = (ti.pluginMethodMap = new Map([
        [Ra.ActionTypeConsts.PLUGIN_LOTTIE, { ...DF }],
        [Ra.ActionTypeConsts.PLUGIN_SPLINE, { ...kF }],
        [Ra.ActionTypeConsts.PLUGIN_VARIABLE, { ...GF }],
      ]));
  });
  var Th = {};
  De(Th, {
    clearPlugin: () => Da,
    createPluginInstance: () => UF,
    getPluginConfig: () => Pa,
    getPluginDestination: () => Fa,
    getPluginDuration: () => VF,
    getPluginOrigin: () => qa,
    isPluginType: () => Mt,
    renderPlugin: () => Ma,
  });
  function Mt(e) {
    return Na.pluginMethodMap.has(e);
  }
  var Na,
    Dt,
    Pa,
    qa,
    VF,
    Fa,
    UF,
    Ma,
    Da,
    ka = he(() => {
      "use strict";
      Zn();
      Na = le(_h());
      (Dt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Na.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Pa = Dt("getPluginConfig")),
        (qa = Dt("getPluginOrigin")),
        (VF = Dt("getPluginDuration")),
        (Fa = Dt("getPluginDestination")),
        (UF = Dt("createPluginInstance")),
        (Ma = Dt("renderPlugin")),
        (Da = Dt("clearPlugin"));
    });
  var wh = c((mX, Ih) => {
    function BF(e, t) {
      return e == null || e !== e ? t : e;
    }
    Ih.exports = BF;
  });
  var Ah = c((yX, Oh) => {
    function WF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Oh.exports = WF;
  });
  var Sh = c((EX, xh) => {
    function HF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    xh.exports = HF;
  });
  var Rh = c((bX, Ch) => {
    var XF = Sh(),
      jF = XF();
    Ch.exports = jF;
  });
  var Ga = c((_X, Lh) => {
    var zF = Rh(),
      KF = Vr();
    function YF(e, t) {
      return e && zF(e, t, KF);
    }
    Lh.exports = YF;
  });
  var Ph = c((TX, Nh) => {
    var $F = qt();
    function QF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!$F(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Nh.exports = QF;
  });
  var Va = c((IX, qh) => {
    var ZF = Ga(),
      JF = Ph(),
      eM = JF(ZF);
    qh.exports = eM;
  });
  var Mh = c((wX, Fh) => {
    function tM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Fh.exports = tM;
  });
  var kh = c((OX, Dh) => {
    var rM = Ah(),
      nM = Va(),
      iM = wt(),
      oM = Mh(),
      aM = we();
    function sM(e, t, r) {
      var n = aM(e) ? rM : oM,
        i = arguments.length < 3;
      return n(e, iM(t, 4), r, i, nM);
    }
    Dh.exports = sM;
  });
  var Vh = c((AX, Gh) => {
    var uM = ba(),
      cM = wt(),
      lM = _a(),
      fM = Math.max,
      dM = Math.min;
    function pM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = lM(r)), (i = r < 0 ? fM(n + i, 0) : dM(i, n - 1))),
        uM(e, cM(t, 3), i, !0)
      );
    }
    Gh.exports = pM;
  });
  var Bh = c((xX, Uh) => {
    var vM = Ea(),
      gM = Vh(),
      hM = vM(gM);
    Uh.exports = hM;
  });
  function Wh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function mM(e, t) {
    if (Wh(e, t)) return !0;
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
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Wh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Ua,
    Hh = he(() => {
      "use strict";
      Ua = mM;
    });
  var um = {};
  De(um, {
    cleanupHTMLElement: () => v1,
    clearAllStyles: () => p1,
    clearObjectCache: () => qM,
    getActionListProgress: () => h1,
    getAffectedElements: () => ja,
    getComputedStyle: () => BM,
    getDestinationValues: () => YM,
    getElementId: () => kM,
    getInstanceId: () => MM,
    getInstanceOrigin: () => XM,
    getItemConfigByKey: () => KM,
    getMaxDurationItemIndex: () => sm,
    getNamespacedParameterId: () => E1,
    getRenderType: () => im,
    getStyleProp: () => $M,
    mediaQueriesEqual: () => _1,
    observeStore: () => UM,
    reduceListToGroup: () => m1,
    reifyState: () => GM,
    renderHTMLElement: () => QM,
    shallowEqual: () => Ua,
    shouldAllowMediaQuery: () => b1,
    shouldNamespaceEventParameter: () => y1,
    stringifyTarget: () => T1,
  });
  function qM() {
    ri.clear();
  }
  function MM() {
    return "i" + FM++;
  }
  function kM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + DM++;
  }
  function GM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ai.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function UM({ store: e, select: t, onChange: r, comparator: n = VM }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function zh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function ja({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (L, m) =>
          L.concat(
            ja({
              config: { target: m },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: E,
        matchSelector: v,
        elementContains: g,
        isSiblingNode: y,
      } = i,
      { target: w } = e;
    if (!w) return [];
    let {
      id: I,
      objectId: S,
      selector: O,
      selectorGuids: q,
      appliesTo: C,
      useEventTarget: M,
    } = zh(w);
    if (S) return [ri.has(S) ? ri.get(S) : ri.set(S, {}).get(S)];
    if (C === Xo.PAGE) {
      let L = a(I);
      return L ? [L] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[I || O] || {},
      X = !!(F.id || F.selector),
      K,
      Y,
      te,
      U = t && s(zh(t.target));
    if (
      (X
        ? ((K = F.limitAffectedElements), (Y = U), (te = s(F)))
        : (Y = te = s({ id: I, selector: O, selectorGuids: q })),
      t && M)
    ) {
      let L = r && (te || M === !0) ? [r] : u(U);
      if (te) {
        if (M === LM) return u(te).filter((m) => L.some((N) => g(m, N)));
        if (M === Xh) return u(te).filter((m) => L.some((N) => g(N, m)));
        if (M === jh) return u(te).filter((m) => L.some((N) => y(N, m)));
      }
      return L;
    }
    return Y == null || te == null
      ? []
      : Je && n
      ? u(te).filter((L) => n.contains(L))
      : K === Xh
      ? u(Y, te)
      : K === RM
      ? f(u(Y)).filter(v(te))
      : K === jh
      ? E(u(Y)).filter(v(te))
      : u(te);
  }
  function BM({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case cr:
      case lr:
      case fr:
      case dr:
      case ui:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function XM(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return qa(a)(t[a], n);
    switch (n.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r:
        return t[n.actionTypeId] || za[n.actionTypeId];
      case Qr:
        return WM(t[n.actionTypeId], n.config.filters);
      case Zr:
        return HM(t[n.actionTypeId], n.config.fontVariations);
      case tm:
        return { value: (0, gt.default)(parseFloat(o(e, ii)), 1) };
      case cr: {
        let s = o(e, ut),
          u = o(e, ct),
          f,
          E;
        return (
          n.config.widthUnit === At
            ? (f = Kh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (E = Kh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (E = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: E }
        );
      }
      case lr:
      case fr:
      case dr:
        return l1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ui:
        return { value: (0, gt.default)(o(e, oi), r.display) };
      case PM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function YM({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Fa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case cr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Je) return { widthValue: u, heightValue: f };
        if (a === At) {
          let E = n(e, ut);
          i(e, ut, ""), (u = o(e, "offsetWidth")), i(e, ut, E);
        }
        if (s === At) {
          let E = n(e, ct);
          i(e, ct, ""), (f = o(e, "offsetHeight")), i(e, ct, E);
        }
        return { widthValue: u, heightValue: f };
      }
      case lr:
      case fr:
      case dr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            E = (0, Qh.normalizeColor)(f);
          return {
            rValue: E.red,
            gValue: E.green,
            bValue: E.blue,
            aValue: E.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Qr:
        return t.config.filters.reduce(jM, {});
      case Zr:
        return t.config.fontVariations.reduce(zM, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function im(e) {
    if (/^TRANSFORM_/.test(e)) return Jh;
    if (/^STYLE_/.test(e)) return Ha;
    if (/^GENERAL_/.test(e)) return Wa;
    if (/^PLUGIN_/.test(e)) return em;
  }
  function $M(e, t) {
    return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function QM(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Jh:
        return r1(e, t, r, i, a);
      case Ha:
        return f1(e, t, r, i, o, a);
      case Wa:
        return d1(e, i, a);
      case em: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return Ma(f)(u, t, i);
      }
    }
  }
  function r1(e, t, r, n, i) {
    let o = t1
        .map((s) => {
          let u = za[s],
            {
              xValue: f = u.xValue,
              yValue: E = u.yValue,
              zValue: v = u.zValue,
              xUnit: g = "",
              yUnit: y = "",
              zUnit: w = "",
            } = t[s] || {};
          switch (s) {
            case ar:
              return `${bM}(${f}${g}, ${E}${y}, ${v}${w})`;
            case sr:
              return `${_M}(${f}${g}, ${E}${y}, ${v}${w})`;
            case ur:
              return `${TM}(${f}${g}) ${IM}(${E}${y}) ${wM}(${v}${w})`;
            case $r:
              return `${OM}(${f}${g}, ${E}${y})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    kt(e, Ot, i), a(e, Ot, o), o1(n, r) && a(e, Qn, AM);
  }
  function n1(e, t, r, n) {
    let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${e1(u, r)})`, ""),
      { setStyle: o } = n;
    kt(e, zr, n), o(e, zr, i);
  }
  function i1(e, t, r, n) {
    let i = (0, ai.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    kt(e, Kr, n), o(e, Kr, i);
  }
  function o1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === ar && n !== void 0) ||
      (e === sr && n !== void 0) ||
      (e === ur && (t !== void 0 || r !== void 0))
    );
  }
  function c1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function l1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Xa[t],
      o = n(e, i),
      a = s1.test(o) ? o : r[i],
      s = c1(u1, a).split(Yr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function f1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case cr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: E } = r;
        f !== void 0 && (s === At && (s = "px"), kt(e, ut, o), a(e, ut, f + s)),
          E !== void 0 &&
            (u === At && (u = "px"), kt(e, ct, o), a(e, ct, E + u));
        break;
      }
      case Qr: {
        n1(e, r, n.config, o);
        break;
      }
      case Zr: {
        i1(e, r, n.config, o);
        break;
      }
      case lr:
      case fr:
      case dr: {
        let s = Xa[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          E = Math.round(r.bValue),
          v = r.aValue;
        kt(e, s, o),
          a(e, s, v >= 1 ? `rgb(${u},${f},${E})` : `rgba(${u},${f},${E},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        kt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function d1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ui: {
        let { value: i } = t.config;
        i === xM && Je ? n(e, oi, Ia) : n(e, oi, i);
        return;
      }
    }
  }
  function kt(e, t, r) {
    if (!Je) return;
    let n = nm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    if (!a) {
      o(e, or, n);
      return;
    }
    let s = a.split(Yr).map(rm);
    s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr));
  }
  function om(e, t, r) {
    if (!Je) return;
    let n = nm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        or,
        a
          .split(Yr)
          .map(rm)
          .filter((s) => s !== n)
          .join(Yr)
      );
  }
  function p1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && Yh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Yh({ actionList: i[o], elementApi: t });
      });
  }
  function Yh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        $h({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            $h({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function $h({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => Da(o)(u, i))
        : (s = am({ effect: g1, actionTypeId: o, elementApi: r })),
        ja({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function v1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === cr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ut, ""), a.heightUnit === At && n(e, ct, "");
    }
    i(e, or) && am({ effect: om, actionTypeId: o, elementApi: r })(e);
  }
  function g1(e, t, r) {
    let { setStyle: n } = r;
    om(e, t, r), n(e, t, ""), t === Ot && n(e, Qn, "");
  }
  function sm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function h1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: E } = u,
          v = E[sm(E)],
          { config: g, actionTypeId: y } = v;
        i.id === v.id && (s = a + o);
        let w = im(y) === Wa ? 0 : g.duration;
        a += g.delay + w;
      }),
      a > 0 ? jr(s / a) : 0
    );
  }
  function m1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, si.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, si.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function y1(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function E1(e, t) {
    return e + NM + t;
  }
  function b1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function _1(e, t) {
    return Ua(e && e.sort(), t && t.sort());
  }
  function T1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ba + r + Ba + n;
  }
  var gt,
    ai,
    ni,
    si,
    Qh,
    yM,
    EM,
    bM,
    _M,
    TM,
    IM,
    wM,
    OM,
    AM,
    xM,
    ii,
    zr,
    Kr,
    ut,
    ct,
    Zh,
    SM,
    CM,
    Xh,
    RM,
    jh,
    LM,
    oi,
    or,
    At,
    Yr,
    NM,
    Ba,
    Jh,
    Wa,
    Ha,
    em,
    ar,
    sr,
    ur,
    $r,
    tm,
    Qr,
    Zr,
    cr,
    lr,
    fr,
    dr,
    ui,
    PM,
    rm,
    Xa,
    nm,
    ri,
    FM,
    DM,
    VM,
    Kh,
    WM,
    HM,
    jM,
    zM,
    KM,
    za,
    ZM,
    JM,
    e1,
    t1,
    a1,
    s1,
    u1,
    am,
    cm = he(() => {
      "use strict";
      (gt = le(wh())), (ai = le(kh())), (ni = le(Bh())), (si = le(Yt()));
      Ve();
      Hh();
      Aa();
      Qh = le(Ca());
      ka();
      Zn();
      ({
        BACKGROUND: yM,
        TRANSFORM: EM,
        TRANSLATE_3D: bM,
        SCALE_3D: _M,
        ROTATE_X: TM,
        ROTATE_Y: IM,
        ROTATE_Z: wM,
        SKEW: OM,
        PRESERVE_3D: AM,
        FLEX: xM,
        OPACITY: ii,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Kr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: Zh,
        BORDER_COLOR: SM,
        COLOR: CM,
        CHILDREN: Xh,
        IMMEDIATE_CHILDREN: RM,
        SIBLINGS: jh,
        PARENT: LM,
        DISPLAY: oi,
        WILL_CHANGE: or,
        AUTO: At,
        COMMA_DELIMITER: Yr,
        COLON_DELIMITER: NM,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: Jh,
        RENDER_GENERAL: Wa,
        RENDER_STYLE: Ha,
        RENDER_PLUGIN: em,
      } = Ce),
        ({
          TRANSFORM_MOVE: ar,
          TRANSFORM_SCALE: sr,
          TRANSFORM_ROTATE: ur,
          TRANSFORM_SKEW: $r,
          STYLE_OPACITY: tm,
          STYLE_FILTER: Qr,
          STYLE_FONT_VARIATION: Zr,
          STYLE_SIZE: cr,
          STYLE_BACKGROUND_COLOR: lr,
          STYLE_BORDER: fr,
          STYLE_TEXT_COLOR: dr,
          GENERAL_DISPLAY: ui,
          OBJECT_VALUE: PM,
        } = Ge),
        (rm = (e) => e.trim()),
        (Xa = Object.freeze({ [lr]: Zh, [fr]: SM, [dr]: CM })),
        (nm = Object.freeze({
          [Ot]: EM,
          [Zh]: yM,
          [ii]: ii,
          [zr]: zr,
          [ut]: ut,
          [ct]: ct,
          [Kr]: Kr,
        })),
        (ri = new Map());
      FM = 1;
      DM = 1;
      VM = (e, t) => e === t;
      (Kh = /px/),
        (WM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = ZM[n.type]), r),
            e || {}
          )),
        (HM = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = JM[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (jM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (zM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (KM = (e, t, r) => {
          if (Mt(e)) return Pa(e)(r, t);
          switch (e) {
            case Qr: {
              let n = (0, ni.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Zr: {
              let n = (0, ni.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (za = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [$r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (ZM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (JM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (e1 = (e, t) => {
          let r = (0, ni.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (t1 = Object.keys(za));
      (a1 = "\\(([^)]+)\\)"), (s1 = /^rgb/), (u1 = RegExp(`rgba?${a1}`));
      am =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
              e(n, Ot, r);
              break;
            case Qr:
              e(n, zr, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case tm:
              e(n, ii, r);
              break;
            case cr:
              e(n, ut, r), e(n, ct, r);
              break;
            case lr:
            case fr:
            case dr:
              e(n, Xa[t], r);
              break;
            case ui:
              e(n, oi, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var pr = dn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var I1 = pr((Zn(), rt(ih)));
    Pe.IX2BrowserSupport = I1;
    var w1 = pr((Oa(), rt(Xr)));
    Pe.IX2Easings = w1;
    var O1 = pr((Aa(), rt(fh)));
    Pe.IX2EasingUtils = O1;
    var A1 = pr((gh(), rt(vh)));
    Pe.IX2ElementsReducer = A1;
    var x1 = pr((ka(), rt(Th)));
    Pe.IX2VanillaPlugins = x1;
    var S1 = pr((cm(), rt(um)));
    Pe.IX2VanillaUtils = S1;
  });
  var li,
    ht,
    C1,
    R1,
    L1,
    N1,
    P1,
    q1,
    ci,
    lm,
    F1,
    M1,
    Ka,
    D1,
    k1,
    G1,
    V1,
    fm,
    dm = he(() => {
      "use strict";
      Ve();
      (li = le(Gt())),
        (ht = le(Yt())),
        ({
          IX2_RAW_DATA_IMPORTED: C1,
          IX2_SESSION_STOPPED: R1,
          IX2_INSTANCE_ADDED: L1,
          IX2_INSTANCE_STARTED: N1,
          IX2_INSTANCE_REMOVED: P1,
          IX2_ANIMATION_FRAME_CHANGED: q1,
        } = Ie),
        ({
          optimizeFloat: ci,
          applyEasing: lm,
          createBezierEasing: F1,
        } = li.IX2EasingUtils),
        ({ RENDER_GENERAL: M1 } = Ce),
        ({
          getItemConfigByKey: Ka,
          getRenderType: D1,
          getStyleProp: k1,
        } = li.IX2VanillaUtils),
        (G1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: E,
              skipToValue: v,
            } = e,
            { parameters: g } = t.payload,
            y = Math.max(1 - a, 0.01),
            w = g[n];
          w == null && ((y = 1), (w = s));
          let I = Math.max(w, 0) || 0,
            S = ci(I - r),
            O = E ? v : ci(r + S * y),
            q = O * 100;
          if (O === r && e.current) return e;
          let C, M, D, F;
          for (let K = 0, { length: Y } = i; K < Y; K++) {
            let { keyframe: te, actionItems: U } = i[K];
            if ((K === 0 && (C = U[0]), q >= te)) {
              C = U[0];
              let L = i[K + 1],
                m = L && q !== te;
              (M = m ? L.actionItems[0] : null),
                m && ((D = te / 100), (F = (L.keyframe - te) / 100));
            }
          }
          let X = {};
          if (C && !M)
            for (let K = 0, { length: Y } = o; K < Y; K++) {
              let te = o[K];
              X[te] = Ka(u, te, C.config);
            }
          else if (C && M && D !== void 0 && F !== void 0) {
            let K = (O - D) / F,
              Y = C.config.easing,
              te = lm(Y, K, f);
            for (let U = 0, { length: L } = o; U < L; U++) {
              let m = o[U],
                N = Ka(u, m, C.config),
                Z = (Ka(u, m, M.config) - N) * te + N;
              X[m] = Z;
            }
          }
          return (0, ht.merge)(e, { position: O, current: X });
        }),
        (V1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: E,
              pluginDuration: v,
              instanceDelay: g,
              customEasingFn: y,
              skipMotion: w,
            } = e,
            I = u.config.easing,
            { duration: S, delay: O } = u.config;
          v != null && (S = v),
            (O = g ?? O),
            a === M1 ? (S = 0) : (o || w) && (S = O = 0);
          let { now: q } = t.payload;
          if (r && n) {
            let C = q - (i + O);
            if (s) {
              let K = q - i,
                Y = S + O,
                te = ci(Math.min(Math.max(0, K / Y), 1));
              e = (0, ht.set)(e, "verboseTimeElapsed", Y * te);
            }
            if (C < 0) return e;
            let M = ci(Math.min(Math.max(0, C / S), 1)),
              D = lm(I, M, y),
              F = {},
              X = null;
            return (
              E.length &&
                (X = E.reduce((K, Y) => {
                  let te = f[Y],
                    U = parseFloat(n[Y]) || 0,
                    m = (parseFloat(te) - U) * D + U;
                  return (K[Y] = m), K;
                }, {})),
              (F.current = X),
              (F.position = M),
              M === 1 && ((F.active = !1), (F.complete = !0)),
              (0, ht.merge)(e, F)
            );
          }
          return e;
        }),
        (fm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case C1:
              return t.payload.ixInstances || Object.freeze({});
            case R1:
              return Object.freeze({});
            case L1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: E,
                  origin: v,
                  destination: g,
                  immediate: y,
                  verbose: w,
                  continuous: I,
                  parameterId: S,
                  actionGroups: O,
                  smoothing: q,
                  restingValue: C,
                  pluginInstance: M,
                  pluginDuration: D,
                  instanceDelay: F,
                  skipMotion: X,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: Y } = i,
                te = D1(Y),
                U = k1(te, Y),
                L = Object.keys(g).filter(
                  (N) => g[N] != null && typeof g[N] != "string"
                ),
                { easing: m } = i.config;
              return (0, ht.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: g,
                destinationKeys: L,
                immediate: y,
                verbose: w,
                current: null,
                actionItem: i,
                actionTypeId: Y,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: te,
                isCarrier: E,
                styleProp: U,
                continuous: I,
                parameterId: S,
                actionGroups: O,
                smoothing: q,
                restingValue: C,
                pluginInstance: M,
                pluginDuration: D,
                instanceDelay: F,
                skipMotion: X,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(m) && m.length === 4 ? F1(m) : void 0,
              });
            }
            case N1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ht.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case P1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case q1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? G1 : V1;
                r = (0, ht.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var U1,
    B1,
    W1,
    pm,
    vm = he(() => {
      "use strict";
      Ve();
      ({
        IX2_RAW_DATA_IMPORTED: U1,
        IX2_SESSION_STOPPED: B1,
        IX2_PARAMETER_CHANGED: W1,
      } = Ie),
        (pm = (e = {}, t) => {
          switch (t.type) {
            case U1:
              return t.payload.ixParameters || {};
            case B1:
              return {};
            case W1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var mm = {};
  De(mm, { default: () => X1 });
  var gm,
    hm,
    H1,
    X1,
    ym = he(() => {
      "use strict";
      gm = le(Ho());
      Cf();
      $f();
      Jf();
      hm = le(Gt());
      dm();
      vm();
      ({ ixElements: H1 } = hm.IX2ElementsReducer),
        (X1 = (0, gm.combineReducers)({
          ixData: Sf,
          ixRequest: Yf,
          ixSession: Zf,
          ixElements: H1,
          ixInstances: fm,
          ixParameters: pm,
        }));
    });
  var bm = c((HX, Em) => {
    var j1 = Tt(),
      z1 = we(),
      K1 = pt(),
      Y1 = "[object String]";
    function $1(e) {
      return typeof e == "string" || (!z1(e) && K1(e) && j1(e) == Y1);
    }
    Em.exports = $1;
  });
  var Tm = c((XX, _m) => {
    var Q1 = ya(),
      Z1 = Q1("length");
    _m.exports = Z1;
  });
  var wm = c((jX, Im) => {
    var J1 = "\\ud800-\\udfff",
      eD = "\\u0300-\\u036f",
      tD = "\\ufe20-\\ufe2f",
      rD = "\\u20d0-\\u20ff",
      nD = eD + tD + rD,
      iD = "\\ufe0e\\ufe0f",
      oD = "\\u200d",
      aD = RegExp("[" + oD + J1 + nD + iD + "]");
    function sD(e) {
      return aD.test(e);
    }
    Im.exports = sD;
  });
  var Pm = c((zX, Nm) => {
    var Am = "\\ud800-\\udfff",
      uD = "\\u0300-\\u036f",
      cD = "\\ufe20-\\ufe2f",
      lD = "\\u20d0-\\u20ff",
      fD = uD + cD + lD,
      dD = "\\ufe0e\\ufe0f",
      pD = "[" + Am + "]",
      Ya = "[" + fD + "]",
      $a = "\\ud83c[\\udffb-\\udfff]",
      vD = "(?:" + Ya + "|" + $a + ")",
      xm = "[^" + Am + "]",
      Sm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Cm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      gD = "\\u200d",
      Rm = vD + "?",
      Lm = "[" + dD + "]?",
      hD = "(?:" + gD + "(?:" + [xm, Sm, Cm].join("|") + ")" + Lm + Rm + ")*",
      mD = Lm + Rm + hD,
      yD = "(?:" + [xm + Ya + "?", Ya, Sm, Cm, pD].join("|") + ")",
      Om = RegExp($a + "(?=" + $a + ")|" + yD + mD, "g");
    function ED(e) {
      for (var t = (Om.lastIndex = 0); Om.test(e); ) ++t;
      return t;
    }
    Nm.exports = ED;
  });
  var Fm = c((KX, qm) => {
    var bD = Tm(),
      _D = wm(),
      TD = Pm();
    function ID(e) {
      return _D(e) ? TD(e) : bD(e);
    }
    qm.exports = ID;
  });
  var Dm = c((YX, Mm) => {
    var wD = Bn(),
      OD = Wn(),
      AD = qt(),
      xD = bm(),
      SD = Fm(),
      CD = "[object Map]",
      RD = "[object Set]";
    function LD(e) {
      if (e == null) return 0;
      if (AD(e)) return xD(e) ? SD(e) : e.length;
      var t = OD(e);
      return t == CD || t == RD ? e.size : wD(e).length;
    }
    Mm.exports = LD;
  });
  var Gm = c(($X, km) => {
    var ND = "Expected a function";
    function PD(e) {
      if (typeof e != "function") throw new TypeError(ND);
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
    km.exports = PD;
  });
  var Qa = c((QX, Vm) => {
    var qD = It(),
      FD = (function () {
        try {
          var e = qD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Vm.exports = FD;
  });
  var Za = c((ZX, Bm) => {
    var Um = Qa();
    function MD(e, t, r) {
      t == "__proto__" && Um
        ? Um(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Bm.exports = MD;
  });
  var Hm = c((JX, Wm) => {
    var DD = Za(),
      kD = Nn(),
      GD = Object.prototype,
      VD = GD.hasOwnProperty;
    function UD(e, t, r) {
      var n = e[t];
      (!(VD.call(e, t) && kD(n, r)) || (r === void 0 && !(t in e))) &&
        DD(e, t, r);
    }
    Wm.exports = UD;
  });
  var zm = c((ej, jm) => {
    var BD = Hm(),
      WD = Br(),
      HD = kn(),
      Xm = st(),
      XD = nr();
    function jD(e, t, r, n) {
      if (!Xm(e)) return e;
      t = WD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = XD(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var E = s[u];
          (f = n ? n(E, u, s) : void 0),
            f === void 0 && (f = Xm(E) ? E : HD(t[i + 1]) ? [] : {});
        }
        BD(s, u, f), (s = s[u]);
      }
      return e;
    }
    jm.exports = jD;
  });
  var Ym = c((tj, Km) => {
    var zD = jn(),
      KD = zm(),
      YD = Br();
    function $D(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = zD(e, a);
        r(s, a) && KD(o, YD(a, e), s);
      }
      return o;
    }
    Km.exports = $D;
  });
  var Qm = c((rj, $m) => {
    var QD = Mn(),
      ZD = Lo(),
      JD = na(),
      e2 = ra(),
      t2 = Object.getOwnPropertySymbols,
      r2 = t2
        ? function (e) {
            for (var t = []; e; ) QD(t, JD(e)), (e = ZD(e));
            return t;
          }
        : e2;
    $m.exports = r2;
  });
  var Jm = c((nj, Zm) => {
    function n2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Zm.exports = n2;
  });
  var ty = c((ij, ey) => {
    var i2 = st(),
      o2 = Un(),
      a2 = Jm(),
      s2 = Object.prototype,
      u2 = s2.hasOwnProperty;
    function c2(e) {
      if (!i2(e)) return a2(e);
      var t = o2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !u2.call(e, n))) || r.push(n);
      return r;
    }
    ey.exports = c2;
  });
  var ny = c((oj, ry) => {
    var l2 = oa(),
      f2 = ty(),
      d2 = qt();
    function p2(e) {
      return d2(e) ? l2(e, !0) : f2(e);
    }
    ry.exports = p2;
  });
  var oy = c((aj, iy) => {
    var v2 = ta(),
      g2 = Qm(),
      h2 = ny();
    function m2(e) {
      return v2(e, h2, g2);
    }
    iy.exports = m2;
  });
  var sy = c((sj, ay) => {
    var y2 = ma(),
      E2 = wt(),
      b2 = Ym(),
      _2 = oy();
    function T2(e, t) {
      if (e == null) return {};
      var r = y2(_2(e), function (n) {
        return [n];
      });
      return (
        (t = E2(t)),
        b2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ay.exports = T2;
  });
  var cy = c((uj, uy) => {
    var I2 = wt(),
      w2 = Gm(),
      O2 = sy();
    function A2(e, t) {
      return O2(e, w2(I2(t)));
    }
    uy.exports = A2;
  });
  var fy = c((cj, ly) => {
    var x2 = Bn(),
      S2 = Wn(),
      C2 = Mr(),
      R2 = we(),
      L2 = qt(),
      N2 = Dn(),
      P2 = Un(),
      q2 = Vn(),
      F2 = "[object Map]",
      M2 = "[object Set]",
      D2 = Object.prototype,
      k2 = D2.hasOwnProperty;
    function G2(e) {
      if (e == null) return !0;
      if (
        L2(e) &&
        (R2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          N2(e) ||
          q2(e) ||
          C2(e))
      )
        return !e.length;
      var t = S2(e);
      if (t == F2 || t == M2) return !e.size;
      if (P2(e)) return !x2(e).length;
      for (var r in e) if (k2.call(e, r)) return !1;
      return !0;
    }
    ly.exports = G2;
  });
  var py = c((lj, dy) => {
    var V2 = Za(),
      U2 = Ga(),
      B2 = wt();
    function W2(e, t) {
      var r = {};
      return (
        (t = B2(t, 3)),
        U2(e, function (n, i, o) {
          V2(r, i, t(n, i, o));
        }),
        r
      );
    }
    dy.exports = W2;
  });
  var gy = c((fj, vy) => {
    function H2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vy.exports = H2;
  });
  var my = c((dj, hy) => {
    var X2 = Kn();
    function j2(e) {
      return typeof e == "function" ? e : X2;
    }
    hy.exports = j2;
  });
  var Ey = c((pj, yy) => {
    var z2 = gy(),
      K2 = Va(),
      Y2 = my(),
      $2 = we();
    function Q2(e, t) {
      var r = $2(e) ? z2 : K2;
      return r(e, Y2(t));
    }
    yy.exports = Q2;
  });
  var _y = c((vj, by) => {
    var Z2 = Qe(),
      J2 = function () {
        return Z2.Date.now();
      };
    by.exports = J2;
  });
  var wy = c((gj, Iy) => {
    var ek = st(),
      Ja = _y(),
      Ty = Yn(),
      tk = "Expected a function",
      rk = Math.max,
      nk = Math.min;
    function ik(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        E = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(tk);
      (t = Ty(t) || 0),
        ek(r) &&
          ((E = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? rk(Ty(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function y(F) {
        var X = n,
          K = i;
        return (n = i = void 0), (f = F), (a = e.apply(K, X)), a;
      }
      function w(F) {
        return (f = F), (s = setTimeout(O, t)), E ? y(F) : a;
      }
      function I(F) {
        var X = F - u,
          K = F - f,
          Y = t - X;
        return v ? nk(Y, o - K) : Y;
      }
      function S(F) {
        var X = F - u,
          K = F - f;
        return u === void 0 || X >= t || X < 0 || (v && K >= o);
      }
      function O() {
        var F = Ja();
        if (S(F)) return q(F);
        s = setTimeout(O, I(F));
      }
      function q(F) {
        return (s = void 0), g && n ? y(F) : ((n = i = void 0), a);
      }
      function C() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : q(Ja());
      }
      function D() {
        var F = Ja(),
          X = S(F);
        if (((n = arguments), (i = this), (u = F), X)) {
          if (s === void 0) return w(u);
          if (v) return clearTimeout(s), (s = setTimeout(O, t)), y(u);
        }
        return s === void 0 && (s = setTimeout(O, t)), a;
      }
      return (D.cancel = C), (D.flush = M), D;
    }
    Iy.exports = ik;
  });
  var Ay = c((hj, Oy) => {
    var ok = wy(),
      ak = st(),
      sk = "Expected a function";
    function uk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(sk);
      return (
        ak(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        ok(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Oy.exports = uk;
  });
  var Sy = {};
  De(Sy, {
    actionListPlaybackChanged: () => gr,
    animationFrameChanged: () => di,
    clearRequested: () => Pk,
    elementStateChanged: () => ss,
    eventListenerAdded: () => fi,
    eventStateChanged: () => is,
    instanceAdded: () => os,
    instanceRemoved: () => as,
    instanceStarted: () => pi,
    mediaQueriesDefined: () => cs,
    parameterChanged: () => vr,
    playbackRequested: () => Lk,
    previewRequested: () => Rk,
    rawDataImported: () => es,
    sessionInitialized: () => ts,
    sessionStarted: () => rs,
    sessionStopped: () => ns,
    stopRequested: () => Nk,
    testFrameRendered: () => qk,
    viewportWidthChanged: () => us,
  });
  var xy,
    ck,
    lk,
    fk,
    dk,
    pk,
    vk,
    gk,
    hk,
    mk,
    yk,
    Ek,
    bk,
    _k,
    Tk,
    Ik,
    wk,
    Ok,
    Ak,
    xk,
    Sk,
    Ck,
    es,
    ts,
    rs,
    ns,
    Rk,
    Lk,
    Nk,
    Pk,
    fi,
    qk,
    is,
    di,
    vr,
    os,
    pi,
    as,
    ss,
    gr,
    us,
    cs,
    vi = he(() => {
      "use strict";
      Ve();
      (xy = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: ck,
          IX2_SESSION_INITIALIZED: lk,
          IX2_SESSION_STARTED: fk,
          IX2_SESSION_STOPPED: dk,
          IX2_PREVIEW_REQUESTED: pk,
          IX2_PLAYBACK_REQUESTED: vk,
          IX2_STOP_REQUESTED: gk,
          IX2_CLEAR_REQUESTED: hk,
          IX2_EVENT_LISTENER_ADDED: mk,
          IX2_TEST_FRAME_RENDERED: yk,
          IX2_EVENT_STATE_CHANGED: Ek,
          IX2_ANIMATION_FRAME_CHANGED: bk,
          IX2_PARAMETER_CHANGED: _k,
          IX2_INSTANCE_ADDED: Tk,
          IX2_INSTANCE_STARTED: Ik,
          IX2_INSTANCE_REMOVED: wk,
          IX2_ELEMENT_STATE_CHANGED: Ok,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Ak,
          IX2_VIEWPORT_WIDTH_CHANGED: xk,
          IX2_MEDIA_QUERIES_DEFINED: Sk,
        } = Ie),
        ({ reifyState: Ck } = xy.IX2VanillaUtils),
        (es = (e) => ({ type: ck, payload: { ...Ck(e) } })),
        (ts = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: lk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (rs = () => ({ type: fk })),
        (ns = () => ({ type: dk })),
        (Rk = ({ rawData: e, defer: t }) => ({
          type: pk,
          payload: { defer: t, rawData: e },
        })),
        (Lk = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: vk,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (Nk = (e) => ({ type: gk, payload: { actionListId: e } })),
        (Pk = () => ({ type: hk })),
        (fi = (e, t) => ({
          type: mk,
          payload: { target: e, listenerParams: t },
        })),
        (qk = (e = 1) => ({ type: yk, payload: { step: e } })),
        (is = (e, t) => ({ type: Ek, payload: { stateKey: e, newState: t } })),
        (di = (e, t) => ({ type: bk, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: _k, payload: { key: e, value: t } })),
        (os = (e) => ({ type: Tk, payload: { ...e } })),
        (pi = (e, t) => ({ type: Ik, payload: { instanceId: e, time: t } })),
        (as = (e) => ({ type: wk, payload: { instanceId: e } })),
        (ss = (e, t, r, n) => ({
          type: Ok,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (gr = ({ actionListId: e, isPlaying: t }) => ({
          type: Ak,
          payload: { actionListId: e, isPlaying: t },
        })),
        (us = ({ width: e, mediaQueries: t }) => ({
          type: xk,
          payload: { width: e, mediaQueries: t },
        })),
        (cs = () => ({ type: Sk }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => ds,
    getChildElements: () => Hk,
    getClosestElement: () => Jr,
    getProperty: () => Gk,
    getQuerySelector: () => fs,
    getRefType: () => ps,
    getSiblingElements: () => Xk,
    getStyle: () => kk,
    getValidDocument: () => Uk,
    isSiblingNode: () => Wk,
    matchSelector: () => Vk,
    queryDocument: () => Bk,
    setStyle: () => Dk,
  });
  function Dk(e, t, r) {
    e.style[t] = r;
  }
  function kk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Gk(e, t) {
    return e[t];
  }
  function Vk(e) {
    return (t) => t[ls](e);
  }
  function fs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Cy) !== -1) {
        let n = e.split(Cy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ly)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function Uk(e) {
    return e == null || e === document.documentElement.getAttribute(Ly)
      ? document
      : null;
  }
  function Bk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ds(e, t) {
    return e.contains(t);
  }
  function Wk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function Hk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function Xk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ps(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Fk
        : Mk
      : null;
  }
  var Ry,
    ls,
    Cy,
    Fk,
    Mk,
    Ly,
    Jr,
    Ny = he(() => {
      "use strict";
      Ry = le(Gt());
      Ve();
      ({ ELEMENT_MATCHES: ls } = Ry.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Cy,
          HTML_ELEMENT: Fk,
          PLAIN_OBJECT: Mk,
          WF_PAGE: Ly,
        } = Ce);
      Jr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ls] && r[ls](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var vs = c((Ej, qy) => {
    var jk = st(),
      Py = Object.create,
      zk = (function () {
        function e() {}
        return function (t) {
          if (!jk(t)) return {};
          if (Py) return Py(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    qy.exports = zk;
  });
  var gi = c((bj, Fy) => {
    function Kk() {}
    Fy.exports = Kk;
  });
  var mi = c((_j, My) => {
    var Yk = vs(),
      $k = gi();
    function hi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    hi.prototype = Yk($k.prototype);
    hi.prototype.constructor = hi;
    My.exports = hi;
  });
  var Vy = c((Tj, Gy) => {
    var Dy = jt(),
      Qk = Mr(),
      Zk = we(),
      ky = Dy ? Dy.isConcatSpreadable : void 0;
    function Jk(e) {
      return Zk(e) || Qk(e) || !!(ky && e && e[ky]);
    }
    Gy.exports = Jk;
  });
  var Wy = c((Ij, By) => {
    var eG = Mn(),
      tG = Vy();
    function Uy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = tG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Uy(s, t - 1, r, n, i)
            : eG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    By.exports = Uy;
  });
  var Xy = c((wj, Hy) => {
    var rG = Wy();
    function nG(e) {
      var t = e == null ? 0 : e.length;
      return t ? rG(e, 1) : [];
    }
    Hy.exports = nG;
  });
  var zy = c((Oj, jy) => {
    function iG(e, t, r) {
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
    jy.exports = iG;
  });
  var $y = c((Aj, Yy) => {
    var oG = zy(),
      Ky = Math.max;
    function aG(e, t, r) {
      return (
        (t = Ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), oG(e, this, s);
        }
      );
    }
    Yy.exports = aG;
  });
  var Zy = c((xj, Qy) => {
    function sG(e) {
      return function () {
        return e;
      };
    }
    Qy.exports = sG;
  });
  var tE = c((Sj, eE) => {
    var uG = Zy(),
      Jy = Qa(),
      cG = Kn(),
      lG = Jy
        ? function (e, t) {
            return Jy(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: uG(t),
              writable: !0,
            });
          }
        : cG;
    eE.exports = lG;
  });
  var nE = c((Cj, rE) => {
    var fG = 800,
      dG = 16,
      pG = Date.now;
    function vG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = pG(),
          i = dG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= fG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    rE.exports = vG;
  });
  var oE = c((Rj, iE) => {
    var gG = tE(),
      hG = nE(),
      mG = hG(gG);
    iE.exports = mG;
  });
  var sE = c((Lj, aE) => {
    var yG = Xy(),
      EG = $y(),
      bG = oE();
    function _G(e) {
      return bG(EG(e, void 0, yG), e + "");
    }
    aE.exports = _G;
  });
  var lE = c((Nj, cE) => {
    var uE = aa(),
      TG = uE && new uE();
    cE.exports = TG;
  });
  var dE = c((Pj, fE) => {
    function IG() {}
    fE.exports = IG;
  });
  var gs = c((qj, vE) => {
    var pE = lE(),
      wG = dE(),
      OG = pE
        ? function (e) {
            return pE.get(e);
          }
        : wG;
    vE.exports = OG;
  });
  var hE = c((Fj, gE) => {
    var AG = {};
    gE.exports = AG;
  });
  var hs = c((Mj, yE) => {
    var mE = hE(),
      xG = Object.prototype,
      SG = xG.hasOwnProperty;
    function CG(e) {
      for (
        var t = e.name + "", r = mE[t], n = SG.call(mE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    yE.exports = CG;
  });
  var Ei = c((Dj, EE) => {
    var RG = vs(),
      LG = gi(),
      NG = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = NG),
        (this.__views__ = []);
    }
    yi.prototype = RG(LG.prototype);
    yi.prototype.constructor = yi;
    EE.exports = yi;
  });
  var _E = c((kj, bE) => {
    function PG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    bE.exports = PG;
  });
  var IE = c((Gj, TE) => {
    var qG = Ei(),
      FG = mi(),
      MG = _E();
    function DG(e) {
      if (e instanceof qG) return e.clone();
      var t = new FG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = MG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    TE.exports = DG;
  });
  var AE = c((Vj, OE) => {
    var kG = Ei(),
      wE = mi(),
      GG = gi(),
      VG = we(),
      UG = pt(),
      BG = IE(),
      WG = Object.prototype,
      HG = WG.hasOwnProperty;
    function bi(e) {
      if (UG(e) && !VG(e) && !(e instanceof kG)) {
        if (e instanceof wE) return e;
        if (HG.call(e, "__wrapped__")) return BG(e);
      }
      return new wE(e);
    }
    bi.prototype = GG.prototype;
    bi.prototype.constructor = bi;
    OE.exports = bi;
  });
  var SE = c((Uj, xE) => {
    var XG = Ei(),
      jG = gs(),
      zG = hs(),
      KG = AE();
    function YG(e) {
      var t = zG(e),
        r = KG[t];
      if (typeof r != "function" || !(t in XG.prototype)) return !1;
      if (e === r) return !0;
      var n = jG(r);
      return !!n && e === n[0];
    }
    xE.exports = YG;
  });
  var NE = c((Bj, LE) => {
    var CE = mi(),
      $G = sE(),
      QG = gs(),
      ms = hs(),
      ZG = we(),
      RE = SE(),
      JG = "Expected a function",
      eV = 8,
      tV = 32,
      rV = 128,
      nV = 256;
    function iV(e) {
      return $G(function (t) {
        var r = t.length,
          n = r,
          i = CE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(JG);
          if (i && !a && ms(o) == "wrapper") var a = new CE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ms(o),
            u = s == "wrapper" ? QG(o) : void 0;
          u &&
          RE(u[0]) &&
          u[1] == (rV | eV | tV | nV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ms(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && RE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            E = f[0];
          if (a && f.length == 1 && ZG(E)) return a.plant(E).value();
          for (var v = 0, g = r ? t[v].apply(this, f) : E; ++v < r; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    LE.exports = iV;
  });
  var qE = c((Wj, PE) => {
    var oV = NE(),
      aV = oV();
    PE.exports = aV;
  });
  var ME = c((Hj, FE) => {
    function sV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    FE.exports = sV;
  });
  var kE = c((Xj, DE) => {
    var uV = ME(),
      ys = Yn();
    function cV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ys(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ys(t)), (t = t === t ? t : 0)),
        uV(ys(e), t, r)
      );
    }
    DE.exports = cV;
  });
  var zE,
    KE,
    YE,
    $E,
    lV,
    fV,
    dV,
    pV,
    vV,
    gV,
    hV,
    mV,
    yV,
    EV,
    bV,
    _V,
    TV,
    IV,
    wV,
    QE,
    ZE,
    OV,
    AV,
    xV,
    JE,
    SV,
    CV,
    eb,
    RV,
    Es,
    tb,
    GE,
    VE,
    rb,
    tn,
    LV,
    lt,
    nb,
    NV,
    Be,
    et,
    rn,
    ib,
    bs,
    UE,
    _s,
    PV,
    en,
    qV,
    FV,
    MV,
    ob,
    BE,
    DV,
    WE,
    kV,
    GV,
    VV,
    HE,
    _i,
    Ti,
    XE,
    jE,
    ab,
    sb = he(() => {
      "use strict";
      (zE = le(qE())), (KE = le(zn())), (YE = le(kE()));
      Ve();
      Ts();
      vi();
      ($E = le(Gt())),
        ({
          MOUSE_CLICK: lV,
          MOUSE_SECOND_CLICK: fV,
          MOUSE_DOWN: dV,
          MOUSE_UP: pV,
          MOUSE_OVER: vV,
          MOUSE_OUT: gV,
          DROPDOWN_CLOSE: hV,
          DROPDOWN_OPEN: mV,
          SLIDER_ACTIVE: yV,
          SLIDER_INACTIVE: EV,
          TAB_ACTIVE: bV,
          TAB_INACTIVE: _V,
          NAVBAR_CLOSE: TV,
          NAVBAR_OPEN: IV,
          MOUSE_MOVE: wV,
          PAGE_SCROLL_DOWN: QE,
          SCROLL_INTO_VIEW: ZE,
          SCROLL_OUT_OF_VIEW: OV,
          PAGE_SCROLL_UP: AV,
          SCROLLING_IN_VIEW: xV,
          PAGE_FINISH: JE,
          ECOMMERCE_CART_CLOSE: SV,
          ECOMMERCE_CART_OPEN: CV,
          PAGE_START: eb,
          PAGE_SCROLL: RV,
        } = Ze),
        (Es = "COMPONENT_ACTIVE"),
        (tb = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: GE } = Ce),
        ({ getNamespacedParameterId: VE } = $E.IX2VanillaUtils),
        (rb = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (tn = rb(({ element: e, nativeEvent: t }) => e === t.target)),
        (LV = rb(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, zE.default)([tn, LV])),
        (nb = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !PV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (NV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!nb(e, n);
        }),
        (Be = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = nb(e, u);
          return (
            f &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + GE + n.split(GE)[1],
                actionListId: (0, KE.default)(f, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            nn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (rn = { handler: et(lt, Be) }),
        (ib = { ...rn, types: [Es, tb].join(" ") }),
        (bs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (UE = "mouseover mouseout"),
        (_s = { types: bs }),
        (PV = { PAGE_START: eb, PAGE_FINISH: JE }),
        (en = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, YE.default)(
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
        })()),
        (qV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (FV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (MV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return qV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (ob = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Es, tb].indexOf(n) !== -1 ? n === Es : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (BE = (e) => (t, r) => {
          let n = { elementHovered: FV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (DV = (e) => (t, r) => {
          let n = { ...r, elementVisible: MV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (WE =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = en(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              E = f === "PX",
              v = i - o,
              g = Number((n / v).toFixed(2));
            if (r && r.percentTop === g) return r;
            let y = (E ? u : (o * (u || 0)) / 100) / v,
              w,
              I,
              S = 0;
            r &&
              ((w = g > r.percentTop),
              (I = r.scrollingDown !== w),
              (S = I ? g : r.anchorTop));
            let O = s === QE ? g >= S + y : g <= S - y,
              q = {
                ...r,
                percentTop: g,
                inBounds: O,
                anchorTop: S,
                scrollingDown: w,
              };
            return (r && O && (I || q.inBounds !== r.inBounds) && e(t, q)) || q;
          }),
        (kV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (GV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (VV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (HE =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...ib,
          handler: et(
            e ? lt : tn,
            ob((t, r) => (r.isActive ? rn.handler(t, r) : r))
          ),
        })),
        (Ti = (e = !0) => ({
          ...ib,
          handler: et(
            e ? lt : tn,
            ob((t, r) => (r.isActive ? r : rn.handler(t, r)))
          ),
        })),
        (XE = {
          ..._s,
          handler: DV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ZE) === r
              ? (Be(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (jE = 0.05),
        (ab = {
          [yV]: _i(),
          [EV]: Ti(),
          [mV]: _i(),
          [hV]: Ti(),
          [IV]: _i(!1),
          [TV]: Ti(!1),
          [bV]: _i(),
          [_V]: Ti(),
          [CV]: { types: "ecommerce-cart-open", handler: et(lt, Be) },
          [SV]: { types: "ecommerce-cart-close", handler: et(lt, Be) },
          [lV]: {
            types: "click",
            handler: et(
              lt,
              HE((e, { clickCount: t }) => {
                NV(e) ? t === 1 && Be(e) : Be(e);
              })
            ),
          },
          [fV]: {
            types: "click",
            handler: et(
              lt,
              HE((e, { clickCount: t }) => {
                t === 2 && Be(e);
              })
            ),
          },
          [dV]: { ...rn, types: "mousedown" },
          [pV]: { ...rn, types: "mouseup" },
          [vV]: {
            types: UE,
            handler: et(
              lt,
              BE((e, t) => {
                t.elementHovered && Be(e);
              })
            ),
          },
          [gV]: {
            types: UE,
            handler: et(
              lt,
              BE((e, t) => {
                t.elementHovered || Be(e);
              })
            ),
          },
          [wV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: E = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: g = o.clientY,
                  pageX: y = o.pageX,
                  pageY: w = o.pageY,
                } = n,
                I = s === "X_AXIS",
                S = n.type === "mouseout",
                O = E / 100,
                q = u,
                C = !1;
              switch (a) {
                case at.VIEWPORT: {
                  O = I
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: D,
                    scrollWidth: F,
                    scrollHeight: X,
                  } = en();
                  O = I ? Math.min(M + y, F) / F : Math.min(D + w, X) / X;
                  break;
                }
                case at.ELEMENT:
                default: {
                  q = VE(i, u);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let D = t.getBoundingClientRect(),
                    { left: F, top: X, width: K, height: Y } = D;
                  if (!M && !kV({ left: v, top: g }, D)) break;
                  (C = !0), (O = I ? (v - F) / K : (g - X) / Y);
                  break;
                }
              }
              return (
                S && (O > 1 - jE || O < jE) && (O = Math.round(O)),
                (a !== at.ELEMENT || C || C !== o.elementHovered) &&
                  ((O = f ? 1 - O : O), e.dispatch(vr(q, O))),
                {
                  elementHovered: C,
                  clientX: v,
                  clientY: g,
                  pageX: y,
                  pageY: w,
                }
              );
            },
          },
          [RV]: {
            types: bs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = en(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(vr(r, s));
            },
          },
          [xV]: {
            types: bs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = en(),
                {
                  basedOn: E,
                  selectedAxis: v,
                  continuousParameterGroupId: g,
                  startsEntering: y,
                  startsExiting: w,
                  addEndOffset: I,
                  addStartOffset: S,
                  addOffsetValue: O = 0,
                  endOffsetValue: q = 0,
                } = r,
                C = v === "X_AXIS";
              if (E === at.VIEWPORT) {
                let M = C ? o / s : a / u;
                return (
                  M !== i.scrollPercent && t.dispatch(vr(g, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = VE(n, g),
                  D = e.getBoundingClientRect(),
                  F = (S ? O : 0) / 100,
                  X = (I ? q : 0) / 100;
                (F = y ? F : 1 - F), (X = w ? X : 1 - X);
                let K = D.top + Math.min(D.height * F, f),
                  te = D.top + D.height * X - K,
                  U = Math.min(f + te, u),
                  m = Math.min(Math.max(0, f - K), U) / U;
                return (
                  m !== i.scrollPercent && t.dispatch(vr(M, m)),
                  { scrollPercent: m }
                );
              }
            },
          },
          [ZE]: XE,
          [OV]: XE,
          [QE]: {
            ..._s,
            handler: WE((e, t) => {
              t.scrollingDown && Be(e);
            }),
          },
          [AV]: {
            ..._s,
            handler: WE((e, t) => {
              t.scrollingDown || Be(e);
            }),
          },
          [JE]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(tn, GV(Be)),
          },
          [eb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(tn, VV(Be)),
          },
        });
    });
  var wb = {};
  De(wb, {
    observeRequests: () => aU,
    startActionGroup: () => nn,
    startEngine: () => Si,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => _b,
    stopEngine: () => Ci,
  });
  function aU(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: cU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: lU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: fU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: dU });
  }
  function sU(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ci(e),
          mb({ store: e, elementApi: qe }),
          Si({ store: e, allowEvents: !0 }),
          yb();
      },
    });
  }
  function uU(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function cU({ rawData: e, defer: t }, r) {
    let n = () => {
      Si({ store: r, rawData: e, allowEvents: !0 }), yb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function yb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function lU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: E } = e;
    if (n && i && E && s) {
      let v = E.actionLists[n];
      v && (E = YV({ actionList: v, actionItemId: i, rawData: E }));
    }
    if (
      (Si({ store: t, rawData: E, allowEvents: a, testManual: u }),
      (n && r === Ge.GENERAL_START_ACTION) || Is(r))
    ) {
      hr({ store: t, actionListId: n }),
        bb({ store: t, actionListId: n, eventId: o });
      let v = nn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && v && t.dispatch(gr({ actionListId: n, isPlaying: !s }));
    }
  }
  function fU({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : _b({ store: t }), Ci(t);
  }
  function dU(e, t) {
    Ci(t), mb({ store: t, elementApi: qe });
  }
  function Si({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(es(t)),
      i.active ||
        (e.dispatch(
          ts({
            hasBoundaryNodes: !!document.querySelector(wi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (yU(e), pU(), e.getState().ixSession.hasDefinedMediaQueries && sU(e)),
        e.dispatch(rs()),
        vU(e, n));
  }
  function pU() {
    let { documentElement: e } = document;
    e.className.indexOf(ub) === -1 && (e.className += ` ${ub}`);
  }
  function vU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(di(n, o)), t ? uU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ci(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(gU), JV(), e.dispatch(ns());
    }
  }
  function gU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function hU({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: E } = e.getState(),
      { events: v } = f,
      g = v[n],
      { eventTypeId: y } = g,
      w = {},
      I = {},
      S = [],
      { continuousActionGroups: O } = a,
      { id: q } = a;
    $V(y, i) && (q = QV(t, q));
    let C = E.hasBoundaryNodes && r ? Jr(r, wi) : null;
    O.forEach((M) => {
      let { keyframe: D, actionItems: F } = M;
      F.forEach((X) => {
        let { actionTypeId: K } = X,
          { target: Y } = X.config;
        if (!Y) return;
        let te = Y.boundaryMode ? C : null,
          U = eU(Y) + ws + K;
        if (((I[U] = mU(I[U], D, X)), !w[U])) {
          w[U] = !0;
          let { config: L } = X;
          Oi({
            config: L,
            event: g,
            eventTarget: r,
            elementRoot: te,
            elementApi: qe,
          }).forEach((m) => {
            S.push({ element: m, key: U });
          });
        }
      });
    }),
      S.forEach(({ element: M, key: D }) => {
        let F = I[D],
          X = (0, mt.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: K } = X,
          Y = xi(K) ? As(K)(M, X) : null,
          te = Os({ element: M, actionItem: X, elementApi: qe }, Y);
        xs({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: X,
          destination: te,
          continuous: !0,
          parameterId: q,
          actionGroups: F,
          smoothing: s,
          restingValue: u,
          pluginInstance: Y,
        });
      });
  }
  function mU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function yU(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    Eb(e),
      (0, mr.default)(r, (i, o) => {
        let a = ab[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        wU({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && bU(e);
  }
  function bU(e) {
    let t = () => {
      Eb(e);
    };
    EU.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(fi(window, [r, t]));
    }),
      t();
  }
  function Eb(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(us({ width: n, mediaQueries: i }));
    }
  }
  function wU({ logic: e, store: t, events: r }) {
    OU(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = _U(r, IU);
    if (!(0, fb.default)(s)) return;
    (0, mr.default)(s, (v, g) => {
      let y = r[g],
        { action: w, id: I, mediaQueries: S = o.mediaQueryKeys } = y,
        { actionListId: O } = w.config;
      tU(S, o.mediaQueryKeys) || t.dispatch(cs()),
        w.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(y.config) ? y.config : [y.config]).forEach((C) => {
            let { continuousParameterGroupId: M } = C,
              D = (0, mt.default)(a, `${O}.continuousParameterGroups`, []),
              F = (0, lb.default)(D, ({ id: Y }) => Y === M),
              X = (C.smoothing || 0) / 100,
              K = (C.restingState || 0) / 100;
            F &&
              v.forEach((Y, te) => {
                let U = I + ws + te;
                hU({
                  store: t,
                  eventStateKey: U,
                  eventTarget: Y,
                  eventId: I,
                  eventConfig: C,
                  actionListId: O,
                  parameterGroup: F,
                  smoothing: X,
                  restingValue: K,
                });
              });
          }),
        (w.actionTypeId === Ge.GENERAL_START_ACTION || Is(w.actionTypeId)) &&
          bb({ store: t, actionListId: O, eventId: I });
    });
    let u = (v) => {
        let { ixSession: g } = t.getState();
        TU(s, (y, w, I) => {
          let S = r[w],
            O = g.eventState[I],
            { action: q, mediaQueries: C = o.mediaQueryKeys } = S;
          if (!Ai(C, g.mediaQueryKey)) return;
          let M = (D = {}) => {
            let F = i(
              {
                store: t,
                element: y,
                event: S,
                eventConfig: D,
                nativeEvent: v,
                eventStateKey: I,
              },
              O
            );
            rU(F, O) || t.dispatch(is(I, F));
          };
          q.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(M)
            : M();
        });
      },
      f = (0, gb.default)(u, oU),
      E = ({ target: v = document, types: g, throttle: y }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((w) => {
            let I = y ? f : u;
            v.addEventListener(w, I), t.dispatch(fi(v, [w, I]));
          });
      };
    Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
  }
  function OU(e) {
    if (!iU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = fs(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function bb({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
        E = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(E, i.mediaQueryKey)) return;
      f.forEach((v) => {
        let { config: g, actionTypeId: y } = v,
          w =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          I = Oi({ config: w, event: s, elementApi: qe }),
          S = xi(y);
        I.forEach((O) => {
          let q = S ? As(y)(O, v) : null;
          xs({
            destination: Os({ element: O, actionItem: v, elementApi: qe }, q),
            immediate: !0,
            store: e,
            element: O,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: q,
          });
        });
      });
    }
  }
  function _b({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, mr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ss(r, e), i && e.dispatch(gr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Jr(r, wi) : null;
    (0, mr.default)(o, (u) => {
      let f = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
        E = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && E) {
        if (s && f && !ds(s, u.element)) return;
        Ss(u, e),
          u.verbose && e.dispatch(gr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function nn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: E } = u,
      v = E[t] || {},
      { mediaQueries: g = u.mediaQueryKeys } = v,
      y = (0, mt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: w, useFirstGroupAsInitialState: I } = y;
    if (!w || !w.length) return !1;
    o >= w.length && (0, mt.default)(v, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let O =
        (o === 0 || (o === 1 && I)) && Is(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      q = (0, mt.default)(w, [o, "actionItems"], []);
    if (!q.length || !Ai(g, f.mediaQueryKey)) return !1;
    let C = f.hasBoundaryNodes && r ? Jr(r, wi) : null,
      M = jV(q),
      D = !1;
    return (
      q.forEach((F, X) => {
        let { config: K, actionTypeId: Y } = F,
          te = xi(Y),
          { target: U } = K;
        if (!U) return;
        let L = U.boundaryMode ? C : null;
        Oi({
          config: K,
          event: v,
          eventTarget: r,
          elementRoot: L,
          elementApi: qe,
        }).forEach((N, k) => {
          let V = te ? As(Y)(N, F) : null,
            Z = te ? nU(Y)(N, F) : null;
          D = !0;
          let re = M === X && k === 0,
            G = zV({ element: N, actionItem: F }),
            W = Os({ element: N, actionItem: F, elementApi: qe }, V);
          xs({
            store: e,
            element: N,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: G,
            destination: W,
            immediate: a,
            verbose: s,
            pluginInstance: V,
            pluginDuration: Z,
            instanceDelay: O,
          });
        });
      }),
      D
    );
  }
  function xs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: E,
      } = n,
      v = !u,
      g = HV(),
      { ixElements: y, ixSession: w, ixData: I } = t.getState(),
      S = WV(y, i),
      { refState: O } = y[S] || {},
      q = ps(i),
      C = w.reducedMotion && zo[o.actionTypeId],
      M;
    if (C && u)
      switch (I.events[E]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          M = f;
          break;
        default:
          M = 0.5;
          break;
      }
    let D = KV(i, O, r, o, qe, s);
    if (
      (t.dispatch(
        os({
          instanceId: g,
          elementId: S,
          origin: D,
          refType: q,
          skipMotion: C,
          skipToValue: M,
          ...n,
        })
      ),
      Tb(document.body, "ix2-animation-started", g),
      a)
    ) {
      AU(t, g);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: F }) => F[g], onChange: Ib }),
      v && t.dispatch(pi(g, w.tick));
  }
  function Ss(e, t) {
    Tb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === hb && ZV(o, n, qe), t.dispatch(as(e.id));
  }
  function Tb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function AU(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Ib(n[t], e);
  }
  function Ib(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: E,
        eventId: v,
        eventTarget: g,
        eventStateKey: y,
        actionListId: w,
        isCarrier: I,
        styleProp: S,
        verbose: O,
        pluginInstance: q,
      } = e,
      { ixData: C, ixSession: M } = t.getState(),
      { events: D } = C,
      F = D[v] || {},
      { mediaQueries: X = C.mediaQueryKeys } = F;
    if (Ai(X, M.mediaQueryKey) && (n || r || i)) {
      if (f || (u === BV && i)) {
        t.dispatch(ss(o, s, f, a));
        let { ixElements: K } = t.getState(),
          { ref: Y, refType: te, refState: U } = K[o] || {},
          L = U && U[s];
        (te === hb || xi(s)) && XV(Y, U, L, v, a, S, qe, u, q);
      }
      if (i) {
        if (I) {
          let K = nn({
            store: t,
            eventId: v,
            eventTarget: g,
            eventStateKey: y,
            actionListId: w,
            groupIndex: E + 1,
            verbose: O,
          });
          O && !K && t.dispatch(gr({ actionListId: w, isPlaying: !1 }));
        }
        Ss(e, t);
      }
    }
  }
  var lb,
    mt,
    fb,
    db,
    pb,
    vb,
    mr,
    gb,
    Ii,
    UV,
    Is,
    ws,
    wi,
    hb,
    BV,
    ub,
    Oi,
    WV,
    Os,
    Vt,
    HV,
    XV,
    mb,
    jV,
    zV,
    KV,
    YV,
    $V,
    QV,
    Ai,
    ZV,
    JV,
    eU,
    tU,
    rU,
    xi,
    As,
    nU,
    cb,
    iU,
    oU,
    EU,
    _U,
    TU,
    IU,
    Ts = he(() => {
      "use strict";
      (lb = le(Ta())),
        (mt = le(zn())),
        (fb = le(Dm())),
        (db = le(cy())),
        (pb = le(fy())),
        (vb = le(py())),
        (mr = le(Ey())),
        (gb = le(Ay()));
      Ve();
      Ii = le(Gt());
      vi();
      Ny();
      sb();
      (UV = Object.keys(On)),
        (Is = (e) => UV.includes(e)),
        ({
          COLON_DELIMITER: ws,
          BOUNDARY_SELECTOR: wi,
          HTML_ELEMENT: hb,
          RENDER_GENERAL: BV,
          W_MOD_IX: ub,
        } = Ce),
        ({
          getAffectedElements: Oi,
          getElementId: WV,
          getDestinationValues: Os,
          observeStore: Vt,
          getInstanceId: HV,
          renderHTMLElement: XV,
          clearAllStyles: mb,
          getMaxDurationItemIndex: jV,
          getComputedStyle: zV,
          getInstanceOrigin: KV,
          reduceListToGroup: YV,
          shouldNamespaceEventParameter: $V,
          getNamespacedParameterId: QV,
          shouldAllowMediaQuery: Ai,
          cleanupHTMLElement: ZV,
          clearObjectCache: JV,
          stringifyTarget: eU,
          mediaQueriesEqual: tU,
          shallowEqual: rU,
        } = Ii.IX2VanillaUtils),
        ({
          isPluginType: xi,
          createPluginInstance: As,
          getPluginDuration: nU,
        } = Ii.IX2VanillaPlugins),
        (cb = navigator.userAgent),
        (iU = cb.match(/iPad/i) || cb.match(/iPhone/)),
        (oU = 12);
      EU = ["resize", "orientationchange"];
      (_U = (e, t) => (0, db.default)((0, vb.default)(e, t), pb.default)),
        (TU = (e, t) => {
          (0, mr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ws + o;
              t(i, n, a);
            });
          });
        }),
        (IU = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: qe });
        });
    });
  var Ab = c((yt) => {
    "use strict";
    var xU = dn().default,
      SU = su().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = Ob;
    yt.init = PU;
    yt.setEnv = NU;
    yt.store = void 0;
    jl();
    var CU = Ho(),
      RU = SU((ym(), rt(mm))),
      Cs = (Ts(), rt(wb)),
      LU = xU((vi(), rt(Sy)));
    yt.actions = LU;
    var Rs = (yt.store = (0, CU.createStore)(RU.default));
    function NU(e) {
      e() && (0, Cs.observeRequests)(Rs);
    }
    function PU(e) {
      Ob(), (0, Cs.startEngine)({ store: Rs, rawData: e, allowEvents: !0 });
    }
    function Ob() {
      (0, Cs.stopEngine)(Rs);
    }
  });
  var Rb = c((ez, Cb) => {
    "use strict";
    var xb = ke(),
      Sb = Ab();
    Sb.setEnv(xb.env);
    xb.define(
      "ix2",
      (Cb.exports = function () {
        return Sb;
      })
    );
  });
  var Nb = c((tz, Lb) => {
    "use strict";
    var yr = ke();
    yr.define(
      "links",
      (Lb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          E = /\/$/,
          v,
          g;
        r.ready = r.design = r.preview = y;
        function y() {
          (i = o && yr.env("design")),
            (g = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(I),
            (v = []);
          for (var O = document.links, q = 0; q < O.length; ++q) w(O[q]);
          v.length && (yr.scroll.on(I), I());
        }
        function w(O) {
          if (!O.getAttribute("hreflang")) {
            var q =
              (i && O.getAttribute("href-disabled")) || O.getAttribute("href");
            if (((s.href = q), !(q.indexOf(":") >= 0))) {
              var C = e(O);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var M = e(s.hash);
                M.length && v.push({ link: C, sec: M, active: !1 });
                return;
              }
              if (!(q === "#" || q === "")) {
                var D =
                  s.href === a.href || q === g || (f.test(q) && E.test(g));
                S(C, u, D);
              }
            }
          }
        }
        function I() {
          var O = n.scrollTop(),
            q = n.height();
          t.each(v, function (C) {
            if (!C.link.attr("hreflang")) {
              var M = C.link,
                D = C.sec,
                F = D.offset().top,
                X = D.outerHeight(),
                K = q * 0.5,
                Y = D.is(":visible") && F + X - K >= O && F + K <= O + q;
              C.active !== Y && ((C.active = Y), S(M, u, Y));
            }
          });
        }
        function S(O, q, C) {
          var M = O.hasClass(q);
          (C && M) || (!C && !M) || (C ? O.addClass(q) : O.removeClass(q));
        }
        return r;
      })
    );
  });
  var qb = c((rz, Pb) => {
    "use strict";
    var Ri = ke();
    Ri.define(
      "scroll",
      (Pb.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = w() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          y = document.createElement("style");
        y.appendChild(document.createTextNode(g));
        function w() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function S(L) {
          return I.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
        }
        let O =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function q() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            O.matches
          );
        }
        function C(L, m) {
          var N;
          switch (m) {
            case "add":
              (N = L.attr("tabindex")),
                N
                  ? L.attr("data-wf-tabindex-swap", N)
                  : L.attr("tabindex", "-1");
              break;
            case "remove":
              (N = L.attr("data-wf-tabindex-swap")),
                N
                  ? (L.attr("tabindex", N),
                    L.removeAttr("data-wf-tabindex-swap"))
                  : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", m === "add");
        }
        function M(L) {
          var m = L.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var N = S(m) ? m.hash : "";
            if (N !== "") {
              var k = e(N);
              k.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                D(N, L),
                window.setTimeout(
                  function () {
                    F(k, function () {
                      C(k, "add"),
                        k.get(0).focus({ preventScroll: !0 }),
                        C(k, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function D(L) {
          if (
            r.hash !== L &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== L && n.pushState({ hash: L }, "", L);
          }
        }
        function F(L, m) {
          var N = i.scrollTop(),
            k = X(L);
          if (N !== k) {
            var V = K(L, N, k),
              Z = Date.now(),
              re = function () {
                var G = Date.now() - Z;
                window.scroll(0, Y(N, k, G, V)),
                  G <= V ? s(re) : typeof m == "function" && m();
              };
            s(re);
          }
        }
        function X(L) {
          var m = e(f),
            N = m.css("position") === "fixed" ? m.outerHeight() : 0,
            k = L.offset().top - N;
          if (L.data("scroll") === "mid") {
            var V = i.height() - N,
              Z = L.outerHeight();
            Z < V && (k -= Math.round((V - Z) / 2));
          }
          return k;
        }
        function K(L, m, N) {
          if (q()) return 0;
          var k = 1;
          return (
            a.add(L).each(function (V, Z) {
              var re = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (k = re);
            }),
            (472.143 * Math.log(Math.abs(m - N) + 125) - 2e3) * k
          );
        }
        function Y(L, m, N, k) {
          return N > k ? m : L + (m - L) * te(N / k);
        }
        function te(L) {
          return L < 0.5
            ? 4 * L * L * L
            : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function U() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: m } = t;
          o.on(m, v, M),
            o.on(L, E, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(y, document.head.firstChild);
        }
        return { ready: U };
      })
    );
  });
  var Mb = c((nz, Fb) => {
    "use strict";
    var qU = ke();
    qU.define(
      "touch",
      (Fb.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            E;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", y, !1),
            o.addEventListener("touchcancel", w, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", y, !1),
            o.addEventListener("mouseout", w, !1);
          function v(S) {
            var O = S.touches;
            (O && O.length > 1) ||
              ((a = !0),
              O ? ((s = !0), (f = O[0].clientX)) : (f = S.clientX),
              (E = f));
          }
          function g(S) {
            if (a) {
              if (s && S.type === "mousemove") {
                S.preventDefault(), S.stopPropagation();
                return;
              }
              var O = S.touches,
                q = O ? O[0].clientX : S.clientX,
                C = q - E;
              (E = q),
                Math.abs(C) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", S, { direction: C > 0 ? "right" : "left" }), w());
            }
          }
          function y(S) {
            if (a && ((a = !1), s && S.type === "mouseup")) {
              S.preventDefault(), S.stopPropagation(), (s = !1);
              return;
            }
          }
          function w() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", y, !1),
              o.removeEventListener("touchcancel", w, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", y, !1),
              o.removeEventListener("mouseout", w, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Db = c((Ls) => {
    "use strict";
    Object.defineProperty(Ls, "__esModule", { value: !0 });
    Ls.default = FU;
    function FU(e, t, r, n, i, o, a, s, u, f, E, v, g) {
      return function (y) {
        e(y);
        var w = y.form,
          I = {
            name: w.attr("data-name") || w.attr("name") || "Untitled Form",
            pageId: w.attr("data-wf-page-id") || "",
            elementId: w.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              w.html()
            ),
            trackingCookies: n(),
          };
        let S = w.attr("data-wf-flow");
        S && (I.wfFlow = S), i(y);
        var O = o(w, I.fields);
        if (O) return a(O);
        if (((I.fileUploads = s(w)), u(y), !f)) {
          E(y);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (q) {
            q && q.code === 200 && (y.success = !0), E(y);
          })
          .fail(function () {
            E(y);
          });
      };
    }
  });
  var Gb = c((oz, kb) => {
    "use strict";
    var Li = ke();
    Li.define(
      "forms",
      (kb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          E = /^\S+@\S+$/,
          v = window.alert,
          g = Li.env(),
          y,
          w,
          I,
          S = /list-manage[1-9]?.com/i,
          O = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              q(), !g && !y && M();
            };
        function q() {
          (u = e("html").attr("data-wf-site")),
            (w = "https://webflow.com/api/v1/form/" + u),
            a &&
              w.indexOf("https://webflow.com") >= 0 &&
              (w = w.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${w}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(C);
        }
        function C(G, W) {
          var d = e(W),
            b = e.data(W, s);
          b || (b = e.data(W, s, { form: d })), D(b);
          var _ = d.closest("div.w-form");
          (b.done = _.find("> .w-form-done")),
            (b.fail = _.find("> .w-form-fail")),
            (b.fileUploads = _.find(".w-file-upload")),
            b.fileUploads.each(function ($) {
              V($, b);
            });
          var p =
            b.form.attr("aria-label") || b.form.attr("data-name") || "Form";
          b.done.attr("aria-label") || b.form.attr("aria-label", p),
            b.done.attr("tabindex", "-1"),
            b.done.attr("role", "region"),
            b.done.attr("aria-label") ||
              b.done.attr("aria-label", p + " success"),
            b.fail.attr("tabindex", "-1"),
            b.fail.attr("role", "region"),
            b.fail.attr("aria-label") ||
              b.fail.attr("aria-label", p + " failure");
          var H = (b.action = d.attr("action"));
          if (
            ((b.handler = null),
            (b.redirect = d.attr("data-redirect")),
            S.test(H))
          ) {
            b.handler = m;
            return;
          }
          if (!H) {
            if (u) {
              b.handler = (() => {
                let $ = Db().default;
                return $(D, o, Li, te, k, X, v, K, F, u, N, e, w);
              })();
              return;
            }
            O();
          }
        }
        function M() {
          (y = !0),
            n.on("submit", s + " form", function ($) {
              var J = e.data(this, s);
              J.handler && ((J.evt = $), J.handler(J));
            });
          let G = ".w-checkbox-input",
            W = ".w-radio-input",
            d = "w--redirected-checked",
            b = "w--redirected-focus",
            _ = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            H = [
              ["checkbox", G],
              ["radio", W],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + G + ")",
            ($) => {
              e($.target).siblings(G).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', ($) => {
              e(`input[name="${$.target.name}"]:not(${G})`).map((ue, be) =>
                e(be).siblings(W).removeClass(d)
              );
              let J = e($.target);
              J.hasClass("w-radio-input") || J.siblings(W).addClass(d);
            }),
            H.forEach(([$, J]) => {
              n.on(
                "focus",
                s + ` form input[type="${$}"]:not(` + J + ")",
                (ue) => {
                  e(ue.target).siblings(J).addClass(b),
                    e(ue.target).filter(p).siblings(J).addClass(_);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${$}"]:not(` + J + ")",
                  (ue) => {
                    e(ue.target).siblings(J).removeClass(`${b} ${_}`);
                  }
                );
            });
        }
        function D(G) {
          var W = (G.btn = G.form.find(':input[type="submit"]'));
          (G.wait = G.btn.attr("data-wait") || null),
            (G.success = !1),
            W.prop("disabled", !1),
            G.label && W.val(G.label);
        }
        function F(G) {
          var W = G.btn,
            d = G.wait;
          W.prop("disabled", !0), d && ((G.label = W.val()), W.val(d));
        }
        function X(G, W) {
          var d = null;
          return (
            (W = W || {}),
            G.find(':input:not([type="submit"]):not([type="file"])').each(
              function (b, _) {
                var p = e(_),
                  H = p.attr("type"),
                  $ =
                    p.attr("data-name") || p.attr("name") || "Field " + (b + 1);
                $ = encodeURIComponent($);
                var J = p.val();
                if (H === "checkbox") J = p.is(":checked");
                else if (H === "radio") {
                  if (W[$] === null || typeof W[$] == "string") return;
                  J =
                    G.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof J == "string" && (J = e.trim(J)),
                  (W[$] = J),
                  (d = d || U(p, H, $, J));
              }
            ),
            d
          );
        }
        function K(G) {
          var W = {};
          return (
            G.find(':input[type="file"]').each(function (d, b) {
              var _ = e(b),
                p = _.attr("data-name") || _.attr("name") || "File " + (d + 1),
                H = _.attr("data-value");
              typeof H == "string" && (H = e.trim(H)), (W[p] = H);
            }),
            W
          );
        }
        let Y = { _mkto_trk: "marketo" };
        function te() {
          return document.cookie.split("; ").reduce(function (W, d) {
            let b = d.split("="),
              _ = b[0];
            if (_ in Y) {
              let p = Y[_],
                H = b.slice(1).join("=");
              W[p] = H;
            }
            return W;
          }, {});
        }
        function U(G, W, d, b) {
          var _ = null;
          return (
            W === "password"
              ? (_ = "Passwords cannot be submitted.")
              : G.attr("required")
              ? b
                ? f.test(G.attr("type")) &&
                  (E.test(b) ||
                    (_ = "Please enter a valid email address for: " + d))
                : (_ = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !b &&
                (_ = "Please confirm you\u2019re not a robot."),
            _
          );
        }
        function L(G) {
          k(G), N(G);
        }
        function m(G) {
          D(G);
          var W = G.form,
            d = {};
          if (/^https/.test(o.href) && !/^https/.test(G.action)) {
            W.attr("method", "post");
            return;
          }
          k(G);
          var b = X(W, d);
          if (b) return v(b);
          F(G);
          var _;
          t.each(d, function (J, ue) {
            f.test(ue) && (d.EMAIL = J),
              /^((full[ _-]?)?name)$/i.test(ue) && (_ = J),
              /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = J),
              /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = J);
          }),
            _ &&
              !d.FNAME &&
              ((_ = _.split(" ")),
              (d.FNAME = _[0]),
              (d.LNAME = d.LNAME || _[1]));
          var p = G.action.replace("/post?", "/post-json?") + "&c=?",
            H = p.indexOf("u=") + 2;
          H = p.substring(H, p.indexOf("&", H));
          var $ = p.indexOf("id=") + 3;
          ($ = p.substring($, p.indexOf("&", $))),
            (d["b_" + H + "_" + $] = ""),
            e
              .ajax({ url: p, data: d, dataType: "jsonp" })
              .done(function (J) {
                (G.success = J.result === "success" || /already/.test(J.msg)),
                  G.success || console.info("MailChimp error: " + J.msg),
                  N(G);
              })
              .fail(function () {
                N(G);
              });
        }
        function N(G) {
          var W = G.form,
            d = G.redirect,
            b = G.success;
          if (b && d) {
            Li.location(d);
            return;
          }
          G.done.toggle(b),
            G.fail.toggle(!b),
            b ? G.done.focus() : G.fail.focus(),
            W.toggle(!b),
            D(G);
        }
        function k(G) {
          G.evt && G.evt.preventDefault(), (G.evt = null);
        }
        function V(G, W) {
          if (!W.fileUploads || !W.fileUploads[G]) return;
          var d,
            b = e(W.fileUploads[G]),
            _ = b.find("> .w-file-upload-default"),
            p = b.find("> .w-file-upload-uploading"),
            H = b.find("> .w-file-upload-success"),
            $ = b.find("> .w-file-upload-error"),
            J = _.find(".w-file-upload-input"),
            ue = _.find(".w-file-upload-label"),
            be = ue.children(),
            oe = $.find(".w-file-upload-error-msg"),
            h = H.find(".w-file-upload-file"),
            B = H.find(".w-file-remove-link"),
            Q = h.find(".w-file-upload-file-name"),
            j = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            Fe = oe.attr("data-w-generic-error");
          if (
            (g ||
              ue.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), J.click());
              }),
            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            J.on("click", function (A) {
              A.preventDefault();
            }),
              ue.on("click", function (A) {
                A.preventDefault();
              }),
              be.on("click", function (A) {
                A.preventDefault();
              });
          else {
            B.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              J.removeAttr("data-value"),
                J.val(""),
                Q.html(""),
                _.toggle(!0),
                H.toggle(!1),
                ue.focus();
            }),
              J.on("change", function (A) {
                (d = A.target && A.target.files && A.target.files[0]),
                  d &&
                    (_.toggle(!1),
                    $.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    Q.text(d.name),
                    R() || F(W),
                    (W.fileUploads[G].uploading = !0),
                    Z(d, T));
              });
            var He = ue.outerHeight();
            J.height(He), J.width(1);
          }
          function l(A) {
            var P = A.responseJSON && A.responseJSON.msg,
              ee = Fe;
            typeof P == "string" && P.indexOf("InvalidFileTypeError") === 0
              ? (ee = fe)
              : typeof P == "string" &&
                P.indexOf("MaxFileSizeError") === 0 &&
                (ee = j),
              oe.text(ee),
              J.removeAttr("data-value"),
              J.val(""),
              p.toggle(!1),
              _.toggle(!0),
              $.toggle(!0),
              $.focus(),
              (W.fileUploads[G].uploading = !1),
              R() || D(W);
          }
          function T(A, P) {
            if (A) return l(A);
            var ee = P.fileName,
              ie = P.postData,
              ve = P.fileId,
              z = P.s3Url;
            J.attr("data-value", ve), re(z, ie, d, ee, x);
          }
          function x(A) {
            if (A) return l(A);
            p.toggle(!1),
              H.css("display", "inline-block"),
              H.focus(),
              (W.fileUploads[G].uploading = !1),
              R() || D(W);
          }
          function R() {
            var A = (W.fileUploads && W.fileUploads.toArray()) || [];
            return A.some(function (P) {
              return P.uploading;
            });
          }
        }
        function Z(G, W) {
          var d = new URLSearchParams({ name: G.name, size: G.size });
          e.ajax({ type: "GET", url: `${I}?${d}`, crossDomain: !0 })
            .done(function (b) {
              W(null, b);
            })
            .fail(function (b) {
              W(b);
            });
        }
        function re(G, W, d, b, _) {
          var p = new FormData();
          for (var H in W) p.append(H, W[H]);
          p.append("file", d, b),
            e
              .ajax({
                type: "POST",
                url: G,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                _(null);
              })
              .fail(function ($) {
                _($);
              });
        }
        return r;
      })
    );
  });
  var Ub = c((az, Vb) => {
    "use strict";
    var xt = ke(),
      MU = br(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (Vb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          E,
          v = xt.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          y = ".w-nav",
          w = "w--open",
          I = "w--nav-dropdown-open",
          S = "w--nav-dropdown-toggle-open",
          O = "w--nav-dropdown-list-open",
          q = "w--nav-link-open",
          C = MU.triggers,
          M = e();
        (r.ready = r.design = r.preview = D),
          (r.destroy = function () {
            (M = e()), F(), u && u.length && u.each(te);
          });
        function D() {
          (f = v && xt.env("design")),
            (E = xt.env("editor")),
            (s = e(document.body)),
            (u = o.find(y)),
            u.length && (u.each(Y), F(), X());
        }
        function F() {
          xt.resize.off(K);
        }
        function X() {
          xt.resize.on(K);
        }
        function K() {
          u.each(_);
        }
        function Y(h, B) {
          var Q = e(B),
            j = e.data(B, y);
          j ||
            (j = e.data(B, y, {
              open: !1,
              el: Q,
              config: {},
              selectedIdx: -1,
            })),
            (j.menu = Q.find(".w-nav-menu")),
            (j.links = j.menu.find(".w-nav-link")),
            (j.dropdowns = j.menu.find(".w-dropdown")),
            (j.dropdownToggle = j.menu.find(".w-dropdown-toggle")),
            (j.dropdownList = j.menu.find(".w-dropdown-list")),
            (j.button = Q.find(".w-nav-button")),
            (j.container = Q.find(".w-container")),
            (j.overlayContainerId = "w-nav-overlay-" + h),
            (j.outside = d(j));
          var fe = Q.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            j.button.attr("style", "-webkit-user-select: text;"),
            j.button.attr("aria-label") == null &&
              j.button.attr("aria-label", "menu"),
            j.button.attr("role", "button"),
            j.button.attr("tabindex", "0"),
            j.button.attr("aria-controls", j.overlayContainerId),
            j.button.attr("aria-haspopup", "menu"),
            j.button.attr("aria-expanded", "false"),
            j.el.off(y),
            j.button.off(y),
            j.menu.off(y),
            m(j),
            f
              ? (U(j), j.el.on("setting" + y, N(j)))
              : (L(j),
                j.button.on("click" + y, G(j)),
                j.menu.on("click" + y, "a", W(j)),
                j.button.on("keydown" + y, k(j)),
                j.el.on("keydown" + y, V(j))),
            _(h, B);
        }
        function te(h, B) {
          var Q = e.data(B, y);
          Q && (U(Q), e.removeData(B, y));
        }
        function U(h) {
          h.overlay && (oe(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function L(h) {
          h.overlay ||
            ((h.overlay = e(g).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            oe(h, !0));
        }
        function m(h) {
          var B = {},
            Q = h.config || {},
            j = (B.animation = h.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(j)),
            (B.animDirect = /left$/.test(j) ? -1 : 1),
            Q.animation !== j && h.open && t.defer(re, h),
            (B.easing = h.el.attr("data-easing") || "ease"),
            (B.easing2 = h.el.attr("data-easing2") || "ease");
          var fe = h.el.attr("data-duration");
          (B.duration = fe != null ? Number(fe) : 400),
            (B.docHeight = h.el.attr("data-doc-height")),
            (h.config = B);
        }
        function N(h) {
          return function (B, Q) {
            Q = Q || {};
            var j = i.width();
            m(h),
              Q.open === !0 && ue(h, !0),
              Q.open === !1 && oe(h, !0),
              h.open &&
                t.defer(function () {
                  j !== i.width() && re(h);
                });
          };
        }
        function k(h) {
          return function (B) {
            switch (B.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return G(h)(), B.preventDefault(), B.stopPropagation();
              case Se.ESCAPE:
                return oe(h), B.preventDefault(), B.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return h.open
                  ? (B.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    Z(h),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function V(h) {
          return function (B) {
            if (h.open)
              switch (
                ((h.selectedIdx = h.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    B.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    Z(h),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(h),
                    h.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    Z(h),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(
                      h.links.length - 1,
                      h.selectedIdx + 1
                    )),
                    Z(h),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function Z(h) {
          if (h.links[h.selectedIdx]) {
            var B = h.links[h.selectedIdx];
            B.focus(), W(B);
          }
        }
        function re(h) {
          h.open && (oe(h, !0), ue(h, !0));
        }
        function G(h) {
          return a(function () {
            h.open ? oe(h) : ue(h);
          });
        }
        function W(h) {
          return function (B) {
            var Q = e(this),
              j = Q.attr("href");
            if (!xt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            j && j.indexOf("#") === 0 && h.open && oe(h);
          };
        }
        function d(h) {
          return (
            h.outside && o.off("click" + y, h.outside),
            function (B) {
              var Q = e(B.target);
              (E && Q.closest(".w-editor-bem-EditorOverlay").length) || b(h, Q);
            }
          );
        }
        var b = a(function (h, B) {
          if (h.open) {
            var Q = B.closest(".w-nav-menu");
            h.menu.is(Q) || oe(h);
          }
        });
        function _(h, B) {
          var Q = e.data(B, y),
            j = (Q.collapsed = Q.button.css("display") !== "none");
          if ((Q.open && !j && !f && oe(Q, !0), Q.container.length)) {
            var fe = H(Q);
            Q.links.each(fe), Q.dropdowns.each(fe);
          }
          Q.open && be(Q);
        }
        var p = "max-width";
        function H(h) {
          var B = h.container.css(p);
          return (
            B === "none" && (B = ""),
            function (Q, j) {
              (j = e(j)), j.css(p, ""), j.css(p) === "none" && j.css(p, B);
            }
          );
        }
        function $(h, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function J(h, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function ue(h, B) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each($),
            h.links.addClass(q),
            h.dropdowns.addClass(I),
            h.dropdownToggle.addClass(S),
            h.dropdownList.addClass(O),
            h.button.addClass(w);
          var Q = h.config,
            j = Q.animation;
          (j === "none" || !n.support.transform || Q.duration <= 0) && (B = !0);
          var fe = be(h),
            Fe = h.menu.outerHeight(!0),
            He = h.menu.outerWidth(!0),
            l = h.el.height(),
            T = h.el[0];
          if (
            (_(0, T),
            C.intro(0, T),
            xt.redraw.up(),
            f || o.on("click" + y, h.outside),
            B)
          ) {
            A();
            return;
          }
          var x = "transform " + Q.duration + "ms " + Q.easing;
          if (
            (h.overlay &&
              ((M = h.menu.prev()), h.overlay.show().append(h.menu)),
            Q.animOver)
          ) {
            n(h.menu)
              .add(x)
              .set({ x: Q.animDirect * He, height: fe })
              .start({ x: 0 })
              .then(A),
              h.overlay && h.overlay.width(He);
            return;
          }
          var R = l + Fe;
          n(h.menu).add(x).set({ y: -R }).start({ y: 0 }).then(A);
          function A() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function be(h) {
          var B = h.config,
            Q = B.docHeight ? o.height() : s.height();
          return (
            B.animOver
              ? h.menu.height(Q)
              : h.el.css("position") !== "fixed" && (Q -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Q),
            Q
          );
        }
        function oe(h, B) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(w);
          var Q = h.config;
          if (
            ((Q.animation === "none" ||
              !n.support.transform ||
              Q.duration <= 0) &&
              (B = !0),
            C.outro(0, h.el[0]),
            o.off("click" + y, h.outside),
            B)
          ) {
            n(h.menu).stop(), T();
            return;
          }
          var j = "transform " + Q.duration + "ms " + Q.easing2,
            fe = h.menu.outerHeight(!0),
            Fe = h.menu.outerWidth(!0),
            He = h.el.height();
          if (Q.animOver) {
            n(h.menu)
              .add(j)
              .start({ x: Fe * Q.animDirect })
              .then(T);
            return;
          }
          var l = He + fe;
          n(h.menu).add(j).start({ y: -l }).then(T);
          function T() {
            h.menu.height(""),
              n(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(J),
              h.links.removeClass(q),
              h.dropdowns.removeClass(I),
              h.dropdownToggle.removeClass(S),
              h.dropdownList.removeClass(O),
              h.overlay &&
                h.overlay.children().length &&
                (M.length ? h.menu.insertAfter(M) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Hb = c((sz, Wb) => {
    "use strict";
    var St = ke(),
      DU = br(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Bb =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define(
      "slider",
      (Wb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = St.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          E =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = DU.triggers,
          y,
          w = !1;
        (r.ready = function () {
          (a = St.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (w = !0), I(), (w = !1);
          }),
          (r.destroy = S);
        function I() {
          (o = i.find(u)), o.length && (o.each(C), !y && (S(), O()));
        }
        function S() {
          St.resize.off(q), St.redraw.off(r.redraw);
        }
        function O() {
          St.resize.on(q), St.redraw.on(r.redraw);
        }
        function q() {
          o.filter(":visible").each(V);
        }
        function C(d, b) {
          var _ = e(b),
            p = e.data(b, u);
          p ||
            (p = e.data(b, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: _,
              config: {},
            })),
            (p.mask = _.children(".w-slider-mask")),
            (p.left = _.children(".w-slider-arrow-left")),
            (p.right = _.children(".w-slider-arrow-right")),
            (p.nav = _.children(".w-slider-nav")),
            (p.slides = p.mask.children(".w-slide")),
            p.slides.each(g.reset),
            w && (p.maskWidth = 0),
            _.attr("role") === void 0 && _.attr("role", "region"),
            _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
          var H = p.mask.attr("id");
          if (
            (H || ((H = "w-slider-mask-" + d), p.mask.attr("id", H)),
            !a && !p.ariaLiveLabel && (p.ariaLiveLabel = e(E).appendTo(p.mask)),
            p.left.attr("role", "button"),
            p.left.attr("tabindex", "0"),
            p.left.attr("aria-controls", H),
            p.left.attr("aria-label") === void 0 &&
              p.left.attr("aria-label", "previous slide"),
            p.right.attr("role", "button"),
            p.right.attr("tabindex", "0"),
            p.right.attr("aria-controls", H),
            p.right.attr("aria-label") === void 0 &&
              p.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            p.left.hide(), p.right.hide(), p.nav.hide(), (y = !0);
            return;
          }
          p.el.off(u),
            p.left.off(u),
            p.right.off(u),
            p.nav.off(u),
            M(p),
            a
              ? (p.el.on("setting" + u, m(p)), L(p), (p.hasTimer = !1))
              : (p.el.on("swipe" + u, m(p)),
                p.left.on("click" + u, K(p)),
                p.right.on("click" + u, Y(p)),
                p.left.on("keydown" + u, X(p, K)),
                p.right.on("keydown" + u, X(p, Y)),
                p.nav.on("keydown" + u, "> div", m(p)),
                p.config.autoplay &&
                  !p.hasTimer &&
                  ((p.hasTimer = !0), (p.timerCount = 1), U(p)),
                p.el.on("mouseenter" + u, F(p, !0, "mouse")),
                p.el.on("focusin" + u, F(p, !0, "keyboard")),
                p.el.on("mouseleave" + u, F(p, !1, "mouse")),
                p.el.on("focusout" + u, F(p, !1, "keyboard"))),
            p.nav.on("click" + u, "> div", m(p)),
            s ||
              p.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var $ = _.filter(":hidden");
          $.addClass(v);
          var J = _.parents(":hidden");
          J.addClass(v), w || V(d, b), $.removeClass(v), J.removeClass(v);
        }
        function M(d) {
          var b = {};
          (b.crossOver = 0),
            (b.animation = d.el.attr("data-animation") || "slide"),
            b.animation === "outin" &&
              ((b.animation = "cross"), (b.crossOver = 0.5)),
            (b.easing = d.el.attr("data-easing") || "ease");
          var _ = d.el.attr("data-duration");
          if (
            ((b.duration = _ != null ? parseInt(_, 10) : 500),
            D(d.el.attr("data-infinite")) && (b.infinite = !0),
            D(d.el.attr("data-disable-swipe")) && (b.disableSwipe = !0),
            D(d.el.attr("data-hide-arrows"))
              ? (b.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            D(d.el.attr("data-autoplay")))
          ) {
            (b.autoplay = !0),
              (b.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (b.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var p = "mousedown" + u + " touchstart" + u;
            a ||
              d.el.off(p).one(p, function () {
                L(d);
              });
          }
          var H = d.right.width();
          (b.edge = H ? H + 40 : 100), (d.config = b);
        }
        function D(d) {
          return d === "1" || d === "true";
        }
        function F(d, b, _) {
          return function (p) {
            if (b) d.hasFocus[_] = b;
            else if (
              e.contains(d.el.get(0), p.relatedTarget) ||
              ((d.hasFocus[_] = b),
              (d.hasFocus.mouse && _ === "keyboard") ||
                (d.hasFocus.keyboard && _ === "mouse"))
            )
              return;
            b
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && L(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && U(d));
          };
        }
        function X(d, b) {
          return function (_) {
            switch (_.keyCode) {
              case ft.SPACE:
              case ft.ENTER:
                return b(d)(), _.preventDefault(), _.stopPropagation();
            }
          };
        }
        function K(d) {
          return function () {
            k(d, { index: d.index - 1, vector: -1 });
          };
        }
        function Y(d) {
          return function () {
            k(d, { index: d.index + 1, vector: 1 });
          };
        }
        function te(d, b) {
          var _ = null;
          b === d.slides.length && (I(), Z(d)),
            t.each(d.anchors, function (p, H) {
              e(p.els).each(function ($, J) {
                e(J).index() === b && (_ = H);
              });
            }),
            _ != null && k(d, { index: _, immediate: !0 });
        }
        function U(d) {
          L(d);
          var b = d.config,
            _ = b.timerMax;
          (_ && d.timerCount++ > _) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (Y(d)(), U(d));
            }, b.delay));
        }
        function L(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function m(d) {
          return function (b, _) {
            _ = _ || {};
            var p = d.config;
            if (a && b.type === "setting") {
              if (_.select === "prev") return K(d)();
              if (_.select === "next") return Y(d)();
              if ((M(d), Z(d), _.select == null)) return;
              te(d, _.select);
              return;
            }
            if (b.type === "swipe")
              return p.disableSwipe || St.env("editor")
                ? void 0
                : _.direction === "left"
                ? Y(d)()
                : _.direction === "right"
                ? K(d)()
                : void 0;
            if (d.nav.has(b.target).length) {
              var H = e(b.target).index();
              if (
                (b.type === "click" && k(d, { index: H }), b.type === "keydown")
              )
                switch (b.keyCode) {
                  case ft.ENTER:
                  case ft.SPACE: {
                    k(d, { index: H }), b.preventDefault();
                    break;
                  }
                  case ft.ARROW_LEFT:
                  case ft.ARROW_UP: {
                    N(d.nav, Math.max(H - 1, 0)), b.preventDefault();
                    break;
                  }
                  case ft.ARROW_RIGHT:
                  case ft.ARROW_DOWN: {
                    N(d.nav, Math.min(H + 1, d.pages)), b.preventDefault();
                    break;
                  }
                  case ft.HOME: {
                    N(d.nav, 0), b.preventDefault();
                    break;
                  }
                  case ft.END: {
                    N(d.nav, d.pages), b.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(d, b) {
          var _ = d.children().eq(b).focus();
          d.children().not(_);
        }
        function k(d, b) {
          b = b || {};
          var _ = d.config,
            p = d.anchors;
          d.previous = d.index;
          var H = b.index,
            $ = {};
          H < 0
            ? ((H = p.length - 1),
              _.infinite &&
                (($.x = -d.endX), ($.from = 0), ($.to = p[0].width)))
            : H >= p.length &&
              ((H = 0),
              _.infinite &&
                (($.x = p[p.length - 1].width),
                ($.from = -p[p.length - 1].x),
                ($.to = $.from - $.x))),
            (d.index = H);
          var J = d.nav
            .children()
            .eq(H)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(J)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            _.hideArrows &&
              (d.index === p.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ue = d.offsetX || 0,
            be = (d.offsetX = -p[d.index].x),
            oe = { x: be, opacity: 1, visibility: "" },
            h = e(p[d.index].els),
            B = e(p[d.previous] && p[d.previous].els),
            Q = d.slides.not(h),
            j = _.animation,
            fe = _.easing,
            Fe = Math.round(_.duration),
            He = b.vector || (d.index > d.previous ? 1 : -1),
            l = "opacity " + Fe + "ms " + fe,
            T = "transform " + Fe + "ms " + fe;
          if (
            (h.find(Bb).removeAttr("tabindex"),
            h.removeAttr("aria-hidden"),
            h.find("*").removeAttr("aria-hidden"),
            Q.find(Bb).attr("tabindex", "-1"),
            Q.attr("aria-hidden", "true"),
            Q.find("*").attr("aria-hidden", "true"),
            a || (h.each(g.intro), Q.each(g.outro)),
            b.immediate && !w)
          ) {
            n(h).set(oe), A();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${H + 1} of ${p.length}.`),
            j === "cross")
          ) {
            var x = Math.round(Fe - Fe * _.crossOver),
              R = Math.round(Fe - x);
            (l = "opacity " + x + "ms " + fe),
              n(B).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(h)
                .set({ visibility: "", x: be, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .wait(R)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if (j === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(h)
                .set({ visibility: "", x: be, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if (j === "over") {
            (oe = { x: d.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(h)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: be + p[d.index].width * He,
                })
                .add(T)
                .start({ x: be })
                .then(A);
            return;
          }
          _.infinite && $.x
            ? (n(d.slides.not(B))
                .set({ visibility: "", x: $.x })
                .add(T)
                .start({ x: be }),
              n(B).set({ visibility: "", x: $.from }).add(T).start({ x: $.to }),
              (d.shifted = B))
            : (_.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ue }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(T).start({ x: be }));
          function A() {
            (h = e(p[d.index].els)),
              (Q = d.slides.not(h)),
              j !== "slide" && (oe.visibility = "hidden"),
              n(Q).set(oe);
          }
        }
        function V(d, b) {
          var _ = e.data(b, u);
          if (_) {
            if (G(_)) return Z(_);
            a && W(_) && Z(_);
          }
        }
        function Z(d) {
          var b = 1,
            _ = 0,
            p = 0,
            H = 0,
            $ = d.maskWidth,
            J = $ - d.config.edge;
          J < 0 && (J = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (be, oe) {
              p - _ > J &&
                (b++,
                (_ += $),
                (d.anchors[b - 1] = { els: [], x: p, width: 0 })),
                (H = e(oe).outerWidth(!0)),
                (p += H),
                (d.anchors[b - 1].width += H),
                d.anchors[b - 1].els.push(oe);
              var h = be + 1 + " of " + d.slides.length;
              e(oe).attr("aria-label", h), e(oe).attr("role", "group");
            }),
            (d.endX = p),
            a && (d.pages = null),
            d.nav.length && d.pages !== b && ((d.pages = b), re(d));
          var ue = d.index;
          ue >= b && (ue = b - 1), k(d, { immediate: !0, index: ue });
        }
        function re(d) {
          var b = [],
            _,
            p = d.el.attr("data-nav-spacing");
          p && (p = parseFloat(p) + "px");
          for (var H = 0, $ = d.pages; H < $; H++)
            (_ = e(f)),
              _.attr("aria-label", "Show slide " + (H + 1) + " of " + $)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && _.text(H + 1),
              p != null && _.css({ "margin-left": p, "margin-right": p }),
              b.push(_);
          d.nav.empty().append(b);
        }
        function G(d) {
          var b = d.mask.width();
          return d.maskWidth !== b ? ((d.maskWidth = b), !0) : !1;
        }
        function W(d) {
          var b = 0;
          return (
            d.slides.each(function (_, p) {
              b += e(p).outerWidth(!0);
            }),
            d.slidesWidth !== b ? ((d.slidesWidth = b), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var jb = c((uz, Xb) => {
    "use strict";
    var Ct = ke(),
      kU = br();
    Ct.define(
      "tabs",
      (Xb.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Ct.env,
          s = a.safari,
          u = a(),
          f = "data-w-tab",
          E = "data-w-pane",
          v = ".w-tabs",
          g = "w--current",
          y = "w--tab-active",
          w = kU.triggers,
          I = !1;
        (t.ready = t.design = t.preview = S),
          (t.redraw = function () {
            (I = !0), S(), (I = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(C), O());
          });
        function S() {
          (o = u && Ct.env("design")),
            (i = n.find(v)),
            i.length &&
              (i.each(M), Ct.env("preview") && !I && i.each(C), O(), q());
        }
        function O() {
          Ct.redraw.off(t.redraw);
        }
        function q() {
          Ct.redraw.on(t.redraw);
        }
        function C(U, L) {
          var m = e.data(L, v);
          m &&
            (m.links && m.links.each(w.reset),
            m.panes && m.panes.each(w.reset));
        }
        function M(U, L) {
          var m = v.substr(1) + "-" + U,
            N = e(L),
            k = e.data(L, v);
          if (
            (k || (k = e.data(L, v, { el: N, config: {} })),
            (k.current = null),
            (k.tabIdentifier = m + "-" + f),
            (k.paneIdentifier = m + "-" + E),
            (k.menu = N.children(".w-tab-menu")),
            (k.links = k.menu.children(".w-tab-link")),
            (k.content = N.children(".w-tab-content")),
            (k.panes = k.content.children(".w-tab-pane")),
            k.el.off(v),
            k.links.off(v),
            k.menu.attr("role", "tablist"),
            k.links.attr("tabindex", "-1"),
            D(k),
            !o)
          ) {
            k.links.on("click" + v, X(k)), k.links.on("keydown" + v, K(k));
            var V = k.links.filter("." + g),
              Z = V.attr(f);
            Z && Y(k, { tab: Z, immediate: !0 });
          }
        }
        function D(U) {
          var L = {};
          L.easing = U.el.attr("data-easing") || "ease";
          var m = parseInt(U.el.attr("data-duration-in"), 10);
          m = L.intro = m === m ? m : 0;
          var N = parseInt(U.el.attr("data-duration-out"), 10);
          (N = L.outro = N === N ? N : 0),
            (L.immediate = !m && !N),
            (U.config = L);
        }
        function F(U) {
          var L = U.current;
          return Array.prototype.findIndex.call(
            U.links,
            (m) => m.getAttribute(f) === L,
            null
          );
        }
        function X(U) {
          return function (L) {
            L.preventDefault();
            var m = L.currentTarget.getAttribute(f);
            m && Y(U, { tab: m });
          };
        }
        function K(U) {
          return function (L) {
            var m = F(U),
              N = L.key,
              k = {
                ArrowLeft: m - 1,
                ArrowUp: m - 1,
                ArrowRight: m + 1,
                ArrowDown: m + 1,
                End: U.links.length - 1,
                Home: 0,
              };
            if (N in k) {
              L.preventDefault();
              var V = k[N];
              V === -1 && (V = U.links.length - 1),
                V === U.links.length && (V = 0);
              var Z = U.links[V],
                re = Z.getAttribute(f);
              re && Y(U, { tab: re });
            }
          };
        }
        function Y(U, L) {
          L = L || {};
          var m = U.config,
            N = m.easing,
            k = L.tab;
          if (k !== U.current) {
            U.current = k;
            var V;
            U.links.each(function (_, p) {
              var H = e(p);
              if (L.immediate || m.immediate) {
                var $ = U.panes[_];
                p.id || (p.id = U.tabIdentifier + "-" + _),
                  $.id || ($.id = U.paneIdentifier + "-" + _),
                  (p.href = "#" + $.id),
                  p.setAttribute("role", "tab"),
                  p.setAttribute("aria-controls", $.id),
                  p.setAttribute("aria-selected", "false"),
                  $.setAttribute("role", "tabpanel"),
                  $.setAttribute("aria-labelledby", p.id);
              }
              p.getAttribute(f) === k
                ? ((V = p),
                  H.addClass(g)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(w.intro))
                : H.hasClass(g) &&
                  H.removeClass(g)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(w.outro);
            });
            var Z = [],
              re = [];
            U.panes.each(function (_, p) {
              var H = e(p);
              p.getAttribute(f) === k ? Z.push(p) : H.hasClass(y) && re.push(p);
            });
            var G = e(Z),
              W = e(re);
            if (L.immediate || m.immediate) {
              G.addClass(y).each(w.intro),
                W.removeClass(y),
                I || Ct.redraw.up();
              return;
            } else {
              var d = window.scrollX,
                b = window.scrollY;
              V.focus(), window.scrollTo(d, b);
            }
            W.length && m.outro
              ? (W.each(w.outro),
                r(W)
                  .add("opacity " + m.outro + "ms " + N, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => te(m, W, G)))
              : te(m, W, G);
          }
        }
        function te(U, L, m) {
          if (
            (L.removeClass(y).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            m.addClass(y).each(w.intro),
            Ct.redraw.up(),
            !U.intro)
          )
            return r(m).set({ opacity: 1 });
          r(m)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + U.intro + "ms " + U.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Xs();
  zs();
  Ys();
  Zs();
  br();
  Rb();
  Nb();
  qb();
  Mb();
  Gb();
  Ub();
  Hb();
  jb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
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
      eventTypeId: "PAGE_START",
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
        id: "6625065aaabd00c3125e1838",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710787536173,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
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
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710787845262,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
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
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710876003780,
    },
    "e-7": {
      id: "e-7",
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
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-qus-box",
        originalId: "8b6761ad-42bb-fe3e-5f85-63788757850c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-qus-box",
          originalId: "8b6761ad-42bb-fe3e-5f85-63788757850c",
          appliesTo: "CLASS",
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
      createdOn: 1710877092120,
    },
    "e-8": {
      id: "e-8",
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
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-qus-box",
        originalId: "8b6761ad-42bb-fe3e-5f85-63788757850c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-qus-box",
          originalId: "8b6761ad-42bb-fe3e-5f85-63788757850c",
          appliesTo: "CLASS",
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
      createdOn: 1710877092120,
    },
    "e-9": {
      id: "e-9",
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
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".p-faq-qus-wrap.close",
        originalId:
          "6625065aaabd00c3125e1891|4240512a-1d22-cc0d-1fce-26eba8c590c5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".p-faq-qus-wrap.close",
          originalId:
            "6625065aaabd00c3125e1891|4240512a-1d22-cc0d-1fce-26eba8c590c5",
          appliesTo: "CLASS",
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
      createdOn: 1711028364682,
    },
    "e-10": {
      id: "e-10",
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
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".p-faq-qus-wrap.close",
        originalId:
          "6625065aaabd00c3125e1891|4240512a-1d22-cc0d-1fce-26eba8c590c5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".p-faq-qus-wrap.close",
          originalId:
            "6625065aaabd00c3125e1891|4240512a-1d22-cc0d-1fce-26eba8c590c5",
          appliesTo: "CLASS",
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
      createdOn: 1711028364683,
    },
    "e-11": {
      id: "e-11",
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
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".p-faq-qus-wrap.open",
        originalId:
          "6625065aaabd00c3125e1891|d06c9247-b0fe-ed65-3e66-c9af12a653df",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".p-faq-qus-wrap.open",
          originalId:
            "6625065aaabd00c3125e1891|d06c9247-b0fe-ed65-3e66-c9af12a653df",
          appliesTo: "CLASS",
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
      createdOn: 1711028571339,
    },
    "e-12": {
      id: "e-12",
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
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".p-faq-qus-wrap.open",
        originalId:
          "6625065aaabd00c3125e1891|d06c9247-b0fe-ed65-3e66-c9af12a653df",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".p-faq-qus-wrap.open",
          originalId:
            "6625065aaabd00c3125e1891|d06c9247-b0fe-ed65-3e66-c9af12a653df",
          appliesTo: "CLASS",
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
      createdOn: 1711028571339,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
          appliesTo: "ELEMENT",
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
      createdOn: 1711264739972,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|8f08eaa7-8832-9ba2-9130-252b21910b03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|8f08eaa7-8832-9ba2-9130-252b21910b03",
          appliesTo: "ELEMENT",
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
      createdOn: 1711264859631,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|20a3d0c0-eebc-8a81-1230-0aedbf5aecc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|20a3d0c0-eebc-8a81-1230-0aedbf5aecc0",
          appliesTo: "ELEMENT",
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
      createdOn: 1711264890006,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|688b1da2-a18f-5714-e847-25d7a4bac677",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|688b1da2-a18f-5714-e847-25d7a4bac677",
          appliesTo: "ELEMENT",
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
      createdOn: 1711264916566,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f1c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f1c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265005302,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265015509,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "99b477ab-8b23-7f13-b0c8-cd6c6f505f32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265032094,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|4adbf008-37ee-fa38-6641-84f5c7ff48a6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|4adbf008-37ee-fa38-6641-84f5c7ff48a6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265063072,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|df80ea7e-67fc-1e2f-f431-f5fa18a20584",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|df80ea7e-67fc-1e2f-f431-f5fa18a20584",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265080144,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c0b19bea-1576-4104-8478-387ebc0f697b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c0b19bea-1576-4104-8478-387ebc0f697b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265104150,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|de41f4ca-4a77-1351-36bb-7e97f5cdd84f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|de41f4ca-4a77-1351-36bb-7e97f5cdd84f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265166285,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|da7e3d6c-ee4e-47d9-5e0b-2c07d06a9b55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|da7e3d6c-ee4e-47d9-5e0b-2c07d06a9b55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265181751,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-list",
        originalId: "8b6761ad-42bb-fe3e-5f85-637887578502",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-list",
          originalId: "8b6761ad-42bb-fe3e-5f85-637887578502",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711265219782,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e187b|afb98508-1e9d-7542-d4c9-88316094049f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e187b|afb98508-1e9d-7542-d4c9-88316094049f",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266147046,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e187b|269c64fe-fcc3-767d-3f8f-032019742a2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e187b|269c64fe-fcc3-767d-3f8f-032019742a2e",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266155068,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".experiences-list",
        originalId: "5ab68303-9263-033d-dab0-9288206e87bd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".experiences-list",
          originalId: "5ab68303-9263-033d-dab0-9288206e87bd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266178377,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1891|afb98508-1e9d-7542-d4c9-88316094049f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1891|afb98508-1e9d-7542-d4c9-88316094049f",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266217523,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1891|00f8f19d-c77e-d92b-15af-e687777c9931",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1891|00f8f19d-c77e-d92b-15af-e687777c9931",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266230707,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1891|d832e7ce-ed1a-6a9d-b947-550b56ce1a3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1891|d832e7ce-ed1a-6a9d-b947-550b56ce1a3e",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266239955,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1891|5228f2b0-25ca-1612-6a16-da6248b2b30b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1891|5228f2b0-25ca-1612-6a16-da6248b2b30b",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266248443,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1891|d9d2a8be-3cec-6388-b10c-adbb1b3718ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1891|d9d2a8be-3cec-6388-b10c-adbb1b3718ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266295540,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cp-details-wrap",
        originalId:
          "6625065aaabd00c3125e1891|d9d2a8be-3cec-6388-b10c-adbb1b3718fd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cp-details-wrap",
          originalId:
            "6625065aaabd00c3125e1891|d9d2a8be-3cec-6388-b10c-adbb1b3718fd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266313843,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd1571c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd1571c",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266342836,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd15727",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd15727",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266353394,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd15740",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185c|669220db-6488-b857-b904-02774cd15740",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266365323,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185c|e1a9e084-f251-4e7b-bfca-5f6471c7ce4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185c|e1a9e084-f251-4e7b-bfca-5f6471c7ce4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266394097,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef021",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef021",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266470307,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185e|078af000-5758-36d0-e8d2-0dce3d85af07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185e|078af000-5758-36d0-e8d2-0dce3d85af07",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266590144,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185e|5dbb9e45-354d-9cfd-92fc-461761c5c076",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185e|5dbb9e45-354d-9cfd-92fc-461761c5c076",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266601347,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185e|90fd5dc5-1364-6d3f-19f3-ceb75a14dd6e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185e|90fd5dc5-1364-6d3f-19f3-ceb75a14dd6e",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266613171,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185d|9b4c4ab1-3f24-09f6-7617-e72e79f6f374",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185d|9b4c4ab1-3f24-09f6-7617-e72e79f6f374",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266641264,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185d|3f5c7117-22f7-b53a-a203-559c483f8fb0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185d|3f5c7117-22f7-b53a-a203-559c483f8fb0",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266649304,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185d|4e37cba0-a5ec-48bd-2c08-617c3b63c843",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185d|4e37cba0-a5ec-48bd-2c08-617c3b63c843",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266656592,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185b|02496a64-a918-6f57-91bb-e106ba0412a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185b|02496a64-a918-6f57-91bb-e106ba0412a5",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266694234,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185b|9aeaa4e6-0d3c-03d5-9420-f4cc1c8b8fcc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185b|9aeaa4e6-0d3c-03d5-9420-f4cc1c8b8fcc",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266700735,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185b|847192af-f5cb-1471-5550-f6e311d00a61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185b|847192af-f5cb-1471-5550-f6e311d00a61",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266707794,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185b|c9a9b10b-ae2b-4d4d-4969-fce234b8493a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185b|c9a9b10b-ae2b-4d4d-4969-fce234b8493a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266714627,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185b|7dacfb79-51e7-d1d4-c596-e70432726a7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185b|7dacfb79-51e7-d1d4-c596-e70432726a7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266744425,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1859|f9431cf4-198d-c986-3230-2fc784b48694",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1859|f9431cf4-198d-c986-3230-2fc784b48694",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266770946,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1859|13450e2d-ceac-f088-0afe-afa948c3b697",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1859|13450e2d-ceac-f088-0afe-afa948c3b697",
          appliesTo: "ELEMENT",
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
      createdOn: 1711266781119,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1859|bb3bf57f-88fe-949e-fef5-861d6a2401fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1859|bb3bf57f-88fe-949e-fef5-861d6a2401fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266790743,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1859|9321b1ff-a5d2-c57f-2709-9a288ae6cb56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1859|9321b1ff-a5d2-c57f-2709-9a288ae6cb56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711266809695,
    },
    "e-125": {
      id: "e-125",
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
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-link",
        originalId:
          "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef022",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-link",
          originalId:
            "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef022",
          appliesTo: "CLASS",
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
      createdOn: 1711267540903,
    },
    "e-126": {
      id: "e-126",
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
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-link",
        originalId:
          "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef022",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-link",
          originalId:
            "6625065aaabd00c3125e185c|076e7b4b-4284-833a-5eb2-c442f2fef022",
          appliesTo: "CLASS",
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
      createdOn: 1711267540904,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-128",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1838|29b9aab0-9217-99c1-7c07-c5b9e552eb24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1838|29b9aab0-9217-99c1-7c07-c5b9e552eb24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711785616305,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-130",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582c3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582c3",
          appliesTo: "ELEMENT",
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
      createdOn: 1711790926693,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582cc",
          appliesTo: "ELEMENT",
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
      createdOn: 1711790926693,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1858|bcb54293-f570-81f5-37a6-20dd135582de",
          appliesTo: "ELEMENT",
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
      createdOn: 1711790926693,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c53734759",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c53734759",
          appliesTo: "ELEMENT",
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
      createdOn: 1711791876483,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c53734764",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c53734764",
          appliesTo: "ELEMENT",
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
      createdOn: 1711791876483,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c5373477d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e185a|d25e2f23-06d4-419c-f349-388c5373477d",
          appliesTo: "ELEMENT",
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
      createdOn: 1711791876483,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711905925031,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cc8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cc8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711905956012,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cd3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0dfcccb2-1651-6e0b-a2fc-df9b64101cd3",
          appliesTo: "ELEMENT",
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
      createdOn: 1711905969140,
    },
    "e-147": {
      id: "e-147",
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
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".learn-more-link",
        originalId:
          "6625065aaabd00c3125e1856|17aa3842-794b-432b-9bbd-c220565eef5c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|17aa3842-794b-432b-9bbd-c220565eef5c",
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
      createdOn: 1713415442717,
    },
    "e-148": {
      id: "e-148",
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
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".learn-more-link",
        originalId:
          "6625065aaabd00c3125e1856|17aa3842-794b-432b-9bbd-c220565eef5c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|17aa3842-794b-432b-9bbd-c220565eef5c",
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
      createdOn: 1713415442719,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588286430,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|b0a99651-5aa1-27d6-df4a-4e023a04e156",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|b0a99651-5aa1-27d6-df4a-4e023a04e156",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588298443,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|b0a99651-5aa1-27d6-df4a-4e023a04e15b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|b0a99651-5aa1-27d6-df4a-4e023a04e15b",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588307050,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|cb48b06a-eb4d-33d7-2be0-c7a47d0dd6a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|cb48b06a-eb4d-33d7-2be0-c7a47d0dd6a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713588319323,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|fd04bbc8-de5a-34bf-37d7-d498dbb0f5de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|fd04bbc8-de5a-34bf-37d7-d498dbb0f5de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713588334618,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|74519d0d-ac74-b4cb-e5e5-6a92b6e88a03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|74519d0d-ac74-b4cb-e5e5-6a92b6e88a03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713588353706,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1856|e88ae3eb-2386-bef1-3d62-753b0ff903e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1856|e88ae3eb-2386-bef1-3d62-753b0ff903e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1713588365507,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1893|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1893|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588406107,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1893|f253435d-65ff-143f-2be8-92a0d4414329",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1893|f253435d-65ff-143f-2be8-92a0d4414329",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588418082,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6625065aaabd00c3125e1892|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6625065aaabd00c3125e1892|5dfdf62f-796f-99bc-1e46-ea6789a523fa",
          appliesTo: "ELEMENT",
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
      createdOn: 1713588481626,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".changelog-card",
        originalId:
          "6625065aaabd00c3125e1892|ff5e6145-a04c-cce5-e2bb-0261c5f6814d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".changelog-card",
          originalId:
            "6625065aaabd00c3125e1892|ff5e6145-a04c-cce5-e2bb-0261c5f6814d",
          appliesTo: "CLASS",
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
      createdOn: 1713588497948,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Hero Tag Moving",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6625065aaabd00c3125e1838|64eb98b7-ca79-aad9-c657-09d6858dd69c",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6625065aaabd00c3125e1838|6d95d7cd-6898-6908-08a8-c19a230e3ce8",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  id: "6625065aaabd00c3125e1838|64eb98b7-ca79-aad9-c657-09d6858dd69c",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  id: "6625065aaabd00c3125e1838|6d95d7cd-6898-6908-08a8-c19a230e3ce8",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6625065aaabd00c3125e1838|64eb98b7-ca79-aad9-c657-09d6858dd69c",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6625065aaabd00c3125e1838|6d95d7cd-6898-6908-08a8-c19a230e3ce8",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710787540509,
    },
    "a-2": {
      id: "a-2",
      title: "Tag Moving",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6625065aaabd00c3125e1838|e77083a3-e93c-af07-dfc5-8f750a62efa7",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6625065aaabd00c3125e1838|01a71e9f-9f06-fc49-85b2-5324fbf0f44a",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: {
                  id: "6625065aaabd00c3125e1838|e77083a3-e93c-af07-dfc5-8f750a62efa7",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: {
                  id: "6625065aaabd00c3125e1838|01a71e9f-9f06-fc49-85b2-5324fbf0f44a",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6625065aaabd00c3125e1838|e77083a3-e93c-af07-dfc5-8f750a62efa7",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6625065aaabd00c3125e1838|01a71e9f-9f06-fc49-85b2-5324fbf0f44a",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710787540509,
    },
    "a-3": {
      id: "a-3",
      title: "Logos Moving",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f1" },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f8" },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f1" },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f8" },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f1" },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "cb513b7d-d877-43ca-5a7b-85ddc4b2b5f8" },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710787540509,
    },
    "a-4": {
      id: "a-4",
      title: "FAQ Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".faq-ans-box",
                  selectorGuids: ["a7e823f8-7aa6-41b8-45a1-f966ea74fe70"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["d32736ec-ed00-c4cf-55cc-f4387732b8d9"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box",
                  selectorGuids: ["784be012-2a58-21b4-2eb3-f45aa63bb5d7"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 0.06,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".faq-ans-box",
                  selectorGuids: ["a7e823f8-7aa6-41b8-45a1-f966ea74fe70"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["d32736ec-ed00-c4cf-55cc-f4387732b8d9"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box",
                  selectorGuids: ["784be012-2a58-21b4-2eb3-f45aa63bb5d7"],
                },
                globalSwatchId: "--orange",
                rValue: 242,
                bValue: 30,
                gValue: 78,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710877095372,
    },
    "a-5": {
      id: "a-5",
      title: "FAQ Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".faq-ans-box",
                  selectorGuids: ["a7e823f8-7aa6-41b8-45a1-f966ea74fe70"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["d32736ec-ed00-c4cf-55cc-f4387732b8d9"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box",
                  selectorGuids: ["784be012-2a58-21b4-2eb3-f45aa63bb5d7"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 0.06,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710877095372,
    },
    "a-6": {
      id: "a-6",
      title: "Price FAQ Open 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".p-faq-ans-wrap",
                  selectorGuids: ["bdbb377e-bfa6-a1ca-dff7-190e4c385f18"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 0.06,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".p-faq-ans-wrap",
                  selectorGuids: ["bdbb377e-bfa6-a1ca-dff7-190e4c385f18"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "--orange",
                rValue: 242,
                bValue: 30,
                gValue: 78,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710877095372,
    },
    "a-7": {
      id: "a-7",
      title: "Price FAQ Close 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".p-faq-ans-wrap",
                  selectorGuids: ["bdbb377e-bfa6-a1ca-dff7-190e4c385f18"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 0.06,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710877095372,
    },
    "a-9": {
      id: "a-9",
      title: "Price FAQ Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "--orange",
                rValue: 242,
                bValue: 30,
                gValue: 78,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".p-faq-ans-wrap",
                  selectorGuids: ["bdbb377e-bfa6-a1ca-dff7-190e4c385f18"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 0.06,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710877095372,
    },
    "a-8": {
      id: "a-8",
      title: "Price FAQ Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".p-faq-ans-wrap",
                  selectorGuids: ["bdbb377e-bfa6-a1ca-dff7-190e4c385f18"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow.price",
                  selectorGuids: [
                    "d32736ec-ed00-c4cf-55cc-f4387732b8d9",
                    "d7c77f16-9794-b648-ddc5-4332797c9952",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow-box.price",
                  selectorGuids: [
                    "784be012-2a58-21b4-2eb3-f45aa63bb5d7",
                    "3a4d9fa2-98b6-7adf-b524-fca47e228c70",
                  ],
                },
                globalSwatchId: "--orange",
                rValue: 242,
                bValue: 30,
                gValue: 78,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710877095372,
    },
    "a-10": {
      id: "a-10",
      title: "âž¡ï¸ Slide Up 2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
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
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711264760530,
    },
    "a-11": {
      id: "a-11",
      title: "âž¡ï¸ Slide Up 3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
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
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711264760530,
    },
    "a-13": {
      id: "a-13",
      title: "âž¡ï¸ Slide Up 5s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
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
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711264760530,
    },
    "a-12": {
      id: "a-12",
      title: "âž¡ï¸ Slide Up 4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
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
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6625065aaabd00c3125e1838|071dc18a-8424-63e7-a352-1db9ec80c2a5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711264760530,
    },
    "a-16": {
      id: "a-16",
      title: "Blog Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["56542a38-3fce-ec90-e84e-0ea6492ae91c"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1711267544607,
    },
    "a-17": {
      id: "a-17",
      title: "Blog Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-image",
                  selectorGuids: ["56542a38-3fce-ec90-e84e-0ea6492ae91c"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1711267544607,
    },
    "a-18": {
      id: "a-18",
      title: "Learn More Link Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".learn-more-icon",
                  selectorGuids: ["a317523d-1478-84da-93f5-3d95374b0bde"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713415447792,
    },
    "a-19": {
      id: "a-19",
      title: "Learn More Link Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outCubic",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".learn-more-icon",
                  selectorGuids: ["a317523d-1478-84da-93f5-3d95374b0bde"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1713415447792,
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
