'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var thermometer = require('thermometer')
var dispatchEvent = require('dispatch-event')
var touchEvent = require('./')

test(function (t) {
  t.plan(1)

  var render = thermometer.createComponent(Component)
  render({ onMove: onMove }, function (state, element, done) {
    dispatchEvent(element, 'touchmove', {
      // use an array-like object to simulate a browser
      touches: {
        0: {
          clientX: 10,
          clientY: 20
        },
        length: 1
      }
    })
    done()
  })

  function onMove (data) {
    t.deepEqual(data, {
      foo: 'bar',
      touches: [
        {
          client: { x: 10, y: 20 }
        }
      ]
    })
  }
})

function Component (data) {
  return function () {
    return data
  }
}
Component.render = function render (state) {
  return h('div', {
    'ev-touchmove': touchEvent.move(state.onMove, {
      foo: 'bar'
    })
  })
}
