import React from "react";
import { Setting, AllNotes } from "../svg-files";

interface Props {
  toggelMenu: () => void;
  toggleseting: () => void;
  toggleValue: () => void;
}

const SideMenu: React.FC<Props> = ({ toggelMenu, toggleseting, toggleValue }) => {
  const ShowSettings = () => {
    toggelMenu();
    toggleseting();
  };
  const showNotes = () => {
    toggelMenu();
  };

  return (
    <div onClick={toggleValue} className="fixed  bg-gray-300 h-[100%] bg-opacity-30 w-[100%]">
      <div className="bg-white absolute h-full w-[50%] md:w-[20%]">
        <div className="mt-12 border-2 border-gray-150 ">
          <div className="p-3 flex items-center ">
            <AllNotes />
            <button onClick={showNotes}>
              {" "}
              <h2 className="pl-2 text-lg">All Notes</h2>{" "}
            </button>
          </div>
        </div>
        <div className="border-b-2 border-gray-150">
          <div className="p-3 flex items-center">
            <Setting />
            <button onClick={ShowSettings}>
              {" "}
              <h2 className="pl-2 text-lg">Settings</h2>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
