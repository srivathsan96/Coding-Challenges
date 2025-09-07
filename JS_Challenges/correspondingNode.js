// Source: https://www.algoexpert.io/frontend/coding-questions/corresponding-node

/*
Corresponding Node

Write a correspondingNode function that takes in three DOM Elements. The first two parameters represent the root nodes of two different DOM trees. The third parameter is a node within the first DOM tree.

tree1 and tree2 have identical structures, meaning that every DOM node in tree1 has the same number of children as the corresponding DOM node in tree2.

The correspondingNode function should return the node in tree2 that corresponds to node1 from tree1. For simplicity, you can assume these trees always have the same structure and thus there is always a corresponding node.

Sample Usage
const dom1 = document.createElement('div');
dom1.innerHTML = `
  <main>
    <h1>Heading</h1>
    <div>
      <h2>test1</h2>
      <p>test2 <em>emphasis</em></p>
    </div>
  </main>
`;

const dom2 = document.createElement('main');
dom2.innerHTML = `
  <article>
    <h1>Heading2</h1>
    <section>
      <img src="img.png" alt="image" />
      <h3>test5 <strong>strong</strong></h3>
    </section>
  </article>
`;

correspondingNode(dom1, dom2, dom1); // dom2
correspondingNode(dom1, dom2, dom1.querySelector('h2')); // <img src="img.png" alt="image" />
correspondingNode(dom1, dom2, dom1.querySelector('em')); // <strong>strong</strong>
*/

// Solution 1:
// O(N) T, where N is the number of nodes in the trees.
// O(H) S, where H is the height of the trees.

function correspondingNode(tree1, tree2, node1) {
  // Write your code here.
  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack1.length > 0) {
    const curr1 = stack1.pop();
    const curr2 = stack2.pop();

    if (curr1 === node1) return curr2;

    stack1.push(...curr1.children);
    stack2.push(...curr2.children);
  }
}

// Solution 2:
// O(h1 * n) T, where `h1` is the height of `tree1` and `n` is the maximum number of children per node.
// O(h1) S

function correspondingNode2(tree1, tree2, node1) {
  // Write your code here.
  const path = [];

  let currNode = node1;
  while (currNode !== tree1) {
    const parent = currNode.parentNode;
    const currIndex = Array.from(parent.children).indexOf(currNode);
    path.push(currIndex);
    currNode = parent;
  }

  return path.reduceRight((foundNode, childIndex) => {
    return foundNode.children[childIndex];
  }, tree2);
}
