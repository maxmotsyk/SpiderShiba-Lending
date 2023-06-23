import { useState } from "react";
import {MFaqItem} from "../../Simple/FaqItem/FaqItem";
import { motion } from "framer-motion";
import Title from "../../UI/Title/Title";
import s from "./Faq.module.scss";

const animationFaqItem = {
  hidden: {
    y: '50px',
    opacity: 0,
  },
  visibale: (custom) => ({
    y: '0px',
    opacity: 1,
    transition: { 
      delay: custom * 0.15,
      ease: 'linear',},
  }),
};

const Faq = ({ FaqData }) => {
  const [openActiveIndex, setOpenActiveIndex] = useState();

  const onClickItem = (index) => {
   setOpenActiveIndex(index !== openActiveIndex ? index : null)
  }

  return (
    <section className={s.faq_section}>
      <Title text={"Frequently Asked Questions"} />

      <div className="conatainer">
        <motion.div 
          initial="hidden"
          whileInView="visibale"
          viewport={{
            amount: 0.5,
            once: true
          }}
          className={s.faq_col}>

          {FaqData.map(({ id, question, answer },i) => {
            return <MFaqItem
                    openActiveIndex = {openActiveIndex}
                    question={question} 
                    answer={answer}
                    index = {i}
                    onClick ={() => onClickItem(i)}
                    variants={animationFaqItem}
                    custom={i}
                    key={id}/>;
          })}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
