import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import vector from '@/assets/images/icons/Vector.png';
import vector_red from '@/assets/images/icons/Vector_red.png';

import classes from '../difference.module.scss';

export interface IProps {
  open: boolean;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const Plan: FC<IProps> = ({ open }) => (
  <div className={classes.plan} key={+open}>
    {open ? (
      <motion.div variants={boxVariant} initial="hidden" animate="visible" className={classes.switch_card}>
        <h1 className={classes.title}>
          What happens to your customers if <br /> they purchase annual subscriptions <br /> with <span>Comfi</span>
        </h1>
        <h2 className={classes.description}>
          <span>
            <Image loading="lazy" src={vector_red} alt="img not found" />
          </span>
          Lack of runway leads to cutting costs on SaaS providers
        </h2>
      </motion.div>
    ) : (
      <motion.div variants={boxVariant} initial="hidden" animate="visible" className={classes.switch_card}>
        <h1 className={classes.title}>
          More customers start choosing annual <br />
          plans with <span>Comfi</span>
        </h1>
        <h2 className={classes.description}>
          <span>
            <Image loading="lazy" src={vector} alt="img not found" />
          </span>
          You get paid whole amount upfront
        </h2>
        <h2 className={classes.description}>
          <span>
            <Image loading="lazy" src={vector} alt="img not found" />
          </span>
          Customers are able to spread the cost
        </h2>
      </motion.div>
    )}
  </div>
);

export default Plan;
