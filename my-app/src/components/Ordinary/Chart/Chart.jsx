import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Title from "../../UI/Title/Title";
import s from './Chart.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {MChartCard} from "../../Simple/CharCard/ChartCard";
// import smalLogo from '../../../../public/img/section/mini_shiba_img.svg'

ChartJS.register(ArcElement, Tooltip, Legend);

const animationChartCarf = {

    hidden :{
        y:200,
        opacity: 0 
    },
    visibale: custom =>({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.15}
    })

}


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

    const setChartCard = (from, to) => {

        return tokenData.slice(from, to).map(({id,parNames, description, data, colorBar }, i) => {
            
            return (
                <MChartCard
                    variants = {animationChartCarf}
                    key={id}
                    custom = {i}
                    titleBar={parNames}
                    descriptionBar={description}
                    data1Bar={data}
                    color1Bar={colorBar}
                />
            )
            
        })

    }

    return (

        <section className={s.chart_section}>

            <motion.div
                initial ="hidden"
                whileInView="visibale"
                viewport={{
                    amount : 0.5,
                    once: true
                }}
                className="container">

                <Title text={'Tokenomics'} />

                <div className={s.chart_row}>

                    <div className={s.chart_cards}>
                        {
                            setChartCard(0,Math.round(tokenData.length / 2))
                        }
                    </div>

                    <div className={s.chart}>
                        <Doughnut data={setDataForChart()} options={setOptionForChart} />
                    </div>


                    <div className={s.chart_cards}>
                        {
                            setChartCard(Math.round(tokenData.length / 2), tokenData.length)
                        }
                    </div>

                </div>

            </motion.div>

        </section>
    )

}


export default Chart;