import cx from 'classnames';
import Skeleton from 'react-loading-skeleton';

import cls from '../blogs.module.scss';

const BlogSkeleton = () => (
  <>
    <div className={cx(cls.blog, cls.skeleton)}>
      <div className={cls.container}>
        <div className={cls.left}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={cls.right}>
          <div className={cls.wrap}>
            <Skeleton width="80px" height="17px" borderRadius={100} />
            <Skeleton width="100%" style={{ marginTop: 16 }} height="24px" borderRadius={100} />
            <Skeleton width="50%" style={{ marginTop: 8 }} height="24px" borderRadius={100} />
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
  </>
);

export default BlogSkeleton;
