import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
function Signup() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async (e)=>{
    // Not reloading the page
    e.preventDefault();
    // Logic for Signup button
    const response = await fetch("api/userSignUp",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name : credentials.name,
          email : credentials.email,
          password : credentials.password,
          location : credentials.geolocation,
        })
        })
        // console.log("0")

        const res = await response.json();
        // console.log("1")
   
        if (res.success) {
          // console.log("2");
          localStorage.setItem("token",res.authToken);
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("isAdmin", false);
          router.push("/");
          // console.log("3");
        } else {
          alert("There is something wrong. Please try again");
        }
   
  }

  const handleChange =(e) =>{
    // store data
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div 
      style={{height:"90vh",
      backgroundImage:'url("https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_au:cuisines:pizza-5.jpg/v1/au/restaurants/4575805.jpg")',
      backgroundSize:"cover"}}
      className='flex justify-center items-center'>

        <div className="container w-full max-w-md">
         {/* form */}
          <form onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
          >
            <div className='mb-4'>
              <label
               htmlFor="name"
               className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                Name
              </label>

              <input
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              type="text"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.name}
            /> 
            </div>

            <div className='mb-4'>
              <label
               htmlFor="email"
               className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                Email
              </label>

              <input
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            /> 
            </div>

            <div className='mb-4'>
              <label
               htmlFor="password"
               className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                Password
              </label>

              <input
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              type="password"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            /> 
            </div>

            <div className='mb-4'>
              <label
               htmlFor="geolocation"
               className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                Address
              </label>

              <input
              placeholder="Enter your password"
              name="geolocation"
              onChange={handleChange}
              type="text"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.geolocation}
            /> 
            </div>

            <div className="flex justify-between items-center"></div>
            <button
            type="submit"
            className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
             >
            Sign Up
            </button>

            <Link
             href={"/login"}
             style={{all:"unset"}}>
              <button
              className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
              >
              Already a user?
              </button>
            </Link>
           
          </form>

        </div>
   
    </div>
  )
}

export default Signup
