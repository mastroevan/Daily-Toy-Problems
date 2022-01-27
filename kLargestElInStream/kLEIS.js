/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Implement KthLargest class:
  KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
  int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

Example 1:
  Input
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
  Output
    [null, 4, 5, 5, 8, 8]
  Explanation
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8

Constraints:
  1 <= k <= 104
  0 <= nums.length <= 104
  -104 <= nums[i] <= 104
  -104 <= val <= 104
  At most 104 calls will be made to add.
  It is guaranteed that there will be at least k elements in the array when you search for the kth element.
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
  this.k = k;
  this.nums = [];
  while (nums.length) {
    this.add(nums.pop());
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const idx = binarySearch(this.nums, val);
  //insert element
  this.nums.splice(idx, 0, val);
  //removes element furthest to left if window is > k
  if (this.nums.length === this.k + 1) {
    this.nums.shift();
  }
  //the first element is the element at k
  //and if theres less than k elemenets, return closest
  return this.nums[0];
};

const binarySearch = (arr, term, comparator = (a, b) => a - b) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let comp = comparator(arr[mid], term);
    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return low;
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */