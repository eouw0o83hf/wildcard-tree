import Node from './node';

const wildcardTree = inputs => {
  const root = new Node();

  (inputs || [])
    .filter(Boolean)
    .map(a => a.trim())
    .filter(Boolean)
    .map(a => a.toUpperCase())
    .forEach(a => root.add(a));

  return root;
};

export default wildcardTree;
