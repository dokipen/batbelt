// # BatBelt #
//
// ![logo](http://static.embed.ly/batbelt/logo.gif "BatBelt")
//
// Helps prefent an untimely death.

var H = require('hashish')

// # flatten #
//
// flatten an array.
//
// ex. flatten([[1,2],[3],4,5]) -> [1,2,3,4,5]

function flatten(array) {
  var result = [], self = arguments.callee;
  array.forEach(function(item) {
    Array.prototype.push.apply(
      result,
      Array.isArray(item) ? self(item) : [item] ) } )
  return result }


// # listify #
//
// If it's not an Array, cast it to one
//
// ex. listify("bob") -> ["bob"]
//     listify(["bob"]) -> ["bob"]

function listify(obj) {
  if (!Array.isArray(obj) {
    return [obj] }
  else {
    return obj } }

// # times #
//
// Make an Array of str
//
// ex. times('?', 4) -> ['?', '?', '?', '?']

function times(str, n) {
  return Array(n+1).join('?').split('').replace(/\?/g, str) }

// # round #
//
// Round down to arbitrary increment

function round(number, increment) {
  number = Number(number)
  increment = Number(increment)
  return Math.round(number - number % increment) }

// # NOOP #

function NOOP() {}

// # merge #
//
// Merge two objects. The second can be null.

function merge(first, second) {
  return H(first).update(second||{}).end }
