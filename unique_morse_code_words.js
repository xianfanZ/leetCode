/**
 * @param {string[]} words
 * @return {number}
 * https://leetcode.com/problems/unique-morse-code-words
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    var words_morse = [];
    for (w of words) {
      w_morse = "";
      for (c of w) {
        w_morse += morseCode[alphabet.indexOf(c)];
      }
      if (!words_morse.includes(w_morse)) {
           words_morse.push(w_morse);
      }  
    }
    return words_morse.length
};
