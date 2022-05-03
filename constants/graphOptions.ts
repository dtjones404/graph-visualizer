const GRAPH_OPTIONS = {
  autoResize: true,
  layout: {
    improvedLayout: true,
    // hierarchical: {
    //   enabled: false,
    //   direction: 'UD',
    //   sortMethod: 'hubsize',
    //   levelSeparation: 280,
    //   treeSpacing: 100,
    // },
  },
  edges: {
    color: 'black',
    width: 4,
    shadow: {
      enabled: false,
    },
    smooth: {
      enabled: true,
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
    stabilization: {
      enabled: true,
    },
    hierarchicalRepulsion: {
      nodeDistance: 200,
    },
  },
};

export default GRAPH_OPTIONS;
