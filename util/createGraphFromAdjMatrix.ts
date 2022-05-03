import { Edge, Node } from 'react-graph-vis';
import makeNode from './makeNode';

export default function createGraphFromAdjMatrix(matrixStr: string) {
  try {
    const matrix: number[][] = JSON.parse(matrixStr);
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    for (let i = 0; i < matrix.length; i++) {
      nodes.push(makeNode(i));

      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && matrix[i][j]) edges.push({ from: i, to: j });
      }
    }

    return { nodes, edges };
  } catch {
    return { nodes: [], edges: [] };
  }
}
