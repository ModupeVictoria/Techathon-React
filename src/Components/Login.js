import React, {useState, useEffect} from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [userData, setUserdata] = useState({})
    const [errorMes, setErrorMes] = useState('');
    
    const navigate = useNavigate()

    useEffect(() =>{
        const registerData = sessionStorage.getItem('user')
        console.log(registerData)

        // To get the data back in object format
        const userInfo = JSON.parse(registerData)

        setUserdata(userInfo)
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault();
        // username.length > 10 && password.length > 6 
        // ? alert(username)
        // : alert("Fill it up!!")
        if (userData?.username === username && userData?.password === password){
            navigate("/dashboard")
        }
        else{
            setErrorMes("Incorrect Username or Password!")
        }
    }



  return (
    <div className=' bg-[#eaf4fe] pt-32 pb-32'>
        <div className='container bg-[#fff] mx-auto items-center rounded-lg p-6 max-w-sm'>
            {/* Error Message */}
        <span className="text-[#DC143C]">{errorMes}</span>

        <h1 className='text-center text-2xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit} >
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        

        <div>
            <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900">Password</label>
            <div className="relative">
                <input type={show ? "text" : "password"} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
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
        <button type="submit" className="text-white bg-[#3781e2] mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        
        >Submit</button>
        </form>
        </div>
       
        
    </div>
  )
}

export default Login