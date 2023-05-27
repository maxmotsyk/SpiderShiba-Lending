import s from './SocilLink.module.scss';

const SocilLink = ({link, img, name}) => {

    return(

        <a className={s.link} href={link}>
            <img src={img} alt={name} />
        </a>

    )

}

export default SocilLink;