import Graph from 'react-graph-vis';
import GRAPH_OPTIONS from '../constants/graphOptions';
import { Node, Edge } from 'vis';
import GraphInput from './GraphInput';
import { useState } from 'react';
import createGraphFromAdjMatrix from '../util/createGraphFromAdjMatrix';

export default function GraphWindow() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphInputData(e.target.value);
  };

  const [graphInputData, setGraphInputData] = useState('[]');

  return (
    <div className="graph-container">
      <GraphInput graphInputData={graphInputData} handleChange={handleChange} />
      <Graph
        graph={createGraphFromAdjMatrix(graphInputData)}
        options={GRAPH_OPTIONS}
        events={{}}
      />
    </div>
  );
}
