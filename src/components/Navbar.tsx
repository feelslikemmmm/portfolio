import { MENU_LIST } from '@constants/menuList';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="relative flex flex-col justify-between m-auto p-4 md:px-[65px] md:flex-row">
      <div className="flex flex-col tracking-[-0.9px] items-start text-lg font-[500]">
        <h1 className="text-[24px] mb-1 font-instrument">Web Portfolio</h1>
        <span className="text-[14px] md:text-[16px]">
          Made by ✹feelslikemmmm
        </span>
      </div>
      <div className="absolute right-[1rem] block md:hidden">
        <button onClick={() => setToggle(!toggle)}>
          <GiHamburgerMenu />
        </button>
      </div>
      {toggle ? (
        <ul className="tracking-[-0.9px] flex flex-col text-center w-full md:hidden">
          {MENU_LIST.map((menu) => (
            <li className="py-2" key={menu.id}>
              <a
                className="text-black text-sm "
                href={menu.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden tracking-[-0.9px] md:flex md:items-center">
          {MENU_LIST.map((menu) => (
            <li className="px-2" key={menu.id}>
              <a
                className="text-black text-lg"
                href={menu.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
