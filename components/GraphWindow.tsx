import Graph from 'react-graph-vis';
import GRAPH_OPTIONS from '../constants/graphOptions';
import GraphInput from './GraphInput';
import { useState } from 'react';
import createGraphFromAdjMatrix from '../util/createGraphFromAdjMatrix';
import createGraphFromAdjList from '../util/createGraphFromAdjList';
import createGraphFromEdgeList from '../util/createGraphFromEdgeList';
import createGraphFromAdjMap from '../util/createGraphFromAdjMap';

interface InputTypesToFunctions {
  [key: string]: Function;
}
const INPUT_TYPES_TO_FUNCTIONS: InputTypesToFunctions = {
  adjList: createGraphFromAdjList,
  adjMatrix: createGraphFromAdjMatrix,
  edgeList: createGraphFromEdgeList,
  adjMap: createGraphFromAdjMap,
};

export default function GraphWindow() {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphInputData(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value);
    console.log(e.target.value);
  };

  const [inputType, setInputType] = useState('adjList');
  const [graphInputData, setGraphInputData] = useState(
    '[[1, 4], [0, 3, 4], [1, 3], [2, 4], [0, 1, 3]]'
  );

  return (
    <div className="graph-container">
      <GraphInput
        graphInputData={graphInputData}
        inputType={inputType}
        handleTypeChange={handleTypeChange}
        handleTextChange={handleTextChange}
      />
      <Graph
        graph={INPUT_TYPES_TO_FUNCTIONS[inputType](graphInputData)}
        options={GRAPH_OPTIONS}
        events={{}}
      />
    </div>
  );
}
