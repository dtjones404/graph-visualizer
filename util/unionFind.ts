export default class UnionFind {
  n: number;
  parents: number[];
  sizes: number[];
  numGroups: number;

  constructor(n: number) {
    this.n = n;
    this.parents = [];
    for (let i = 0; i < n; i++) this.parents[i] = i;
    this.sizes = new Array(n).fill(1);
    this.numGroups = n;
  }
  find(node: number) {
    if (node !== this.parents[node])
      this.parents[node] = this.find(this.parents[node]);

    return this.parents[node];
  }
  union(a: number, b: number) {
    let parentA = this.find(a);
    let parentB = this.find(b);

    if (parentA === parentB) return false;
    if (this.sizes[parentA] < this.sizes[parentB])
      [parentA, parentB] = [parentB, parentA];

    this.parents[parentB] = parentA;
    this.sizes[parentA] += this.sizes[parentB];
    this.numGroups--;
    return true;
  }
}
