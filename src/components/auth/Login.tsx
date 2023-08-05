const Register = () => {
    return (
      <div>
        <section className="h-full w-full">
          <div className="text center flex flex-col justify-center items-center  font-inter ">
            {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
            <h2 className="text-3xl font-semibold  mt-32 ">
              Scrible Note
            </h2>
            <h2 className="self-start ml-[4rem]  mt-9 text-2xl font-medium  tracking-wide font-inter md:self-auto md:mr-[13rem]">
              Welcome Back!
            </h2>
  
            <button className=" btn_width  mt-6 border border-slate-400 rounded-md p-2 flex justify-center items-center ">
              <img className="inline w-5" src="/img/google.png" alt="g-logo" />
              <p className="inline pl-2 font-medium">Continue with Google </p>
            </button>
  
            <p className="mt-7 text-center text-xl mb-10 md:mb-4">Or</p>
         
        
          </div>
  
          <form className="form mt-3 md:mt-2">
            <div className="flex flex-col justify-center items-center ">
              
              <label htmlFor="email" 
              className="self-start block mb-2 left-margin  md:self-auto md:mr-[17.8rem] md:ml-0">
                Email
              </label>
              <input
                type="text"
                
                className="border border-slate-400 rounded-md p-2  mb-3 input_width"
              />
  
              <label
                htmlFor="password"
                className="self-start block mb-2 left-margin md:self-auto md:mr-[15.8rem] md:ml-0"
              >
                Password
              </label>
              <input
                type="password"
                className="border border-slate-400 rounded-md p-2  mb-3 input_width"
              />
  
              <button className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
                <p className="">Login in </p>
              </button>
              <br />
            </div>
          </form>
          <div className="text-center mt-5 mb-6">
            <p className="text-slate-600">
              No account? <span className="text-black">Create one</span>
            </p>
          </div>
        </section>
      </div>
    );
  };
  
  export default Register;
  
  
  