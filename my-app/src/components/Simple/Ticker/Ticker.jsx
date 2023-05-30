import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import s from './Ticker.module.scss';

const Ticker = forwardRef((props,ref) =>{

    return(
        
        <div ref={ref} className={`container_fluid ${s.container_ticker}`}>

            <div className={s.ticker_row}>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
                <span>WARNING: this is not a meme coin</span>
            </div>

        </div>

    )

})
export default Ticker;
export const MTicker = motion(Ticker);