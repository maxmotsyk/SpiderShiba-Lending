import s from './SocilLink.module.scss';
import { motion } from 'framer-motion';
import { forwardRef } from "react";

const SocilLink = forwardRef(({link, img, name}, ref) => {

    return(

        <a ref={ref} className={s.link} href={link}>
            <img src={img} alt={name} />
        </a>

    )

})

export default SocilLink;
export const MSocialLink = motion(SocilLink);