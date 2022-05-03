import Graph from 'react-graph-vis';
import GRAPH_OPTIONS from '../constants/graphOptions';
import GraphInput from './GraphInput';
import { useState } from 'react';
import createGraphFromAdjMatrix from '../util/createGraphFromAdjMatrix';
import createGraphFromAdjList from '../util/createGraphFromAdjList';

interface InputTypesToFunctions {
  [key: string]: Function;
}
const INPUT_TYPES_TO_FUNCTIONS: InputTypesToFunctions = {
  adjList: createGraphFromAdjList,
  adjMatrix: createGraphFromAdjMatrix,
};

export default function GraphWindow() {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphInputData(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value);
  };

  const [graphInputData, setGraphInputData] = useState('[]');
  const [inputType, setInputType] = useState('adjList');

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
