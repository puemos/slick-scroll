## Classes

<dl>
<dt><a href="#Scroller">Scroller</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Options">Options</a></dt>
<dd></dd>
</dl>

<a name="Scroller"></a>

## Scroller
**Kind**: global class  

* [Scroller](#Scroller)
    * _instance_
        * [.setSpeed(speed)](#Scroller+setSpeed) ⇒ <code>this</code>
        * [.setEasing(easing)](#Scroller+setEasing) ⇒ <code>this</code>
        * [.to(to)](#Scroller+to) ⇒ <code>this</code>
        * [.calcTime()](#Scroller+calcTime)
        * [.getNodeTop(node)](#Scroller+getNodeTop) ⇒ <code>number</code>
        * [.scroll([onSuccess], [onFailure])](#Scroller+scroll)
    * _static_
        * [.Scroller](#Scroller.Scroller)
            * [new Scroller(options)](#new_Scroller.Scroller_new)

<a name="Scroller+setSpeed"></a>

### scroller.setSpeed(speed) ⇒ <code>this</code>
Sets the scroll speed

**Kind**: instance method of [<code>Scroller</code>](#Scroller)  

| Param | Type |
| --- | --- |
| speed | <code>number</code> | 

<a name="Scroller+setEasing"></a>

### scroller.setEasing(easing) ⇒ <code>this</code>
Sets the scroll easing function

**Kind**: instance method of [<code>Scroller</code>](#Scroller)  

| Param | Type |
| --- | --- |
| easing | <code>string</code> | 

<a name="Scroller+to"></a>

### scroller.to(to) ⇒ <code>this</code>
Sets the scroll to

**Kind**: instance method of [<code>Scroller</code>](#Scroller)  

| Param | Type |
| --- | --- |
| to | <code>Element</code> \| <code>number</code> | 

<a name="Scroller+calcTime"></a>

### scroller.calcTime()
Calcs the remainnig time

**Kind**: instance method of [<code>Scroller</code>](#Scroller)  
<a name="Scroller+getNodeTop"></a>

### scroller.getNodeTop(node) ⇒ <code>number</code>
Gets node offsetTop

**Kind**: instance method of [<code>Scroller</code>](#Scroller)  
**Returns**: <code>number</code> - node's offsetTop  

| Param | Type |
| --- | --- |
| node | <code>Element</code> | 

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


| Param | Type |
| --- | --- |
| options | [<code>Options</code>](#Options) | 

<a name="Options"></a>

## Options
**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| element | <code>Element</code> | <code>window</code> | 
| speed | <code>number</code> | <code>500</code> | 
| easing | <code>string</code> | <code>&quot;easeOutSine&quot;</code> | 

