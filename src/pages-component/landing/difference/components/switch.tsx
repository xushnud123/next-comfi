import { FC } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

import classes from '../difference.module.scss';

export interface SwitchProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 20
};

const Switch: FC<SwitchProps> = ({ open, setOpen }) => (
  <div className={cx(classes.switch, open && classes.active)}>
    <div className={classes.btn} onClick={() => setOpen(false)}>
      With Comfi
    </div>
    <div className={classes.btn} onClick={() => setOpen(true)}>
      Another method
    </div>
    <motion.div layout transition={spring} className={classes.circle} />
  </div>
);

export default Switch;
