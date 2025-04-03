import React from 'react'
import ProfileCard from './ProfileCard'
import { useSelector } from 'react-redux';
import Loading from './Loading'
const profileList = () => {

  const profiles = useSelector((state) => state.UserData.data);
  // console.log(userData)




  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-2 lg:px-2 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {profiles.length > 0 ? 
          profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} index={index} />
          ))
         : <Loading />}

      </main>

    </div>
  );
}

export default profileList