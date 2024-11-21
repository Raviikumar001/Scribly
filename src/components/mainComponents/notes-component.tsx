import { useState, useMemo } from "react";
import { SerchIcon, CrossArrow2 } from "../svg-files";
import { v4 as uuid } from "uuid";
import NewNote from "./notes";

interface Notes {
  _id: string;
  title: string;
  lastModified: string;
  body: string;
  dateCreated: string;
}

interface Props {
  noteItems: Notes[];
  activeNote: string;
  setActiveNote: React.Dispatch<React.SetStateAction<string>>;
}

const NotesComponent: React.FC<Props> = ({ noteItems, activeNote, setActiveNote }) => {
  const [inputText, setInputText] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const clearSearch = () => {
    setInputText("");
  };

  // Memoize filtered results to avoid unnecessary calculations
  const filteredNotes = useMemo(() => {
    if (!inputText) return noteItems;
    const regex = new RegExp(inputText, "i"); // Case-insensitive search
    return noteItems.filter((item) => regex.test(item.title) || regex.test(item.body));
  }, [inputText, noteItems]);

  return (
    <div>
      <div className="flex justify-center">
        <button className="pl-3 pr-2">
          <SerchIcon />
        </button>
        <input value={inputText} onChange={handleSearchChange} type="text" placeholder="Search all notes" className="w-full h-9 border border-transparent focus:outline-none" />
        {inputText && (
          <button onClick={clearSearch}>
            <CrossArrow2 />
          </button>
        )}
      </div>

      <div className="overflow-y-auto h-[35rem]">
        {filteredNotes.map((item) => (
          <div key={item._id}>
            <NewNote notes={item} activeNote={activeNote} setActiveNote={setActiveNote} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesComponent;
