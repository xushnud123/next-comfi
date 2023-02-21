import { Dispatch, FC, SetStateAction, useEffect } from "react";
import AOS from "aos";

import { CALENDLY_LINKS, skeltonArray } from "@/helpers/constants";

import type * as Types from "@/modules/blogs/types";
import type * as TypesFilter from "@/modules/filter/types";

import Blog from "./blog/blog";
import BlogSkeleton from "./blog/blog-skeleton";
import Filter from "./filter/filter";
import BlogsSkeleton from "./blogs-skeleton";

import cls from "./blogs.module.scss";

interface BlogsProps {
  email: string;
  onEmail: Dispatch<SetStateAction<string>>;
  onCalendly: ({ open, link }: { open: boolean; link: string }) => void;
  isLoading: boolean;
  filterData?: TypesFilter.FilterData.Filters[];
  filterBlogs?: Types.BlogsData.Blogs[];
  activeCategory: string;
  onActiveCategory: Dispatch<SetStateAction<string>>;
}

const Blogs: FC<BlogsProps> = ({
  email,
  onEmail,
  onCalendly,
  isLoading,
  filterData,
  filterBlogs,
  activeCategory,
  onActiveCategory,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={cls.wrapper}>
      {isLoading ? (
        <BlogsSkeleton />
      ) : (
        <div className={cls.recommended}>
          <h2 className={cls.title}>Recommended topics</h2>
          <Filter
            onCategory={activeCategory}
            onActiveCategory={onActiveCategory}
            data={filterData}
          />
        </div>
      )}
      <div className={cls.blogs}>
        {filterBlogs?.map((blog, idx) => (
          <Blog {...blog} key={blog.id} idx={idx} />
        ))}
        {isLoading &&
          skeltonArray.map((item) => (
            <div key={item} style={{ height: "100%" }}>
              <BlogSkeleton />
            </div>
          ))}
      </div>
      <div className={cls.cards}>
        <div className={cls.row}>
          <div className={cls.left}>
            <p className={cls.text}>
              Join our community of 2000+ revenue nerds
            </p>
          </div>
          <div className={cls.right}>
            <input
              className={cls.email}
              type='text'
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder='Enter your Email'
            />
            <button
              type='button'
              onClick={() =>
                onCalendly({ open: true, link: CALENDLY_LINKS.HEADER })
              }
              className={cls.btn}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
