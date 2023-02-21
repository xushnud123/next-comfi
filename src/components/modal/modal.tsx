import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { m } from 'framer-motion';

import cls from './modal.module.scss';

interface ModalProps {
  state: boolean;
  onState: (e: boolean) => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ state, onState, children, className }) => {
  const dropIn = {
    hidden: {
      y: '100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cx(cls.wrapper, state && cls.hidden, className && cls[className])}
      onClick={() => onState(!state)}
    >
      <m.div className={cls.container}>
        <m.div
          onClick={e => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cls.row}
        >
          {children}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Modal;
