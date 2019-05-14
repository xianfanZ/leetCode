/**
 * @param {string} S
 * @return {number[]}
 * https://leetcode.com/problems/di-string-match
 */
var diStringMatch = function(S) {
    var i = 0;
    var j = S.length;
    var res = []
    for (ch of S) {
        if(ch == "I") {
            res.push(i);
            i++;
        }
        else if(ch == "D") {
            res.push(j);
            j--;
        }
    }
    res.push(i);
    return res
};
