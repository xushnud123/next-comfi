import { FC, useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { helmetJsonLdProp } from "react-schemaorg";
import { Person } from "schema-dts";

import useBlogs from "@/modules/blogs/hooks/use-blogs";
import type * as Types from "@/modules/blogs/types";
import useFilters from "@/modules/filter/hooks/use-filters";

import { TopBar } from "@/components";
import Footer from "@/components/footer/footer";

import { Blogs, Hero } from "./components";

import cls from "./blog.module.scss";

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  const [calendly, setCalendly] = useState({ open: false, link: "" });
  const [email, setEmail] = useState("");
  const { data, isLoading } = useBlogs(100);
  const { data: filterData } = useFilters();

  console.log(filterData);

  const [filtered, setFiltered] = useState<Types.BlogsData.Blogs[]>();
  const [activeCategory, setActiveCategory] = useState("more");

  useEffect(() => {
    if (activeCategory === "more") setFiltered(data);
    else
      setFiltered(
        data?.filter((item) => item.articleSection === activeCategory)
      );
  }, [data, activeCategory]);

  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data[0].title}</title>
            <meta name='description' content={data[0].description} />
            <meta property='og:url' content='https://comfi.app/' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={data[0].title} />
            <meta property='og:description' content={data[0].description} />
            <meta property='og:image' content={data[0].url} />
          </Head>
          <NextSeo
            title={data[0].title}
            description={data[0]?.description}
            canonical='https://comfi.app/'
            openGraph={helmetJsonLdProp<Person>(data[0].schema)}
          />
        </>
      )}
      <TopBar onCalendly={setCalendly} />
      <PopupModal
        url={calendly.link}
        prefill={{ email }}
        onModalClose={() => setCalendly({ open: false, link: "" })}
        open={calendly.open}
        rootElement={document.getElementById("root") as HTMLElement}
      />
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <Hero isLoading={isLoading} data={data && data[0]} />
          <Blogs
            isLoading={isLoading}
            filterData={filterData}
            filterBlogs={filtered?.slice(1, filtered.length - 1)}
            onCalendly={setCalendly}
            email={email}
            onEmail={setEmail}
            activeCategory={activeCategory}
            onActiveCategory={setActiveCategory}
          />
        </div>
      </div>
      <Footer page='blog' />
    </>
  );
};

export default Blog;

export async function getStaticProps({
  data,
}: {
  data: Types.BlogsData.Blogs[];
}) {
  console.log(data);
  return {
    props: {
      title: data[0].title,
      description: data[0].description,
      url: data[0].url,
      schema: data[0].schema,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(1)].map((i, index) => {
    return {
      params: {
        blog: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
