import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const UserDetails = ({ profile, index ,managerDelete}) => {
    // const profiles = useSelector((state) => state.UserData.data);
    return (
        <div className='flex flex-row justify-around py-3 bg-gray-100'>
            <div className='w-10 h-10 rounded-full'><img className='object-fit w-full h-full rounded-full' src={profile.photo} alt="ing" /></div>

            <div className='hidden md:block'>{profile.contact}</div>

            <div>{profile.description.split(",")[0]}</div>
            <div onClick={() => managerDelete(index)}><i class="ri-delete-bin-7-fill text-red-600"></i></div>


        </div>
    )
}

export default UserDetails