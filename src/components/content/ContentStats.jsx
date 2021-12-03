import React from "react"
import "chart.js/auto"
import { Chart } from "react-chartjs-2"
import { ContentHeader } from "./ContentHeader"
import { useSelector } from "react-redux"

export const ContentStats = ({ as }) => {
    const labels = [
        "Разгон",
        "Скорость рывков",
        "Выбор позиции",
        "Сила удара",
        "Пенальти",
        "Видение поля",
        "Навесы",
        "Короткий пас",
        "Длинный пас",
        "Ловкость",
        "Реакция",
        "Владение мячом",
        "Дриблинг",
        "Перехваты",
        "Выносливость",
        "Сила",
    ]
    const state = useSelector((state) => state.team)
    const stats = state.find((el) => el.checked)

    const chartValues = Object.values(stats.stats)
    const average = chartValues.reduce((p, a) => {
        return p + a
    })
    const result = Math.round(average / chartValues.length)

    const data = {
        labels: labels,
        datasets: [
            {
                axis: "y",
                data: chartValues,
                fill: false,
                backgroundColor: ["rgba(240, 85, 111, 1)"],
                barThickness: 10,
            },
        ],
    }
    const options = {
        indexAxis: "y",
        plugins: {
            legend: {
                display: false,
            },
        },
    }
    return (
        <div className="ContentStats">
            <ContentHeader result={result} />
            <Chart
                data={data}
                options={options}
                type="bar"
                className="ContentChart"
                width={1000}
                height={650}
            />
        </div>
    )
}
