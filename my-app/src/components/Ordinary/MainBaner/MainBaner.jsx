import s from './MainBaner.module.scss';
import Button from '../../UI/Button/Button';
import Ticker from '../../Simple/Ticker/Ticker';

const MainBaner = () => {

    function saveToClipboard(str) {
        navigator.clipboard.writeText(str.textContent);

        str.style.color = '#ffff';
        setTimeout(() => {
            str.style.color = 'rgba(255, 255, 255, 0.4)';
        }, 500)

    }

    return (

        <>

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

                            <Button variant={'bright'} href={'#'} text={'Join Community'} />

                            <Button variant={'ghostly'} href={'#'} text={'More about SpiderShiba Inu'} />

                        </div>


                        <div className={s.copy_address_col}>

                            <label>
                                Contract address:
                                <button onClick={(e) => { saveToClipboard(e.target) }}>0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</button>
                            </label>

                        </div>

                    </div>

                    <div className={s.img_content_col}>

                        <div data-circle="1" className={s.glowing_circles}></div>
                        <div data-circle="2" className={s.glowing_circles}></div>
                        <div data-circle="3" className={s.glowing_circles}></div>

                        <div className={s.spider_shiba}>
                            <img className={s.shiba_head_img} src="/img/section/dog_head_img.svg" />
                            <img className={s.shiba_body_img} src="/img/section/spidershiba_body_img.svg" alt="" />
                        </div>

                    </div>

                </div>

            </div>

            <Ticker />
        </>

    )

}

export default MainBaner;