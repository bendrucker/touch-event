# touch-event [![Build Status](https://travis-ci.org/bendrucker/touch-event.svg?branch=master)](https://travis-ci.org/bendrucker/touch-event)

> Touch events for value-event


## Install

```
$ npm install --save touch-event
```


## Usage

```js
var touchEvent = require('touch-event')
var h = require('virtual-dom/h')

h('div', {
  'ev-touchmove': touchEvent.move(moveHandler)
})
```

## API

#### `touchEvent.start(handler, [data])` -> `function`
#### `touchEvent.end(handler, [data])` -> `function`
#### `touchEvent.move(handler, [data])` -> `function`
#### `touchEvent.cancel(handler, [data])` -> `function`

##### handler

*Required*  
Type: `function`

The handler to call when the element receives the specified touch event.

##### data

Type: `object`  
Default: `{}`

Data to pass to the handler when the element is scrolled. This will be extended with an array of `touches` objects. Touch data will be nested:

```js
[
  {
    client: {x, y}
    //...
  }
]
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
