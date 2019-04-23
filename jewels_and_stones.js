/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    J_list = J.split("")
    var cpt = 0
    for (var i=0; i<J_list.length; i++) {
        cpt += S.split(J_list[i]).length - 1
    }
    return cpt
};
