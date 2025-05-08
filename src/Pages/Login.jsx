import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import DocumentTitle from '../Component/DocumentTitle';



const Login = () => {
  const {Login, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('')
  // console.log(Login)
  const [email, setEmail] = useState("")
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    Login(email, password)
    .then(res => {
      console.log(res.user);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error => {
      // console.log(error);
      setError("Error : Invalid Email or Password! Try Again")
    })
  }
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
    .then(res => {
      console.log(res);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error => {
      console.log(error)
    })
  }
  DocumentTitle("Login | Job Hunt")
    return (
       <div className='flex justify-center items-center py-10'>
         <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl">
        <div className="card-body py-12">
          <form onSubmit={handleLogin}>
            <h2 className='text-2xl font-semibold text-center pb-5 border-b border-gray-300'>Login Your Account</h2>
            <label className="label text-md font-semibold pt-5 pb-2">Email</label>
            <input type="email" name='email' className="input w-full bg-base-200 border-none" placeholder="Email Address" required
            onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label text-md font-semibold pt-5 pb-2">Password</label>
            <input type="password" name='password' className="input w-full bg-base-200 border-none" placeholder="Password" required/>
            <p>
            {
              error && <p className='text-red-600 text-sm font-semibold'>{error}</p>
            }
            </p>
            <div className='pt-3 underline text-sm'><Link to="/auth/forgot-pass" state={{email}} className="link link-hover">Forgot password?</Link></div>
            <button type='submit' className="btn btn-primary mt-4 w-full">Login</button>
            <p className='text-center pt-5'>Dont’t Have An Account ? <Link to='/auth/register' className='text-orange-600'>Register</Link></p>
          </form>
            <button onClick={handleGoogleSignIn} className='btn btn-active w-full bg-orange-400'><span className='text-xl'><FcGoogle/></span> SignIn With Google</button>
            <button className='btn btn-neutral w-full '><span className='text-xl'><FaGithub/></span> SignIn With GitHub</button>
        </div>
      </div>
       </div>
    );
};

export default Login;