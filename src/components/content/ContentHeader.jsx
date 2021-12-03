import React from "react"
import btn from "../../img/content/btn.png"
import photo from "../../img/content/photo.png"
import { useSelector } from "react-redux"

export const ContentHeader = ({ result }) => {
    const players = useSelector((state) => state.team)

    return (
        <div>
            {players.map((player) => {
                if (player.checked) {
                    return (
                        <div className="ContentStats__header" key={player.id}>
                            <div className="ContentStats__title">
                                Значимость каждого показателя <br /> в расчете
                                оценки игрока
                            </div>
                            <div className="ContentStats__info">
                                <div className="ContentStats__info-name">
                                    {player.name}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <span className="ContentStats__info-pos">
                                        {player.position.short}
                                    </span>
                                    <span className="ContentStats__info-flag">
                                        <img src={player.flag} alt="" />
                                    </span>
                                </div>
                                <div className="ContentStats__info-score">
                                    {result}
                                </div>
                                <div className="ContentStats__info-number">
                                    {player.number}
                                </div>
                                <div className="ContentStats__info-photo">
                                    <img src={photo} alt="" />
                                </div>
                            </div>
                            <div className="ContentStats__btn">
                                <img src={btn} alt="" />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
