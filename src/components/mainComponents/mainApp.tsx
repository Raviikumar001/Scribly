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
  const onAddNote = () => {
    const newNote: Note = {
      id: uuid(),
      title: "",
      body: "",
      dateCreated: useCreateDate(),
    };

    setNote([newNote, ...note]);
  };

  return (
    <div className="md:grid md:grid-cols-4">
      <div className="md:col-span-1">
        <MainHeader
          AddNote={onAddNote}
          notes={note}
          activeNote={activeNote}
          addActiveNote={setActiveNote}
        />
      </div>
      <div className="md:col-span-3 hidden md:block md:h-screen">
        <EditorComponent />
      </div>
    </div>
  );
};

export default MainApp;
