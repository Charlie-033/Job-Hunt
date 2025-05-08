import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import DocumentTitle from '../Component/DocumentTitle';

const ProfileEdit = () => {
  DocumentTitle("Edit | Job Hunt")
  const {updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const Photo = e.target.photo.value;
    // console.log(Name, Photo);

    updateUser({
        displayName: Name,
        photoURL: Photo,
      })
      .then(() => {
        // console.log("Profile Updated!");
        navigate("/")
      })
      .catch(error => {
        alert("Invalid User! Please Login First...");
        navigate("/auth/login")
      })
   DocumentTitle("Update-profile | Job Hunt")
  }
    return (
       <div className='flex justify-center items-center py-10'>
         <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl">
        <div className="card-body py-12">
          <form onSubmit={handleUpdate}>
            <h2 className='text-2xl font-semibold text-center pb-5 border-b border-gray-300'>Edit Your Profile</h2>
            <label className="label text-md font-semibold pt-5 pb-2">Your Name </label>
            <input type="text" name='name' className="input w-full bg-base-200 border-none" placeholder="Your Name" required/>
            <label className="label text-md font-semibold pt-5 pb-2">Photo URL</label>
            <input type="text" name='photo' className="input w-full bg-base-200 border-none" placeholder="Photo URL" required/>
            <button type='submit' className="btn btn-primary mt-4 w-full">Save Change</button>
          </form>
        </div>
      </div>
       </div>
    );
};

export default ProfileEdit;