export default function Squares({ value, onClick }) {
  return (
    <button onClick={onClick} className="squares">
      {value}
    </button>
  );
}
