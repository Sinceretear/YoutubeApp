import React from 'react';
import {Link } from 'react-router-dom';
import Navbar from './Navbar';


function Dashboard() {
    return (
        <>
        <Navbar /><div>
            Home Page
            <Link to="/#"> Goooo </Link>
        </div>
        </>
    );
}

export default Dashboard;