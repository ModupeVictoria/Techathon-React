import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    const [userData, setUserdata] = useState({})
    

    useEffect(() =>{
        const registerData = sessionStorage.getItem('user')
        console.log(registerData)

        // To get the data back in object format
        const userInfo = JSON.parse(registerData)

        setUserdata(userInfo)
    },[])

   
  return (
    <div className=" bg-[#eaf4fe] pt-32 pb-32">
      <div className="container bg-[#fff] mx-auto items-center rounded-lg p-6 max-w-md">
        <h1 className='font-bold text-3xl text-[#5990dd]'>Dashboard</h1>
        <h2 className="text-center mt-3 font-semibold">User Profile</h2>
        <div>
          <h3 className='font-semibold mt-2'>Username: <span className='font-normal ml-2'>{userData?.username}</span></h3>
          <h3 className='font-semibold mt-2'>First Name: <span className='font-normal ml-2'>{userData?.firstName}</span></h3>
          <h3 className='font-semibold mt-2'>Last Name: <span className='font-normal ml-2'>{userData?.lastName}</span></h3>
          <h3 className='font-semibold mt-2'>Email: <span className='font-normal ml-2'>{userData?.email}</span></h3>
          <h3 className='font-semibold mt-2'>Phone No: <span className='font-normal ml-2'>{userData?.phoneNo}</span></h3>
          <h3 className='font-semibold mt-2'>Message: <span className='font-normal ml-2'>{userData?.message}</span></h3>
          <h3 className='font-semibold mt-2'>Gender: <span className='font-normal ml-2'>{userData?.gender}</span></h3>
          <h3 className='font-semibold mt-2'>Password: <span className='font-normal ml-2'>{userData?.password}</span></h3>
        </div>
      </div>
      <button onClick={sessionStorage.clear()}> 
      <Link
        to={"/"}
        
        className="text-white bg-[#3781e2] mt-8 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Logout
      </Link> </button>
      
    </div>
  );
}

export default Dashboard;
