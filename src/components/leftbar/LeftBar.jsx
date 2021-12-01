import React from "react"
import "./LeftBar.scss"
import logo from "../../img/leftbar/logo.png"
import icon1 from "../../img/leftbar/icon1.png"
import icon2 from "../../img/leftbar/icon2.png"
import icon3 from "../../img/leftbar/icon3.png"
import icon4 from "../../img/leftbar/icon4.png"
import spartak from "../../img/leftbar/spartak.png"
import favorite from "../../img/leftbar/favorite.png"
import spartakMini from "../../img/leftbar/spartak-mini.png"
import sochiMini from "../../img/leftbar/sochi-mini.png"
import krasnodarMini from "../../img/leftbar/krasnodar-mini.png"
import change from "../../img/leftbar/change.png"
import feedback from "../../img/leftbar/feedback.png"

export const LeftBar = () => {
    return (
        <div className="LeftBar">
            <div className="Leftbar__logo">
                <img src={logo} alt="" />
            </div>
            <div className="Leftbar__divider"></div>
            <div className="Leftbar__menu">
                <div className="Leftbar__menu-header">Меню</div>
                <div className="Leftbar__menu-item">
                    <img src={icon1} alt="" />
                    <span>Обзор команды</span>
                </div>
                <div className="Leftbar__menu-item --active">
                    <img src={icon2} alt="" />
                    <span>Обзор матча</span>
                </div>
                <div className="Leftbar__menu-item ">
                    <img src={icon3} alt="" />
                    <span>Сравнение игроков</span>
                </div>
                <div className="Leftbar__menu-item">
                    <img src={icon4} alt="" />
                    <span>Отчеты</span>
                </div>
            </div>
            <div className="Leftbar__divider"></div>
            <div className="Leftbar__club">
                <div className="Leftbar__club-header">Текущий клуб</div>
                <div className="Leftbar__club-layout">
                    <img src={spartak} alt="" />
                    <div className="Leftbar__club-title">Спартак Москва</div>
                    <ul className="Leftbar__club-favorite">
                        <img src={favorite} alt="" />
                        <span>Избранные клубы</span>
                        <div className="Leftbar__divider"></div>
                        <li>
                            <div>
                                <img src={spartakMini} alt="" />
                            </div>
                            <span>Спартак Москва</span>
                        </li>
                        <div className="Leftbar__divider"></div>
                        <li>
                            <div>
                                <img src={sochiMini} alt="" />
                            </div>
                            <span>Сочи</span>
                        </li>
                        <div className="Leftbar__divider"></div>
                        <li>
                            <div>
                                <img src={krasnodarMini} alt="" />
                            </div>
                            <span>Краснодар</span>
                        </li>
                    </ul>
                    <div className="Leftbar__club-change">
                        <img src={change} alt="" />
                        <span>Выбрать другой клуб</span>
                    </div>
                    <div className="Leftbar__divider"></div>
                </div>
            </div>
            <div className="Leftbar__feedback">
                <img src={feedback} alt="" />
                <span>Дать обратную связь</span>
            </div>
        </div>
    )
}
