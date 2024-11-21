import React, { useState, useEffect } from "react";
import MainHeader from "./main-header";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useCreateDate from "../use-create-date";
import EditorComponent from "./editor-component";

interface Note {
  _id: string;
  title: string;
  body: string;
  lastModified: string;
  dateCreated: string;
}

interface PropsUser {
  username: string;
  email: string;
  registrationDate: string;
  _id?: string;
}
interface Props {
  user: PropsUser;
}

interface CreateNoteResponse {
  note: Note;
  success: boolean;
}

const MainApp: React.FC<Props> = ({ user }) => {
  // const [note, setNote] = useState<Note[]>([]);
  // const [activeNote, setActiveNote] = useState("");
  // const [sidebar, setSideBar] = useState(true);
  // const [counter, setCounter] = useState(0);

  // const url = `${import.meta.env.VITE_REACT_APP_API_URL}`;

  // const getUserData = async () => {
  //   try {
  //     const data = await axios.get(`${url}/v1/api/get-notes?id=${user._id}`);
  //     // console.log(data);
  //     setNote(data.data.notes);
  //   } catch (error) {}
  // };

  // const onAddNote = async () => {
  //   await axios
  //     .post(`${url}/v1/api/create-note?id=${user._id}`, {
  //       dateCreated: useCreateDate(),
  //     })
  //     .then((data) => {
  //       if (data.status == 200) {
  //         getUserData();
  //       }
  //     });
  // };

  // useEffect(() => {
  //   let timeout: number;

  //   timeout = setTimeout(() => {
  //     getUserData();
  //   }, 900);

  //   return () => {
  //     clearTimeout(timeout); // Clear the timeout if it hasn't executed yet
  //   };
  // }, [counter]);

  // const getActiveNote = () => {
  //   return note.find((note) => note._id == activeNote);
  // };

  const [activeNote, setActiveNote] = useState("");
  const [sidebar, setSideBar] = useState(true);
  const queryClient = useQueryClient();

  const url = `${import.meta.env.VITE_REACT_APP_API_URL}`;

  // Fetch notes using React Query
  const { data: notes = [], isLoading } = useQuery<Note[]>({
    queryKey: ["notes", user._id], // Pass the key as an array
    queryFn: async () => {
      const response = await fetch(`${url}/v1/api/get-notes?id=${user._id}`);
      if (!response.ok) throw new Error("Failed to fetch notes");
      const data = await response.json();
      return data.notes;
    },
    staleTime: 5 * 60 * 1000, // Configure staleTime in the options object
  });

  // Mutation for creating a new note
  const createNoteMutation = useMutation({
    mutationFn: async (): Promise<CreateNoteResponse> => {
      const response = await fetch(`${url}/v1/api/create-note?id=${user._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateCreated: useCreateDate() }),
      });

      if (!response.ok) throw new Error("Failed to create note");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes", user._id] });
    },
    onError: (error: Error) => {
      console.error("Create note error:", error);
    },
  });

  const getActiveNote = () => notes.find((note) => note._id === activeNote);

  const onAddNote = () => createNoteMutation.mutate();

  return (
    <div>
      <div className={"hidden md:grid md:grid-cols-4"}>
        {sidebar && (
          <div className="md:col-span-1">
            <MainHeader AddNote={onAddNote} notes={notes} activeNote={activeNote} user={user} addActiveNote={setActiveNote} />
          </div>
        )}
        <div className={`hidden md:block md:h-screen ${sidebar ? "md:col-span-3" : "md:col-span-4"}`}>
          <EditorComponent setSidebar={setSideBar} activeNote={getActiveNote()} notes={notes} setActiveNote={setActiveNote} />
        </div>
      </div>

      <div className="grid grid-cols-4 md:hidden">
        {!activeNote && (
          <div className="col-span-4">
            <MainHeader AddNote={onAddNote} notes={notes} activeNote={activeNote} user={user} addActiveNote={setActiveNote} />
          </div>
        )}
        <div className={activeNote ? "col-span-4" : "hidden"}>
          <EditorComponent setSidebar={setSideBar} activeNote={getActiveNote()} notes={notes} setActiveNote={setActiveNote} />
        </div>
      </div>
    </div>
  );
};

export default MainApp;
