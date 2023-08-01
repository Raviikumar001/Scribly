import { useState } from "react";
import { CrossArrow } from "./SvgFiles";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="flex justify-between items-center">
          
          <div className="m-2 flext items-center">
            <img src="/img/logo1.png" className="w-10 inline-block" />
            <h2 className="inline-block text-xl font-medium ">Scriblynote</h2>
          </div>
          <div className="ml-[7rem] cursor-pointer md:hidden relative">
            <span onClick={() => setIsNavOpen((prev) => !prev)}>
              {!isNavOpen ? <p className="text-md">Menu</p> : <CrossArrow />}
            </span>
            <section
              className={
                isNavOpen
                  ? "absolute py-4 h-[9rem] w-[7rem] left-[-3rem] bg-white drop-shadow-xl "
                  : "hidden"
              }
            >
              <ul className="text-base  mt-4 block postedIn text-left px-3 rounded-md">
                <li className="py-2">
                  <a href="www.google.com">Login</a>
                </li>
                <li>
                  {" "}
                  <a href="www.google.com">Sign Up</a>
                </li>
              </ul>
            </section>
          </div>

          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
