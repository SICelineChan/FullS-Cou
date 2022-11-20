import { useState } from "react";
import TopNav from "./TopNav";
import SideMenuItem from "./SideMenuItem";
import SubMenu from "./SubMenu";
import MainBody from "./MainBody";
import DateOfToday from "./UnsedComponents/DateOfToday";
import Footer from "./Footer";
import UrgentItems from "./UrgentItems";
import MyButton from "./UnsedComponents/MyButton";

function App() {
  const name = "So-and-so";

  const [unreadMsg, setunreadMsg] = useState(8);

  const menu = [
    { text: "Summary" },
    { text: "Read Message/s:", read: "15" },
    { text: "Urgent:", urgent: "7" },
  ];

  const urgentitems = [
    { id: 1, text: "Super Urgent", total: "2", isReal: true },
    { id: 2, text: "Relatively Urgent", total: "4", isReal: true },
    { id: 3, text: "Ok Urgent", total: "1", isReal: false },
  ];

  const side = [
    { menuText: "Home Page", link: "#Home" },
    { menuText: "Inbox ", link: "#Inbox", counter: unreadMsg },
    { menuText: "About Me", link: "#About" },
    { menuText: "Contact", link: "#Contact" },
  ];

  return (
    <>
      <body className="h-full">
        <main className="flex flex-col w-full h-full">
          <TopNav
            pageTitle="My Re-Modified Components Page!"
            IconCounter={unreadMsg}
            onResetHandler={() => setunreadMsg(1)}
          ></TopNav>

          <div className="flex h-full">
            <aside className="w-1/4 h-full border-slate-400 border-r p-4">
              <ul className="flex flex-col gap-2 font-semibold">
                <li>
                  <a
                    className="text-slate-700 hover:text-slate-900"
                    href="www.google.com"
                  >
                    Logo/ Brand
                  </a>
                </li>
                {side.map((sideBar) => (
                  <SideMenuItem
                    menuText={sideBar.menuText}
                    link={sideBar.link}
                    counter={sideBar.counter}
                  />
                ))}
              </ul>
            </aside>
            <br />

            <MainBody>
              <DateOfToday></DateOfToday>
              Hello Mr/Ms {name},
              <br />
              you have <strong>{unreadMsg}</strong> unread messages.
              <br />
              Please go to your inbox to read them.
              {menu.map((subMenu) => (
                <SubMenu
                  text={subMenu.text}
                  read={subMenu.read}
                  urgent={subMenu.urgent}
                />
              ))}
              <p>Summary of Urgent Matters</p>
              {urgentitems.map((urgent) => (
                <UrgentItems
                  text={urgent.text}
                  total={urgent.total}
                  id={urgent.id}
                  isReal={urgent.isReal}
                />
              ))}
              <div class="inline-flex">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  onClick={() => setunreadMsg(unreadMsg - 1)}
                >
                  Read
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={() => setunreadMsg(unreadMsg + 1)}
                >
                  Un-Read
                </button>
              </div>
              <br />
              <br />
              <MyButton></MyButton>
            </MainBody>
          </div>

          <Footer></Footer>
        </main>
      </body>
    </>
  );
}

export default App;
