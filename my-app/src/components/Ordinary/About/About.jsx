import s from './About.module.scss';
import PartnerRow from '../../Simple/PartnerRow/PartnerRow';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';

const About = ({data}) => {

    return (

        <section className={s.about}>

            <div className="container">

                <div className = {s.about_info}>
                    <PartnerRow data = {data} variant={'ghostly'}/>

                    <div className={s.more_info}>

                        <h3>
                            Yes you read that right, SpiderShib Inu officially enters the game to conquer the world 🌎
                        </h3>

                        <Button variant={'smallBright'} text={'Let’s find out more'}/>

                    </div>

                    <div className={s.social_link}>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <img className={s.earth_img} src="/img/section/earth_img.svg" alt="earth_img" />

                    <img className={s.mini_shiba_img} src="/img/section/mini_shiba_img.svg" alt="mini_shiba" />

                </div>

                <div className={s.about_content}>
                    <Title text={'How it works?'}/>

                    <div className={s.cards_row}>

                        <div className={s.item}>
                            <img src="/img/section/card_info_img/Group 37.svg" alt="ecosystem_img" />

                            <h4>SpiderShib Inu Ecosystem</h4>

                            <span>
                                Large variety of options to use SpiderShib Inu 
                                tokens and NFTs
                                </span>

                            <div className={s.text}>
                                <p>
                                    Our ecosystem is different 
                                    from all the others, we have 
                                    created the first REAL nft 
                                    game with SpiderShib Inu.
                                </p>

                                <p>
                                    So the tokens will have real
                                     usefulness and to ensure 
                                     constant growth for all 
                                     holders.
                                </p>

                            </div>

                        </div>

                        <div className={s.item}>
                            <img src="/img/section/card_info_img/Group 36.svg" alt="more_options_img" />

                            <h4>Many options to earn</h4>

                            <span>
                                Thanks to our ecosystem you will 
                                be able to earn passively and actively
                            </span>

                            <div className={s.text}>
                                <p>
                                    The passive income:
                                    - staking
                                    - the appreciation of the staked currency
                                </p>

                                <p>
                                    The active income:
                                    - Gaming process (you will earn money that you can turn into tokens)
                                    - Re-sale of the NFTs
                                </p>

                            </div>

                        </div>

                        <div className={s.item}>
                            <img src="/img/section/card_info_img/Group 38.svg" alt="reshaping_deFi_img"/>

                            <h4>Reshaping DeFi</h4>

                            <span>
                                We are evolving DeFi concepts such as participation rewards,
                                NFTs and tokenomics to maximise profit for every investor
                            </span>

                            <div className={s.text}>

                                <p>
                                     We offer huge tools for people around the world 
                                     to take control of their financial future.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default About;