import React, { Component } from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidenav">
                <div className="sidenav-header">
                </div>
                <Link to="/" >Главная</Link>
                <Link to="/Datasets" >Датасеты</Link>
                <Link to="/Experiments" >Эксперименты</Link>
                <Link to="/Publications" >Публикации</Link>
                <Link to="/Customers" >Заказчики</Link>
                <Link to="/Teams" >Команды</Link>
                <Link to="/Collections" >Коллекции</Link>
                <Link to="/Competitions" >Конкурсы</Link>
                <Link to="/ExtendedSearch" >Расширенный поиск</Link>
                <Link to="/Tracks">Треки</Link> 
            </div>
        )
    }
}
