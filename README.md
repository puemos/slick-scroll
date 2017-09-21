# slick-scroll

## Demos

[Demos](http://slick-scroll.surge.sh/)

## Credit:

@shunryu111 <http://stackoverflow.com/users/2630316/shunryu111>

## Based on:

<http://stackoverflow.com/a/26798337/5068410>

## install

```bash
npm install slick-scroll --save
```

## usage

```javascript
import Scroller from 'slick-scroll';
// OR
const Scroller = require('slick-scroll');

// window
const windowScroller = new Scroller({
    speed: 1000
})

// Container
const container = document.getElementById('rolling');

const containerScroller = new Scroller({
    element: container,
    speed: 1000
})

myScroller.to(500).scroll()
myScroller.to(500).setSpeed(700).scroll()
myScroller.to(500).setEasing('easeOutSine').scroll();
myScroller.to(500).setSpeed(700).setEasing('easeInOutSine').scroll();

// Element in the DOM
myScroller.to(element).scroll()
myScroller.to(element).speed(700).scroll()
myScroller.to(element).easing('easeInOutQuint').scroll();
myScroller.to(element).speed(700).easing('easeInOutQuint').scroll();

// Save the scroller and use whenever you need
const scrollToTop = myScroller.to(0).speed(700).easing('easeInOutQuint');
scrollToTop.scroll()

const menu = document.getElementById('menu');
const scrollToMenu = myScroller.to(menu).speed(700).easing('easeOutSine');
scrollToMenu.scroll()
```

## Options : <code>object</code>

**Kind**: global typedef
**Properties**

| Name    | Type                 | Default                      |
| ------- | -------------------- | ---------------------------- |
| element | <code>Element</code> | <code>window</code>          |
| speed   | <code>number</code>  | <code>500</code>             |
| easing  | <code>string</code>  | <code>"'easeOutSine'"</code> |

## Scroller

-   [Scroller](#Scroller)
    -   _instance_
        -   [.setSpeed(speed)](#Scroller+setSpeed) ⇒ <code>this</code>
        -   [.setEasing(easing)](#Scroller+setEasing) ⇒ <code>this</code>
        -   [.to(to)](#Scroller+to) ⇒ <code>this</code>
        -   [.calcTime()](#Scroller+calcTime)
        -   [.getNodeTop(node)](#Scroller+getNodeTop) ⇒ <code>number</code>
        -   [.scroll(\[cb\])](#Scroller+scroll)
    -   _static_
        -   [.Scroller](#Scroller.Scroller)
            -   [new Scroller(options)](#new_Scroller.Scroller_new)

<a name="Scroller+setSpeed"></a>

### scroller.setSpeed(speed) ⇒ <code>this</code>

Sets the scroll speed

**Kind**: instance method of [<code>Scroller</code>](#Scroller)

| Param | Type                |
| ----- | ------------------- |
| speed | <code>number</code> |

<a name="Scroller+setEasing"></a>

### scroller.setEasing(easing) ⇒ <code>this</code>

Sets the scroll easing function

**Kind**: instance method of [<code>Scroller</code>](#Scroller)

| Param  | Type                |
| ------ | ------------------- |
| easing | <code>string</code> |

<a name="Scroller+to"></a>

### scroller.to(to) ⇒ <code>this</code>

Sets the scroll to

**Kind**: instance method of [<code>Scroller</code>](#Scroller)

| Param | Type                                        |
| ----- | ------------------------------------------- |
| to    | <code>Element</code> \| <code>number</code> |

<a name="Scroller+scroll"></a>

### scroller.scroll([onSuccess], [onFailure])
Scroll

**Kind**: instance method of [<code>Scroller</code>](#Scroller)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [onSuccess] | <code>function</code> | <code>() =&gt; {}</code> | callback function when finish to scroll |
| [onFailure] | <code>function</code> | <code>() =&gt; {}</code> | callback function when failed to scroll |

<a name="Scroller.Scroller"></a>

### Scroller.Scroller

**Kind**: static class of [<code>Scroller</code>](#Scroller)
<a name="new_Scroller.Scroller_new"></a>

#### new Scroller(options)

Creates an instance of Scroller.

| Param   | Type                             |
| ------- | -------------------------------- |
| options | [<code>Options</code>](#Options) |
