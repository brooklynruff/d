(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function s(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
function Ts(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const ne = {}
  , Mt = []
  , Ye = () => {}
  , $r = () => !1
  , Dn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Ns = e => e.startsWith("onUpdate:")
  , de = Object.assign
  , Ds = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Ri = Object.prototype.hasOwnProperty
  , Q = (e, t) => Ri.call(e, t)
  , B = Array.isArray
  , Lt = e => Mn(e) === "[object Map]"
  , qr = e => Mn(e) === "[object Set]"
  , k = e => typeof e == "function"
  , ae = e => typeof e == "string"
  , vt = e => typeof e == "symbol"
  , se = e => e !== null && typeof e == "object"
  , Yr = e => (se(e) || k(e)) && k(e.then) && k(e.catch)
  , zr = Object.prototype.toString
  , Mn = e => zr.call(e)
  , Ci = e => Mn(e).slice(8, -1)
  , Jr = e => Mn(e) === "[object Object]"
  , Ln = e => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , $t = Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Fn = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
  , Ai = /-\w/g
  , mt = Fn(e => e.replace(Ai, t => t.slice(1).toUpperCase()))
  , Oi = /\B([A-Z])/g
  , At = Fn(e => e.replace(Oi, "-$1").toLowerCase())
  , Qr = Fn(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Xn = Fn(e => e ? `on${Qr(e)}` : "")
  , gt = (e, t) => !Object.is(e, t)
  , Zn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Xr = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , Ii = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let Zs;
const jn = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dn(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , r = ae(s) ? Di(s) : dn(s);
            if (r)
                for (const o in r)
                    t[o] = r[o]
        }
        return t
    } else if (ae(e) || se(e))
        return e
}
const Pi = /;(?![^(]*\))/g
  , Ti = /:([^]+)/
  , Ni = /\/\*[^]*?\*\//g;
function Di(e) {
    const t = {};
    return e.replace(Ni, "").split(Pi).forEach(n => {
        if (n) {
            const s = n.split(Ti);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function Vn(e) {
    let t = "";
    if (ae(e))
        t = e;
    else if (B(e))
        for (let n = 0; n < e.length; n++) {
            const s = Vn(e[n]);
            s && (t += s + " ")
        }
    else if (se(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Mi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Li = Ts(Mi);
function Zr(e) {
    return !!e || e === ""
}
const eo = e => !!(e && e.__v_isRef === !0)
  , qt = e => ae(e) ? e : e == null ? "" : B(e) || se(e) && (e.toString === zr || !k(e.toString)) ? eo(e) ? qt(e.value) : JSON.stringify(e, to, 2) : String(e)
  , to = (e, t) => eo(t) ? to(e, t.value) : Lt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,r], o) => (n[es(s, o) + " =>"] = r,
    n), {})
} : qr(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => es(n))
} : vt(t) ? es(t) : se(t) && !B(t) && !Jr(t) ? String(t) : t
  , es = (e, t="") => {
    var n;
    return vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
let he;
class no {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = he,
        !t && he && (this.index = (he.scopes || (he.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = he;
            try {
                return he = this,
                t()
            } finally {
                he = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = he,
        he = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (he = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function so(e) {
    return new no(e)
}
function ro() {
    return he
}
function Fi(e, t=!1) {
    he && he.cleanups.push(e)
}
let te;
const ts = new WeakSet;
class oo {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        he && he.active && he.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        ts.has(this) && (ts.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lo(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        er(this),
        co(this);
        const t = te
          , n = Fe;
        te = this,
        Fe = !0;
        try {
            return this.fn()
        } finally {
            ao(this),
            te = t,
            Fe = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Fs(t);
            this.deps = this.depsTail = void 0,
            er(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        ps(this) && this.run()
    }
    get dirty() {
        return ps(this)
    }
}
let io = 0, Yt, zt;
function lo(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = zt,
        zt = e;
        return
    }
    e.next = Yt,
    Yt = e
}
function Ms() {
    io++
}
function Ls() {
    if (--io > 0)
        return;
    if (zt) {
        let t = zt;
        for (zt = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; Yt; ) {
        let t = Yt;
        for (Yt = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (s) {
                    e || (e = s)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function co(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function ao(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r),
        Fs(s),
        ji(s)) : t = s,
        s.dep.activeLink = s.prevActiveLink,
        s.prevActiveLink = void 0,
        s = r
    }
    e.deps = t,
    e.depsTail = n
}
function ps(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (uo(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function uo(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === sn) || (e.globalVersion = sn,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = te
      , s = Fe;
    te = e,
    Fe = !0;
    try {
        co(e);
        const r = e.fn(e._value);
        (t.version === 0 || gt(r, e._value)) && (e.flags |= 128,
        e._value = r,
        t.version++)
    } catch (r) {
        throw t.version++,
        r
    } finally {
        te = n,
        Fe = s,
        ao(e),
        e.flags &= -3
    }
}
function Fs(e, t=!1) {
    const {dep: n, prevSub: s, nextSub: r} = e;
    if (s && (s.nextSub = r,
    e.prevSub = void 0),
    r && (r.prevSub = s,
    e.nextSub = void 0),
    n.subs === e && (n.subs = s,
    !s && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            Fs(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function ji(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Fe = !0;
const fo = [];
function nt() {
    fo.push(Fe),
    Fe = !1
}
function st() {
    const e = fo.pop();
    Fe = e === void 0 ? !0 : e
}
function er(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = te;
        te = void 0;
        try {
            t()
        } finally {
            te = n
        }
    }
}
let sn = 0;
class Vi {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class js {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!te || !Fe || te === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== te)
            n = this.activeLink = new Vi(te,this),
            te.deps ? (n.prevDep = te.depsTail,
            te.depsTail.nextDep = n,
            te.depsTail = n) : te.deps = te.depsTail = n,
            ho(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = s),
            n.prevDep = te.depsTail,
            n.nextDep = void 0,
            te.depsTail.nextDep = n,
            te.depsTail = n,
            te.deps === n && (te.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++,
        sn++,
        this.notify(t)
    }
    notify(t) {
        Ms();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Ls()
        }
    }
}
function ho(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep)
                ho(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const En = new WeakMap
  , Rt = Symbol("")
  , gs = Symbol("")
  , rn = Symbol("");
function pe(e, t, n) {
    if (Fe && te) {
        let s = En.get(e);
        s || En.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new js),
        r.map = s,
        r.key = n),
        r.track()
    }
}
function et(e, t, n, s, r, o) {
    const i = En.get(e);
    if (!i) {
        sn++;
        return
    }
    const l = c => {
        c && c.trigger()
    }
    ;
    if (Ms(),
    t === "clear")
        i.forEach(l);
    else {
        const c = B(e)
          , d = c && Ln(n);
        if (c && n === "length") {
            const u = Number(s);
            i.forEach( (h, g) => {
                (g === "length" || g === rn || !vt(g) && g >= u) && l(h)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
            d && l(i.get(rn)),
            t) {
            case "add":
                c ? d && l(i.get("length")) : (l(i.get(Rt)),
                Lt(e) && l(i.get(gs)));
                break;
            case "delete":
                c || (l(i.get(Rt)),
                Lt(e) && l(i.get(gs)));
                break;
            case "set":
                Lt(e) && l(i.get(Rt));
                break
            }
    }
    Ls()
}
function Bi(e, t) {
    const n = En.get(e);
    return n && n.get(t)
}
function Pt(e) {
    const t = Y(e);
    return t === e ? t : (pe(t, "iterate", rn),
    Pe(e) ? t : t.map(Ve))
}
function Bn(e) {
    return pe(e = Y(e), "iterate", rn),
    e
}
function ut(e, t) {
    return rt(e) ? jt(tt(e) ? Ve(t) : t) : Ve(t)
}
const Hi = {
    __proto__: null,
    [Symbol.iterator]() {
        return ns(this, Symbol.iterator, e => ut(this, e))
    },
    concat(...e) {
        return Pt(this).concat(...e.map(t => B(t) ? Pt(t) : t))
    },
    entries() {
        return ns(this, "entries", e => (e[1] = ut(this, e[1]),
        e))
    },
    every(e, t) {
        return Qe(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Qe(this, "filter", e, t, n => n.map(s => ut(this, s)), arguments)
    },
    find(e, t) {
        return Qe(this, "find", e, t, n => ut(this, n), arguments)
    },
    findIndex(e, t) {
        return Qe(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Qe(this, "findLast", e, t, n => ut(this, n), arguments)
    },
    findLastIndex(e, t) {
        return Qe(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Qe(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return ss(this, "includes", e)
    },
    indexOf(...e) {
        return ss(this, "indexOf", e)
    },
    join(e) {
        return Pt(this).join(e)
    },
    lastIndexOf(...e) {
        return ss(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Qe(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return kt(this, "pop")
    },
    push(...e) {
        return kt(this, "push", e)
    },
    reduce(e, ...t) {
        return tr(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return tr(this, "reduceRight", e, t)
    },
    shift() {
        return kt(this, "shift")
    },
    some(e, t) {
        return Qe(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return kt(this, "splice", e)
    },
    toReversed() {
        return Pt(this).toReversed()
    },
    toSorted(e) {
        return Pt(this).toSorted(e)
    },
    toSpliced(...e) {
        return Pt(this).toSpliced(...e)
    },
    unshift(...e) {
        return kt(this, "unshift", e)
    },
    values() {
        return ns(this, "values", e => ut(this, e))
    }
};
function ns(e, t, n) {
    const s = Bn(e)
      , r = s[t]();
    return s !== e && !Pe(e) && (r._next = r.next,
    r.next = () => {
        const o = r._next();
        return o.done || (o.value = n(o.value)),
        o
    }
    ),
    r
}
const Ui = Array.prototype;
function Qe(e, t, n, s, r, o) {
    const i = Bn(e)
      , l = i !== e && !Pe(e)
      , c = i[t];
    if (c !== Ui[t]) {
        const h = c.apply(e, o);
        return l ? Ve(h) : h
    }
    let d = n;
    i !== e && (l ? d = function(h, g) {
        return n.call(this, ut(e, h), g, e)
    }
    : n.length > 2 && (d = function(h, g) {
        return n.call(this, h, g, e)
    }
    ));
    const u = c.call(i, d, s);
    return l && r ? r(u) : u
}
function tr(e, t, n, s) {
    const r = Bn(e);
    let o = n;
    return r !== e && (Pe(e) ? n.length > 3 && (o = function(i, l, c) {
        return n.call(this, i, l, c, e)
    }
    ) : o = function(i, l, c) {
        return n.call(this, i, ut(e, l), c, e)
    }
    ),
    r[t](o, ...s)
}
function ss(e, t, n) {
    const s = Y(e);
    pe(s, "iterate", rn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Hn(n[0]) ? (n[0] = Y(n[0]),
    s[t](...n)) : r
}
function kt(e, t, n=[]) {
    nt(),
    Ms();
    const s = Y(e)[t].apply(e, n);
    return Ls(),
    st(),
    s
}
const ki = Ts("__proto__,__v_isRef,__isVue")
  , po = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(vt));
function Gi(e) {
    vt(e) || (e = String(e));
    const t = Y(this);
    return pe(t, "has", e),
    t.hasOwnProperty(e)
}
class go {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        if (n === "__v_skip")
            return t.__v_skip;
        const r = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return s === (r ? o ? Zi : yo : o ? vo : _o).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const i = B(t);
        if (!r) {
            let c;
            if (i && (c = Hi[n]))
                return c;
            if (n === "hasOwnProperty")
                return Gi
        }
        const l = Reflect.get(t, n, le(t) ? t : s);
        if ((vt(n) ? po.has(n) : ki(n)) || (r || pe(t, "get", n),
        o))
            return l;
        if (le(l)) {
            const c = i && Ln(n) ? l : l.value;
            return r && se(c) ? _s(c) : c
        }
        return se(l) ? r ? _s(l) : hn(l) : l
    }
}
class mo extends go {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let o = t[n];
        const i = B(t) && Ln(n);
        if (!this._isShallow) {
            const d = rt(o);
            if (!Pe(s) && !rt(s) && (o = Y(o),
            s = Y(s)),
            !i && le(o) && !le(s))
                return d || (o.value = s),
                !0
        }
        const l = i ? Number(n) < t.length : Q(t, n)
          , c = Reflect.set(t, n, s, le(t) ? t : r);
        return t === Y(r) && (l ? gt(s, o) && et(t, "set", n, s) : et(t, "add", n, s)),
        c
    }
    deleteProperty(t, n) {
        const s = Q(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && et(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!vt(n) || !po.has(n)) && pe(t, "has", n),
        s
    }
    ownKeys(t) {
        return pe(t, "iterate", B(t) ? "length" : Rt),
        Reflect.ownKeys(t)
    }
}
class Ki extends go {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Wi = new mo
  , $i = new Ki
  , qi = new mo(!0);
const ms = e => e
  , _n = e => Reflect.getPrototypeOf(e);
function Yi(e, t, n) {
    return function(...s) {
        const r = this.__v_raw
          , o = Y(r)
          , i = Lt(o)
          , l = e === "entries" || e === Symbol.iterator && i
          , c = e === "keys" && i
          , d = r[e](...s)
          , u = n ? ms : t ? jt : Ve;
        return !t && pe(o, "iterate", c ? gs : Rt),
        de(Object.create(d), {
            next() {
                const {value: h, done: g} = d.next();
                return g ? {
                    value: h,
                    done: g
                } : {
                    value: l ? [u(h[0]), u(h[1])] : u(h),
                    done: g
                }
            }
        })
    }
}
function vn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function zi(e, t) {
    const n = {
        get(r) {
            const o = this.__v_raw
              , i = Y(o)
              , l = Y(r);
            e || (gt(r, l) && pe(i, "get", r),
            pe(i, "get", l));
            const {has: c} = _n(i)
              , d = t ? ms : e ? jt : Ve;
            if (c.call(i, r))
                return d(o.get(r));
            if (c.call(i, l))
                return d(o.get(l));
            o !== i && o.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && pe(Y(r), "iterate", Rt),
            r.size
        },
        has(r) {
            const o = this.__v_raw
              , i = Y(o)
              , l = Y(r);
            return e || (gt(r, l) && pe(i, "has", r),
            pe(i, "has", l)),
            r === l ? o.has(r) : o.has(r) || o.has(l)
        },
        forEach(r, o) {
            const i = this
              , l = i.__v_raw
              , c = Y(l)
              , d = t ? ms : e ? jt : Ve;
            return !e && pe(c, "iterate", Rt),
            l.forEach( (u, h) => r.call(o, d(u), d(h), i))
        }
    };
    return de(n, e ? {
        add: vn("add"),
        set: vn("set"),
        delete: vn("delete"),
        clear: vn("clear")
    } : {
        add(r) {
            !t && !Pe(r) && !rt(r) && (r = Y(r));
            const o = Y(this);
            return _n(o).has.call(o, r) || (o.add(r),
            et(o, "add", r, r)),
            this
        },
        set(r, o) {
            !t && !Pe(o) && !rt(o) && (o = Y(o));
            const i = Y(this)
              , {has: l, get: c} = _n(i);
            let d = l.call(i, r);
            d || (r = Y(r),
            d = l.call(i, r));
            const u = c.call(i, r);
            return i.set(r, o),
            d ? gt(o, u) && et(i, "set", r, o) : et(i, "add", r, o),
            this
        },
        delete(r) {
            const o = Y(this)
              , {has: i, get: l} = _n(o);
            let c = i.call(o, r);
            c || (r = Y(r),
            c = i.call(o, r)),
            l && l.call(o, r);
            const d = o.delete(r);
            return c && et(o, "delete", r, void 0),
            d
        },
        clear() {
            const r = Y(this)
              , o = r.size !== 0
              , i = r.clear();
            return o && et(r, "clear", void 0, void 0),
            i
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = Yi(r, e, t)
    }
    ),
    n
}
function Vs(e, t) {
    const n = zi(e, t);
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(Q(n, r) && r in s ? n : s, r, o)
}
const Ji = {
    get: Vs(!1, !1)
}
  , Qi = {
    get: Vs(!1, !0)
}
  , Xi = {
    get: Vs(!0, !1)
};
const _o = new WeakMap
  , vo = new WeakMap
  , yo = new WeakMap
  , Zi = new WeakMap;
function el(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function tl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : el(Ci(e))
}
function hn(e) {
    return rt(e) ? e : Bs(e, !1, Wi, Ji, _o)
}
function bo(e) {
    return Bs(e, !1, qi, Qi, vo)
}
function _s(e) {
    return Bs(e, !0, $i, Xi, yo)
}
function Bs(e, t, n, s, r) {
    if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = tl(e);
    if (o === 0)
        return e;
    const i = r.get(e);
    if (i)
        return i;
    const l = new Proxy(e,o === 2 ? s : n);
    return r.set(e, l),
    l
}
function tt(e) {
    return rt(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function rt(e) {
    return !!(e && e.__v_isReadonly)
}
function Pe(e) {
    return !!(e && e.__v_isShallow)
}
function Hn(e) {
    return e ? !!e.__v_raw : !1
}
function Y(e) {
    const t = e && e.__v_raw;
    return t ? Y(t) : e
}
function Hs(e) {
    return !Q(e, "__v_skip") && Object.isExtensible(e) && Xr(e, "__v_skip", !0),
    e
}
const Ve = e => se(e) ? hn(e) : e
  , jt = e => se(e) ? _s(e) : e;
function le(e) {
    return e ? e.__v_isRef === !0 : !1
}
function on(e) {
    return wo(e, !1)
}
function nl(e) {
    return wo(e, !0)
}
function wo(e, t) {
    return le(e) ? e : new sl(e,t)
}
class sl {
    constructor(t, n) {
        this.dep = new js,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : Y(t),
        this._value = n ? t : Ve(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , s = this.__v_isShallow || Pe(t) || rt(t);
        t = s ? t : Y(t),
        gt(t, n) && (this._rawValue = t,
        this._value = s ? t : Ve(t),
        this.dep.trigger())
    }
}
function Re(e) {
    return le(e) ? e.value : e
}
const rl = {
    get: (e, t, n) => t === "__v_raw" ? e : Re(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return le(r) && !le(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function xo(e) {
    return tt(e) ? e : new Proxy(e,rl)
}
function ol(e) {
    const t = B(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = ll(e, n);
    return t
}
class il {
    constructor(t, n, s) {
        this._object = t,
        this._key = n,
        this._defaultValue = s,
        this.__v_isRef = !0,
        this._value = void 0,
        this._raw = Y(t);
        let r = !0
          , o = t;
        if (!B(t) || !Ln(String(n)))
            do
                r = !Hn(o) || Pe(o);
            while (r && (o = o.__v_raw));
        this._shallow = r
    }
    get value() {
        let t = this._object[this._key];
        return this._shallow && (t = Re(t)),
        this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        if (this._shallow && le(this._raw[this._key])) {
            const n = this._object[this._key];
            if (le(n)) {
                n.value = t;
                return
            }
        }
        this._object[this._key] = t
    }
    get dep() {
        return Bi(this._raw, this._key)
    }
}
function ll(e, t, n) {
    return new il(e,t,n)
}
class cl {
    constructor(t, n, s) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new js(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = sn - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = s
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && te !== this)
            return lo(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return uo(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function al(e, t, n=!1) {
    let s, r;
    return k(e) ? s = e : (s = e.get,
    r = e.set),
    new cl(s,r,n)
}
const yn = {}
  , Rn = new WeakMap;
let St;
function ul(e, t=!1, n=St) {
    if (n) {
        let s = Rn.get(n);
        s || Rn.set(n, s = []),
        s.push(e)
    }
}
function fl(e, t, n=ne) {
    const {immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c} = n
      , d = D => r ? D : Pe(D) || r === !1 || r === 0 ? pt(D, 1) : pt(D);
    let u, h, g, m, x = !1, S = !1;
    if (le(e) ? (h = () => e.value,
    x = Pe(e)) : tt(e) ? (h = () => d(e),
    x = !0) : B(e) ? (S = !0,
    x = e.some(D => tt(D) || Pe(D)),
    h = () => e.map(D => {
        if (le(D))
            return D.value;
        if (tt(D))
            return d(D);
        if (k(D))
            return c ? c(D, 2) : D()
    }
    )) : k(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
        if (g) {
            nt();
            try {
                g()
            } finally {
                st()
            }
        }
        const D = St;
        St = u;
        try {
            return c ? c(e, 3, [m]) : e(m)
        } finally {
            St = D
        }
    }
    : h = Ye,
    t && r) {
        const D = h
          , G = r === !0 ? 1 / 0 : r;
        h = () => pt(D(), G)
    }
    const T = ro()
      , I = () => {
        u.stop(),
        T && T.active && Ds(T.effects, u)
    }
    ;
    if (o && t) {
        const D = t;
        t = (...G) => {
            D(...G),
            I()
        }
    }
    let N = S ? new Array(e.length).fill(yn) : yn;
    const M = D => {
        if (!(!(u.flags & 1) || !u.dirty && !D))
            if (t) {
                const G = u.run();
                if (r || x || (S ? G.some( (fe, X) => gt(fe, N[X])) : gt(G, N))) {
                    g && g();
                    const fe = St;
                    St = u;
                    try {
                        const X = [G, N === yn ? void 0 : S && N[0] === yn ? [] : N, m];
                        N = G,
                        c ? c(t, 3, X) : t(...X)
                    } finally {
                        St = fe
                    }
                }
            } else
                u.run()
    }
    ;
    return l && l(M),
    u = new oo(h),
    u.scheduler = i ? () => i(M, !1) : M,
    m = D => ul(D, !1, u),
    g = u.onStop = () => {
        const D = Rn.get(u);
        if (D) {
            if (c)
                c(D, 4);
            else
                for (const G of D)
                    G();
            Rn.delete(u)
        }
    }
    ,
    t ? s ? M(!0) : N = u.run() : i ? i(M.bind(null, !0), !0) : u.run(),
    I.pause = u.pause.bind(u),
    I.resume = u.resume.bind(u),
    I.stop = I,
    I
}
function pt(e, t=1 / 0, n) {
    if (t <= 0 || !se(e) || e.__v_skip || (n = n || new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    le(e))
        pt(e.value, t, n);
    else if (B(e))
        for (let s = 0; s < e.length; s++)
            pt(e[s], t, n);
    else if (qr(e) || Lt(e))
        e.forEach(s => {
            pt(s, t, n)
        }
        );
    else if (Jr(e)) {
        for (const s in e)
            pt(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && pt(e[s], t, n)
    }
    return e
}
function pn(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        Un(r, t, n)
    }
}
function ze(e, t, n, s) {
    if (k(e)) {
        const r = pn(e, t, n, s);
        return r && Yr(r) && r.catch(o => {
            Un(o, t, n)
        }
        ),
        r
    }
    if (B(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++)
            r.push(ze(e[o], t, n, s));
        return r
    }
}
function Un(e, t, n, s=!0) {
    const r = t ? t.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: i} = t && t.appContext.config || ne;
    if (t) {
        let l = t.parent;
        const c = t.proxy
          , d = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const u = l.ec;
            if (u) {
                for (let h = 0; h < u.length; h++)
                    if (u[h](e, c, d) === !1)
                        return
            }
            l = l.parent
        }
        if (o) {
            nt(),
            pn(o, null, 10, [e, c, d]),
            st();
            return
        }
    }
    dl(e, n, r, s, i)
}
function dl(e, t, n, s=!0, r=!1) {
    if (r)
        throw e;
    console.error(e)
}
const ve = [];
let We = -1;
const Ft = [];
let ft = null
  , Nt = 0;
const So = Promise.resolve();
let Cn = null;
function kn(e) {
    const t = Cn || So;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function hl(e) {
    let t = We + 1
      , n = ve.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , r = ve[s]
          , o = ln(r);
        o < e || o === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}
function Us(e) {
    if (!(e.flags & 1)) {
        const t = ln(e)
          , n = ve[ve.length - 1];
        !n || !(e.flags & 2) && t >= ln(n) ? ve.push(e) : ve.splice(hl(t), 0, e),
        e.flags |= 1,
        Eo()
    }
}
function Eo() {
    Cn || (Cn = So.then(Co))
}
function pl(e) {
    B(e) ? Ft.push(...e) : ft && e.id === -1 ? ft.splice(Nt + 1, 0, e) : e.flags & 1 || (Ft.push(e),
    e.flags |= 1),
    Eo()
}
function nr(e, t, n=We + 1) {
    for (; n < ve.length; n++) {
        const s = ve[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid)
                continue;
            ve.splice(n, 1),
            n--,
            s.flags & 4 && (s.flags &= -2),
            s(),
            s.flags & 4 || (s.flags &= -2)
        }
    }
}
function Ro(e) {
    if (Ft.length) {
        const t = [...new Set(Ft)].sort( (n, s) => ln(n) - ln(s));
        if (Ft.length = 0,
        ft) {
            ft.push(...t);
            return
        }
        for (ft = t,
        Nt = 0; Nt < ft.length; Nt++) {
            const n = ft[Nt];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        ft = null,
        Nt = 0
    }
}
const ln = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Co(e) {
    try {
        for (We = 0; We < ve.length; We++) {
            const t = ve[We];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            pn(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; We < ve.length; We++) {
            const t = ve[We];
            t && (t.flags &= -2)
        }
        We = -1,
        ve.length = 0,
        Ro(),
        Cn = null,
        (ve.length || Ft.length) && Co()
    }
}
let qe = null
  , Ao = null;
function An(e) {
    const t = qe;
    return qe = e,
    Ao = e && e.type.__scopeId || null,
    t
}
function gl(e, t=qe, n) {
    if (!t || e._n)
        return e;
    const s = (...r) => {
        s._d && Pn(-1);
        const o = An(t);
        let i;
        try {
            i = e(...r)
        } finally {
            An(o),
            s._d && Pn(1)
        }
        return i
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function wt(e, t, n, s) {
    const r = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[s];
        c && (nt(),
        ze(c, n, 8, [e.el, l, e, t]),
        st())
    }
}
function bn(e, t) {
    if (ye) {
        let n = ye.provides;
        const s = ye.parent && ye.parent.provides;
        s === n && (n = ye.provides = Object.create(s)),
        n[e] = t
    }
}
function je(e, t, n=!1) {
    const s = Zo();
    if (s || Ct) {
        let r = Ct ? Ct._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && k(t) ? t.call(s && s.proxy) : t
    }
}
function ml() {
    return !!(Zo() || Ct)
}
const _l = Symbol.for("v-scx")
  , vl = () => je(_l);
function Jt(e, t, n) {
    return Oo(e, t, n)
}
function Oo(e, t, n=ne) {
    const {immediate: s, deep: r, flush: o, once: i} = n
      , l = de({}, n)
      , c = t && s || !t && o !== "post";
    let d;
    if (an) {
        if (o === "sync") {
            const m = vl();
            d = m.__watcherHandles || (m.__watcherHandles = [])
        } else if (!c) {
            const m = () => {}
            ;
            return m.stop = Ye,
            m.resume = Ye,
            m.pause = Ye,
            m
        }
    }
    const u = ye;
    l.call = (m, x, S) => ze(m, u, x, S);
    let h = !1;
    o === "post" ? l.scheduler = m => {
        Oe(m, u && u.suspense)
    }
    : o !== "sync" && (h = !0,
    l.scheduler = (m, x) => {
        x ? m() : Us(m)
    }
    ),
    l.augmentJob = m => {
        t && (m.flags |= 4),
        h && (m.flags |= 2,
        u && (m.id = u.uid,
        m.i = u))
    }
    ;
    const g = fl(e, t, l);
    return an && (d ? d.push(g) : c && g()),
    g
}
function yl(e, t, n) {
    const s = this.proxy
      , r = ae(e) ? e.includes(".") ? Io(s, e) : () => s[e] : e.bind(s, s);
    let o;
    k(t) ? o = t : (o = t.handler,
    n = t);
    const i = gn(this)
      , l = Oo(r, o.bind(s), n);
    return i(),
    l
}
function Io(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++)
            s = s[n[r]];
        return s
    }
}
const bl = Symbol("_vte")
  , wl = e => e.__isTeleport
  , xl = Symbol("_leaveCb");
function ks(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    ks(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Po(e, t) {
    return k(e) ? de({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function To(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const On = new WeakMap;
function Qt(e, t, n, s, r=!1) {
    if (B(e)) {
        e.forEach( (x, S) => Qt(x, t && (B(t) ? t[S] : t), n, s, r));
        return
    }
    if (Xt(s) && !r) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Qt(e, t, n, s.component.subTree);
        return
    }
    const o = s.shapeFlag & 4 ? qs(s.component) : s.el
      , i = r ? null : o
      , {i: l, r: c} = e
      , d = t && t.r
      , u = l.refs === ne ? l.refs = {} : l.refs
      , h = l.setupState
      , g = Y(h)
      , m = h === ne ? $r : x => Q(g, x);
    if (d != null && d !== c) {
        if (sr(t),
        ae(d))
            u[d] = null,
            m(d) && (h[d] = null);
        else if (le(d)) {
            d.value = null;
            const x = t;
            x.k && (u[x.k] = null)
        }
    }
    if (k(c))
        pn(c, l, 12, [i, u]);
    else {
        const x = ae(c)
          , S = le(c);
        if (x || S) {
            const T = () => {
                if (e.f) {
                    const I = x ? m(c) ? h[c] : u[c] : c.value;
                    if (r)
                        B(I) && Ds(I, o);
                    else if (B(I))
                        I.includes(o) || I.push(o);
                    else if (x)
                        u[c] = [o],
                        m(c) && (h[c] = u[c]);
                    else {
                        const N = [o];
                        c.value = N,
                        e.k && (u[e.k] = N)
                    }
                } else
                    x ? (u[c] = i,
                    m(c) && (h[c] = i)) : S && (c.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            if (i) {
                const I = () => {
                    T(),
                    On.delete(e)
                }
                ;
                I.id = -1,
                On.set(e, I),
                Oe(I, n)
            } else
                sr(e),
                T()
        }
    }
}
function sr(e) {
    const t = On.get(e);
    t && (t.flags |= 8,
    On.delete(e))
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
const Xt = e => !!e.type.__asyncLoader
  , No = e => e.type.__isKeepAlive;
function Sl(e, t) {
    Do(e, "a", t)
}
function El(e, t) {
    Do(e, "da", t)
}
function Do(e, t, n=ye) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (Gn(t, s, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            No(r.parent.vnode) && Rl(s, t, n, r),
            r = r.parent
    }
}
function Rl(e, t, n, s) {
    const r = Gn(t, e, s, !0);
    Mo( () => {
        Ds(s[t], r)
    }
    , n)
}
function Gn(e, t, n=ye, s=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i) => {
            nt();
            const l = gn(n)
              , c = ze(t, n, e, i);
            return l(),
            st(),
            c
        }
        );
        return s ? r.unshift(o) : r.push(o),
        o
    }
}
const ot = e => (t, n=ye) => {
    (!an || e === "sp") && Gn(e, (...s) => t(...s), n)
}
  , Cl = ot("bm")
  , Kn = ot("m")
  , Al = ot("bu")
  , Ol = ot("u")
  , Il = ot("bum")
  , Mo = ot("um")
  , Pl = ot("sp")
  , Tl = ot("rtg")
  , Nl = ot("rtc");
function Dl(e, t=ye) {
    Gn("ec", e, t)
}
const Ml = Symbol.for("v-ndc");
function Ll(e, t, n, s) {
    let r;
    const o = n
      , i = B(e);
    if (i || ae(e)) {
        const l = i && tt(e);
        let c = !1
          , d = !1;
        l && (c = !Pe(e),
        d = rt(e),
        e = Bn(e)),
        r = new Array(e.length);
        for (let u = 0, h = e.length; u < h; u++)
            r[u] = t(c ? d ? jt(Ve(e[u])) : Ve(e[u]) : e[u], u, void 0, o)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++)
            r[l] = t(l + 1, l, void 0, o)
    } else if (se(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (l, c) => t(l, c, void 0, o));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, d = l.length; c < d; c++) {
                const u = l[c];
                r[c] = t(e[u], u, c, o)
            }
        }
    else
        r = [];
    return r
}
const vs = e => e ? ei(e) ? qs(e) : vs(e.parent) : null
  , Zt = de(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => vs(e.parent),
    $root: e => vs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Fo(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Us(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = kn.bind(e.proxy)),
    $watch: e => yl.bind(e)
})
  , rs = (e, t) => e !== ne && !e.__isScriptSetup && Q(e, t)
  , Fl = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c} = e;
        if (t[0] !== "$") {
            const g = i[t];
            if (g !== void 0)
                switch (g) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (rs(s, t))
                    return i[t] = 1,
                    s[t];
                if (r !== ne && Q(r, t))
                    return i[t] = 2,
                    r[t];
                if (Q(o, t))
                    return i[t] = 3,
                    o[t];
                if (n !== ne && Q(n, t))
                    return i[t] = 4,
                    n[t];
                ys && (i[t] = 0)
            }
        }
        const d = Zt[t];
        let u, h;
        if (d)
            return t === "$attrs" && pe(e.attrs, "get", ""),
            d(e);
        if ((u = l.__cssModules) && (u = u[t]))
            return u;
        if (n !== ne && Q(n, t))
            return i[t] = 4,
            n[t];
        if (h = c.config.globalProperties,
        Q(h, t))
            return h[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: o} = e;
        return rs(r, t) ? (r[t] = n,
        !0) : s !== ne && Q(s, t) ? (s[t] = n,
        !0) : Q(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i}}, l) {
        let c;
        return !!(n[l] || e !== ne && l[0] !== "$" && Q(e, l) || rs(t, l) || Q(o, l) || Q(s, l) || Q(Zt, l) || Q(r.config.globalProperties, l) || (c = i.__cssModules) && c[l])
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function rr(e) {
    return B(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let ys = !0;
function jl(e) {
    const t = Fo(e)
      , n = e.proxy
      , s = e.ctx;
    ys = !1,
    t.beforeCreate && or(t.beforeCreate, e, "bc");
    const {data: r, computed: o, methods: i, watch: l, provide: c, inject: d, created: u, beforeMount: h, mounted: g, beforeUpdate: m, updated: x, activated: S, deactivated: T, beforeDestroy: I, beforeUnmount: N, destroyed: M, unmounted: D, render: G, renderTracked: fe, renderTriggered: X, errorCaptured: K, serverPrefetch: W, expose: oe, inheritAttrs: ge, components: Ce, directives: be, filters: yt} = t;
    if (d && Vl(d, s, null),
    i)
        for (const U in i) {
            const z = i[U];
            k(z) && (s[U] = z.bind(n))
        }
    if (r) {
        const U = r.call(n, n);
        se(U) && (e.data = hn(U))
    }
    if (ys = !0,
    o)
        for (const U in o) {
            const z = o[U]
              , Je = k(z) ? z.bind(n, n) : k(z.get) ? z.get.bind(n, n) : Ye
              , lt = !k(z) && k(z.set) ? z.set.bind(n) : Ye
              , He = Me({
                get: Je,
                set: lt
            });
            Object.defineProperty(s, U, {
                enumerable: !0,
                configurable: !0,
                get: () => He.value,
                set: we => He.value = we
            })
        }
    if (l)
        for (const U in l)
            Lo(l[U], s, n, U);
    if (c) {
        const U = k(c) ? c.call(n) : c;
        Reflect.ownKeys(U).forEach(z => {
            bn(z, U[z])
        }
        )
    }
    u && or(u, e, "c");
    function re(U, z) {
        B(z) ? z.forEach(Je => U(Je.bind(n))) : z && U(z.bind(n))
    }
    if (re(Cl, h),
    re(Kn, g),
    re(Al, m),
    re(Ol, x),
    re(Sl, S),
    re(El, T),
    re(Dl, K),
    re(Nl, fe),
    re(Tl, X),
    re(Il, N),
    re(Mo, D),
    re(Pl, W),
    B(oe))
        if (oe.length) {
            const U = e.exposed || (e.exposed = {});
            oe.forEach(z => {
                Object.defineProperty(U, z, {
                    get: () => n[z],
                    set: Je => n[z] = Je,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    G && e.render === Ye && (e.render = G),
    ge != null && (e.inheritAttrs = ge),
    Ce && (e.components = Ce),
    be && (e.directives = be),
    W && To(e)
}
function Vl(e, t, n=Ye) {
    B(e) && (e = bs(e));
    for (const s in e) {
        const r = e[s];
        let o;
        se(r) ? "default"in r ? o = je(r.from || s, r.default, !0) : o = je(r.from || s) : o = je(r),
        le(o) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[s] = o
    }
}
function or(e, t, n) {
    ze(B(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Lo(e, t, n, s) {
    let r = s.includes(".") ? Io(n, s) : () => n[s];
    if (ae(e)) {
        const o = t[e];
        k(o) && Jt(r, o)
    } else if (k(e))
        Jt(r, e.bind(n));
    else if (se(e))
        if (B(e))
            e.forEach(o => Lo(o, t, n, s));
        else {
            const o = k(e.handler) ? e.handler.bind(n) : t[e.handler];
            k(o) && Jt(r, o, e)
        }
}
function Fo(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: r, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , l = o.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {},
    r.length && r.forEach(d => In(c, d, i, !0)),
    In(c, t, i)),
    se(t) && o.set(t, c),
    c
}
function In(e, t, n, s=!1) {
    const {mixins: r, extends: o} = t;
    o && In(e, o, n, !0),
    r && r.forEach(i => In(e, i, n, !0));
    for (const i in t)
        if (!(s && i === "expose")) {
            const l = Bl[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i]
        }
    return e
}
const Bl = {
    data: ir,
    props: lr,
    emits: lr,
    methods: Wt,
    computed: Wt,
    beforeCreate: me,
    created: me,
    beforeMount: me,
    mounted: me,
    beforeUpdate: me,
    updated: me,
    beforeDestroy: me,
    beforeUnmount: me,
    destroyed: me,
    unmounted: me,
    activated: me,
    deactivated: me,
    errorCaptured: me,
    serverPrefetch: me,
    components: Wt,
    directives: Wt,
    watch: Ul,
    provide: ir,
    inject: Hl
};
function ir(e, t) {
    return t ? e ? function() {
        return de(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Hl(e, t) {
    return Wt(bs(e), bs(t))
}
function bs(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function me(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Wt(e, t) {
    return e ? de(Object.create(null), e, t) : t
}
function lr(e, t) {
    return e ? B(e) && B(t) ? [...new Set([...e, ...t])] : de(Object.create(null), rr(e), rr(t ?? {})) : t
}
function Ul(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = de(Object.create(null), e);
    for (const s in t)
        n[s] = me(e[s], t[s]);
    return n
}
function jo() {
    return {
        app: null,
        config: {
            isNativeTag: $r,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let kl = 0;
function Gl(e, t) {
    return function(s, r=null) {
        k(s) || (s = de({}, s)),
        r != null && !se(r) && (r = null);
        const o = jo()
          , i = new WeakSet
          , l = [];
        let c = !1;
        const d = o.app = {
            _uid: kl++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: xc,
            get config() {
                return o.config
            },
            set config(u) {},
            use(u, ...h) {
                return i.has(u) || (u && k(u.install) ? (i.add(u),
                u.install(d, ...h)) : k(u) && (i.add(u),
                u(d, ...h))),
                d
            },
            mixin(u) {
                return o.mixins.includes(u) || o.mixins.push(u),
                d
            },
            component(u, h) {
                return h ? (o.components[u] = h,
                d) : o.components[u]
            },
            directive(u, h) {
                return h ? (o.directives[u] = h,
                d) : o.directives[u]
            },
            mount(u, h, g) {
                if (!c) {
                    const m = d._ceVNode || ce(s, r);
                    return m.appContext = o,
                    g === !0 ? g = "svg" : g === !1 && (g = void 0),
                    e(m, u, g),
                    c = !0,
                    d._container = u,
                    u.__vue_app__ = d,
                    qs(m.component)
                }
            },
            onUnmount(u) {
                l.push(u)
            },
            unmount() {
                c && (ze(l, d._instance, 16),
                e(null, d._container),
                delete d._container.__vue_app__)
            },
            provide(u, h) {
                return o.provides[u] = h,
                d
            },
            runWithContext(u) {
                const h = Ct;
                Ct = d;
                try {
                    return u()
                } finally {
                    Ct = h
                }
            }
        };
        return d
    }
}
let Ct = null;
const Kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${At(t)}Modifiers`];
function Wl(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || ne;
    let r = n;
    const o = t.startsWith("update:")
      , i = o && Kl(s, t.slice(7));
    i && (i.trim && (r = n.map(u => ae(u) ? u.trim() : u)),
    i.number && (r = n.map(Ii)));
    let l, c = s[l = Xn(t)] || s[l = Xn(mt(t))];
    !c && o && (c = s[l = Xn(At(t))]),
    c && ze(c, e, 6, r);
    const d = s[l + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        ze(d, e, 6, r)
    }
}
const $l = new WeakMap;
function Vo(e, t, n=!1) {
    const s = n ? $l : t.emitsCache
      , r = s.get(e);
    if (r !== void 0)
        return r;
    const o = e.emits;
    let i = {}
      , l = !1;
    if (!k(e)) {
        const c = d => {
            const u = Vo(d, t, !0);
            u && (l = !0,
            de(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !o && !l ? (se(e) && s.set(e, null),
    null) : (B(o) ? o.forEach(c => i[c] = null) : de(i, o),
    se(e) && s.set(e, i),
    i)
}
function Wn(e, t) {
    return !e || !Dn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, At(t)) || Q(e, t))
}
function cr(e) {
    const {type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [o], slots: i, attrs: l, emit: c, render: d, renderCache: u, props: h, data: g, setupState: m, ctx: x, inheritAttrs: S} = e
      , T = An(e);
    let I, N;
    try {
        if (n.shapeFlag & 4) {
            const D = r || s
              , G = D;
            I = $e(d.call(G, D, u, h, m, g, x)),
            N = l
        } else {
            const D = t;
            I = $e(D.length > 1 ? D(h, {
                attrs: l,
                slots: i,
                emit: c
            }) : D(h, null)),
            N = t.props ? l : ql(l)
        }
    } catch (D) {
        en.length = 0,
        Un(D, e, 1),
        I = ce(_t)
    }
    let M = I;
    if (N && S !== !1) {
        const D = Object.keys(N)
          , {shapeFlag: G} = M;
        D.length && G & 7 && (o && D.some(Ns) && (N = Yl(N, o)),
        M = Vt(M, N, !1, !0))
    }
    return n.dirs && (M = Vt(M, null, !1, !0),
    M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs),
    n.transition && ks(M, n.transition),
    I = M,
    An(T),
    I
}
const ql = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Dn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , Yl = (e, t) => {
    const n = {};
    for (const s in e)
        (!Ns(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function zl(e, t, n) {
    const {props: s, children: r, component: o} = e
      , {props: i, children: l, patchFlag: c} = t
      , d = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return s ? ar(s, i, d) : !!i;
        if (c & 8) {
            const u = t.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const g = u[h];
                if (i[g] !== s[g] && !Wn(d, g))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? ar(s, i, d) : !0 : !!i;
    return !1
}
function ar(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !Wn(n, o))
            return !0
    }
    return !1
}
function Jl({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Bo = {}
  , Ho = () => Object.create(Bo)
  , Uo = e => Object.getPrototypeOf(e) === Bo;
function Ql(e, t, n, s=!1) {
    const r = {}
      , o = Ho();
    e.propsDefaults = Object.create(null),
    ko(e, t, r, o);
    for (const i in e.propsOptions[0])
        i in r || (r[i] = void 0);
    n ? e.props = s ? r : bo(r) : e.type.props ? e.props = r : e.props = o,
    e.attrs = o
}
function Xl(e, t, n, s) {
    const {props: r, attrs: o, vnode: {patchFlag: i}} = e
      , l = Y(r)
      , [c] = e.propsOptions;
    let d = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let g = u[h];
                if (Wn(e.emitsOptions, g))
                    continue;
                const m = t[g];
                if (c)
                    if (Q(o, g))
                        m !== o[g] && (o[g] = m,
                        d = !0);
                    else {
                        const x = mt(g);
                        r[x] = ws(c, l, x, m, e, !1)
                    }
                else
                    m !== o[g] && (o[g] = m,
                    d = !0)
            }
        }
    } else {
        ko(e, t, r, o) && (d = !0);
        let u;
        for (const h in l)
            (!t || !Q(t, h) && ((u = At(h)) === h || !Q(t, u))) && (c ? n && (n[h] !== void 0 || n[u] !== void 0) && (r[h] = ws(c, l, h, void 0, e, !0)) : delete r[h]);
        if (o !== l)
            for (const h in o)
                (!t || !Q(t, h)) && (delete o[h],
                d = !0)
    }
    d && et(e.attrs, "set", "")
}
function ko(e, t, n, s) {
    const [r,o] = e.propsOptions;
    let i = !1, l;
    if (t)
        for (let c in t) {
            if ($t(c))
                continue;
            const d = t[c];
            let u;
            r && Q(r, u = mt(c)) ? !o || !o.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : Wn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d,
            i = !0)
        }
    if (o) {
        const c = Y(n)
          , d = l || ne;
        for (let u = 0; u < o.length; u++) {
            const h = o[u];
            n[h] = ws(r, c, h, d[h], e, !Q(d, h))
        }
    }
    return i
}
function ws(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const l = Q(i, "default");
        if (l && s === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && k(c)) {
                const {propsDefaults: d} = r;
                if (n in d)
                    s = d[n];
                else {
                    const u = gn(r);
                    s = d[n] = c.call(null, t),
                    u()
                }
            } else
                s = c;
            r.ce && r.ce._setProp(n, s)
        }
        i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === At(n)) && (s = !0))
    }
    return s
}
const Zl = new WeakMap;
function Go(e, t, n=!1) {
    const s = n ? Zl : t.propsCache
      , r = s.get(e);
    if (r)
        return r;
    const o = e.props
      , i = {}
      , l = [];
    let c = !1;
    if (!k(e)) {
        const u = h => {
            c = !0;
            const [g,m] = Go(h, t, !0);
            de(i, g),
            m && l.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !c)
        return se(e) && s.set(e, Mt),
        Mt;
    if (B(o))
        for (let u = 0; u < o.length; u++) {
            const h = mt(o[u]);
            ur(h) && (i[h] = ne)
        }
    else if (o)
        for (const u in o) {
            const h = mt(u);
            if (ur(h)) {
                const g = o[u]
                  , m = i[h] = B(g) || k(g) ? {
                    type: g
                } : de({}, g)
                  , x = m.type;
                let S = !1
                  , T = !0;
                if (B(x))
                    for (let I = 0; I < x.length; ++I) {
                        const N = x[I]
                          , M = k(N) && N.name;
                        if (M === "Boolean") {
                            S = !0;
                            break
                        } else
                            M === "String" && (T = !1)
                    }
                else
                    S = k(x) && x.name === "Boolean";
                m[0] = S,
                m[1] = T,
                (S || Q(m, "default")) && l.push(h)
            }
        }
    const d = [i, l];
    return se(e) && s.set(e, d),
    d
}
function ur(e) {
    return e[0] !== "$" && !$t(e)
}
const Gs = e => e === "_" || e === "_ctx" || e === "$stable"
  , Ks = e => B(e) ? e.map($e) : [$e(e)]
  , ec = (e, t, n) => {
    if (t._n)
        return t;
    const s = gl( (...r) => Ks(t(...r)), n);
    return s._c = !1,
    s
}
  , Ko = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (Gs(r))
            continue;
        const o = e[r];
        if (k(o))
            t[r] = ec(r, o, s);
        else if (o != null) {
            const i = Ks(o);
            t[r] = () => i
        }
    }
}
  , Wo = (e, t) => {
    const n = Ks(t);
    e.slots.default = () => n
}
  , $o = (e, t, n) => {
    for (const s in t)
        (n || !Gs(s)) && (e[s] = t[s])
}
  , tc = (e, t, n) => {
    const s = e.slots = Ho();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? ($o(s, t, n),
        n && Xr(s, "_", r, !0)) : Ko(t, s)
    } else
        t && Wo(e, t)
}
  , nc = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let o = !0
      , i = ne;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : $o(r, t, n) : (o = !t.$stable,
        Ko(t, r)),
        i = t
    } else
        t && (Wo(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const l in r)
            !Gs(l) && i[l] == null && delete r[l]
}
  , Oe = lc;
function sc(e) {
    return rc(e)
}
function rc(e, t) {
    const n = jn();
    n.__VUE__ = !0;
    const {insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: c, setText: d, setElementText: u, parentNode: h, nextSibling: g, setScopeId: m=Ye, insertStaticContent: x} = e
      , S = (a, f, p, _=null, b=null, v=null, C=void 0, R=null, E=!!f.dynamicChildren) => {
        if (a === f)
            return;
        a && !Gt(a, f) && (_ = y(a),
        we(a, b, v, !0),
        a = null),
        f.patchFlag === -2 && (E = !1,
        f.dynamicChildren = null);
        const {type: w, ref: j, shapeFlag: O} = f;
        switch (w) {
        case $n:
            T(a, f, p, _);
            break;
        case _t:
            I(a, f, p, _);
            break;
        case wn:
            a == null && N(f, p, _, C);
            break;
        case De:
            Ce(a, f, p, _, b, v, C, R, E);
            break;
        default:
            O & 1 ? G(a, f, p, _, b, v, C, R, E) : O & 6 ? be(a, f, p, _, b, v, C, R, E) : (O & 64 || O & 128) && w.process(a, f, p, _, b, v, C, R, E, L)
        }
        j != null && b ? Qt(j, a && a.ref, v, f || a, !f) : j == null && a && a.ref != null && Qt(a.ref, null, v, a, !0)
    }
      , T = (a, f, p, _) => {
        if (a == null)
            s(f.el = l(f.children), p, _);
        else {
            const b = f.el = a.el;
            f.children !== a.children && d(b, f.children)
        }
    }
      , I = (a, f, p, _) => {
        a == null ? s(f.el = c(f.children || ""), p, _) : f.el = a.el
    }
      , N = (a, f, p, _) => {
        [a.el,a.anchor] = x(a.children, f, p, _, a.el, a.anchor)
    }
      , M = ({el: a, anchor: f}, p, _) => {
        let b;
        for (; a && a !== f; )
            b = g(a),
            s(a, p, _),
            a = b;
        s(f, p, _)
    }
      , D = ({el: a, anchor: f}) => {
        let p;
        for (; a && a !== f; )
            p = g(a),
            r(a),
            a = p;
        r(f)
    }
      , G = (a, f, p, _, b, v, C, R, E) => {
        if (f.type === "svg" ? C = "svg" : f.type === "math" && (C = "mathml"),
        a == null)
            fe(f, p, _, b, v, C, R, E);
        else {
            const w = a.el && a.el._isVueCE ? a.el : null;
            try {
                w && w._beginPatch(),
                W(a, f, b, v, C, R, E)
            } finally {
                w && w._endPatch()
            }
        }
    }
      , fe = (a, f, p, _, b, v, C, R) => {
        let E, w;
        const {props: j, shapeFlag: O, transition: F, dirs: V} = a;
        if (E = a.el = i(a.type, v, j && j.is, j),
        O & 8 ? u(E, a.children) : O & 16 && K(a.children, E, null, _, b, os(a, v), C, R),
        V && wt(a, null, _, "created"),
        X(E, a, a.scopeId, C, _),
        j) {
            for (const ee in j)
                ee !== "value" && !$t(ee) && o(E, ee, null, j[ee], v, _);
            "value"in j && o(E, "value", null, j.value, v),
            (w = j.onVnodeBeforeMount) && Ke(w, _, a)
        }
        V && wt(a, null, _, "beforeMount");
        const q = oc(b, F);
        q && F.beforeEnter(E),
        s(E, f, p),
        ((w = j && j.onVnodeMounted) || q || V) && Oe( () => {
            w && Ke(w, _, a),
            q && F.enter(E),
            V && wt(a, null, _, "mounted")
        }
        , b)
    }
      , X = (a, f, p, _, b) => {
        if (p && m(a, p),
        _)
            for (let v = 0; v < _.length; v++)
                m(a, _[v]);
        if (b) {
            let v = b.subTree;
            if (f === v || Jo(v.type) && (v.ssContent === f || v.ssFallback === f)) {
                const C = b.vnode;
                X(a, C, C.scopeId, C.slotScopeIds, b.parent)
            }
        }
    }
      , K = (a, f, p, _, b, v, C, R, E=0) => {
        for (let w = E; w < a.length; w++) {
            const j = a[w] = R ? dt(a[w]) : $e(a[w]);
            S(null, j, f, p, _, b, v, C, R)
        }
    }
      , W = (a, f, p, _, b, v, C) => {
        const R = f.el = a.el;
        let {patchFlag: E, dynamicChildren: w, dirs: j} = f;
        E |= a.patchFlag & 16;
        const O = a.props || ne
          , F = f.props || ne;
        let V;
        if (p && xt(p, !1),
        (V = F.onVnodeBeforeUpdate) && Ke(V, p, f, a),
        j && wt(f, a, p, "beforeUpdate"),
        p && xt(p, !0),
        (O.innerHTML && F.innerHTML == null || O.textContent && F.textContent == null) && u(R, ""),
        w ? oe(a.dynamicChildren, w, R, p, _, os(f, b), v) : C || z(a, f, R, null, p, _, os(f, b), v, !1),
        E > 0) {
            if (E & 16)
                ge(R, O, F, p, b);
            else if (E & 2 && O.class !== F.class && o(R, "class", null, F.class, b),
            E & 4 && o(R, "style", O.style, F.style, b),
            E & 8) {
                const q = f.dynamicProps;
                for (let ee = 0; ee < q.length; ee++) {
                    const Z = q[ee]
                      , xe = O[Z]
                      , Se = F[Z];
                    (Se !== xe || Z === "value") && o(R, Z, xe, Se, b, p)
                }
            }
            E & 1 && a.children !== f.children && u(R, f.children)
        } else
            !C && w == null && ge(R, O, F, p, b);
        ((V = F.onVnodeUpdated) || j) && Oe( () => {
            V && Ke(V, p, f, a),
            j && wt(f, a, p, "updated")
        }
        , _)
    }
      , oe = (a, f, p, _, b, v, C) => {
        for (let R = 0; R < f.length; R++) {
            const E = a[R]
              , w = f[R]
              , j = E.el && (E.type === De || !Gt(E, w) || E.shapeFlag & 198) ? h(E.el) : p;
            S(E, w, j, null, _, b, v, C, !0)
        }
    }
      , ge = (a, f, p, _, b) => {
        if (f !== p) {
            if (f !== ne)
                for (const v in f)
                    !$t(v) && !(v in p) && o(a, v, f[v], null, b, _);
            for (const v in p) {
                if ($t(v))
                    continue;
                const C = p[v]
                  , R = f[v];
                C !== R && v !== "value" && o(a, v, R, C, b, _)
            }
            "value"in p && o(a, "value", f.value, p.value, b)
        }
    }
      , Ce = (a, f, p, _, b, v, C, R, E) => {
        const w = f.el = a ? a.el : l("")
          , j = f.anchor = a ? a.anchor : l("");
        let {patchFlag: O, dynamicChildren: F, slotScopeIds: V} = f;
        V && (R = R ? R.concat(V) : V),
        a == null ? (s(w, p, _),
        s(j, p, _),
        K(f.children || [], p, j, b, v, C, R, E)) : O > 0 && O & 64 && F && a.dynamicChildren && a.dynamicChildren.length === F.length ? (oe(a.dynamicChildren, F, p, b, v, C, R),
        (f.key != null || b && f === b.subTree) && qo(a, f, !0)) : z(a, f, p, j, b, v, C, R, E)
    }
      , be = (a, f, p, _, b, v, C, R, E) => {
        f.slotScopeIds = R,
        a == null ? f.shapeFlag & 512 ? b.ctx.activate(f, p, _, C, E) : yt(f, p, _, b, v, C, E) : it(a, f, E)
    }
      , yt = (a, f, p, _, b, v, C) => {
        const R = a.component = mc(a, _, b);
        if (No(a) && (R.ctx.renderer = L),
        _c(R, !1, C),
        R.asyncDep) {
            if (b && b.registerDep(R, re, C),
            !a.el) {
                const E = R.subTree = ce(_t);
                I(null, E, f, p),
                a.placeholder = E.el
            }
        } else
            re(R, a, f, p, b, v, C)
    }
      , it = (a, f, p) => {
        const _ = f.component = a.component;
        if (zl(a, f, p))
            if (_.asyncDep && !_.asyncResolved) {
                U(_, f, p);
                return
            } else
                _.next = f,
                _.update();
        else
            f.el = a.el,
            _.vnode = f
    }
      , re = (a, f, p, _, b, v, C) => {
        const R = () => {
            if (a.isMounted) {
                let {next: O, bu: F, u: V, parent: q, vnode: ee} = a;
                {
                    const ke = Yo(a);
                    if (ke) {
                        O && (O.el = ee.el,
                        U(a, O, C)),
                        ke.asyncDep.then( () => {
                            a.isUnmounted || R()
                        }
                        );
                        return
                    }
                }
                let Z = O, xe;
                xt(a, !1),
                O ? (O.el = ee.el,
                U(a, O, C)) : O = ee,
                F && Zn(F),
                (xe = O.props && O.props.onVnodeBeforeUpdate) && Ke(xe, q, O, ee),
                xt(a, !0);
                const Se = cr(a)
                  , Ue = a.subTree;
                a.subTree = Se,
                S(Ue, Se, h(Ue.el), y(Ue), a, b, v),
                O.el = Se.el,
                Z === null && Jl(a, Se.el),
                V && Oe(V, b),
                (xe = O.props && O.props.onVnodeUpdated) && Oe( () => Ke(xe, q, O, ee), b)
            } else {
                let O;
                const {el: F, props: V} = f
                  , {bm: q, m: ee, parent: Z, root: xe, type: Se} = a
                  , Ue = Xt(f);
                xt(a, !1),
                q && Zn(q),
                !Ue && (O = V && V.onVnodeBeforeMount) && Ke(O, Z, f),
                xt(a, !0);
                {
                    xe.ce && xe.ce._def.shadowRoot !== !1 && xe.ce._injectChildStyle(Se);
                    const ke = a.subTree = cr(a);
                    S(null, ke, p, _, a, b, v),
                    f.el = ke.el
                }
                if (ee && Oe(ee, b),
                !Ue && (O = V && V.onVnodeMounted)) {
                    const ke = f;
                    Oe( () => Ke(O, Z, ke), b)
                }
                (f.shapeFlag & 256 || Z && Xt(Z.vnode) && Z.vnode.shapeFlag & 256) && a.a && Oe(a.a, b),
                a.isMounted = !0,
                f = p = _ = null
            }
        }
        ;
        a.scope.on();
        const E = a.effect = new oo(R);
        a.scope.off();
        const w = a.update = E.run.bind(E)
          , j = a.job = E.runIfDirty.bind(E);
        j.i = a,
        j.id = a.uid,
        E.scheduler = () => Us(j),
        xt(a, !0),
        w()
    }
      , U = (a, f, p) => {
        f.component = a;
        const _ = a.vnode.props;
        a.vnode = f,
        a.next = null,
        Xl(a, f.props, _, p),
        nc(a, f.children, p),
        nt(),
        nr(a),
        st()
    }
      , z = (a, f, p, _, b, v, C, R, E=!1) => {
        const w = a && a.children
          , j = a ? a.shapeFlag : 0
          , O = f.children
          , {patchFlag: F, shapeFlag: V} = f;
        if (F > 0) {
            if (F & 128) {
                lt(w, O, p, _, b, v, C, R, E);
                return
            } else if (F & 256) {
                Je(w, O, p, _, b, v, C, R, E);
                return
            }
        }
        V & 8 ? (j & 16 && Ne(w, b, v),
        O !== w && u(p, O)) : j & 16 ? V & 16 ? lt(w, O, p, _, b, v, C, R, E) : Ne(w, b, v, !0) : (j & 8 && u(p, ""),
        V & 16 && K(O, p, _, b, v, C, R, E))
    }
      , Je = (a, f, p, _, b, v, C, R, E) => {
        a = a || Mt,
        f = f || Mt;
        const w = a.length
          , j = f.length
          , O = Math.min(w, j);
        let F;
        for (F = 0; F < O; F++) {
            const V = f[F] = E ? dt(f[F]) : $e(f[F]);
            S(a[F], V, p, null, b, v, C, R, E)
        }
        w > j ? Ne(a, b, v, !0, !1, O) : K(f, p, _, b, v, C, R, E, O)
    }
      , lt = (a, f, p, _, b, v, C, R, E) => {
        let w = 0;
        const j = f.length;
        let O = a.length - 1
          , F = j - 1;
        for (; w <= O && w <= F; ) {
            const V = a[w]
              , q = f[w] = E ? dt(f[w]) : $e(f[w]);
            if (Gt(V, q))
                S(V, q, p, null, b, v, C, R, E);
            else
                break;
            w++
        }
        for (; w <= O && w <= F; ) {
            const V = a[O]
              , q = f[F] = E ? dt(f[F]) : $e(f[F]);
            if (Gt(V, q))
                S(V, q, p, null, b, v, C, R, E);
            else
                break;
            O--,
            F--
        }
        if (w > O) {
            if (w <= F) {
                const V = F + 1
                  , q = V < j ? f[V].el : _;
                for (; w <= F; )
                    S(null, f[w] = E ? dt(f[w]) : $e(f[w]), p, q, b, v, C, R, E),
                    w++
            }
        } else if (w > F)
            for (; w <= O; )
                we(a[w], b, v, !0),
                w++;
        else {
            const V = w
              , q = w
              , ee = new Map;
            for (w = q; w <= F; w++) {
                const Ae = f[w] = E ? dt(f[w]) : $e(f[w]);
                Ae.key != null && ee.set(Ae.key, w)
            }
            let Z, xe = 0;
            const Se = F - q + 1;
            let Ue = !1
              , ke = 0;
            const Ut = new Array(Se);
            for (w = 0; w < Se; w++)
                Ut[w] = 0;
            for (w = V; w <= O; w++) {
                const Ae = a[w];
                if (xe >= Se) {
                    we(Ae, b, v, !0);
                    continue
                }
                let Ge;
                if (Ae.key != null)
                    Ge = ee.get(Ae.key);
                else
                    for (Z = q; Z <= F; Z++)
                        if (Ut[Z - q] === 0 && Gt(Ae, f[Z])) {
                            Ge = Z;
                            break
                        }
                Ge === void 0 ? we(Ae, b, v, !0) : (Ut[Ge - q] = w + 1,
                Ge >= ke ? ke = Ge : Ue = !0,
                S(Ae, f[Ge], p, null, b, v, C, R, E),
                xe++)
            }
            const Js = Ue ? ic(Ut) : Mt;
            for (Z = Js.length - 1,
            w = Se - 1; w >= 0; w--) {
                const Ae = q + w
                  , Ge = f[Ae]
                  , Qs = f[Ae + 1]
                  , Xs = Ae + 1 < j ? Qs.el || zo(Qs) : _;
                Ut[w] === 0 ? S(null, Ge, p, Xs, b, v, C, R, E) : Ue && (Z < 0 || w !== Js[Z] ? He(Ge, p, Xs, 2) : Z--)
            }
        }
    }
      , He = (a, f, p, _, b=null) => {
        const {el: v, type: C, transition: R, children: E, shapeFlag: w} = a;
        if (w & 6) {
            He(a.component.subTree, f, p, _);
            return
        }
        if (w & 128) {
            a.suspense.move(f, p, _);
            return
        }
        if (w & 64) {
            C.move(a, f, p, L);
            return
        }
        if (C === De) {
            s(v, f, p);
            for (let O = 0; O < E.length; O++)
                He(E[O], f, p, _);
            s(a.anchor, f, p);
            return
        }
        if (C === wn) {
            M(a, f, p);
            return
        }
        if (_ !== 2 && w & 1 && R)
            if (_ === 0)
                R.beforeEnter(v),
                s(v, f, p),
                Oe( () => R.enter(v), b);
            else {
                const {leave: O, delayLeave: F, afterLeave: V} = R
                  , q = () => {
                    a.ctx.isUnmounted ? r(v) : s(v, f, p)
                }
                  , ee = () => {
                    v._isLeaving && v[xl](!0),
                    O(v, () => {
                        q(),
                        V && V()
                    }
                    )
                }
                ;
                F ? F(v, q, ee) : ee()
            }
        else
            s(v, f, p)
    }
      , we = (a, f, p, _=!1, b=!1) => {
        const {type: v, props: C, ref: R, children: E, dynamicChildren: w, shapeFlag: j, patchFlag: O, dirs: F, cacheIndex: V} = a;
        if (O === -2 && (b = !1),
        R != null && (nt(),
        Qt(R, null, p, a, !0),
        st()),
        V != null && (f.renderCache[V] = void 0),
        j & 256) {
            f.ctx.deactivate(a);
            return
        }
        const q = j & 1 && F
          , ee = !Xt(a);
        let Z;
        if (ee && (Z = C && C.onVnodeBeforeUnmount) && Ke(Z, f, a),
        j & 6)
            bt(a.component, p, _);
        else {
            if (j & 128) {
                a.suspense.unmount(p, _);
                return
            }
            q && wt(a, null, f, "beforeUnmount"),
            j & 64 ? a.type.remove(a, f, p, L, _) : w && !w.hasOnce && (v !== De || O > 0 && O & 64) ? Ne(w, f, p, !1, !0) : (v === De && O & 384 || !b && j & 16) && Ne(E, f, p),
            _ && Ot(a)
        }
        (ee && (Z = C && C.onVnodeUnmounted) || q) && Oe( () => {
            Z && Ke(Z, f, a),
            q && wt(a, null, f, "unmounted")
        }
        , p)
    }
      , Ot = a => {
        const {type: f, el: p, anchor: _, transition: b} = a;
        if (f === De) {
            It(p, _);
            return
        }
        if (f === wn) {
            D(a);
            return
        }
        const v = () => {
            r(p),
            b && !b.persisted && b.afterLeave && b.afterLeave()
        }
        ;
        if (a.shapeFlag & 1 && b && !b.persisted) {
            const {leave: C, delayLeave: R} = b
              , E = () => C(p, v);
            R ? R(a.el, v, E) : E()
        } else
            v()
    }
      , It = (a, f) => {
        let p;
        for (; a !== f; )
            p = g(a),
            r(a),
            a = p;
        r(f)
    }
      , bt = (a, f, p) => {
        const {bum: _, scope: b, job: v, subTree: C, um: R, m: E, a: w} = a;
        fr(E),
        fr(w),
        _ && Zn(_),
        b.stop(),
        v && (v.flags |= 8,
        we(C, a, f, p)),
        R && Oe(R, f),
        Oe( () => {
            a.isUnmounted = !0
        }
        , f)
    }
      , Ne = (a, f, p, _=!1, b=!1, v=0) => {
        for (let C = v; C < a.length; C++)
            we(a[C], f, p, _, b)
    }
      , y = a => {
        if (a.shapeFlag & 6)
            return y(a.component.subTree);
        if (a.shapeFlag & 128)
            return a.suspense.next();
        const f = g(a.anchor || a.el)
          , p = f && f[bl];
        return p ? g(p) : f
    }
    ;
    let P = !1;
    const A = (a, f, p) => {
        let _;
        a == null ? f._vnode && (we(f._vnode, null, null, !0),
        _ = f._vnode.component) : S(f._vnode || null, a, f, null, null, null, p),
        f._vnode = a,
        P || (P = !0,
        nr(_),
        Ro(),
        P = !1)
    }
      , L = {
        p: S,
        um: we,
        m: He,
        r: Ot,
        mt: yt,
        mc: K,
        pc: z,
        pbc: oe,
        n: y,
        o: e
    };
    return {
        render: A,
        hydrate: void 0,
        createApp: Gl(A)
    }
}
function os({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function xt({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function oc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function qo(e, t, n=!1) {
    const s = e.children
      , r = t.children;
    if (B(s) && B(r))
        for (let o = 0; o < s.length; o++) {
            const i = s[o];
            let l = r[o];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = dt(r[o]),
            l.el = i.el),
            !n && l.patchFlag !== -2 && qo(i, l)),
            l.type === $n && (l.patchFlag !== -1 ? l.el = i.el : l.__elIndex = o + (e.type === De ? 1 : 0)),
            l.type === _t && !l.el && (l.el = i.el)
        }
}
function ic(e) {
    const t = e.slice()
      , n = [0];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const d = e[s];
        if (d !== 0) {
            if (r = n[n.length - 1],
            e[r] < d) {
                t[s] = r,
                n.push(s);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                l = o + i >> 1,
                e[n[l]] < d ? o = l + 1 : i = l;
            d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]),
            n[o] = s)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
function Yo(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Yo(t)
}
function fr(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
function zo(e) {
    if (e.placeholder)
        return e.placeholder;
    const t = e.component;
    return t ? zo(t.subTree) : null
}
const Jo = e => e.__isSuspense;
function lc(e, t) {
    t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : pl(e)
}
const De = Symbol.for("v-fgt")
  , $n = Symbol.for("v-txt")
  , _t = Symbol.for("v-cmt")
  , wn = Symbol.for("v-stc")
  , en = [];
let Ie = null;
function Ee(e=!1) {
    en.push(Ie = e ? null : [])
}
function cc() {
    en.pop(),
    Ie = en[en.length - 1] || null
}
let cn = 1;
function Pn(e, t=!1) {
    cn += e,
    e < 0 && Ie && t && (Ie.hasOnce = !0)
}
function Qo(e) {
    return e.dynamicChildren = cn > 0 ? Ie || Mt : null,
    cc(),
    cn > 0 && Ie && Ie.push(e),
    e
}
function Le(e, t, n, s, r, o) {
    return Qo(H(e, t, n, s, r, o, !0))
}
function Ws(e, t, n, s, r) {
    return Qo(ce(e, t, n, s, r, !0))
}
function Tn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Gt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Xo = ({key: e}) => e ?? null
  , xn = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? ae(e) || le(e) || k(e) ? {
    i: qe,
    r: e,
    k: t,
    f: !!n
} : e : null);
function H(e, t=null, n=null, s=0, r=null, o=e === De ? 0 : 1, i=!1, l=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Xo(t),
        ref: t && xn(t),
        scopeId: Ao,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: qe
    };
    return l ? ($s(c, n),
    o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    cn > 0 && !i && Ie && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Ie.push(c),
    c
}
const ce = ac;
function ac(e, t=null, n=null, s=0, r=null, o=!1) {
    if ((!e || e === Ml) && (e = _t),
    Tn(e)) {
        const l = Vt(e, t, !0);
        return n && $s(l, n),
        cn > 0 && !o && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)),
        l.patchFlag = -2,
        l
    }
    if (wc(e) && (e = e.__vccOpts),
    t) {
        t = uc(t);
        let {class: l, style: c} = t;
        l && !ae(l) && (t.class = Vn(l)),
        se(c) && (Hn(c) && !B(c) && (c = de({}, c)),
        t.style = dn(c))
    }
    const i = ae(e) ? 1 : Jo(e) ? 128 : wl(e) ? 64 : se(e) ? 4 : k(e) ? 2 : 0;
    return H(e, t, n, s, r, i, o, !0)
}
function uc(e) {
    return e ? Hn(e) || Uo(e) ? de({}, e) : e : null
}
function Vt(e, t, n=!1, s=!1) {
    const {props: r, ref: o, patchFlag: i, children: l, transition: c} = e
      , d = t ? hc(r || {}, t) : r
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: d,
        key: d && Xo(d),
        ref: t && t.ref ? n && o ? B(o) ? o.concat(xn(t)) : [o, xn(t)] : xn(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Vt(e.ssContent),
        ssFallback: e.ssFallback && Vt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && ks(u, c.clone(u)),
    u
}
function fc(e=" ", t=0) {
    return ce($n, null, e, t)
}
function dc(e, t) {
    const n = ce(wn, null, e);
    return n.staticCount = t,
    n
}
function xs(e="", t=!1) {
    return t ? (Ee(),
    Ws(_t, null, e)) : ce(_t, null, e)
}
function $e(e) {
    return e == null || typeof e == "boolean" ? ce(_t) : B(e) ? ce(De, null, e.slice()) : Tn(e) ? dt(e) : ce($n, null, String(e))
}
function dt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e)
}
function $s(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (B(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            $s(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Uo(t) ? t._ctx = qe : r === 3 && qe && (qe.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        k(t) ? (t = {
            default: t,
            _ctx: qe
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [fc(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function hc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = Vn([t.class, s.class]));
            else if (r === "style")
                t.style = dn([t.style, s.style]);
            else if (Dn(r)) {
                const o = t[r]
                  , i = s[r];
                i && o !== i && !(B(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
            } else
                r !== "" && (t[r] = s[r])
    }
    return t
}
function Ke(e, t, n, s=null) {
    ze(e, t, 7, [n, s])
}
const pc = jo();
let gc = 0;
function mc(e, t, n) {
    const s = e.type
      , r = (t ? t.appContext : e.appContext) || pc
      , o = {
        uid: gc++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new no(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Go(s, r),
        emitsOptions: Vo(s, r),
        emit: null,
        emitted: null,
        propsDefaults: ne,
        inheritAttrs: s.inheritAttrs,
        ctx: ne,
        data: ne,
        props: ne,
        attrs: ne,
        slots: ne,
        refs: ne,
        setupState: ne,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = Wl.bind(null, o),
    e.ce && e.ce(o),
    o
}
let ye = null;
const Zo = () => ye || qe;
let Nn, Ss;
{
    const e = jn()
      , t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(s),
        o => {
            r.length > 1 ? r.forEach(i => i(o)) : r[0](o)
        }
    }
    ;
    Nn = t("__VUE_INSTANCE_SETTERS__", n => ye = n),
    Ss = t("__VUE_SSR_SETTERS__", n => an = n)
}
const gn = e => {
    const t = ye;
    return Nn(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Nn(t)
    }
}
  , dr = () => {
    ye && ye.scope.off(),
    Nn(null)
}
;
function ei(e) {
    return e.vnode.shapeFlag & 4
}
let an = !1;
function _c(e, t=!1, n=!1) {
    t && Ss(t);
    const {props: s, children: r} = e.vnode
      , o = ei(e);
    Ql(e, s, o, t),
    tc(e, r, n || t);
    const i = o ? vc(e, t) : void 0;
    return t && Ss(!1),
    i
}
function vc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Fl);
    const {setup: s} = n;
    if (s) {
        nt();
        const r = e.setupContext = s.length > 1 ? bc(e) : null
          , o = gn(e)
          , i = pn(s, e, 0, [e.props, r])
          , l = Yr(i);
        if (st(),
        o(),
        (l || e.sp) && !Xt(e) && To(e),
        l) {
            if (i.then(dr, dr),
            t)
                return i.then(c => {
                    hr(e, c)
                }
                ).catch(c => {
                    Un(c, e, 0)
                }
                );
            e.asyncDep = i
        } else
            hr(e, i)
    } else
        ti(e)
}
function hr(e, t, n) {
    k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = xo(t)),
    ti(e)
}
function ti(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Ye);
    {
        const r = gn(e);
        nt();
        try {
            jl(e)
        } finally {
            st(),
            r()
        }
    }
}
const yc = {
    get(e, t) {
        return pe(e, "get", ""),
        e[t]
    }
};
function bc(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,yc),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function qs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xo(Hs(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Zt)
                return Zt[n](e)
        },
        has(t, n) {
            return n in t || n in Zt
        }
    })) : e.proxy
}
function wc(e) {
    return k(e) && "__vccOpts"in e
}
const Me = (e, t) => al(e, t, an);
function ni(e, t, n) {
    try {
        Pn(-1);
        const s = arguments.length;
        return s === 2 ? se(t) && !B(t) ? Tn(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Tn(n) && (n = [n]),
        ce(e, t, n))
    } finally {
        Pn(1)
    }
}
const xc = "3.5.27";
let Es;
const pr = typeof window < "u" && window.trustedTypes;
if (pr)
    try {
        Es = pr.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const si = Es ? e => Es.createHTML(e) : e => e
  , Sc = "http://www.w3.org/2000/svg"
  , Ec = "http://www.w3.org/1998/Math/MathML"
  , Ze = typeof document < "u" ? document : null
  , gr = Ze && Ze.createElement("template")
  , Rc = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const r = t === "svg" ? Ze.createElementNS(Sc, e) : t === "mathml" ? Ze.createElementNS(Ec, e) : n ? Ze.createElement(e, {
            is: n
        }) : Ze.createElement(e);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: e => Ze.createTextNode(e),
    createComment: e => Ze.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ze.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (r && (r === o || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling)); )
                ;
        else {
            gr.innerHTML = si(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
            const l = gr.content;
            if (s === "svg" || s === "mathml") {
                const c = l.firstChild;
                for (; c.firstChild; )
                    l.appendChild(c.firstChild);
                l.removeChild(c)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Cc = Symbol("_vtc");
function Ac(e, t, n) {
    const s = e[Cc];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const mr = Symbol("_vod")
  , Oc = Symbol("_vsh")
  , Ic = Symbol("")
  , Pc = /(?:^|;)\s*display\s*:/;
function Tc(e, t, n) {
    const s = e.style
      , r = ae(n);
    let o = !1;
    if (n && !r) {
        if (t)
            if (ae(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && Sn(s, l, "")
                }
            else
                for (const i in t)
                    n[i] == null && Sn(s, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            Sn(s, i, n[i])
    } else if (r) {
        if (t !== n) {
            const i = s[Ic];
            i && (n += ";" + i),
            s.cssText = n,
            o = Pc.test(n)
        }
    } else
        t && e.removeAttribute("style");
    mr in e && (e[mr] = o ? s.display : "",
    e[Oc] && (s.display = "none"))
}
const _r = /\s*!important$/;
function Sn(e, t, n) {
    if (B(n))
        n.forEach(s => Sn(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Nc(e, t);
        _r.test(n) ? e.setProperty(At(s), n.replace(_r, ""), "important") : e[s] = n
    }
}
const vr = ["Webkit", "Moz", "ms"]
  , is = {};
function Nc(e, t) {
    const n = is[t];
    if (n)
        return n;
    let s = mt(t);
    if (s !== "filter" && s in e)
        return is[t] = s;
    s = Qr(s);
    for (let r = 0; r < vr.length; r++) {
        const o = vr[r] + s;
        if (o in e)
            return is[t] = o
    }
    return t
}
const yr = "http://www.w3.org/1999/xlink";
function br(e, t, n, s, r, o=Li(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yr, t.slice(6, t.length)) : e.setAttributeNS(yr, t, n) : n == null || o && !Zr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : vt(n) ? String(n) : n)
}
function wr(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? si(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value"in e)) && (e.value = c),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Zr(n) : n == null && l === "string" ? (n = "",
        i = !0) : l === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(r || t)
}
function Dc(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Mc(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const xr = Symbol("_vei");
function Lc(e, t, n, s, r=null) {
    const o = e[xr] || (e[xr] = {})
      , i = o[t];
    if (s && i)
        i.value = s;
    else {
        const [l,c] = Fc(t);
        if (s) {
            const d = o[t] = Bc(s, r);
            Dc(e, l, d, c)
        } else
            i && (Mc(e, l, i, c),
            o[t] = void 0)
    }
}
const Sr = /(?:Once|Passive|Capture)$/;
function Fc(e) {
    let t;
    if (Sr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Sr); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : At(e.slice(2)), t]
}
let ls = 0;
const jc = Promise.resolve()
  , Vc = () => ls || (jc.then( () => ls = 0),
ls = Date.now());
function Bc(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        ze(Hc(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = Vc(),
    n
}
function Hc(e, t) {
    if (B(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => r => !r._stopped && s && s(r))
    } else
        return t
}
const Er = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Uc = (e, t, n, s, r, o) => {
    const i = r === "svg";
    t === "class" ? Ac(e, s, i) : t === "style" ? Tc(e, n, s) : Dn(t) ? Ns(t) || Lc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : kc(e, t, s, i)) ? (wr(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && br(e, t, s, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? wr(e, mt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    br(e, t, s, i))
}
;
function kc(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Er(t) && k(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return Er(t) && ae(n) ? !1 : t in e
}
const Gc = de({
    patchProp: Uc
}, Rc);
let Rr;
function Kc() {
    return Rr || (Rr = sc(Gc))
}
const Wc = ( (...e) => {
    const t = Kc().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const r = qc(s);
        if (!r)
            return;
        const o = t._component;
        !k(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
        const i = n(r, !1, $c(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
);
function $c(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function qc(e) {
    return ae(e) ? document.querySelector(e) : e
}
let ri;
const qn = e => ri = e
  , oi = Symbol();
function Rs(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var tn;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(tn || (tn = {}));
function Yc() {
    const e = so(!0)
      , t = e.run( () => on({}));
    let n = []
      , s = [];
    const r = Hs({
        install(o) {
            qn(r),
            r._a = o,
            o.provide(oi, r),
            o.config.globalProperties.$pinia = r,
            s.forEach(i => n.push(i)),
            s = []
        },
        use(o) {
            return this._a ? n.push(o) : s.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return r
}
const ii = () => {}
;
function Cr(e, t, n, s=ii) {
    e.add(t);
    const r = () => {
        e.delete(t) && s()
    }
    ;
    return !n && ro() && Fi(r),
    r
}
function Tt(e, ...t) {
    e.forEach(n => {
        n(...t)
    }
    )
}
const zc = e => e()
  , Ar = Symbol()
  , cs = Symbol();
function Cs(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach( (n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const s = t[n]
          , r = e[n];
        Rs(r) && Rs(s) && e.hasOwnProperty(n) && !le(s) && !tt(s) ? e[n] = Cs(r, s) : e[n] = s
    }
    return e
}
const Jc = Symbol();
function Qc(e) {
    return !Rs(e) || !Object.prototype.hasOwnProperty.call(e, Jc)
}
const {assign: at} = Object;
function Xc(e) {
    return !!(le(e) && e.effect)
}
function Zc(e, t, n, s) {
    const {state: r, actions: o, getters: i} = t
      , l = n.state.value[e];
    let c;
    function d() {
        l || (n.state.value[e] = r ? r() : {});
        const u = ol(n.state.value[e]);
        return at(u, o, Object.keys(i || {}).reduce( (h, g) => (h[g] = Hs(Me( () => {
            qn(n);
            const m = n._s.get(e);
            return i[g].call(m, m)
        }
        )),
        h), {}))
    }
    return c = li(e, d, t, n, s, !0),
    c
}
function li(e, t, n={}, s, r, o) {
    let i;
    const l = at({
        actions: {}
    }, n)
      , c = {
        deep: !0
    };
    let d, u, h = new Set, g = new Set, m;
    const x = s.state.value[e];
    !o && !x && (s.state.value[e] = {});
    let S;
    function T(K) {
        let W;
        d = u = !1,
        typeof K == "function" ? (K(s.state.value[e]),
        W = {
            type: tn.patchFunction,
            storeId: e,
            events: m
        }) : (Cs(s.state.value[e], K),
        W = {
            type: tn.patchObject,
            payload: K,
            storeId: e,
            events: m
        });
        const oe = S = Symbol();
        kn().then( () => {
            S === oe && (d = !0)
        }
        ),
        u = !0,
        Tt(h, W, s.state.value[e])
    }
    const I = o ? function() {
        const {state: W} = n
          , oe = W ? W() : {};
        this.$patch(ge => {
            at(ge, oe)
        }
        )
    }
    : ii;
    function N() {
        i.stop(),
        h.clear(),
        g.clear(),
        s._s.delete(e)
    }
    const M = (K, W="") => {
        if (Ar in K)
            return K[cs] = W,
            K;
        const oe = function() {
            qn(s);
            const ge = Array.from(arguments)
              , Ce = new Set
              , be = new Set;
            function yt(U) {
                Ce.add(U)
            }
            function it(U) {
                be.add(U)
            }
            Tt(g, {
                args: ge,
                name: oe[cs],
                store: G,
                after: yt,
                onError: it
            });
            let re;
            try {
                re = K.apply(this && this.$id === e ? this : G, ge)
            } catch (U) {
                throw Tt(be, U),
                U
            }
            return re instanceof Promise ? re.then(U => (Tt(Ce, U),
            U)).catch(U => (Tt(be, U),
            Promise.reject(U))) : (Tt(Ce, re),
            re)
        };
        return oe[Ar] = !0,
        oe[cs] = W,
        oe
    }
      , D = {
        _p: s,
        $id: e,
        $onAction: Cr.bind(null, g),
        $patch: T,
        $reset: I,
        $subscribe(K, W={}) {
            const oe = Cr(h, K, W.detached, () => ge())
              , ge = i.run( () => Jt( () => s.state.value[e], Ce => {
                (W.flush === "sync" ? u : d) && K({
                    storeId: e,
                    type: tn.direct,
                    events: m
                }, Ce)
            }
            , at({}, c, W)));
            return oe
        },
        $dispose: N
    }
      , G = hn(D);
    s._s.set(e, G);
    const X = (s._a && s._a.runWithContext || zc)( () => s._e.run( () => (i = so()).run( () => t({
        action: M
    }))));
    for (const K in X) {
        const W = X[K];
        if (le(W) && !Xc(W) || tt(W))
            o || (x && Qc(W) && (le(W) ? W.value = x[K] : Cs(W, x[K])),
            s.state.value[e][K] = W);
        else if (typeof W == "function") {
            const oe = M(W, K);
            X[K] = oe,
            l.actions[K] = W
        }
    }
    return at(G, X),
    at(Y(G), X),
    Object.defineProperty(G, "$state", {
        get: () => s.state.value[e],
        set: K => {
            T(W => {
                at(W, K)
            }
            )
        }
    }),
    s._p.forEach(K => {
        at(G, i.run( () => K({
            store: G,
            app: s._a,
            pinia: s,
            options: l
        })))
    }
    ),
    x && o && n.hydrate && n.hydrate(G.$state, x),
    d = !0,
    u = !0,
    G
}
function ea(e, t, n) {
    let s;
    const r = typeof t == "function";
    s = r ? n : t;
    function o(i, l) {
        const c = ml();
        return i = i || (c ? je(oi, null) : null),
        i && qn(i),
        i = ri,
        i._s.has(e) || (r ? li(e, t, s, i) : Zc(e, s, i)),
        i._s.get(e)
    }
    return o.$id = e,
    o
}
const Dt = typeof document < "u";
function ci(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function ta(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ci(e.default)
}
const J = Object.assign;
function as(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = Be(r) ? r.map(e) : e(r)
    }
    return n
}
const nn = () => {}
  , Be = Array.isArray;
function Or(e, t) {
    const n = {};
    for (const s in e)
        n[s] = s in t ? t[s] : e[s];
    return n
}
const ai = /#/g
  , na = /&/g
  , sa = /\//g
  , ra = /=/g
  , oa = /\?/g
  , ui = /\+/g
  , ia = /%5B/g
  , la = /%5D/g
  , fi = /%5E/g
  , ca = /%60/g
  , di = /%7B/g
  , aa = /%7C/g
  , hi = /%7D/g
  , ua = /%20/g;
function Ys(e) {
    return e == null ? "" : encodeURI("" + e).replace(aa, "|").replace(ia, "[").replace(la, "]")
}
function fa(e) {
    return Ys(e).replace(di, "{").replace(hi, "}").replace(fi, "^")
}
function As(e) {
    return Ys(e).replace(ui, "%2B").replace(ua, "+").replace(ai, "%23").replace(na, "%26").replace(ca, "`").replace(di, "{").replace(hi, "}").replace(fi, "^")
}
function da(e) {
    return As(e).replace(ra, "%3D")
}
function ha(e) {
    return Ys(e).replace(ai, "%23").replace(oa, "%3F")
}
function pa(e) {
    return ha(e).replace(sa, "%2F")
}
function un(e) {
    if (e == null)
        return null;
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const ga = /\/$/
  , ma = e => e.replace(ga, "");
function us(e, t, n="/") {
    let s, r = {}, o = "", i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return c = l >= 0 && c > l ? -1 : c,
    c >= 0 && (s = t.slice(0, c),
    o = t.slice(c, l > 0 ? l : t.length),
    r = e(o.slice(1))),
    l >= 0 && (s = s || t.slice(0, l),
    i = t.slice(l, t.length)),
    s = ba(s ?? t, n),
    {
        fullPath: s + o + i,
        path: s,
        query: r,
        hash: un(i)
    }
}
function _a(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Ir(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function va(e, t, n) {
    const s = t.matched.length - 1
      , r = n.matched.length - 1;
    return s > -1 && s === r && Bt(t.matched[s], n.matched[r]) && pi(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Bt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function pi(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (var n in e)
        if (!ya(e[n], t[n]))
            return !1;
    return !0
}
function ya(e, t) {
    return Be(e) ? Pr(e, t) : Be(t) ? Pr(t, e) : e?.valueOf() === t?.valueOf()
}
function Pr(e, t) {
    return Be(t) ? e.length === t.length && e.every( (n, s) => n === t[s]) : e.length === 1 && e[0] === t
}
function ba(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , s = e.split("/")
      , r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let o = n.length - 1, i, l;
    for (i = 0; i < s.length; i++)
        if (l = s[i],
        l !== ".")
            if (l === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + s.slice(i).join("/")
}
const ct = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
let Os = (function(e) {
    return e.pop = "pop",
    e.push = "push",
    e
}
)({})
  , fs = (function(e) {
    return e.back = "back",
    e.forward = "forward",
    e.unknown = "",
    e
}
)({});
function wa(e) {
    if (!e)
        if (Dt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    ma(e)
}
const xa = /^[^#]+#/;
function Sa(e, t) {
    return e.replace(xa, "#") + t
}
function Ea(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const Yn = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Ra(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , s = typeof n == "string" && n.startsWith("#")
          , r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = Ea(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Tr(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Is = new Map;
function Ca(e, t) {
    Is.set(e, t)
}
function Aa(e) {
    const t = Is.get(e);
    return Is.delete(e),
    t
}
function Oa(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function gi(e) {
    return typeof e == "string" || typeof e == "symbol"
}
let ie = (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND",
    e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT",
    e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED",
    e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED",
    e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED",
    e
}
)({});
const mi = Symbol("");
ie.MATCHER_NOT_FOUND + "",
ie.NAVIGATION_GUARD_REDIRECT + "",
ie.NAVIGATION_ABORTED + "",
ie.NAVIGATION_CANCELLED + "",
ie.NAVIGATION_DUPLICATED + "";
function Ht(e, t) {
    return J(new Error, {
        type: e,
        [mi]: !0
    }, t)
}
function Xe(e, t) {
    return e instanceof Error && mi in e && (t == null || !!(e.type & t))
}
const Ia = ["params", "query", "hash"];
function Pa(e) {
    if (typeof e == "string")
        return e;
    if (e.path != null)
        return e.path;
    const t = {};
    for (const n of Ia)
        n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2)
}
function Ta(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < n.length; ++s) {
        const r = n[s].replace(ui, " ")
          , o = r.indexOf("=")
          , i = un(o < 0 ? r : r.slice(0, o))
          , l = o < 0 ? null : un(r.slice(o + 1));
        if (i in t) {
            let c = t[i];
            Be(c) || (c = t[i] = [c]),
            c.push(l)
        } else
            t[i] = l
    }
    return t
}
function Nr(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = da(n),
        s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Be(s) ? s.map(r => r && As(r)) : [s && As(s)]).forEach(r => {
            r !== void 0 && (t += (t.length ? "&" : "") + n,
            r != null && (t += "=" + r))
        }
        )
    }
    return t
}
function Na(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = Be(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}
const Da = Symbol("")
  , Dr = Symbol("")
  , zn = Symbol("")
  , _i = Symbol("")
  , Ps = Symbol("");
function Kt() {
    let e = [];
    function t(s) {
        return e.push(s),
        () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function ht(e, t, n, s, r, o=i => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise( (l, c) => {
        const d = g => {
            g === !1 ? c(Ht(ie.NAVIGATION_ABORTED, {
                from: n,
                to: t
            })) : g instanceof Error ? c(g) : Oa(g) ? c(Ht(ie.NAVIGATION_GUARD_REDIRECT, {
                from: t,
                to: g
            })) : (i && s.enterCallbacks[r] === i && typeof g == "function" && i.push(g),
            l())
        }
          , u = o( () => e.call(s && s.instances[r], t, n, d));
        let h = Promise.resolve(u);
        e.length < 3 && (h = h.then(d)),
        h.catch(g => c(g))
    }
    )
}
function ds(e, t, n, s, r=o => o()) {
    const o = [];
    for (const i of e)
        for (const l in i.components) {
            let c = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (ci(c)) {
                    const d = (c.__vccOpts || c)[t];
                    d && o.push(ht(d, n, s, i, l, r))
                } else {
                    let d = c();
                    o.push( () => d.then(u => {
                        if (!u)
                            throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
                        const h = ta(u) ? u.default : u;
                        i.mods[l] = u,
                        i.components[l] = h;
                        const g = (h.__vccOpts || h)[t];
                        return g && ht(g, n, s, i, l, r)()
                    }
                    ))
                }
        }
    return o
}
function Ma(e, t) {
    const n = []
      , s = []
      , r = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find(d => Bt(d, l)) ? s.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find(d => Bt(d, c)) || r.push(c))
    }
    return [n, s, r]
}
let La = () => location.protocol + "//" + location.host;
function vi(e, t) {
    const {pathname: n, search: s, hash: r} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let i = r.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = r.slice(i);
        return l[0] !== "/" && (l = "/" + l),
        Ir(l, "")
    }
    return Ir(n, e) + s + r
}
function Fa(e, t, n, s) {
    let r = []
      , o = []
      , i = null;
    const l = ({state: g}) => {
        const m = vi(e, location)
          , x = n.value
          , S = t.value;
        let T = 0;
        if (g) {
            if (n.value = m,
            t.value = g,
            i && i === x) {
                i = null;
                return
            }
            T = S ? g.position - S.position : 0
        } else
            s(m);
        r.forEach(I => {
            I(n.value, x, {
                delta: T,
                type: Os.pop,
                direction: T ? T > 0 ? fs.forward : fs.back : fs.unknown
            })
        }
        )
    }
    ;
    function c() {
        i = n.value
    }
    function d(g) {
        r.push(g);
        const m = () => {
            const x = r.indexOf(g);
            x > -1 && r.splice(x, 1)
        }
        ;
        return o.push(m),
        m
    }
    function u() {
        if (document.visibilityState === "hidden") {
            const {history: g} = window;
            if (!g.state)
                return;
            g.replaceState(J({}, g.state, {
                scroll: Yn()
            }), "")
        }
    }
    function h() {
        for (const g of o)
            g();
        o = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("pagehide", u),
        document.removeEventListener("visibilitychange", u)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("pagehide", u),
    document.addEventListener("visibilitychange", u),
    {
        pauseListeners: c,
        listen: d,
        destroy: h
    }
}
function Mr(e, t, n, s=!1, r=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? Yn() : null
    }
}
function ja(e) {
    const {history: t, location: n} = window
      , s = {
        value: vi(e, n)
    }
      , r = {
        value: t.state
    };
    r.value || o(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(c, d, u) {
        const h = e.indexOf("#")
          , g = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + c : La() + e + c;
        try {
            t[u ? "replaceState" : "pushState"](d, "", g),
            r.value = d
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](g)
        }
    }
    function i(c, d) {
        o(c, J({}, t.state, Mr(r.value.back, c, r.value.forward, !0), d, {
            position: r.value.position
        }), !0),
        s.value = c
    }
    function l(c, d) {
        const u = J({}, r.value, t.state, {
            forward: c,
            scroll: Yn()
        });
        o(u.current, u, !0),
        o(c, J({}, Mr(s.value, c, null), {
            position: u.position + 1
        }, d), !1),
        s.value = c
    }
    return {
        location: s,
        state: r,
        push: l,
        replace: i
    }
}
function Va(e) {
    e = wa(e);
    const t = ja(e)
      , n = Fa(e, t.state, t.location, t.replace);
    function s(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const r = J({
        location: "",
        base: e,
        go: s,
        createHref: Sa.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(r, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    r
}
let Et = (function(e) {
    return e[e.Static = 0] = "Static",
    e[e.Param = 1] = "Param",
    e[e.Group = 2] = "Group",
    e
}
)({});
var ue = (function(e) {
    return e[e.Static = 0] = "Static",
    e[e.Param = 1] = "Param",
    e[e.ParamRegExp = 2] = "ParamRegExp",
    e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd",
    e[e.EscapeNext = 4] = "EscapeNext",
    e
}
)(ue || {});
const Ba = {
    type: Et.Static,
    value: ""
}
  , Ha = /[a-zA-Z0-9_]/;
function Ua(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Ba]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${d}": ${m}`)
    }
    let n = ue.Static
      , s = n;
    const r = [];
    let o;
    function i() {
        o && r.push(o),
        o = []
    }
    let l = 0, c, d = "", u = "";
    function h() {
        d && (n === ue.Static ? o.push({
            type: Et.Static,
            value: d
        }) : n === ue.Param || n === ue.ParamRegExp || n === ue.ParamRegExpEnd ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: Et.Param,
            value: d,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        d = "")
    }
    function g() {
        d += c
    }
    for (; l < e.length; ) {
        if (c = e[l++],
        c === "\\" && n !== ue.ParamRegExp) {
            s = n,
            n = ue.EscapeNext;
            continue
        }
        switch (n) {
        case ue.Static:
            c === "/" ? (d && h(),
            i()) : c === ":" ? (h(),
            n = ue.Param) : g();
            break;
        case ue.EscapeNext:
            g(),
            n = s;
            break;
        case ue.Param:
            c === "(" ? n = ue.ParamRegExp : Ha.test(c) ? g() : (h(),
            n = ue.Static,
            c !== "*" && c !== "?" && c !== "+" && l--);
            break;
        case ue.ParamRegExp:
            c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = ue.ParamRegExpEnd : u += c;
            break;
        case ue.ParamRegExpEnd:
            h(),
            n = ue.Static,
            c !== "*" && c !== "?" && c !== "+" && l--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === ue.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`),
    h(),
    i(),
    r
}
const Lr = "[^/]+?"
  , ka = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
};
var _e = (function(e) {
    return e[e._multiplier = 10] = "_multiplier",
    e[e.Root = 90] = "Root",
    e[e.Segment = 40] = "Segment",
    e[e.SubSegment = 30] = "SubSegment",
    e[e.Static = 40] = "Static",
    e[e.Dynamic = 20] = "Dynamic",
    e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp",
    e[e.BonusWildcard = -50] = "BonusWildcard",
    e[e.BonusRepeatable = -20] = "BonusRepeatable",
    e[e.BonusOptional = -8] = "BonusOptional",
    e[e.BonusStrict = .7000000000000001] = "BonusStrict",
    e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive",
    e
}
)(_e || {});
const Ga = /[.+*?^${}()[\]/\\]/g;
function Ka(e, t) {
    const n = J({}, ka, t)
      , s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const d of e) {
        const u = d.length ? [] : [_e.Root];
        n.strict && !d.length && (r += "/");
        for (let h = 0; h < d.length; h++) {
            const g = d[h];
            let m = _e.Segment + (n.sensitive ? _e.BonusCaseSensitive : 0);
            if (g.type === Et.Static)
                h || (r += "/"),
                r += g.value.replace(Ga, "\\$&"),
                m += _e.Static;
            else if (g.type === Et.Param) {
                const {value: x, repeatable: S, optional: T, regexp: I} = g;
                o.push({
                    name: x,
                    repeatable: S,
                    optional: T
                });
                const N = I || Lr;
                if (N !== Lr) {
                    m += _e.BonusCustomRegExp;
                    try {
                        `${N}`
                    } catch (D) {
                        throw new Error(`Invalid custom RegExp for param "${x}" (${N}): ` + D.message)
                    }
                }
                let M = S ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
                h || (M = T && d.length < 2 ? `(?:/${M})` : "/" + M),
                T && (M += "?"),
                r += M,
                m += _e.Dynamic,
                T && (m += _e.BonusOptional),
                S && (m += _e.BonusRepeatable),
                N === ".*" && (m += _e.BonusWildcard)
            }
            u.push(m)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const d = s.length - 1;
        s[d][s[d].length - 1] += _e.BonusStrict
    }
    n.strict || (r += "/?"),
    n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const i = new RegExp(r,n.sensitive ? "" : "i");
    function l(d) {
        const u = d.match(i)
          , h = {};
        if (!u)
            return null;
        for (let g = 1; g < u.length; g++) {
            const m = u[g] || ""
              , x = o[g - 1];
            h[x.name] = m && x.repeatable ? m.split("/") : m
        }
        return h
    }
    function c(d) {
        let u = ""
          , h = !1;
        for (const g of e) {
            (!h || !u.endsWith("/")) && (u += "/"),
            h = !1;
            for (const m of g)
                if (m.type === Et.Static)
                    u += m.value;
                else if (m.type === Et.Param) {
                    const {value: x, repeatable: S, optional: T} = m
                      , I = x in d ? d[x] : "";
                    if (Be(I) && !S)
                        throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);
                    const N = Be(I) ? I.join("/") : I;
                    if (!N)
                        if (T)
                            g.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0);
                        else
                            throw new Error(`Missing required param "${x}"`);
                    u += N
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: s,
        keys: o,
        parse: l,
        stringify: c
    }
}
function Wa(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s)
            return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === _e.Static + _e.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === _e.Static + _e.Segment ? 1 : -1 : 0
}
function yi(e, t) {
    let n = 0;
    const s = e.score
      , r = t.score;
    for (; n < s.length && n < r.length; ) {
        const o = Wa(s[n], r[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (Fr(s))
            return 1;
        if (Fr(r))
            return -1
    }
    return r.length - s.length
}
function Fr(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const $a = {
    strict: !1,
    end: !0,
    sensitive: !1
};
function qa(e, t, n) {
    const s = Ka(Ua(e.path), n)
      , r = J(s, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function Ya(e, t) {
    const n = []
      , s = new Map;
    t = Or($a, t);
    function r(h) {
        return s.get(h)
    }
    function o(h, g, m) {
        const x = !m
          , S = Vr(h);
        S.aliasOf = m && m.record;
        const T = Or(t, h)
          , I = [S];
        if ("alias"in h) {
            const D = typeof h.alias == "string" ? [h.alias] : h.alias;
            for (const G of D)
                I.push(Vr(J({}, S, {
                    components: m ? m.record.components : S.components,
                    path: G,
                    aliasOf: m ? m.record : S
                })))
        }
        let N, M;
        for (const D of I) {
            const {path: G} = D;
            if (g && G[0] !== "/") {
                const fe = g.record.path
                  , X = fe[fe.length - 1] === "/" ? "" : "/";
                D.path = g.record.path + (G && X + G)
            }
            if (N = qa(D, g, T),
            m ? m.alias.push(N) : (M = M || N,
            M !== N && M.alias.push(N),
            x && h.name && !Br(N) && i(h.name)),
            bi(N) && c(N),
            S.children) {
                const fe = S.children;
                for (let X = 0; X < fe.length; X++)
                    o(fe[X], N, m && m.children[X])
            }
            m = m || N
        }
        return M ? () => {
            i(M)
        }
        : nn
    }
    function i(h) {
        if (gi(h)) {
            const g = s.get(h);
            g && (s.delete(h),
            n.splice(n.indexOf(g), 1),
            g.children.forEach(i),
            g.alias.forEach(i))
        } else {
            const g = n.indexOf(h);
            g > -1 && (n.splice(g, 1),
            h.record.name && s.delete(h.record.name),
            h.children.forEach(i),
            h.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function c(h) {
        const g = Qa(h, n);
        n.splice(g, 0, h),
        h.record.name && !Br(h) && s.set(h.record.name, h)
    }
    function d(h, g) {
        let m, x = {}, S, T;
        if ("name"in h && h.name) {
            if (m = s.get(h.name),
            !m)
                throw Ht(ie.MATCHER_NOT_FOUND, {
                    location: h
                });
            T = m.record.name,
            x = J(jr(g.params, m.keys.filter(M => !M.optional).concat(m.parent ? m.parent.keys.filter(M => M.optional) : []).map(M => M.name)), h.params && jr(h.params, m.keys.map(M => M.name))),
            S = m.stringify(x)
        } else if (h.path != null)
            S = h.path,
            m = n.find(M => M.re.test(S)),
            m && (x = m.parse(S),
            T = m.record.name);
        else {
            if (m = g.name ? s.get(g.name) : n.find(M => M.re.test(g.path)),
            !m)
                throw Ht(ie.MATCHER_NOT_FOUND, {
                    location: h,
                    currentLocation: g
                });
            T = m.record.name,
            x = J({}, g.params, h.params),
            S = m.stringify(x)
        }
        const I = [];
        let N = m;
        for (; N; )
            I.unshift(N.record),
            N = N.parent;
        return {
            name: T,
            path: S,
            params: x,
            matched: I,
            meta: Ja(I)
        }
    }
    e.forEach(h => o(h));
    function u() {
        n.length = 0,
        s.clear()
    }
    return {
        addRoute: o,
        resolve: d,
        removeRoute: i,
        clearRoutes: u,
        getRoutes: l,
        getRecordMatcher: r
    }
}
function jr(e, t) {
    const n = {};
    for (const s of t)
        s in e && (n[s] = e[s]);
    return n
}
function Vr(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: za(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function za(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const s in e.components)
            t[s] = typeof n == "object" ? n[s] : n;
    return t
}
function Br(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Ja(e) {
    return e.reduce( (t, n) => J(t, n.meta), {})
}
function Qa(e, t) {
    let n = 0
      , s = t.length;
    for (; n !== s; ) {
        const o = n + s >> 1;
        yi(e, t[o]) < 0 ? s = o : n = o + 1
    }
    const r = Xa(e);
    return r && (s = t.lastIndexOf(r, s - 1)),
    s
}
function Xa(e) {
    let t = e;
    for (; t = t.parent; )
        if (bi(t) && yi(e, t) === 0)
            return t
}
function bi({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function Hr(e) {
    const t = je(zn)
      , n = je(_i)
      , s = Me( () => {
        const c = Re(e.to);
        return t.resolve(c)
    }
    )
      , r = Me( () => {
        const {matched: c} = s.value
          , {length: d} = c
          , u = c[d - 1]
          , h = n.matched;
        if (!u || !h.length)
            return -1;
        const g = h.findIndex(Bt.bind(null, u));
        if (g > -1)
            return g;
        const m = Ur(c[d - 2]);
        return d > 1 && Ur(u) === m && h[h.length - 1].path !== m ? h.findIndex(Bt.bind(null, c[d - 2])) : g
    }
    )
      , o = Me( () => r.value > -1 && su(n.params, s.value.params))
      , i = Me( () => r.value > -1 && r.value === n.matched.length - 1 && pi(n.params, s.value.params));
    function l(c={}) {
        if (nu(c)) {
            const d = t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(nn);
            return e.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => d),
            d
        }
        return Promise.resolve()
    }
    return {
        route: s,
        href: Me( () => s.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l
    }
}
function Za(e) {
    return e.length === 1 ? e[0] : e
}
const eu = Po({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: Hr,
    setup(e, {slots: t}) {
        const n = hn(Hr(e))
          , {options: s} = je(zn)
          , r = Me( () => ({
            [kr(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [kr(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && Za(t.default(n));
            return e.custom ? o : ni("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
})
  , tu = eu;
function nu(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function su(e, t) {
    for (const n in t) {
        const s = t[n]
          , r = e[n];
        if (typeof s == "string") {
            if (s !== r)
                return !1
        } else if (!Be(r) || r.length !== s.length || s.some( (o, i) => o.valueOf() !== r[i].valueOf()))
            return !1
    }
    return !0
}
function Ur(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const kr = (e, t, n) => e ?? t ?? n
  , ru = Po({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const s = je(Ps)
          , r = Me( () => e.route || s.value)
          , o = je(Dr, 0)
          , i = Me( () => {
            let d = Re(o);
            const {matched: u} = r.value;
            let h;
            for (; (h = u[d]) && !h.components; )
                d++;
            return d
        }
        )
          , l = Me( () => r.value.matched[i.value]);
        bn(Dr, Me( () => i.value + 1)),
        bn(Da, l),
        bn(Ps, r);
        const c = on();
        return Jt( () => [c.value, l.value, e.name], ([d,u,h], [g,m,x]) => {
            u && (u.instances[h] = d,
            m && m !== u && d && d === g && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            d && u && (!m || !Bt(u, m) || !g) && (u.enterCallbacks[h] || []).forEach(S => S(d))
        }
        , {
            flush: "post"
        }),
        () => {
            const d = r.value
              , u = e.name
              , h = l.value
              , g = h && h.components[u];
            if (!g)
                return Gr(n.default, {
                    Component: g,
                    route: d
                });
            const m = h.props[u]
              , x = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null
              , T = ni(g, J({}, x, t, {
                onVnodeUnmounted: I => {
                    I.component.isUnmounted && (h.instances[u] = null)
                }
                ,
                ref: c
            }));
            return Gr(n.default, {
                Component: T,
                route: d
            }) || T
        }
    }
});
function Gr(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const wi = ru;
function ou(e) {
    const t = Ya(e.routes, e)
      , n = e.parseQuery || Ta
      , s = e.stringifyQuery || Nr
      , r = e.history
      , o = Kt()
      , i = Kt()
      , l = Kt()
      , c = nl(ct);
    let d = ct;
    Dt && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = as.bind(null, y => "" + y)
      , h = as.bind(null, pa)
      , g = as.bind(null, un);
    function m(y, P) {
        let A, L;
        return gi(y) ? (A = t.getRecordMatcher(y),
        L = P) : L = y,
        t.addRoute(L, A)
    }
    function x(y) {
        const P = t.getRecordMatcher(y);
        P && t.removeRoute(P)
    }
    function S() {
        return t.getRoutes().map(y => y.record)
    }
    function T(y) {
        return !!t.getRecordMatcher(y)
    }
    function I(y, P) {
        if (P = J({}, P || c.value),
        typeof y == "string") {
            const p = us(n, y, P.path)
              , _ = t.resolve({
                path: p.path
            }, P)
              , b = r.createHref(p.fullPath);
            return J(p, _, {
                params: g(_.params),
                hash: un(p.hash),
                redirectedFrom: void 0,
                href: b
            })
        }
        let A;
        if (y.path != null)
            A = J({}, y, {
                path: us(n, y.path, P.path).path
            });
        else {
            const p = J({}, y.params);
            for (const _ in p)
                p[_] == null && delete p[_];
            A = J({}, y, {
                params: h(p)
            }),
            P.params = h(P.params)
        }
        const L = t.resolve(A, P)
          , $ = y.hash || "";
        L.params = u(g(L.params));
        const a = _a(s, J({}, y, {
            hash: fa($),
            path: L.path
        }))
          , f = r.createHref(a);
        return J({
            fullPath: a,
            hash: $,
            query: s === Nr ? Na(y.query) : y.query || {}
        }, L, {
            redirectedFrom: void 0,
            href: f
        })
    }
    function N(y) {
        return typeof y == "string" ? us(n, y, c.value.path) : J({}, y)
    }
    function M(y, P) {
        if (d !== y)
            return Ht(ie.NAVIGATION_CANCELLED, {
                from: P,
                to: y
            })
    }
    function D(y) {
        return X(y)
    }
    function G(y) {
        return D(J(N(y), {
            replace: !0
        }))
    }
    function fe(y, P) {
        const A = y.matched[y.matched.length - 1];
        if (A && A.redirect) {
            const {redirect: L} = A;
            let $ = typeof L == "function" ? L(y, P) : L;
            return typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = N($) : {
                path: $
            },
            $.params = {}),
            J({
                query: y.query,
                hash: y.hash,
                params: $.path != null ? {} : y.params
            }, $)
        }
    }
    function X(y, P) {
        const A = d = I(y)
          , L = c.value
          , $ = y.state
          , a = y.force
          , f = y.replace === !0
          , p = fe(A, L);
        if (p)
            return X(J(N(p), {
                state: typeof p == "object" ? J({}, $, p.state) : $,
                force: a,
                replace: f
            }), P || A);
        const _ = A;
        _.redirectedFrom = P;
        let b;
        return !a && va(s, L, A) && (b = Ht(ie.NAVIGATION_DUPLICATED, {
            to: _,
            from: L
        }),
        He(L, L, !0, !1)),
        (b ? Promise.resolve(b) : oe(_, L)).catch(v => Xe(v) ? Xe(v, ie.NAVIGATION_GUARD_REDIRECT) ? v : lt(v) : z(v, _, L)).then(v => {
            if (v) {
                if (Xe(v, ie.NAVIGATION_GUARD_REDIRECT))
                    return X(J({
                        replace: f
                    }, N(v.to), {
                        state: typeof v.to == "object" ? J({}, $, v.to.state) : $,
                        force: a
                    }), P || _)
            } else
                v = Ce(_, L, !0, f, $);
            return ge(_, L, v),
            v
        }
        )
    }
    function K(y, P) {
        const A = M(y, P);
        return A ? Promise.reject(A) : Promise.resolve()
    }
    function W(y) {
        const P = It.values().next().value;
        return P && typeof P.runWithContext == "function" ? P.runWithContext(y) : y()
    }
    function oe(y, P) {
        let A;
        const [L,$,a] = Ma(y, P);
        A = ds(L.reverse(), "beforeRouteLeave", y, P);
        for (const p of L)
            p.leaveGuards.forEach(_ => {
                A.push(ht(_, y, P))
            }
            );
        const f = K.bind(null, y, P);
        return A.push(f),
        Ne(A).then( () => {
            A = [];
            for (const p of o.list())
                A.push(ht(p, y, P));
            return A.push(f),
            Ne(A)
        }
        ).then( () => {
            A = ds($, "beforeRouteUpdate", y, P);
            for (const p of $)
                p.updateGuards.forEach(_ => {
                    A.push(ht(_, y, P))
                }
                );
            return A.push(f),
            Ne(A)
        }
        ).then( () => {
            A = [];
            for (const p of a)
                if (p.beforeEnter)
                    if (Be(p.beforeEnter))
                        for (const _ of p.beforeEnter)
                            A.push(ht(_, y, P));
                    else
                        A.push(ht(p.beforeEnter, y, P));
            return A.push(f),
            Ne(A)
        }
        ).then( () => (y.matched.forEach(p => p.enterCallbacks = {}),
        A = ds(a, "beforeRouteEnter", y, P, W),
        A.push(f),
        Ne(A))).then( () => {
            A = [];
            for (const p of i.list())
                A.push(ht(p, y, P));
            return A.push(f),
            Ne(A)
        }
        ).catch(p => Xe(p, ie.NAVIGATION_CANCELLED) ? p : Promise.reject(p))
    }
    function ge(y, P, A) {
        l.list().forEach(L => W( () => L(y, P, A)))
    }
    function Ce(y, P, A, L, $) {
        const a = M(y, P);
        if (a)
            return a;
        const f = P === ct
          , p = Dt ? history.state : {};
        A && (L || f ? r.replace(y.fullPath, J({
            scroll: f && p && p.scroll
        }, $)) : r.push(y.fullPath, $)),
        c.value = y,
        He(y, P, A, f),
        lt()
    }
    let be;
    function yt() {
        be || (be = r.listen( (y, P, A) => {
            if (!bt.listening)
                return;
            const L = I(y)
              , $ = fe(L, bt.currentRoute.value);
            if ($) {
                X(J($, {
                    replace: !0,
                    force: !0
                }), L).catch(nn);
                return
            }
            d = L;
            const a = c.value;
            Dt && Ca(Tr(a.fullPath, A.delta), Yn()),
            oe(L, a).catch(f => Xe(f, ie.NAVIGATION_ABORTED | ie.NAVIGATION_CANCELLED) ? f : Xe(f, ie.NAVIGATION_GUARD_REDIRECT) ? (X(J(N(f.to), {
                force: !0
            }), L).then(p => {
                Xe(p, ie.NAVIGATION_ABORTED | ie.NAVIGATION_DUPLICATED) && !A.delta && A.type === Os.pop && r.go(-1, !1)
            }
            ).catch(nn),
            Promise.reject()) : (A.delta && r.go(-A.delta, !1),
            z(f, L, a))).then(f => {
                f = f || Ce(L, a, !1),
                f && (A.delta && !Xe(f, ie.NAVIGATION_CANCELLED) ? r.go(-A.delta, !1) : A.type === Os.pop && Xe(f, ie.NAVIGATION_ABORTED | ie.NAVIGATION_DUPLICATED) && r.go(-1, !1)),
                ge(L, a, f)
            }
            ).catch(nn)
        }
        ))
    }
    let it = Kt(), re = Kt(), U;
    function z(y, P, A) {
        lt(y);
        const L = re.list();
        return L.length ? L.forEach($ => $(y, P, A)) : console.error(y),
        Promise.reject(y)
    }
    function Je() {
        return U && c.value !== ct ? Promise.resolve() : new Promise( (y, P) => {
            it.add([y, P])
        }
        )
    }
    function lt(y) {
        return U || (U = !y,
        yt(),
        it.list().forEach( ([P,A]) => y ? A(y) : P()),
        it.reset()),
        y
    }
    function He(y, P, A, L) {
        const {scrollBehavior: $} = e;
        if (!Dt || !$)
            return Promise.resolve();
        const a = !A && Aa(Tr(y.fullPath, 0)) || (L || !A) && history.state && history.state.scroll || null;
        return kn().then( () => $(y, P, a)).then(f => f && Ra(f)).catch(f => z(f, y, P))
    }
    const we = y => r.go(y);
    let Ot;
    const It = new Set
      , bt = {
        currentRoute: c,
        listening: !0,
        addRoute: m,
        removeRoute: x,
        clearRoutes: t.clearRoutes,
        hasRoute: T,
        getRoutes: S,
        resolve: I,
        options: e,
        push: D,
        replace: G,
        go: we,
        back: () => we(-1),
        forward: () => we(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: re.add,
        isReady: Je,
        install(y) {
            y.component("RouterLink", tu),
            y.component("RouterView", wi),
            y.config.globalProperties.$router = bt,
            Object.defineProperty(y.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Re(c)
            }),
            Dt && !Ot && c.value === ct && (Ot = !0,
            D(r.location).catch(L => {}
            ));
            const P = {};
            for (const L in ct)
                Object.defineProperty(P, L, {
                    get: () => c.value[L],
                    enumerable: !0
                });
            y.provide(zn, bt),
            y.provide(_i, bo(P)),
            y.provide(Ps, c);
            const A = y.unmount;
            It.add(y),
            y.unmount = function() {
                It.delete(y),
                It.size < 1 && (d = ct,
                be && be(),
                be = null,
                c.value = ct,
                Ot = !1,
                U = !1),
                A()
            }
        }
    };
    function Ne(y) {
        return y.reduce( (P, A) => P.then( () => W(A)), Promise.resolve())
    }
    return bt
}
function xi() {
    return je(zn)
}
const iu = {
    __name: "App",
    setup(e) {
        return (t, n) => (Ee(),
        Ws(Re(wi)))
    }
};
function hs(e) {
    return new Promise( (t, n) => {
        if ([...document.scripts].some(r => r.src.includes(e))) {
            t();
            return
        }
        const s = document.createElement("script");
        s.src = e,
        s.type = "text/javascript",
        s.defer = !0,
        s.onload = t,
        s.onerror = n,
        document.body.appendChild(s)
    }
    )
}
const Kr = "game_simple_config"
  , Si = ea("game", {
    state: () => {
        let e = {};
        try {
            const t = localStorage.getItem(Kr);
            t && (e = JSON.parse(t))
        } catch (t) {
            console.warn("Config load failed", t)
        }
        return {
            started: !1,
            loading: !1,
            ready: !1,
            progress: 0,
            fullscreen: e.fullscreen ?? !0,
            engineReady: !1
        }
    }
    ,
    actions: {
        enterGameMode() {
            this.started = !0,
            this.loading = !0
        },
        async initEngine() {
            if (!this.engineReady)
                try {
                    await hs("/assets/js/GamepadEmulator.js"),
                    await hs("/assets/js/idbfs.js"),
                    await hs("/assets/js/game.js"),
                    this.engineReady = !0,
                    window.VCSKY && window.VCSKY.setConfig && window.VCSKY.setConfig({
                        language: "en",
                        cheats: !1,
                        fullscreen: this.fullscreen,
                        maxFPS: 0
                    }),
                    window.VCSKY.onProgress = e => {
                        this.progress = e
                    }
                    ,
                    window.VCSKY.onReady = () => {
                        this.loading = !1,
                        this.ready = !0
                    }
                    ,
                    window.VCSKY.start()
                } catch (e) {
                    console.error("Engine failed to load:", e),
                    alert("Failed to load game engine. Check console.")
                }
        },
        saveConfig() {
            const e = {
                fullscreen: this.fullscreen
            };
            localStorage.setItem(Kr, JSON.stringify(e))
        }
    }
})
  , mn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,r] of t)
        n[s] = r;
    return n
}
  , lu = {}
  , cu = {
    class: "touch-controls-wrapper"
};
function au(e, t) {
    return Ee(),
    Le("div", cu, [...t[0] || (t[0] = [dc('<div id="move"></div><div id="look"></div><div class="touch-control radio"></div><div class="touch-control weapon"></div><div class="touch-control menu"></div><div class="touch-control fist"></div><div class="touch-control drift"></div><div class="touch-control run"></div><div class="touch-control car getIn"></div><div class="touch-control left"></div><div class="touch-control right"></div><div class="touch-control jump"></div><div class="touch-control car getOut"></div><div class="touch-control camera"></div><div class="touch-control mobile"></div><div class="touch-control job"></div><div class="touch-control horn"></div><div class="touch-control fireRight"></div><div class="touch-control fireLeft"></div>', 19)])])
}
const uu = mn(lu, [["render", au]])
  , fu = ["id"]
  , du = {
    __name: "AdBanner",
    props: {
        placementId: {
            type: String,
            required: !0
        },
        width: {
            type: String,
            default: "300px"
        },
        height: {
            type: String,
            default: "250px"
        }
    },
    setup(e) {
        const t = e;
        return Kn( () => {
            kn( () => {
                window.aiptag && window.aiptag.cmd && window.aiptag.cmd.display && window.aiptag.cmd.display.push(function() {
                    window.aipDisplayTag && window.aipDisplayTag.display(t.placementId)
                })
            }
            )
        }
        ),
        (n, s) => (Ee(),
        Le("div", {
            class: "ad-container",
            style: dn({
                width: e.width,
                height: e.height
            })
        }, [H("div", {
            id: t.placementId
        }, null, 8, fu)], 4))
    }
}
  , fn = mn(du, [["__scopeId", "data-v-3d5aed96"]])
  , hu = {
    class: "emscripten game-layer"
}
  , pu = {
    key: 0,
    class: "loading-container"
}
  , gu = {
    class: "progress-bar-bg"
}
  , mu = {
    class: "progress-percent"
}
  , _u = {
    key: 1,
    class: "start-prompt"
}
  , vu = {
    class: "loading-ads"
}
  , yu = {
    class: "ad-desktop"
}
  , bu = {
    class: "ad-mobile"
}
  , wu = {
    __name: "GameCanvas",
    setup(e) {
        const t = Si()
          , n = on(!0);
        Kn( () => {
            console.log("Canvas mounted, initializing engine..."),
            t.initEngine()
        }
        );
        function s() {
            t.ready && (n.value = !1,
            window.VCSKY && typeof window.VCSKY.launchGame == "function" && window.VCSKY.launchGame())
        }
        return (r, o) => (Ee(),
        Le("div", hu, [o[3] || (o[3] = H("canvas", {
            id: "canvas",
            class: "emscripten",
            oncontextmenu: "event.preventDefault()"
        }, null, -1)), n.value ? (Ee(),
        Le("div", {
            key: 0,
            class: "status-overlay",
            onClick: s,
            onTouchstartPassive: s
        }, [Re(t).loading ? (Ee(),
        Le("div", pu, [o[0] || (o[0] = H("h2", {
            class: "loading-text"
        }, "LOADING VICE CITY", -1)), o[1] || (o[1] = H("h2", {
            class: "loading-subtext"
        }, "this may take some time on first load, be patient", -1)), H("div", gu, [H("div", {
            class: "progress-bar-fill",
            style: dn({
                width: Re(t).progress + "%"
            })
        }, null, 4)]), H("div", mu, qt(Math.floor(Re(t).progress)) + "%", 1)])) : (Ee(),
        Le("div", _u, [...o[2] || (o[2] = [H("h1", {
            class: "blink"
        }, "CLICK ANYWHERE TO START", -1)])])), H("div", vu, [H("div", yu, [ce(fn, {
            placementId: "quenq-com_970x250",
            width: "970px",
            height: "250px"
        })]), H("div", bu, [ce(fn, {
            placementId: "quenq-com_728x90",
            width: "728px",
            height: "90px"
        })])])], 32)) : xs("", !0), ce(uu)]))
    }
}
  , xu = mn(wu, [["__scopeId", "data-v-9c5c7513"]])
  , Su = {
    key: 0,
    class: "home-container"
}
  , Eu = {
    class: "center-content"
}
  , Ru = {
    class: "checkbox-wrapper"
}
  , Cu = ["checked"]
  , Au = {
    class: "ad-wrapper"
}
  , Ou = {
    __name: "Home",
    setup(e) {
        const t = Si()
          , n = xi();
        function s() {
            t.fullscreen = !t.fullscreen,
            t.saveConfig()
        }
        function r() {
            n.push("/save")
        }
        function o() {
            const i = "vc_has_visited";
            localStorage.getItem(i) ? window.show_videoad ? window.show_videoad("quenq.com_preroll", () => {
                t.enterGameMode()
            }
            ) : t.enterGameMode() : (localStorage.setItem(i, "true"),
            t.enterGameMode())
        }
        return (i, l) => (Ee(),
        Le(De, null, [Re(t).started ? xs("", !0) : (Ee(),
        Le("div", Su, [H("div", {
            class: "top-right"
        }, [H("button", {
            class: "btn btn-blue",
            onClick: r
        }, " save manager ")]), H("div", Eu, [l[1] || (l[1] = H("h1", {
            class: "game-title"
        }, "vice city", -1)), l[2] || (l[2] = H("h2", {
            class: "game-subtitle"
        }, "web edition", -1)), H("button", {
            class: "play-btn",
            onClick: o
        }, " play game "), H("label", Ru, [H("input", {
            type: "checkbox",
            checked: Re(t).fullscreen,
            onChange: s
        }, null, 40, Cu), l[0] || (l[0] = H("span", null, "fullscreen mode", -1))]), H("div", Au, [ce(fn, {
            placementId: "quenq-com_300x250",
            width: "300px",
            height: "250px"
        })])])])), Re(t).started ? (Ee(),
        Ws(xu, {
            key: 1
        })) : xs("", !0)], 64))
    }
}
  , Iu = mn(Ou, [["__scopeId", "data-v-96440e9b"]])
  , Ei = "/vc-assets/local/userfiles"
  , Te = "FILE_DATA"
  , Jn = "/vc-assets/local/userfiles/"
  , Pu = 21;
function Tu(e) {
    return new Promise( (t, n) => {
        const s = indexedDB.open(Ei, e);
        s.onupgradeneeded = r => {
            const o = r.target.result;
            let i;
            o.objectStoreNames.contains(Te) ? i = r.target.transaction.objectStore(Te) : i = o.createObjectStore(Te),
            i.indexNames.contains("timestamp") || i.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
        ,
        s.onsuccess = () => t(s.result),
        s.onerror = () => n(s.error)
    }
    )
}
async function Qn() {
    const e = await Tu(Pu);
    if (!e.objectStoreNames.contains(Te))
        throw e.close(),
        new Error(`IndexedDB 缺少 objectStore: ${Te}`);
    return e
}
async function Nu() {
    const e = await Qn()
      , n = e.transaction(Te, "readonly").objectStore(Te)
      , s = {};
    return new Promise( (r, o) => {
        const i = n.openCursor();
        i.onsuccess = l => {
            const c = l.target.result;
            c ? (s[c.key] = c.value,
            c.continue()) : (e.close(),
            r(s))
        }
        ,
        i.onerror = l => {
            e.close(),
            o(l.target.error)
        }
    }
    )
}
async function Du(e) {
    const t = await Qn()
      , s = t.transaction(Te, "readonly").objectStore(Te)
      , r = `${Jn}GTAVCsf${e}.b`;
    return new Promise( (o, i) => {
        const l = s.get(r);
        l.onsuccess = () => {
            t.close(),
            o(l.result || null)
        }
        ,
        l.onerror = c => {
            t.close(),
            i(c.target.error)
        }
    }
    )
}
async function Wr(e, t) {
    const n = await Qn()
      , r = n.transaction(Te, "readwrite").objectStore(Te)
      , o = `${Jn}GTAVCsf${e}.b`
      , i = {
        contents: new Uint8Array(t),
        mode: 33206,
        timestamp: new Date
    };
    return new Promise( (l, c) => {
        const d = r.put(i, o);
        d.onsuccess = () => {
            n.close(),
            localStorage.removeItem("vcsky.saves"),
            l()
        }
        ,
        d.onerror = u => {
            n.close(),
            c(u.target?.error || u)
        }
    }
    )
}
async function Mu(e) {
    const t = await Qn()
      , s = t.transaction(Te, "readwrite").objectStore(Te)
      , r = `${Jn}GTAVCsf${e}.b`;
    return new Promise( (o, i) => {
        const l = s.delete(r);
        l.onsuccess = () => {
            t.close(),
            localStorage.removeItem("vcsky.saves"),
            o()
        }
        ,
        l.onerror = c => {
            t.close(),
            i(c.target.error)
        }
    }
    )
}
async function Lu(e=8) {
    const t = await Nu();
    return Array.from({
        length: e
    }, (n, s) => {
        const r = s + 1
          , o = `${Jn}GTAVCsf${r}.b`
          , i = t[o];
        return {
            index: r,
            exists: !!i,
            size: i?.contents?.length ? i.contents.length : 0,
            loading: !1
        }
    }
    )
}
function Fu() {
    return new Promise( (e, t) => {
        const n = indexedDB.deleteDatabase(Ei);
        n.onsuccess = () => e(),
        n.onerror = () => t(n.error),
        n.onblocked = () => {
            t(new Error("删除被阻止：请关闭其他打开该游戏/存档页面的标签页后重试"))
        }
    }
    )
}
const ju = {
    class: "save-page"
}
  , Vu = {
    class: "ad-top-container"
}
  , Bu = {
    class: "ad-desktop"
}
  , Hu = {
    class: "ad-mobile"
}
  , Uu = {
    class: "slots-grid"
}
  , ku = {
    class: "slot-header"
}
  , Gu = {
    class: "slot-title"
}
  , Ku = {
    class: "slot-info"
}
  , Wu = {
    class: "slot-actions"
}
  , $u = ["onClick"]
  , qu = ["onClick"]
  , Yu = ["onClick", "disabled"]
  , zu = ["onClick", "disabled"]
  , Ju = {
    __name: "Save",
    setup(e) {
        const t = xi()
          , n = on([])
          , s = on(null);
        let r = null;
        function o(x) {
            window.show_videoad ? window.show_videoad("quenq.com_preroll", x) : x()
        }
        async function i() {
            n.value = Array.from({
                length: 8
            }, (x, S) => ({
                index: S + 1,
                exists: !1,
                size: 0,
                loading: !0
            })),
            n.value = await Lu()
        }
        function l(x) {
            r = x.index,
            s.value.click()
        }
        async function c(x) {
            const S = x.target.files[0];
            !S || !r || o(async () => {
                try {
                    await Wr(r, await S.arrayBuffer())
                } catch (T) {
                    alert(T)
                } finally {
                    r = null,
                    x.target.value = "",
                    i()
                }
            }
            )
        }
        function d(x) {
            o(async () => {
                const S = await Du(x.index);
                if (!S)
                    return;
                const T = new Blob([S.contents],{
                    type: "application/octet-stream"
                })
                  , I = document.createElement("a");
                I.href = URL.createObjectURL(T),
                I.download = `GTAVCsf${x.index}.b`,
                I.click()
            }
            )
        }
        function u(x) {
            o(async () => {
                try {
                    const S = await fetch("/GTAVC_SAVE.bin");
                    if (!S.ok)
                        throw new Error("File not found on server");
                    await Wr(x, await S.arrayBuffer())
                } catch (S) {
                    alert(S)
                } finally {
                    i()
                }
            }
            )
        }
        async function h(x) {
            confirm(`Delete Slot ${x.index}?`) && o(async () => {
                await Mu(x.index),
                i()
            }
            )
        }
        async function g() {
            if (confirm("This will wipe all local saves. Continue?"))
                try {
                    await Fu(),
                    alert("Database wiped. Reloading..."),
                    location.reload()
                } catch (x) {
                    alert("Error: " + x)
                }
        }
        function m() {
            t.push("/")
        }
        return Kn(i),
        (x, S) => (Ee(),
        Le("div", ju, [H("div", Vu, [H("div", Bu, [ce(fn, {
            placementId: "quenq-com_728x90",
            width: "728px",
            height: "90px"
        })]), H("div", Hu, [ce(fn, {
            placementId: "quenq-com_300x250",
            width: "300px",
            height: "250px"
        })])]), H("div", {
            class: "save-header"
        }, [S[0] || (S[0] = H("h1", {
            class: "page-title"
        }, "Save Manager", -1)), H("div", {
            class: "actions-bar"
        }, [H("button", {
            onClick: m,
            class: "btn"
        }, "back"), H("button", {
            onClick: i,
            class: "btn btn-blue"
        }, "refresh"), H("button", {
            onClick: g,
            class: "btn btn-red"
        }, "wipe/repair DB")])]), H("input", {
            ref_key: "fileInput",
            ref: s,
            type: "file",
            style: {
                display: "none"
            },
            onChange: c
        }, null, 544), H("div", Uu, [(Ee(!0),
        Le(De, null, Ll(n.value, T => (Ee(),
        Le("div", {
            key: T.index,
            class: "slot-card"
        }, [H("div", ku, [H("span", Gu, "Slot " + qt(T.index), 1), H("span", {
            class: Vn(["slot-status", {
                exists: T.exists
            }])
        }, qt(T.loading ? "..." : T.exists ? "OCCUPIED" : "EMPTY"), 3)]), H("div", Ku, qt(T.exists ? (T.size / 1024).toFixed(1) + " KB" : "-"), 1), H("div", Wu, [H("button", {
            onClick: I => l(T),
            class: "btn btn-small"
        }, "upload", 8, $u), H("button", {
            onClick: I => u(T.index),
            class: "btn btn-small"
        }, "set 100%", 8, qu), H("button", {
            onClick: I => d(T),
            class: "btn btn-small btn-green",
            disabled: !T.exists
        }, "download", 8, Yu), H("button", {
            onClick: I => h(T),
            class: "btn btn-small btn-red",
            disabled: !T.exists
        }, "delete", 8, zu)])]))), 128))])]))
    }
}
  , Qu = mn(Ju, [["__scopeId", "data-v-46cd9ee2"]])
  , Xu = ou({
    history: Va("/"),
    routes: [{
        path: "/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/other/vc/index5.html&html=1",
        name: "home",
        component: Iu
    }]
})
  , zs = Wc(iu);
zs.use(Yc());
zs.use(Xu);
zs.mount("#app");
