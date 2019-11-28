# wildcard-tree

A JavaScript library for searching a large array of strings in a case-invariant fashion using any number of wildcard markers.

This package was written in support of [wordco.de](http://wordco.de) ([source](https://github.com/eouw0o83hf/wordco.de)).

## Use

### Initialize

```js
import wildcardTree from 'wildcard-tree'

const items = ['pulled', 'from', 'dictionary'];
const tree = wildcardTree(items);
```

### Search

```js
// Finds six-letter words starting with 'pu'
const firstResult = tree.find('pu....');

// Finds all three-letter words
const secondResult = tree.find('...');

// Finds four-letter words starting with 'a' and ending with 'l'
const thirdResult = tree.find('a..l');
```

## Contributing

Be sure to uptick `"version"` in `package.json` by one patch.
