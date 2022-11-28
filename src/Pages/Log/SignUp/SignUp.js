import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope,  FaUnlock, FaUser } from "react-icons/fa";
import axios from "axios"
import { AuthContext } from "../../../ContextApi/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import PageLoading from "../../Shared/PageLoading/PageLoading";
const SignUp = () => {
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate()

  const {register,handleSubmit,reset} = useForm()

  const googleAuthProvider = new GoogleAuthProvider();



  const {
    user,
        loading,
        createUser,
        login,
        loginWithGoogle,
        logOut,
         updateUser,
         setLoading
  } = useContext(AuthContext);
  const handleCreateUser =(data)=>{
    setLoading(true)
    const displayName = data.displayName;
    const Photo = data.photofile[0];

    createUser(data?.email ,data?.password)
    .then(result =>{
      const user = result.user;
      
      if(user.email){
        const formData = new FormData()
        formData.append("image",Photo)
        axios.post("https://api.imgbb.com/1/upload?key=5b4fcdb13ffc1a8120ad637767dc49e7",formData)
        .then(res => {
         if((res.data.data.url)){
           const updateInfo = {
             displayName,
             photoURL : res?.data?.data?.url
           }

           handleUpdateUser(updateInfo,data,user)
         }
        })
        .catch(e =>{
          setLoading(false)
         console.log(e);
         toast.error(e.message)
        })
      }

    })
    .catch(e =>{
      setLoading(false)
      console.log(e);
      toast.error(e.message)
    })
  }

  const handleUpdateUser = (updateInfo,data,user)=>{
    // console.log(updateInfo);
   updateUser(updateInfo)
   .then(() =>{
   
    // Add db user 
    const email = data.email ;
    const role = data.role;
    const name = data.displayName; 
   
    const dbUser = {
      email,role,name
    }
    console.log(dbUser);
    axios.post("https://phone-bazaar-server-arifbiswas.vercel.app/users",dbUser).then(res => {
      console.log(res.data);
      localStorage.setItem("authToken",res.data.token)
      if(res.data.result.acknowledged){
        axios.get(`https://phone-bazaar-server-arifbiswas.vercel.app/dbUser?email=${email?.email}`).then(res => {
        // console.log(res.data);
        user.userRole = res.data.role ;
        user.verifiedUser = res.data.verified ;
        
        setLoading(false)
        // console.log( res.data);
    }).catch(e=>{
      setLoading(false)
        console.log(e)
        window.location.reload(false)
    })
    reset()
    toast.success("SignUp successfully Done")
    setLoading(false)
   navigate(from,{replace : true})
      }
    }).catch(e => {
      setLoading(false)
      console.log(e)
      toast.error(e.message)
    })

   } )
   .catch(e =>{
    setLoading(false)
    toast.error(e.message)
    console.log(e);
   })
  }

  const handleGoogleLogin =()=>{
    setLoading(true)
    loginWithGoogle(googleAuthProvider)
    .then(result =>{
      const currentUser = result.user;

      // Add db user 
      const name = currentUser.displayName; 
    const email = currentUser.email ;
    
    const dbUser = {
      email,
      name,
      
    }
    // console.log(dbUser);
    axios.post("https://phone-bazaar-server-arifbiswas.vercel.app/users",dbUser).then(res => {
      console.log(res.data);
      localStorage.setItem("authToken",res.data.token)
      currentUser.alreadyHave = res?.data?.alreadyHave || false;
      setLoading(true)
      axios.get(`https://phone-bazaar-server-arifbiswas.vercel.app/dbUser?email=${user?.email}`).then(res => {
        // console.log(res.data);
        currentUser.userRole = res.data.role ;
        currentUser.verifiedUser = res.data.verified ;
        
        setLoading(false)
        // console.log( res.data);
    }).catch(e=>{
        console.log(e)
        // window.location.reload(false)
        
    })
       
        reset()
        toast.success("Login successfully Done")
        setLoading(false)
        navigate(from,{replace : true})
      
    }).catch(e => {
      console.log(e)
      toast.error(e.message)
      setLoading(false)
    })


    
    })
    .catch(e =>{
      console.log(e);
      toast.error(e.message)
      setLoading(false)
    })
  }

  if(loading){
    return <PageLoading></PageLoading>
  }

  return (
    <div>
      <div className="">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">
              Sign up with
            </p>
            <div>
              <div className="flex items-center justify-center space-x-4 mt-3">
               
                <button 
                onClick={handleGoogleLogin}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-cyan-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#e53935"
                      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-light">
       
              Or sign up with credentials
            </p>
            <form 
            onSubmit={handleSubmit(handleCreateUser)}
            className="mt-6">
              <div className="relative">
                <input
                {...register("displayName")}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  required
                  type="text"
                  placeholder="username"
                />
                <div className="absolute left-5 inset-y-0 flex items-center">
                 <FaUser></FaUser>
                </div>
              </div>
              <div className="relative">
              <input 
               {...register("photofile")}
               required
              type="file" accept="image/*" className="file-input  w-full mt-3" />
                
              </div>
              <div className="relative mt-3">
                <input
                {...register("email")}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <div className="absolute left-5 inset-y-0 flex items-center">
                 <FaEnvelope></FaEnvelope>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                required
                {...register("password")}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  
                  type="password"
                  placeholder="Password"
                />
                <div className="absolute left-5 inset-y-0 flex items-center">
                  <FaUnlock></FaUnlock>
                </div>
              </div>

              


              <div className="flex gap-2 flex-col my-4">
<label htmlFor="default-radio-1" className="ml-2 text-lg font-medium text-gray-900 ">
    <input {...register("role")} id="default-radio-1" defaultChecked type="radio" value="buyer" className="w-4 h-4bg-gray-100 border-gray-300  " />
    Buyer</label>
    
    <label htmlFor="default-radio-2" className="ml-2 text-lg font-medium text-gray-900 ">
    <input {...register("role")} id="default-radio-2" type="radio" value="seller" className="w-4 h-4bg-gray-100 border-gray-300 " />
    Seller</label>
</div>

             
              <div className="flex items-center justify-center mt-8">
         
                <button className="text-white py-2 px-4 uppercase rounded bg-cyan-500 hover:bg-cyan-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
           
                  Create Account
                </button>
              </div>
            </form>
            <p className="text-sm text-center mt-12">You have already account <Link className="text-lg text-primary" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
