import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>
                Главная
            </h1>

            <Link to="/Tracks" className="btn btn-primary btn-add">Перейтик трекам</Link>
        </div>
    )
}

export default HomePage;