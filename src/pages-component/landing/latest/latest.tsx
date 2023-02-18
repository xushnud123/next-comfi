import { FC } from "react";
import Link from "next/link";
import * as Scroll from "react-scroll";
import Slider from "react-slick";

import { skeltonArray } from "@/helpers/constants";

import useBlogs from "@/modules/blogs/hooks/use-blogs";

import Blog from "./blog/blog";
import BlogSkeleton from "./blog/blog-skeleton";

import cls from "./latest.module.scss";

interface LatestProps {}

const Latest: FC<LatestProps> = () => {
  const scroll = Scroll.animateScroll;
  const { data, isLoading } = useBlogs(3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "custom-slick",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollFunction = () => setTimeout(() => scroll.scrollToTop(), 500);

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.rows}>
          <h1 className={cls["hero-title"]}>Latest Posts</h1>
          <div className={cls.search}>
            <p className={cls.subtitle}>
              Learn about new product features, the latest in payment solutions
              and business initiatives.
            </p>
            <Link onClick={scrollFunction} href='blog' className={cls.btn}>
              See more posts
            </Link>
          </div>
          <Slider {...settings} className={cls.cards}>
            {data?.slice(0, 3)?.map((blog) => (
              <Blog {...blog} key={blog.id} />
            ))}
            {isLoading &&
              skeltonArray.slice(0, 3).map((item) => (
                <div key={item} style={{ height: "100%" }}>
                  <BlogSkeleton />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Latest;
