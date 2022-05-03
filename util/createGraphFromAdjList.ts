import { Edge, Node } from 'react-graph-vis';
import makeNode from './makeNode';

export default function createGraphFromAdjList(matrixStr: string) {
  try {
    const adjList: number[][] = JSON.parse(matrixStr);
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    for (let i = 0; i < adjList.length; i++) {
      nodes.push(makeNode(i));
      for (const neigh of adjList[i]) edges.push({ from: i, to: neigh });
    }

    return { nodes, edges };
  } catch {
    return { nodes: [], edges: [] };
  }
}
