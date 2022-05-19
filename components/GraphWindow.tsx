import GRAPH_OPTIONS from '../constants/graphOptions';
import GraphInput from './GraphInput';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import createGraphFromAdjMatrix from '../util/createGraphFromAdjMatrix';
import createGraphFromAdjList from '../util/createGraphFromAdjList';
import createGraphFromEdgeList from '../util/createGraphFromEdgeList';
import createGraphFromAdjMap from '../util/createGraphFromAdjMap';
import GraphControlPanel from './GraphControlPanel';
import detectCycles from '../util/detectCycles';
import Loading from './Loading';

const Graph = lazy(() => import('react-graph-vis'));

interface InputTypesToFunctions {
  [key: string]: Function;
}
const INPUT_TYPES_TO_FUNCTIONS: InputTypesToFunctions = {
  adjList: createGraphFromAdjList,
  adjMatrix: createGraphFromAdjMatrix,
  edgeList: createGraphFromEdgeList,
  adjMap: createGraphFromAdjMap,
};
const EXAMPLE_INPUT = '[[1, 4], [0, 3, 4], [1, 3], [2, 4], [0, 1, 3]]';

export default function GraphWindow() {
  const [inputType, setInputType] = useState(
    localStorage.getItem('inputType') ?? 'adjList'
  );
  const [graphInputData, setGraphInputData] = useState(
    localStorage.getItem('graphInput') ?? EXAMPLE_INPUT
  );
  const [isHierarchical, setIsHierarchical] = useState(false);
  const [showCycles, setShowCycles] = useState(false);
  const [repulsion, setRepulsion] = useState('200');

  useEffect(() => {
    localStorage.setItem('graphInput', graphInputData);
  }, [graphInputData]);

  useEffect(() => {
    localStorage.setItem('inputType', inputType);
  }, [inputType]);

  const graph = useMemo(() => {
    const graphData = INPUT_TYPES_TO_FUNCTIONS[inputType](graphInputData);
    if (showCycles) detectCycles(graphData);
    return graphData;
  }, [graphInputData, inputType, showCycles]);

  const options = useMemo(() => {
    return JSON.parse(JSON.stringify(GRAPH_OPTIONS));
  }, [repulsion, isHierarchical]);
  options.layout.hierarchical.enabled = isHierarchical;
  options.physics.repulsion.springLength = +repulsion;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphInputData(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value);
  };

  const handleHierarchicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHierarchical((prevState) => !prevState);
  };

  const handleShowCyclesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCycles((prevState) => !prevState);
  };

  const handleRepulsionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepulsion(e.target.value);
  };

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
        showCycles={showCycles}
        handleShowCyclesChange={handleShowCyclesChange}
        repulsion={repulsion}
        handleRepulsionChange={handleRepulsionChange}
      />
      <Suspense fallback={<Loading />}>
        <Graph
          graph={graph}
          options={options}
          events={{}}
          style={{ height: 'calc(100% - 125px)' }}
        />
      </Suspense>
    </div>
  );
}
