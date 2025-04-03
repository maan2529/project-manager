import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { deleteUserData } from '../store/userDataSlice';

const UserInfo = () => {
  const profiles = useSelector((state) => state.UserData.data);
  const userDispatcher = useDispatch();
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const handleDeleteBtn = (id) => {
    userDispatcher(deleteUserData(Number(id)))
    navigate(-1);

  }

  return (

    <>
      {profiles && profiles?.map((profile, index) => {
        return (index === Number(id) || id === profile.name) ? <div className=" pt-20 flex flex-col items-center bg-gray-50">

          <img className="h-32 w-32 rounded-full border-4 border-white object-cover" src={profile.photo} alt="Profile" />




          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{profile.name} </h1>
              <p className="text-lg text-gray-500">{profile.description}</p>
            </div>


            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {[{ label: "Location", value: profile.location }, { label: "Email", value: profile.contact }, { label: "Phone", value: profile.phone }, { label: "Joined", value: "March 2020" }].map((info) => (
                  <div key={info.label}>
                    <h3 className="text-sm font-medium text-gray-500">{info.label}</h3>
                    <p className="text-base text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white bg-red-200 shadow rounded-lg p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {profile.interests?.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex gap-5 justify-center mt-5 '>
              <Link to={`/edit/${id}`} className='px-[20%] py-1  w-fit border  rounded-sm bg-zinc-800 text-white cursor-pointer hover:shadow'>Edit</Link>

              <Link onClick={() => handleDeleteBtn(id)} className='px-[20%] py-1   w-fit border  rounded-sm cursor-pointer bg-red-600 text-whitehover:shadow text-white'>Delete</Link>
            </div>
          </div>
          <div className='h-[20vh]'></div>
        </div> : null
      })}

    </>


  )
}

export default UserInfo