import s from './Navbar.module.scss';
import Button from '../Button/Button';

const Navbar = () => {

    return (

        <nav className={s.nav}>

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

            <Button 
                variant={'smallDul'} 
                href={'#'} 
                text={'Join Community'}
            />

        </nav>

    )

}

export default Navbar;