'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(num) {
    if (num === undefined) {
      const temp = totalSum;

      totalSum = 0;

      return temp;
    }

    totalSum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
