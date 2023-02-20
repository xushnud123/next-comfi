import { FC } from 'react';
import cx from 'classnames';
import Skeleton from 'react-loading-skeleton';

import cls from './hero-skeleton.module.scss';


const HeroSkeleton: FC= () => (
  <div className={cls.wrapper}>
    <div className={cls.hero}>
      <p>
        <Skeleton width="94px" height="17px" borderRadius={100} />
      </p>
      <h1>
        <Skeleton width="100%" height="55px" style={{ marginTop: 16 }} borderRadius={100} />
      </h1>
      <h1>
        <Skeleton width="50%" height="55px" style={{ marginTop: 20 }} borderRadius={100} />
      </h1>
      <div className={cls.row}>
        <Skeleton width="100px" height="40px" borderRadius={8} />
        <Skeleton width="100px" height="17px" borderRadius={100} />
      </div>
      <div className={cls.images}>
        <Skeleton width="100%" height="100%" borderRadius={16} />
      </div>
      <div className={cls.center}>
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="85%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="90%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="86%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="85%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
      </div>
      <div className={cx(cls.center, cls.top)}>
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="85%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="90%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="86%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="85%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
        <Skeleton width="80%" height="18px" borderRadius={100} style={{ marginTop: 5 }} />
      </div>
    </div>
  </div>
);

export default HeroSkeleton;
