import { motion } from 'framer-motion';
import s from './PartnerRow.module.scss';

const PartnerRowClass = {
    ghostly: `${s.partners} ${s.partners_ghostly}`,
    bright: `${s.partners} ${s.partner_bright}`
}

const animationPartner = {
    hidden: {
        scale: 0,
    },
    visible: custom => ({
        scale: 1,
        transition: { delay: custom * 0.15 }
    })
}

const PartnerRow = ({ data, variant }) => (
        <div className={s.partner_row}>

            {
                data.map(({ name, img, id }, i) => {
                    return (
                        <motion.img
                            initial='hidden'
                            viewport={{
                                amount:1,
                                once: true
                            }}
                            whileInView='visible'
                            variants={animationPartner}
                            custom={i}
                            className={PartnerRowClass[variant]}
                            key={id}
                            src={img}
                            alt={name}
                        />
                    )

                })

            }
        </div>
    )

export default PartnerRow;