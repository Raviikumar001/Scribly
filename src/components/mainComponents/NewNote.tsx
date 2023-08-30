import React from 'react'


interface TextProps {
    text:string,
    limit: number
  }
const TruncatedText:React.FC<TextProps> = ({text, limit})=> {
    const words = text.split(/\s+/);
    console.log(words)
    const TruncatedText = words.slice(0,limit).join(' ');
    return <p className='text-slate-600 '>{TruncatedText}...</p>
  }

const NewNote = () => {
    const paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis?";

  return (

    <div>
    <div className='border border-r-0 border-slate-300 pl-3'>
          <h3 className='font-medium pt-1'>This is a new title</h3>
          <TruncatedText text={paragraph} limit={7}/>
    </div>
    </div>
   
  )
}

export default NewNote;