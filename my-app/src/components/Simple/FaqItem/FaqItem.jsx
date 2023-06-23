import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from "react";
import s from "./FaqItem.module.scss";

const FaqItem = forwardRef(({ question, answer, openActiveIndex, index, onClick}, ref) => {
  const openAnswear = openActiveIndex == index;

  return (
    <div ref={ref} onClick={onClick}  className={s.faq_item_body}>
      <div className={`${s.question_text} ${openAnswear ? s.active : null}`}>
        <p>{question}</p>
      </div>

      <AnimatePresence>
        {openAnswear && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${s.answer_text} ${openAnswear ? null : s.hidden}`}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default FaqItem;
export const MFaqItem = motion(FaqItem);
