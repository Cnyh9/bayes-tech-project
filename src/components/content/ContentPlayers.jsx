import React from "react"
import { mockApi } from "../../api"

export const ContentPlayers = ({ changeHandler }) => {
    return (
        <div className="Content__players">
            <div className="Content__players-header">Выбрать игрока</div>
            {mockApi.map((player) => {
                return (
                    <div key={player.id} className="Content__players-item">
                        <input
                            type="radio"
                            name="player"
                            value={player.id}
                            onChange={changeHandler}
                            id={player.id}
                            style={{ marginRight: 10 }}
                        />
                        {/* <label htmlFor={player.id}>{player.name}</label>     */}
                        <div style={{ marginRight: 40 }}>{player.name}</div>
                        <div style={{ textAlign: "end", flex: 1 }}>
                            {player.position?.full}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
