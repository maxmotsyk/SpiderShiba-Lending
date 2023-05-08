import s from './InvestInfo.module.scss';
import Title from '../../UI/Title/Title';


const InvestInfo = () => {

    return (

        <section className={s.investInfo}>

            <div className="container_fluid">

                <div className={s.investInfo_row}>

                    <div className={s.investInfo_content}>

                        <Title text={'Why invest in SpiderShiba Inu?'} />

                        <p>
                            in case you have lived in a cave in the last
                            few months we will give you a brief summary
                            of what happened in crypto industry
                        </p>

                        <a href="#" aria-label='more about SpiderShiba'>
                            Learn more about SpiderShiba
                        </a>


                    </div>

                    <div className={s.cards_info}>

                        <div className={s.card}>

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

                        </div>

                        <div className={s.card}>

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

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default InvestInfo;