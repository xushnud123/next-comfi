import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SortDate } from "@/helpers/helpers";

import type * as Types from "@/modules/blogs/types";

import person from "/public/assets/images/blog/hero/Pic.svg";

import HeroSkeleton from "./hero-skeleton";

import cls from "./hero.module.scss";

interface HeroProps {
  isLoading: boolean;
  data?: Types.BlogsData.Blogs;
}

const Hero: FC<HeroProps> = ({ isLoading, data }) => {
  const dateSort = SortDate(Number(data?.date.slice(5, 7)));

  if (isLoading) return <HeroSkeleton />;
  function GraphCMSImageLoader({ src }: { src: string }) {
    return `${src}`;
  }

  return (
    <Link href={`/blog/${data?.slug || ""}`} className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.left}>
          <Image
            src={data?.url || ""}
            className={cls.hero}
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
              {data?.date.slice(5, 7)} {dateSort} {data?.date.slice(0, 4)}
            </p>
            <h1 className={cls.title}>{data?.title}</h1>
          </div>
          <div className={cls.wrap}>
            <div className={cls.row}>
              <button type='button' className={cls.btn}>
                Product Update
              </button>
              <p className={cls.text}>{data?.minutes} read</p>
            </div>
            <div className={cls.row}>
              <div className={cls["img-wrap"]}>
                <Image
                  src={data?.avatarUrl || person}
                  className={cls.person}
                  alt='img not found'
                  width='30'
                  height='30'
                  loader={GraphCMSImageLoader}
                  priority
                  unoptimized={true}
                />
              </div>
              <p className={cls.text}>{data?.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
