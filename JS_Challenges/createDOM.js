// Source: https://www.algoexpert.io/frontend/coding-questions/create-dom

/*
Category:
JavaScript

Create DOM

Write a createDom function that takes in a required root parameter, which is an object representation of a DOM tree's root node or a string representation of a text node.

If the root parameter is an object, then a DOM Element node is returned. This object will have one required property: type, which corresponds to the tag name of the element being created (e.g. "div"), as well as two optional properties: children and attributes. If children exists, it will be an array of objects in the same format as the root parameter. Each value in this array will be a child of the returned node, in the order of the array. Additionally, if a child is a string instead of an object, then that string should be used as text content. If attributes exists, it will be an object, with each key corresponding to an attribute name and each value corresponding to an attribute value. These attributes are each attributes of the node.

Sample Usage
createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your password',
  },
}); // <input class="my-input" type="password" placeholder="type your password" />

createDom({
  type: 'p',
  children: [
    'Hello ',
    {
      type: 'strong',
      children: ['World']
    },
  ]
}); // <p>Hello <strong>World</strong></p>
*/

function createDom(root) {
  // Write your code here.
  if(typeof root === 'string') {
    return document.createTextNode(root);
  }

  if(typeof root === 'object') {
    // create an element of given type
    let element = document.createElement(root.type);

    // check if attributes present
    if(root.attributes) {
      for(let [attributeName, value] of Object.entries(root.attributes)) {
        // set attribute
        element.setAttribute(attributeName, value);
      }
    }

    // check if 'children' is present
    if(root.children) {
      for(let child of root.children) {
        // append child directly if string, else the result of recursion
        element.append(typeof child === 'string' ? child : createDom(child));
      }
    }

    // return the element
    return element
  }
}

// Do not edit the line below.
exports.createDom = createDom;
