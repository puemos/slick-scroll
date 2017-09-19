/*!
 * slick-scroll
 * A slick scroller for HTML elements or window (Valina javascript)
 * @author Shy Alter
 * @license MIT
 * @version 0.0.1
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['slick-scroll'] = factory());
}(this, (function () { 'use strict';

var easingEquations = {
  easeOutSine: function easeOutSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  },
  easeInOutSine: function easeInOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  },
  easeInOutQuint: function easeInOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Scroller = function () {
  function Scroller(element) {
    classCallCheck(this, Scroller);

    this.element = element;
    this.scrollTargetY = 0;
    this.speed = 500;
    this.easing = 'easeOutSine';
    this.scrollY = this.element.scrollY;
  }

  createClass(Scroller, [{
    key: 'speed',
    value: function speed(_speed) {
      this.speed = _speed;
      return this;
    }
  }, {
    key: 'easing',
    value: function easing(_easing) {
      this.easing = _easing;
      return this;
    }
  }, {
    key: 'to',
    value: function to(_to) {
      this.scrollTargetY = _to instanceof Element ? this.getNodeTop(_to) : _to;
      return this;
    }
  }, {
    key: 'calcTime',
    value: function calcTime() {
      this.time = Math.max(0.1, Math.min(Math.abs(this.scrollY - this.scrollTargetY) / this.speed, 0.8));
    }
  }, {
    key: 'getNodeTop',
    value: function getNodeTop(node) {
      return node.offsetTop;
    }
  }, {
    key: 'scroll',
    value: function scroll() {
      var _this = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.scrollY = this.element.scrollTop;
      this.calcTime();
      var currentTime = 0;
      var tick = function tick() {
        currentTime += 1 / 60;

        var p = currentTime / _this.time;
        var t = easingEquations[_this.easing](p);

        if (p < 1) {
          requestAnimationFrame(tick);
          _this.element.scrollTo(0, _this.scrollY + (_this.scrollTargetY - _this.scrollY) * t);
        } else {
          _this.element.scrollTo(0, _this.scrollTargetY);
          cb();
        }
      };
      tick();
    }
  }]);
  return Scroller;
}();

return Scroller;

})));
