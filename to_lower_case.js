/**
 * @param {string} str
 * @return {string}
 * https://leetcode.com/problems/to-lower-case
 */
var toLowerCase = function(str) {
    var newStr = "";
    for (c of str) {
      c_code = c.charCodeAt(0);
      if(c_code >= 65 && c_code < 91) {
        newStr += String.fromCharCode(c_code+32);
      }
      else {
        newStr += c;
      }
    }
    return newStr
};

// another solution from @cascio (same logic with mine)
var toLowerCase = function(str) {
  return str.split("")
            .map((c) => {
              const u = c.charCodeAt(0);
              return u >= 65 && u <= 90 ? String.fromCharCode(u + 32) : c
            })
            .join("")
};
