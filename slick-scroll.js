/*!
 * slick-scroll
 * A slick scroller for HTML elements or window (Valina javascript)
 * @author Shy Alter
 * @license MIT
 * @version 0.0.8
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
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
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

/**
 * @typedef Options
 * @property {Element} [element=window]
 * @property {number} [speed=500] 
 * @property {string} [easing=easeOutSine] 
 */

/**
 * @class Scroller
 */

var Scroller = function () {
  /**
   * Creates an instance of Scroller.
   * @param {Options} options 
   * @memberof Scroller
   */
  function Scroller() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Scroller);

    this.element = options.element || window;
    this.speed = options.speed || 500;
    this.easing = options.easing || 'easeOutQuint';

    this.attempts = 0;
    this.scrollTargetY = 0;
    this.scrollY = this.element.scrollY;
  }
  /**
   * Sets the scroll speed
   * 
   * @param {number} speed 
   * @returns {this}
   * @memberof Scroller
   */


  createClass(Scroller, [{
    key: 'setSpeed',
    value: function setSpeed(speed) {
      this.speed = speed;
      return this;
    }

    /**
     * Sets the scroll easing function
     * 
     * @param {string} easing 
     * @returns {this}
     * @memberof Scroller
     */

  }, {
    key: 'setEasing',
    value: function setEasing(easing) {
      this.easing = easing;
      return this;
    }

    /**
     * Sets the scroll to
     * 
     * @param {Element|number} to 
     * @returns {this}
     * @memberof Scroller
     */

  }, {
    key: 'to',
    value: function to(_to) {
      this.scrollTargetY = _to instanceof Element ? this.getNodeTop(_to) : _to;
      return this;
    }

    /**
     * Calcs the remainnig time
     * @private
     * @memberof Scroller
     */

  }, {
    key: 'calcTime',
    value: function calcTime() {
      this.time = Math.max(0.1, Math.min(Math.abs(this.scrollY - this.scrollTargetY) / this.speed, 0.8));
    }

    /**
     * Gets node offsetTop
     * @private
     * @param {Element} node 
     * @returns {number} node's offsetTop
     * @memberof Scroller
     */

  }, {
    key: 'getNodeTop',
    value: function getNodeTop(node) {
      return node.offsetTop;
    }

    /**
     * 
     * @private
     * @param {any} distance 
     * @memberof Scroller
     */

  }, {
    key: 'move',
    value: function move(distance) {
      if (this.element === window) {
        this.element.scrollTo(0, distance);
      } else {
        this.element.scrollTop = distance;
      }
    }

    /**
     * 
     * @private
     * @memberof Scroller
     */

  }, {
    key: 'calcScrollY',
    value: function calcScrollY() {
      this.scrollY = this.element === window ? this.element.scrollY : this.element.scrollTop;
    }
  }, {
    key: 'checkReady',
    value: function checkReady() {
      if (this.element === window) {
        return 'scrollTo' in this.element;
      } else {
        return 'scrollTop' in this.element;
      }
    }

    /**
     * Scroll
     * 
     * @param {function} [onSuccess=() => {}] callback function when finish to scroll
     * @param {function} [onFailure=() => {}] callback function when failed to scroll
     * @memberof Scroller
     */

  }, {
    key: 'scroll',
    value: function scroll() {
      var _this = this;

      var onSuccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var onFailure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (this.attempts > 5) {
        return;
      }
      if (!this.checkReady()) {
        setTimeout(this.scroll(onSuccess, onFailure), 1 + this.attempts * 50);
        this.attempts = this.attempts + 1;
        return;
      }
      this.attempts = 0;
      this.calcTime();
      this.calcScrollY();
      var currentTime = 0;
      var tick = function tick() {
        currentTime += 1 / 60;

        var p = currentTime / _this.time;
        var t = easingEquations[_this.easing](p);

        if (p < 1) {
          requestAnimationFrame(tick);
          _this.move(_this.scrollY + (_this.scrollTargetY - _this.scrollY) * t);
        } else {
          _this.move(_this.scrollTargetY);
          onSuccess();
        }
      };
      tick();
    }
  }]);
  return Scroller;
}();

return Scroller;

})));
