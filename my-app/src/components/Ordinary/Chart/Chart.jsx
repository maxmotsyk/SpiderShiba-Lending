import { useState, useEffect } from "react";
import Title from "../../UI/Title/Title";
import s from './Chart.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import ChartCard from "../../Simple/CharCard/ChartCard";
// import smalLogo from '../../../../public/img/section/mini_shiba_img.svg'


ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({ tokenData }) => {

    const setOptionForChart = {
        cutout: "80%"
    }

    const setDataForChart = () => {
        let arrData = [];
        let color1Bar = [];

        tokenData.map(({ data, colorBar }) => {
            arrData.push(data);
            color1Bar.push(colorBar)
        })

        return {
            datasets: [
                {
                    type: 'doughnut',
                    data: arrData,
                    backgroundColor: color1Bar,
                    borderColor: '#101D3F',
                    borderWidth: 2,
                },

            ],

        }

    }

    return (

        <section className={s.chart_section}>

            <div className="container">

                <Title text={'Tokenomics'} />

                <div className={s.chart_row}>

                    <div className={s.chart_cards}>
                        {
                            tokenData.slice(0, Math.round(tokenData.length / 2)).map(({ parNames, description, data, colorBar }) => {
                                return (
                                    <ChartCard
                                        titleBar={parNames}
                                        descriptionBar={description}
                                        data1Bar={data}
                                        color1Bar={colorBar}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className={s.chart}>
                        <Doughnut data={setDataForChart()} options={setOptionForChart} />
                    </div>


                    <div className={s.chart_cards}>
                        {
                            tokenData.slice( Math.round(tokenData.length / 2), tokenData.length).map(({ parNames, description, data, colorBar }) => {
                                return (
                                    <ChartCard
                                        titleBar={parNames}
                                        descriptionBar={description}
                                        data1Bar={data}
                                        color1Bar={colorBar}
                                    />
                                )
                            })
                        }
                    </div>

                </div>


            </div>

        </section>
    )

}


export default Chart;