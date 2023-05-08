// import { useState } from "react";
import s from './Header.module.scss';
import MainBaner from '../../Ordinary/MainBaner/MainBaner';
import Navbar from '../../UI/Navbar/Navbar';

const Header = (props) => {

    return (

        <header>

            <div className={`container ${s.header_container}`}>

                <div className={s.container_row}>
                    <Navbar/>
                </div>

            </div>

            <MainBaner/>
            
        </header>

    )
}

export default Header;