/**
 * @param {number[]} A
 * @return {number}
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array
 */
 
 
var repeatedNTimes_s1 = function(A) { //84 ms 36.7 MB
    var i = 0;
    while (i<A.length+1) {
      B = A.slice(1);
      el = A.shift();
      if (B.includes(el) == true) {
        return el;
        break
      }
      else {
        A = B;
        i ++;
      }
    }
};

var repeatedNTimes_s2 = function(A) { //64 ms	36.4 MB
    var i = 0;
    var B = [];
    for (var i=0;i<A.length;i++) {
        if (B.includes(A[i]) == true) {
            return A[i];
            break;
        }
        else {
            B.push(A[i]);
        }
    }
};
