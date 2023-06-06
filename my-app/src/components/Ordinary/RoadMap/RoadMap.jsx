import s from './RoadMap.module.scss';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Title from '../../UI/Title/Title';
import RoadMapItem from '../../Simple/RoadMapItem/RoadMapItem';


const RoudeMap = ({roadMapdata}) => {
    

    return (

        <section className={s.roudeMap}>

            <div className="container">

                <div className={s.roudeMap_row}>

                    <Title text={'Roadmap'} />

                    <div className={s.col}>

                        {
                            roadMapdata.map(({id, title, tasks, status}, i) => {
                               return  <RoadMapItem 
                                        key = {id} 
                                        listItems = {tasks} 
                                        title = {title} 
                                        num = {i + 1}
                                        status = {status}
                                        />
                            })
                            
                        }

                    </div>

                    <div className={s.progress_bar}>
                        {/* <div className={s.active_bar}></div> */}
                    </div>

                </div>

            </div>

        </section>

    )

}

export default RoudeMap;