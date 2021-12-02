import React, { useEffect } from "react"
import { mockApi } from "../../api"
import photo from "../../img/content/photo.png"
import btn from "../../img/content/btn.png"
import "chart.js/auto"
import { Chart } from "react-chartjs-2"

export const ContentStats = ({ as }) => {
    const name = mockApi[as]?.name
    const position = mockApi[as]?.position.short
    const number = mockApi[as]?.number
    const flag = mockApi[as]?.flag

    const chartData = mockApi.map((i) => i.stats)
    const chartValues = Object.values(chartData[as])
    const chartKeys = Object.keys(chartData[as])
    const average = chartValues.reduce((p, a) => {
        return p + a
    })

    const result = Math.round(average / chartValues.length)

    const data = {
        labels: chartKeys,
        datasets: [
            {
                axis: "y",
                data: chartValues,
                fill: false,
                backgroundColor: ["rgba(240, 85, 111, 1)"],
                barThickness: 20,
            },
        ],
    }
    const options = {
        indexAxis: "y",
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        options: {
            scales: {
                x: {
                    min: 0,
                    max: 100,
                },
            },
        },
    }
    return (
        <div className="ContentStats">
            <div className="ContentStats__header">
                <div className="ContentStats__title">
                    Значимость каждого показателя <br /> в расчете оценки игрока
                </div>
                <div className="ContentStats__info">
                    <div className="ContentStats__info-name">{name}</div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <span className="ContentStats__info-pos">
                            {position}
                        </span>
                        <span className="ContentStats__info-flag">
                            <img src={flag} alt="" />
                        </span>
                    </div>
                    <div className="ContentStats__info-score">{result}</div>
                    <div className="ContentStats__info-number">{number}</div>
                    <div className="ContentStats__info-photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="ContentStats__btn">
                    <img src={btn} alt="" />
                </div>
            </div>
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
