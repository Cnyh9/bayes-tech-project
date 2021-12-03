import React, { useState } from "react"
import { Loader } from "../Loader/Loader"
import "./Content.scss"
import { ContentPlayers } from "./ContentPlayers"
import { ContentStats } from "./ContentStats"

export const Content = () => {
    const [isLoading, setIsLoading] = useState(false)
    setTimeout(() => {
        setIsLoading(true)
    }, 1000)

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
                    {isLoading ? (
                        <>
                            <ContentPlayers />
                            <ContentStats />
                        </>
                    ) : (
                        <div className="lds__wrapper">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
