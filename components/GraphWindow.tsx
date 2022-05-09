import Graph from 'react-graph-vis';
import GRAPH_OPTIONS from '../constants/graphOptions';
import GraphInput from './GraphInput';
import { useState } from 'react';
import createGraphFromAdjMatrix from '../util/createGraphFromAdjMatrix';
import createGraphFromAdjList from '../util/createGraphFromAdjList';
import createGraphFromEdgeList from '../util/createGraphFromEdgeList';
import createGraphFromAdjMap from '../util/createGraphFromAdjMap';
import GraphControlPanel from './GraphControlPanel';
import detectCycles from '../util/detectCycles';

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

  const handleHierarchicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHierarchical((prevState) => !prevState);
  };

  const handleRepulsionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepulsion(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value);
  };

  const [inputType, setInputType] = useState('adjList');
  const [graphInputData, setGraphInputData] = useState(
    '[[1, 4], [0, 3, 4], [1, 3], [2, 4], [0, 1, 3]]'
  );
  const [isHierarchical, setIsHierarchical] = useState(false);
  const [repulsion, setRepulsion] = useState('200');

  const options = JSON.parse(JSON.stringify(GRAPH_OPTIONS));
  options.layout.hierarchical.enabled = isHierarchical;
  options.physics.repulsion.springLength = +repulsion;

  return (
    <div className="graph-container">
      <GraphInput
        graphInputData={graphInputData}
        inputType={inputType}
        handleTypeChange={handleTypeChange}
        handleTextChange={handleTextChange}
      />
      <GraphControlPanel
        isHierarchical={isHierarchical}
        handleHierarchicalChange={handleHierarchicalChange}
        repulsion={repulsion}
        handleRepulsionChange={handleRepulsionChange}
      />
      <Graph
        graph={detectCycles(
          INPUT_TYPES_TO_FUNCTIONS[inputType](graphInputData)
        )}
        options={options}
        events={{}}
      />
    </div>
  );
}
