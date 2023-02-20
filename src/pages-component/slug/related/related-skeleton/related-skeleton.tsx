import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import cls from './related-skeleton.module.scss';

interface SlugProps {}

const SlugSkeleton: FC<SlugProps> = () => (
  <div className={cls.wrapper}>
    <div className={cls.hero}>
      <Skeleton width="234px" height="25px" borderRadius={100} style={{ marginTop: 48 }} />
      <div className={cls.cards}>
        <div className={cls.left}>
          <Skeleton width="100%" height="100%" borderRadius={16} style={{ marginTop: 5 }} />
        </div>
        <div className={cls.right}>
          <Skeleton width="74px" height="17px" style={{ marginTop: 12 }} borderRadius={100} />
          <Skeleton width="100%" height="24px" style={{ marginTop: 16 }} borderRadius={100} />
          <Skeleton width="50%" height="24px" style={{ marginTop: 20 }} borderRadius={100} />
          <div className={cls.row}>
            <Skeleton width="39px" height="25px" borderRadius={8} />
            <Skeleton width="74px" height="17px" borderRadius={100} />
          </div>
        </div>
      </div>
      <div className={cls.cards}>
        <div className={cls.left}>
          <Skeleton width="100%" height="100%" borderRadius={16} style={{ marginTop: 5 }} />
        </div>
        <div className={cls.right}>
          <Skeleton width="74px" height="17px" style={{ marginTop: 12 }} borderRadius={100} />
          <Skeleton width="100%" height="24px" style={{ marginTop: 16 }} borderRadius={100} />
          <Skeleton width="50%" height="24px" style={{ marginTop: 20 }} borderRadius={100} />
          <div className={cls.row}>
            <Skeleton width="39px" height="25px" borderRadius={8} />
            <Skeleton width="74px" height="17px" borderRadius={100} />
          </div>
        </div>
      </div>
      <div className={cls.cards}>
        <div className={cls.left}>
          <Skeleton width="100%" height="100%" borderRadius={16} style={{ marginTop: 5 }} />
        </div>
        <div className={cls.right}>
          <Skeleton width="74px" height="17px" style={{ marginTop: 12 }} borderRadius={100} />
          <Skeleton width="100%" height="24px" style={{ marginTop: 16 }} borderRadius={100} />
          <Skeleton width="50%" height="24px" style={{ marginTop: 20 }} borderRadius={100} />
          <div className={cls.row}>
            <Skeleton width="39px" height="25px" borderRadius={8} />
            <Skeleton width="74px" height="17px" borderRadius={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SlugSkeleton;
