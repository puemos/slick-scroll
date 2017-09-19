import easingEquations from './easingEquations'

/**
 * @typedef Options
 * @type {bbject}
 * @property {Element} element 
 * @property {number} [speed=500] 
 * @property {string} [easing='easeOutSine'] 
 */

/**
 * @class Scroller
 */
class Scroller {
  /**
   * Creates an instance of Scroller.
   * @param {Options} options 
   * @memberof Scroller
   */
  constructor (options) {
    this.element = options.element || window
    this.speed = options.speed || 500
    this.easing = options.easing || 'easeOutSine'

    this.scrollTargetY = 0
    this.scrollY = this.element.scrollY
  }
  /**
   * Sets the scroll speed
   * 
   * @param {number} speed 
   * @returns 
   * @memberof Scroller
   */
  setSpeed (speed) {
    this.speed = speed
    return this
  }

  /**
   * Sets the scroll easing function
   * 
   * @param {string} easing 
   * @returns 
   * @memberof Scroller
   */
  setEasing (easing) {
    this.easing = easing
    return this
  }

  /**
   * Sets the scroll to
   * 
   * @param {Element|number} to 
   * @returns 
   * @memberof Scroller
   */
  to (to) {
    this.scrollTargetY = to instanceof Element ? this.getNodeTop(to) : to
    return this
  }

  calcTime () {
    this.time = Math.max(0.1, Math.min(Math.abs(this.scrollY - this.scrollTargetY) / this.speed, 0.8))
  }
  getNodeTop (node) {
    return node.offsetTop
  }

  /**
   * Scroll
   * 
   * @param {Function} [cb=() => {}] callback function when finished the scroll
   * @memberof Scroller
   */
  scroll (cb = () => {}) {
    this.scrollY = this.element === window ? this.element.scrollY : this.element.scrollTop
    this.calcTime()
    let currentTime = 0
    const tick = () => {
      currentTime += 1 / 60

      const p = currentTime / this.time
      const t = easingEquations[this.easing](p)

      if (p < 1) {
        requestAnimationFrame(tick)
        this.element.scrollTo(0, this.scrollY + (this.scrollTargetY - this.scrollY) * t)
      } else {
        this.element.scrollTo(0, this.scrollTargetY)
        cb()
      }
    }
    tick()
  }
}

export default Scroller
