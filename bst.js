class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  contains(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              return true;
          }
      }
      return false;
  }

  BFS() {
    let queue = [this.root];
    let visited = [];
    let current = this.root;
    while(queue.length >= 1 && current != null) {
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        let node = queue.shift();
        visited.push(node);
        current = queue[0];
    }

    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let preorder = function(node) {
        visited.push(node);
        if (node.left) {
            preorder(node.left);
        } if (node.right) {
            preorder(node.right);
        }
    }
    preorder(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let postOrder = function(node) {
        if (node.left) {
            postOrder(node.left);
        } if (node.right) {
            postOrder(node.right);
        }
        visited.push(node);
    }
    postOrder(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let inOrder = function(node) {
        if (node.left) {
            inOrder(node.left);
        } 
        visited.push(node);

        if (node.right) {
            inOrder(node.right);
        }
    }
    inOrder(this.root);
    return visited;
  }
}

var isSameTree = function(p, q) {
    if(!p.root || !q.root) return false;
    let visitedP = [],
    visitedQ = [];
    let isSame = true;
    function traverse(node, visited) {
        let root = node;
        visited.push(node.value);
        if(root.left) traverse(root.left, visited)
        if(root.right) traverse(root.right, visited)
    }
  
    traverse(p.root, visitedP);
    traverse(q.root, visitedQ);
    console.log(visitedP,visitedQ);
    if(visitedP.length !== visitedQ.length) return false;
    for(let i=0; i<visitedP.length; i++) {
        if (visitedP[i] !== visitedQ[i]) {
            isSame = false;
            break;
        }
    }
  
    return isSame;
  };

//      10
//   5     13
// 2  7  11  16

//q: [7,11,16]
//v: [10,5,13,2,7,]

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.DFSInOrder().map((node) => node.value));

var treep = new BinarySearchTree();
var treeq = new BinarySearchTree();

treep.insert(1);
treeq.insert(1);

treep.insert(2);

treeq.insert(2);

treep.insert(3);

treeq.insert(3);

isSameTree(treep, treeq);




