// import { useState } from "react";
import s from './Header.module.scss';

const Header = (props) =>{

    return(

        <header>

            <div className={`container ${s.header_container}`}>

                <div className={s.container_row}>

                    <p>
                        hello world
                    </p>    

                </div>

            </div>

        </header>

    )
}

export default Header;