'use strict'

var BaseEvent = require('value-event/base-event')
var Delegator = require('dom-delegator')
var extend = require('xtend')
var mapKeys = require('map-keys')
var split = require('split-camelcase')
var nest = require('nest-object')

var events = require('./events.json')

var delegator = Delegator()

module.exports = events.reduce(function (acc, event) {
  acc[event] = BaseEvent(handleTouch)
  return acc
}, {})

events.forEach(function (event) {
  delegator.listenTo('touch' + event)
})

function handleTouch (event, broadcast) {
  var data = extend({ touches: list(event._rawEvent.touches) }, this.data)
  broadcast(data)
}

function list (touches) {
  return Array.prototype.map.call(touches, formatTouch)
}

function formatTouch (touch) {
  touch = extend(touch)
  delete touch.target

  return nest(mapKeys(touch, function (value, key) {
    return split(key).join('.').toLowerCase()
  }))
}
