function SideMenuItem({ menuText, link, counter }) {
  return (
    <>
      <li>
        {menuText}
        {counter && (
          <span className="w-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {counter}
          </span>
        )}
      </li>
    </>
  );
}
export default SideMenuItem;
