/**
 * @param {string} moves
 * @return {boolean}
 * https://leetcode.com/problems/robot-return-to-origin
 */
var judgeCircle = function(moves) {
    var x=0; var y=0;
    for (m of moves) {
        if(m=="R"){
            x ++;
        }
        if(m=="L"){
            x --;
        }
        if(m=="U"){
            y ++;
        }
        if(m=="D"){
            y --;
        }
    }
    return x==0 && y==0;
};
