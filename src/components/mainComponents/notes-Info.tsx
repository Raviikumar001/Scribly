import React, { useEffect, useState } from "react";
import { CrossArrow3 } from "../svg-files";
import { useQuery } from "@tanstack/react-query";

interface Note {
  _id: string;
  title: string;
  body: string;
  lastModified: string;
  dateCreated: string;
}

interface infoProps {
  activenote?: Note;
  notes: boolean;
  updateNotes: (note: boolean) => void;
}

const NotesInfo: React.FC<infoProps> = ({ notes, updateNotes, activenote }) => {
  const changeValue = () => {
    updateNotes(notes);
  };

  function countWords(str: string) {
    return str.trim().split(/\s+/).length;
  }

  const fetchNote = async () => {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}`;
    const response = await fetch(`${url}/v1/api/get-note?id=${activenote?._id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch note data");
    }
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["note", activenote?._id],
    queryFn: fetchNote,
    enabled: !!activenote?._id,
  });
  const note = data?.note;

  return (
    <div className="relative ">
      {note ? (
        <div className="fixed top-0 left-0  h-screen bg-slate-300 bg-opacity-30 flex justify-center items-center w-[100%]">
          <div className="bg-white text-md absolute top-28 border border-slate-300 left-[10%] w-[80%] rounded-md backdrop-blur md:w-[30%] md:top-44 md:left-[40%]">
            <div className="p-3 flex justify-between border-b-2 border-gray-150  w-[100%]">
              <h3 className="font-semibold">Document</h3>
              <button onClick={changeValue}>
                <CrossArrow3 />
              </button>
            </div>
            <div className="text-slate-700 leading-relaxed text-md mb-9 mt-6">
              <div className="pl-3 flex justify-between w-[95%]">
                <p>Modified</p>
                <p>{note?.lastModified}</p>
              </div>

              <div className="pl-3 flex justify-between w-[95%]">
                <p>Words</p>
                <p>{countWords(note?.body)}</p>
              </div>

              <div className="pl-3 flex justify-between w-[95%]">
                <p>Characters</p>
                <p>{note?.body.length}</p>
              </div>

              <div className="pl-3 flex justify-between w-[95%] ">
                <p>Created</p>
                <p>{note?.dateCreated}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotesInfo;
