import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCreateDate from "../useCreateDate";

import { useNavigate } from "react-router-dom";


const Register= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[message, setmessage] = useState("");
  let navigate = useNavigate();

  // const googleAuth = () => {
  //   window.open(
  //     `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
     
  //   );
  // };
    console.log(name, email, password)
    // const submitForm = (e:any):void =>{
    //     e.preventDefault();

    //     axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/register`,{username :name,email: email, password: password, registrationDate:useCreateDate()});
    // }
  //   const submitForm = (e:any):void =>{
  //     e.preventDefault();

  //     axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/register`,{username :name,email: email, password: password, registrationDate:useCreateDate()}).then(res => console.log(res));
  // }

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(name == "" ||email =="" || password == '')
    {
      setmessage("Please enter all fields!")
      return 
    }

      axios({
      method: "POST",
      data: {
        username: name,
        email:email,
        password: password,
        registrationDate:useCreateDate()
      },
      withCredentials:true,
      url: "/v1/auth/register",
    }).then((res) =>{ 

      if(res.data)
      {
        console.log(res.data.message)
        setmessage(res.data.message)
 
      }
       // if(res.status ==200)
       // {  console.log('in 200')
       //   return redirect('/app')
       // }
       
     }).catch(error=> {
      console.log(error.response)
      setmessage(error.response.data.message)
    })
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setmessage("")
        if(message == 'User created'){
          return navigate('/login')
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
            
            className=" btn_width  mt-3 border border-slate-400 rounded-md p-2 flex justify-center items-center md:mt-5 "
          >
            <img className="inline w-5" src="/img/google.png" alt="g-logo" />
            <p className="inline pl-2 ">
            <Link to="http://13.233.212.250/auth/google">
              Continue with Google 
              </Link>
              </p>
          </button>

          <p className="mt-7 text-center text-xl">Or</p>
          <br />
  {message && <div className="flex items-center p-4 w-[72%] md:w-[36%] mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>

    <div>
      <span className="font-medium">{message}</span> 
    </div>
  </div>}
        </div>
        <form className="form" onSubmit={submitForm}>
          <div className="flex flex-col justify-center items-center ">
            {/* <label htmlFor="name" className="self-start block mb-2 left-margin md:self-auto md:mr-[17.9rem] md:ml-0">
              Name
            </label> */}
            <input
             onChange={(e)=> setName(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2 "
              placeholder="Name"
              name="name"
            />
            {/* <label htmlFor="email" className="self-start block mb-2 left-margin md:self-auto md:mr-[18rem] md:ml-0 ">
              Email
            </label> */}
            <input
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Email"
              name="email"
            />

            {/* <label
              htmlFor="password"
              className="self-start block mb-2 left-margin md:self-auto md:mr-[16.5rem] md:ml-0"
            >
              Password
            </label> */}
            <input
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
              className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              placeholder="Password"
              name="password"
            />

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
