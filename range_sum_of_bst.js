/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * https://leetcode.com/problems/range-sum-of-bst
 */


var rangeSumBST_recursion = function(root, L, R) {
    let sum = 0;
    if (root != null) {
        if(root.val >=L && root.val <= R) {
        sum += root.val;
        }
        if(root.val < R){
            sum += rangeSumBST(root.right,L,R);
        }
        if(root.val > L){
            sum += rangeSumBST(root.left,L,R);
        }
    }
    else {
        return 0
    }
    return sum
};

var rangeSumBST_iteration = function(root, L, R) {
    let sum = 0;
    var stack = [];
    stack.push(root);
    while(stack && stack.length){
        var node = stack.pop();
        if(node != null) {
            if(node.val >= L && node.val <=R){
                sum += node.val
            }
            if(node.val < R){
                stack.push(node.right)
            }
            if(node.val > L){
                stack.push(node.left)
            }
        }
    }
    return sum
};
