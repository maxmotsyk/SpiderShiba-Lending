import s from './RoadMapItem.module.scss';

const RoadMapItem = ({listItems, title, num, status}) =>{

    return(

        <div className={`${s.body_item} ${status ? s.body_item_done : s.body_item_not_done}`}>

            <div className={s.num_card}>

                <h3>{num}</h3>

            </div>

            <div className={s.text}>
                
                <h4>{title}</h4>

                <ul>
                    {  
                        listItems?.map((item)=>{
                           return  <li>{item}</li>
                        })
                        
                    }
                </ul>   
              
        
            </div>

        </div>

    )

}

export default RoadMapItem;