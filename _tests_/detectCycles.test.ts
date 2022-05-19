import createGraphFromEdgeList from '../util/createGraphFromEdgeList';
import detectCycles from '../util/detectCycles';

test('detects edges which are part of a cycle', () => {
  const input = '[[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]';
  const graph = createGraphFromEdgeList(input);
  const { nodes, edges } = detectCycles(graph);
  const cycleEdges: (string | number)[][] = [];
  edges.forEach((edge) => {
    if (edge.color === 'red') cycleEdges.push([edge.from, edge.to]);
  });
  expect(cycleEdges).toEqual([
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
    [4, 5],
    [5, 3],
  ]);
});
