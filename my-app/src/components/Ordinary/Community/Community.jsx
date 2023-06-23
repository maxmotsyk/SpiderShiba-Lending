import { motion } from "framer-motion";
import Title from "../../UI/Title/Title";
import s from "./Community.module.scss";
import { MSocialLink } from "../../UI/SocilLink/SocilLink";
import { MClipBoard } from "../../Simple/ClipBoard/ClipBoard";

const animaSocial = {
  hidden: {
    opacity: 0,
    y: "-50px",
  },
  visible: (custom) => ({
    y: "0px",
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
};

const animationText = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};

const Community = () => {
  return (
    <section className={s.community_section}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.5,
          once: true,
        }}
        className={`container ${s.container_community}`}
      >
        <Title text={`Join our SpiderShib Inu Community`} />

        <motion.div className={s.social_col}>
          <MSocialLink
            variants={animaSocial}
            custom={7}
            name={"instagram"}
            img={"/img/section/community/Vector.svg"}
            link={"#"}
          />
          <MSocialLink
            variants={animaSocial}
            custom={6}
            name={"m"}
            img={"/img/section/community/Vector-1.svg"}
            link={"#"}
          />
          <MSocialLink
            variants={animaSocial}
            custom={5}
            name={"robot"}
            img={"/img/section/community/Vector-2.svg"}
            link={"#"}
          />
          <MSocialLink
            variants={animaSocial}
            custom={4}
            name={"telegram"}
            img={"/img/section/community/Vector-3.svg"}
            link={"#"}
          />
          <MSocialLink
            variants={animaSocial}
            custom={3}
            name={"twiter"}
            img={"/img/section/community/Vector-4.svg"}
            link={"#"}
          />
          <MSocialLink
            variants={animaSocial}
            custom={2}
            name={"facebook"}
            img={"/img/section/community/Vector-5.svg"}
            link={"#"}
          />
        </motion.div>

        <div className={s.contract_col}>
          <img src="/img/section/mini_shiba_img.svg" alt="mini spiderShiba" />

          <MClipBoard
            variants={animationText}
            custom={6}
            label={"SpiderShiba Inu’s Contract address:"}
            address={"0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc"}
            variant={"round"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Community;
