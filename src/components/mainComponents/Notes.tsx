import React from "react";
interface NoteItem {
  notes: string;
}

interface TextProps {
  text: string;
  limit: number;
}
const TruncatedText: React.FC<TextProps> = ({ text, limit }) => {
  const words = text.split(/\s+/);
  console.log(words);
  const TruncatedText = words.slice(0, limit).join(" ");
  return <p className="text-slate-600 pt-1 pb-1 ">{TruncatedText}...</p>;
};
const TruncatedTextTitle: React.FC<TextProps> = ({ text, limit }) => {
  const words = text.split(/\s+/);

  const TruncatedText = words.slice(0, limit).join(" ");
  return <h2 className="font-medium pt-1 pb-1">{TruncatedText}</h2>;
};

const NewNote: React.FC<NoteItem> = ({ notes }) => {
  console.log(notes);

  return (
    <div>
      {notes ? (
        <div className="border border-r-0 border-slate-300 pl-3">
          <TruncatedTextTitle text={notes} limit={4} />
          {/* <h3 className='font-medium pt-1'>This is a new title</h3> */}
          <TruncatedText text={notes} limit={7} />
        </div>
      ) : (
        <div className="border border-r-0 border-slate-300 pl-3">
          <h2 className="pt-3 pb-3 text-gray-700">New Note...</h2>
        </div>
      )}
    </div>
  );
};

export default NewNote;
