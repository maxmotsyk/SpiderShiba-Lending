import FaqItem from "../../Simple/FaqItem/FaqItem";
import Title from "../../UI/Title/Title";
import s from './Faq.module.scss';

const Faq = ({FaqData}) => {

    return(

      <section className={s.faq_section}>

        <Title text={"Frequently Asked Questions"}/> 

        <div className="conatainer">

            <div className={s.faq_col}>

              {
                FaqData.map(({id, question, answer}) => {
                   return  <FaqItem key={id} question={question} answer={answer}/>
                })  
              }
      
            </div>

        </div>

      </section>

    )
}

export default Faq;