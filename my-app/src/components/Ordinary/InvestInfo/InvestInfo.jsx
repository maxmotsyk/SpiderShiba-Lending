import s from './InvestInfo.module.scss';
import { motion } from 'framer-motion';
import Title from '../../UI/Title/Title';
import { MButton } from '../../UI/Button/Button';


const InvestInfo = () => {

    const animationText = {
        hidden :{
            y: -100,
            opacity: 0 
        },
        visibale: custom =>({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }

    return (

        <section className={s.investInfo}>

            <div className="container_fluid">

                <motion.div 
                    initial = "hidden"
                    whileInView= "visibale"
                    viewport={{once: true}}
                    className={s.investInfo_row}>

                    <motion.div 
                        variants={animationText}
                        custom={1}
                        className={s.investInfo_content}>

                        <Title text={'Why invest in SpiderShiba Inu?'} />

                        <p>
                            in case you have lived in a cave in the last
                            few months we will give you a brief summary
                            of what happened in crypto industry
                        </p>

                        <MButton variant='bright' text="Learn more about SpiderShiba" />

                    </motion.div>

                    <div className={s.cards_info}>

                        <motion.div 
                            variants={animationText}
                            custom={2}
                            className={s.card}>

                            <img src="/img/section/invest_info/Group 91.svg" alt="trend up icon" />

                            <div className={s.text}>

                                <h5>
                                    Massive trend
                                </h5>

                                <p>
                                    Shiba inu has invaded the market with an infinity of
                                    other meme coins that collect thousands of BNB and
                                    after the launch they make mind-boggling numbers!
                                </p>

                            </div>

                        </motion.div>

                        <motion.div 
                            variants={animationText}
                            custom={3}
                            className={s.card}>

                            <img src="/img/section/invest_info/star_ico.svg" alt="star_icon" />

                            <div className={s.text}>

                                <h5>
                                    100% of value, 0% of memecoin!
                                </h5>

                                <p>
                                    We took the best from this trend and have decided to ride 
                                    this tremendous wave success in Shiba Inu tokens, not only 
                                    by launching a coin, but by creating a real NFT game p2e
                                </p>

                            </div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>

    )

}

export default InvestInfo;