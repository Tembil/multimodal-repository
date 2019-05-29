import React, { Component } from 'react'
import SideBar from './sidebar';
import MainContent from './main-content';
import '../styles/header.css';

const MainPage = () => {
    return (
        <div>
            <SideBar />
            <MainContent />
        </div>
    )
}

export default MainPage