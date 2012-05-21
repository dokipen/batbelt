// # BatBelt #
//
// ![logo](http://static.embed.ly/batbelt/logo.gif "BatBelt")
//
// Helps prevent an untimely death.

var H = require('hashish')


// ****
// ## flatten ##
//
// flatten an array.
//
// _ex_ `flatten([[1,2],[3],4,5]) -> [1,2,3,4,5]`

function flatten(array) {
  var result = [], self = arguments.callee;
  array.forEach(function(item) {
    Array.prototype.push.apply(
      result,
      Array.isArray(item) ? self(item) : [item] ) } )
  return result }


// ****
// ## listify ##
//
// If it's not an Array, cast it to one
//
// _ex_ `listify("bob") -> ["bob"]`
//      `listify(["bob"]) -> ["bob"]`

function listify(obj) {
  if (!Array.isArray(obj)) {
    return [obj] }
  else {
    return obj } }


// ****
// ## times ##
//
// Make an Array of str
//
// _ex_ `times('?', 4) -> ['?', '?', '?', '?']`

function times(str, n) {
  return Array(n+1).join('?').split('').replace(/\?/g, str) }


// ****
// ## round ##
//
// Round down to arbitrary increment
//
// _ex_ `round(453, 10) -> 450`

function round(number, increment) {
  number = Number(number)
  increment = Number(increment)
  return Math.round(number - number % increment) }


// ****
// ## NOOP ##

function NOOP() {}


// ****
// ## merge ##
//
// Merge two objects. The second can be null.
//
// _ex_ `merge( {first: "default", second: "default"}
//           , {second: "set", third: "set"}) ->
//      {first: "default", second: "set", third: "set"}`

function merge(first, second) {
  return H(first).update(second||{}).end }


exports = module.exports =
  { flatten: flatten
  , listify: listify
  , times: times
  , round: round
  , NOOP: NOOP
  , merge: merge }
