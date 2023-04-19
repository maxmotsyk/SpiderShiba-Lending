import s from './MainBaner.module.scss';

const MainBaner = () => {

    function saveToClipboard (str) {
        navigator.clipboard.writeText(str.textContent);
    }

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

                    <div className={s.copy_address_col}>

                        <label>
                            Contract address:
                            <button onClick={(e)=>{saveToClipboard(e.target)}}>0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</button>
                        </label>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default MainBaner;