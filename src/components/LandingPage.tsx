import Features from "./Features";
import { Cloud, MarkDown, Free, Download } from "./SvgFiles";

const LandingPage = () => {
  return (
    <div className="">
      <div>
        <h3 className="text-center text-3xl mt-[3.8rem] font-bold">
          The Simplest Way to <br /> make Notes
        </h3>
        <p className="text-center mt-5 px-6">
          Capture Your Thoughts, Anytime, Anywhere – Your Personal Note-Taking
          Haven.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <button className="text-center rounded-md bg-blue-500 p-3 text-white">
          Sign Up Now
        </button>
      </div>
     <img src="img/landing.jpg" className="mt-6 rounded-md"/>
      <div className="mt-[8rem] text-center">
        <p className="text-2xl font-bold">
          Deeply intricate, yet elegantly straightforward
        </p>
      </div>
      <br />

      <section>
        <div className="">
          {/* <div className="flex mt-5 ml-9 items-center"> */}
          {/* <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg> */}
          {/* <Cloud />

        <h3 className="pl-4 font-bold text-lg">Use it anywhere</h3>
     
          </div>
        <p className="ml-9 mt-3 whitespace-pre-line flex-col">
          Notes always stay updated, 
          with cloud storage, they are saved in real time.
        </p> */}

          <Features
            SvgFile={<Cloud />}
            desc="Notes always stay updated, 
          with cloud storage, they are saved in real time."
            feature="Use it anywhere"
          />

          <Features
            SvgFile={<MarkDown />}
            desc="Compose and preview your notes with ease using Markdown format."
            feature="MarkDown supoort"
          />

          <Features
            SvgFile={<Free />}
            desc="Write notes effortlessly, no need to worry about payments!"
            feature="It's Free"
          />
          <Features 
          SvgFile={<Download />}
          desc="Access your notes for download whenever you need them."
          feature="Download Content" />

        </div>
      </section>
    </div>
  );
};

export default LandingPage;
