import { Edge, Node } from 'react-graph-vis';
import makeNode from './makeNode';

export default function createGraphFromAdjMap(matrixStr: string) {
  try {
    const adjMap: number[][] = JSON.parse(matrixStr);
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const nodeIds: Set<string> = new Set();

    for (const [a, b] of Object.entries(adjMap)) {
      const aId = String(a);
      const bIds = b.map((neigh) => String(neigh));

      for (const id of [aId, ...bIds]) {
        if (!nodeIds.has(id)) {
          nodes.push(makeNode(id));
          nodeIds.add(id);
        }
      }

      for (const neigh of bIds) edges.push({ from: a, to: neigh });
    }

    return { nodes, edges };
  } catch {
    return { nodes: [], edges: [] };
  }
}
