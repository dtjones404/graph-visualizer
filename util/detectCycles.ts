import { Edge, Node } from 'react-graph-vis';

interface AdjMap {
  [key: string]: string[];
}

interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export default function detectCycles({ nodes, edges }: Graph) {
  const dfs = (node: string, prev: string, visited: Set<string>) => {
    if (finished.has(node)) return;
    if (visited.has(node)) {
      //cycle found
      visited.forEach((node) => cycleNodes.add(node));
      return;
    }
    visited.add(node);
    if (adjMap[node])
      adjMap[node].forEach((neigh) => {
        if (neigh !== prev) dfs(neigh, node, visited);
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

  const finished = new Set();
  nodes.forEach((node) => {
    const visited: Set<string> = new Set();
    dfs(String(node.id), '', visited);
  });

  edges.forEach((edge) => {
    const from = String(edge.from);
    const to = String(edge.to);

    if (cycleNodes.has(from) && cycleNodes.has(to)) {
      edge.color = 'red'; //mark nodes which are part of cycle
    }
  });

  return { nodes, edges };
}
