var isSameTree = function(p, q) {
  if(!p.root || !q.root) return false;
  let visitedP = [],
  visiteQ = [];
  let isSame = true;
  function traverse(node, visited) {
      let root = node;
      visited.push(node);
      if(root.left) traverse(root.left)
      if(root.right) traverse(root.right)
  }

  traverse(p.root, visitedP);
  traverse(q.root, visitedQ);

  if(visitedP.length !== visitedQ.length) return false;
  for(let i=0; i<visitedP.length; i++) {
      if (vistedP[i] !== visitedQ[i]) {
          iSame = false;
          break;
      }
  }

  return isSame;
};

