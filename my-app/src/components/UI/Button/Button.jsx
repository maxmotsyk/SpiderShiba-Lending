import { forwardRef } from 'react';
import {motion} from'framer-motion'
import s from './Button.module.scss';

const buttonClass = {
    ghostly: `${s.button} ${s.bt_white}`,
    bright: `${s.button} ${s.bt_bright_red}`,
    smallBright : `${s.button} ${s.bt_sm_bright_red}`,
    dull: `${s.button} ${s.bt_dull_red}`,
    smallDul : `${s.button} ${s.bt_sm_dull_red}`
}

const Button = forwardRef(({variant, href, text},ref) =>{

    return(

        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ref={ref}
            className={buttonClass[variant]} href={href}>
            {text}
        </motion.a>

    )

})

export default Button;
export const MButton = motion(Button);