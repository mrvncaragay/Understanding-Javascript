/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let stones = 0;

  for (let char of S) {
    if (J.includes(char)) {
      stones += 1;
    }
  }

  return stones;
};

let J = 'z';
let S = 'ZZ';

console.log(numJewelsInStones(J, S));
