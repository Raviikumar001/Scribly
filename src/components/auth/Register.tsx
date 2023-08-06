import { Link } from "react-router-dom";

const  Register = () => {
  return (
    <div>
      <section className="h-full w-full">
        <div className="text center flex flex-col justify-center items-center  font-inter ">
          {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
          <h2 className="text-3xl font-semibold text-center mt-20 ">
         <Link to='/'>Scrible Note </Link>   
          </h2>
          <h2 className="self-start ml-[4rem]  mt-9 text-xl font-medium  tracking-wide font-inter md:self-auto md:mr-[12rem]">
            Create your account
          </h2>

          <button className=" btn_width  mt-3 border border-slate-400 rounded-md p-2 flex justify-center items-center md:mt-5 ">
            <img className="inline w-5" src="/img/google.png" alt="g-logo" />
            <p className="inline pl-2 ">Continue with Google </p>
          </button>

          <p className="mt-7 text-center text-xl">Or</p>
          <br />
        </div>

        <form className="form">
          <div className="flex flex-col justify-center items-center ">
            {/* <label htmlFor="name" className="self-start block mb-2 left-margin md:self-auto md:mr-[17.9rem] md:ml-0">
              Name
            </label> */}
            <input className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2 " placeholder="Name"/>
            {/* <label htmlFor="email" className="self-start block mb-2 left-margin md:self-auto md:mr-[18rem] md:ml-0 ">
              Email
            </label> */}
            <input
              type="text"
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Email"
            />

            {/* <label
              htmlFor="password"
              className="self-start block mb-2 left-margin md:self-auto md:mr-[16.5rem] md:ml-0"
            >
              Password
            </label> */}
            <input
              type="password"
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Password"
            />

            <button className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
              <p className="">Create your account </p>
            </button>
            <br />
          </div>
        </form>
        <div className="text-center mt-5 md:mb-8">
          <p className="text-slate-600">
            Already have an account? <span className="text-black">
              <Link to='/login'>Sign in </Link>
              
              </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;


