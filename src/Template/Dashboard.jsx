import React from 'react'
import Header from '../Components/Topnav';
import ProfileList from '../Components/ProfileList'
import Footer from '../Components/Footer';
import Topnav from '../Components/Topnav';
const Dashboard = () => {


    return (
        <div className='mt-10 bg-gray-50'>
            <Topnav />
            <ProfileList />
            <Footer />
        </div>
    )
}

export default Dashboard