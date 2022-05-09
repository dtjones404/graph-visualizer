interface GraphControlPanelProps {
  isHierarchical: boolean;
  handleHierarchicalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  repulsion: string;
  handleRepulsionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GraphControlPanel({
  isHierarchical,
  handleHierarchicalChange,
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
