import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";
import MessageComponent from "./MessageInfo";
import LoadingComponent from "./_LoadingComponent";

interface User {
  username: string,
  email: string,
  registrationDate: string,
  _id: string
}

export const addUserToLocalStorage = (user: User, token: string) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', JSON.stringify(token))
}

const Register: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();


  const googleAuth = () => {
    window.open(
      `https://scribly-note-server-production.up.railway.app/v1/auth/google/callback`,
      "_self"
    )
  }









  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
      if (email == "" || password == '') {
        setmessage("Please enter all fields!")
        return
      }
      
      setIsLoading(true)


      // const url= `${import.meta.env.VITE_REACT_APP_API_URL}/login`;

      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/v1/auth/login`, { email: email, password: password });
      console.log(response);

      // console.log(data.data.message)
      if (response.data) {
        setIsLoading(false)
        console.log(response.data.message)
        setmessage(response.data.message)
        addUserToLocalStorage(response.data.user, response.data.token)
      }
    }



    catch (error: any) {
      // console.log(error.response.data);
      // console.log(error.response.message);
      setIsLoading(false)
      setmessage(error.response.data.message)
      // console.log(error.response.status);
      // console.log(error.response.headers);

    }
  }





  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setmessage("")
        if (message == 'User Authenticated') {
          return navigate('/app')
        }
      }, 2000);
    }
  }, [message]);


  return (
    <div>
      <section className="h-full w-full">
        <div className="text center flex flex-col justify-center items-center  font-inter ">
          {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
          <h2 className="text-3xl font-semibold  mt-32 ">
            <Link to='/'>Scrible Note </Link>
          </h2>
          <h2 className="self-start ml-[4rem]  mt-9 text-2xl font-medium  tracking-wide font-inter md:self-auto md:mr-[13rem]">
            Welcome Back!
          </h2>

          <button onClick={googleAuth} className=" btn_width  mt-6 border border-slate-400 rounded-md p-2 flex justify-center items-center ">
            <img className="inline w-5" src="/img/google.png" alt="g-logo" />
            <p className="inline pl-2 font-medium">
              {/* <Link to="https://scriblle.onrender.com/auth/google"> */}
              Continue with Google
              {/* </Link>  */}
            </p>
          </button>

          <p className="mt-7 text-center text-xl mb-10 md:mb-4">Or</p>











        </div>

        <form className="form mt-3 md:mt-2" onSubmit={login}>
          <div className="flex flex-col justify-center items-center ">
           
           <MessageComponent message={message} />


          
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800  border  border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
            />


            
              {isLoading && <LoadingComponent message="Autheticating" />}
            <button type="submit" className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
              <p >Login </p>
            </button>
            <br />
          </div>
        </form>
        <div className="text-center mt-5 mb-6">
          <p className="text-slate-600">
            No account? <span className="text-black">
              <Link to='/register'>Create one </Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;


