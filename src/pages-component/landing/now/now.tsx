import { FC } from 'react';
import { useGlobalContext } from '@/context/context';

import cls from './now.module.scss';

export interface NowProps {}

const Now: FC<NowProps> = () => {
  const { openMail, setOpenMail } = useGlobalContext();

  return (
    <div className={cls.wrapper} id="news">
      <div className={cls.container}>
        <div className={cls.row}>
          <div className={cls.left}>
            <p className={cls.text}>5-Step Guide on Revenue Growth for Bootstrapped & Seed Stage Startups in 2023</p>
          </div>
          <div className={cls.right}>
            <div className={cls.card}>
              <button type="button" className={cls.btn} onClick={() => setOpenMail(!openMail)}>
                Get Copy Now!
              </button>
              <p className={cls.pdf}>
                Download PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
