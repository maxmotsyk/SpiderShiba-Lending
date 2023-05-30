import s from './MainBaner.module.scss';
import { MButton } from '../../UI/Button/Button';
import Ticker ,{MTicker} from '../../Simple/Ticker/Ticker'
import { MClipBoard } from '../../Simple/ClipBoard/ClipBoard';
import {motion} from'framer-motion'

const MainBaner = () => {

    const animationText = {
        hidden :{
            x:-100,
            opacity: 0 
        },
        visibale: custom =>({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.15}
        })
    }

    return (

        <>

            <motion.div 
                initial = "hidden"
                viewport={{once: true}}
                whileInView="visibale"
                className={`container ${s.mainBaner_container}`}>

                <div className={s.mainBaner_row}>

                    <div className={s.text_content}>

                        <motion.h1
                            variants={animationText}
                            custom={1}
                        >
                            <b> Who is mr.</b> <br />
                            Spidershiba Inu?
                        </motion.h1>

                        <motion.p
                            variants={animationText}
                            custom={2}
                        >
                            It’s not only for pump and dump by Elon tweets.
                            This is real NFT game with Achiements, Goals and nice gameplay with tokenization
                        </motion.p>

                        <motion.div
                            variants={animationText}
                            custom={3}
                            className={s.bt_area}
                        >

                            <MButton 
                                variants={animationText}
                                custom={5}
                                className={s.bt_area}
                                variant={'bright'} 
                                href={'#'} 
                                text={'Join Community'} />

                            <MButton 
                                variants={animationText}
                                custom={4}
                                className={s.bt_area}
                                variant={'ghostly'} 
                                href={'#'} 
                                text={'More about SpiderShiba Inu'} />

                        </motion.div>

                        <MClipBoard 
                            variants={animationText}
                            custom={6}
                            label={"Contract address:"} 
                            address={'0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc'}/>
                        
                    </div>

                    <motion.div 
                        initial = "hidden"
                        viewport={{once: true}}
                        whileInView="visible"
                        transition={{ duration: 2 }}
                        variants={{
                            visible: { opacity: 1},
                            hidden: { opacity: 0 }
                        }}
                        className={s.img_content_col}>

                        <div data-circle="1" className={s.glowing_circles}></div>
                        <div data-circle="2" className={s.glowing_circles}></div>
                        <div data-circle="3" className={s.glowing_circles}></div>

                        <div className={s.spider_shiba}>

                            <div className={s.shiba_head} >
                                <motion.img 
                                    animate = {{rotate: [-20,20]}}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType:'mirror',
                                        repeatDelay: 0,
                                    }}
                                    src="/img/section/dog_head_img.svg" />
                            </div>
                            
                            <img className={s.shiba_body_img} src="/img/section/spidershiba_body_img.svg" alt="" />
                        </div>

                    </motion.div>

                </div>

            </motion.div>

            <Ticker/>
        </>

    )

}

export default MainBaner;