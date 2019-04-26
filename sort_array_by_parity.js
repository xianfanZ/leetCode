/**
 * @param {number[]} A
 * @return {number[]}
 * https://leetcode.com/problems/sort-array-by-parity
 */
 
var sortArrayByParity = function(A) {
    var even = [];
    var odd = [];
    for (var el of A) {
      if(el == 0) {
        even.push(0);
      }
      else if (el%2 == 0) {
        even.push(el);
      }
      else {
        odd.push(el);
      }
    }
    return even.concat(odd)
};
