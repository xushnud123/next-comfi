import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SortDate } from "@/helpers/helpers";
import type * as Types from "@/modules/blogs/types";

import person from "/public/assets/images/blog/hero/Pic.svg";

import cls from "../blogs.module.scss";

interface BlogProps extends Types.BlogsData.Blogs {
  idx?: number;
}

const Blog: FC<BlogProps> = ({
  schema,
  articleSection,
  date,
  title,
  url,
  minutes,
  slug,
  twitter_img,
  author,
  avatarUrl,
  idx,
}) => {
  const dateSort = SortDate(Number(date.slice(5, 7)));

    function GraphCMSImageLoader({ src }: { src: string }) {
      return `${src}`;
    }

  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className={cls.blog}
        data-aos={!(idx === 1 || idx === 0) && "fade-up"}
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
        data-aos-anchor-placement='top-center'
        data-aos-offset='-300'>
        <div
          className={cls.container}>
          <div className={cls.left}>
            <Image
              className={cls.hero}
              src={url || twitter_img}
              alt='img not found'
              loader={GraphCMSImageLoader}
              fill
              priority
              unoptimized={true}
            />
          </div>
          <div className={cls.right}>
            <div className={cls.wrap}>
              <p className={cls.description}>
                {date.slice(5, 7)} {dateSort} {date.slice(0, 4)}
              </p>
              <h1 className={cls.title}>{title}</h1>
            </div>
            <div className={cls.wrap}>
              <div className={cls.row}>
                <button type='button' className={cls.btn}>
                  {articleSection || "SaaS"}
                </button>
                <p className={cls.text}>{minutes} read</p>
              </div>
              <div className={cls.row}>
                <div className={cls["img-wrap"]}>
                  <Image
                    src={avatarUrl || person}
                    className={cls.person}
                    alt='img not found'
                    width='30'
                    height='30'
                    loader={GraphCMSImageLoader}
                    priority
                    unoptimized={true}
                  />
                </div>
                <p className={cls.text}>{author}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Blog;
