import Features from "./Features";
import { Cloud, MarkDown, Free, Download } from "./SvgFiles";

const LandingPage = () => {
  return (
    <div className="">
      <div>
        <h3 className="text-center text-3xl mt-[3.8rem] font-bold">
          
          Effortlessly create notes with<br /> simplicity.
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
     <img src="img/landing.jpg" className="mt-6 w-full rounded-md"/>
      <div className="mt-[8rem] text-center">
        <p className="text-2xl font-bold">
          Deeply intricate, yet elegantly straightforward
        </p>
      </div>
      <br />

      <section>
        <div className="">
         

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
      <br />
        <section>
          <h3 className="text-center text-2xl font-bold">
          Your notes, kept secure 
          <br />
          and private.
          </h3>
          <h3></h3>
          <p className="text-center mt-6 text-lg px-4">Built from the ground up keeping securty design in mind.
            We'll keep your data safe.
          </p>
        </section>
    </div>
  );
};

export default LandingPage;
