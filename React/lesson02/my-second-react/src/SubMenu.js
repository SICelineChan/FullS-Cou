function SubMenu({ text, read, urgent }) {
  return (
    <>
      <span>
        <p>{text}</p>
        <hr />
      </span>
      <div>
        <span className="flex flex-col font-bold">
          <p>{read}</p>

          <p>{urgent}</p>
        </span>
      </div>
    </>
  );
}
export default SubMenu;
