import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCreateDate from "../useCreateDate";

import { useNavigate } from "react-router-dom";
import MessageComponent from "./MessageInfo";
import LoadingComponent from "./_LoadingComponent";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();


  

  const  googleAuth = ()=>{
    window.open(
     `https://scribly-note-server-production.up.railway.app/v1/auth/google/callback`,
     "_self"
    )
  }


  const submitForm =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      if (name == "" || email == "" || password == "") {
        setmessage("Please enter all fields!");
        return;
      }
      setIsLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/auth/register`,{
        name: name,
          email: email,
          password: password,
          registrationDate: useCreateDate(),
      },
  )
    console.log(response)
      if(response.data)
      {   setIsLoading(false)
        setmessage(response.data.message)
      }
      
    } catch (error: any) {
      setIsLoading(false)
      setmessage(error.response.data.message)
    }


      
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setmessage("");
        if (message == "User Created") {
          return navigate("/login");
        }
      }, 3000);
    }
  }, [message]);

  return (
    <div>
      <section className="h-full w-full">
        <div className="text center flex flex-col justify-center items-center  font-inter ">
          {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
          <h2 className="text-3xl font-semibold text-center mt-20 ">
            <Link to="/">Scrible Note </Link>
          </h2>
          <h2 className="self-start ml-[4rem]  mt-9 text-xl font-medium  tracking-wide font-inter md:self-auto md:mr-[12rem]">
            Create your account
          </h2>

          <button
            onClick={googleAuth}
            className=" btn_width  mt-3 border border-slate-400 rounded-md p-2 flex justify-center items-center md:mt-5 "
          >
            <img className="inline w-5" src="/img/google.png" alt="g-logo" />
            <p className="inline pl-2 ">Continue with Google</p>
          </button>

          <p className="mt-7 text-center text-xl">Or</p>
          <br />
         
        </div>
        <form className="form" onSubmit={submitForm}>
          <div className="flex flex-col justify-center items-center ">




    <MessageComponent message={message} />
          
            <input
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2 "
              placeholder="Name"
              name="name"
            />
      
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Email"
              name="email"
            />

       
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Password"
              name="password"
            />
{isLoading && <LoadingComponent message="Creating You Account" />}
            <button className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
              <p className="">Create your account </p>
            </button>
            <br />
          </div>
        </form>
        <div className="text-center mt-5 md:mb-8">
          <p className="text-slate-600">
            Already have an account?{" "}
            <span className="text-black">
              <Link to="/login">Sign in </Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
