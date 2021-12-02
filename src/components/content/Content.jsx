import React, { useState } from "react"
import "./Content.scss"
import { ContentPlayers } from "./ContentPlayers"
import { ContentStats } from "./ContentStats"

export const Content = () => {
    const [as, setAs] = useState(15)

    const changeHandler = (e) => {
        setAs(e.target.value)
    }
    return (
        <div className="Content">
            <div className="Content__layout">
                <div className="Content__header">
                    <div className="Content__header-item">Атака</div>
                    <div className="Content__header-item">Оборона</div>
                    <div className="Content__header-item">Пасы</div>
                    <div className="Content__header-item --active">
                        BT Score
                    </div>
                </div>
                <div className="Content__body">
                    <ContentPlayers changeHandler={changeHandler} />
                    <ContentStats as={as} />
                </div>
            </div>
        </div>
    )
}
