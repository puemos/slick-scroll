import easingEquations from './easingEquations'

class Scroller {
  constructor (element) {
    this.element = element
    this.scrollTargetY = 0
    this.speed = 500
    this.easing = 'easeOutSine'
    this.scrollY = this.element.scrollY
  }
  speed (speed) {
    this.speed = speed
    return this
  }
  easing (easing) {
    this.easing = easing
    return this
  }
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
  scroll (cb = () => {}) {
    this.scrollY = this.element.scrollTop
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
