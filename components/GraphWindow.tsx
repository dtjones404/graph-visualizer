import Graph from 'react-graph-vis';
import GRAPH_OPTIONS from '../constants/graphOptions';

const graph = {
  nodes: [],
  edges: [],
};

export default function GraphWindow() {
  return <Graph graph={graph} options={GRAPH_OPTIONS} events={{}} />;
}
