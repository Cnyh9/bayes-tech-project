import React from "react"
import { mockApi } from "../../api"
import flag from "../../img/content/flag.png"
import flag1 from "../../img/content/flag.svg"
import photo from "../../img/content/photo.png"
import btn from "../../img/content/btn.png"

export const ContentStats = ({ as }) => {
    const name = mockApi[as]?.name
    const position = mockApi[as]?.position.short
    const number = mockApi[as]?.number
    return (
        <div className="ContentStats">
            <div className="ContentStats__header">
                <div className="ContentStats__title">
                    Значимость каждого показателя <br /> в расчете оценки игрока
                </div>
                <div className="ContentStats__info">
                    <div className="ContentStats__info-name">{name}</div>
                    <div>
                        <span className="ContentStats__info-pos">
                            {position}
                        </span>
                        <span className="ContentStats__info-flag">
                            <img src={flag1} alt="" />
                        </span>
                    </div>
                    <div className="ContentStats__info-score">8.2</div>
                    <div className="ContentStats__info-number">{number}</div>
                    <div className="ContentStats__info-photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="ContentStats__btn">
                    <img src={btn} alt="" />
                </div>
            </div>
        </div>
    )
}
