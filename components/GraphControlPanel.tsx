interface GraphControlPanelProps {
  isHierarchical: boolean;
  handleHierarchicalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showCycles: boolean;
  handleShowCyclesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  repulsion: string;
  handleRepulsionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GraphControlPanel({
  isHierarchical,
  handleHierarchicalChange,
  showCycles,
  handleShowCyclesChange,
  repulsion,
  handleRepulsionChange,
}: GraphControlPanelProps) {
  return (
    <div className="graph-control-panel-container card">
      <input
        type="checkbox"
        id="isHierarchical"
        name="isHierarchical"
        checked={isHierarchical}
        onChange={handleHierarchicalChange}
      />
      <label htmlFor="isHierarchical">Hierarchical</label>
      <input
        type="checkbox"
        id="showCycles"
        name="showCycles"
        checked={showCycles}
        onChange={handleShowCyclesChange}
      />
      <label htmlFor="ShowCycles">Show Cycles</label>
      <input
        type="range"
        min="40"
        max="400"
        value={repulsion}
        id="repulsion"
        onChange={handleRepulsionChange}
      ></input>
      <label htmlFor="repulsion">Edge Length</label>
    </div>
  );
}
