/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]



Constraints:

    1 <= preorder.length <= 3000
    inorder.length == preorder.length
    -3000 <= preorder[i], inorder[i] <= 3000
    preorder and inorder consist of unique values.
    Each value of inorder also appears in preorder.
    preorder is guaranteed to be the preorder traversal of the tree.
    inorder is guaranteed to be the inorder traversal of the tree.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//  var buildTree = function(preorder, inorder) {
//   function helper(p1, p2, i1, i2) {
//       if (p1 > p2 || i1 > i2) return null;
//       var value = preorder[p1],
//           index = inorder.indexOf(value),
//           nLeft = index - i1,
//           root  = new TreeNode(value);
//       root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
//       root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);
//       return root;
//   }
//   return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };

//optimized rewrite:
const buildTree = (preorder, inorder, p1 = 0, p2 = preorder.length - 1, i1 = 0, i2 = inorder.length - 1) => {
  if (p1 > p2 || i1 > i2) return null;

  const value = preorder[p1],
        index = inorder.indexOf(value),
        nLeft = index - i1;

  return new TreeNode(
    value,
    buildTree(preorder, inorder, p1 + 1, p1 + nLeft, i1, index - 1),
    buildTree(preorder, inorder, p1 + nLeft + 1, p2, index + 1, i2),
  );
};