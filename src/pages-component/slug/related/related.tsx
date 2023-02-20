import { FC } from 'react';
import Link  from 'next/link';
// import { helmetJsonLdProp } from 'react-schemaorg';
import * as Scroll from 'react-scroll';
// import { Article } from 'schema-dts';

import { SortDate } from '@/helpers/helpers';

import useBlogs from '@/modules/blogs/hooks/use-blogs';

import SlugSkeleton from './related-skeleton/related-skeleton';

import cls from './related.module.scss';

interface RelatedProps {}

const Related: FC<RelatedProps> = () => {
  const scroll = Scroll.animateScroll;
  const { data, isLoading } = useBlogs(3);
  const dateSort = (date:string) => SortDate(Number(date.slice(5, 7)));

  const scrollFunction = () => setTimeout(() => scroll.scrollToTop(), 500);

  if (isLoading) return <SlugSkeleton />;

  return (
    <div className={cls.wrapper}>
      <div className={cls.center}>
        <div className={cls['center-title']}>Related content</div>
        <div className={cls.blogs}>
          {data &&
            data.slice(0, 3).map(({ schema, articleSection, date, title, url, minutes, slug, twitter_img }) => (
              <Link onClick={scrollFunction} key={date} href={`/blog/${slug}`} className={cls.blog}>
                {/* <Helmet script={[helmetJsonLdProp<Article>(schema)]} /> */}
                <div className={cls.container}>
                  <div className={cls.left}>
                    <div className={cls['left-container']}>
                      <img loading="lazy" className={cls.hero} src={url || twitter_img} alt="img not found" />
                    </div>
                  </div>
                  <div className={cls.right}>
                    <div className={cls.wrap}>
                      <p className={cls.description}>
                        {date.slice(5, 7)} {dateSort(date)} {date.slice(0, 4)}
                      </p>
                      <h1 className={cls.title}>{title}</h1>
                    </div>
                    <div className={cls.wrap}>
                      <div className={cls.row}>
                        <button type="button" className={cls.btn}>
                          {articleSection || 'SaaS'}
                        </button>
                        <p className={cls.text}>{minutes} read</p>
                      </div>
                      {/* <div className={cls.row}>
                            <div className={cls['img-wrap']}>
                              <img src={avatarUrl} className={cls.person} alt="img not found" />
                            </div>
                            <p className={cls.text}>{author}</p>
                          </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Related;
