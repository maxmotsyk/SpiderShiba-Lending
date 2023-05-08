import s from './Button.module.scss';

const buttonClass = {
    ghostly: `${s.button} ${s.bt_white}`,
    bright: `${s.button} ${s.bt_bright_red}`,
    smallBright : `${s.button} ${s.bt_sm_bright_red}`,
    dull: `${s.button} ${s.bt_dull_red}`,
    smallDul : `${s.button} ${s.bt_sm_dull_red}`
}

const Button = ({variant, href, text}) =>{

    return(

        <a className={buttonClass[variant]} href={href}>
            {text}
        </a>

    )

}

export default Button;