import { useState } from "react";
import { SerchIcon, CrossArrow2 } from "../SvgFiles";
import {v4 as uuid} from 'uuid'
import NewNote from "./Notes";

interface Notes{
  _id: string;
  title: string;
  lastModified: string;
  body: string;
  dateCreated: string;

}

interface Props{
  noteItems: Notes[],
  activeNote:string,
  setActiveNote:React.Dispatch<React.SetStateAction<string>> 
}

const NotesComponent: React.FC<Props> = ({noteItems,activeNote,setActiveNote}) => {
  // const [allPosts, setAllPosts] = useState<Notes[]>(noteItems);
  const [inputText, setInputText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<number | undefined>();
  const [searchedResults, setSearchedResults] = useState<Notes[] | null>();

  const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onMouseClick = () => {
    setInputText("");
    setSearchedResults(null)
  };

  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    setInputText(e.target.value);
    // console.log(e.target.value)

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  const filterPrompts = (searchtext:string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return noteItems.filter(
      (item) =>
        regex.test(item.title) ||
        regex.test(item.body) 
    );
  };
  

// console.log(searchedResults, "all posts")
  return (
    <div>
      <div className="flex justify-center">
        <button className="pl-3 pr-2">
          <SerchIcon />
        </button>

        <input
          value={inputText}
          onChange={Change}
          type="text"
          placeholder="Search all notes"
          className="w-full h-9 border border-transparent focus:outline-none"
          onChangeCapture={handleSearchChange}
        />
        {inputText && (
          <button onClick={onMouseClick}>
            <CrossArrow2 />
          </button>
        )}
      </div>
    
    {searchedResults ? <div className="overflow-y-auto h-[35rem]">
      {searchedResults.map((item) => (
         <div key={uuid()}>

           <NewNote notes={item}  activeNote={activeNote} setActiveNote={setActiveNote}  />
         </div>
      ))}
      </div> :  <div className="overflow-y-auto h-[35rem]">
      {noteItems.map((item) => (
         <div key={uuid()}>

           <NewNote notes={item}  activeNote={activeNote} setActiveNote={setActiveNote}  />
         </div>
      ))}
      </div>  }



         
    </div>
  );
};

export default NotesComponent;
