import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as Scroll from "react-scroll";

import { SortDate } from "@/helpers/helpers";

import type * as Types from "@/modules/blogs/types";

import cls from "../latest.module.scss";

const Blog: FC<Types.BlogsData.Blogs> = ({
  articleSection,
  date,
  title,
  url,
  slug,
  minutes,
  twitter_img,
  avatarUrl,
  author,
}) => {
  const scroll = Scroll.animateScroll;
  const sortDate = SortDate(Number(date.slice(5, 7)));

  const scrollFunction = () => setTimeout(() => scroll.scrollToTop(), 500);

  function GraphCMSImageLoader({ src }: { src: string }) {
    return `${src}`;
  }

  return (
    <>
      <Link onClick={scrollFunction} href={`blog/${slug}`} className={cls.blog}>
        <div className={cls["blog-wrap"]}>
          <div className={cls.left}>
            <Image
              loader={GraphCMSImageLoader}
              className={cls.hero}
              src={url || twitter_img}
              alt='img not found'
              fill
              // width='100'
              // height='100'
              priority
            />
          </div>
          <div className={cls.right}>
            <div className={cls.wrap}>
              <p className={cls.date}>
                {date.slice(5, 7)} {sortDate} {date.slice(0, 4)}
              </p>
              <h1 className={cls.title}>{title}</h1>
            </div>
            <div className={cls.wrap}>
              <div className={cls.row}>
                <div className={cls.btn}> {articleSection || "SaaS"}</div>
                <p className={cls.text}>{minutes}</p>
              </div>
              <div className={cls.row}>
                <Image
                  src={avatarUrl}
                  className={cls.person}
                  alt='img not found'
                  width='30'
                  height='30'
                  loader={GraphCMSImageLoader}
                  priority
                />
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
