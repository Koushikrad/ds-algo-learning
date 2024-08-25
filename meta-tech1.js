Write a function that returns true if a given string is a palindrome excluding capitalisation and punctuation mark.
eg: "Race car!"
    "A man, a plan, a canal, Panama!"

function isPalindrome(str) {
  if(!str) return false;

 // str = str.lowercase().match([^a-zA-Z0-9]);
  let modifiedStr = '';

  for(char in str.lowercase()) { //race car!
    let isMatch = char.match(/[^a-z0-9]);
    if(isMatch) {
      modifiedStr += char //cec
    }
  }; //O(n)

  if(!modifiedStr) return false;

  function _checkmodifiedString(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str[-1]) { // r === r
      return _checkmodifiedString(str.splice(1,-1)); //_checkmodifiedString('e')
    }

    return false;
  }


  return _checkmodifiedString(modifiedStr)

}

O(m+n)
O(n)

Given the root of a binary tree containing integers, print each column from left to right, and within each column print the values from top to bottom.
Input:
      6
     / \
    3   4
   /   / \
  5   1   0
   \     /
    2   8
   / \
  9   7

Output:
5 9 3 2 6 1 7 4 8 0

struct Node {
  int val
  Node left
  Node right
}
function printTree(root) {
  if(root === null) return [];
  var current = root;
  var resultArray = [];
  var maxBreadth = 0;
  var prevBreadth = 0;
  function traverse(root) {
      while(current.left) {
      current = current.left;
      maxBreadth++;
    }
    prevBreadth = maxBreadth;
    if(prevBreadth === maxBreadth) {

    }
    resultArray.push(current.val);
    maxBreadth = 0;
    
    if(current.right) {
       traverse(current.right)
      
    }
  }
  
  
}