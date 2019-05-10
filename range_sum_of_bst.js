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


var rangeSumBST = function(root, L, R) {
//recursive implementation
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
