class Node {
  constructor(depth) {
    this.depth = depth || 0;
    this.children = [];
  }

  add(item) {
    if (item.length < this.depth) {
      throw `Provided item ${item} shorter than current depth ${this.depth}. Something is wrong.`;
    } else if (item.length === this.depth) {
      this.value = item;
    } else {
      const key = item.charCodeAt(this.depth);
      if (!this.children[key]) {
        this.children[key] = new Node(this.depth + 1);
      }
      this.children[key].add(item);
    }
  }

  find(search) {
    let result = [];

    if (this.value && this.depth === search.length) {
      result.push(this.value);
    }

    if (search.length > this.depth) {
      const currentChar = search.toUpperCase().charAt(this.depth);
      if (currentChar === '.') {
        this.children
          .filter(Boolean)
          .forEach(a => result = result.concat(a.find(search)));
      } else {
        const index = currentChar.charCodeAt(0);
        if (this.children[index]) {
          result = result.concat(this.children[index].find(search));
        }
      }
    }

    return result;
  }
}

export default Node;
