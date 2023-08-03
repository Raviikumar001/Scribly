const Register = () => {
  return (
    <div>
      <section className="h-full w-full">
        <div className="text center flex flex-col justify-center items-center  font-inter ">
          {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
          <h2 className="text-3xl font-semibold text-center mt-20 ">
            Scrible Note
          </h2>
          <h2 className="self-start ml-[4rem]  mt-9 text-xl font-medium  tracking-wide font-inter">
            Create your account
          </h2>

          <button className="mt-3 border border-slate-400 rounded-md p-2 flex justify-center items-center ml-15 pl-[2.4rem] pr-[2.4rem]">
            <img className="inline w-5" src="/img/google.png" alt="g-logo" />{" "}
            <p className="inline pl-2 ">Continue with Google </p>
          </button>

          <p className="mt-7 text-center text-xl">Or</p>
          <br />
        </div>

        <form >
          <div className="flex flex-col justify-center items-center ">
            <label htmlFor="name" className="self-start block mb-2 ml-[4rem]">
              Name:
            </label>
            <input className="border border-slate-400 rounded-md p-2  mb-3 pr-11 " />
            <label htmlFor="email" className="self-start block mb-2 ml-[4rem] ">
              Email:
            </label>
            <input
              type="text"
              className="border border-slate-400 rounded-md p-2  mb-3 pr-11 "
            />

            <label htmlFor="password" className="self-start block mb-2 ml-[4rem]">
              Password:
            </label>
            <input
              type="password"
              className="border border-slate-400 rounded-md p-2  mb-3 pr-11 "
            />


          

            <button className="mt-3 border bg-black text-white border-slate-400 rounded-md p-2  pr-[3.8rem] flex justify-center items-center">
              <p className="ml-12">Create your account </p>
            </button>
            <br />
          </div>
        </form>
        <div className="text-center">
          <p className="text-slate-600">Already have an account? <span className="text-black">Sign in</span></p>
        </div>
      </section >
    </div>
  );
};

export default Register;


{/* <form >
<div className="flex flex-col justify-center items-center ">
  <label htmlFor="name" className="self-start block mb-2 ml-[4rem]">
    Name:
  </label>
  <input className="border border-slate-400 rounded-md p-2  mb-3 pr-11 " />
  <label htmlFor="email" className="self-start block mb-2 ml-[4rem] ">
    Email:
  </label>
  <input
    type="text"
    className="border border-slate-400 rounded-md p-2  mb-3 pr-11 "
  />

  <label htmlFor="password" className="self-start block mb-2 ml-[4rem]">
    Password:
  </label>
  <input
    type="password"
    className="border border-slate-400 rounded-md p-2  mb-3 pr-11 "
  />




  <button className="mt-3 border bg-black text-white border-slate-400 rounded-md p-2  pr-[3.8rem] flex justify-center items-center">
    <p className="ml-12">Create your account </p>
  </button>
  <br />
</div>
</form> */}