import { Edge, Node } from 'react-graph-vis';

interface AdjMap {
  [key: string]: string[];
}

interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export default function detectCycles({ nodes, edges }: Graph) {
  const dfs = (node: string, prev: string, path: string[][]) => {
    if (finished.has(node)) return;
    if (visited[node] !== undefined) {
      //cycle found
      const cycleStart = visited[node];
      path
        .slice(cycleStart)
        .forEach((edge) => cycleEdges.add(JSON.stringify(edge)));
      return;
    }
    visited[node] = path.length;
    if (adjMap[node]) {
      for (const neigh of adjMap[node]) {
        if (neigh === prev) continue;
        path.push([node, neigh]);
        dfs(neigh, node, path);
        path.pop();
      }
    }
    finished.add(node);
  };

  const cycleEdges = new Set();
  const adjMap: AdjMap = {};
  for (const edge of edges) {
    const from = String(edge.from);
    const to = String(edge.to);

    if (!adjMap[from]) adjMap[from] = [];
    adjMap[from].push(to);
  }

  const visited: { [key: string]: number } = {};
  const finished = new Set();
  nodes.forEach((node) => {
    dfs(String(node.id), '', []);
  });

  //mark nodes which are part of cycle
  console.log(cycleEdges);
  edges.forEach((edge) => {
    const from = String(edge.from);
    const to = String(edge.to);

    if (cycleEdges.has(JSON.stringify([from, to]))) {
      edge.color = 'red';
    }
  });

  return { nodes, edges };
}
