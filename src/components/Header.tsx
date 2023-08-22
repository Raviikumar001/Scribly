
import { useState } from "react";
import { CrossArrow } from "./SvgFiles";
import { Link } from "react-router-dom";


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="flex justify-around items-center md:justify-around">
          
          <div className="m-2 first: flex items-center  ">
            <img src="/img/logo1.png" className="w-12 inline-block" />
            <h2 className="heading_text md:text-2xl">Scriblynote</h2>
          </div>
          <div className="ml-[7rem] cursor-pointer md:hidden relative md:ml-[3rem]">
            <span onClick={() => setIsNavOpen((prev) => !prev)}>
              {!isNavOpen ? <p className="text-md">Menu</p> : <CrossArrow />}
            </span>
            <section
              className={
                isNavOpen
                  ? "absolute py-4 h-[9rem] w-[7rem] left-[-5rem]  bg-white drop-shadow-xl "
                  : "hidden"
              }
            >
              <ul className="text-base  mt-4 block postedIn text-left px-3 rounded-md">
                <li className="py-2">
                  {/* <a href="www.google.com">Login</a> */}
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  {" "}
                  {/* <a href="www.google.com">Sign Up</a> */}
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="hidden md:block " >
            <ul className="md:flex text-md text-slate-800 md:items-center justify-center">
              <li className="px-3" >
                <Link to="/login">Login In</Link>
                </li>

              <li className=" p-1 mb-1 rounded-sm">
                <Link to="/register">Sign Up</Link>
                
                </li>
            </ul>
          </div>


        </div>
      </nav>
    </div>
  );
};

export default Header;
