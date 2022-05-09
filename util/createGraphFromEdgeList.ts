import { Edge, Node } from 'react-graph-vis';
import makeNode from './makeNode';

export default function createGraphFromEdgeList(matrixStr: string) {
  try {
    const edgeList: number[][] = JSON.parse(matrixStr);
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const nodeIds: Set<string> = new Set();

    for (const [a, b, cost] of edgeList) {
      const aId = String(a);
      const bId = String(b);

      for (const id of [aId, bId]) {
        if (!nodeIds.has(id)) {
          nodes.push(makeNode(id));
          nodeIds.add(id);
        }
      }
      const edge: Edge = { from: a, to: b };
      if (cost !== undefined) edge.label = String(cost);
      edges.push(edge);
    }

    return { nodes, edges };
  } catch {
    return { nodes: [], edges: [] };
  }
}
