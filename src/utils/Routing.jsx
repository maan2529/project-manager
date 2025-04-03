import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../Template/Dashboard'
import UserInfo from '../Template/UserInfo'
import NotFound from '../Template/NotFound'
import MapComponent from '../Template/MapComponent'
import Administrator from '../Template/administrator'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user/:id" element={<UserInfo />} />
            <Route path="/user/map/:id" element={<MapComponent />} />
            <Route path="/admin" element={<Administrator />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing