class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  const midIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[midIndex]);

  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return root;
}

// Example usage
const nums1 = [-10, -3, 0, 5, 9];
const bst1 = sortedArrayToBST(nums1);
console.log(bst1); // Output: [0,-3,9,-10,null,5]

const nums2 = [1, 3];
const bst2 = sortedArrayToBST(nums2);
console.log(bst2); // Output: [3,1]
