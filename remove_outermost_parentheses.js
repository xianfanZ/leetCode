/**
 * @param {string} S
 * @return {string}
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */
var removeOuterParentheses = function(S) {
    cpt = 0;
    S_res = ""
    for (const p of S) { 
      if (p == "(") {
        cpt++;
      }
      else {
        cpt--;
      }
      if (!(cpt == "1" && p == "(") && !(cpt == "0" && p == ")")) {
        S_res += p
      }
    }
    return S_res
};
