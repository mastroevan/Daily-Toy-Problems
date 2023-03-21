/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    const stack = [];
    if (root == null) return result;
    stack.push(root);
    while (stack.length > 0) {
        let current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left)
    }
    return result;
};