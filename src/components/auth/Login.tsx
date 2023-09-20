import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";


import { useNavigate } from "react-router-dom";

interface User{
  username: string,
  email:string,
  registrationDate:string,
  _id: string
}

export const addUserToLocalStorage = (user:User,token:string)=>{
  localStorage.setItem('user',JSON.stringify(user))
  localStorage.setItem('token',JSON.stringify(token))
}

const Register:React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[message, setmessage] = useState("");
    let navigate = useNavigate();
    

    const  googleAuth = ()=>{
      window.open(
       `https://test-auth-7lhs.onrender.com/auth/google/callback`,
       "_self"
      )
    }


  
  
    


    
    const login = async (event:React.FormEvent<HTMLFormElement>)=>{
      
      event.preventDefault();
      try {

        if(email =="" || password == '')
        {
          setmessage("Please enter all fields!")
          return
        }



        // const url= `${import.meta.env.VITE_REACT_APP_API_URL}/login`;
         
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`, {email:email, password:password} ,{withCredentials:true});
        console.log(response);

        // console.log(data.data.message)
        setmessage(response.data.message)
        addUserToLocalStorage(response.data.user,response.data.token)
      }
      
      
      
      catch (error:any) {
        // console.log(error.response.data);
        // console.log(error.response.message);
        console.log(error.response.data.message);
        setmessage(error.response.data.message)
        // console.log(error.response.status);
        // console.log(error.response.headers);
       
      }
    }

  
  


    useEffect(() => {
      if (message) {
        setTimeout(() => {
          setmessage("")
          if(message == 'Authentication successful'){
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


     

{message && <div className="flex items-center justify-center p-4 w-[72%] md:w-[25%] mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>

  <div>
    <span className="font-medium">{message}</span> 
  </div>
</div>}





        
        
          </div>
  
          <form className="form mt-3 md:mt-2" onSubmit={login}> 
            <div className="flex flex-col justify-center items-center ">
              
              {/* <label htmlFor="email" 
              className="self-start block mb-2 left-margin  md:self-auto md:mr-[17.8rem] md:ml-0">
                Email
              </label> */}
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={(e)=> setEmail(e.target.value)}
                className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              />
  
              {/* <label
                htmlFor="password"
                className="self-start block mb-2 left-margin md:self-auto md:mr-[15.8rem] md:ml-0"
              >
                Password
              </label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
                className="px-4 py-2 placeholder:text-slate-800  border  border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
              />


  
              <button type="submit"  className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
                <p >Login in </p>
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
  
  
  