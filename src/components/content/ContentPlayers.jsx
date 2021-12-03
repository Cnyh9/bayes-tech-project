import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { togglePlayer } from "../../store/teamSlice"

export const ContentPlayers = () => {
    const players = useSelector((store) => store.team)
    const dispatch = useDispatch()

    return (
        <div className="Content__players">
            <div className="Content__players-header">Выбрать игрока</div>
            {players.map((player) => {
                return (
                    <div key={player.id} className="Content__players-item">
                        <input
                            type="radio"
                            name="player"
                            value={player.id}
                            onChange={() => dispatch(togglePlayer(player.id))}
                            id={player.id}
                            style={{ marginRight: 10 }}
                        />
                        <div className="Content__players-item-name">
                            {player.name}
                        </div>
                        <div style={{ textAlign: "end", flex: 1 }}>
                            {player.position?.full}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
