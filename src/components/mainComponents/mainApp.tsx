import React, { useState } from "react";
import MainHeader from "./mainHeader";

import { v4 as uuid } from "uuid";
import useCreateDate from "../useCreateDate";
import EditorComponent from "./EditorComponent";

interface Note {
  id: string;
  title: string;
  body: string;
  dateCreated: string;
}

  const MainApp: React.FC = () => {

  const [note, setNote] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState("");
  const [sidebar, setSideBar] = useState(true);
  const onAddNote = () => {
    const newNote: Note = {
      id: uuid(),
      title: "",
      body: "",
      dateCreated: useCreateDate(),
    };

    setNote([newNote, ...note]);
  };
  console.log(sidebar)
  return (
    <div className="md:grid md:grid-cols-4">
     {sidebar && <div className="md:col-span-1">
        <MainHeader
          AddNote={onAddNote}
          notes={note}
          activeNote={activeNote}
          addActiveNote={setActiveNote}
        />
      </div>}
      <div className={`hidden md:block md:h-screen ${sidebar? "md:col-span-3" : "md:col-span-4"}`}>
        <EditorComponent  
        setSidebar={setSideBar} />
      </div>
    </div>
  );
};

export default MainApp;
