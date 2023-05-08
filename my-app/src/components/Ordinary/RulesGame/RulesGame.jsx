import s from './RulesGame.module.scss';
import Title from '../../UI/Title/Title';

const RulesGame = () => {

    return (

        <section className={s.rulesGame}>

            <div className="container">

                <div className={s.rulesGame_info}>

                    <Title text={'Play to earn'} />

                    <p className={s.subtitle}>
                        Many ways to earn tokens and NFTs
                    </p>

                    <div className={s.content_info}>

                        <div className={s.big_card}>

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

                        </div>

                        <div className={s.smal_cards}>

                            <div className={s.card}>

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

                            </div>

                            <div className={s.card}>

                                <img src="/img/section/rulse_game_img/Megaphone_img.png" alt="megaphone_img" />

                                <div className={s.text_content}>

                                    <h5>Game events and challenges</h5>

                                    <p>
                                        There will be lots of events after end of the game,
                                        that will bring together whole community and you can
                                        participate in challanges with the NFTs! 
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default RulesGame;