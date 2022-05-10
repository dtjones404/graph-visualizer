import { useEffect, useRef } from 'react';

interface GraphInputProps {
  graphInputData: string;
  inputType: string;
  handleTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GraphInput({
  graphInputData,
  inputType,
  handleTypeChange,
  handleTextChange,
}: GraphInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <div className="graph-input card">
      <div className="input-type-selector-container">
        <input
          type="radio"
          id="adjList"
          name="inputType"
          value="adjList"
          checked={inputType === 'adjList'}
          onChange={handleTypeChange}
        />
        <label htmlFor="adjList">Adjacency List</label>
        <input
          type="radio"
          id="adjMatrix"
          name="inputType"
          value="adjMatrix"
          checked={inputType === 'adjMatrix'}
          onChange={handleTypeChange}
        />
        <label htmlFor="adjMatrix">Adjacency Matrix</label>
        <input
          type="radio"
          id="edgeList"
          name="inputType"
          value="edgeList"
          checked={inputType === 'edgeList'}
          onChange={handleTypeChange}
        />
        <label htmlFor="edgeList">Edge List</label>
        <input
          type="radio"
          id="adjMap"
          name="inputType"
          value="adjMap"
          checked={inputType === 'adjMap'}
          onChange={handleTypeChange}
        />
        <label htmlFor="adjMap">Adjacency Map</label>
      </div>
      <input
        type="text"
        className="graph-data-input"
        ref={inputRef}
        value={graphInputData}
        onChange={handleTextChange}
      />
    </div>
  );
}
