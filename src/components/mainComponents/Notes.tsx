import React from "react";
import { Link } from "react-router-dom";
interface NoteItem {
  id: number;
  title: string;
  date: string;
  notes: string;
}

interface NoteProps {
  notes: NoteItem;
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

const NewNote: React.FC<NoteProps> = ({ notes }) => {
 
  
  return (
    <div>
      {notes.notes ? (
        <Link to={`/edit-note/${notes.id}`}>
          <div className="border border-r-0 border-slate-300 pl-3">
            <TruncatedTextTitle text={notes.title} limit={5} />
            {/* <h3 className='font-medium pt-1'>This is a new title</h3> */}
            <TruncatedText text={notes.notes} limit={7} />
          </div>
        </Link>
      ) : (
        <Link to={`create-note`}>
          <div className="border border-r-0 border-slate-300 pl-3">
            <h2 className="pt-3 pb-3 text-gray-700">New Note...</h2>
          </div>
        </Link>
      )}
    </div>
  );
};

export default NewNote;
