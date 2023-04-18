import s from './MainBaner.module.scss';

const MainBaner = () => {

    return (

        <div className={`container ${s.mainBaner_container}`}>

            <div className={s.mainBaner_row}>

                <div className={s.text_content}>

                    <h1>
                        <b> Who is mr.</b> <br />
                        Spidershiba Inu?
                    </h1>

                    <p>
                        It’s not only for pump and dump by Elon tweets.
                        This is real NFT game with Achiements, Goals and nice gameplay with tokenization
                    </p>

                    <div className={s.bt_area}>

                        <a className={s.bt_join} href="#">
                            Join Community
                        </a>

                        <a className={s.bt_more} href="#">
                            More about SpiderShiba Inu
                        </a>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default MainBaner;