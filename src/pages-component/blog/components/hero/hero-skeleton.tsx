import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import cls from './hero.module.scss';

interface HeroProps {}

const HeroSkeleton: FC<HeroProps> = () => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      <div className={cls.left}>
        <Skeleton width="100%" height="340px"  />
      </div>
      <div className={cls.right}>
        <div className={cls.wrap}>
          <Skeleton width="80px" height="17px" borderRadius={100} />
          <Skeleton width="100%" height="25px" style={{ marginTop: '10px' }} borderRadius="12.5px" />
          <Skeleton width="100%" height="25px" style={{ marginTop: '5px' }} borderRadius="12.5px" />
        </div>
        <div className={cls.wrap}>
          <div className={cls.row}>
            <Skeleton width="50px" height="25px" borderRadius={8} />
            <Skeleton width="80px" height="17px" borderRadius={100} />
          </div>
          <div className={cls.row}>
            <Skeleton width="30px" height="30px" borderRadius="50%" />
            <Skeleton width="80px" height="17px" borderRadius={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSkeleton;
