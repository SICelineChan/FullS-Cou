function UrgentItems({ text, total, id, isReal }) {
  return (
    <div>
      <li
        className="flex flex-col gap-2 font-semibold"
        style={{
          color: isReal ? "red" : "green",
        }}
      >
        {text} , {total}
      </li>
    </div>
  );
}
export default UrgentItems;
