import { Edge, Node } from 'react-graph-vis';

interface AdjMap {
  [key: string]: NeighToEdge;
}

interface NeighToEdge {
  [key: string]: Edge;
}

interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export default function detectCycles({ nodes, edges }: Graph) {
  const dfs = (node: string, prev: string, path: Edge[]) => {
    if (finished.has(node)) return;
    if (visited[node] !== undefined) {
      //cycle found
      const cycleStart = visited[node];
      path.slice(cycleStart).forEach((edge) => (edge.color = 'red'));
      return;
    }
    visited[node] = path.length;
    if (adjMap[node]) {
      for (const [neigh, edge] of Object.entries(adjMap[node])) {
        if (neigh === prev) continue;
        path.push(edge);
        dfs(neigh, node, path);
        path.pop();
      }
    }
    finished.add(node);
  };

  const createAdjMapFromEdges = (edges: Edge[]) => {
    const adjMap: AdjMap = {};
    for (const edge of edges) {
      const from = String(edge.from);
      const to = String(edge.to);

      if (!adjMap[from]) adjMap[from] = {};
      adjMap[from][to] = edge;
    }
    return adjMap;
  };

  const adjMap = createAdjMapFromEdges(edges);
  const visited: { [key: string]: number } = {};
  const finished = new Set();

  nodes.forEach((node) => {
    dfs(String(node.id), '', []);
  });

  return { nodes, edges };
}
