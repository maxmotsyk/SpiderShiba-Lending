import { useState, useRef, useEffect } from "react";
import s from "./RoadMap.module.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import Title from "../../UI/Title/Title";
import { MRoadMapItem } from "../../Simple/RoadMapItem/RoadMapItem";

const animationMapItem = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -100 : 100,
  }),
  visibale: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 * custom },
  }),
};

const RoudeMap = ({ roadMapdata }) => {
  const refStartAnimation = useRef(null);
  const refBar = useRef(null);
  const [heightBar, setHeightBar] = useState(700);

  const { scrollYProgress } = useScroll({
    target: refStartAnimation,
    offset: ["start end", "end end"],
  });


  const scaleActivBar = useTransform(scrollYProgress, [0, 1], [0, heightBar], {
    output: [1, heightBar],
  });

  const calcHeightBar  = (item) => {
    const y = refBar.current.getBoundingClientRect().top + window.scrollY;
    const y2 = item.children[1]?.getBoundingClientRect().bottom + window.scrollY;
    setHeightBar(Math.abs(y - y2));
  }

  return (
    <section className={s.roudeMap}>
      <div ref={refStartAnimation} className="container">
        <div className={s.roudeMap_row}>
          <Title text={"Roadmap"} />

          <motion.div
            initial="hidden"
            whileInView="visibale"
            viewport={{
              amount: 0.2,
              once: true,
            }}
            className={s.col}
          >
            {roadMapdata.map(({ id, title, tasks, status }, i) => {
              if (status) {
                return (
                  <MRoadMapItem
                    ref={calcHeightBar}
                    variants={animationMapItem}
                    custom={i}
                    key={id}
                    listItems={tasks}
                    title={title}
                    num={i + 1}
                    status={status}
                  />
                );
              }

              return (
                <MRoadMapItem
                  variants={animationMapItem}
                  custom={i}
                  key={id}
                  listItems={tasks}
                  title={title}
                  num={i + 1}
                  status={status}
                />
              );
            })}
          </motion.div>

          <div ref={refBar} className={s.progress_bar}>
            <motion.div
              style={{ scaleY: scaleActivBar}}
              className={s.active_bar}
            ></motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoudeMap;