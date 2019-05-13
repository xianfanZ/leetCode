/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * https://leetcode.com/problems/hamming-distance/submissions/
 */
var hammingDistance = function(x, y) {
    var z = x^y;
    if(z == 0){
        var cpt = 0;
    }
    else {
        var cpt = 1;
    }    
    while(z > 1) {
        if (z%2 == 1){
            cpt ++;
        }
        z = z >> 1 // much faster than z = parseInt(z/2);
    }
    return cpt;
};
