import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";


function Register() {

  const navigate = useNavigate()

  // initialValue
  const initialValue = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
    gender: "",
    password: "",
    Comfirmpassword: "",
    checked: false,
  };

  const [userData, setUserdata] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = JSON.stringify(userData);
    sessionStorage.getItem('user') === null && sessionStorage.setItem('user', user)

    if(userData.password === userData.Comfirmpassword){
      navigate("/login")
    }
    else{
      setErrorMes("Password and Comfirm Password must be the same!")
    }
    
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserdata({ ...userData, [name]: type === "checkbox" ? checked : value });
  };
  console.log(userData);


  return (
    <div className=" bg-[#eaf4fe] pt-32 pb-32">
      <div className="container bg-[#fff] mx-auto items-center rounded-lg p-6 max-w-md">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
              First Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter First Name"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Phone No"
              name="phoneNo"
              value={userData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              for="gender"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Gender
            </label>
            <select
              value={userData.gender}
              name="gender"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
              <option selected>Choose a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              name="message"
              value={userData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
            <input
              type={show ? "text" : "password"} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <button type='button'
                className='absolute right-2.5 bottom-3'
                 onClick={() => setShow((prev) => !prev)}>
                    {!show ? (
                         <FaEyeSlash/>
                         ) : ( 
                            <FaEye/>
                            )}
                   
                </button>
            </div>
            
          </div>

          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
             Comfirm Password
            </label>
            <div className="relative">
            <input
              type={show ? "text" : "password"} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Comfirm password"
              name="Comfirmpassword"
              value={userData.Comfirmpassword}
              onChange={handleChange}
              required
            />
            <button type='button'
                className='absolute right-2.5 bottom-3'
                 onClick={() => setShow((prev) => !prev)}>
                    {!show ? (
                         <FaEyeSlash/>
                         ) : ( 
                            <FaEye/>
                            )}
                   
                </button>
            </div>
            
          </div>
          <span className="text-[#DC143C]">{errorMes}</span>

          <div class="flex items-center mt-2">
            <input
              checked={userData.checked}
              type="checkbox"
              name="checked"
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              I agree with the{" "}
              <span class="text-blue-600 dark:text-blue-500 hover:underline">
                terms and conditions
              </span>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-[#3781e2] mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
