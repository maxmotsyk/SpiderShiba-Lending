import {MFaqItem} from "../../Simple/FaqItem/FaqItem";
import { motion } from "framer-motion";
import Title from "../../UI/Title/Title";
import s from "./Faq.module.scss";

const animationFaqItem = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visibale: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};

const Faq = ({ FaqData }) => {
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
                    variants={animationFaqItem}
                    custom={i}
                    key={id} 
                    question={question} 
                    answer={answer} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
