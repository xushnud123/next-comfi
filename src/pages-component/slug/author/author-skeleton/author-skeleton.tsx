import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import cls from './author-skeleton.module.scss';

const AuthorSkeleton: FC = () => (
  <div className={cls.wrapper}>
    <div className={cls.left}>
      <Skeleton width="52px" height="52px" borderRadius="50%" />
      <div className={cls.wrap}>
        <Skeleton width="94px" height="17px" borderRadius={100} />
        {/* <p className={cls.description}>Co-Founder, Product Lead</p> */}
      </div>
    </div>
    <div className={cls.right}>
      <h1 className={cls.title}>
        <Skeleton width="94px" height="17px" borderRadius={100} />
      </h1>
      <div className={cls.row}>
        <Skeleton width="38px" height="38px" borderRadius={16} />
        <Skeleton width="38px" height="38px" borderRadius={16} />
      </div>
    </div>
  </div>
);

export default AuthorSkeleton;
