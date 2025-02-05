import React from "react";

interface NoteItem {
  _id: string;
  title: string;

  body: string;
  lastModified: string;
  dateCreated: string;
}

interface NoteProps {
  notes: NoteItem;
  activeNote: string;
  setActiveNote: React.Dispatch<React.SetStateAction<string>>;
}
interface TextProps {
  text: string;
  limit: number;
}
const TruncatedText: React.FC<TextProps> = ({ text, limit }) => {
  const words = text.split(/\s+/);

  const TruncatedText = words.slice(0, limit).join(" ");
  return <p className="text-slate-600 pt-1 pb-1 ">{TruncatedText}...</p>;
};
const TruncatedTextTitle: React.FC<TextProps> = ({ text, limit }) => {
  const words = text.split(/\s+/);

  const TruncatedText = words.slice(0, limit).join(" ");
  return <h2 className="font-medium pt-1 pb-1">{TruncatedText}</h2>;
};

const NewNote: React.FC<NoteProps> = ({ notes, activeNote, setActiveNote }) => {
  return (
    <div>
      <div>
        {notes.title || notes.body ? (
          <div key={notes._id} className={`border border-r-0 border-slate-300 pl-3 md:border md:border-slate-300 ${notes._id == activeNote && "bg-slate-300"} `} onClick={() => setActiveNote(notes._id)}>
            <TruncatedTextTitle text={notes.title} limit={5} />
            <TruncatedText text={notes.body} limit={7} />
          </div>
        ) : (
          <div key={notes._id} className={`border border-r-0 border-slate-300 pl-3 md:border md:border-slate-300  ${notes._id == activeNote && "bg-slate-300"}`} onClick={() => setActiveNote(notes._id)}>
            <h2 className="pt-3 pb-3 text-gray-700">New Note...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewNote;
