/*
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.



Example 1:

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: inorder = [-1], postorder = [-1]
Output: [-1]



Constraints:

    1 <= inorder.length <= 3000
    postorder.length == inorder.length
    -3000 <= inorder[i], postorder[i] <= 3000
    inorder and postorder consist of unique values.
    Each value of postorder also appears in inorder.
    inorder is guaranteed to be the inorder traversal of the tree.
    postorder is guaranteed to be the postorder traversal of the tree.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

//DFS SOLUTION
//  var buildTree = function(inorder, postorder) {
//   var callDFS = arr => {
//     if (!arr.length) return null;
//     const val = postorder.pop();
//     const idx = arr.indexOf(val);
//     const node = new TreeNode(val);
//     node.right = callDFS(arr.slice(idx + 1));
//     node.left = callDFS(arr.slice(0, idx));
//     return node;
//   }
//   return callDFS(inorder);
// }


//Hash Map Solution, Optimized 
var buildTree = function(inorder, postorder) {
  const map = new Map();

  for(let i = 0; i < inorder.length; i++) {
      map.set(inorder[i], i);
  }

  function callDFS(start, end) {
      if(start > end) return null;
      const val = postorder.pop();
      const idx = map.get(val);
      const node = new TreeNode(val);
      node.right = callDFS(idx+1, end);
      node.left = callDFS(start, idx-1);
      return node;
  }

  return callDFS(0, inorder.length-1);
};
