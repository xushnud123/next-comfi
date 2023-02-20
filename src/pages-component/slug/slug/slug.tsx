"use client";
import { FC, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import Head from "next/head";
import { helmetJsonLdProp } from "react-schemaorg";
import { WebPage } from "schema-dts";
import { NextSeo } from "next-seo";
import { CALENDLY_LINKS } from "@/helpers/constants";
import { Footer, TopBar } from "@/components";
import type * as Types from "@/modules/slug/types";

import Author from "../author/author";
import Hero from "../hero/hero";
import Related from "../related/related";

import cls from "./slug.module.scss";

interface SlugProps {
  data?: Types.SlugData.Slug;
  isLoading: boolean;
  title?: string;
  description?: string;
  url?: string;
  schema?: any;
}

const Slug: FC<SlugProps> = ({
  data,
  isLoading,
  title,
  description,
  url,
  schema,
}) => {
  const [doc, setDoc] = useState<HTMLElement>();
  const [calendly, setCalendly] = useState({ open: false, link: "" });
  const [email, setEmail] = useState("");

  console.log(title);

  useEffect(() => {
    setDoc(
      (typeof window !== "undefined" && document.getElementById("root")) ||
        document.body
    );
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:url' content='https://comfi.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='comfi.app' />
        <meta property='twitter:url' content='https://comfi.app/' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={url} />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical='https://comfi.app/'
        openGraph={helmetJsonLdProp<WebPage>(schema)}
      />
      <PopupModal
        url={calendly.link}
        prefill={{ email }}
        onModalClose={() => setCalendly({ open: false, link: "" })}
        open={calendly.open}
        // @ts-ignore
        rootElement={doc}
      />
      <TopBar onCalendly={setCalendly} />
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <Hero
            date={data?.date}
            title={data?.title}
            articleSection={data?.articleSection}
            url={data?.url}
            twitter_img={data?.twitter_img}
            minutes={data?.minutes}
            content={data?.content}
            loading={isLoading}
          />
          <Author
            slug={data?.slug}
            title={data?.title || ""}
            url={data?.avatarUrl}
            author={data?.author}
            loading={isLoading}
          />
          <Related />
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your Email'
                />
                <button
                  type='button'
                  onClick={() =>
                    setCalendly({ open: true, link: CALENDLY_LINKS.HEADER })
                  }
                  className={cls.btn}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer page='slug' />
    </>
  );
};

export default Slug;

export async function getStaticProps({ data }: { data: Types.SlugData.Slug }) {
  console.log(data);
  return {
    props: {
      title: data.title,
      description: data.description,
      url: data.url,
      schema: data.schema,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(19)].map((i, index) => {
    return {
      params: {
        slug: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
