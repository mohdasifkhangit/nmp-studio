export default function Placeholder({ note }) {
  return (
    <div className="ph" aria-hidden="true">
      <span className="ph-mark">NMP</span>
      <span className="ph-label">Add your video</span>
      <span className="ph-note">{note}</span>
    </div>
  );
}
