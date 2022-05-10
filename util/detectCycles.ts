import { Edge, Node } from 'react-graph-vis';

interface AdjMap {
  [key: string]: string[];
}

interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export default function detectCycles({ nodes, edges }: Graph) {
  const dfs = (node: string, prev: string, path: string[]) => {
    path.push(node);
    if (finished.has(node)) return;
    if (visited[node] !== undefined) {
      //cycle found
      const cycleStart = visited[node];
      path.slice(cycleStart).forEach((node) => cycleNodes.add(node));
      return;
    }
    visited[node] = path.length - 1;
    if (adjMap[node])
      adjMap[node].forEach((neigh) => {
        if (neigh !== prev) dfs(neigh, node, path);
      });
    finished.add(node);
  };

  const cycleNodes = new Set();
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
  edges.forEach((edge) => {
    const from = String(edge.from);
    const to = String(edge.to);

    if (cycleNodes.has(from) && cycleNodes.has(to)) {
      edge.color = 'red';
    }
  });

  return { nodes, edges };
}
