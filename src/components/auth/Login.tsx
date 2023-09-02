// // import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Profile from "../profile";


// const Register = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [user, setUser]=useState(null);
//   // const  googleAuth = ()=>{
//   //    window.open(
//   //     `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
     
//   //    )
//   // }

//     // console.log(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`);
    
//     const postData = (event:any):void =>{
//       event.preventDefault(); 
      
//           //  axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`,{email: email, password: password}).then(data =>{console.log(data.data.user.username)
//           //   setUser(data.data.user)


          
//           // });
     
//     }

//     useEffect(() => {
//       if (user) {
//         setTimeout(() => {
//           <Profile user={user}/>
//         }, 3000);
//       }
//     }, [user]);

  
//     return (
//       <div>
//         <section className="h-full w-full">
//           <div className="text center flex flex-col justify-center items-center  font-inter ">
//             {/* <img width={100} src="/img/logo1.png" alt="logo" /> */}
//             <h2 className="text-3xl font-semibold  mt-32 ">
//             <Link to='/'>Scrible Note </Link>   
//             </h2>
//             <h2 className="self-start ml-[4rem]  mt-9 text-2xl font-medium  tracking-wide font-inter md:self-auto md:mr-[13rem]">
//               Welcome Back!
//             </h2>
  
//             <button  className=" btn_width  mt-6 border border-slate-400 rounded-md p-2 flex justify-center items-center ">
//               <img className="inline w-5" src="/img/google.png" alt="g-logo" />
//               <p className="inline pl-2 font-medium">
//                  <Link to="http://localhost:5000/auth/google">
//                 Continue with Google
//               </Link> 
//                  </p>
//             </button>
  
//             <p className="mt-7 text-center text-xl mb-10 md:mb-4">Or</p>
         
        
//           </div>
  
//           <form className="form mt-3 md:mt-2" onSubmit={postData}> 
//             <div className="flex flex-col justify-center items-center ">
              
//               {/* <label htmlFor="email" 
//               className="self-start block mb-2 left-margin  md:self-auto md:mr-[17.8rem] md:ml-0">
//                 Email
//               </label> */}
//               <input
//                 type="text"
//                 placeholder="Email"
//                 required
//                 onChange={(e)=> setEmail(e.target.value)}
//                 className="px-4 py-2 placeholder:text-slate-800 border border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
//               />
  
//               {/* <label
//                 htmlFor="password"
//                 className="self-start block mb-2 left-margin md:self-auto md:mr-[15.8rem] md:ml-0"
//               >
//                 Password
//               </label> */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e)=> setPassword(e.target.value)}
//                 className="px-4 py-2 placeholder:text-slate-800  border  border-slate-400 rounded-md p-2  mb-3 input_width md:px-4 md:py-2"
//               />


  
//               <button  className="btn_width  mt-3 border bg-black text-white border-slate-400 rounded-md p-2    ">
//                 <p >Login in </p>
//               </button>
//               <br />
//             </div>
//           </form>
//           <div className="text-center mt-5 mb-6">
//             <p className="text-slate-600">
//               No account? <span className="text-black">
//                 <Link to='/register'>Create one </Link>
//               </span>
//             </p>
//           </div>
//         </section>
//       </div>
//     );
//   };
  
//   export default Register;
  
  
  