(function () {
      window.google.erd = { jsr: 1, bv: 1493, sd: true, de: true };
    })();
    (function () {
      var sdo = false;
      var mei = 10;
      var f = this || self;
      var g,
        h,
        k = null !== (g = f.mei) && void 0 !== g ? g : 1,
        l = null !== (h = f.sdo) && void 0 !== h ? h : !0,
        p = 0,
        q,
        r = google.erd,
        u = r.jsr;
      google.ml = function (a, b, d, m, c) {
        c = void 0 === c ? 2 : c;
        b && (q = a && a.message);
        if (google.dl) return google.dl(a, c, d), null;
        if (0 > u) {
          window.console && console.error(a, d);
          if (-2 === u) throw a;
          b = !1;
        } else
          b =
            !a ||
              !a.message ||
              "Error loading script" === a.message ||
              (p >= k && !m)
              ? !1
              : !0;
        if (!b) return null;
        p++;
        d = d || {};
        var e = c;
        c = encodeURIComponent;
        b = "/gen_204?atyp=i&ei=" + c(google.kEI);
        google.kEXPI && (b += "&jexpid=" + c(google.kEXPI));
        b +=
          "&srcpg=" +
          c(google.sn) +
          "&jsr=" +
          c(r.jsr) +
          "&bver=" +
          c(r.bv) +
          ("&jsel=" + e);
        e = a.lineNumber;
        void 0 !== e && (b += "&line=" + e);
        var n = a.fileName;
        n &&
          ((b += "&script=" + c(n)),
            e &&
            n ===
            "https://binbashbanana.github.io/gfiles/gfiles/html5/snake/inframe.html" &&
            ((e = document.documentElement.outerHTML.split("\n")[e]),
              (b +=
                "&cad=" + c(e ? e.substring(0, 300) : "No script found."))));
        for (var t in d) (b += "&"), (b += c(t)), (b += "="), (b += c(d[t]));
        b = b + "&emsg=" + c(a.name + ": " + a.message);
        b = b + "&jsst=" + c(a.stack || "N/A");
        12288 <= b.length && (b = b.substr(0, 12288));
        a = b;
        m || google.log(0, "", a);
        return a;
      };
      window.onerror = function (a, b, d, m, c) {
        q !== a &&
          ((a = c instanceof Error ? c : Error(a)),
            void 0 === d || "lineNumber" in a || (a.lineNumber = d),
            void 0 === b || "fileName" in a || (a.fileName = b),
            google.ml(
              a,
              !1,
              void 0,
              !1,
              "SyntaxError" === a.name ||
                "SyntaxError" === a.message.substring(0, 11)
                ? 2
                : 0
            ));
        q = null;
        l && p >= k && (window.onerror = null);
      };
    })();