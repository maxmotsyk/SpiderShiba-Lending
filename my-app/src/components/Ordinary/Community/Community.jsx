import Title from "../../UI/Title/Title";
import s from "./Community.module.scss";
import SocilLink from "../../UI/SocilLink/SocilLink";
import ClipBoard from "../../Simple/ClipBoard/ClipBoard";

const Community = () => {

    return(

        <section className={s.community_section}>

            <div className={`container ${s.container_community}`}>

                <Title text={`Join our SpiderShib Inu Community`}/>

                <div className={s.social_col}>
                    <SocilLink name={"instagram"} img={'/img/section/community/Vector.svg'} link={"#"}/>
                    <SocilLink name={"m"} img={'/img/section/community/Vector-1.svg'} link={"#"}/>
                    <SocilLink name={"robot"} img={'/img/section/community/Vector-2.svg'} link={"#"}/>
                    <SocilLink name={"telegram"} img={'/img/section/community/Vector-3.svg'} link={"#"}/>
                    <SocilLink name={"twiter"} img={'/img/section/community/Vector-4.svg'} link={"#"}/>
                    <SocilLink name={"facebook"} img={'/img/section/community/Vector-5.svg'} link={"#"}/>
                </div>


                <div className={s.contract_col}>
                     <img src="/img/section/mini_shiba_img.svg" alt="mini spiderShiba" />

                    <ClipBoard 
                        label={'SpiderShiba Inu’s Contract address:'} 
                        address={'0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc'}
                        variant={'round'}
                    />
                    
                </div>

            </div>

        </section>
        
    )

}

export default Community;