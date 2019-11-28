const wildcardTree = inputs => {
  const sanitized = (inputs || [])
    .filter(Boolean)
    .map(a => a.trim())

    .filter(Boolean)
    .map(a => a.toUpperCase());

  const root = [];
  for (let i = 0; i < sanitized.length; ++i) {
    const index = sanitized[i].charCodeAt(0);
    if (!root[index]) {
      root[index] = [];
    }
    root[index].push(sanitized[i]);
  }

  return root;
};

export default wildcardTree;
