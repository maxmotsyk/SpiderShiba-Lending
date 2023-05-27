import { useState, useEffect } from 'react';
import s from './FaqItem.module.scss';



const FaqItem = ({question, answer}) => {
    const [open, setOpen] = useState(false);

    const onClickItem = () => {
        setOpen(!open);
    }
    
    return(

        <div
            onClick={()=> onClickItem()}
            className={s.faq_item_body}>
            
            <div className={`${s.question_text} ${open ? s.active : null }`}>

                <p>
                    {question}
                </p>
                
            </div>

            <div  className={`${s.answer_text} ${open ? null : s.hidden}`}>

                <p>
                    {answer}
                </p>

            </div>

        </div>

    )

    
}

export default FaqItem;



