import React from 'react'
import { Link } from 'react-router-dom'
const ProfileCard = ({ profile, index }) => {
    return (
        <Link to={`/user/${index}`}>
            <div className="md:min-h-[45vh] bg-white px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="w-20 h-20 overflow-hidden rounded-full border border-gray-200">
                    <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="font-semibold text-lg mt-2">{profile.name}</h3>
                <p className="text-gray-600 text-sm w-[80%] mt-2">{profile.description}</p>
                <Link to={`/user/map/${index}`} className="w-[80%] mt-4 bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition">
                    View Summary
                </Link>
            </div>

        </Link>
    );
}

export default ProfileCard

{/* <div className="flex space-x-4">
                <div className='w-10 h-10'>
                    <img src={profile.image} alt="Profile" className="w-full h-full  object-cover" />
                </div>

                <div>
                    <h3 className="font-semibold text-lg">{profile.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{profile.description}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                        <i className="fas  mr-2"></i>
                        <span>{profile.location}</span>
                    </div>
                </div>
            </div>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                View Summary
            </button> */}