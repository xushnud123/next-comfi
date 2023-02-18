import { Dispatch, FC, SetStateAction } from 'react';
import { useSearchParams } from 'next/navigation';
import cx from 'classnames';

import type * as Types from '@/modules/filter/types';

import cls from '../blogs.module.scss';

interface FilterProps {
  data?: Types.FilterData.Filters[];
  onCategory: string;
  onActiveCategory: Dispatch<SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ data, onCategory, onActiveCategory }) => {
  const searchParams = useSearchParams();

  searchParams.get('category');

  return (
    <div className={cls.rows}>
      <div className={cls['btn-wrap']}>
        {data?.map(item => (
          <button
            key={item.name}
            type="button"
            onClick={e => {
              onActiveCategory(item.name);
              // setSearchParams(createSearchParams({ category: item.name }));
            }}
            className={cx(cls.btn, onCategory === item.name && cls.active)}
          >
            {item.name}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            onActiveCategory('more');
            window.history.pushState('/blog', '', `/blog`);
          }}
          className={cls.description}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Filter;
