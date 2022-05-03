import { Node } from 'react-graph-vis';

export default function makeNode(nodeId: number): Node {
  return {
    id: nodeId,
    font: {
      color: 'black',
      size: 22,
      face: 'robato',
      strokeWidth: 3,
      strokeColor: 'white',
    },
    label: String(nodeId),
    shadow: {
      enabled: true,
    },
  };
}
