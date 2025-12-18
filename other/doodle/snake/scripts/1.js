(function () {
      var b = window.addEventListener;
      window.addEventListener = function (a, c, d) {
        "unload" !== a && b(a, c, d);
      };
    }).call(this);
    (function () {
      window.google = { kEI: "jzq8YbyzD9uq0PEPs_OpgAQ" };
      google.sn = "web";
      google.kHL = "en";
    })();
    (function () {
      var f = this || self;
      var h,
        k = [];
      function l(a) {
        for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));)
          a = a.parentNode;
        return b || h;
      }
      function m(a) {
        for (
          var b = null;
          a && (!a.getAttribute || !(b = a.getAttribute("leid")));

        )
          a = a.parentNode;
        return b;
      }
      function n(a, b, c, d, g) {
        var e = "";
        c ||
          -1 !== b.search("&ei=") ||
          ((e = "&ei=" + l(d)),
            -1 === b.search("&lei=") && (d = m(d)) && (e += "&lei=" + d));
        d = "";
        !c &&
          f._cshid &&
          -1 === b.search("&cshid=") &&
          "slh" !== a &&
          (d = "&cshid=" + f._cshid);
        c =
          c ||
          "/" +
          (g || "gen_204") +
          "?atyp=i&ct=" +
          a +
          "&cad=" +
          b +
          e +
          "&zx=" +
          Date.now() +
          d;
        /^http:/i.test(c) &&
          "https:" === window.location.protocol &&
          (google.ml && google.ml(Error("a"), !1, { src: c, glmm: 1 }),
            (c = ""));
        return c;
      }
      h = google.kEI;
      google.getEI = l;
      google.getLEI = m;
      google.ml = function () {
        return null;
      };
      google.log = function (a, b, c, d, g) {
        if ((c = n(a, b, c, d, g))) {
          a = new Image();
          var e = k.length;
          k[e] = a;
          a.onerror =
            a.onload =
            a.onabort =
            function () {
              delete k[e];
            };
          a.src = c;
        }
      };
      google.logUrl = n;
    }).call(this);
    (function () {
      google.y = {};
      google.sy = [];
      google.x = function (a, b) {
        if (a) var c = a.id;
        else {
          do c = Math.random();
          while (google.y[c]);
        }
        google.y[c] = [a, b];
        return !1;
      };
      google.sx = function (a) {
        google.sy.push(a);
      };
      google.lm = [];
      google.plm = function (a) {
        google.lm.push.apply(google.lm, a);
      };
      google.lq = [];
      google.load = function (a, b, c) {
        google.lq.push([[a], b, c]);
      };
      google.loadAll = function (a, b) {
        google.lq.push([a, b]);
      };
      google.bx = !1;
      google.lx = function () { };
    }).call(this);
    google.f = {};
    (function () {
      document.documentElement.addEventListener(
        "submit",
        function (b) {
          var a;
          if ((a = b.target)) {
            var c = a.getAttribute("data-submitfalse");
            a = "1" === c || ("q" === c && !a.elements.q.value) ? !0 : !1;
          } else a = !1;
          a && (b.preventDefault(), b.stopPropagation());
        },
        !0
      );
      document.documentElement.addEventListener(
        "click",
        function (b) {
          var a;
          a: {
            for (
              a = b.target;
              a && a !== document.documentElement;
              a = a.parentElement
            )
              if ("A" === a.tagName) {
                a = "1" === a.getAttribute("data-nohref");
                break a;
              }
            a = !1;
          }
          a && b.preventDefault();
        },
        !0
      );
    }).call(this);
    (function () {
      google.hs = { h: true, sie: false };
    })();
    (function () {
      var b = [
        function () {
          google.tick && google.tick("load", "dcl");
        },
      ];
      google.dclc = function (a) {
        b.length ? b.push(a) : a();
      };
      function c() {
        for (var a = b.shift(); a;) a(), (a = b.shift());
      }
      window.addEventListener
        ? (document.addEventListener("DOMContentLoaded", c, !1),
          window.addEventListener("load", c, !1))
        : window.attachEvent && window.attachEvent("onload", c);
    }).call(this);
    (function () {
      var b = [];
      google.jsc = {
        xx: b,
        x: function (a) {
          b.push(a);
        },
        mm: [],
        m: function (a) {
          google.jsc.mm.length || (google.jsc.mm = a);
        },
      };
    }).call(this);
    (function () {
      var e = this || self;

      var f = {};
      function w(a, b) {
        if (null === b) return !1;
        if ("contains" in a && 1 == b.nodeType) return a.contains(b);
        if ("compareDocumentPosition" in a)
          return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a;
      }
      var x = function (a, b) {
        return function (d) {
          d || (d = window.event);
          return b.call(a, d);
        };
      },
        z =
          "undefined" != typeof navigator &&
          /Macintosh/.test(navigator.userAgent),
        A = function () {
          this._mouseEventsPrevented = !0;
        };
      var F = function (a) {
        this.g = a;
        this.h = [];
      },
        G = function (a) {
          for (var b = 0; b < a.h.length; ++b) {
            var d = a.g,
              c = a.h[b];
            d.removeEventListener
              ? d.removeEventListener(c.eventType, c.o, c.capture)
              : d.detachEvent && d.detachEvent("on" + c.eventType, c.o);
          }
          a.h = [];
        };
      var H = e._jsa || {};
      H._cfc = void 0;
      H._aeh = void 0;
      var I = function () {
        this.h = this.g = null;
      },
        K = function (a, b) {
          var d = J;
          d.g = a;
          d.h = b;
          return d;
        };
      I.prototype.i = function () {
        var a = this.g;
        this.g && this.g != this.h
          ? (this.g = this.g.__owner || this.g.parentNode)
          : (this.g = null);
        return a;
      };
      var L = function () {
        this.j = [];
        this.g = 0;
        this.h = null;
        this.l = !1;
      };
      L.prototype.i = function () {
        if (this.l) return J.i();
        if (this.g != this.j.length) {
          var a = this.j[this.g];
          this.g++;
          a != this.h &&
            a &&
            a.__owner &&
            ((this.l = !0), K(a.__owner, this.h));
          return a;
        }
        return null;
      };
      var J = new I(),
        M = new L();
      var Q = function () {
        this.s = [];
        this.g = [];
        this.h = [];
        this.l = {};
        this.i = null;
        this.j = [];
        N(this, "_custom");
      },
        R = function (a) {
          return String.prototype.trim
            ? a.trim()
            : a.replace(/^\s+/, "").replace(/\s+$/, "");
        },
        ha = function (a, b) {
          return function l(c, g) {
            g = void 0 === g ? !0 : g;
            var k = b;
            if ("_custom" == k) {
              k = c.detail;
              if (!k || !k._type) return;
              k = k._type;
            }
            var m = k;
            "click" == m &&
              ((z && c.metaKey) ||
                (!z && c.ctrlKey) ||
                2 == c.which ||
                (null == c.which && 4 == c.button) ||
                c.shiftKey)
              ? (m = "clickmod")
              : "keydown" == m && !c.a11ysc && (m = "maybe_click");
            var u = c.srcElement || c.target;
            k = S(m, c, u, "", null);
            if (c.path) {
              M.j = c.path;
              M.g = 0;
              M.h = this;
              M.l = !1;
              var O = M;
            } else O = K(u, this);
            for (var r; (r = O.i());) {
              var h = r;
              var p = void 0;
              r = h;
              var q = m,
                aa = c;
              var n = r.__jsaction;
              if (!n) {
                var y;
                n = null;
                "getAttribute" in r && (n = r.getAttribute("jsaction"));
                if ((y = n)) {
                  n = f[y];
                  if (!n) {
                    n = {};
                    for (
                      var B = y.split(ba), ca = B ? B.length : 0, C = 0;
                      C < ca;
                      C++
                    ) {
                      var v = B[C];
                      if (v) {
                        var D = v.indexOf(":"),
                          P = -1 != D,
                          ea = P ? R(v.substr(0, D)) : da;
                        v = P ? R(v.substr(D + 1)) : v;
                        n[ea] = v;
                      }
                    }
                    f[y] = n;
                  }
                  r.__jsaction = n;
                } else (n = fa), (r.__jsaction = n);
              }
              "maybe_click" == q && n.click
                ? ((p = q), (q = "click"))
                : "clickkey" == q
                  ? (q = "click")
                  : "click" != q || n.click || (q = "clickonly");
              p =
                H._cfc && n.click
                  ? H._cfc(r, aa, n, q, p)
                  : {
                    eventType: p ? p : q,
                    action: n[q] || "",
                    event: null,
                    ignore: !1,
                  };
              k = S(
                p.eventType,
                p.event || c,
                u,
                p.action || "",
                h,
                k.timeStamp
              );
              if (p.ignore || p.action) break;
            }
            k &&
              "touchend" == k.eventType &&
              (k.event._preventMouseEvents = A);
            if (p && p.action) {
              if ("mouseenter" == m || "mouseleave" == m)
                if (
                  ((u = c.relatedTarget),
                    !(
                      ("mouseover" == c.type && "mouseenter" == m) ||
                      ("mouseout" == c.type && "mouseleave" == m)
                    ) ||
                    (u && (u === h || w(h, u))))
                )
                  (k.action = ""), (k.actionElement = null);
                else {
                  m = {};
                  for (var t in c)
                    "function" !== typeof c[t] &&
                      "srcElement" !== t &&
                      "target" !== t &&
                      (m[t] = c[t]);
                  m.type =
                    "mouseover" == c.type ? "mouseenter" : "mouseleave";
                  m.target = m.srcElement = h;
                  m.bubbles = !1;
                  k.event = m;
                  k.targetElement = h;
                }
            } else (k.action = ""), (k.actionElement = null);
            h = k;
            a.i &&
              !h.event.a11ysgd &&
              ((t = S(
                h.eventType,
                h.event,
                h.targetElement,
                h.action,
                h.actionElement,
                h.timeStamp
              )),
                "clickonly" == t.eventType && (t.eventType = "click"),
                a.i(t, !0));
            if (h.actionElement || "maybe_click" == h.eventType) {
              if (a.i) {
                if (
                  (!h.actionElement ||
                    "A" != h.actionElement.tagName ||
                    ("click" != h.eventType && "clickmod" != h.eventType) ||
                    (c.preventDefault
                      ? c.preventDefault()
                      : (c.returnValue = !1)),
                    (c = a.i(h)) && g)
                ) {
                  l.call(this, c, !1);
                  return;
                }
              } else {
                if ((g = e.document) && !g.createEvent && g.createEventObject)
                  try {
                    var E = g.createEventObject(c);
                  } catch (ka) {
                    E = c;
                  }
                else E = c;
                h.event = E;
                a.j.push(h);
              }
              H._aeh && H._aeh(h);
            }
          };
        },
        S = function (a, b, d, c, g, l) {
          return {
            eventType: a,
            event: b,
            targetElement: d,
            action: c,
            actionElement: g,
            timeStamp: l || Date.now(),
          };
        },
        ia = function (a, b) {
          return function (d) {
            var c = a,
              g = b,
              l = !1;
            "mouseenter" == c
              ? (c = "mouseover")
              : "mouseleave" == c && (c = "mouseout");
            if (d.addEventListener) {
              if ("focus" == c || "blur" == c || "error" == c || "load" == c)
                l = !0;
              d.addEventListener(c, g, l);
            } else
              d.attachEvent &&
                ("focus" == c
                  ? (c = "focusin")
                  : "blur" == c && (c = "focusout"),
                  (g = x(d, g)),
                  d.attachEvent("on" + c, g));
            return { eventType: c, o: g, capture: l };
          };
        },
        N = function (a, b) {
          if (!a.l.hasOwnProperty(b)) {
            var d = ha(a, b),
              c = ia(b, d);
            a.l[b] = d;
            a.s.push(c);
            for (d = 0; d < a.g.length; ++d) {
              var g = a.g[d];
              g.h.push(c.call(null, g.g));
            }
            "click" == b && N(a, "keydown");
          }
        };
      Q.prototype.o = function (a) {
        return this.l[a];
      };
      var W = function (a, b) {
        var d = new F(b);
        a: {
          for (var c = 0; c < a.g.length; c++)
            if (T(a.g[c].g, b)) {
              b = !0;
              break a;
            }
          b = !1;
        }
        if (b) return a.h.push(d), d;
        U(a, d);
        a.g.push(d);
        V(a);
        return d;
      },
        V = function (a) {
          for (
            var b = a.h.concat(a.g), d = [], c = [], g = 0;
            g < a.g.length;
            ++g
          ) {
            var l = a.g[g];
            X(l, b) ? (d.push(l), G(l)) : c.push(l);
          }
          for (g = 0; g < a.h.length; ++g)
            (l = a.h[g]), X(l, b) ? d.push(l) : (c.push(l), U(a, l));
          a.g = c;
          a.h = d;
        },
        U = function (a, b) {
          var d = b.g;
          ja && (d.style.cursor = "pointer");
          for (d = 0; d < a.s.length; ++d) b.h.push(a.s[d].call(null, b.g));
        },
        Y = function (a, b) {
          a.i = b;
          a.j && (0 < a.j.length && b(a.j), (a.j = null));
        },
        X = function (a, b) {
          for (var d = 0; d < b.length; ++d)
            if (b[d].g != a.g && T(b[d].g, a.g)) return !0;
          return !1;
        },
        T = function (a, b) {
          for (; a != b && b.parentNode;) b = b.parentNode;
          return a == b;
        },
        ja =
          "undefined" != typeof navigator &&
          /iPhone|iPad|iPod/.test(navigator.userAgent),
        ba = /\s*;\s*/,
        da = "click",
        fa = {};
      var Z = new Q();
      W(Z, window.document.documentElement);
      N(Z, "click");
      N(Z, "focus");
      N(Z, "focusin");
      N(Z, "blur");
      N(Z, "focusout");
      N(Z, "error");
      N(Z, "load");
      N(Z, "auxclick");
      N(Z, "change");
      N(Z, "dblclick");
      N(Z, "input");
      N(Z, "keyup");
      N(Z, "keydown");
      N(Z, "keypress");
      N(Z, "mousedown");
      N(Z, "mouseenter");
      N(Z, "mouseleave");
      N(Z, "mouseout");
      N(Z, "mouseover");
      N(Z, "mouseup");
      N(Z, "paste");
      N(Z, "touchstart");
      N(Z, "touchend");
      N(Z, "touchcancel");
      N(Z, "speech");
      (function (a) {
        google.jsad = function (b) {
          Y(a, b);
        };
        google.jsaac = function (b) {
          return W(a, b);
        };
        google.jsarc = function (b) {
          G(b);
          for (var d = !1, c = 0; c < a.g.length; ++c)
            if (a.g[c] === b) {
              a.g.splice(c, 1);
              d = !0;
              break;
            }
          if (!d)
            for (d = 0; d < a.h.length; ++d)
              if (a.h[d] === b) {
                a.h.splice(d, 1);
                break;
              }
          V(a);
        };
      })(Z);
      e.gws_wizbind = (0,
        function (a) {
          return {
            trigger: function (b) {
              var d = a.o(b.type);
              d || (N(a, b.type), (d = a.o(b.type)));
              var c = b.target || b.srcElement;
              d && d.call(c.ownerDocument.documentElement, b);
            },
            bind: function (b) {
              Y(a, b);
            },
          };
        })(Z);
    }).call(this);