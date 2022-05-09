const GRAPH_OPTIONS = {
  autoResize: true,
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: false,
      direction: 'LR',
      sortMethod: 'hubsize',
      levelSeparation: 280,
      treeSpacing: 100,
    },
  },
  edges: {
    color: 'black',
    width: 4,
    font: {
      size: 18,
    },
    shadow: {
      enabled: true,
    },
    smooth: {
      enabled: false,
      type: 'discrete',
      forceDirection: 'vertical',
      roundness: 0.8,
    },
  },
  interaction: {
    dragNodes: true,
    dragView: true,
  },
  physics: {
    enabled: true,
    solver: 'repulsion',
    stabilization: {
      enabled: true,
    },
    repulsion: {
      nodeDistance: 200,
    },
    hierarchicalRepulsion: {
      nodeDistance: 100,
    },
  },
};

export default GRAPH_OPTIONS;
