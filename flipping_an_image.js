/**
 * @param {number[][]} A
 * @return {number[][]}
 * https://leetcode.com/problems/flipping-an-image
 */
var flipAndInvertImage = function(A) {
    var B = [];
    for (var a of A) {
        var b = [];
        for (var i=a.length-1;i>=0;i--){
            if (a[i] == 1) {
                b.push(0);
            }
            else {
                b.push(1);
            }
        }
        B.push(b)
    }
    return B
};
