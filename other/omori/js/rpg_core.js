function JsExtensions() {
  throw new Error("This is not a class");
}
Number.prototype.clamp = function (_0x5b3397, _0xdf48c) {
  return Math.min(Math.max(this, _0x5b3397), _0xdf48c);
};
Number.prototype.mod = function (_0x53dd9c) {
  return (this % _0x53dd9c + _0x53dd9c) % _0x53dd9c;
};
String.prototype.format = function () {
  var _0x399369 = arguments;
  return this.replace(/%([0-9]+)/g, function (_0xb0d15f, _0x289863) {
    return _0x399369[Number(_0x289863) - 1];
  });
};
String.prototype.padZero = function (_0x1474ff) {
  var _0x5cf096 = this;
  while (_0x5cf096.length < _0x1474ff) {
    _0x5cf096 = "0" + _0x5cf096;
  }
  return _0x5cf096;
};
Number.prototype.padZero = function (_0x2f8209) {
  return String(this).padZero(_0x2f8209);
};
Object.defineProperties(Array.prototype, {
  equals: {
    enumerable: false,
    value: function (_0x3785ef) {
      if (!_0x3785ef || this.length !== _0x3785ef.length) {
        return false;
      }
      for (var _0x2d53cf = 0; _0x2d53cf < this.length; _0x2d53cf++) {
        if (this[_0x2d53cf] instanceof Array && _0x3785ef[_0x2d53cf] instanceof Array) {
          if (!this[_0x2d53cf].equals(_0x3785ef[_0x2d53cf])) {
            return false;
          }
        } else if (this[_0x2d53cf] !== _0x3785ef[_0x2d53cf]) {
          return false;
        }
      }
      return true;
    }
  },
  clone: {
    enumerable: false,
    value: function () {
      return this.slice(0);
    }
  },
  contains: {
    enumerable: false,
    value: function (_0xdf4475) {
      return this.indexOf(_0xdf4475) >= 0;
    }
  }
});
String.prototype.contains = function (_0x1094d3) {
  return this.indexOf(_0x1094d3) >= 0;
};
Math.randomInt = function (_0x2d15c2) {
  return Math.floor(_0x2d15c2 * Math.random());
};
function Utils() {
  throw new Error("This is a static class");
}
Utils.RPGMAKER_NAME = "MV";
Utils.RPGMAKER_VERSION = "1.6.1";
Utils.isOptionValid = function (_0x3dd70c) {
  if (location.search.slice(1).split("&").contains(_0x3dd70c)) {
    return 1;
  }
  ;
  if (typeof nw !== "undefined" && nw.App.argv.length > 0 && nw.App.argv[0].split("&").contains(_0x3dd70c)) {
    return 1;
  }
  ;
  return 0;
};
Utils.isNwjs = function () {
  return typeof require === "function" && typeof process === "object";
};
Utils.isMobileDevice = function () {
  var _0x26dea4 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return !!navigator.userAgent.match(_0x26dea4);
};
Utils.isMobileSafari = function () {
  var _0x192a1b = navigator.userAgent;
  return !!_0x192a1b.match(/iPhone|iPad|iPod/) && !!_0x192a1b.match(/AppleWebKit/) && !_0x192a1b.match("CriOS");
};
Utils.isAndroidChrome = function () {
  var _0x442efd = navigator.userAgent;
  return !!_0x442efd.match(/Android/) && !!_0x442efd.match(/Chrome/);
};
Utils.canReadGameFiles = function () {
  var _0x14bb22 = document.getElementsByTagName("script");
  var _0x4ef413 = _0x14bb22[_0x14bb22.length - 1];
  var _0x2057d7 = new XMLHttpRequest();
  try {
    _0x2057d7.open("GET", _0x4ef413.src);
    _0x2057d7.overrideMimeType("text/javascript");
    _0x2057d7.send();
    return true;
  } catch (_0x350791) {
    return false;
  }
};
Utils.rgbToCssColor = function (_0x26b9dd, _0x50318e, _0x294f07) {
  _0x26b9dd = Math.round(_0x26b9dd);
  _0x50318e = Math.round(_0x50318e);
  _0x294f07 = Math.round(_0x294f07);
  return "rgb(" + _0x26b9dd + "," + _0x50318e + "," + _0x294f07 + ")";
};
Utils._id = 1;
Utils.generateRuntimeId = function () {
  return Utils._id++;
};
Utils._supportPassiveEvent = null;
Utils.isSupportPassiveEvent = function () {
  if (typeof Utils._supportPassiveEvent === "boolean") {
    return Utils._supportPassiveEvent;
  }
  var _0x55e156 = false;
  var _0x121c1d = {
    get: function () {
      _0x55e156 = true;
    }
  };
  var _0x50bac1 = Object.defineProperty({}, "passive", _0x121c1d);
  window.addEventListener("test", null, _0x50bac1);
  Utils._supportPassiveEvent = _0x55e156;
  return _0x55e156;
};
function CacheEntry(_0x3d8a72, _0x179a96, _0x300360) {
  this.cache = _0x3d8a72;
  this.key = _0x179a96;
  this.item = _0x300360;
  this.cached = false;
  this.touchTicks = 0;
  this.touchSeconds = 0;
  this.ttlTicks = 0;
  this.ttlSeconds = 0;
  this.freedByTTL = false;
}
CacheEntry.prototype.free = function (_0x390baf) {
  this.freedByTTL = _0x390baf || false;
  if (this.cached) {
    this.cached = false;
    delete this.cache._inner[this.key];
  }
};
CacheEntry.prototype.allocate = function () {
  if (!this.cached) {
    this.cache._inner[this.key] = this;
    this.cached = true;
  }
  this.touch();
  return this;
};
CacheEntry.prototype.setTimeToLive = function (_0x1a564d, _0x1e5440) {
  this.ttlTicks = _0x1a564d || 0;
  this.ttlSeconds = _0x1e5440 || 0;
  return this;
};
CacheEntry.prototype.isStillAlive = function () {
  var _0x1eb382 = this.cache;
  return (this.ttlTicks == 0 || this.touchTicks + this.ttlTicks < _0x1eb382.updateTicks) && (this.ttlSeconds == 0 || this.touchSeconds + this.ttlSeconds < _0x1eb382.updateSeconds);
};
CacheEntry.prototype.touch = function () {
  var _0x4a0b70 = this.cache;
  if (this.cached) {
    this.touchTicks = _0x4a0b70.updateTicks;
    this.touchSeconds = _0x4a0b70.updateSeconds;
  } else if (this.freedByTTL) {
    this.freedByTTL = false;
    if (!_0x4a0b70._inner[this.key]) {
      _0x4a0b70._inner[this.key] = this;
    }
  }
};
function CacheMap(_0x438dbe) {
  this.manager = _0x438dbe;
  this._inner = {};
  this._lastRemovedEntries = {};
  this.updateTicks = 0;
  this.lastCheckTTL = 0;
  this.delayCheckTTL = 100;
  this.updateSeconds = Date.now();
}
CacheMap.prototype.checkTTL = function () {
  var _0x286248 = this._inner;
  var _0x204e6f = this._lastRemovedEntries;
  if (!_0x204e6f) {
    _0x204e6f = [];
    this._lastRemovedEntries = _0x204e6f;
  }
  for (var _0x4023ed in _0x286248) {
    var _0x2d878f = _0x286248[_0x4023ed];
    if (!_0x2d878f.isStillAlive()) {
      _0x204e6f.push(_0x2d878f);
    }
  }
  for (var _0x473492 = 0; _0x473492 < _0x204e6f.length; _0x473492++) {
    _0x204e6f[_0x473492].free(true);
  }
  _0x204e6f.length = 0;
};
CacheMap.prototype.getItem = function (_0x5025d5) {
  var _0x26dd42 = this._inner[_0x5025d5];
  if (_0x26dd42) {
    return _0x26dd42.item;
  }
  return null;
};
CacheMap.prototype.clear = function () {
  var _0x5f11da = Object.keys(this._inner);
  for (var _0x11f2f0 = 0; _0x11f2f0 < _0x5f11da.length; _0x11f2f0++) {
    this._inner[_0x5f11da[_0x11f2f0]].free();
  }
};
CacheMap.prototype.setItem = function (_0x373b44, _0x415fad) {
  return new CacheEntry(this, _0x373b44, _0x415fad).allocate();
};
CacheMap.prototype.update = function (_0xbcc326, _0x152961) {
  this.updateTicks += _0xbcc326;
  this.updateSeconds += _0x152961;
  if (this.updateSeconds >= this.delayCheckTTL + this.lastCheckTTL) {
    this.lastCheckTTL = this.updateSeconds;
    this.checkTTL();
  }
};
function ImageCache() {
  this.initialize.apply(this, arguments);
}
ImageCache.limit = 10000000;
ImageCache.prototype.initialize = function () {
  this._items = {};
};
ImageCache.prototype.add = function (_0x2c7408, _0x9c0e5d) {
  this._items[_0x2c7408] = {
    bitmap: _0x9c0e5d,
    touch: Date.now(),
    key: _0x2c7408
  };
  this._truncateCache();
};
ImageCache.prototype.get = function (_0x1efaa7) {
  if (this._items[_0x1efaa7]) {
    var _0x3e7d29 = this._items[_0x1efaa7];
    _0x3e7d29.touch = Date.now();
    return _0x3e7d29.bitmap;
  }
  return null;
};
ImageCache.prototype.reserve = function (_0x1f0d8f, _0x3440e4, _0x134f3a) {
  if (!this._items[_0x1f0d8f]) {
    this._items[_0x1f0d8f] = {
      bitmap: _0x3440e4,
      touch: Date.now(),
      key: _0x1f0d8f
    };
  }
  this._items[_0x1f0d8f].reservationId = _0x134f3a;
};
ImageCache.prototype.releaseReservation = function (_0x4c9244) {
  var _0x882d84 = this._items;
  Object.keys(_0x882d84).map(function (_0x595165) {
    return _0x882d84[_0x595165];
  }).forEach(function (_0x21b890) {
    if (_0x21b890.reservationId === _0x4c9244) {
      delete _0x21b890.reservationId;
    }
  });
};
ImageCache.prototype._truncateCache = function () {
  var _0x4a454c = this._items;
  var _0x541e87 = ImageCache.limit;
  Object.keys(_0x4a454c).map(function (_0x598756) {
    return _0x4a454c[_0x598756];
  }).sort(function (_0x41298f, _0x283a95) {
    return _0x283a95.touch - _0x41298f.touch;
  }).forEach(function (_0x356198) {
    if (_0x541e87 > 0 || this._mustBeHeld(_0x356198)) {
      var _0x478a77 = _0x356198.bitmap;
      _0x541e87 -= _0x478a77.width * _0x478a77.height;
    } else {
      delete _0x4a454c[_0x356198.key];
    }
  }.bind(this));
};
ImageCache.prototype._mustBeHeld = function (_0x2a0fc7) {
  if (_0x2a0fc7.bitmap.isRequestOnly()) {
    return false;
  }
  if (_0x2a0fc7.reservationId) {
    return true;
  }
  if (!_0x2a0fc7.bitmap.isReady()) {
    return true;
  }
  return false;
};
ImageCache.prototype.isReady = function () {
  var _0x414a42 = this._items;
  return !Object.keys(_0x414a42).some(function (_0x43bb2f) {
    return !_0x414a42[_0x43bb2f].bitmap.isRequestOnly() && !_0x414a42[_0x43bb2f].bitmap.isReady();
  });
};
ImageCache.prototype.getErrorBitmap = function () {
  var _0x118fc7 = this._items;
  var _0x13e4cb = null;
  if (Object.keys(_0x118fc7).some(function (_0x118f29) {
    if (_0x118fc7[_0x118f29].bitmap.isError()) {
      _0x13e4cb = _0x118fc7[_0x118f29].bitmap;
      return true;
    }
    return false;
  })) {
    return _0x13e4cb;
  }
  return null;
};
function RequestQueue() {
  this.initialize.apply(this, arguments);
}
RequestQueue.prototype.initialize = function () {
  this._queue = [];
};
RequestQueue.prototype.enqueue = function (_0x35bc20, _0x547814) {
  var _0x46a252 = {
    key: _0x35bc20,
    value: _0x547814
  };
  this._queue.push(_0x46a252);
};
RequestQueue.prototype.update = function () {
  if (this._queue.length === 0) {
    return;
  }
  var _0x341fa6 = this._queue[0];
  if (_0x341fa6.value.isRequestReady()) {
    this._queue.shift();
    if (this._queue.length !== 0) {
      this._queue[0].value.startRequest();
    }
  } else {
    _0x341fa6.value.startRequest();
  }
};
RequestQueue.prototype.raisePriority = function (_0x40c275) {
  for (var _0xefb843 = 0; _0xefb843 < this._queue.length; _0xefb843++) {
    var _0x2ef4a4 = this._queue[_0xefb843];
    if (_0x2ef4a4.key === _0x40c275) {
      this._queue.splice(_0xefb843, 1);
      this._queue.unshift(_0x2ef4a4);
      break;
    }
  }
};
RequestQueue.prototype.clear = function () {
  this._queue.splice(0);
};
function Point() {
  this.initialize.apply(this, arguments);
}
Point.prototype = Object.create(PIXI.Point.prototype);
Point.prototype.constructor = Point;
Point.prototype.initialize = function (_0x28765d, _0x2b4341) {
  PIXI.Point.call(this, _0x28765d, _0x2b4341);
};
function Rectangle() {
  this.initialize.apply(this, arguments);
}
Rectangle.prototype = Object.create(PIXI.Rectangle.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.initialize = function (_0x2df1e9, _0x341598, _0x2b35f0, _0x3a0d2e) {
  PIXI.Rectangle.call(this, _0x2df1e9, _0x341598, _0x2b35f0, _0x3a0d2e);
};
Rectangle.emptyRectangle = new Rectangle(0, 0, 0, 0);
function Bitmap() {
  this.initialize.apply(this, arguments);
}
Bitmap._reuseImages = [];
Bitmap.prototype._createCanvas = function (_0x2bde04, _0x13688a) {
  this.__canvas = this.__canvas || document.createElement("canvas");
  this.__context = this.__canvas.getContext("2d");
  this.__canvas.width = Math.max(_0x2bde04 || 0, 1);
  this.__canvas.height = Math.max(_0x13688a || 0, 1);
  if (this._image) {
    var _0x58bd10 = Math.max(this._image.width || 0, 1);
    var _0x5a0cfb = Math.max(this._image.height || 0, 1);
    this.__canvas.width = _0x58bd10;
    this.__canvas.height = _0x5a0cfb;
    this._createBaseTexture(this._canvas);
    this.__context.drawImage(this._image, 0, 0);
  }
  this._setDirty();
};
Bitmap.prototype._createBaseTexture = function (_0x50c552) {
  this.__baseTexture = new PIXI.BaseTexture(_0x50c552);
  this.__baseTexture.mipmap = false;
  this.__baseTexture.width = _0x50c552.width;
  this.__baseTexture.height = _0x50c552.height;
  if (this._smooth) {
    this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  } else {
    this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  }
};
Bitmap.prototype._clearImgInstance = function () {
  this._image.src = "";
  this._image.onload = null;
  this._image.onerror = null;
  this._errorListener = null;
  this._loadListener = null;
  Bitmap._reuseImages.push(this._image);
  this._image = null;
};
Object.defineProperties(Bitmap.prototype, {
  _canvas: {
    get: function () {
      if (!this.__canvas) {
        this._createCanvas();
      }
      return this.__canvas;
    }
  },
  _context: {
    get: function () {
      if (!this.__context) {
        this._createCanvas();
      }
      return this.__context;
    }
  },
  _baseTexture: {
    get: function () {
      if (!this.__baseTexture) {
        this._createBaseTexture(this._image || this.__canvas);
      }
      return this.__baseTexture;
    }
  }
});
Bitmap.prototype._renewCanvas = function () {
  var _0x59565c = this._image;
  if (_0x59565c && this.__canvas && (this.__canvas.width < _0x59565c.width || this.__canvas.height < _0x59565c.height)) {
    this._createCanvas();
  }
};
Bitmap.prototype.initialize = function (_0x132aaf, _0x5323d9) {
  if (!this._defer) {
    this._createCanvas(_0x132aaf, _0x5323d9);
  }
  this._image = null;
  this._url = "";
  this._paintOpacity = 255;
  this._smooth = false;
  this._loadListeners = [];
  this._loadingState = "none";
  this._decodeAfterRequest = false;
  this.cacheEntry = null;
  this.fontFace = "GameFont";
  this.fontSize = 28;
  this.fontItalic = false;
  this.textColor = "#ffffff";
  this.outlineColor = "rgba(0, 0, 0, 0.5)";
  this.outlineWidth = 4;
};
Bitmap.load = function (_0x5c21da) {
  var _0x3c3d9c = Object.create(Bitmap.prototype);
  _0x3c3d9c._defer = true;
  _0x3c3d9c.initialize();
  _0x3c3d9c._decodeAfterRequest = true;
  _0x3c3d9c._requestImage(_0x5c21da);
  return _0x3c3d9c;
};
Bitmap.snap = function (_0x4369ae) {
  var _0x43a869 = Graphics.width;
  var _0x3224f4 = Graphics.height;
  var _0x508c21 = new Bitmap(_0x43a869, _0x3224f4);
  var _0x419bc4 = _0x508c21._context;
  var _0xb8dab2 = PIXI.RenderTexture.create(_0x43a869, _0x3224f4);
  if (_0x4369ae) {
    Graphics._renderer.render(_0x4369ae, _0xb8dab2);
    _0x4369ae.worldTransform.identity();
    var _0x208b37 = null;
    if (Graphics.isWebGL()) {
      _0x208b37 = Graphics._renderer.extract.canvas(_0xb8dab2);
    } else {
      _0x208b37 = _0xb8dab2.baseTexture._canvasRenderTarget.canvas;
    }
    _0x419bc4.drawImage(_0x208b37, 0, 0);
  } else {}
  _0xb8dab2.destroy({
    destroyBase: true
  });
  _0x508c21._setDirty();
  return _0x508c21;
};
Bitmap.prototype.isReady = function () {
  return this._loadingState === "loaded" || this._loadingState === "none";
};
Bitmap.prototype.isError = function () {
  return this._loadingState === "error";
};
Bitmap.prototype.touch = function () {
  if (this.cacheEntry) {
    this.cacheEntry.touch();
  }
};
var _0x12223e = {
  get: function () {
    return this._url;
  },
  configurable: true
};
Object.defineProperty(Bitmap.prototype, "url", _0x12223e);
var _0x16e390 = {
  get: function () {
    return this._baseTexture;
  },
  configurable: true
};
Object.defineProperty(Bitmap.prototype, "baseTexture", _0x16e390);
var _0x45d845 = {
  get: function () {
    return this._canvas;
  },
  configurable: true
};
Object.defineProperty(Bitmap.prototype, "canvas", _0x45d845);
var _0x916e46 = {
  get: function () {
    return this._context;
  },
  configurable: true
};
Object.defineProperty(Bitmap.prototype, "context", _0x916e46);
Object.defineProperty(Bitmap.prototype, "width", {
  get: function () {
    if (this.isReady()) {
      if (this._image) {
        return this._image.width;
      } else {
        return this._canvas.width;
      }
    }
    return 0;
  },
  configurable: true
});
Object.defineProperty(Bitmap.prototype, "height", {
  get: function () {
    if (this.isReady()) {
      if (this._image) {
        return this._image.height;
      } else {
        return this._canvas.height;
      }
    }
    return 0;
  },
  configurable: true
});
Object.defineProperty(Bitmap.prototype, "rect", {
  get: function () {
    return new Rectangle(0, 0, this.width, this.height);
  },
  configurable: true
});
Object.defineProperty(Bitmap.prototype, "smooth", {
  get: function () {
    return this._smooth;
  },
  set: function (_0x1c1a83) {
    if (this._smooth !== _0x1c1a83) {
      this._smooth = _0x1c1a83;
      if (this.__baseTexture) {
        if (this._smooth) {
          this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        } else {
          this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        }
      }
    }
  },
  configurable: true
});
Object.defineProperty(Bitmap.prototype, "paintOpacity", {
  get: function () {
    return this._paintOpacity;
  },
  set: function (_0x19572f) {
    if (this._paintOpacity !== _0x19572f) {
      this._paintOpacity = _0x19572f;
      this._context.globalAlpha = this._paintOpacity / 255;
    }
  },
  configurable: true
});
Bitmap.prototype.resize = function (_0x4195d9, _0x5aec31) {
  _0x4195d9 = Math.max(_0x4195d9 || 0, 1);
  _0x5aec31 = Math.max(_0x5aec31 || 0, 1);
  this._canvas.width = _0x4195d9;
  this._canvas.height = _0x5aec31;
  this._baseTexture.width = _0x4195d9;
  this._baseTexture.height = _0x5aec31;
};
Bitmap.prototype.blt = function (_0x4fee2b, _0x59e9df, _0x446600, _0xf735e7, _0x1aa9c8, _0x4d20dd, _0xae40d, _0xc61fa8, _0x209429) {
  _0xc61fa8 = _0xc61fa8 || _0xf735e7;
  _0x209429 = _0x209429 || _0x1aa9c8;
  if (_0x59e9df >= 0 && _0x446600 >= 0 && _0xf735e7 > 0 && _0x1aa9c8 > 0 && _0xc61fa8 > 0 && _0x209429 > 0 && _0x59e9df + _0xf735e7 <= _0x4fee2b.width && _0x446600 + _0x1aa9c8 <= _0x4fee2b.height) {
    this._context.globalCompositeOperation = "source-over";
    this._context.drawImage(_0x4fee2b._canvas, _0x59e9df, _0x446600, _0xf735e7, _0x1aa9c8, _0x4d20dd, _0xae40d, _0xc61fa8, _0x209429);
    this._setDirty();
  }
};
Bitmap.prototype.bltImage = function (_0x483ef8, _0x496188, _0x445d16, _0x89bbf, _0x571c1d, _0x390c36, _0x4e9a2f, _0x38a480, _0x46ac7c) {
  _0x38a480 = _0x38a480 || _0x89bbf;
  _0x46ac7c = _0x46ac7c || _0x571c1d;
  if (_0x496188 >= 0 && _0x445d16 >= 0 && _0x89bbf > 0 && _0x571c1d > 0 && _0x38a480 > 0 && _0x46ac7c > 0 && _0x496188 + _0x89bbf <= _0x483ef8.width && _0x445d16 + _0x571c1d <= _0x483ef8.height) {
    this._context.globalCompositeOperation = "source-over";
    this._context.drawImage(_0x483ef8._image, _0x496188, _0x445d16, _0x89bbf, _0x571c1d, _0x390c36, _0x4e9a2f, _0x38a480, _0x46ac7c);
    this._setDirty();
  }
};
Bitmap.prototype.getPixel = function (_0xe153f7, _0x32fbe7) {
  var _0x570411 = this._context.getImageData(_0xe153f7, _0x32fbe7, 1, 1).data;
  var _0x176f1e = "#";
  for (var _0x451ca7 = 0; _0x451ca7 < 3; _0x451ca7++) {
    _0x176f1e += _0x570411[_0x451ca7].toString(16).padZero(2);
  }
  return _0x176f1e;
};
Bitmap.prototype.getAlphaPixel = function (_0x237e8e, _0x4c849a) {
  var _0x1ab966 = this._context.getImageData(_0x237e8e, _0x4c849a, 1, 1).data;
  return _0x1ab966[3];
};
Bitmap.prototype.clearRect = function (_0x1ae779, _0x5ddc2e, _0x43a28e, _0x58879d) {
  this._context.clearRect(_0x1ae779, _0x5ddc2e, _0x43a28e, _0x58879d);
  this._setDirty();
};
Bitmap.prototype.clear = function () {
  this.clearRect(0, 0, this.width, this.height);
};
Bitmap.prototype.fillRect = function (_0x101998, _0x289f56, _0x60df5a, _0x1dbc52, _0x503a36) {
  var _0x51370b = this._context;
  _0x51370b.save();
  _0x51370b.fillStyle = _0x503a36;
  _0x51370b.fillRect(_0x101998, _0x289f56, _0x60df5a, _0x1dbc52);
  _0x51370b.restore();
  this._setDirty();
};
Bitmap.prototype.fillAll = function (_0x4fe143) {
  this.fillRect(0, 0, this.width, this.height, _0x4fe143);
};
Bitmap.prototype.gradientFillRect = function (_0x4acec3, _0x19c594, _0x57c8c6, _0x27757c, _0x4b1717, _0x45f8a0, _0x3e93c0) {
  var _0x4cb19e = this._context;
  var _0x4fde00;
  if (_0x3e93c0) {
    _0x4fde00 = _0x4cb19e.createLinearGradient(_0x4acec3, _0x19c594, _0x4acec3, _0x19c594 + _0x27757c);
  } else {
    _0x4fde00 = _0x4cb19e.createLinearGradient(_0x4acec3, _0x19c594, _0x4acec3 + _0x57c8c6, _0x19c594);
  }
  _0x4fde00.addColorStop(0, _0x4b1717);
  _0x4fde00.addColorStop(1, _0x45f8a0);
  _0x4cb19e.save();
  _0x4cb19e.fillStyle = _0x4fde00;
  _0x4cb19e.fillRect(_0x4acec3, _0x19c594, _0x57c8c6, _0x27757c);
  _0x4cb19e.restore();
  this._setDirty();
};
Bitmap.prototype.drawCircle = function (_0x404baf, _0x24612c, _0x1cbd0e, _0x5bb9c3) {
  var _0x5118a6 = this._context;
  _0x5118a6.save();
  _0x5118a6.fillStyle = _0x5bb9c3;
  _0x5118a6.beginPath();
  _0x5118a6.arc(_0x404baf, _0x24612c, _0x1cbd0e, 0, Math.PI * 2, false);
  _0x5118a6.fill();
  _0x5118a6.restore();
  this._setDirty();
};
Bitmap.prototype.drawText = function (_0x257f84, _0x4847a, _0x2f6b4d, _0x500392, _0x451e53, _0x569621) {
  if (_0x257f84 !== undefined) {
    var _0x4b2e48 = _0x4847a;
    var _0x4598f8 = _0x2f6b4d + _0x451e53 - (_0x451e53 - this.fontSize * 0.7) / 2;
    var _0x59f1c3 = this._context;
    var _0x35a093 = _0x59f1c3.globalAlpha;
    _0x500392 = _0x500392 || 4294967295;
    if (_0x569621 === "center") {
      _0x4b2e48 += _0x500392 / 2;
    }
    if (_0x569621 === "right") {
      _0x4b2e48 += _0x500392;
    }
    _0x59f1c3.save();
    _0x59f1c3.font = this._makeFontNameText();
    _0x59f1c3.textAlign = _0x569621;
    _0x59f1c3.textBaseline = "alphabetic";
    _0x59f1c3.globalAlpha = 1;
    this._drawTextOutline(_0x257f84, _0x4b2e48, _0x4598f8, _0x500392);
    _0x59f1c3.globalAlpha = _0x35a093;
    this._drawTextBody(_0x257f84, _0x4b2e48, _0x4598f8, _0x500392);
    _0x59f1c3.restore();
    this._setDirty();
  }
};
Bitmap.prototype.measureTextWidth = function (_0x2cb89e) {
  var _0x3e2e15 = this._context;
  _0x3e2e15.save();
  _0x3e2e15.font = this._makeFontNameText();
  var _0x18de4c = _0x3e2e15.measureText(_0x2cb89e).width;
  _0x3e2e15.restore();
  return _0x18de4c;
};
Bitmap.prototype.adjustTone = function (_0x1883f9, _0x2a241e, _0x102fb1) {
  if ((_0x1883f9 || _0x2a241e || _0x102fb1) && this.width > 0 && this.height > 0) {
    var _0x21615f = this._context;
    var _0x406786 = _0x21615f.getImageData(0, 0, this.width, this.height);
    var _0x25b2ba = _0x406786.data;
    for (var _0x496520 = 0; _0x496520 < _0x25b2ba.length; _0x496520 += 4) {
      _0x25b2ba[_0x496520 + 0] += _0x1883f9;
      _0x25b2ba[_0x496520 + 1] += _0x2a241e;
      _0x25b2ba[_0x496520 + 2] += _0x102fb1;
    }
    _0x21615f.putImageData(_0x406786, 0, 0);
    this._setDirty();
  }
};
Bitmap.prototype.rotateHue = function (_0x2824fe) {
  function _0x10ba41(_0x5dc293, _0x32becc, _0x592900) {
    var _0x2d1923 = Math.min(_0x5dc293, _0x32becc, _0x592900);
    var _0x6a04b1 = Math.max(_0x5dc293, _0x32becc, _0x592900);
    var _0x3f399c = 0;
    var _0x36aa0e = 0;
    var _0x348e77 = (_0x2d1923 + _0x6a04b1) / 2;
    var _0x58a871 = _0x6a04b1 - _0x2d1923;
    if (_0x58a871 > 0) {
      if (_0x5dc293 === _0x6a04b1) {
        _0x3f399c = ((_0x32becc - _0x592900) / _0x58a871 + 6) % 6 * 60;
      } else if (_0x32becc === _0x6a04b1) {
        _0x3f399c = ((_0x592900 - _0x5dc293) / _0x58a871 + 2) * 60;
      } else {
        _0x3f399c = ((_0x5dc293 - _0x32becc) / _0x58a871 + 4) * 60;
      }
      _0x36aa0e = _0x58a871 / (255 - Math.abs(_0x348e77 * 2 - 255));
    }
    return [_0x3f399c, _0x36aa0e, _0x348e77];
  }
  function _0x28e580(_0x4040e0, _0x4923ed, _0x168044) {
    var _0x4b65dd = (255 - Math.abs(_0x168044 * 2 - 255)) * _0x4923ed;
    var _0x15c10b = _0x4b65dd * (1 - Math.abs(_0x4040e0 / 60 % 2 - 1));
    var _0x41bfd9 = _0x168044 - _0x4b65dd / 2;
    var _0x1460d8 = _0x4b65dd + _0x41bfd9;
    var _0x1fe233 = _0x15c10b + _0x41bfd9;
    if (_0x4040e0 < 60) {
      return [_0x1460d8, _0x1fe233, _0x41bfd9];
    } else if (_0x4040e0 < 120) {
      return [_0x1fe233, _0x1460d8, _0x41bfd9];
    } else if (_0x4040e0 < 180) {
      return [_0x41bfd9, _0x1460d8, _0x1fe233];
    } else if (_0x4040e0 < 240) {
      return [_0x41bfd9, _0x1fe233, _0x1460d8];
    } else if (_0x4040e0 < 300) {
      return [_0x1fe233, _0x41bfd9, _0x1460d8];
    } else {
      return [_0x1460d8, _0x41bfd9, _0x1fe233];
    }
  }
  if (_0x2824fe && this.width > 0 && this.height > 0) {
    _0x2824fe = (_0x2824fe % 360 + 360) % 360;
    var _0x1890df = this._context;
    var _0x8c7762 = _0x1890df.getImageData(0, 0, this.width, this.height);
    var _0x24f579 = _0x8c7762.data;
    for (var _0x4c8652 = 0; _0x4c8652 < _0x24f579.length; _0x4c8652 += 4) {
      var _0xbb5b92 = _0x10ba41(_0x24f579[_0x4c8652 + 0], _0x24f579[_0x4c8652 + 1], _0x24f579[_0x4c8652 + 2]);
      var _0x450bdf = (_0xbb5b92[0] + _0x2824fe) % 360;
      var _0x120e3c = _0xbb5b92[1];
      var _0x2cdd3c = _0xbb5b92[2];
      var _0x2b2e14 = _0x28e580(_0x450bdf, _0x120e3c, _0x2cdd3c);
      _0x24f579[_0x4c8652 + 0] = _0x2b2e14[0];
      _0x24f579[_0x4c8652 + 1] = _0x2b2e14[1];
      _0x24f579[_0x4c8652 + 2] = _0x2b2e14[2];
    }
    _0x1890df.putImageData(_0x8c7762, 0, 0);
    this._setDirty();
  }
};
Bitmap.prototype.blur = function () {
  for (var _0x585f3a = 0; _0x585f3a < 2; _0x585f3a++) {
    var _0x1bdf40 = this.width;
    var _0x2128e1 = this.height;
    var _0x412ab3 = this._canvas;
    var _0x383597 = this._context;
    var _0x1bb2ac = document.createElement("canvas");
    var _0x516918 = _0x1bb2ac.getContext("2d");
    _0x1bb2ac.width = _0x1bdf40 + 2;
    _0x1bb2ac.height = _0x2128e1 + 2;
    _0x516918.drawImage(_0x412ab3, 0, 0, _0x1bdf40, _0x2128e1, 1, 1, _0x1bdf40, _0x2128e1);
    _0x516918.drawImage(_0x412ab3, 0, 0, _0x1bdf40, 1, 1, 0, _0x1bdf40, 1);
    _0x516918.drawImage(_0x412ab3, 0, 0, 1, _0x2128e1, 0, 1, 1, _0x2128e1);
    _0x516918.drawImage(_0x412ab3, 0, _0x2128e1 - 1, _0x1bdf40, 1, 1, _0x2128e1 + 1, _0x1bdf40, 1);
    _0x516918.drawImage(_0x412ab3, _0x1bdf40 - 1, 0, 1, _0x2128e1, _0x1bdf40 + 1, 1, 1, _0x2128e1);
    _0x383597.save();
    _0x383597.fillStyle = "black";
    _0x383597.fillRect(0, 0, _0x1bdf40, _0x2128e1);
    _0x383597.globalCompositeOperation = "lighter";
    _0x383597.globalAlpha = 1 / 9;
    for (var _0x377c71 = 0; _0x377c71 < 3; _0x377c71++) {
      for (var _0x47d90c = 0; _0x47d90c < 3; _0x47d90c++) {
        _0x383597.drawImage(_0x1bb2ac, _0x47d90c, _0x377c71, _0x1bdf40, _0x2128e1, 0, 0, _0x1bdf40, _0x2128e1);
      }
    }
    _0x383597.restore();
  }
  this._setDirty();
};
Bitmap.prototype.addLoadListener = function (_0x3a8317) {
  if (!this.isReady()) {
    this._loadListeners.push(_0x3a8317);
  } else {
    _0x3a8317(this);
  }
};
Bitmap.prototype._makeFontNameText = function () {
  return (this.fontItalic ? "Italic " : "") + this.fontSize + "px " + this.fontFace;
};
Bitmap.prototype._drawTextOutline = function (_0x27ecc2, _0x24789a, _0x2989bb, _0x409acb) {
  var _0x2e587d = this._context;
  _0x2e587d.strokeStyle = this.outlineColor;
  _0x2e587d.lineWidth = this.outlineWidth;
  _0x2e587d.lineJoin = "round";
  _0x2e587d.strokeText(_0x27ecc2, _0x24789a, _0x2989bb, _0x409acb);
};
Bitmap.prototype._drawTextBody = function (_0x1cd185, _0x3a204a, _0x5a9d3c, _0x582a62) {
  var _0x305d2a = this._context;
  _0x305d2a.fillStyle = this.textColor;
  _0x305d2a.fillText(_0x1cd185, _0x3a204a, _0x5a9d3c, _0x582a62);
};
Bitmap.prototype._onLoad = function () {
  this._image.removeEventListener("load", this._loadListener);
  this._image.removeEventListener("error", this._errorListener);
  this._renewCanvas();
  switch (this._loadingState) {
    case "requesting":
      this._loadingState = "requestCompleted";
      if (this._decodeAfterRequest) {
        this.decode();
      } else {
        this._loadingState = "purged";
        this._clearImgInstance();
      }
      break;
    case "decrypting":
      window.URL.revokeObjectURL(this._image.src);
      this._loadingState = "decryptCompleted";
      if (this._decodeAfterRequest) {
        this.decode();
      } else {
        this._loadingState = "purged";
        this._clearImgInstance();
      }
      break;
  }
};
Bitmap.prototype.decode = function () {
  switch (this._loadingState) {
    case "requestCompleted":
    case "decryptCompleted":
      this._loadingState = "loaded";
      if (!this.__canvas) {
        this._createBaseTexture(this._image);
      }
      this._setDirty();
      this._callLoadListeners();
      break;
    case "requesting":
    case "decrypting":
      this._decodeAfterRequest = true;
      if (!this._loader) {
        this._loader = ResourceHandler.createLoader(this._url, this._requestImage.bind(this, this._url), this._onError.bind(this));
        this._image.removeEventListener("error", this._errorListener);
        this._image.addEventListener("error", this._errorListener = this._loader);
      }
      break;
    case "pending":
    case "purged":
    case "error":
      this._decodeAfterRequest = true;
      this._requestImage(this._url);
      break;
  }
};
Bitmap.prototype._callLoadListeners = function () {
  while (this._loadListeners.length > 0) {
    var _0x141383 = this._loadListeners.shift();
    _0x141383(this);
  }
};
Bitmap.prototype._onError = function () {
  this._image.removeEventListener("load", this._loadListener);
  this._image.removeEventListener("error", this._errorListener);
  this._loadingState = "error";
};
Bitmap.prototype._setDirty = function () {
  this._dirty = true;
};
Bitmap.prototype.checkDirty = function () {
  if (this._dirty) {
    this._baseTexture.update();
    this._dirty = false;
  }
};
Bitmap.request = function (_0x559619) {
  var _0x54a163 = Object.create(Bitmap.prototype);
  _0x54a163._defer = true;
  _0x54a163.initialize();
  _0x54a163._url = _0x559619;
  _0x54a163._loadingState = "pending";
  return _0x54a163;
};
Bitmap.prototype._requestImage = function (_0x5a8838) {
  if (Bitmap._reuseImages.length !== 0) {
    this._image = Bitmap._reuseImages.pop();
  } else {
    this._image = new Image();
    this._image.crossOrigin = "anonymous";
  }
  if (this._decodeAfterRequest && !this._loader) {
    this._loader = ResourceHandler.createLoader(_0x5a8838, this._requestImage.bind(this, _0x5a8838), this._onError.bind(this));
  }
  this._image = new Image();
  this._image.crossOrigin = "anonymous";
  this._url = _0x5a8838;
  this._loadingState = "requesting";
  if (!Decrypter.checkImgIgnore(_0x5a8838) && Decrypter.hasEncryptedImages) {
    this._loadingState = "decrypting";
    Decrypter.decryptImg(_0x5a8838.toLowerCase(), this);
  } else {
    this._image.src = _0x5a8838.toLowerCase();
    this._image.addEventListener("load", this._loadListener = Bitmap.prototype._onLoad.bind(this));
    this._image.addEventListener("error", this._errorListener = this._loader || Bitmap.prototype._onError.bind(this));
  }
};
Bitmap.prototype.isRequestOnly = function () {
  return !this._decodeAfterRequest && !this.isReady();
};
Bitmap.prototype.isRequestReady = function () {
  return this._loadingState !== "pending" && this._loadingState !== "requesting" && this._loadingState !== "decrypting";
};
Bitmap.prototype.startRequest = function () {
  if (this._loadingState === "pending") {
    this._decodeAfterRequest = false;
    this._requestImage(this._url);
  }
};
function Graphics() {
  throw new Error("This is a static class");
}
Graphics._cssFontLoading = document.fonts && document.fonts.ready;
Graphics._fontLoaded = null;
Graphics._videoVolume = 1;
Graphics.initialize = function (_0x632be5, _0x53e3a3, _0x354f5f) {
  this._width = _0x632be5 || 800;
  this._height = _0x53e3a3 || 600;
  this._rendererType = _0x354f5f || "auto";
  this._boxWidth = this._width;
  this._boxHeight = this._height;
  this._scale = 1;
  this._realScale = 1;
  this._errorShowed = false;
  this._errorPrinter = null;
  this._canvas = null;
  this._video = null;
  this._videoUnlocked = false;
  this._videoLoading = false;
  this._upperCanvas = null;
  this._renderer = null;
  this._fpsMeter = null;
  this._modeBox = null;
  this._skipCount = 0;
  this._maxSkip = 3;
  this._rendered = false;
  this._loadingImage = null;
  this._loadingCount = 0;
  this._fpsMeterToggled = false;
  this._stretchEnabled = this._defaultStretchMode();
  this._canUseDifferenceBlend = false;
  this._canUseSaturationBlend = false;
  this._hiddenCanvas = null;
  this._testCanvasBlendModes();
  this._modifyExistingElements();
  this._updateRealScale();
  this._createAllElements();
  this._disableTextSelection();
  this._disableContextMenu();
  this._setupEventHandlers();
  this._setupCssFontLoading();
};
Graphics._setupCssFontLoading = function () {
  if (Graphics._cssFontLoading) {
    document.fonts.ready.then(function (_0x15c24e) {
      Graphics._fontLoaded = _0x15c24e;
    }).catch(function (_0x1dff14) {
      SceneManager.onError(_0x1dff14);
    });
  }
};
Graphics.canUseCssFontLoading = function () {
  return !!this._cssFontLoading;
};
Graphics.frameCount = 0;
Graphics.BLEND_NORMAL = 0;
Graphics.BLEND_ADD = 1;
Graphics.BLEND_MULTIPLY = 2;
Graphics.BLEND_SCREEN = 3;
Graphics.tickStart = function () {
  if (this._fpsMeter) {
    this._fpsMeter.tickStart();
  }
};
Graphics.tickEnd = function () {
  if (this._fpsMeter && this._rendered) {
    this._fpsMeter.tick();
  }
};
Graphics.render = function (_0xad7276) {
  if (this._skipCount === 0) {
    var _0x3562d5 = Date.now();
    if (_0xad7276) {
      this._renderer.render(_0xad7276);
      if (this._renderer.gl && this._renderer.gl.flush) {
        this._renderer.gl.flush();
      }
    }
    var _0x300195 = Date.now();
    var _0x398b94 = _0x300195 - _0x3562d5;
    this._skipCount = Math.min(Math.floor(_0x398b94 / 15), this._maxSkip);
    this._rendered = true;
  } else {
    this._skipCount--;
    this._rendered = false;
  }
  this.frameCount++;
};
Graphics.isWebGL = function () {
  return this._renderer && this._renderer.type === PIXI.RENDERER_TYPE.WEBGL;
};
Graphics.hasWebGL = function () {
  try {
    var _0x5d1e22 = document.createElement("canvas");
    return !!_0x5d1e22.getContext("webgl") || !!_0x5d1e22.getContext("experimental-webgl");
  } catch (_0x8f2865) {
    return false;
  }
};
Graphics.canUseDifferenceBlend = function () {
  return this._canUseDifferenceBlend;
};
Graphics.canUseSaturationBlend = function () {
  return this._canUseSaturationBlend;
};
Graphics.setLoadingImage = function () {

};
Graphics.startLoading = function () {
  this._loadingCount = 0;
};
Graphics.updateLoading = function () {
  this._loadingCount++;
  this._paintUpperCanvas();
  this._upperCanvas.style.opacity = 1;
};
Graphics.endLoading = function () {
  this._clearUpperCanvas();
  this._upperCanvas.style.opacity = 0;
};
Graphics.printLoadingError = function (_0x155083) {
  if (this._errorPrinter && !this._errorShowed) {
    this._errorPrinter.innerHTML = this._makeErrorHtml("Loading Error", "Failed to load: " + _0x155083);
    var _0x557c08 = document.createElement("button");
    _0x557c08.innerHTML = "Retry";
    _0x557c08.style.fontSize = "24px";
    _0x557c08.style.color = "#ffffff";
    _0x557c08.style.backgroundColor = "#000000";
    _0x557c08.onmousedown = _0x557c08.ontouchstart = function (_0x276f9c) {
      ResourceHandler.retry();
      _0x276f9c.stopPropagation();
    };
    this._errorPrinter.appendChild(_0x557c08);
    this._loadingCount = -Infinity;
  }
};
Graphics.eraseLoadingError = function () {
  if (this._errorPrinter && !this._errorShowed) {
    this._errorPrinter.innerHTML = "";
    this.startLoading();
  }
};
Graphics.printError = function (_0xcca593, _0x233b08) {
  this._errorShowed = true;
  if (this._errorPrinter) {
    this._errorPrinter.innerHTML = this._makeErrorHtml(_0xcca593, _0x233b08);
  }
  this._applyCanvasFilter();
  this._clearUpperCanvas();
};
Graphics.showFps = function () {
  if (this._fpsMeter) {
    this._fpsMeter.show();
    this._modeBox.style.opacity = 1;
  }
};
Graphics.hideFps = function () {
  if (this._fpsMeter) {
    this._fpsMeter.hide();
    this._modeBox.style.opacity = 0;
  }
};
Graphics.loadFont = function (_0x544991, _0x4aacec) {
  var _0x530a17 = document.createElement("style");
  var _0x22e6b7 = document.getElementsByTagName("head");
  var _0x17f4f4 = "@font-face { font-family: \"" + _0x544991 + "\"; src: url(\"" + _0x4aacec + "\"); }";
  _0x530a17.type = "text/css";
  _0x22e6b7.item(0).appendChild(_0x530a17);
  _0x530a17.sheet.insertRule(_0x17f4f4, 0);
  this._createFontLoader(_0x544991);
};
Graphics.isFontLoaded = function (_0x5abaa4) {
  if (Graphics._cssFontLoading) {
    if (Graphics._fontLoaded) {
      return Graphics._fontLoaded.check("10px \"" + _0x5abaa4 + "\"");
    }
    return false;
  } else {
    if (!this._hiddenCanvas) {
      this._hiddenCanvas = document.createElement("canvas");
    }
    var _0xa76cfd = this._hiddenCanvas.getContext("2d");
    var _0x8f1369 = "abcdefghijklmnopqrstuvwxyz";
    var _0x370008;
    var _0x5fabc9;
    _0xa76cfd.font = "40px " + _0x5abaa4 + ", sans-serif";
    _0x370008 = _0xa76cfd.measureText(_0x8f1369).width;
    _0xa76cfd.font = "40px sans-serif";
    _0x5fabc9 = _0xa76cfd.measureText(_0x8f1369).width;
    return _0x370008 !== _0x5fabc9;
  }
};
Graphics.playVideo = function (_0x1af32f) {
  this._videoLoader = ResourceHandler.createLoader(null, this._playVideo.bind(this, _0x1af32f), this._onVideoError.bind(this));
  this._playVideo(_0x1af32f);
};
Graphics._playVideo = function (_0x5560f2) {
  this._video.src = _0x5560f2;
  this._video.onloadeddata = this._onVideoLoad.bind(this);
  this._video.onerror = this._videoLoader;
  this._video.onended = this._onVideoEnd.bind(this);
  this._video.load();
  this._videoLoading = true;
};
Graphics.isVideoPlaying = function () {
  return this._videoLoading || this._isVideoVisible();
};
Graphics.canPlayVideoType = function (_0x57e90a) {
  return this._video && this._video.canPlayType(_0x57e90a);
};
Graphics.setVideoVolume = function (_0x444f34) {
  this._videoVolume = _0x444f34;
  if (this._video) {
    this._video.volume = this._videoVolume;
  }
};
Graphics.pageToCanvasX = function (_0x60aa04) {
  if (this._canvas) {
    var _0x2b09a1 = this._canvas.offsetLeft;
    return Math.round((_0x60aa04 - _0x2b09a1) / this._realScale);
  } else {
    return 0;
  }
};
Graphics.pageToCanvasY = function (_0x10cece) {
  if (this._canvas) {
    var _0x1c9dad = this._canvas.offsetTop;
    return Math.round((_0x10cece - _0x1c9dad) / this._realScale);
  } else {
    return 0;
  }
};
Graphics.isInsideCanvas = function (_0x560d30, _0x404802) {
  return _0x560d30 >= 0 && _0x560d30 < this._width && _0x404802 >= 0 && _0x404802 < this._height;
};
Graphics.callGC = function () {
  if (Graphics.isWebGL()) {
    Graphics._renderer.textureGC.run();
  }
};
Object.defineProperty(Graphics, "width", {
  get: function () {
    return this._width;
  },
  set: function (_0x4b10e8) {
    if (this._width !== _0x4b10e8) {
      this._width = _0x4b10e8;
      this._updateAllElements();
    }
  },
  configurable: true
});
Object.defineProperty(Graphics, "height", {
  get: function () {
    return this._height;
  },
  set: function (_0x3f164a) {
    if (this._height !== _0x3f164a) {
      this._height = _0x3f164a;
      this._updateAllElements();
    }
  },
  configurable: true
});
var _0x2bde5e = {
  get: function () {
    return this._boxWidth;
  },
  set: function (_0x19a625) {
    this._boxWidth = _0x19a625;
  },
  configurable: true
};
Object.defineProperty(Graphics, "boxWidth", _0x2bde5e);
var _0x5850c1 = {
  get: function () {
    return this._boxHeight;
  },
  set: function (_0x21b847) {
    this._boxHeight = _0x21b847;
  },
  configurable: true
};
Object.defineProperty(Graphics, "boxHeight", _0x5850c1);
Object.defineProperty(Graphics, "scale", {
  get: function () {
    return this._scale;
  },
  set: function (_0xd7d4a1) {
    if (this._scale !== _0xd7d4a1) {
      this._scale = _0xd7d4a1;
      this._updateAllElements();
    }
  },
  configurable: true
});
Graphics._createAllElements = function () {
  this._createErrorPrinter();
  this._createCanvas();
  this._createVideo();
  this._createUpperCanvas();
  this._createRenderer();
  this._createFPSMeter();
  this._createModeBox();
  this._createGameFontLoader();
};
Graphics._updateAllElements = function () {
  this._updateRealScale();
  this._updateErrorPrinter();
  this._updateCanvas();
  this._updateVideo();
  this._updateUpperCanvas();
  this._updateRenderer();
  this._paintUpperCanvas();
};
Graphics._updateRealScale = function () {
  if (this._stretchEnabled) {
    var _0xb6a075 = window.innerWidth / this._width;
    var _0x30ac2c = window.innerHeight / this._height;
    if (_0xb6a075 >= 1 && _0xb6a075 - 0.01 <= 1) {
      _0xb6a075 = 1;
    }
    if (_0x30ac2c >= 1 && _0x30ac2c - 0.01 <= 1) {
      _0x30ac2c = 1;
    }
    this._realScale = Math.min(_0xb6a075, _0x30ac2c);
  } else {
    this._realScale = this._scale;
  }
};
Graphics._makeErrorHtml = function (_0x4ec1c5, _0x358325) {
  return "<font color=\"yellow\"><b>" + _0x4ec1c5 + "</b></font><br><font color=\"white\">" + _0x358325 + "</font><br>";
};
Graphics._defaultStretchMode = function () {
  return Utils.isNwjs() || Utils.isMobileDevice();
};
Graphics._testCanvasBlendModes = function () {
  var _0x18ac08;
  var _0x4e6e55;
  var _0x4a8787;
  var _0x46fbc4;
  _0x18ac08 = document.createElement("canvas");
  _0x18ac08.width = 1;
  _0x18ac08.height = 1;
  _0x4e6e55 = _0x18ac08.getContext("2d");
  _0x4e6e55.globalCompositeOperation = "source-over";
  _0x4e6e55.fillStyle = "white";
  _0x4e6e55.fillRect(0, 0, 1, 1);
  _0x4e6e55.globalCompositeOperation = "difference";
  _0x4e6e55.fillStyle = "white";
  _0x4e6e55.fillRect(0, 0, 1, 1);
  _0x4a8787 = _0x4e6e55.getImageData(0, 0, 1, 1);
  _0x4e6e55.globalCompositeOperation = "source-over";
  _0x4e6e55.fillStyle = "black";
  _0x4e6e55.fillRect(0, 0, 1, 1);
  _0x4e6e55.globalCompositeOperation = "saturation";
  _0x4e6e55.fillStyle = "white";
  _0x4e6e55.fillRect(0, 0, 1, 1);
  _0x46fbc4 = _0x4e6e55.getImageData(0, 0, 1, 1);
  this._canUseDifferenceBlend = _0x4a8787.data[0] === 0;
  this._canUseSaturationBlend = _0x46fbc4.data[0] === 0;
};
Graphics._modifyExistingElements = function () {
  var _0x1f1cd2 = document.getElementsByTagName("*");
  for (var _0x13ee21 = 0; _0x13ee21 < _0x1f1cd2.length; _0x13ee21++) {
    if (_0x1f1cd2[_0x13ee21].style.zIndex > 0) {
      _0x1f1cd2[_0x13ee21].style.zIndex = 0;
    }
  }
};
Graphics._createErrorPrinter = function () {
  this._errorPrinter = document.createElement("p");
  this._errorPrinter.id = "ErrorPrinter";
  this._updateErrorPrinter();
  document.body.appendChild(this._errorPrinter);
};
Graphics._updateErrorPrinter = function () {
  this._errorPrinter.width = this._width * 0.9;
  this._errorPrinter.height = 40;
  this._errorPrinter.style.textAlign = "center";
  this._errorPrinter.style.textShadow = "1px 1px 3px #000";
  this._errorPrinter.style.fontSize = "20px";
  this._errorPrinter.style.zIndex = 99;
  this._centerElement(this._errorPrinter);
};
Graphics._createCanvas = function () {
  this._canvas = document.createElement("canvas");
  this._canvas.id = "GameCanvas";
  this._updateCanvas();
  document.body.appendChild(this._canvas);
};
Graphics._updateCanvas = function () {
  this._canvas.width = this._width;
  this._canvas.height = this._height;
  this._canvas.style.zIndex = 1;
  this._centerElement(this._canvas);
};
Graphics._createVideo = function () {
  this._video = document.createElement("video");
  this._video.id = "GameVideo";
  this._video.style.opacity = 0;
  this._video.setAttribute("playsinline", "");
  this._video.volume = this._videoVolume;
  this._updateVideo();
  makeVideoPlayableInline(this._video);
  document.body.appendChild(this._video);
};
Graphics._updateVideo = function () {
  this._video.width = this._width;
  this._video.height = this._height;
  this._video.style.zIndex = 2;
  this._centerElement(this._video);
};
Graphics._createUpperCanvas = function () {
  this._upperCanvas = document.createElement("canvas");
  this._upperCanvas.id = "UpperCanvas";
  this._updateUpperCanvas();
  document.body.appendChild(this._upperCanvas);
};
Graphics._updateUpperCanvas = function () {
  this._upperCanvas.width = this._width;
  this._upperCanvas.height = this._height;
  this._upperCanvas.style.zIndex = 3;
  this._centerElement(this._upperCanvas);
};
Graphics._clearUpperCanvas = function () {
  var _0x129ce6 = this._upperCanvas.getContext("2d");
  _0x129ce6.clearRect(0, 0, this._width, this._height);
};
Graphics._paintUpperCanvas = function () {
  this._clearUpperCanvas();
  if (this._loadingImage && this._loadingCount >= 20) {
    var _0x15e6ad = this._upperCanvas.getContext("2d");
    var _0x144516 = (this._width - this._loadingImage.width) / 2;
    var _0x393ef3 = (this._height - this._loadingImage.height) / 2;
    var _0x4fea07 = ((this._loadingCount - 20) / 30).clamp(0, 1);
    _0x15e6ad.save();
    _0x15e6ad.globalAlpha = _0x4fea07;
    _0x15e6ad.drawImage(this._loadingImage, _0x144516, _0x393ef3);
    _0x15e6ad.restore();
  }
};
Graphics._createRenderer = function () {
  PIXI.dontSayHello = true;
  var _0x196b33 = this._width;
  var _0x3ae80f = this._height;
  var _0x2dc18e = {
    view: this._canvas
  };
  var _0x492b64 = _0x2dc18e;
  try {
    switch (this._rendererType) {
      case "canvas":
        this._renderer = new PIXI.CanvasRenderer(_0x196b33, _0x3ae80f, _0x492b64);
        break;
      case "webgl":
        this._renderer = new PIXI.WebGLRenderer(_0x196b33, _0x3ae80f, _0x492b64);
        break;
      default:
        this._renderer = PIXI.autoDetectRenderer(_0x196b33, _0x3ae80f, _0x492b64);
        break;
    }
    if (this._renderer && this._renderer.textureGC) {
      this._renderer.textureGC.maxIdle = 1;
    }
  } catch (_0x1e72c8) {
    this._renderer = null;
  }
};
Graphics._updateRenderer = function () {
  if (this._renderer) {
    this._renderer.resize(this._width, this._height);
  }
};
Graphics._createFPSMeter = function () {
  var _0x32e656 = {
    graph: 1,
    decimals: 0,
    theme: "transparent",
    toggleOn: null
  };
  this._fpsMeter = new FPSMeter(_0x32e656);
  this._fpsMeter.hide();
};
Graphics._createModeBox = function () {
  var _0x15bbd5 = document.createElement("div");
  _0x15bbd5.id = "modeTextBack";
  _0x15bbd5.style.position = "absolute";
  _0x15bbd5.style.left = "5px";
  _0x15bbd5.style.top = "5px";
  _0x15bbd5.style.width = "119px";
  _0x15bbd5.style.height = "58px";
  _0x15bbd5.style.background = "rgba(0,0,0,0.2)";
  _0x15bbd5.style.zIndex = 9;
  _0x15bbd5.style.opacity = 0;
  var _0x879cf8 = document.createElement("div");
  _0x879cf8.id = "modeText";
  _0x879cf8.style.position = "absolute";
  _0x879cf8.style.left = "0px";
  _0x879cf8.style.top = "41px";
  _0x879cf8.style.width = "119px";
  _0x879cf8.style.fontSize = "12px";
  _0x879cf8.style.fontFamily = "monospace";
  _0x879cf8.style.color = "white";
  _0x879cf8.style.textAlign = "center";
  _0x879cf8.style.textShadow = "1px 1px 0 rgba(0,0,0,0.5)";
  _0x879cf8.innerHTML = this.isWebGL() ? "WebGL mode" : "Canvas mode";
  document.body.appendChild(_0x15bbd5);
  _0x15bbd5.appendChild(_0x879cf8);
  this._modeBox = _0x15bbd5;
};
Graphics._createGameFontLoader = function () {
  this._createFontLoader("GameFont");
};
Graphics._createFontLoader = function (_0x27ed9e) {
  var _0x42cd73 = document.createElement("div");
  var _0x4296e9 = document.createTextNode(".");
  _0x42cd73.style.fontFamily = _0x27ed9e;
  _0x42cd73.style.fontSize = "0px";
  _0x42cd73.style.color = "transparent";
  _0x42cd73.style.position = "absolute";
  _0x42cd73.style.margin = "auto";
  _0x42cd73.style.top = "0px";
  _0x42cd73.style.left = "0px";
  _0x42cd73.style.width = "1px";
  _0x42cd73.style.height = "1px";
  _0x42cd73.appendChild(_0x4296e9);
  document.body.appendChild(_0x42cd73);
};
Graphics._centerElement = function (_0x1ebcd9) {
  var _0x33ca21 = _0x1ebcd9.width * this._realScale;
  var _0x27c835 = _0x1ebcd9.height * this._realScale;
  _0x1ebcd9.style.position = "absolute";
  _0x1ebcd9.style.margin = "auto";
  _0x1ebcd9.style.top = 0;
  _0x1ebcd9.style.left = 0;
  _0x1ebcd9.style.right = 0;
  _0x1ebcd9.style.bottom = 0;
  _0x1ebcd9.style.width = _0x33ca21 + "px";
  _0x1ebcd9.style.height = _0x27c835 + "px";
};
Graphics._disableTextSelection = function () {
  var _0x1b374f = document.body;
  _0x1b374f.style.userSelect = "none";
  _0x1b374f.style.webkitUserSelect = "none";
  _0x1b374f.style.msUserSelect = "none";
  _0x1b374f.style.mozUserSelect = "none";
};
Graphics._disableContextMenu = function () {
  var _0xeb3233 = document.body.getElementsByTagName("*");
  function _0x2c67af() {
    return false;
  }
  for (var _0x18983c = 0; _0x18983c < _0xeb3233.length; _0x18983c++) {
    _0xeb3233[_0x18983c].oncontextmenu = _0x2c67af;
  }
};
Graphics._applyCanvasFilter = function () {
  if (this._canvas) {
    this._canvas.style.opacity = 0.5;
    this._canvas.style.filter = "blur(8px)";
    this._canvas.style.webkitFilter = "blur(8px)";
  }
};
Graphics._onVideoLoad = function () {
  this._video.play();
  this._updateVisibility(true);
  this._videoLoading = false;
};
Graphics._onVideoError = function () {
  this._updateVisibility(false);
  this._videoLoading = false;
};
Graphics._onVideoEnd = function () {
  this._updateVisibility(false);
};
Graphics._updateVisibility = function (_0x2b926f) {
  this._video.style.opacity = _0x2b926f ? 1 : 0;
  this._canvas.style.opacity = _0x2b926f ? 0 : 1;
};
Graphics._isVideoVisible = function () {
  return this._video.style.opacity > 0;
};
Graphics._setupEventHandlers = function () {
  window.addEventListener("resize", this._onWindowResize.bind(this));
  document.addEventListener("keydown", this._onKeyDown.bind(this));
  document.addEventListener("keydown", this._onTouchEnd.bind(this));
  document.addEventListener("mousedown", this._onTouchEnd.bind(this));
  document.addEventListener("touchend", this._onTouchEnd.bind(this));
};
Graphics._onWindowResize = function () {
  this._updateAllElements();
};
Graphics._onKeyDown = function (_0x930db7) {
  if (!_0x930db7.ctrlKey && !_0x930db7.altKey) {
    switch (_0x930db7.keyCode) {
      case 113:
        _0x930db7.preventDefault();
        this._switchFPSMeter();
        break;
      case 114:
        _0x930db7.preventDefault();
        this._switchStretchMode();
        break;
      case 115:
        _0x930db7.preventDefault();
        this._switchFullScreen();
        break;
    }
  }
};
Graphics._onTouchEnd = function (_0x194a35) {
  if (!this._videoUnlocked) {
    this._video.play();
    this._videoUnlocked = true;
  }
  if (this._isVideoVisible() && this._video.paused) {
    this._video.play();
  }
};
Graphics._switchFPSMeter = function () {
  if (this._fpsMeter.isPaused) {
    this.showFps();
    this._fpsMeter.showFps();
    this._fpsMeterToggled = false;
  } else if (!this._fpsMeterToggled) {
    this._fpsMeter.showDuration();
    this._fpsMeterToggled = true;
  } else {
    this.hideFps();
  }
};
Graphics._switchStretchMode = function () {
  this._stretchEnabled = !this._stretchEnabled;
  this._updateAllElements();
};
Graphics._switchFullScreen = function () {
  if (this._isFullScreen()) {
    this._requestFullScreen();
  } else {
    this._cancelFullScreen();
  }
};
Graphics._isFullScreen = function () {
  return document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitFullscreenElement && !document.msFullscreenElement;
};
Graphics._requestFullScreen = function () {
  var _0x2c4dd3 = document.body;
  if (_0x2c4dd3.requestFullScreen) {
    _0x2c4dd3.requestFullScreen();
  } else if (_0x2c4dd3.mozRequestFullScreen) {
    _0x2c4dd3.mozRequestFullScreen();
  } else if (_0x2c4dd3.webkitRequestFullScreen) {
    _0x2c4dd3.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (_0x2c4dd3.msRequestFullscreen) {
    _0x2c4dd3.msRequestFullscreen();
  }
};
Graphics._cancelFullScreen = function () {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};
function Input() {
  throw new Error("This is a static class");
}
Input.initialize = function () {
  this.clear();
  this._wrapNwjsAlert();
  this._setupEventHandlers();
};
Input.keyRepeatWait = 24;
Input.keyRepeatInterval = 6;
Input.keyMapper = {
  "9": "tab",
  "13": "ok",
  "16": "shift",
  "17": "control",
  "18": "control",
  "27": "escape",
  "32": "ok",
  "33": "pageup",
  "34": "pagedown",
  "37": "left",
  "38": "up",
  "39": "right",
  "40": "down",
  "45": "escape",
  "81": "pageup",
  "87": "pagedown",
  "88": "escape",
  "90": "ok",
  "96": "escape",
  "98": "down",
  "100": "left",
  "102": "right",
  "104": "up",
  "120": "debug"
};
Input.gamepadMapper = {
  "0": "ok",
  "1": "cancel",
  "2": "shift",
  "3": "menu",
  "4": "pageup",
  "5": "pagedown",
  "12": "up",
  "13": "down",
  "14": "left",
  "15": "right"
};
Input.clear = function () {
  this._currentState = {};
  this._previousState = {};
  this._gamepadStates = [];
  this._latestButton = null;
  this._pressedTime = 0;
  this._dir4 = 0;
  this._dir8 = 0;
  this._preferredAxis = "";
  this._date = 0;
};
Input.update = function () {
  this._pollGamepads();
  if (this._currentState[this._latestButton]) {
    this._pressedTime++;
  } else {
    this._latestButton = null;
  }
  for (var _0x144e0e in this._currentState) {
    if (this._currentState[_0x144e0e] && !this._previousState[_0x144e0e]) {
      this._latestButton = _0x144e0e;
      this._pressedTime = 0;
      this._date = Date.now();
    }
    this._previousState[_0x144e0e] = this._currentState[_0x144e0e];
  }
  this._updateDirection();
};
Input.isPressed = function (_0x46d3aa) {
  if (this._isEscapeCompatible(_0x46d3aa) && this.isPressed("escape")) {
    return true;
  } else {
    return !!this._currentState[_0x46d3aa];
  }
};
Input.isTriggered = function (_0x20c2ab) {
  if (this._isEscapeCompatible(_0x20c2ab) && this.isTriggered("escape")) {
    return true;
  } else {
    return this._latestButton === _0x20c2ab && this._pressedTime === 0;
  }
};
Input.isRepeated = function (_0x42bbea) {
  if (this._isEscapeCompatible(_0x42bbea) && this.isRepeated("escape")) {
    return true;
  } else {
    return this._latestButton === _0x42bbea && (this._pressedTime === 0 || this._pressedTime >= this.keyRepeatWait && this._pressedTime % this.keyRepeatInterval === 0);
  }
};
Input.isLongPressed = function (_0x4a45d8) {
  if (this._isEscapeCompatible(_0x4a45d8) && this.isLongPressed("escape")) {
    return true;
  } else {
    return this._latestButton === _0x4a45d8 && this._pressedTime >= this.keyRepeatWait;
  }
};
var _0x150e11 = {
  get: function () {
    return this._dir4;
  },
  configurable: true
};
Object.defineProperty(Input, "dir4", _0x150e11);
var _0x2706ae = {
  get: function () {
    return this._dir8;
  },
  configurable: true
};
Object.defineProperty(Input, "dir8", _0x2706ae);
var _0x24b5b9 = {
  get: function () {
    return this._date;
  },
  configurable: true
};
Object.defineProperty(Input, "date", _0x24b5b9);
Input._wrapNwjsAlert = function () {
  if (Utils.isNwjs()) {
    var _0x25c8cb = window.alert;
    window.alert = function () {
      var _0x27236f = require("nw.gui");
      var _0x49992d = _0x27236f.Window.get();
      _0x25c8cb.apply(this, arguments);
      _0x49992d.focus();
      Input.clear();
    };
  }
};
Input._setupEventHandlers = function () {
  document.addEventListener("keydown", this._onKeyDown.bind(this));
  document.addEventListener("keyup", this._onKeyUp.bind(this));
  window.addEventListener("blur", this._onLostFocus.bind(this));
};
Input._onKeyDown = function (_0x505128) {
  if (this._shouldPreventDefault(_0x505128.keyCode)) {
    _0x505128.preventDefault();
  }
  if (_0x505128.keyCode === 144) {
    this.clear();
  }
  var _0x2f0a2d = this.keyMapper[_0x505128.keyCode];
  if (ResourceHandler.exists() && _0x2f0a2d === "ok") {
    ResourceHandler.retry();
  } else if (_0x2f0a2d) {
    this._currentState[_0x2f0a2d] = true;
  }
};
window.fakeInput = {};
window.fakeInput.down = _0x3fcf1a => {
  Input._currentState[_0x3fcf1a] = true;
};
window.fakeInput.up = _0x30990b => {
  Input._currentState[_0x30990b] = false;
};
Input._shouldPreventDefault = function (_0x5cbcf5) {
  switch (_0x5cbcf5) {
    case 8:
    case 33:
    case 34:
    case 37:
    case 38:
    case 39:
    case 40:
      return true;
  }
  return false;
};
Input._onKeyUp = function (_0x4b05c4) {
  var _0x4621ec = this.keyMapper[_0x4b05c4.keyCode];
  if (_0x4621ec) {
    this._currentState[_0x4621ec] = false;
  }
  if (_0x4b05c4.keyCode === 0) {
    this.clear();
  }
};
Input._onLostFocus = function () {
  this.clear();
};
Input._pollGamepads = function () {
  if (navigator.getGamepads) {
    var _0x2747f6 = navigator.getGamepads();
    if (_0x2747f6) {
      for (var _0x4555c3 = 0; _0x4555c3 < _0x2747f6.length; _0x4555c3++) {
        var _0x4cb0da = _0x2747f6[_0x4555c3];
        if (_0x4cb0da && _0x4cb0da.connected) {
          this._updateGamepadState(_0x4cb0da);
        }
      }
    }
  }
};
Input._updateGamepadState = function (_0x39a525) {
  var _0x29108b = this._gamepadStates[_0x39a525.index] || [];
  var _0x13def2 = [];
  var _0xf18b7 = _0x39a525.buttons;
  var _0x23f88c = _0x39a525.axes;
  var _0x4c048f = 0.5;
  _0x13def2[12] = false;
  _0x13def2[13] = false;
  _0x13def2[14] = false;
  _0x13def2[15] = false;
  for (var _0x248906 = 0; _0x248906 < _0xf18b7.length; _0x248906++) {
    _0x13def2[_0x248906] = _0xf18b7[_0x248906].pressed;
  }
  if (_0x23f88c[1] < -_0x4c048f) {
    _0x13def2[12] = true;
  } else if (_0x23f88c[1] > _0x4c048f) {
    _0x13def2[13] = true;
  }
  if (_0x23f88c[0] < -_0x4c048f) {
    _0x13def2[14] = true;
  } else if (_0x23f88c[0] > _0x4c048f) {
    _0x13def2[15] = true;
  }
  for (var _0x45acbd = 0; _0x45acbd < _0x13def2.length; _0x45acbd++) {
    if (_0x13def2[_0x45acbd] !== _0x29108b[_0x45acbd]) {
      var _0x234e7f = this.gamepadMapper[_0x45acbd];
      if (_0x234e7f) {
        this._currentState[_0x234e7f] = _0x13def2[_0x45acbd];
      }
    }
  }
  this._gamepadStates[_0x39a525.index] = _0x13def2;
};
Input._updateDirection = function () {
  var _0x59a294 = this._signX();
  var _0x29c476 = this._signY();
  this._dir8 = this._makeNumpadDirection(_0x59a294, _0x29c476);
  if (_0x59a294 !== 0 && _0x29c476 !== 0) {
    if (this._preferredAxis === "x") {
      _0x29c476 = 0;
    } else {
      _0x59a294 = 0;
    }
  } else if (_0x59a294 !== 0) {
    this._preferredAxis = "y";
  } else if (_0x29c476 !== 0) {
    this._preferredAxis = "x";
  }
  this._dir4 = this._makeNumpadDirection(_0x59a294, _0x29c476);
};
Input._signX = function () {
  var _0x4791cb = 0;
  if (this.isPressed("left")) {
    _0x4791cb--;
  }
  if (this.isPressed("right")) {
    _0x4791cb++;
  }
  return _0x4791cb;
};
Input._signY = function () {
  var _0x434ddd = 0;
  if (this.isPressed("up")) {
    _0x434ddd--;
  }
  if (this.isPressed("down")) {
    _0x434ddd++;
  }
  return _0x434ddd;
};
Input._makeNumpadDirection = function (_0x2eed78, _0x190626) {
  if (_0x2eed78 !== 0 || _0x190626 !== 0) {
    return 5 - _0x190626 * 3 + _0x2eed78;
  }
  return 0;
};
Input._isEscapeCompatible = function (_0x47149c) {
  return _0x47149c === "cancel" || _0x47149c === "menu";
};
function TouchInput() {
  throw new Error("This is a static class");
}
TouchInput.initialize = function () {
  this.clear();
  this._setupEventHandlers();
};
TouchInput.keyRepeatWait = 24;
TouchInput.keyRepeatInterval = 6;
TouchInput.clear = function () {
  this._mousePressed = false;
  this._screenPressed = false;
  this._pressedTime = 0;
  this._events = {};
  this._events.triggered = false;
  this._events.cancelled = false;
  this._events.moved = false;
  this._events.released = false;
  this._events.wheelX = 0;
  this._events.wheelY = 0;
  this._triggered = false;
  this._cancelled = false;
  this._moved = false;
  this._released = false;
  this._wheelX = 0;
  this._wheelY = 0;
  this._x = 0;
  this._y = 0;
  this._date = 0;
};
TouchInput.update = function () {
  this._triggered = this._events.triggered;
  this._cancelled = this._events.cancelled;
  this._moved = this._events.moved;
  this._released = this._events.released;
  this._wheelX = this._events.wheelX;
  this._wheelY = this._events.wheelY;
  this._events.triggered = false;
  this._events.cancelled = false;
  this._events.moved = false;
  this._events.released = false;
  this._events.wheelX = 0;
  this._events.wheelY = 0;
  if (this.isPressed()) {
    this._pressedTime++;
  }
};
TouchInput.isPressed = function () {
  return this._mousePressed || this._screenPressed;
};
TouchInput.isTriggered = function () {
  return this._triggered;
};
TouchInput.isRepeated = function () {
  return this.isPressed() && (this._triggered || this._pressedTime >= this.keyRepeatWait && this._pressedTime % this.keyRepeatInterval === 0);
};
TouchInput.isLongPressed = function () {
  return this.isPressed() && this._pressedTime >= this.keyRepeatWait;
};
TouchInput.isCancelled = function () {
  return this._cancelled;
};
TouchInput.isMoved = function () {
  return this._moved;
};
TouchInput.isReleased = function () {
  return this._released;
};
var _0x4bffb7 = {
  get: function () {
    return this._wheelX;
  },
  configurable: true
};
Object.defineProperty(TouchInput, "wheelX", _0x4bffb7);
var _0x38d3ca = {
  get: function () {
    return this._wheelY;
  },
  configurable: true
};
Object.defineProperty(TouchInput, "wheelY", _0x38d3ca);
var _0x22483c = {
  get: function () {
    return this._x;
  },
  configurable: true
};
Object.defineProperty(TouchInput, "x", _0x22483c);
var _0x57e21f = {
  get: function () {
    return this._y;
  },
  configurable: true
};
Object.defineProperty(TouchInput, "y", _0x57e21f);
var _0xa3539d = {
  get: function () {
    return this._date;
  },
  configurable: true
};
Object.defineProperty(TouchInput, "date", _0xa3539d);
TouchInput._setupEventHandlers = function () {
  var _0x613627 = Utils.isSupportPassiveEvent();
  document.addEventListener("mousedown", this._onMouseDown.bind(this));
  document.addEventListener("mousemove", this._onMouseMove.bind(this));
  document.addEventListener("mouseup", this._onMouseUp.bind(this));
  document.addEventListener("wheel", this._onWheel.bind(this));
  document.addEventListener("touchstart", this._onTouchStart.bind(this), _0x613627 ? {
    passive: false
  } : false);
  document.addEventListener("touchmove", this._onTouchMove.bind(this), _0x613627 ? {
    passive: false
  } : false);
  document.addEventListener("touchend", this._onTouchEnd.bind(this));
  document.addEventListener("touchcancel", this._onTouchCancel.bind(this));
  document.addEventListener("pointerdown", this._onPointerDown.bind(this));
};
TouchInput._onMouseDown = function (_0x50c366) {
  if (_0x50c366.button === 0) {
    this._onLeftButtonDown(_0x50c366);
  } else if (_0x50c366.button === 1) {
    this._onMiddleButtonDown(_0x50c366);
  } else if (_0x50c366.button === 2) {
    this._onRightButtonDown(_0x50c366);
  }
};
TouchInput._onLeftButtonDown = function (_0x1031dc) {
  var _0x47061e = Graphics.pageToCanvasX(_0x1031dc.pageX);
  var _0x5b8026 = Graphics.pageToCanvasY(_0x1031dc.pageY);
  if (Graphics.isInsideCanvas(_0x47061e, _0x5b8026)) {
    this._mousePressed = true;
    this._pressedTime = 0;
    this._onTrigger(_0x47061e, _0x5b8026);
  }
};
TouchInput._onMiddleButtonDown = function (_0x85d299) {};
TouchInput._onRightButtonDown = function (_0x4bd8ba) {
  var _0x2d9d88 = Graphics.pageToCanvasX(_0x4bd8ba.pageX);
  var _0x2192dd = Graphics.pageToCanvasY(_0x4bd8ba.pageY);
  if (Graphics.isInsideCanvas(_0x2d9d88, _0x2192dd)) {
    this._onCancel(_0x2d9d88, _0x2192dd);
  }
};
TouchInput._onMouseMove = function (_0x39aed3) {
  if (this._mousePressed) {
    var _0x52962f = Graphics.pageToCanvasX(_0x39aed3.pageX);
    var _0x32b595 = Graphics.pageToCanvasY(_0x39aed3.pageY);
    this._onMove(_0x52962f, _0x32b595);
  }
};
TouchInput._onMouseUp = function (_0x416d15) {
  if (_0x416d15.button === 0) {
    var _0x387b7b = Graphics.pageToCanvasX(_0x416d15.pageX);
    var _0x139ab2 = Graphics.pageToCanvasY(_0x416d15.pageY);
    this._mousePressed = false;
    this._onRelease(_0x387b7b, _0x139ab2);
  }
};
TouchInput._onWheel = function (_0x5e2737) {
  this._events.wheelX += _0x5e2737.deltaX;
  this._events.wheelY += _0x5e2737.deltaY;
  _0x5e2737.preventDefault();
};
TouchInput._onTouchStart = function (_0x31ee65) {
  for (var _0x2683a4 = 0; _0x2683a4 < _0x31ee65.changedTouches.length; _0x2683a4++) {
    var _0x425c4e = _0x31ee65.changedTouches[_0x2683a4];
    var _0x939e2e = Graphics.pageToCanvasX(_0x425c4e.pageX);
    var _0x3e1c6c = Graphics.pageToCanvasY(_0x425c4e.pageY);
    if (Graphics.isInsideCanvas(_0x939e2e, _0x3e1c6c)) {
      this._screenPressed = true;
      this._pressedTime = 0;
      if (_0x31ee65.touches.length >= 2) {
        this._onCancel(_0x939e2e, _0x3e1c6c);
      } else {
        this._onTrigger(_0x939e2e, _0x3e1c6c);
      }
      _0x31ee65.preventDefault();
    }
  }
  if (window.cordova || window.navigator.standalone) {
    _0x31ee65.preventDefault();
  }
};
TouchInput._onTouchMove = function (_0x54cda0) {
  for (var _0x20605f = 0; _0x20605f < _0x54cda0.changedTouches.length; _0x20605f++) {
    var _0x4516e8 = _0x54cda0.changedTouches[_0x20605f];
    var _0x2933be = Graphics.pageToCanvasX(_0x4516e8.pageX);
    var _0x2245ca = Graphics.pageToCanvasY(_0x4516e8.pageY);
    this._onMove(_0x2933be, _0x2245ca);
  }
};
TouchInput._onTouchEnd = function (_0x1118b9) {
  for (var _0x3f32df = 0; _0x3f32df < _0x1118b9.changedTouches.length; _0x3f32df++) {
    var _0x29b9b6 = _0x1118b9.changedTouches[_0x3f32df];
    var _0x3dd4bd = Graphics.pageToCanvasX(_0x29b9b6.pageX);
    var _0x4a59e2 = Graphics.pageToCanvasY(_0x29b9b6.pageY);
    this._screenPressed = false;
    this._onRelease(_0x3dd4bd, _0x4a59e2);
  }
};
TouchInput._onTouchCancel = function (_0x2dc5ca) {
  this._screenPressed = false;
};
TouchInput._onPointerDown = function (_0xa213bf) {
  if (_0xa213bf.pointerType === "touch" && !_0xa213bf.isPrimary) {
    var _0x1ec54d = Graphics.pageToCanvasX(_0xa213bf.pageX);
    var _0x34df4b = Graphics.pageToCanvasY(_0xa213bf.pageY);
    if (Graphics.isInsideCanvas(_0x1ec54d, _0x34df4b)) {
      this._onCancel(_0x1ec54d, _0x34df4b);
      _0xa213bf.preventDefault();
    }
  }
};
TouchInput._onTrigger = function (_0x114226, _0x5cb7d3) {
  this._events.triggered = true;
  this._x = _0x114226;
  this._y = _0x5cb7d3;
  this._date = Date.now();
};
TouchInput._onCancel = function (_0x5569d0, _0x55d5fb) {
  this._events.cancelled = true;
  this._x = _0x5569d0;
  this._y = _0x55d5fb;
};
TouchInput._onMove = function (_0x3e9674, _0xade5b0) {
  this._events.moved = true;
  this._x = _0x3e9674;
  this._y = _0xade5b0;
};
TouchInput._onRelease = function (_0x5bcf10, _0x25de9a) {
  this._events.released = true;
  this._x = _0x5bcf10;
  this._y = _0x25de9a;
};
function Sprite() {
  this.initialize.apply(this, arguments);
}
Sprite.prototype = Object.create(PIXI.Sprite.prototype);
Sprite.prototype.constructor = Sprite;
Sprite.voidFilter = new PIXI.filters.VoidFilter();
Sprite.prototype.initialize = function (_0x5c750e) {
  var _0x13ebeb = new PIXI.Texture(new PIXI.BaseTexture());
  PIXI.Sprite.call(this, _0x13ebeb);
  this._bitmap = null;
  this._frame = new Rectangle();
  this._realFrame = new Rectangle();
  this._blendColor = [0, 0, 0, 0];
  this._colorTone = [0, 0, 0, 0];
  this._canvas = null;
  this._context = null;
  this._tintTexture = null;
  this._isPicture = false;
  this.spriteId = Sprite._counter++;
  this.opaque = false;
  this.bitmap = _0x5c750e;
};
Sprite._counter = 0;
Object.defineProperty(Sprite.prototype, "bitmap", {
  get: function () {
    return this._bitmap;
  },
  set: function (_0x23746a) {
    if (this._bitmap !== _0x23746a) {
      this._bitmap = _0x23746a;
      if (_0x23746a) {
        this._refreshFrame = true;
        _0x23746a.addLoadListener(this._onBitmapLoad.bind(this));
      } else {
        this._refreshFrame = false;
        this.texture.frame = Rectangle.emptyRectangle;
      }
    }
  },
  configurable: true
});
Object.defineProperty(Sprite.prototype, "width", {
  get: function () {
    return this._frame.width;
  },
  set: function (_0x21c019) {
    this._frame.width = _0x21c019;
    this._refresh();
  },
  configurable: true
});
Object.defineProperty(Sprite.prototype, "height", {
  get: function () {
    return this._frame.height;
  },
  set: function (_0x306436) {
    this._frame.height = _0x306436;
    this._refresh();
  },
  configurable: true
});
Object.defineProperty(Sprite.prototype, "opacity", {
  get: function () {
    return this.alpha * 255;
  },
  set: function (_0x3e6334) {
    this.alpha = _0x3e6334.clamp(0, 255) / 255;
  },
  configurable: true
});
Sprite.prototype.update = function () {
  this.children.forEach(function (_0xdaa19a) {
    if (_0xdaa19a.update) {
      _0xdaa19a.update();
    }
  });
};
Sprite.prototype.move = function (_0x3cdf7e, _0x3d96d6) {
  this.x = _0x3cdf7e;
  this.y = _0x3d96d6;
};
Sprite.prototype.setFrame = function (_0x2c70ab, _0x39c02e, _0xb97637, _0x3aef8d) {
  this._refreshFrame = false;
  var _0xb8265d = this._frame;
  if (_0x2c70ab !== _0xb8265d.x || _0x39c02e !== _0xb8265d.y || _0xb97637 !== _0xb8265d.width || _0x3aef8d !== _0xb8265d.height) {
    _0xb8265d.x = _0x2c70ab;
    _0xb8265d.y = _0x39c02e;
    _0xb8265d.width = _0xb97637;
    _0xb8265d.height = _0x3aef8d;
    this._refresh();
  }
};
Sprite.prototype.getBlendColor = function () {
  return this._blendColor.clone();
};
Sprite.prototype.setBlendColor = function (_0x1a636d) {
  if (!(_0x1a636d instanceof Array)) {
    throw new Error("Argument must be an array");
  }
  if (!this._blendColor.equals(_0x1a636d)) {
    this._blendColor = _0x1a636d.clone();
    this._refresh();
  }
};
Sprite.prototype.getColorTone = function () {
  return this._colorTone.clone();
};
Sprite.prototype.setColorTone = function (_0x4f26f8) {
  if (!(_0x4f26f8 instanceof Array)) {
    throw new Error("Argument must be an array");
  }
  if (!this._colorTone.equals(_0x4f26f8)) {
    this._colorTone = _0x4f26f8.clone();
    this._refresh();
  }
};
Sprite.prototype._onBitmapLoad = function (_0x320813) {
  if (_0x320813 === this._bitmap) {
    if (this._refreshFrame && this._bitmap) {
      this._refreshFrame = false;
      this._frame.width = this._bitmap.width;
      this._frame.height = this._bitmap.height;
    }
  }
  this._refresh();
};
Sprite.prototype._refresh = function () {
  var _0xc0b8f = Math.floor(this._frame.x);
  var _0x13f782 = Math.floor(this._frame.y);
  var _0x2173db = Math.floor(this._frame.width);
  var _0x353809 = Math.floor(this._frame.height);
  var _0x499874 = this._bitmap ? this._bitmap.width : 0;
  var _0x87cf52 = this._bitmap ? this._bitmap.height : 0;
  var _0x3a0699 = _0xc0b8f.clamp(0, _0x499874);
  var _0x329d71 = _0x13f782.clamp(0, _0x87cf52);
  var _0x1955ad = (_0x2173db - _0x3a0699 + _0xc0b8f).clamp(0, _0x499874 - _0x3a0699);
  var _0x3bdc21 = (_0x353809 - _0x329d71 + _0x13f782).clamp(0, _0x87cf52 - _0x329d71);
  this._realFrame.x = _0x3a0699;
  this._realFrame.y = _0x329d71;
  this._realFrame.width = _0x1955ad;
  this._realFrame.height = _0x3bdc21;
  this.pivot.x = _0xc0b8f - _0x3a0699;
  this.pivot.y = _0x13f782 - _0x329d71;
  if (_0x1955ad > 0 && _0x3bdc21 > 0) {
    if (this._needsTint()) {
      this._createTinter(_0x1955ad, _0x3bdc21);
      this._executeTint(_0x3a0699, _0x329d71, _0x1955ad, _0x3bdc21);
      this._tintTexture.update();
      this.texture.baseTexture = this._tintTexture;
      this.texture.frame = new Rectangle(0, 0, _0x1955ad, _0x3bdc21);
    } else {
      if (this._bitmap) {
        this.texture.baseTexture = this._bitmap.baseTexture;
      }
      this.texture.frame = this._realFrame;
    }
  } else if (this._bitmap) {
    this.texture.frame = Rectangle.emptyRectangle;
  } else {
    this.texture.baseTexture.width = Math.max(this.texture.baseTexture.width, this._frame.x + this._frame.width);
    this.texture.baseTexture.height = Math.max(this.texture.baseTexture.height, this._frame.y + this._frame.height);
    this.texture.frame = this._frame;
  }
  this.texture._updateID++;
};
Sprite.prototype._isInBitmapRect = function (_0x1fec02, _0x4cbed4, _0x3882d5, _0x926660) {
  return this._bitmap && _0x1fec02 + _0x3882d5 > 0 && _0x4cbed4 + _0x926660 > 0 && _0x1fec02 < this._bitmap.width && _0x4cbed4 < this._bitmap.height;
};
Sprite.prototype._needsTint = function () {
  var _0xc797c0 = this._colorTone;
  return _0xc797c0[0] || _0xc797c0[1] || _0xc797c0[2] || _0xc797c0[3] || this._blendColor[3] > 0;
};
Sprite.prototype._createTinter = function (_0x18d62c, _0x3d86e7) {
  if (!this._canvas) {
    this._canvas = document.createElement("canvas");
    this._context = this._canvas.getContext("2d");
  }
  this._canvas.width = _0x18d62c;
  this._canvas.height = _0x3d86e7;
  if (!this._tintTexture) {
    this._tintTexture = new PIXI.BaseTexture(this._canvas);
  }
  this._tintTexture.width = _0x18d62c;
  this._tintTexture.height = _0x3d86e7;
  this._tintTexture.scaleMode = this._bitmap.baseTexture.scaleMode;
};
Sprite.prototype._executeTint = function (_0x58b7da, _0x12c835, _0x3cf2f9, _0x2fb26f) {
  var _0x475c82 = this._context;
  var _0x528db1 = this._colorTone;
  var _0x620098 = this._blendColor;
  _0x475c82.globalCompositeOperation = "copy";
  _0x475c82.drawImage(this._bitmap.canvas, _0x58b7da, _0x12c835, _0x3cf2f9, _0x2fb26f, 0, 0, _0x3cf2f9, _0x2fb26f);
  if (Graphics.canUseSaturationBlend()) {
    var _0x47c586 = Math.max(0, _0x528db1[3]);
    _0x475c82.globalCompositeOperation = "saturation";
    _0x475c82.fillStyle = "rgba(255,255,255," + _0x47c586 / 255 + ")";
    _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
  }
  var _0x59f3e5 = Math.max(0, _0x528db1[0]);
  var _0x3bbdf1 = Math.max(0, _0x528db1[1]);
  var _0x34768a = Math.max(0, _0x528db1[2]);
  _0x475c82.globalCompositeOperation = "lighter";
  _0x475c82.fillStyle = Utils.rgbToCssColor(_0x59f3e5, _0x3bbdf1, _0x34768a);
  _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
  if (Graphics.canUseDifferenceBlend()) {
    _0x475c82.globalCompositeOperation = "difference";
    _0x475c82.fillStyle = "white";
    _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
    var _0x3da197 = Math.max(0, -_0x528db1[0]);
    var _0x196535 = Math.max(0, -_0x528db1[1]);
    var _0x1559f0 = Math.max(0, -_0x528db1[2]);
    _0x475c82.globalCompositeOperation = "lighter";
    _0x475c82.fillStyle = Utils.rgbToCssColor(_0x3da197, _0x196535, _0x1559f0);
    _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
    _0x475c82.globalCompositeOperation = "difference";
    _0x475c82.fillStyle = "white";
    _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
  }
  var _0x5ad23f = Math.max(0, _0x620098[0]);
  var _0x2b24ca = Math.max(0, _0x620098[1]);
  var _0x4b0303 = Math.max(0, _0x620098[2]);
  var _0x168079 = Math.max(0, _0x620098[3]);
  _0x475c82.globalCompositeOperation = "source-atop";
  _0x475c82.fillStyle = Utils.rgbToCssColor(_0x5ad23f, _0x2b24ca, _0x4b0303);
  _0x475c82.globalAlpha = _0x168079 / 255;
  _0x475c82.fillRect(0, 0, _0x3cf2f9, _0x2fb26f);
  _0x475c82.globalCompositeOperation = "destination-in";
  _0x475c82.globalAlpha = 1;
  _0x475c82.drawImage(this._bitmap.canvas, _0x58b7da, _0x12c835, _0x3cf2f9, _0x2fb26f, 0, 0, _0x3cf2f9, _0x2fb26f);
};
Sprite.prototype._renderCanvas_PIXI = PIXI.Sprite.prototype._renderCanvas;
Sprite.prototype._renderWebGL_PIXI = PIXI.Sprite.prototype._renderWebGL;
Sprite.prototype._renderCanvas = function (_0x4bf2ea) {
  if (this.bitmap) {
    this.bitmap.touch();
  }
  if (this.bitmap && !this.bitmap.isReady()) {
    return;
  }
  if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
    this._renderCanvas_PIXI(_0x4bf2ea);
  }
};
Sprite.prototype._speedUpCustomBlendModes = function (_0x23f2ad) {
  var _0x1f56df = _0x23f2ad.plugins.picture;
  var _0x45b77b = this.blendMode;
  if (_0x23f2ad.renderingToScreen && _0x23f2ad._activeRenderTarget.root) {
    if (_0x1f56df.drawModes[_0x45b77b]) {
      var _0x14002c = _0x23f2ad._lastObjectRendered;
      var _0x519e5f = _0x14002c._filters;
      if (!_0x519e5f || !_0x519e5f[0]) {
        setTimeout(function () {
          var _0x5178a7 = _0x14002c._filters;
          if (!_0x5178a7 || !_0x5178a7[0]) {
            _0x14002c.filters = [Sprite.voidFilter];
            _0x14002c.filterArea = new PIXI.Rectangle(0, 0, Graphics.width, Graphics.height);
          }
        }, 0);
      }
    }
  }
};
Sprite.prototype._renderWebGL = function (_0x180073) {
  if (this.bitmap) {
    this.bitmap.touch();
  }
  if (this.bitmap && !this.bitmap.isReady()) {
    return;
  }
  if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
    if (this._bitmap) {
      this._bitmap.checkDirty();
    }
    this.calculateVertices();
    if (this.pluginName === "sprite" && this._isPicture) {
      this._speedUpCustomBlendModes(_0x180073);
      _0x180073.setObjectRenderer(_0x180073.plugins.picture);
      _0x180073.plugins.picture.render(this);
    } else {
      _0x180073.setObjectRenderer(_0x180073.plugins[this.pluginName]);
      _0x180073.plugins[this.pluginName].render(this);
    }
  }
};
function Tilemap() {
  this.initialize.apply(this, arguments);
}
Tilemap.prototype = Object.create(PIXI.Container.prototype);
Tilemap.prototype.constructor = Tilemap;
Tilemap.prototype.initialize = function () {
  PIXI.Container.call(this);
  this._margin = 20;
  this._width = Graphics.width + this._margin * 2;
  this._height = Graphics.height + this._margin * 2;
  this._tileWidth = 48;
  this._tileHeight = 48;
  this._mapWidth = 0;
  this._mapHeight = 0;
  this._mapData = null;
  this._layerWidth = 0;
  this._layerHeight = 0;
  this._lastTiles = [];
  this.bitmaps = [];
  this.origin = new Point();
  this.flags = [];
  this.animationCount = 0;
  this.horizontalWrap = false;
  this.verticalWrap = false;
  this._createLayers();
  this.refresh();
};
Object.defineProperty(Tilemap.prototype, "width", {
  get: function () {
    return this._width;
  },
  set: function (_0x4d6291) {
    if (this._width !== _0x4d6291) {
      this._width = _0x4d6291;
      this._createLayers();
    }
  }
});
Object.defineProperty(Tilemap.prototype, "height", {
  get: function () {
    return this._height;
  },
  set: function (_0x4ab4c6) {
    if (this._height !== _0x4ab4c6) {
      this._height = _0x4ab4c6;
      this._createLayers();
    }
  }
});
Object.defineProperty(Tilemap.prototype, "tileWidth", {
  get: function () {
    return this._tileWidth;
  },
  set: function (_0x3248c8) {
    if (this._tileWidth !== _0x3248c8) {
      this._tileWidth = _0x3248c8;
      this._createLayers();
    }
  }
});
Object.defineProperty(Tilemap.prototype, "tileHeight", {
  get: function () {
    return this._tileHeight;
  },
  set: function (_0x4214d5) {
    if (this._tileHeight !== _0x4214d5) {
      this._tileHeight = _0x4214d5;
      this._createLayers();
    }
  }
});
Tilemap.prototype.setData = function (_0x47dcaa, _0x447465, _0x4a1329) {
  this._mapWidth = _0x47dcaa;
  this._mapHeight = _0x447465;
  this._mapData = _0x4a1329;
};
Tilemap.prototype.isReady = function () {
  for (var _0x3e371a = 0; _0x3e371a < this.bitmaps.length; _0x3e371a++) {
    if (this.bitmaps[_0x3e371a] && !this.bitmaps[_0x3e371a].isReady()) {
      return false;
    }
  }
  return true;
};
Tilemap.prototype.update = function () {
  this.animationCount++;
  this.animationFrame = Math.floor(this.animationCount / 30);
  this.children.forEach(function (_0x452bf9) {
    if (_0x452bf9.update) {
      _0x452bf9.update();
    }
  });
  for (var _0xe78783 = 0; _0xe78783 < this.bitmaps.length; _0xe78783++) {
    if (this.bitmaps[_0xe78783]) {
      this.bitmaps[_0xe78783].touch();
    }
  }
};
Tilemap.prototype.refresh = function () {
  this._lastTiles.length = 0;
};
Tilemap.prototype.refreshTileset = function () {};
Tilemap.prototype.updateTransform = function () {
  var _0x21aab0 = Math.floor(this.origin.x);
  var _0x3e9318 = Math.floor(this.origin.y);
  var _0x1150d8 = Math.floor((_0x21aab0 - this._margin) / this._tileWidth);
  var _0x5c371e = Math.floor((_0x3e9318 - this._margin) / this._tileHeight);
  this._updateLayerPositions(_0x1150d8, _0x5c371e);
  if (this._needsRepaint || this._lastAnimationFrame !== this.animationFrame || this._lastStartX !== _0x1150d8 || this._lastStartY !== _0x5c371e) {
    this._frameUpdated = this._lastAnimationFrame !== this.animationFrame;
    this._lastAnimationFrame = this.animationFrame;
    this._lastStartX = _0x1150d8;
    this._lastStartY = _0x5c371e;
    this._paintAllTiles(_0x1150d8, _0x5c371e);
    this._needsRepaint = false;
  }
  this._sortChildren();
  PIXI.Container.prototype.updateTransform.call(this);
};
Tilemap.prototype._createLayers = function () {
  var _0x5c4f25 = this._width;
  var _0x7a1308 = this._height;
  var _0x1926f2 = this._margin;
  var _0x429116 = Math.ceil(_0x5c4f25 / this._tileWidth) + 1;
  var _0x190718 = Math.ceil(_0x7a1308 / this._tileHeight) + 1;
  var _0xaf02c2 = _0x429116 * this._tileWidth;
  var _0x3c291a = _0x190718 * this._tileHeight;
  this._lowerBitmap = new Bitmap(_0xaf02c2, _0x3c291a);
  this._upperBitmap = new Bitmap(_0xaf02c2, _0x3c291a);
  this._layerWidth = _0xaf02c2;
  this._layerHeight = _0x3c291a;
  this._lowerLayer = new Sprite();
  this._lowerLayer.move(-_0x1926f2, -_0x1926f2, _0x5c4f25, _0x7a1308);
  this._lowerLayer.z = 0;
  this._upperLayer = new Sprite();
  this._upperLayer.move(-_0x1926f2, -_0x1926f2, _0x5c4f25, _0x7a1308);
  this._upperLayer.z = 4;
  for (var _0x2426f5 = 0; _0x2426f5 < 4; _0x2426f5++) {
    this._lowerLayer.addChild(new Sprite(this._lowerBitmap));
    this._upperLayer.addChild(new Sprite(this._upperBitmap));
  }
  this.addChild(this._lowerLayer);
  this.addChild(this._upperLayer);
};
Tilemap.prototype._updateLayerPositions = function (_0x288e7a, _0x5b5296) {
  var _0x3ed11e = this._margin;
  var _0x5b9681 = Math.floor(this.origin.x);
  var _0x4e3df1 = Math.floor(this.origin.y);
  var _0x399f75 = (_0x5b9681 - _0x3ed11e).mod(this._layerWidth);
  var _0x2df514 = (_0x4e3df1 - _0x3ed11e).mod(this._layerHeight);
  var _0x46c063 = this._layerWidth - _0x399f75;
  var _0x29bd24 = this._layerHeight - _0x2df514;
  var _0x16798d = this._width - _0x46c063;
  var _0x21bbea = this._height - _0x29bd24;
  for (var _0x15d4d4 = 0; _0x15d4d4 < 2; _0x15d4d4++) {
    var _0x2201a2;
    if (_0x15d4d4 === 0) {
      _0x2201a2 = this._lowerLayer.children;
    } else {
      _0x2201a2 = this._upperLayer.children;
    }
    _0x2201a2[0].move(0, 0, _0x46c063, _0x29bd24);
    _0x2201a2[0].setFrame(_0x399f75, _0x2df514, _0x46c063, _0x29bd24);
    _0x2201a2[1].move(_0x46c063, 0, _0x16798d, _0x29bd24);
    _0x2201a2[1].setFrame(0, _0x2df514, _0x16798d, _0x29bd24);
    _0x2201a2[2].move(0, _0x29bd24, _0x46c063, _0x21bbea);
    _0x2201a2[2].setFrame(_0x399f75, 0, _0x46c063, _0x21bbea);
    _0x2201a2[3].move(_0x46c063, _0x29bd24, _0x16798d, _0x21bbea);
    _0x2201a2[3].setFrame(0, 0, _0x16798d, _0x21bbea);
  }
};
Tilemap.prototype._paintAllTiles = function (_0x23b10c, _0x5cb63c) {
  var _0x2a1197 = Math.ceil(this._width / this._tileWidth) + 1;
  var _0x48c9b2 = Math.ceil(this._height / this._tileHeight) + 1;
  for (var _0x37a098 = 0; _0x37a098 < _0x48c9b2; _0x37a098++) {
    for (var _0xed4d61 = 0; _0xed4d61 < _0x2a1197; _0xed4d61++) {
      this._paintTiles(_0x23b10c, _0x5cb63c, _0xed4d61, _0x37a098);
    }
  }
};
Tilemap.prototype._paintTiles = function (_0x2c28c4, _0x1b192a, _0x459d19, _0x28f329) {
  var _0x404844 = 10000;
  var _0x2e3a08 = _0x2c28c4 + _0x459d19;
  var _0x1f0e53 = _0x1b192a + _0x28f329;
  var _0x43fd92 = (_0x2e3a08 * this._tileWidth).mod(this._layerWidth);
  var _0x2074b2 = (_0x1f0e53 * this._tileHeight).mod(this._layerHeight);
  var _0x7cbf9a = _0x43fd92 / this._tileWidth;
  var _0x53b6cb = _0x2074b2 / this._tileHeight;
  var _0x3ccc75 = this._readMapData(_0x2e3a08, _0x1f0e53, 0);
  var _0x112e4b = this._readMapData(_0x2e3a08, _0x1f0e53, 1);
  var _0x227b04 = this._readMapData(_0x2e3a08, _0x1f0e53, 2);
  var _0x15d6c6 = this._readMapData(_0x2e3a08, _0x1f0e53, 3);
  var _0x27d1ee = this._readMapData(_0x2e3a08, _0x1f0e53, 4);
  var _0x41448c = this._readMapData(_0x2e3a08, _0x1f0e53 - 1, 1);
  var _0x53030b = [];
  var _0x12da3a = [];
  if (this._isHigherTile(_0x3ccc75)) {
    _0x12da3a.push(_0x3ccc75);
  } else {
    _0x53030b.push(_0x3ccc75);
  }
  if (this._isHigherTile(_0x112e4b)) {
    _0x12da3a.push(_0x112e4b);
  } else {
    _0x53030b.push(_0x112e4b);
  }
  _0x53030b.push(-_0x27d1ee);
  if (this._isTableTile(_0x41448c) && !this._isTableTile(_0x112e4b)) {
    if (!Tilemap.isShadowingTile(_0x3ccc75)) {
      _0x53030b.push(_0x404844 + _0x41448c);
    }
  }
  if (this._isOverpassPosition(_0x2e3a08, _0x1f0e53)) {
    _0x12da3a.push(_0x227b04);
    _0x12da3a.push(_0x15d6c6);
  } else {
    if (this._isHigherTile(_0x227b04)) {
      _0x12da3a.push(_0x227b04);
    } else {
      _0x53030b.push(_0x227b04);
    }
    if (this._isHigherTile(_0x15d6c6)) {
      _0x12da3a.push(_0x15d6c6);
    } else {
      _0x53030b.push(_0x15d6c6);
    }
  }
  var _0x4d8144 = this._readLastTiles(0, _0x7cbf9a, _0x53b6cb);
  if (!_0x53030b.equals(_0x4d8144) || Tilemap.isTileA1(_0x3ccc75) && this._frameUpdated) {
    this._lowerBitmap.clearRect(_0x43fd92, _0x2074b2, this._tileWidth, this._tileHeight);
    for (var _0x50f775 = 0; _0x50f775 < _0x53030b.length; _0x50f775++) {
      var _0x567fa1 = _0x53030b[_0x50f775];
      if (_0x567fa1 < 0) {
        this._drawShadow(this._lowerBitmap, _0x27d1ee, _0x43fd92, _0x2074b2);
      } else if (_0x567fa1 >= _0x404844) {
        this._drawTableEdge(this._lowerBitmap, _0x41448c, _0x43fd92, _0x2074b2);
      } else {
        this._drawTile(this._lowerBitmap, _0x567fa1, _0x43fd92, _0x2074b2);
      }
    }
    this._writeLastTiles(0, _0x7cbf9a, _0x53b6cb, _0x53030b);
  }
  var _0x17bbad = this._readLastTiles(1, _0x7cbf9a, _0x53b6cb);
  if (!_0x12da3a.equals(_0x17bbad)) {
    this._upperBitmap.clearRect(_0x43fd92, _0x2074b2, this._tileWidth, this._tileHeight);
    for (var _0x2538f8 = 0; _0x2538f8 < _0x12da3a.length; _0x2538f8++) {
      this._drawTile(this._upperBitmap, _0x12da3a[_0x2538f8], _0x43fd92, _0x2074b2);
    }
    this._writeLastTiles(1, _0x7cbf9a, _0x53b6cb, _0x12da3a);
  }
};
Tilemap.prototype._readLastTiles = function (_0x5b16bd, _0x537dbc, _0x470ef8) {
  var _0x212745 = this._lastTiles[_0x5b16bd];
  if (_0x212745) {
    var _0x302564 = _0x212745[_0x470ef8];
    if (_0x302564) {
      var _0x46c3f4 = _0x302564[_0x537dbc];
      if (_0x46c3f4) {
        return _0x46c3f4;
      }
    }
  }
  return [];
};
Tilemap.prototype._writeLastTiles = function (_0x2199eb, _0x585a5a, _0x20e04b, _0x2475e5) {
  var _0x50a3f9 = this._lastTiles[_0x2199eb];
  if (!_0x50a3f9) {
    _0x50a3f9 = this._lastTiles[_0x2199eb] = [];
  }
  var _0x31177a = _0x50a3f9[_0x20e04b];
  if (!_0x31177a) {
    _0x31177a = _0x50a3f9[_0x20e04b] = [];
  }
  _0x31177a[_0x585a5a] = _0x2475e5;
};
Tilemap.prototype._drawTile = function (_0x41d7e6, _0x2c8747, _0x4e043a, _0x448e99) {
  if (Tilemap.isVisibleTile(_0x2c8747)) {
    if (Tilemap.isAutotile(_0x2c8747)) {
      this._drawAutotile(_0x41d7e6, _0x2c8747, _0x4e043a, _0x448e99);
    } else {
      this._drawNormalTile(_0x41d7e6, _0x2c8747, _0x4e043a, _0x448e99);
    }
  }
};
Tilemap.prototype._drawNormalTile = function (_0xaf8f8, _0x105447, _0x215688, _0x37e17a) {
  var _0x424ef9 = 0;
  if (Tilemap.isTileA5(_0x105447)) {
    _0x424ef9 = 4;
  } else {
    _0x424ef9 = 5 + Math.floor(_0x105447 / 256);
  }
  var _0x123993 = this._tileWidth;
  var _0x2000fc = this._tileHeight;
  var _0x4b4097 = (Math.floor(_0x105447 / 128) % 2 * 8 + _0x105447 % 8) * _0x123993;
  var _0x379294 = Math.floor(_0x105447 % 256 / 8) % 16 * _0x2000fc;
  var _0x5341d6 = this.bitmaps[_0x424ef9];
  if (_0x5341d6) {
    _0xaf8f8.bltImage(_0x5341d6, _0x4b4097, _0x379294, _0x123993, _0x2000fc, _0x215688, _0x37e17a, _0x123993, _0x2000fc);
  }
};
Tilemap.prototype._drawAutotile = function (_0x3b7dbb, _0x68a9b2, _0x303f16, _0x32a3bb) {
  var _0x374765 = Tilemap.FLOOR_AUTOTILE_TABLE;
  var _0x2fdf3e = Tilemap.getAutotileKind(_0x68a9b2);
  var _0x5807fd = Tilemap.getAutotileShape(_0x68a9b2);
  var _0x4657b4 = _0x2fdf3e % 8;
  var _0x1c63ba = Math.floor(_0x2fdf3e / 8);
  var _0xd33dd8 = 0;
  var _0x127411 = 0;
  var _0x1e4c58 = 0;
  var _0x1d081d = false;
  if (Tilemap.isTileA1(_0x68a9b2)) {
    var _0x357572 = [0, 1, 2, 1][this.animationFrame % 4];
    _0x1e4c58 = 0;
    if (_0x2fdf3e === 0) {
      _0xd33dd8 = _0x357572 * 2;
      _0x127411 = 0;
    } else if (_0x2fdf3e === 1) {
      _0xd33dd8 = _0x357572 * 2;
      _0x127411 = 3;
    } else if (_0x2fdf3e === 2) {
      _0xd33dd8 = 6;
      _0x127411 = 0;
    } else if (_0x2fdf3e === 3) {
      _0xd33dd8 = 6;
      _0x127411 = 3;
    } else {
      _0xd33dd8 = Math.floor(_0x4657b4 / 4) * 8;
      _0x127411 = _0x1c63ba * 6 + Math.floor(_0x4657b4 / 2) % 2 * 3;
      if (_0x2fdf3e % 2 === 0) {
        _0xd33dd8 += _0x357572 * 2;
      } else {
        _0xd33dd8 += 6;
        _0x374765 = Tilemap.WATERFALL_AUTOTILE_TABLE;
        _0x127411 += this.animationFrame % 3;
      }
    }
  } else if (Tilemap.isTileA2(_0x68a9b2)) {
    _0x1e4c58 = 1;
    _0xd33dd8 = _0x4657b4 * 2;
    _0x127411 = (_0x1c63ba - 2) * 3;
    _0x1d081d = this._isTableTile(_0x68a9b2);
  } else if (Tilemap.isTileA3(_0x68a9b2)) {
    _0x1e4c58 = 2;
    _0xd33dd8 = _0x4657b4 * 2;
    _0x127411 = (_0x1c63ba - 6) * 2;
    _0x374765 = Tilemap.WALL_AUTOTILE_TABLE;
  } else if (Tilemap.isTileA4(_0x68a9b2)) {
    _0x1e4c58 = 3;
    _0xd33dd8 = _0x4657b4 * 2;
    _0x127411 = Math.floor((_0x1c63ba - 10) * 2.5 + (_0x1c63ba % 2 === 1 ? 0.5 : 0));
    if (_0x1c63ba % 2 === 1) {
      _0x374765 = Tilemap.WALL_AUTOTILE_TABLE;
    }
  }
  var _0x1cbe7c = _0x374765[_0x5807fd];
  var _0x533415 = this.bitmaps[_0x1e4c58];
  if (_0x1cbe7c && _0x533415) {
    var _0x533bf9 = this._tileWidth / 2;
    var _0x37eb80 = this._tileHeight / 2;
    for (var _0x3238c3 = 0; _0x3238c3 < 4; _0x3238c3++) {
      var _0x72bb9d = _0x1cbe7c[_0x3238c3][0];
      var _0x49dba0 = _0x1cbe7c[_0x3238c3][1];
      var _0x3394ed = (_0xd33dd8 * 2 + _0x72bb9d) * _0x533bf9;
      var _0x2b5562 = (_0x127411 * 2 + _0x49dba0) * _0x37eb80;
      var _0x246d2d = _0x303f16 + _0x3238c3 % 2 * _0x533bf9;
      var _0x5a9d22 = _0x32a3bb + Math.floor(_0x3238c3 / 2) * _0x37eb80;
      if (_0x1d081d && (_0x49dba0 === 1 || _0x49dba0 === 5)) {
        var _0x3a3de8 = _0x72bb9d;
        var _0x75cdf5 = 3;
        if (_0x49dba0 === 1) {
          _0x3a3de8 = [0, 3, 2, 1][_0x72bb9d];
        }
        var _0x525c55 = (_0xd33dd8 * 2 + _0x3a3de8) * _0x533bf9;
        var _0x59e412 = (_0x127411 * 2 + _0x75cdf5) * _0x37eb80;
        _0x3b7dbb.bltImage(_0x533415, _0x525c55, _0x59e412, _0x533bf9, _0x37eb80, _0x246d2d, _0x5a9d22, _0x533bf9, _0x37eb80);
        _0x5a9d22 += _0x37eb80 / 2;
        _0x3b7dbb.bltImage(_0x533415, _0x3394ed, _0x2b5562, _0x533bf9, _0x37eb80 / 2, _0x246d2d, _0x5a9d22, _0x533bf9, _0x37eb80 / 2);
      } else {
        _0x3b7dbb.bltImage(_0x533415, _0x3394ed, _0x2b5562, _0x533bf9, _0x37eb80, _0x246d2d, _0x5a9d22, _0x533bf9, _0x37eb80);
      }
    }
  }
};
Tilemap.prototype._drawTableEdge = function (_0x2e81a1, _0x2d46f4, _0x41f895, _0x1b7b5d) {
  if (Tilemap.isTileA2(_0x2d46f4)) {
    var _0x24de64 = Tilemap.FLOOR_AUTOTILE_TABLE;
    var _0x44a6a5 = Tilemap.getAutotileKind(_0x2d46f4);
    var _0x5a779c = Tilemap.getAutotileShape(_0x2d46f4);
    var _0x59b93a = _0x44a6a5 % 8;
    var _0x3223c0 = Math.floor(_0x44a6a5 / 8);
    var _0xcdab87 = 1;
    var _0x19c65f = _0x59b93a * 2;
    var _0x293253 = (_0x3223c0 - 2) * 3;
    var _0x418e4b = _0x24de64[_0x5a779c];
    if (_0x418e4b) {
      var _0x329a73 = this.bitmaps[_0xcdab87];
      var _0x3a033e = this._tileWidth / 2;
      var _0x1a1311 = this._tileHeight / 2;
      for (var _0x502f19 = 0; _0x502f19 < 2; _0x502f19++) {
        var _0x86cde0 = _0x418e4b[2 + _0x502f19][0];
        var _0x21f4fd = _0x418e4b[2 + _0x502f19][1];
        var _0xcc5a72 = (_0x19c65f * 2 + _0x86cde0) * _0x3a033e;
        var _0x4fc516 = (_0x293253 * 2 + _0x21f4fd) * _0x1a1311 + _0x1a1311 / 2;
        var _0x225923 = _0x41f895 + _0x502f19 % 2 * _0x3a033e;
        var _0x594d70 = _0x1b7b5d + Math.floor(_0x502f19 / 2) * _0x1a1311;
        _0x2e81a1.bltImage(_0x329a73, _0xcc5a72, _0x4fc516, _0x3a033e, _0x1a1311 / 2, _0x225923, _0x594d70, _0x3a033e, _0x1a1311 / 2);
      }
    }
  }
};
Tilemap.prototype._drawShadow = function (_0x41fa5e, _0x1ca4f4, _0x49431c, _0x544b27) {
  if (_0x1ca4f4 & 15) {
    var _0x4b698c = this._tileWidth / 2;
    var _0x3f7aa4 = this._tileHeight / 2;
    var _0x413ce6 = "rgba(0,0,0,0.5)";
    for (var _0x53f0ed = 0; _0x53f0ed < 4; _0x53f0ed++) {
      if (_0x1ca4f4 & 1 << _0x53f0ed) {
        var _0x17c40c = _0x49431c + _0x53f0ed % 2 * _0x4b698c;
        var _0x49c5a5 = _0x544b27 + Math.floor(_0x53f0ed / 2) * _0x3f7aa4;
        _0x41fa5e.fillRect(_0x17c40c, _0x49c5a5, _0x4b698c, _0x3f7aa4, _0x413ce6);
      }
    }
  }
};
Tilemap.prototype._readMapData = function (_0x23983f, _0x1030be, _0x49aa8f) {
  if (this._mapData) {
    var _0x16ad4b = this._mapWidth;
    var _0x3bc87b = this._mapHeight;
    if (this.horizontalWrap) {
      _0x23983f = _0x23983f.mod(_0x16ad4b);
    }
    if (this.verticalWrap) {
      _0x1030be = _0x1030be.mod(_0x3bc87b);
    }
    if (_0x23983f >= 0 && _0x23983f < _0x16ad4b && _0x1030be >= 0 && _0x1030be < _0x3bc87b) {
      return this._mapData[(_0x49aa8f * _0x3bc87b + _0x1030be) * _0x16ad4b + _0x23983f] || 0;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
Tilemap.prototype._isHigherTile = function (_0xb8cf51) {
  return this.flags[_0xb8cf51] & 16;
};
Tilemap.prototype._isTableTile = function (_0x28abb4) {
  return Tilemap.isTileA2(_0x28abb4) && this.flags[_0x28abb4] & 128;
};
Tilemap.prototype._isOverpassPosition = function (_0x1e80ff, _0x381587) {
  return false;
};
Tilemap.prototype._sortChildren = function () {
  this.children.sort(this._compareChildOrder.bind(this));
};
Tilemap.prototype._compareChildOrder = function (_0x5c4d8f, _0x5c1283) {
  if (_0x5c4d8f.z !== _0x5c1283.z) {
    return _0x5c4d8f.z - _0x5c1283.z;
  } else if (_0x5c4d8f.y !== _0x5c1283.y) {
    return _0x5c4d8f.y - _0x5c1283.y;
  } else {
    return _0x5c4d8f.spriteId - _0x5c1283.spriteId;
  }
};
Tilemap.TILE_ID_B = 0;
Tilemap.TILE_ID_C = 256;
Tilemap.TILE_ID_D = 512;
Tilemap.TILE_ID_E = 768;
Tilemap.TILE_ID_A5 = 1536;
Tilemap.TILE_ID_A1 = 2048;
Tilemap.TILE_ID_A2 = 2816;
Tilemap.TILE_ID_A3 = 4352;
Tilemap.TILE_ID_A4 = 5888;
Tilemap.TILE_ID_MAX = 8192;
Tilemap.isVisibleTile = function (_0x2dd46c) {
  return _0x2dd46c > 0 && _0x2dd46c < this.TILE_ID_MAX;
};
Tilemap.isAutotile = function (_0x50352b) {
  return _0x50352b >= this.TILE_ID_A1;
};
Tilemap.getAutotileKind = function (_0xeef653) {
  return Math.floor((_0xeef653 - this.TILE_ID_A1) / 48);
};
Tilemap.getAutotileShape = function (_0x5cda19) {
  return (_0x5cda19 - this.TILE_ID_A1) % 48;
};
Tilemap.makeAutotileId = function (_0x56ceb7, _0x1f1ebb) {
  return this.TILE_ID_A1 + _0x56ceb7 * 48 + _0x1f1ebb;
};
Tilemap.isSameKindTile = function (_0x1d8f6b, _0x763390) {
  if (this.isAutotile(_0x1d8f6b) && this.isAutotile(_0x763390)) {
    return this.getAutotileKind(_0x1d8f6b) === this.getAutotileKind(_0x763390);
  } else {
    return _0x1d8f6b === _0x763390;
  }
};
Tilemap.isTileA1 = function (_0x407f27) {
  return _0x407f27 >= this.TILE_ID_A1 && _0x407f27 < this.TILE_ID_A2;
};
Tilemap.isTileA2 = function (_0x103725) {
  return _0x103725 >= this.TILE_ID_A2 && _0x103725 < this.TILE_ID_A3;
};
Tilemap.isTileA3 = function (_0x4ab207) {
  return _0x4ab207 >= this.TILE_ID_A3 && _0x4ab207 < this.TILE_ID_A4;
};
Tilemap.isTileA4 = function (_0x44d296) {
  return _0x44d296 >= this.TILE_ID_A4 && _0x44d296 < this.TILE_ID_MAX;
};
Tilemap.isTileA5 = function (_0x365a43) {
  return _0x365a43 >= this.TILE_ID_A5 && _0x365a43 < this.TILE_ID_A1;
};
Tilemap.isWaterTile = function (_0x3c8130) {
  if (this.isTileA1(_0x3c8130)) {
    return !(_0x3c8130 >= this.TILE_ID_A1 + 96) || !(_0x3c8130 < this.TILE_ID_A1 + 192);
  } else {
    return false;
  }
};
Tilemap.isWaterfallTile = function (_0x48043d) {
  if (_0x48043d >= this.TILE_ID_A1 + 192 && _0x48043d < this.TILE_ID_A2) {
    return this.getAutotileKind(_0x48043d) % 2 === 1;
  } else {
    return false;
  }
};
Tilemap.isGroundTile = function (_0x83d33f) {
  return this.isTileA1(_0x83d33f) || this.isTileA2(_0x83d33f) || this.isTileA5(_0x83d33f);
};
Tilemap.isShadowingTile = function (_0x2e4ac5) {
  return this.isTileA3(_0x2e4ac5) || this.isTileA4(_0x2e4ac5);
};
Tilemap.isRoofTile = function (_0x57e06b) {
  return this.isTileA3(_0x57e06b) && this.getAutotileKind(_0x57e06b) % 16 < 8;
};
Tilemap.isWallTopTile = function (_0x498056) {
  return this.isTileA4(_0x498056) && this.getAutotileKind(_0x498056) % 16 < 8;
};
Tilemap.isWallSideTile = function (_0x254635) {
  return (this.isTileA3(_0x254635) || this.isTileA4(_0x254635)) && this.getAutotileKind(_0x254635) % 16 >= 8;
};
Tilemap.isWallTile = function (_0x39f55a) {
  return this.isWallTopTile(_0x39f55a) || this.isWallSideTile(_0x39f55a);
};
Tilemap.isFloorTypeAutotile = function (_0x5c2695) {
  return this.isTileA1(_0x5c2695) && !this.isWaterfallTile(_0x5c2695) || this.isTileA2(_0x5c2695) || this.isWallTopTile(_0x5c2695);
};
Tilemap.isWallTypeAutotile = function (_0x57cfda) {
  return this.isRoofTile(_0x57cfda) || this.isWallSideTile(_0x57cfda);
};
Tilemap.isWaterfallTypeAutotile = function (_0x1f6db6) {
  return this.isWaterfallTile(_0x1f6db6);
};
Tilemap.FLOOR_AUTOTILE_TABLE = [[[2, 4], [1, 4], [2, 3], [1, 3]], [[2, 0], [1, 4], [2, 3], [1, 3]], [[2, 4], [3, 0], [2, 3], [1, 3]], [[2, 0], [3, 0], [2, 3], [1, 3]], [[2, 4], [1, 4], [2, 3], [3, 1]], [[2, 0], [1, 4], [2, 3], [3, 1]], [[2, 4], [3, 0], [2, 3], [3, 1]], [[2, 0], [3, 0], [2, 3], [3, 1]], [[2, 4], [1, 4], [2, 1], [1, 3]], [[2, 0], [1, 4], [2, 1], [1, 3]], [[2, 4], [3, 0], [2, 1], [1, 3]], [[2, 0], [3, 0], [2, 1], [1, 3]], [[2, 4], [1, 4], [2, 1], [3, 1]], [[2, 0], [1, 4], [2, 1], [3, 1]], [[2, 4], [3, 0], [2, 1], [3, 1]], [[2, 0], [3, 0], [2, 1], [3, 1]], [[0, 4], [1, 4], [0, 3], [1, 3]], [[0, 4], [3, 0], [0, 3], [1, 3]], [[0, 4], [1, 4], [0, 3], [3, 1]], [[0, 4], [3, 0], [0, 3], [3, 1]], [[2, 2], [1, 2], [2, 3], [1, 3]], [[2, 2], [1, 2], [2, 3], [3, 1]], [[2, 2], [1, 2], [2, 1], [1, 3]], [[2, 2], [1, 2], [2, 1], [3, 1]], [[2, 4], [3, 4], [2, 3], [3, 3]], [[2, 4], [3, 4], [2, 1], [3, 3]], [[2, 0], [3, 4], [2, 3], [3, 3]], [[2, 0], [3, 4], [2, 1], [3, 3]], [[2, 4], [1, 4], [2, 5], [1, 5]], [[2, 0], [1, 4], [2, 5], [1, 5]], [[2, 4], [3, 0], [2, 5], [1, 5]], [[2, 0], [3, 0], [2, 5], [1, 5]], [[0, 4], [3, 4], [0, 3], [3, 3]], [[2, 2], [1, 2], [2, 5], [1, 5]], [[0, 2], [1, 2], [0, 3], [1, 3]], [[0, 2], [1, 2], [0, 3], [3, 1]], [[2, 2], [3, 2], [2, 3], [3, 3]], [[2, 2], [3, 2], [2, 1], [3, 3]], [[2, 4], [3, 4], [2, 5], [3, 5]], [[2, 0], [3, 4], [2, 5], [3, 5]], [[0, 4], [1, 4], [0, 5], [1, 5]], [[0, 4], [3, 0], [0, 5], [1, 5]], [[0, 2], [3, 2], [0, 3], [3, 3]], [[0, 2], [1, 2], [0, 5], [1, 5]], [[0, 4], [3, 4], [0, 5], [3, 5]], [[2, 2], [3, 2], [2, 5], [3, 5]], [[0, 2], [3, 2], [0, 5], [3, 5]], [[0, 0], [1, 0], [0, 1], [1, 1]]];
Tilemap.WALL_AUTOTILE_TABLE = [[[2, 2], [1, 2], [2, 1], [1, 1]], [[0, 2], [1, 2], [0, 1], [1, 1]], [[2, 0], [1, 0], [2, 1], [1, 1]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[2, 2], [3, 2], [2, 1], [3, 1]], [[0, 2], [3, 2], [0, 1], [3, 1]], [[2, 0], [3, 0], [2, 1], [3, 1]], [[0, 0], [3, 0], [0, 1], [3, 1]], [[2, 2], [1, 2], [2, 3], [1, 3]], [[0, 2], [1, 2], [0, 3], [1, 3]], [[2, 0], [1, 0], [2, 3], [1, 3]], [[0, 0], [1, 0], [0, 3], [1, 3]], [[2, 2], [3, 2], [2, 3], [3, 3]], [[0, 2], [3, 2], [0, 3], [3, 3]], [[2, 0], [3, 0], [2, 3], [3, 3]], [[0, 0], [3, 0], [0, 3], [3, 3]]];
Tilemap.WATERFALL_AUTOTILE_TABLE = [[[2, 0], [1, 0], [2, 1], [1, 1]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[2, 0], [3, 0], [2, 1], [3, 1]], [[0, 0], [3, 0], [0, 1], [3, 1]]];
function ShaderTilemap() {
  Tilemap.apply(this, arguments);
  this.roundPixels = true;
}
ShaderTilemap.prototype = Object.create(Tilemap.prototype);
ShaderTilemap.prototype.constructor = ShaderTilemap;
PIXI.glCore.VertexArrayObject.FORCE_NATIVE = true;
PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;
PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.tilemap.TileRenderer.DO_CLEAR = true;
ShaderTilemap.prototype._hackRenderer = function (_0x523e98) {
  var _0x29bdb0 = this.animationFrame % 4;
  if (_0x29bdb0 == 3) {
    _0x29bdb0 = 1;
  }
  _0x523e98.plugins.tilemap.tileAnim[0] = _0x29bdb0 * this._tileWidth;
  _0x523e98.plugins.tilemap.tileAnim[1] = this.animationFrame % 3 * this._tileHeight;
  return _0x523e98;
};
ShaderTilemap.prototype.renderCanvas = function (_0x1f953d) {
  this._hackRenderer(_0x1f953d);
  PIXI.Container.prototype.renderCanvas.call(this, _0x1f953d);
};
ShaderTilemap.prototype.renderWebGL = function (_0x4fa040) {
  this._hackRenderer(_0x4fa040);
  PIXI.Container.prototype.renderWebGL.call(this, _0x4fa040);
};
ShaderTilemap.prototype.refresh = function () {
  if (this._lastBitmapLength !== this.bitmaps.length) {
    this._lastBitmapLength = this.bitmaps.length;
    this.refreshTileset();
  }
  ;
  this._needsRepaint = true;
};
ShaderTilemap.prototype.refreshTileset = function () {
  var _0x269579 = this.bitmaps.map(function (_0x337bc9) {
    if (_0x337bc9._baseTexture) {
      return new PIXI.Texture(_0x337bc9._baseTexture);
    } else {
      return _0x337bc9;
    }
  });
  this.lowerLayer.setBitmaps(_0x269579);
  this.upperLayer.setBitmaps(_0x269579);
};
ShaderTilemap.prototype.updateTransform = function () {
  if (this.roundPixels) {
    var _0x114ad9 = Math.floor(this.origin.x);
    var _0x3a5aa9 = Math.floor(this.origin.y);
  } else {
    _0x114ad9 = this.origin.x;
    _0x3a5aa9 = this.origin.y;
  }
  var _0x5d5340 = Math.floor((_0x114ad9 - this._margin) / this._tileWidth);
  var _0x277ef1 = Math.floor((_0x3a5aa9 - this._margin) / this._tileHeight);
  this._updateLayerPositions(_0x5d5340, _0x277ef1);
  if (this._needsRepaint || this._lastStartX !== _0x5d5340 || this._lastStartY !== _0x277ef1) {
    this._lastStartX = _0x5d5340;
    this._lastStartY = _0x277ef1;
    this._paintAllTiles(_0x5d5340, _0x277ef1);
    this._needsRepaint = false;
  }
  this._sortChildren();
  PIXI.Container.prototype.updateTransform.call(this);
};
ShaderTilemap.prototype._createLayers = function () {
  var _0x43af23 = this._width;
  var _0x441715 = this._height;
  var _0x407599 = this._margin;
  var _0x7cc00d = Math.ceil(_0x43af23 / this._tileWidth) + 1;
  var _0x2daede = Math.ceil(_0x441715 / this._tileHeight) + 1;
  var _0x5e1791 = this._layerWidth = _0x7cc00d * this._tileWidth;
  var _0x17bc72 = this._layerHeight = _0x2daede * this._tileHeight;
  this._needsRepaint = true;
  if (!this.lowerZLayer) {
    this.addChild(this.lowerZLayer = new PIXI.tilemap.ZLayer(this, 0));
    this.addChild(this.upperZLayer = new PIXI.tilemap.ZLayer(this, 4));
    var _0x12b387 = PluginManager.parameters("ShaderTilemap");
    var _0x50fad2 = Number(_0x12b387.hasOwnProperty("squareShader") ? _0x12b387.squareShader : 0);
    this.lowerZLayer.addChild(this.lowerLayer = new PIXI.tilemap.CompositeRectTileLayer(0, [], _0x50fad2));
    this.lowerLayer.shadowColor = new Float32Array([0, 0, 0, 0.5]);
    this.upperZLayer.addChild(this.upperLayer = new PIXI.tilemap.CompositeRectTileLayer(4, [], _0x50fad2));
  }
};
ShaderTilemap.prototype._updateLayerPositions = function (_0x22aeac, _0x2b7a34) {
  if (this.roundPixels) {
    var _0x202b2e = Math.floor(this.origin.x);
    var _0xc1cd5 = Math.floor(this.origin.y);
  } else {
    _0x202b2e = this.origin.x;
    _0xc1cd5 = this.origin.y;
  }
  this.lowerZLayer.position.x = _0x22aeac * this._tileWidth - _0x202b2e;
  this.lowerZLayer.position.y = _0x2b7a34 * this._tileHeight - _0xc1cd5;
  this.upperZLayer.position.x = _0x22aeac * this._tileWidth - _0x202b2e;
  this.upperZLayer.position.y = _0x2b7a34 * this._tileHeight - _0xc1cd5;
};
ShaderTilemap.prototype._paintAllTiles = function (_0x437e28, _0x42ada4) {
  this.lowerZLayer.clear();
  this.upperZLayer.clear();
  var _0x4d9337 = Math.ceil(this._width / this._tileWidth) + 1;
  var _0x5d958f = Math.ceil(this._height / this._tileHeight) + 1;
  for (var _0x2a43a3 = 0; _0x2a43a3 < _0x5d958f; _0x2a43a3++) {
    for (var _0x26cc58 = 0; _0x26cc58 < _0x4d9337; _0x26cc58++) {
      this._paintTiles(_0x437e28, _0x42ada4, _0x26cc58, _0x2a43a3);
    }
  }
};
ShaderTilemap.prototype._paintTiles = function (_0x5f6263, _0x1d290a, _0x30c1f2, _0x2b0930) {
  var _0x1f31cb = _0x5f6263 + _0x30c1f2;
  var _0x540221 = _0x1d290a + _0x2b0930;
  var _0x189f45 = _0x30c1f2 * this._tileWidth;
  var _0x540ab4 = _0x2b0930 * this._tileHeight;
  var _0x53ba77 = this._readMapData(_0x1f31cb, _0x540221, 0);
  var _0x4ca2ed = this._readMapData(_0x1f31cb, _0x540221, 1);
  var _0x3eefb2 = this._readMapData(_0x1f31cb, _0x540221, 2);
  var _0x70cd7b = this._readMapData(_0x1f31cb, _0x540221, 3);
  var _0x2ed674 = this._readMapData(_0x1f31cb, _0x540221, 4);
  var _0x11ef83 = this._readMapData(_0x1f31cb, _0x540221 - 1, 1);
  var _0x4609d8 = this.lowerLayer.children[0];
  var _0x55a679 = this.upperLayer.children[0];
  if (this._isHigherTile(_0x53ba77)) {
    this._drawTile(_0x55a679, _0x53ba77, _0x189f45, _0x540ab4);
  } else {
    this._drawTile(_0x4609d8, _0x53ba77, _0x189f45, _0x540ab4);
  }
  if (this._isHigherTile(_0x4ca2ed)) {
    this._drawTile(_0x55a679, _0x4ca2ed, _0x189f45, _0x540ab4);
  } else {
    this._drawTile(_0x4609d8, _0x4ca2ed, _0x189f45, _0x540ab4);
  }
  this._drawShadow(_0x4609d8, _0x2ed674, _0x189f45, _0x540ab4);
  if (this._isTableTile(_0x11ef83) && !this._isTableTile(_0x4ca2ed)) {
    if (!Tilemap.isShadowingTile(_0x53ba77)) {
      this._drawTableEdge(_0x4609d8, _0x11ef83, _0x189f45, _0x540ab4);
    }
  }
  if (this._isOverpassPosition(_0x1f31cb, _0x540221)) {
    this._drawTile(_0x55a679, _0x3eefb2, _0x189f45, _0x540ab4);
    this._drawTile(_0x55a679, _0x70cd7b, _0x189f45, _0x540ab4);
  } else {
    if (this._isHigherTile(_0x3eefb2)) {
      this._drawTile(_0x55a679, _0x3eefb2, _0x189f45, _0x540ab4);
    } else {
      this._drawTile(_0x4609d8, _0x3eefb2, _0x189f45, _0x540ab4);
    }
    if (this._isHigherTile(_0x70cd7b)) {
      this._drawTile(_0x55a679, _0x70cd7b, _0x189f45, _0x540ab4);
    } else {
      this._drawTile(_0x4609d8, _0x70cd7b, _0x189f45, _0x540ab4);
    }
  }
};
ShaderTilemap.prototype._drawTile = function (_0x387c4b, _0x410882, _0x4d1845, _0x4eb758) {
  if (Tilemap.isVisibleTile(_0x410882)) {
    if (Tilemap.isAutotile(_0x410882)) {
      this._drawAutotile(_0x387c4b, _0x410882, _0x4d1845, _0x4eb758);
    } else {
      this._drawNormalTile(_0x387c4b, _0x410882, _0x4d1845, _0x4eb758);
    }
  }
};
ShaderTilemap.prototype._drawNormalTile = function (_0x4661e4, _0x29e43c, _0x41bcd4, _0x1000c6) {
  var _0x3c61a7 = 0;
  if (Tilemap.isTileA5(_0x29e43c)) {
    _0x3c61a7 = 4;
  } else {
    _0x3c61a7 = 5 + Math.floor(_0x29e43c / 256);
  }
  var _0x5d8f72 = this._tileWidth;
  var _0x598eec = this._tileHeight;
  var _0x46b34b = (Math.floor(_0x29e43c / 128) % 2 * 8 + _0x29e43c % 8) * _0x5d8f72;
  var _0x4be045 = Math.floor(_0x29e43c % 256 / 8) % 16 * _0x598eec;
  _0x4661e4.addRect(_0x3c61a7, _0x46b34b, _0x4be045, _0x41bcd4, _0x1000c6, _0x5d8f72, _0x598eec);
};
ShaderTilemap.prototype._drawAutotile = function (_0x282e98, _0x45ca79, _0x3f43a5, _0x3eabeb) {
  var _0x30a797 = Tilemap.FLOOR_AUTOTILE_TABLE;
  var _0x3696ec = Tilemap.getAutotileKind(_0x45ca79);
  var _0x5ca82b = Tilemap.getAutotileShape(_0x45ca79);
  var _0x5bcca0 = _0x3696ec % 8;
  var _0x1605d6 = Math.floor(_0x3696ec / 8);
  var _0x1e75ef = 0;
  var _0x2183bf = 0;
  var _0x365d7e = 0;
  var _0x4a5225 = false;
  var _0x1fb7e6 = 0;
  var _0x3f15b1 = 0;
  if (Tilemap.isTileA1(_0x45ca79)) {
    _0x365d7e = 0;
    if (_0x3696ec === 0) {
      _0x1fb7e6 = 2;
      _0x2183bf = 0;
    } else if (_0x3696ec === 1) {
      _0x1fb7e6 = 2;
      _0x2183bf = 3;
    } else if (_0x3696ec === 2) {
      _0x1e75ef = 6;
      _0x2183bf = 0;
    } else if (_0x3696ec === 3) {
      _0x1e75ef = 6;
      _0x2183bf = 3;
    } else {
      _0x1e75ef = Math.floor(_0x5bcca0 / 4) * 8;
      _0x2183bf = _0x1605d6 * 6 + Math.floor(_0x5bcca0 / 2) % 2 * 3;
      if (_0x3696ec % 2 === 0) {
        _0x1fb7e6 = 2;
      } else {
        _0x1e75ef += 6;
        _0x30a797 = Tilemap.WATERFALL_AUTOTILE_TABLE;
        _0x3f15b1 = 1;
      }
    }
  } else if (Tilemap.isTileA2(_0x45ca79)) {
    _0x365d7e = 1;
    _0x1e75ef = _0x5bcca0 * 2;
    _0x2183bf = (_0x1605d6 - 2) * 3;
    _0x4a5225 = this._isTableTile(_0x45ca79);
  } else if (Tilemap.isTileA3(_0x45ca79)) {
    _0x365d7e = 2;
    _0x1e75ef = _0x5bcca0 * 2;
    _0x2183bf = (_0x1605d6 - 6) * 2;
    _0x30a797 = Tilemap.WALL_AUTOTILE_TABLE;
  } else if (Tilemap.isTileA4(_0x45ca79)) {
    _0x365d7e = 3;
    _0x1e75ef = _0x5bcca0 * 2;
    _0x2183bf = Math.floor((_0x1605d6 - 10) * 2.5 + (_0x1605d6 % 2 === 1 ? 0.5 : 0));
    if (_0x1605d6 % 2 === 1) {
      _0x30a797 = Tilemap.WALL_AUTOTILE_TABLE;
    }
  }
  var _0x2bd453 = _0x30a797[_0x5ca82b];
  var _0x727e0 = this._tileWidth / 2;
  var _0x4bbf86 = this._tileHeight / 2;
  for (var _0x3e3260 = 0; _0x3e3260 < 4; _0x3e3260++) {
    var _0x20ae58 = _0x2bd453[_0x3e3260][0];
    var _0x48529f = _0x2bd453[_0x3e3260][1];
    var _0x282f77 = (_0x1e75ef * 2 + _0x20ae58) * _0x727e0;
    var _0x358104 = (_0x2183bf * 2 + _0x48529f) * _0x4bbf86;
    var _0x5ef303 = _0x3f43a5 + _0x3e3260 % 2 * _0x727e0;
    var _0x4c3de0 = _0x3eabeb + Math.floor(_0x3e3260 / 2) * _0x4bbf86;
    if (_0x4a5225 && (_0x48529f === 1 || _0x48529f === 5)) {
      var _0x5c67dc = _0x20ae58;
      var _0x2cb617 = 3;
      if (_0x48529f === 1) {
        _0x5c67dc = (4 - _0x20ae58) % 4;
      }
      var _0x3e8656 = (_0x1e75ef * 2 + _0x5c67dc) * _0x727e0;
      var _0x112e6f = (_0x2183bf * 2 + _0x2cb617) * _0x4bbf86;
      _0x282e98.addRect(_0x365d7e, _0x3e8656, _0x112e6f, _0x5ef303, _0x4c3de0, _0x727e0, _0x4bbf86, _0x1fb7e6, _0x3f15b1);
      _0x282e98.addRect(_0x365d7e, _0x282f77, _0x358104, _0x5ef303, _0x4c3de0 + _0x4bbf86 / 2, _0x727e0, _0x4bbf86 / 2, _0x1fb7e6, _0x3f15b1);
    } else {
      _0x282e98.addRect(_0x365d7e, _0x282f77, _0x358104, _0x5ef303, _0x4c3de0, _0x727e0, _0x4bbf86, _0x1fb7e6, _0x3f15b1);
    }
  }
};
ShaderTilemap.prototype._drawTableEdge = function (_0x26fe97, _0x3c0bfb, _0x2737b7, _0x10dcba) {
  if (Tilemap.isTileA2(_0x3c0bfb)) {
    var _0x3c9c19 = Tilemap.FLOOR_AUTOTILE_TABLE;
    var _0x12a418 = Tilemap.getAutotileKind(_0x3c0bfb);
    var _0x3396a3 = Tilemap.getAutotileShape(_0x3c0bfb);
    var _0x15380d = _0x12a418 % 8;
    var _0x209e4c = Math.floor(_0x12a418 / 8);
    var _0x5269bc = 1;
    var _0x3fa6b1 = _0x15380d * 2;
    var _0xad2bd4 = (_0x209e4c - 2) * 3;
    var _0x444404 = _0x3c9c19[_0x3396a3];
    var _0x24b839 = this._tileWidth / 2;
    var _0x13412a = this._tileHeight / 2;
    for (var _0xfa19e7 = 0; _0xfa19e7 < 2; _0xfa19e7++) {
      var _0x42708b = _0x444404[2 + _0xfa19e7][0];
      var _0x136244 = _0x444404[2 + _0xfa19e7][1];
      var _0xa6fbf3 = (_0x3fa6b1 * 2 + _0x42708b) * _0x24b839;
      var _0x36b494 = (_0xad2bd4 * 2 + _0x136244) * _0x13412a + _0x13412a / 2;
      var _0x3c433a = _0x2737b7 + _0xfa19e7 % 2 * _0x24b839;
      var _0x1019e7 = _0x10dcba + Math.floor(_0xfa19e7 / 2) * _0x13412a;
      _0x26fe97.addRect(_0x5269bc, _0xa6fbf3, _0x36b494, _0x3c433a, _0x1019e7, _0x24b839, _0x13412a / 2);
    }
  }
};
ShaderTilemap.prototype._drawShadow = function (_0xfc465a, _0x5a202e, _0x5dd19b, _0xbd37c5) {
  if (_0x5a202e & 15) {
    var _0x39402d = this._tileWidth / 2;
    var _0x93519a = this._tileHeight / 2;
    for (var _0xbd1fce = 0; _0xbd1fce < 4; _0xbd1fce++) {
      if (_0x5a202e & 1 << _0xbd1fce) {
        var _0x521c5f = _0x5dd19b + _0xbd1fce % 2 * _0x39402d;
        var _0x271e9b = _0xbd37c5 + Math.floor(_0xbd1fce / 2) * _0x93519a;
        _0xfc465a.addRect(-1, 0, 0, _0x521c5f, _0x271e9b, _0x39402d, _0x93519a);
      }
    }
  }
};
function TilingSprite() {
  this.initialize.apply(this, arguments);
}
TilingSprite.prototype = Object.create(PIXI.extras.PictureTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;
TilingSprite.prototype.initialize = function (_0x54a654) {
  var _0x11d924 = new PIXI.Texture(new PIXI.BaseTexture());
  PIXI.extras.PictureTilingSprite.call(this, _0x11d924);
  this._bitmap = null;
  this._width = 0;
  this._height = 0;
  this._frame = new Rectangle();
  this.spriteId = Sprite._counter++;
  this.origin = new Point();
  this.bitmap = _0x54a654;
};
TilingSprite.prototype._renderCanvas_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderCanvas;
TilingSprite.prototype._renderWebGL_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderWebGL;
TilingSprite.prototype._renderCanvas = function (_0x58c7d9) {
  if (this._bitmap) {
    this._bitmap.touch();
  }
  if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
    this._renderCanvas_PIXI(_0x58c7d9);
  }
};
TilingSprite.prototype._renderWebGL = function (_0x49c4e0) {
  if (this._bitmap) {
    this._bitmap.touch();
  }
  if (this.texture.frame.width > 0 && this.texture.frame.height > 0) {
    if (this._bitmap) {
      this._bitmap.checkDirty();
    }
    this._renderWebGL_PIXI(_0x49c4e0);
  }
};
Object.defineProperty(TilingSprite.prototype, "bitmap", {
  get: function () {
    return this._bitmap;
  },
  set: function (_0x183ff8) {
    if (this._bitmap !== _0x183ff8) {
      this._bitmap = _0x183ff8;
      if (this._bitmap) {
        this._bitmap.addLoadListener(this._onBitmapLoad.bind(this));
      } else {
        this.texture.frame = Rectangle.emptyRectangle;
      }
    }
  },
  configurable: true
});
Object.defineProperty(TilingSprite.prototype, "opacity", {
  get: function () {
    return this.alpha * 255;
  },
  set: function (_0x37c817) {
    this.alpha = _0x37c817.clamp(0, 255) / 255;
  },
  configurable: true
});
TilingSprite.prototype.update = function () {
  this.children.forEach(function (_0x168ec2) {
    if (_0x168ec2.update) {
      _0x168ec2.update();
    }
  });
};
TilingSprite.prototype.move = function (_0x58d5c9, _0x2cf6be, _0x134037, _0x35a7d8) {
  this.x = _0x58d5c9 || 0;
  this.y = _0x2cf6be || 0;
  this._width = _0x134037 || 0;
  this._height = _0x35a7d8 || 0;
};
TilingSprite.prototype.setFrame = function (_0x453674, _0xa3f859, _0x4b3b19, _0x47bdd0) {
  this._frame.x = _0x453674;
  this._frame.y = _0xa3f859;
  this._frame.width = _0x4b3b19;
  this._frame.height = _0x47bdd0;
  this._refresh();
};
TilingSprite.prototype.updateTransform = function () {
  this.tilePosition.x = Math.round(-this.origin.x);
  this.tilePosition.y = Math.round(-this.origin.y);
  this.updateTransformTS();
};
TilingSprite.prototype.updateTransformTS = PIXI.extras.TilingSprite.prototype.updateTransform;
TilingSprite.prototype._onBitmapLoad = function () {
  this.texture.baseTexture = this._bitmap.baseTexture;
  this._refresh();
};
TilingSprite.prototype._refresh = function () {
  var _0xe21764 = this._frame.clone();
  if (_0xe21764.width === 0 && _0xe21764.height === 0 && this._bitmap) {
    _0xe21764.width = this._bitmap.width;
    _0xe21764.height = this._bitmap.height;
  }
  this.texture.frame = _0xe21764;
  this.texture._updateID++;
  this.tilingTexture = null;
};
TilingSprite.prototype._speedUpCustomBlendModes = Sprite.prototype._speedUpCustomBlendModes;
TilingSprite.prototype._renderWebGL = function (_0x25411a) {
  if (this._bitmap) {
    this._bitmap.touch();
    this._bitmap.checkDirty();
  }
  this._speedUpCustomBlendModes(_0x25411a);
  this._renderWebGL_PIXI(_0x25411a);
};
function ScreenSprite() {
  this.initialize.apply(this, arguments);
}
ScreenSprite.prototype = Object.create(PIXI.Container.prototype);
ScreenSprite.prototype.constructor = ScreenSprite;
ScreenSprite.prototype.initialize = function () {
  PIXI.Container.call(this);
  this._graphics = new PIXI.Graphics();
  this.addChild(this._graphics);
  this.opacity = 0;
  this._red = -1;
  this._green = -1;
  this._blue = -1;
  this._colorText = "";
  this.setBlack();
};
Object.defineProperty(ScreenSprite.prototype, "opacity", {
  get: function () {
    return this.alpha * 255;
  },
  set: function (_0x168294) {
    this.alpha = _0x168294.clamp(0, 255) / 255;
  },
  configurable: true
});
ScreenSprite.YEPWarned = false;
ScreenSprite.warnYep = function () {
  if (!ScreenSprite.YEPWarned) {
    console.log("Deprecation warning. Please update YEP_CoreEngine. ScreenSprite is not a sprite, it has graphics inside.");
    ScreenSprite.YEPWarned = true;
  }
};
Object.defineProperty(ScreenSprite.prototype, "anchor", {
  get: function () {
    ScreenSprite.warnYep();
    this.scale.x = 1;
    this.scale.y = 1;
    return {
      x: 0,
      y: 0
    };
  },
  set: function (_0x3f3c9a) {
    this.alpha = _0x3f3c9a.clamp(0, 255) / 255;
  },
  configurable: true
});
var _0x41aa89 = {
  get: function () {
    return this._graphics.blendMode;
  },
  set: function (_0x138c50) {
    this._graphics.blendMode = _0x138c50;
  },
  configurable: true
};
Object.defineProperty(ScreenSprite.prototype, "blendMode", _0x41aa89);
ScreenSprite.prototype.setBlack = function () {
  this.setColor(0, 0, 0);
};
ScreenSprite.prototype.setWhite = function () {
  this.setColor(255, 255, 255);
};
ScreenSprite.prototype.setColor = function (_0x24bec7, _0x3c7021, _0x1c3abb) {
  if (this._red !== _0x24bec7 || this._green !== _0x3c7021 || this._blue !== _0x1c3abb) {
    _0x24bec7 = Math.round(_0x24bec7 || 0).clamp(0, 255);
    _0x3c7021 = Math.round(_0x3c7021 || 0).clamp(0, 255);
    _0x1c3abb = Math.round(_0x1c3abb || 0).clamp(0, 255);
    this._red = _0x24bec7;
    this._green = _0x3c7021;
    this._blue = _0x1c3abb;
    this._colorText = Utils.rgbToCssColor(_0x24bec7, _0x3c7021, _0x1c3abb);
    var _0x162a88 = this._graphics;
    _0x162a88.clear();
    var _0x27d0e9 = _0x24bec7 << 16 | _0x3c7021 << 8 | _0x1c3abb;
    _0x162a88.beginFill(_0x27d0e9, 1);
    _0x162a88.drawRect(-Graphics.width * 5, -Graphics.height * 5, Graphics.width * 10, Graphics.height * 10);
  }
};
function Window() {
  this.initialize.apply(this, arguments);
}
Window.prototype = Object.create(PIXI.Container.prototype);
Window.prototype.constructor = Window;
Window.prototype.initialize = function () {
  PIXI.Container.call(this);
  this._isWindow = true;
  this._windowskin = null;
  this._width = 0;
  this._height = 0;
  this._cursorRect = new Rectangle();
  this._openness = 255;
  this._animationCount = 0;
  this._padding = 18;
  this._margin = 4;
  this._colorTone = [0, 0, 0];
  this._windowSpriteContainer = null;
  this._windowBackSprite = null;
  this._windowCursorSprite = null;
  this._windowFrameSprite = null;
  this._windowContentsSprite = null;
  this._windowArrowSprites = [];
  this._windowPauseSignSprite = null;
  this._createAllParts();
  this.origin = new Point();
  this.active = true;
  this.downArrowVisible = false;
  this.upArrowVisible = false;
  this.pause = false;
};
Object.defineProperty(Window.prototype, "windowskin", {
  get: function () {
    return this._windowskin;
  },
  set: function (_0x52dd4a) {
    if (this._windowskin !== _0x52dd4a) {
      this._windowskin = _0x52dd4a;
      this._windowskin.addLoadListener(this._onWindowskinLoad.bind(this));
    }
  },
  configurable: true
});
var _0x775649 = {
  get: function () {
    return this._windowContentsSprite.bitmap;
  },
  set: function (_0x3dfe78) {
    this._windowContentsSprite.bitmap = _0x3dfe78;
  },
  configurable: true
};
Object.defineProperty(Window.prototype, "contents", _0x775649);
Object.defineProperty(Window.prototype, "width", {
  get: function () {
    return this._width;
  },
  set: function (_0x3289a8) {
    this._width = _0x3289a8;
    this._refreshAllParts();
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "height", {
  get: function () {
    return this._height;
  },
  set: function (_0x57de49) {
    this._height = _0x57de49;
    this._refreshAllParts();
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "padding", {
  get: function () {
    return this._padding;
  },
  set: function (_0x18a61a) {
    this._padding = _0x18a61a;
    this._refreshAllParts();
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "margin", {
  get: function () {
    return this._margin;
  },
  set: function (_0x2ed0df) {
    this._margin = _0x2ed0df;
    this._refreshAllParts();
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "opacity", {
  get: function () {
    return this._windowSpriteContainer.alpha * 255;
  },
  set: function (_0x33e829) {
    this._windowSpriteContainer.alpha = _0x33e829.clamp(0, 255) / 255;
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "backOpacity", {
  get: function () {
    return this._windowBackSprite.alpha * 255;
  },
  set: function (_0x1c9578) {
    this._windowBackSprite.alpha = _0x1c9578.clamp(0, 255) / 255;
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "contentsOpacity", {
  get: function () {
    return this._windowContentsSprite.alpha * 255;
  },
  set: function (_0x4c1ebb) {
    this._windowContentsSprite.alpha = _0x4c1ebb.clamp(0, 255) / 255;
  },
  configurable: true
});
Object.defineProperty(Window.prototype, "openness", {
  get: function () {
    return this._openness;
  },
  set: function (_0x228f90) {
    if (this._openness !== _0x228f90) {
      this._openness = _0x228f90.clamp(0, 255);
      this._windowSpriteContainer.scale.y = this._openness / 255;
      this._windowSpriteContainer.y = this.height / 2 * (1 - this._openness / 255);
    }
  },
  configurable: true
});
Window.prototype.update = function () {
  if (this.active) {
    this._animationCount++;
  }
  this.children.forEach(function (_0x109d49) {
    if (_0x109d49.update) {
      _0x109d49.update();
    }
  });
};
Window.prototype.move = function (_0x4e5973, _0x4157ba, _0x18ea8a, _0x506600) {
  this.x = _0x4e5973 || 0;
  this.y = _0x4157ba || 0;
  if (this._width !== _0x18ea8a || this._height !== _0x506600) {
    this._width = _0x18ea8a || 0;
    this._height = _0x506600 || 0;
    this._refreshAllParts();
  }
};
Window.prototype.isOpen = function () {
  return this._openness >= 255;
};
Window.prototype.isClosed = function () {
  return this._openness <= 0;
};
Window.prototype.setCursorRect = function (_0x18f025, _0x11c758, _0xd3d5d6, _0x5f4bc3) {
  var _0x504b01 = Math.floor(_0x18f025 || 0);
  var _0x3bed4f = Math.floor(_0x11c758 || 0);
  var _0x3fd041 = Math.floor(_0xd3d5d6 || 0);
  var _0x27dd41 = Math.floor(_0x5f4bc3 || 0);
  var _0x2c957c = this._cursorRect;
  if (_0x2c957c.x !== _0x504b01 || _0x2c957c.y !== _0x3bed4f || _0x2c957c.width !== _0x3fd041 || _0x2c957c.height !== _0x27dd41) {
    this._cursorRect.x = _0x504b01;
    this._cursorRect.y = _0x3bed4f;
    this._cursorRect.width = _0x3fd041;
    this._cursorRect.height = _0x27dd41;
    this._refreshCursor();
  }
};
Window.prototype.setTone = function (_0x44f8ff, _0x9ccec0, _0x459114) {
  var _0x3babe9 = this._colorTone;
  if (_0x44f8ff !== _0x3babe9[0] || _0x9ccec0 !== _0x3babe9[1] || _0x459114 !== _0x3babe9[2]) {
    this._colorTone = [_0x44f8ff, _0x9ccec0, _0x459114];
    this._refreshBack();
  }
};
Window.prototype.addChildToBack = function (_0x58cddd) {
  var _0x4b8eb3 = this.children.indexOf(this._windowSpriteContainer);
  return this.addChildAt(_0x58cddd, _0x4b8eb3 + 1);
};
Window.prototype.updateTransform = function () {
  this._updateCursor();
  this._updateArrows();
  this._updatePauseSign();
  this._updateContents();
  PIXI.Container.prototype.updateTransform.call(this);
};
Window.prototype._createAllParts = function () {
  this._windowSpriteContainer = new PIXI.Container();
  this._windowBackSprite = new Sprite();
  this._windowCursorSprite = new Sprite();
  this._windowFrameSprite = new Sprite();
  this._windowContentsSprite = new Sprite();
  this._downArrowSprite = new Sprite();
  this._upArrowSprite = new Sprite();
  this._windowPauseSignSprite = new Sprite();
  this._windowBackSprite.bitmap = new Bitmap(1, 1);
  this._windowBackSprite.alpha = 192 / 255;
  this.addChild(this._windowSpriteContainer);
  this._windowSpriteContainer.addChild(this._windowBackSprite);
  this._windowSpriteContainer.addChild(this._windowFrameSprite);
  this.addChild(this._windowCursorSprite);
  this.addChild(this._windowContentsSprite);
  this.addChild(this._downArrowSprite);
  this.addChild(this._upArrowSprite);
  this.addChild(this._windowPauseSignSprite);
};
Window.prototype._onWindowskinLoad = function () {
  this._refreshAllParts();
};
Window.prototype._refreshAllParts = function () {
  this._refreshBack();
  this._refreshFrame();
  this._refreshCursor();
  this._refreshContents();
  this._refreshArrows();
  this._refreshPauseSign();
};
Window.prototype._refreshBack = function () {
  var _0x4aa9f1 = this._margin;
  var _0xe5d34d = this._width - _0x4aa9f1 * 2;
  var _0x3aeeeb = this._height - _0x4aa9f1 * 2;
  var _0x1cd100 = new Bitmap(_0xe5d34d, _0x3aeeeb);
  this._windowBackSprite.bitmap = _0x1cd100;
  this._windowBackSprite.setFrame(0, 0, _0xe5d34d, _0x3aeeeb);
  this._windowBackSprite.move(_0x4aa9f1, _0x4aa9f1);
  if (_0xe5d34d > 0 && _0x3aeeeb > 0 && this._windowskin) {
    var _0x1db223 = 96;
    _0x1cd100.blt(this._windowskin, 0, 0, _0x1db223, _0x1db223, 0, 0, _0xe5d34d, _0x3aeeeb);
    for (var _0x43af59 = 0; _0x43af59 < _0x3aeeeb; _0x43af59 += _0x1db223) {
      for (var _0x1c27a6 = 0; _0x1c27a6 < _0xe5d34d; _0x1c27a6 += _0x1db223) {
        _0x1cd100.blt(this._windowskin, 0, _0x1db223, _0x1db223, _0x1db223, _0x1c27a6, _0x43af59, _0x1db223, _0x1db223);
      }
    }
    var _0x1f4592 = this._colorTone;
    _0x1cd100.adjustTone(_0x1f4592[0], _0x1f4592[1], _0x1f4592[2]);
  }
};
Window.prototype._refreshFrame = function () {
  var _0x3e4813 = this._width;
  var _0x51e2ef = this._height;
  var _0x1db399 = 24;
  var _0x2003e2 = new Bitmap(_0x3e4813, _0x51e2ef);
  this._windowFrameSprite.bitmap = _0x2003e2;
  this._windowFrameSprite.setFrame(0, 0, _0x3e4813, _0x51e2ef);
  if (_0x3e4813 > 0 && _0x51e2ef > 0 && this._windowskin) {
    var _0xbc5af = this._windowskin;
    var _0x260a98 = 96;
    var _0x4ec318 = 96;
    _0x2003e2.blt(_0xbc5af, _0x260a98 + _0x1db399, 0, _0x260a98 - _0x1db399 * 2, _0x1db399, _0x1db399, 0, _0x3e4813 - _0x1db399 * 2, _0x1db399);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + _0x1db399, 0 + _0x4ec318 - _0x1db399, _0x260a98 - _0x1db399 * 2, _0x1db399, _0x1db399, _0x51e2ef - _0x1db399, _0x3e4813 - _0x1db399 * 2, _0x1db399);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + 0, 0 + _0x1db399, _0x1db399, _0x260a98 - _0x1db399 * 2, 0, _0x1db399, _0x1db399, _0x51e2ef - _0x1db399 * 2);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + _0x4ec318 - _0x1db399, 0 + _0x1db399, _0x1db399, _0x260a98 - _0x1db399 * 2, _0x3e4813 - _0x1db399, _0x1db399, _0x1db399, _0x51e2ef - _0x1db399 * 2);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + 0, 0, _0x1db399, _0x1db399, 0, 0, _0x1db399, _0x1db399);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + _0x4ec318 - _0x1db399, 0, _0x1db399, _0x1db399, _0x3e4813 - _0x1db399, 0, _0x1db399, _0x1db399);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + 0, 0 + _0x4ec318 - _0x1db399, _0x1db399, _0x1db399, 0, _0x51e2ef - _0x1db399, _0x1db399, _0x1db399);
    _0x2003e2.blt(_0xbc5af, _0x260a98 + _0x4ec318 - _0x1db399, 0 + _0x4ec318 - _0x1db399, _0x1db399, _0x1db399, _0x3e4813 - _0x1db399, _0x51e2ef - _0x1db399, _0x1db399, _0x1db399);
  }
};
Window.prototype._refreshCursor = function () {
  var _0x8d599 = this._padding;
  var _0x210b9e = this._cursorRect.x + _0x8d599 - this.origin.x;
  var _0x3d1db7 = this._cursorRect.y + _0x8d599 - this.origin.y;
  var _0x4942e2 = this._cursorRect.width;
  var _0x4f9a9b = this._cursorRect.height;
  var _0x2d76ff = 4;
  var _0x17f2f6 = Math.max(_0x210b9e, _0x8d599);
  var _0x559e6b = Math.max(_0x3d1db7, _0x8d599);
  var _0x51a173 = _0x210b9e - _0x17f2f6;
  var _0x14ed85 = _0x3d1db7 - _0x559e6b;
  var _0x1357ca = Math.min(_0x4942e2, this._width - _0x8d599 - _0x17f2f6);
  var _0x1a4cf0 = Math.min(_0x4f9a9b, this._height - _0x8d599 - _0x559e6b);
  var _0x17ed82 = new Bitmap(_0x1357ca, _0x1a4cf0);
  this._windowCursorSprite.bitmap = _0x17ed82;
  this._windowCursorSprite.setFrame(0, 0, _0x1357ca, _0x1a4cf0);
  this._windowCursorSprite.move(_0x17f2f6, _0x559e6b);
  if (_0x4942e2 > 0 && _0x4f9a9b > 0 && this._windowskin) {
    var _0x2a27cd = this._windowskin;
    var _0x5e2697 = 96;
    var _0x4a7bbd = 48;
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x2d76ff, _0x5e2697 + _0x2d76ff, _0x4a7bbd - _0x2d76ff * 2, _0x4a7bbd - _0x2d76ff * 2, _0x51a173 + _0x2d76ff, _0x14ed85 + _0x2d76ff, _0x4942e2 - _0x2d76ff * 2, _0x4f9a9b - _0x2d76ff * 2);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x2d76ff, _0x5e2697 + 0, _0x4a7bbd - _0x2d76ff * 2, _0x2d76ff, _0x51a173 + _0x2d76ff, _0x14ed85 + 0, _0x4942e2 - _0x2d76ff * 2, _0x2d76ff);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x2d76ff, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x4a7bbd - _0x2d76ff * 2, _0x2d76ff, _0x51a173 + _0x2d76ff, _0x14ed85 + _0x4f9a9b - _0x2d76ff, _0x4942e2 - _0x2d76ff * 2, _0x2d76ff);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + 0, _0x5e2697 + _0x2d76ff, _0x2d76ff, _0x4a7bbd - _0x2d76ff * 2, _0x51a173 + 0, _0x14ed85 + _0x2d76ff, _0x2d76ff, _0x4f9a9b - _0x2d76ff * 2);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x5e2697 + _0x2d76ff, _0x2d76ff, _0x4a7bbd - _0x2d76ff * 2, _0x51a173 + _0x4942e2 - _0x2d76ff, _0x14ed85 + _0x2d76ff, _0x2d76ff, _0x4f9a9b - _0x2d76ff * 2);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + 0, _0x5e2697 + 0, _0x2d76ff, _0x2d76ff, _0x51a173 + 0, _0x14ed85 + 0, _0x2d76ff, _0x2d76ff);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x5e2697 + 0, _0x2d76ff, _0x2d76ff, _0x51a173 + _0x4942e2 - _0x2d76ff, _0x14ed85 + 0, _0x2d76ff, _0x2d76ff);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + 0, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x2d76ff, _0x2d76ff, _0x51a173 + 0, _0x14ed85 + _0x4f9a9b - _0x2d76ff, _0x2d76ff, _0x2d76ff);
    _0x17ed82.blt(_0x2a27cd, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x5e2697 + _0x4a7bbd - _0x2d76ff, _0x2d76ff, _0x2d76ff, _0x51a173 + _0x4942e2 - _0x2d76ff, _0x14ed85 + _0x4f9a9b - _0x2d76ff, _0x2d76ff, _0x2d76ff);
  }
};
Window.prototype._refreshContents = function () {
  this._windowContentsSprite.move(this.padding, this.padding);
};
Window.prototype._refreshArrows = function () {
  var _0x3a5334 = this._width;
  var _0x5329a9 = this._height;
  var _0x27056b = 24;
  var _0x25a3b9 = _0x27056b / 2;
  var _0x2fbce1 = 96 + _0x27056b;
  var _0x4db4e0 = 0 + _0x27056b;
  this._downArrowSprite.bitmap = this._windowskin;
  this._downArrowSprite.anchor.x = 0.5;
  this._downArrowSprite.anchor.y = 0.5;
  this._downArrowSprite.setFrame(_0x2fbce1 + _0x25a3b9, _0x4db4e0 + _0x25a3b9 + _0x27056b, _0x27056b, _0x25a3b9);
  this._downArrowSprite.move(_0x3a5334 / 2, _0x5329a9 - _0x25a3b9);
  this._upArrowSprite.bitmap = this._windowskin;
  this._upArrowSprite.anchor.x = 0.5;
  this._upArrowSprite.anchor.y = 0.5;
  this._upArrowSprite.setFrame(_0x2fbce1 + _0x25a3b9, _0x4db4e0, _0x27056b, _0x25a3b9);
  this._upArrowSprite.move(_0x3a5334 / 2, _0x25a3b9);
};
Window.prototype._refreshPauseSign = function () {
  var _0x2838ca = 144;
  var _0x247362 = 96;
  var _0x26731c = 24;
  this._windowPauseSignSprite.bitmap = this._windowskin;
  this._windowPauseSignSprite.anchor.x = 0.5;
  this._windowPauseSignSprite.anchor.y = 1;
  this._windowPauseSignSprite.move(this._width / 2, this._height);
  this._windowPauseSignSprite.setFrame(_0x2838ca, _0x247362, _0x26731c, _0x26731c);
  this._windowPauseSignSprite.alpha = 0;
};
Window.prototype._updateCursor = function () {
  var _0x11a7e8 = this._animationCount % 40;
  var _0x437fbd = this.contentsOpacity;
  if (this.active) {
    if (_0x11a7e8 < 20) {
      _0x437fbd -= _0x11a7e8 * 8;
    } else {
      _0x437fbd -= (40 - _0x11a7e8) * 8;
    }
  }
  this._windowCursorSprite.alpha = _0x437fbd / 255;
  this._windowCursorSprite.visible = this.isOpen();
};
Window.prototype._updateContents = function () {
  var _0x3c0d60 = this._width - this._padding * 2;
  var _0x13c0fd = this._height - this._padding * 2;
  if (_0x3c0d60 > 0 && _0x13c0fd > 0) {
    this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, _0x3c0d60, _0x13c0fd);
    this._windowContentsSprite.visible = this.isOpen();
  } else {
    this._windowContentsSprite.visible = false;
  }
};
Window.prototype._updateArrows = function () {
  this._downArrowSprite.visible = this.isOpen() && this.downArrowVisible;
  this._upArrowSprite.visible = this.isOpen() && this.upArrowVisible;
};
Window.prototype._updatePauseSign = function () {
  var _0x539249 = this._windowPauseSignSprite;
  var _0xa9763f = Math.floor(this._animationCount / 16) % 2;
  var _0x9b01da = Math.floor(this._animationCount / 16 / 2) % 2;
  var _0x390897 = 144;
  var _0x5e493d = 96;
  var _0x5f393d = 24;
  if (!this.pause) {
    _0x539249.alpha = 0;
  } else if (_0x539249.alpha < 1) {
    _0x539249.alpha = Math.min(_0x539249.alpha + 0.1, 1);
  }
  _0x539249.setFrame(_0x390897 + _0xa9763f * _0x5f393d, _0x5e493d + _0x9b01da * _0x5f393d, _0x5f393d, _0x5f393d);
  _0x539249.visible = this.isOpen();
};
function WindowLayer() {
  this.initialize.apply(this, arguments);
}
WindowLayer.prototype = Object.create(PIXI.Container.prototype);
WindowLayer.prototype.constructor = WindowLayer;
WindowLayer.prototype.initialize = function () {
  PIXI.Container.call(this);
  this._width = 0;
  this._height = 0;
  this._tempCanvas = null;
  this._translationMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  this._windowMask = new PIXI.Graphics();
  this._windowMask.beginFill(16777215, 1);
  this._windowMask.drawRect(0, 0, 0, 0);
  this._windowMask.endFill();
  this._windowRect = this._windowMask.graphicsData[0].shape;
  this._renderSprite = null;
  this.filterArea = new PIXI.Rectangle();
  this.filters = [WindowLayer.voidFilter];
  this.on("removed", this.onRemoveAsAChild);
};
WindowLayer.prototype.onRemoveAsAChild = function () {
  this.removeChildren();
};
WindowLayer.voidFilter = new PIXI.filters.VoidFilter();
var _0x3dc635 = {
  get: function () {
    return this._width;
  },
  set: function (_0x558924) {
    this._width = _0x558924;
  },
  configurable: true
};
Object.defineProperty(WindowLayer.prototype, "width", _0x3dc635);
var _0x4fd8bb = {
  get: function () {
    return this._height;
  },
  set: function (_0x442a30) {
    this._height = _0x442a30;
  },
  configurable: true
};
Object.defineProperty(WindowLayer.prototype, "height", _0x4fd8bb);
WindowLayer.prototype.move = function (_0x221ec1, _0x59f642, _0x4d5bcd, _0x59afd4) {
  this.x = _0x221ec1;
  this.y = _0x59f642;
  this.width = _0x4d5bcd;
  this.height = _0x59afd4;
};
WindowLayer.prototype.update = function () {
  this.children.forEach(function (_0x2ebd01) {
    if (_0x2ebd01.update) {
      _0x2ebd01.update();
    }
  });
};
WindowLayer.prototype.renderCanvas = function (_0x391afc) {
  if (!this.visible || !this.renderable) {
    return;
  }
  if (!this._tempCanvas) {
    this._tempCanvas = document.createElement("canvas");
  }
  this._tempCanvas.width = Graphics.width;
  this._tempCanvas.height = Graphics.height;
  var _0x43fe0c = _0x391afc.context;
  var _0x5bfed6 = this._tempCanvas.getContext("2d");
  _0x5bfed6.save();
  _0x5bfed6.clearRect(0, 0, Graphics.width, Graphics.height);
  _0x5bfed6.beginPath();
  _0x5bfed6.rect(this.x, this.y, this.width, this.height);
  _0x5bfed6.closePath();
  _0x5bfed6.clip();
  _0x391afc.context = _0x5bfed6;
  for (var _0xfdba26 = 0; _0xfdba26 < this.children.length; _0xfdba26++) {
    var _0x464ceb = this.children[_0xfdba26];
    if (_0x464ceb._isWindow && _0x464ceb.visible && _0x464ceb.openness > 0) {
      this._canvasClearWindowRect(_0x391afc, _0x464ceb);
      _0x5bfed6.save();
      _0x464ceb.renderCanvas(_0x391afc);
      _0x5bfed6.restore();
    }
  }
  _0x5bfed6.restore();
  _0x391afc.context = _0x43fe0c;
  _0x391afc.context.setTransform(1, 0, 0, 1, 0, 0);
  _0x391afc.context.globalCompositeOperation = "source-over";
  _0x391afc.context.globalAlpha = 1;
  _0x391afc.context.drawImage(this._tempCanvas, 0, 0);
  for (var _0xa80645 = 0; _0xa80645 < this.children.length; _0xa80645++) {
    if (!this.children[_0xa80645]._isWindow) {
      this.children[_0xa80645].renderCanvas(_0x391afc);
    }
  }
};
WindowLayer.prototype._canvasClearWindowRect = function (_0x1bbcfb, _0x5372ed) {
  var _0x258aa8 = this.x + _0x5372ed.x;
  var _0x318f88 = this.y + _0x5372ed.y + _0x5372ed.height / 2 * (1 - _0x5372ed._openness / 255);
  var _0x3f978c = _0x5372ed.width;
  var _0x19e132 = _0x5372ed.height * _0x5372ed._openness / 255;
  _0x1bbcfb.context.clearRect(_0x258aa8, _0x318f88, _0x3f978c, _0x19e132);
};
WindowLayer.prototype.renderWebGL = function (_0x1618c7) {
  if (!this.visible || !this.renderable) {
    return;
  }
  if (this.children.length == 0) {
    return;
  }
  _0x1618c7.flush();
  this.filterArea.copy(this);
  _0x1618c7.filterManager.pushFilter(this, this.filters);
  _0x1618c7.currentRenderer.start();
  var _0x2d0703 = new PIXI.Point();
  var _0x57bce2 = _0x1618c7._activeRenderTarget;
  var _0x271924 = _0x57bce2.projectionMatrix;
  _0x2d0703.x = Math.round((_0x271924.tx + 1) / 2 * _0x57bce2.sourceFrame.width);
  _0x2d0703.y = Math.round((_0x271924.ty + 1) / 2 * _0x57bce2.sourceFrame.height);
  for (var _0x380220 = 0; _0x380220 < this.children.length; _0x380220++) {
    var _0x2d0ef9 = this.children[_0x380220];
    if (_0x2d0ef9._isWindow && _0x2d0ef9.visible && _0x2d0ef9.openness > 0) {
      this._maskWindow(_0x2d0ef9, _0x2d0703);
      _0x1618c7.maskManager.pushScissorMask(this, this._windowMask);
      _0x1618c7.clear();
      _0x1618c7.maskManager.popScissorMask();
      _0x1618c7.currentRenderer.start();
      _0x2d0ef9.renderWebGL(_0x1618c7);
      _0x1618c7.currentRenderer.flush();
    }
  }
  _0x1618c7.flush();
  _0x1618c7.filterManager.popFilter();
  _0x1618c7.maskManager.popScissorMask();
  for (var _0x370d24 = 0; _0x370d24 < this.children.length; _0x370d24++) {
    if (!this.children[_0x370d24]._isWindow) {
      this.children[_0x370d24].renderWebGL(_0x1618c7);
    }
  }
};
WindowLayer.prototype._maskWindow = function (_0x724f9c, _0x583b4d) {
  this._windowMask._currentBounds = null;
  this._windowMask.boundsDirty = true;
  var _0x58b57c = this._windowRect;
  _0x58b57c.x = this.x + _0x583b4d.x + _0x724f9c.x;
  _0x58b57c.y = this.x + _0x583b4d.y + _0x724f9c.y + _0x724f9c.height / 2 * (1 - _0x724f9c._openness / 255);
  _0x58b57c.width = _0x724f9c.width;
  _0x58b57c.height = _0x724f9c.height * _0x724f9c._openness / 255;
};
function Weather() {
  this.initialize.apply(this, arguments);
}
Weather.prototype = Object.create(PIXI.Container.prototype);
Weather.prototype.constructor = Weather;
Weather.prototype.initialize = function () {
  PIXI.Container.call(this);
  this._width = Graphics.width;
  this._height = Graphics.height;
  this._sprites = [];
  this._createBitmaps();
  this._createDimmer();
  this.type = "none";
  this.power = 0;
  this.origin = new Point();
};
Weather.prototype.update = function () {
  this._updateDimmer();
  this._updateAllSprites();
};
Weather.prototype._createBitmaps = function () {
  this._rainBitmap = new Bitmap(1, 60);
  this._rainBitmap.fillAll("white");
  this._stormBitmap = new Bitmap(2, 100);
  this._stormBitmap.fillAll("white");
  this._snowBitmap = new Bitmap(9, 9);
  this._snowBitmap.drawCircle(4, 4, 4, "white");
};
Weather.prototype._createDimmer = function () {
  this._dimmerSprite = new ScreenSprite();
  this._dimmerSprite.setColor(95, 95, 95);
  this.addChild(this._dimmerSprite);
};
Weather.prototype._updateDimmer = function () {
  this._dimmerSprite.opacity = Math.floor(this.power * 6);
};
Weather.prototype._updateAllSprites = function () {
  var _0x4f6bcf = Math.floor(this.power * 10);
  while (this._sprites.length < _0x4f6bcf) {
    this._addSprite();
  }
  while (this._sprites.length > _0x4f6bcf) {
    this._removeSprite();
  }
  this._sprites.forEach(function (_0x7a2ea) {
    this._updateSprite(_0x7a2ea);
    _0x7a2ea.x = _0x7a2ea.ax - this.origin.x;
    _0x7a2ea.y = _0x7a2ea.ay - this.origin.y;
  }, this);
};
Weather.prototype._addSprite = function () {
  var _0x8f924b = new Sprite(this.viewport);
  _0x8f924b.opacity = 0;
  this._sprites.push(_0x8f924b);
  this.addChild(_0x8f924b);
};
Weather.prototype._removeSprite = function () {
  this.removeChild(this._sprites.pop());
};
Weather.prototype._updateSprite = function (_0x5b0bde) {
  switch (this.type) {
    case "rain":
      this._updateRainSprite(_0x5b0bde);
      break;
    case "storm":
      this._updateStormSprite(_0x5b0bde);
      break;
    case "snow":
      this._updateSnowSprite(_0x5b0bde);
      break;
  }
  if (_0x5b0bde.opacity < 40) {
    this._rebornSprite(_0x5b0bde);
  }
};
Weather.prototype._updateRainSprite = function (_0x5c3bc2) {
  _0x5c3bc2.bitmap = this._rainBitmap;
  _0x5c3bc2.rotation = Math.PI / 16;
  _0x5c3bc2.ax -= Math.sin(_0x5c3bc2.rotation) * 6;
  _0x5c3bc2.ay += Math.cos(_0x5c3bc2.rotation) * 6;
  _0x5c3bc2.opacity -= 6;
};
Weather.prototype._updateStormSprite = function (_0x11d9e4) {
  _0x11d9e4.bitmap = this._stormBitmap;
  _0x11d9e4.rotation = Math.PI / 8;
  _0x11d9e4.ax -= Math.sin(_0x11d9e4.rotation) * 8;
  _0x11d9e4.ay += Math.cos(_0x11d9e4.rotation) * 8;
  _0x11d9e4.opacity -= 8;
};
Weather.prototype._updateSnowSprite = function (_0xdf98ed) {
  _0xdf98ed.bitmap = this._snowBitmap;
  _0xdf98ed.rotation = Math.PI / 16;
  _0xdf98ed.ax -= Math.sin(_0xdf98ed.rotation) * 3;
  _0xdf98ed.ay += Math.cos(_0xdf98ed.rotation) * 3;
  _0xdf98ed.opacity -= 3;
};
Weather.prototype._rebornSprite = function (_0x28dace) {
  _0x28dace.ax = Math.randomInt(Graphics.width + 100) - 100 + this.origin.x;
  _0x28dace.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y;
  _0x28dace.opacity = 160 + Math.randomInt(60);
};
function ToneFilter() {
  PIXI.filters.ColorMatrixFilter.call(this);
}
ToneFilter.prototype = Object.create(PIXI.filters.ColorMatrixFilter.prototype);
ToneFilter.prototype.constructor = ToneFilter;
ToneFilter.prototype.adjustHue = function (_0x3f7c56) {
  this.hue(_0x3f7c56, true);
};
ToneFilter.prototype.adjustSaturation = function (_0x1fb1e6) {
  _0x1fb1e6 = (_0x1fb1e6 || 0).clamp(-255, 255) / 255;
  this.saturate(_0x1fb1e6, true);
};
ToneFilter.prototype.adjustTone = function (_0x30b29a, _0x5cb4a6, _0x1d18cd) {
  _0x30b29a = (_0x30b29a || 0).clamp(-255, 255) / 255;
  _0x5cb4a6 = (_0x5cb4a6 || 0).clamp(-255, 255) / 255;
  _0x1d18cd = (_0x1d18cd || 0).clamp(-255, 255) / 255;
  if (_0x30b29a !== 0 || _0x5cb4a6 !== 0 || _0x1d18cd !== 0) {
    var _0x400bbb = [1, 0, 0, _0x30b29a, 0, 0, 1, 0, _0x5cb4a6, 0, 0, 0, 1, _0x1d18cd, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(_0x400bbb, true);
  }
};
function ToneSprite() {
  this.initialize.apply(this, arguments);
}
ToneSprite.prototype = Object.create(PIXI.Container.prototype);
ToneSprite.prototype.constructor = ToneSprite;
ToneSprite.prototype.initialize = function () {
  PIXI.Container.call(this);
  this.clear();
};
ToneSprite.prototype.clear = function () {
  this._red = 0;
  this._green = 0;
  this._blue = 0;
  this._gray = 0;
};
ToneSprite.prototype.setTone = function (_0x3d557c, _0x427479, _0x5af50d, _0x33641b) {
  this._red = Math.round(_0x3d557c || 0).clamp(-255, 255);
  this._green = Math.round(_0x427479 || 0).clamp(-255, 255);
  this._blue = Math.round(_0x5af50d || 0).clamp(-255, 255);
  this._gray = Math.round(_0x33641b || 0).clamp(0, 255);
};
ToneSprite.prototype._renderCanvas = function (_0x281bb3) {
  if (this.visible) {
    var _0x51d2fc = _0x281bb3.context;
    var _0x210273 = this.worldTransform;
    var _0x5e8558 = _0x281bb3.resolution;
    var _0x5673b6 = Graphics.width;
    var _0x7cc26 = Graphics.height;
    _0x51d2fc.save();
    _0x51d2fc.setTransform(_0x210273.a, _0x210273.b, _0x210273.c, _0x210273.d, _0x210273.tx * _0x5e8558, _0x210273.ty * _0x5e8558);
    if (Graphics.canUseSaturationBlend() && this._gray > 0) {
      _0x51d2fc.globalCompositeOperation = "saturation";
      _0x51d2fc.globalAlpha = this._gray / 255;
      _0x51d2fc.fillStyle = "#ffffff";
      _0x51d2fc.fillRect(0, 0, _0x5673b6, _0x7cc26);
    }
    _0x51d2fc.globalAlpha = 1;
    var _0x4809fa = Math.max(0, this._red);
    var _0x214e3d = Math.max(0, this._green);
    var _0x265c9a = Math.max(0, this._blue);
    if (_0x4809fa || _0x214e3d || _0x265c9a) {
      _0x51d2fc.globalCompositeOperation = "lighter";
      _0x51d2fc.fillStyle = Utils.rgbToCssColor(_0x4809fa, _0x214e3d, _0x265c9a);
      _0x51d2fc.fillRect(0, 0, _0x5673b6, _0x7cc26);
    }
    if (Graphics.canUseDifferenceBlend()) {
      var _0x4dce5e = Math.max(0, -this._red);
      var _0x1aae34 = Math.max(0, -this._green);
      var _0x1da841 = Math.max(0, -this._blue);
      if (_0x4dce5e || _0x1aae34 || _0x1da841) {
        _0x51d2fc.globalCompositeOperation = "difference";
        _0x51d2fc.fillStyle = "#ffffff";
        _0x51d2fc.fillRect(0, 0, _0x5673b6, _0x7cc26);
        _0x51d2fc.globalCompositeOperation = "lighter";
        _0x51d2fc.fillStyle = Utils.rgbToCssColor(_0x4dce5e, _0x1aae34, _0x1da841);
        _0x51d2fc.fillRect(0, 0, _0x5673b6, _0x7cc26);
        _0x51d2fc.globalCompositeOperation = "difference";
        _0x51d2fc.fillStyle = "#ffffff";
        _0x51d2fc.fillRect(0, 0, _0x5673b6, _0x7cc26);
      }
    }
    _0x51d2fc.restore();
  }
};
ToneSprite.prototype._renderWebGL = function (_0x2e87d9) {};
function Stage() {
  this.initialize.apply(this, arguments);
}
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;
Stage.prototype.initialize = function () {
  PIXI.Container.call(this);
  this.interactive = false;
};
function WebAudio() {
  this.initialize.apply(this, arguments);
}
WebAudio._standAlone = function (_0x1a74a2) {
  return !_0x1a74a2.ResourceHandler;
}(this);
WebAudio.prototype.initialize = function (_0x220112) {
  if (!WebAudio._initialized) {
    WebAudio.initialize();
  }
  this.clear();
  if (!WebAudio._standAlone) {
    this._loader = ResourceHandler.createLoader(_0x220112, this._load.bind(this, _0x220112), function () {
      this._hasError = true;
    }.bind(this));
  }
  this._load(_0x220112);
  this._url = _0x220112;
};
WebAudio._masterVolume = 1;
WebAudio._context = null;
WebAudio._masterGainNode = null;
WebAudio._initialized = false;
WebAudio._unlocked = false;
WebAudio.initialize = function (_0x40e7f2) {
  if (!this._initialized) {
    if (!_0x40e7f2) {
      this._createContext();
      this._detectCodecs();
      this._createMasterGainNode();
      this._setupEventHandlers();
    }
    this._initialized = true;
  }
  return !!this._context;
};
WebAudio.canPlayOgg = function () {
  if (!this._initialized) {
    this.initialize();
  }
  return !!this._canPlayOgg;
};
WebAudio.canPlayM4a = function () {
  if (!this._initialized) {
    this.initialize();
  }
  return !!this._canPlayM4a;
};
WebAudio.setMasterVolume = function (_0x1c24b) {
  this._masterVolume = _0x1c24b;
  if (this._masterGainNode) {
    this._masterGainNode.gain.setValueAtTime(this._masterVolume, this._context.currentTime);
  }
};
WebAudio._createContext = function () {
  try {
    if (typeof AudioContext !== "undefined") {
      this._context = new AudioContext();
    } else if (typeof webkitAudioContext !== "undefined") {
      this._context = new webkitAudioContext();
    }
  } catch (_0x18b8c9) {
    this._context = null;
  }
};
WebAudio._detectCodecs = function () {
  var _0x33e31f = document.createElement("audio");
  if (_0x33e31f.canPlayType) {
    this._canPlayOgg = _0x33e31f.canPlayType("audio/ogg");
    this._canPlayM4a = _0x33e31f.canPlayType("audio/mp4");
  }
};
WebAudio._createMasterGainNode = function () {
  var _0xbd0a08 = WebAudio._context;
  if (_0xbd0a08) {
    this._masterGainNode = _0xbd0a08.createGain();
    this._masterGainNode.gain.setValueAtTime(this._masterVolume, _0xbd0a08.currentTime);
    this._masterGainNode.connect(_0xbd0a08.destination);
  }
};
WebAudio._setupEventHandlers = function () {
  function _0x1bd906() {
    var _0x59d6ee = WebAudio._context;
    if (_0x59d6ee && _0x59d6ee.state === "suspended" && typeof _0x59d6ee.resume === "function") {
      _0x59d6ee.resume().then(function () {
        WebAudio._onTouchStart();
      });
    } else {
      WebAudio._onTouchStart();
    }
  }
  document.addEventListener("keydown", _0x1bd906);
  document.addEventListener("mousedown", _0x1bd906);
  document.addEventListener("touchend", _0x1bd906);
  document.addEventListener("touchstart", this._onTouchStart.bind(this));
  document.addEventListener("visibilitychange", this._onVisibilityChange.bind(this));
};
WebAudio._onTouchStart = function () {
  var _0x232e07 = WebAudio._context;
  if (_0x232e07 && !this._unlocked) {
    var _0x531f60 = _0x232e07.createBufferSource();
    _0x531f60.start(0);
    this._unlocked = true;
  }
};
WebAudio._onVisibilityChange = function () {
  if (document.visibilityState === "hidden") {
    this._onHide();
  } else {
    this._onShow();
  }
};
WebAudio._onHide = function () {
  if (this._shouldMuteOnHide()) {
    this._fadeOut(1);
  }
};
WebAudio._onShow = function () {
  if (this._shouldMuteOnHide()) {
    this._fadeIn(0.5);
  }
};
WebAudio._shouldMuteOnHide = function () {
  return Utils.isMobileDevice();
};
WebAudio._fadeIn = function (_0x1c39d4) {
  if (this._masterGainNode) {
    var _0x52f7c5 = this._masterGainNode.gain;
    var _0x9b4237 = WebAudio._context.currentTime;
    _0x52f7c5.setValueAtTime(0, _0x9b4237);
    _0x52f7c5.linearRampToValueAtTime(this._masterVolume, _0x9b4237 + _0x1c39d4);
  }
};
WebAudio._fadeOut = function (_0x1bba87) {
  if (this._masterGainNode) {
    var _0x2bef0b = this._masterGainNode.gain;
    var _0x4fae3c = WebAudio._context.currentTime;
    _0x2bef0b.setValueAtTime(this._masterVolume, _0x4fae3c);
    _0x2bef0b.linearRampToValueAtTime(0, _0x4fae3c + _0x1bba87);
  }
};
WebAudio.prototype.clear = function () {
  this.stop();
  this._buffer = null;
  this._sourceNode = null;
  this._gainNode = null;
  this._pannerNode = null;
  this._totalTime = 0;
  this._sampleRate = 0;
  this._loopStart = 0;
  this._loopLength = 0;
  this._startTime = 0;
  this._volume = 1;
  this._pitch = 1;
  this._pan = 0;
  this._endTimer = null;
  this._loadListeners = [];
  this._stopListeners = [];
  this._hasError = false;
  this._autoPlay = false;
};
var _0x53e8dd = {
  get: function () {
    return this._url;
  },
  configurable: true
};
Object.defineProperty(WebAudio.prototype, "url", _0x53e8dd);
Object.defineProperty(WebAudio.prototype, "volume", {
  get: function () {
    return this._volume;
  },
  set: function (_0x1bae20) {
    this._volume = _0x1bae20;
    if (this._gainNode) {
      this._gainNode.gain.setValueAtTime(this._volume, WebAudio._context.currentTime);
    }
  },
  configurable: true
});
Object.defineProperty(WebAudio.prototype, "pitch", {
  get: function () {
    return this._pitch;
  },
  set: function (_0x4fea03) {
    if (this._pitch !== _0x4fea03) {
      this._pitch = _0x4fea03;
      if (this.isPlaying()) {
        this.play(this._sourceNode.loop, 0);
      }
    }
  },
  configurable: true
});
Object.defineProperty(WebAudio.prototype, "pan", {
  get: function () {
    return this._pan;
  },
  set: function (_0x30adca) {
    this._pan = _0x30adca;
    this._updatePanner();
  },
  configurable: true
});
WebAudio.prototype.isReady = function () {
  return !!this._buffer;
};
WebAudio.prototype.isError = function () {
  return this._hasError;
};
WebAudio.prototype.isPlaying = function () {
  return !!this._sourceNode;
};
WebAudio.prototype.play = function (_0x82e046, _0x5d44c9) {
  if (this.isReady()) {
    _0x5d44c9 = _0x5d44c9 || 0;
    this._startPlaying(_0x82e046, _0x5d44c9);
  } else if (WebAudio._context) {
    this._autoPlay = true;
    this.addLoadListener(function () {
      if (this._autoPlay) {
        this.play(_0x82e046, _0x5d44c9);
      }
    }.bind(this));
  }
};
WebAudio.prototype.stop = function () {
  this._autoPlay = false;
  this._removeEndTimer();
  this._removeNodes();
  if (this._stopListeners) {
    while (this._stopListeners.length > 0) {
      var _0x594c6e = this._stopListeners.shift();
      _0x594c6e();
    }
  }
};
WebAudio.prototype.fadeIn = function (_0x51df99) {
  if (this.isReady()) {
    if (this._gainNode) {
      var _0x7afd69 = this._gainNode.gain;
      var _0x344d42 = WebAudio._context.currentTime;
      _0x7afd69.setValueAtTime(0, _0x344d42);
      _0x7afd69.linearRampToValueAtTime(this._volume, _0x344d42 + _0x51df99);
    }
  } else if (this._autoPlay) {
    this.addLoadListener(function () {
      this.fadeIn(_0x51df99);
    }.bind(this));
  }
};
WebAudio.prototype.fadeOut = function (_0xddb750) {
  if (this._gainNode) {
    var _0x18ee2c = this._gainNode.gain;
    var _0x12629d = WebAudio._context.currentTime;
    _0x18ee2c.setValueAtTime(this._volume, _0x12629d);
    _0x18ee2c.linearRampToValueAtTime(0, _0x12629d + _0xddb750);
  }
  this._autoPlay = false;
};
WebAudio.prototype.seek = function () {
  if (WebAudio._context) {
    var _0x18f0e4 = (WebAudio._context.currentTime - this._startTime) * this._pitch;
    if (this._loopLength > 0) {
      while (_0x18f0e4 >= this._loopStart + this._loopLength) {
        _0x18f0e4 -= this._loopLength;
      }
    }
    return _0x18f0e4;
  } else {
    return 0;
  }
};
WebAudio.prototype.addLoadListener = function (_0x2d3316) {
  this._loadListeners.push(_0x2d3316);
};
WebAudio.prototype.addStopListener = function (_0x47dd1b) {
  this._stopListeners.push(_0x47dd1b);
};
WebAudio.prototype._load = function (_0x100b62) {
  if (WebAudio._context) {
    var _0x5d50db = new XMLHttpRequest();
    if (Decrypter.hasEncryptedAudio) {
      _0x100b62 = Decrypter.extToEncryptExt(_0x100b62);
    }
    _0x5d50db.open("GET", _0x100b62.toLowerCase());
    _0x5d50db.responseType = "arraybuffer";
    _0x5d50db.onload = function () {
      if (_0x5d50db.status < 400) {
        this._onXhrLoad(_0x5d50db);
      }
    }.bind(this);
    _0x5d50db.onerror = this._loader || function () {
      this._hasError = true;
    }.bind(this);
    _0x5d50db.send();
  }
};
WebAudio.prototype._onXhrLoad = function (_0x4c9226) {
  var _0x43ae72 = _0x4c9226.response;
  if (Decrypter.hasEncryptedAudio) {
    _0x43ae72 = Decrypter.decryptArrayBuffer(_0x43ae72);
  }
  this._readLoopComments(new Uint8Array(_0x43ae72));
  WebAudio._context.decodeAudioData(_0x43ae72, function (_0x1a741b) {
    this._buffer = _0x1a741b;
    this._totalTime = _0x1a741b.duration;
    if (this._loopLength > 0 && this._sampleRate > 0) {
      this._loopStart /= this._sampleRate;
      this._loopLength /= this._sampleRate;
    } else {
      this._loopStart = 0;
      this._loopLength = this._totalTime;
    }
    this._onLoad();
  }.bind(this));
};
WebAudio.prototype._startPlaying = function (_0x969b7c, _0x53b155) {
  if (this._loopLength > 0) {
    while (_0x53b155 >= this._loopStart + this._loopLength) {
      _0x53b155 -= this._loopLength;
    }
  }
  this._removeEndTimer();
  this._removeNodes();
  this._createNodes();
  this._connectNodes();
  this._sourceNode.loop = _0x969b7c;
  this._sourceNode.start(0, _0x53b155);
  this._startTime = WebAudio._context.currentTime - _0x53b155 / this._pitch;
  this._createEndTimer();
};
WebAudio.prototype._createNodes = function () {
  var _0x210cf0 = WebAudio._context;
  this._sourceNode = _0x210cf0.createBufferSource();
  this._sourceNode.buffer = this._buffer;
  this._sourceNode.loopStart = this._loopStart;
  this._sourceNode.loopEnd = this._loopStart + this._loopLength;
  this._sourceNode.playbackRate.setValueAtTime(this._pitch, _0x210cf0.currentTime);
  this._gainNode = _0x210cf0.createGain();
  this._gainNode.gain.setValueAtTime(this._volume, _0x210cf0.currentTime);
  this._pannerNode = _0x210cf0.createPanner();
  this._pannerNode.panningModel = "equalpower";
  this._updatePanner();
};
WebAudio.prototype._connectNodes = function () {
  this._sourceNode.connect(this._gainNode);
  this._gainNode.connect(this._pannerNode);
  this._pannerNode.connect(WebAudio._masterGainNode);
};
WebAudio.prototype._removeNodes = function () {
  if (this._sourceNode) {
    this._sourceNode.stop(0);
    this._sourceNode = null;
    this._gainNode = null;
    this._pannerNode = null;
  }
};
WebAudio.prototype._createEndTimer = function () {
  if (this._sourceNode && !this._sourceNode.loop) {
    var _0x21f74d = this._startTime + this._totalTime / this._pitch;
    var _0x6a28d8 = _0x21f74d - WebAudio._context.currentTime;
    this._endTimer = setTimeout(function () {
      this.stop();
    }.bind(this), _0x6a28d8 * 1000);
  }
};
WebAudio.prototype._removeEndTimer = function () {
  if (this._endTimer) {
    clearTimeout(this._endTimer);
    this._endTimer = null;
  }
};
WebAudio.prototype._updatePanner = function () {
  if (this._pannerNode) {
    var _0x3a5664 = this._pan;
    var _0x47fa81 = 1 - Math.abs(_0x3a5664);
    this._pannerNode.setPosition(_0x3a5664, 0, _0x47fa81);
  }
};
WebAudio.prototype._onLoad = function () {
  while (this._loadListeners.length > 0) {
    var _0x99a937 = this._loadListeners.shift();
    _0x99a937();
  }
};
WebAudio.prototype._readLoopComments = function (_0xbf67aa) {
  this._readOgg(_0xbf67aa);
  this._readMp4(_0xbf67aa);
};
WebAudio.prototype._readOgg = function (_0x1e9a68) {
  var _0x188cf1 = 0;
  while (_0x188cf1 < _0x1e9a68.length) {
    if (this._readFourCharacters(_0x1e9a68, _0x188cf1) === "OggS") {
      _0x188cf1 += 26;
      var _0x5c93bd = false;
      var _0x3bc359 = _0x1e9a68[_0x188cf1++];
      var _0x4585ec = [];
      for (var _0x3949a2 = 0; _0x3949a2 < _0x3bc359; _0x3949a2++) {
        _0x4585ec.push(_0x1e9a68[_0x188cf1++]);
      }
      for (_0x3949a2 = 0; _0x3949a2 < _0x3bc359; _0x3949a2++) {
        if (this._readFourCharacters(_0x1e9a68, _0x188cf1 + 1) === "vorb") {
          var _0x2d7834 = _0x1e9a68[_0x188cf1];
          if (_0x2d7834 === 1) {
            this._sampleRate = this._readLittleEndian(_0x1e9a68, _0x188cf1 + 12);
          } else if (_0x2d7834 === 3) {
            this._readMetaData(_0x1e9a68, _0x188cf1, _0x4585ec[_0x3949a2]);
          }
          _0x5c93bd = true;
        }
        _0x188cf1 += _0x4585ec[_0x3949a2];
      }
      if (!_0x5c93bd) {
        break;
      }
    } else {
      break;
    }
  }
};
WebAudio.prototype._readMp4 = function (_0xa69b29) {
  if (this._readFourCharacters(_0xa69b29, 4) === "ftyp") {
    var _0x40668a = 0;
    while (_0x40668a < _0xa69b29.length) {
      var _0x2f5753 = this._readBigEndian(_0xa69b29, _0x40668a);
      var _0x49832b = this._readFourCharacters(_0xa69b29, _0x40668a + 4);
      if (_0x49832b === "moov") {
        _0x40668a += 8;
      } else {
        if (_0x49832b === "mvhd") {
          this._sampleRate = this._readBigEndian(_0xa69b29, _0x40668a + 20);
        }
        if (_0x49832b === "udta" || _0x49832b === "meta") {
          this._readMetaData(_0xa69b29, _0x40668a, _0x2f5753);
        }
        _0x40668a += _0x2f5753;
        if (_0x2f5753 <= 1) {
          break;
        }
      }
    }
  }
};
WebAudio.prototype._readMetaData = function (_0x437cd1, _0x7a6946, _0x1b9041) {
  for (var _0x3dd277 = _0x7a6946; _0x3dd277 < _0x7a6946 + _0x1b9041 - 10; _0x3dd277++) {
    if (this._readFourCharacters(_0x437cd1, _0x3dd277) === "LOOP") {
      var _0x43d63b = "";
      while (_0x437cd1[_0x3dd277] > 0) {
        _0x43d63b += String.fromCharCode(_0x437cd1[_0x3dd277++]);
      }
      if (_0x43d63b.match(/LOOPSTART=([0-9]+)/)) {
        this._loopStart = parseInt(RegExp.$1);
      }
      if (_0x43d63b.match(/LOOPLENGTH=([0-9]+)/)) {
        this._loopLength = parseInt(RegExp.$1);
      }
      if (_0x43d63b == "LOOPSTART" || _0x43d63b == "LOOPLENGTH") {
        var _0x30639e = "";
        _0x3dd277 += 16;
        while (_0x437cd1[_0x3dd277] > 0) {
          _0x30639e += String.fromCharCode(_0x437cd1[_0x3dd277++]);
        }
        if (_0x43d63b == "LOOPSTART") {
          this._loopStart = parseInt(_0x30639e);
        } else {
          this._loopLength = parseInt(_0x30639e);
        }
      }
    }
  }
};
WebAudio.prototype._readLittleEndian = function (_0xbeb161, _0x4d3f73) {
  return _0xbeb161[_0x4d3f73 + 3] * 16777216 + _0xbeb161[_0x4d3f73 + 2] * 65536 + _0xbeb161[_0x4d3f73 + 1] * 256 + _0xbeb161[_0x4d3f73 + 0];
};
WebAudio.prototype._readBigEndian = function (_0x517eac, _0x25ccbf) {
  return _0x517eac[_0x25ccbf + 0] * 16777216 + _0x517eac[_0x25ccbf + 1] * 65536 + _0x517eac[_0x25ccbf + 2] * 256 + _0x517eac[_0x25ccbf + 3];
};
WebAudio.prototype._readFourCharacters = function (_0x1d82f7, _0x3e0d89) {
  var _0x4a8bab = "";
  for (var _0x358707 = 0; _0x358707 < 4; _0x358707++) {
    _0x4a8bab += String.fromCharCode(_0x1d82f7[_0x3e0d89 + _0x358707]);
  }
  return _0x4a8bab;
};
function Html5Audio() {
  throw new Error("This is a static class");
}
Html5Audio._initialized = false;
Html5Audio._unlocked = false;
Html5Audio._audioElement = null;
Html5Audio._gainTweenInterval = null;
Html5Audio._tweenGain = 0;
Html5Audio._tweenTargetGain = 0;
Html5Audio._tweenGainStep = 0;
Html5Audio._staticSePath = null;
Html5Audio.setup = function (_0x3516ad) {
  if (!this._initialized) {
    this.initialize();
  }
  this.clear();
  if (Decrypter.hasEncryptedAudio && this._audioElement.src) {
    window.URL.revokeObjectURL(this._audioElement.src);
  }
  this._url = _0x3516ad;
};
Html5Audio.initialize = function () {
  if (!this._initialized) {
    if (!this._audioElement) {
      try {
        this._audioElement = new Audio();
      } catch (_0x18b23a) {
        this._audioElement = null;
      }
    }
    if (this._audioElement) {
      this._setupEventHandlers();
    }
    this._initialized = true;
  }
  return !!this._audioElement;
};
Html5Audio._setupEventHandlers = function () {
  document.addEventListener("touchstart", this._onTouchStart.bind(this));
  document.addEventListener("visibilitychange", this._onVisibilityChange.bind(this));
  this._audioElement.addEventListener("loadeddata", this._onLoadedData.bind(this));
  this._audioElement.addEventListener("error", this._onError.bind(this));
  this._audioElement.addEventListener("ended", this._onEnded.bind(this));
};
Html5Audio._onTouchStart = function () {
  if (this._audioElement && !this._unlocked) {
    if (this._isLoading) {
      this._load(this._url);
      this._unlocked = true;
    } else if (this._staticSePath) {
      this._audioElement.src = this._staticSePath;
      this._audioElement.volume = 0;
      this._audioElement.loop = false;
      this._audioElement.play();
      this._unlocked = true;
    }
  }
};
Html5Audio._onVisibilityChange = function () {
  if (document.visibilityState === "hidden") {
    this._onHide();
  } else {
    this._onShow();
  }
};
Html5Audio._onLoadedData = function () {
  this._buffered = true;
  if (this._unlocked) {
    this._onLoad();
  }
};
Html5Audio._onError = function () {
  this._hasError = true;
};
Html5Audio._onEnded = function () {
  if (!this._audioElement.loop) {
    this.stop();
  }
};
Html5Audio._onHide = function () {
  this._audioElement.volume = 0;
  this._tweenGain = 0;
};
Html5Audio._onShow = function () {
  this.fadeIn(0.5);
};
Html5Audio.clear = function () {
  this.stop();
  this._volume = 1;
  this._loadListeners = [];
  this._hasError = false;
  this._autoPlay = false;
  this._isLoading = false;
  this._buffered = false;
};
Html5Audio.setStaticSe = function (_0x5dc1aa) {
  if (!this._initialized) {
    this.initialize();
    this.clear();
  }
  this._staticSePath = _0x5dc1aa;
};
Object.defineProperty(Html5Audio, "url", {
  get: function () {
    return Html5Audio._url;
  },
  configurable: true
});
Object.defineProperty(Html5Audio, "volume", {
  get: function () {
    return Html5Audio._volume;
  }.bind(this),
  set: function (_0x1dcf35) {
    Html5Audio._volume = _0x1dcf35;
    if (Html5Audio._audioElement) {
      Html5Audio._audioElement.volume = this._volume;
    }
  },
  configurable: true
});
Html5Audio.isReady = function () {
  return this._buffered;
};
Html5Audio.isError = function () {
  return this._hasError;
};
Html5Audio.isPlaying = function () {
  return !this._audioElement.paused;
};
Html5Audio.play = function (_0x2f921f, _0x25d02a) {
  if (this.isReady()) {
    _0x25d02a = _0x25d02a || 0;
    this._startPlaying(_0x2f921f, _0x25d02a);
  } else if (Html5Audio._audioElement) {
    this._autoPlay = true;
    this.addLoadListener(function () {
      if (this._autoPlay) {
        this.play(_0x2f921f, _0x25d02a);
        if (this._gainTweenInterval) {
          clearInterval(this._gainTweenInterval);
          this._gainTweenInterval = null;
        }
      }
    }.bind(this));
    if (!this._isLoading) {
      this._load(this._url);
    }
  }
};
Html5Audio.stop = function () {
  if (this._audioElement) {
    this._audioElement.pause();
  }
  this._autoPlay = false;
  if (this._tweenInterval) {
    clearInterval(this._tweenInterval);
    this._tweenInterval = null;
    this._audioElement.volume = 0;
  }
};
Html5Audio.fadeIn = function (_0x4912f2) {
  if (this.isReady()) {
    if (this._audioElement) {
      this._tweenTargetGain = this._volume;
      this._tweenGain = 0;
      this._startGainTween(_0x4912f2);
    }
  } else if (this._autoPlay) {
    this.addLoadListener(function () {
      this.fadeIn(_0x4912f2);
    }.bind(this));
  }
};
Html5Audio.fadeOut = function (_0x1bf26a) {
  if (this._audioElement) {
    this._tweenTargetGain = 0;
    this._tweenGain = this._volume;
    this._startGainTween(_0x1bf26a);
  }
};
Html5Audio.seek = function () {
  if (this._audioElement) {
    return this._audioElement.currentTime;
  } else {
    return 0;
  }
};
Html5Audio.addLoadListener = function (_0x383895) {
  this._loadListeners.push(_0x383895);
};
Html5Audio._load = function (_0x14a001) {
  if (this._audioElement) {
    this._isLoading = true;
    this._audioElement.src = _0x14a001;
    this._audioElement.load();
  }
};
Html5Audio._startPlaying = function (_0x488e3b, _0x33673d) {
  this._audioElement.loop = _0x488e3b;
  if (this._gainTweenInterval) {
    clearInterval(this._gainTweenInterval);
    this._gainTweenInterval = null;
  }
  if (this._audioElement) {
    this._audioElement.volume = this._volume;
    this._audioElement.currentTime = _0x33673d;
    this._audioElement.play();
  }
};
Html5Audio._onLoad = function () {
  this._isLoading = false;
  while (this._loadListeners.length > 0) {
    var _0x5daa6b = this._loadListeners.shift();
    _0x5daa6b();
  }
};
Html5Audio._startGainTween = function (_0x84ee8a) {
  this._audioElement.volume = this._tweenGain;
  if (this._gainTweenInterval) {
    clearInterval(this._gainTweenInterval);
    this._gainTweenInterval = null;
  }
  this._tweenGainStep = (this._tweenTargetGain - this._tweenGain) / (_0x84ee8a * 60);
  this._gainTweenInterval = setInterval(function () {
    Html5Audio._applyTweenValue(Html5Audio._tweenTargetGain);
  }, 1000 / 60);
};
Html5Audio._applyTweenValue = function (_0x469e0c) {
  Html5Audio._tweenGain += Html5Audio._tweenGainStep;
  if (Html5Audio._tweenGain < 0 && Html5Audio._tweenGainStep < 0) {
    Html5Audio._tweenGain = 0;
  } else if (Html5Audio._tweenGain > _0x469e0c && Html5Audio._tweenGainStep > 0) {
    Html5Audio._tweenGain = _0x469e0c;
  }
  if (Math.abs(Html5Audio._tweenTargetGain - Html5Audio._tweenGain) < 0.01) {
    Html5Audio._tweenGain = Html5Audio._tweenTargetGain;
    clearInterval(Html5Audio._gainTweenInterval);
    Html5Audio._gainTweenInterval = null;
  }
  Html5Audio._audioElement.volume = Html5Audio._tweenGain;
};
function JsonEx() {
  throw new Error("This is a static class");
}
JsonEx.maxDepth = 100;
JsonEx._id = 1;
JsonEx._generateId = function () {
  return JsonEx._id++;
};
JsonEx.stringify = function (_0x5950d8) {
  var _0x41b834 = [];
  JsonEx._id = 1;
  var _0x568fea = JSON.stringify(this._encode(_0x5950d8, _0x41b834, 0));
  this._cleanMetadata(_0x5950d8);
  this._restoreCircularReference(_0x41b834);
  return _0x568fea;
};
JsonEx._restoreCircularReference = function (_0xa41c93) {
  _0xa41c93.forEach(function (_0x139e73) {
    var _0x58b5c6 = _0x139e73[0];
    var _0x276f0f = _0x139e73[1];
    var _0x26b2fc = _0x139e73[2];
    _0x276f0f[_0x58b5c6] = _0x26b2fc;
  });
};
JsonEx.parse = function (_0xb829f0) {
  var _0xf692dc = [];
  var _0x13b978 = {};
  var _0x22e429 = this._decode(JSON.parse(_0xb829f0), _0xf692dc, _0x13b978);
  this._cleanMetadata(_0x22e429);
  this._linkCircularReference(_0x22e429, _0xf692dc, _0x13b978);
  return _0x22e429;
};
JsonEx._linkCircularReference = function (_0x375b1d, _0x545494, _0x18e182) {
  _0x545494.forEach(function (_0x45cb72) {
    var _0x3e8fa7 = _0x45cb72[0];
    var _0xfcd225 = _0x45cb72[1];
    var _0x57ff34 = _0x45cb72[2];
    _0xfcd225[_0x3e8fa7] = _0x18e182[_0x57ff34];
  });
};
JsonEx._cleanMetadata = function (_0x5d5267) {
  if (!_0x5d5267) {
    return;
  }
  delete _0x5d5267["@"];
  delete _0x5d5267["@c"];
  if (typeof _0x5d5267 === "object") {
    Object.keys(_0x5d5267).forEach(function (_0xd3a961) {
      var _0x3f97c9 = _0x5d5267[_0xd3a961];
      if (typeof _0x3f97c9 === "object") {
        JsonEx._cleanMetadata(_0x3f97c9);
      }
    });
  }
};
JsonEx.makeDeepCopy = function (_0xcfb152) {
  return this.parse(this.stringify(_0xcfb152));
};
JsonEx._encode = function (_0x2508fd, _0xe6c776, _0x200a84) {
  _0x200a84 = _0x200a84 || 0;
  if (++_0x200a84 >= this.maxDepth) {
    throw new Error("Object too deep");
  }
  var _0x44e4e0 = Object.prototype.toString.call(_0x2508fd);
  if (_0x44e4e0 === "[object Object]" || _0x44e4e0 === "[object Array]") {
    _0x2508fd["@c"] = JsonEx._generateId();
    var _0x575010 = this._getConstructorName(_0x2508fd);
    if (_0x575010 !== "Object" && _0x575010 !== "Array") {
      _0x2508fd["@"] = _0x575010;
    }
    for (var _0x4d66f8 in _0x2508fd) {
      if (_0x2508fd.hasOwnProperty(_0x4d66f8) && !_0x4d66f8.match(/^@./)) {
        if (_0x2508fd[_0x4d66f8] && typeof _0x2508fd[_0x4d66f8] === "object") {
          if (_0x2508fd[_0x4d66f8]["@c"]) {
            _0xe6c776.push([_0x4d66f8, _0x2508fd, _0x2508fd[_0x4d66f8]]);
            _0x2508fd[_0x4d66f8] = {
              "@r": _0x2508fd[_0x4d66f8]["@c"]
            };
          } else {
            _0x2508fd[_0x4d66f8] = this._encode(_0x2508fd[_0x4d66f8], _0xe6c776, _0x200a84 + 1);
            if (_0x2508fd[_0x4d66f8] instanceof Array) {
              _0xe6c776.push([_0x4d66f8, _0x2508fd, _0x2508fd[_0x4d66f8]]);
              _0x2508fd[_0x4d66f8] = {
                "@c": _0x2508fd[_0x4d66f8]["@c"],
                "@a": _0x2508fd[_0x4d66f8]
              };
            }
          }
        } else {
          _0x2508fd[_0x4d66f8] = this._encode(_0x2508fd[_0x4d66f8], _0xe6c776, _0x200a84 + 1);
        }
      }
    }
  }
  _0x200a84--;
  return _0x2508fd;
};
JsonEx._decode = function (_0x12446b, _0x49aa49, _0x26c701) {
  var _0x225387 = Object.prototype.toString.call(_0x12446b);
  if (_0x225387 === "[object Object]" || _0x225387 === "[object Array]") {
    _0x26c701[_0x12446b["@c"]] = _0x12446b;
    if (_0x12446b["@"]) {
      var _0x5170bd = window[_0x12446b["@"]];
      if (_0x5170bd) {
        _0x12446b = this._resetPrototype(_0x12446b, _0x5170bd.prototype);
      }
    }
    for (var _0x1fc6ad in _0x12446b) {
      if (_0x12446b.hasOwnProperty(_0x1fc6ad)) {
        if (_0x12446b[_0x1fc6ad] && _0x12446b[_0x1fc6ad]["@a"]) {
          var _0x4242ca = _0x12446b[_0x1fc6ad]["@a"];
          _0x4242ca["@c"] = _0x12446b[_0x1fc6ad]["@c"];
          _0x12446b[_0x1fc6ad] = _0x4242ca;
        }
        if (_0x12446b[_0x1fc6ad] && _0x12446b[_0x1fc6ad]["@r"]) {
          _0x49aa49.push([_0x1fc6ad, _0x12446b, _0x12446b[_0x1fc6ad]["@r"]]);
        }
        _0x12446b[_0x1fc6ad] = this._decode(_0x12446b[_0x1fc6ad], _0x49aa49, _0x26c701);
      }
    }
  }
  return _0x12446b;
};
JsonEx._getConstructorName = function (_0x2d9aac) {
  var _0x401df2 = _0x2d9aac.constructor.name;
  if (_0x401df2 === undefined) {
    var _0x26bcf6 = /^\s*function\s*([A-Za-z0-9_$]*)/;
    _0x401df2 = _0x26bcf6.exec(_0x2d9aac.constructor)[1];
  }
  return _0x401df2;
};
JsonEx._resetPrototype = function (_0x3a33e5, _0xec0bc7) {
  if (Object.setPrototypeOf !== undefined) {
    Object.setPrototypeOf(_0x3a33e5, _0xec0bc7);
  } else if ("__proto__" in _0x3a33e5) {
    _0x3a33e5.__proto__ = _0xec0bc7;
  } else {
    var _0xcc5617 = Object.create(_0xec0bc7);
    for (var _0x4a7c58 in _0x3a33e5) {
      if (_0x3a33e5.hasOwnProperty(_0x4a7c58)) {
        _0xcc5617[_0x4a7c58] = _0x3a33e5[_0x4a7c58];
      }
    }
    _0x3a33e5 = _0xcc5617;
  }
  return _0x3a33e5;
};
function Decrypter() {
  throw new Error("This is a static class");
}
Decrypter.hasEncryptedImages = false;
Decrypter.hasEncryptedAudio = false;
Decrypter._requestImgFile = [];
Decrypter._headerlength = 16;
Decrypter._xhrOk = 400;
Decrypter._encryptionKey = "";
Decrypter._ignoreList = ["img/system/Window.png", "img/system/window.png"];
Decrypter.SIGNATURE = "5250474d56000000";
Decrypter.VER = "000301";
Decrypter.REMAIN = "0000000000";
Decrypter.checkImgIgnore = function (_0x6c7da7) {
  for (var _0x4d9190 = 0; _0x4d9190 < this._ignoreList.length; _0x4d9190++) {
    if (_0x6c7da7 === this._ignoreList[_0x4d9190]) {
      return true;
    }
  }
  return false;
};
Decrypter.decryptImg = function (_0x4ca354, _0x74a2ab) {
  _0x4ca354 = this.extToEncryptExt(_0x4ca354);
  let _0x629e07 = {
    "\\$": "_",
    "\\[": "_",
    "\\]": "_",
    "\\(": "_",
    "\\)": "_",
    "\\!": "_",
    "\\'": "_",
    "\\%": "_"
  };
  function _0x4ae98b(_0x509b44) {
    _0x509b44 = _0x509b44.replace(/\%[A-F0-9]{2}/g, "_");
    for (let _0x3d2ca0 in _0x629e07) {
      let _0x339649 = new RegExp(_0x3d2ca0, "g");
      _0x509b44 = _0x509b44.replace(_0x339649, _0x629e07[_0x3d2ca0]);
    }
    return _0x509b44;
  }
  _0x4ca354 = _0x4ca354.split("/").map(_0x31fb8b => _0x4ae98b(_0x31fb8b)).join("/");
  var _0x279b00 = new XMLHttpRequest();
  _0x279b00.open("GET", _0x4ca354);
  _0x279b00.responseType = "arraybuffer";
  _0x279b00.send();
  _0x279b00.onload = function () {
    if (this.status < Decrypter._xhrOk) {
      var _0x4050fe = Decrypter.decryptArrayBuffer(_0x279b00.response);
      _0x74a2ab._image.src = Decrypter.createBlobUrl(_0x4050fe);
      _0x74a2ab._image.addEventListener("load", _0x74a2ab._loadListener = Bitmap.prototype._onLoad.bind(_0x74a2ab));
      _0x74a2ab._image.addEventListener("error", _0x74a2ab._errorListener = _0x74a2ab._loader || Bitmap.prototype._onError.bind(_0x74a2ab));
    }
  };
  _0x279b00.onerror = function () {
    if (_0x74a2ab._loader) {
      _0x74a2ab._loader();
    } else {
      _0x74a2ab._onError();
    }
  };
};
Decrypter.decryptHTML5Audio = function (_0x92279e, _0x2cdf7a, _0x4a745c) {
  var _0x563783 = new XMLHttpRequest();
  _0x563783.open("GET", _0x92279e);
  _0x563783.responseType = "arraybuffer";
  _0x563783.send();
  _0x563783.onload = function () {
    if (this.status < Decrypter._xhrOk) {
      var _0x1199cc = Decrypter.decryptArrayBuffer(_0x563783.response);
      var _0x290ff2 = Decrypter.createBlobUrl(_0x1199cc);
      AudioManager.createDecryptBuffer(_0x290ff2, _0x2cdf7a, _0x4a745c);
    }
  };
};
Decrypter.cutArrayHeader = function (_0x24deaa, _0x187620) {
  return _0x24deaa.slice(_0x187620);
};
Decrypter.decryptArrayBuffer = function (_0x23f238) {
  if (!_0x23f238) {
    return null;
  }
  var _0x1fdb28 = new Uint8Array(_0x23f238, 0, this._headerlength);
  var _0x192dac;
  var _0x26369a = this.SIGNATURE + this.VER + this.REMAIN;
  var _0x25e01f = new Uint8Array(16);
  for (_0x192dac = 0; _0x192dac < this._headerlength; _0x192dac++) {
    _0x25e01f[_0x192dac] = parseInt("0x" + _0x26369a.substr(_0x192dac * 2, 2), 16);
  }
  for (_0x192dac = 0; _0x192dac < this._headerlength; _0x192dac++) {
    if (_0x1fdb28[_0x192dac] !== _0x25e01f[_0x192dac]) {
      throw new Error("Header is wrong");
    }
  }
  _0x23f238 = this.cutArrayHeader(_0x23f238, Decrypter._headerlength);
  var _0x23c8b5 = new DataView(_0x23f238);
  this.readEncryptionkey();
  if (_0x23f238) {
    var _0x2a6c2b = new Uint8Array(_0x23f238);
    for (_0x192dac = 0; _0x192dac < this._headerlength; _0x192dac++) {
      _0x2a6c2b[_0x192dac] = _0x2a6c2b[_0x192dac] ^ parseInt(Decrypter._encryptionKey[_0x192dac], 16);
      _0x23c8b5.setUint8(_0x192dac, _0x2a6c2b[_0x192dac]);
    }
  }
  return _0x23f238;
};
Decrypter.createBlobUrl = function (_0x22c34a) {
  var _0xaa729c = new Blob([_0x22c34a]);
  return window.URL.createObjectURL(_0xaa729c);
};
Decrypter.extToEncryptExt = function (_0x3d14b6) {
  var _0x34847b = _0x3d14b6.split(".").pop();
  var _0xb6c29f = _0x34847b;
  if (_0x34847b === "ogg") {
    _0xb6c29f = ".rpgmvo";
  } else if (_0x34847b === "m4a") {
    _0xb6c29f = ".rpgmvm";
  } else if (_0x34847b === "png") {
    _0xb6c29f = ".rpgmvp";
  } else {
    _0xb6c29f = _0x34847b;
  }
  return _0x3d14b6.slice(0, _0x3d14b6.lastIndexOf(_0x34847b) - 1) + _0xb6c29f;
};
Decrypter.readEncryptionkey = function () {
  this._encryptionKey = $dataSystem.encryptionKey.split(/(.{2})/).filter(Boolean);
};
function ResourceHandler() {
  throw new Error("This is a static class");
}
ResourceHandler._reloaders = [];
ResourceHandler._defaultRetryInterval = [500, 1000, 3000];
ResourceHandler.createLoader = function (_0x3729aa, _0x200463, _0x3bea00, _0x11f4b8) {
  _0x11f4b8 = _0x11f4b8 || this._defaultRetryInterval;
  var _0x2395dd = this._reloaders;
  var _0x97b0ca = 0;
  return function () {
    if (_0x97b0ca < _0x11f4b8.length) {
      setTimeout(_0x200463, _0x11f4b8[_0x97b0ca]);
      _0x97b0ca++;
    } else {
      if (_0x3bea00) {
        _0x3bea00();
      }
      if (_0x3729aa) {
        if (_0x2395dd.length === 0) {
          Graphics.printLoadingError(_0x3729aa);
          SceneManager.stop();
        }
        _0x2395dd.push(function () {
          _0x97b0ca = 0;
          _0x200463();
        });
      }
    }
  };
};
ResourceHandler.exists = function () {
  return this._reloaders.length > 0;
};
ResourceHandler.retry = function () {
  if (this._reloaders.length > 0) {
    Graphics.eraseLoadingError();
    SceneManager.resume();
    this._reloaders.forEach(function (_0x44316f) {
      _0x44316f();
    });
    this._reloaders.length = 0;
  }
};