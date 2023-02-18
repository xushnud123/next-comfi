import { FC } from "react";
import Image from "next/image";

import { SortDate } from "@/helpers/helpers";

import HeroSkeleton from "./hero-skeleton/hero-skeleton";

import cls from "./hero.module.scss";

interface HeroProps {
  date?: string;
  title?: string;
  articleSection?: string;
  url?: string;
  twitter_img?: string;
  minutes?: string;
  content?: string;
  loading: boolean;
}

const Hero: FC<HeroProps> = ({
  date,
  title,
  articleSection,
  url,
  twitter_img,
  minutes,
  content,
  loading,
}) => {
  const dateSort = SortDate(Number(date?.slice(5, 7)));

  if (loading) return <HeroSkeleton />;

  function GraphCMSImageLoader({ src }: { src: string }) {
    return `${src}`;
  }

  console.log(url);

  return (
    <div className={cls.wrapper}>
      <p className={cls.date}>
        {date?.slice(5, 7)} {dateSort} {date?.slice(0, 4)}
      </p>
      <h1 className={cls.title}>{title}</h1>
      <div className={cls.row}>
        <button type='button' className={cls.btn}>
          {articleSection || "SaaS"}
        </button>
        <p className={cls.text}>{minutes} read</p>
      </div>
      <div className={cls["hero-images"]}>
        {url && (
          <Image
            src={url || twitter_img || ""}
            alt='img not found'
            className={cls.images}
            loader={GraphCMSImageLoader}
            fill
            priority
            unoptimized={true}
          />
        )}
      </div>
      <div
        className={cls.description}
        dangerouslySetInnerHTML={{ __html: content! }}
      />
    </div>
  );
};

export default Hero;
