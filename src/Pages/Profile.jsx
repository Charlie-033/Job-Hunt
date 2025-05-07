import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from '../assets/userIcon.jpg'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import DocumentTitle from '../Component/DocumentTitle';

const Profile = () => {
  const {user} = useContext(AuthContext);
  DocumentTitle("Profile | Job Hunt")
    return (
        <div className='py-8 bg-linear-to-b from-blue-200 to-neutral-200'>
        <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl py-5 bg-slate-200">
  <div className="p-8">
    <div className='flex items-center gap-5'>
      <div>
        <img className="w-20 h-20 rounded-full" src={user ? user.photoURL : userIcon}alt="" />
      </div>
      <div>
      <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">Your name</div>
      <p className="block mt-1 text-lg leading-tight font-medium text-black">{user ? user.displayName : "User Unavailable"}</p>
      </div>
    </div>
    
    <div className="mt-6">
      <div className="flex justify-between items-center py-3 border-b border-gray-400">
        <div>
          <div className="text-sm font-medium text-gray-500">Name</div>
          <div className="text-gray-900">{user ? user.displayName : "User Unavailable"}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-3 border-b border-gray-400">
        <div>
          <div className="text-sm font-medium text-gray-500">Email account</div>
          <div className="text-gray-900">{user ? user.email : "User Unavailable"}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-3 border-b border-gray-400">
        <div>
          <div className="text-sm font-medium text-gray-500">Mobile number</div>
          <div className="text-gray-900">Add number</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-3 border-b border-gray-400">
        <div>
          <div className="text-sm font-medium text-gray-500">Location</div>
          <div className="text-gray-900">{user ? "California, USA" : "Not Found"}</div>
        </div>
      </div>
    </div>
    <div className='py-5'>
      <h4 className='font-medium text-gray-500'>Bio : </h4>
      <p className='text-sm'>{user ? "Creative and motivated programmer with expertise in JavaScript, Python, and web development. Experienced in building responsive applications, integrating APIs, and working with databases. Passionate about solving problems through code and constantly learning new technologies to improve performance and user experience. A reliable team player committed to clean, efficient solutions." : "Not Found"}</p>
    </div>
    <Link to="/auth/edit-profile" className="mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Edit Profile
    </Link>
  </div>
</div>
</div>
    );
};

export default Profile;