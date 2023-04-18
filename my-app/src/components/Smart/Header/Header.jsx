// import { useState } from "react";
import s from './Header.module.scss';
import MainBaner from '../../Ordinary/MainBaner/MainBaner';

const Header = (props) => {

    return (

        <header>

            <div className={`container ${s.header_container}`}>

                <div className={s.container_row}>

                    <nav>

                        <a className={s.logo} href="#">

                            <img src="/img/header/main_logo_ico.svg" alt="spiderShiba-logo" />

                            <p>SpiderShiba <b>Inu</b> </p>

                        </a>

                        <ul>
                            <li>
                                <a href="#">How it works</a>
                            </li>

                            <li>
                                <a href="#">Play and earn</a>
                            </li>

                            <li>
                                <a href="#">Roadmap</a>
                            </li>

                            <li>
                                <a href="#">Team</a>
                            </li>

                            <li>
                                <a href="#">Partners&Investors</a>
                            </li>

                            <li>
                                <a href="#">Why invest in SpiderShiba</a>
                            </li>

                            <li>
                                <a href="#">Tokenomics</a>
                            </li>

                            <li>
                                <a href="#">FAQ</a>
                            </li>

                            <li>
                                <a href="#">Community</a>
                            </li>

                        </ul>

                        <a className={s.bt_join} href="#">
                            Join Community
                        </a>

                    </nav>

                </div>

            </div>

            <MainBaner/>
            
        </header>

    )
}

export default Header;