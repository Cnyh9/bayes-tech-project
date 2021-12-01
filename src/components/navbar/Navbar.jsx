import React from "react"
import "./Navbar.scss"
import ava from "../../img/navbar/ava.png"

export const Navbar = () => {
    return (
        <header className="Navbar">
            <div className="Navbar__wrapper">
                <div className="Navbar__item --main">Обзор матча</div>
                <div className="Navbar__item">Сводка</div>
                <div className="Navbar__item">Составы</div>
                <div className="Navbar__item --active">
                    Подробная статистика
                </div>
                <div className="Navbar__item">Анализ матча</div>
            </div>
            <div className="Navbar__ava">
                <img src={ava} alt="" />
            </div>
        </header>
    )
}
