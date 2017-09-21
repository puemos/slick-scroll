import easingEquations from './easingEquations'

/**
 * @typedef Options
 * @property {Element} [element=window]
 * @property {number} [speed=500] 
 * @property {string} [easing=easeOutSine] 
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
  constructor (options = {}) {
    this.element = options.element || window
    this.speed = options.speed || 500
    this.easing = options.easing || 'easeOutQuint'

    this.attepmts = 0
    this.scrollTargetY = 0
    this.scrollY = this.element.scrollY
  }
  /**
   * Sets the scroll speed
   * 
   * @param {number} speed 
   * @returns {this}
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
   * @returns {this}
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
   * @returns {this}
   * @memberof Scroller
   */
  to (to) {
    this.scrollTargetY = to instanceof Element ? this.getNodeTop(to) : to
    return this
  }

  /**
   * Calcs the remainnig time
   * 
   * @memberof Scroller
   */
  calcTime () {
    this.time = Math.max(0.1, Math.min(Math.abs(this.scrollY - this.scrollTargetY) / this.speed, 0.8))
  }

  /**
   * Gets node offsetTop
   * 
   * @param {Element} node 
   * @returns {number} node's offsetTop
   * @memberof Scroller
   */
  getNodeTop (node) {
    return node.offsetTop
  }

  /**
   * Scroll
   * 
   * @param {function} [onSuccess=() => {}] callback function when finish to scroll
   * @param {function} [onFailure=() => {}] callback function when failed to scroll
   * @memberof Scroller
   */
  scroll (onSuccess = () => {}, onFailure = () => {}) {
    if (this.attepmts > 5) {
      return
    }
    if (!this.element.scrollTo) {
      this.attepmts = this.attepmts + 1
      setTimeout(this.scroll(onSuccess, onFailure), 1)
      return
    }
    this.attepmts = 0
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
        onSuccess()
      }
    }
    tick()
  }
}

export default Scroller
