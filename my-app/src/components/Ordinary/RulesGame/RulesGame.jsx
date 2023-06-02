import { motion } from 'framer-motion';
import s from './RulesGame.module.scss';
import Title from '../../UI/Title/Title';

const RulesGame = () => {

    const animationCard = {
        hidden: {
            opacity: 0,
            x:-100
        },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: { 
                delay: custom * 0.2 
            }
        })
    }

    return (

        <section className={s.rulesGame}>

            <div className="container">

                <div className={s.rulesGame_info}>

                    <Title text={'Play to earn'} />

                    <p className={s.subtitle}>
                        Many ways to earn tokens and NFTs
                    </p>

                    <motion.div 
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            amount : 1,
                            once: true
                          }}
                        className={s.content_info}>

                        <motion.div 
                            variants = {animationCard}
                            custom={1}
                            className={s.big_card}>

                            <img src="/img/section/rulse_game_img/game_illustration.png" alt="game_illustration" />

                            <div className={s.text_content}>

                                <h5>
                                    Game plot and goal
                                </h5>

                                <div className={s.text}>
                                    <p>
                                        Mary Jane has been kidnapped by Green Goblin,
                                        who has no intention of letting her escape,
                                        so she flees to New York City, going through
                                        different scenarios that will be part of the game!
                                    </p>

                                    <p>
                                        The goal is to accumulate as many game coins and
                                        points as possible, which will then be transformed
                                        into the game token based also on the attempts used
                                        to complete the level.
                                    </p>

                                    <p>
                                        Once the Green Goblin is defeated and Mary Jane is safed,
                                        the game is over, but we don't stop there!
                                    </p>
                                </div>

                            </div>

                        </motion.div>

                        <div className={s.smal_cards}>

                            <motion.div
                             variants = {animationCard}
                             custom={3}
                             className={s.card}>

                                <img src="/img/section/rulse_game_img/Coin_img.png" alt="coin_img" />

                                <div className={s.text_content}>

                                    <h5>Earn that cash!</h5>

                                    <p>
                                        In the various levels there will also be 
                                        special coins, more difficult to take, 
                                        which will provide you with bonuses 
                                        in tokens or game NFTs!
                                    </p>

                                </div>

                            </motion.div>

                            <motion.div 
                                variants = {animationCard}
                                custom={2}
                                className={s.card}>

                                <img src="/img/section/rulse_game_img/Megaphone_img.png" alt="megaphone_img" />

                                <div className={s.text_content}>

                                    <h5>Game events and challenges</h5>

                                    <p>
                                        There will be lots of events after end of the game,
                                        that will bring together whole community and you can
                                        participate in challanges with the NFTs! 
                                    </p>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    )

}

export default RulesGame;