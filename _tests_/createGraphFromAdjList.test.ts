import createGraphFromAdjList from '../util/createGraphFromAdjList';

test('returns empty nodes and edges arrays if input is invalid JSON', () => {
  const input = '[[1,2,3';
  const graph = createGraphFromAdjList(input);
  expect(graph.nodes.length).toEqual(0);
  expect(graph.edges.length).toEqual(0);
});
