import s from './ChartCard.module.scss';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';


const ChartCard = forwardRef(({titleBar, data1Bar, data2Bar, descriptionBar, color1Bar, color2Bar},ref) => {

    return(
        <div
            ref={ref}
            className={s.chart_card_body}>

            <div className={s.progress_bar}>
                <hr style={{width : `${data1Bar}%` , background: color1Bar}} />
            </div>
            
            <div className={s.text_col}>

                <h2>
                    {titleBar}
                </h2>

                <p>
                    {descriptionBar}
                </p>

            </div>
            
        </div>
    )

})


export default ChartCard;

export const MChartCard = motion(ChartCard);