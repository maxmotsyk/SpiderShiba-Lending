import s from "./About.module.scss";
import { motion } from "framer-motion";
import PartnerRow from "../../Simple/PartnerRow/PartnerRow";
import { MButton } from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";

const About = ({ data }) => {

  const animationMoreInfo = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      height:'0px'
    },
    visible: (custom) => ({
      opacity: 1,
      height: 'auto',
      transition: { 
        delay: custom * 0.7 ,
        ease: 'linear',
      },
    }),
  }

  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.about_info}>
          <PartnerRow data={data} variant={"ghostly"} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount : 1,
              once: true
            }}
            className={s.more_info}
          >
            <motion.h3
              custom={1}
              variants={animationMoreInfo}
            >
              Yes you read that right, SpiderShib Inu officially enters the game
              to conquer the world 🌎
            </motion.h3>

            <MButton
              custom={1.5}
              variants={animationMoreInfo}
              variant={"smallBright"}
              text={"Let’s find out more"}
            />
          </motion.div>

          <div className={s.social_link}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>

          <div className={s.earth_img}>
            <motion.img
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0,
              }}
              src="/img/section/earth_img.svg"
              alt="earth_img"
            />
          </div>

          <img
            className={s.mini_shiba_img}
            src="/img/section/mini_shiba_img.svg"
            alt="mini_shiba"
          />
        </div>

        <div className={s.about_content}>
          <Title text={"How it works?"} />

          <motion.div 
            viewport={{
              amount: 1,
              once: true,
            }}
            initial='hidden'
            whileInView="visible"
            className={s.cards_row}>

            <motion.div 
              variants={cardAnimation}
              custom={1.5}
              className={s.item}>
              <img
                src="/img/section/card_info_img/Group 37.svg"
                alt="ecosystem_img"
              />

              <h4>SpiderShib Inu Ecosystem</h4>

              <span>
                Large variety of options to use SpiderShib Inu tokens and NFTs
              </span>

              <div className={s.text}>
                <p>
                  Our ecosystem is different from all the others, we have
                  created the first REAL nft game with SpiderShib Inu.
                </p>

                <p>
                  So the tokens will have real usefulness and to ensure constant
                  growth for all holders.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              custom={1}
              className={s.item}>
              <img
                src="/img/section/card_info_img/Group 36.svg"
                alt="more_options_img"
              />

              <h4>Many options to earn</h4>

              <span>
                Thanks to our ecosystem you will be able to earn passively and
                actively
              </span>

              <div className={s.text}>
                <p>
                  The passive income: - staking - the appreciation of the staked
                  currency
                </p>

                <p>
                  The active income: - Gaming process (you will earn money that
                  you can turn into tokens) - Re-sale of the NFTs
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              custom={0.5}
              className={s.item}>
              <img
                src="/img/section/card_info_img/Group 38.svg"
                alt="reshaping_deFi_img"
              />

              <h4>Reshaping DeFi</h4>

              <span>
                We are evolving DeFi concepts such as participation rewards,
                NFTs and tokenomics to maximise profit for every investor
              </span>

              <div className={s.text}>
                <p>
                  We offer huge tools for people around the world to take
                  control of their financial future.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
