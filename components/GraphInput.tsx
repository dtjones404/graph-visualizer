interface GraphInputProps {
  graphInputData: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GraphInput({
  graphInputData,
  handleChange,
}: GraphInputProps) {
  return (
    <div className="graph-input card">
      <input type="text" value={graphInputData} onChange={handleChange} />
    </div>
  );
}
