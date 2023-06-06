import s from './Team.module.scss';
import { motion } from 'framer-motion';
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import Title from '../../UI/Title/Title';
import PartnerRow from '../../Simple/PartnerRow/PartnerRow';


const Team = ({ data, team }) => {

    return (
        <section className={s.team}>

            <div className="container">

                <motion.div 
                    initial = "hidden"
                    whileInView = "visibale"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -100
                        },
                        visibale: {
                            opacity: 1,
                            y: 0,
                            transition: {delay: 0.3}
                        }
                    }}
                    viewport={{
                        amount : 0.5,
                        once: true
                    }}
                    className={s.slider_team}>

                    <Title text={'Team'} />

                    <div className={s.slider_body}>

                        <Swiper
                            className={s.swiper_container}
                            modules={[Pagination]}
                            pagination = {{
                                horizontalClass : s.swiper_pagination_horizontal,
                                bulletClass : `swiper-pagination-bullet ${s.pagination_bullet}`,
                                bulletActiveClass: s.pagination_bullet_active,
                                clickable: true,

                            }}
                            spaceBetween={54}
                            slidesPerView={4}
                        >

                            {
                                team?.map(({ id, name, position, img }) => {

                                    return (

                                        <SwiperSlide key={id}>

                                            <div className={s.item}>

                                                <img src={img} alt={`img${name}`} />

                                                <h3>{name}</h3>

                                                <p>{position}</p>

                                            </div>

                                        </SwiperSlide>

                                    )

                                })
                            }
            
                        </Swiper>

                    </div>

                </motion.div>

                <div className={s.partners}>
                    <Title text={'Partners & Investors'} />
                    <PartnerRow variant={'bright'} data={data} />
                </div>

            </div>

        </section>
    )

}

export default Team;