import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Forgotpass = () => {
    const {resetPassword} = useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState("");
    const passedEmail = location.state?.email || "";
    // console.log(passedEmail)
    useEffect(() => {
        setEmail(passedEmail)
    },[passedEmail]);

    const handleReset = (e) => {
        e.preventDefault();
        resetPassword(email)
        .then(() => {
            window.location.href = "https://mail.google.com"
        })
        .catch(error => alert("Error", error))
    }
    return (
        <div className='flex justify-center items-center py-10'>
        <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl">
       <div className="card-body py-12">
         <form>
           <h2 className='text-2xl font-semibold text-center pb-5 border-b border-gray-300'>Forget Password ?</h2>
           <label className="label text-md font-semibold pt-5 pb-2">Your Email </label>
           <input type="text" name='email' value={email} className="input w-full bg-base-200 border-none" placeholder="Your Email" required
           onChange={(e) => setEmail(e.target.value)}
           />
           <button onClick={handleReset} type='submit' className="btn btn-primary mt-4 w-full">Reset Password</button>
         </form>
       </div>
     </div>
      </div>
    );
};

export default Forgotpass;