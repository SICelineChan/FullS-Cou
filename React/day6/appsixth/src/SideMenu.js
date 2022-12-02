export default function SideMenu({ text, id, path }) {
  return (
    <>
      <div>
        <li>{text}</li>
        <li>{path}</li>
      </div>
    </>
  );
}
