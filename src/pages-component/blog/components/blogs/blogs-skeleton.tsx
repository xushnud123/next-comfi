import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import cls from './blogs.module.scss';

interface BlogsSkeletonProps {}

const BlogsSkeleton: FC<BlogsSkeletonProps> = () => (
  <div className={cls.recommended}>
    <Skeleton width="369px" height="36px" borderRadius={100} />
    <div className={cls.rows}>
      <div className={cls['btn-wrap']}>
        <Skeleton width="141px" height="35px" borderRadius={16} />
        <Skeleton width="145px" height="35px" borderRadius={16} />
        <Skeleton width="59px" height="35px" borderRadius={16} />
        <Skeleton width="104px" height="35px" borderRadius={16} />
        <Skeleton width="76px" height="35px" borderRadius={16} />
      </div>
    </div>
  </div>
);

export default BlogsSkeleton;
