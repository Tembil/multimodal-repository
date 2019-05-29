import React, { Component } from 'react'
import '../styles/auth.css';

const Auth = () => {
    return (
        <div>
            <form class="form-5 clearfix">
                <p>
                    <input type="text" id="login" name="login" placeholder="Логин" />
                    <input type="password" name="password" id="password" placeholder="Пароль" />
                </p>
                <button type="submit" name="submit">
                    <i class="icon-arrow-right"></i>
                    <span>Вход</span>
                </button>
            </form>

        </div>
    )
}

export default Auth;