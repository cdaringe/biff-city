/**
 * @module biff-city
 * @description biff all of the things
 */

var bc = {
  /**
   * @param {string} arg
   */
  biffCity (arg) {
    return '[BIFF CITY]: ' + (arg || 'b!')
  },
  waitForIt () {
    return new Promise(function _waitForIt (resolve) {
      return setTimeout(function __waitForIt () {
        return resolve(this.biffCity())
      }.bind(this), 1000)
    }.bind(this))
  }
}

for (var i in bc) bc[i] = bc[i].bind(bc)

module.exports = bc
