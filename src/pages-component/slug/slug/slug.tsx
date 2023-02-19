"use client";
import { FC, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet-async";
import { helmetJsonLdProp } from "react-schemaorg";
import { Person } from "schema-dts";

import { CALENDLY_LINKS } from "@/helpers/constants";

import useSlugs from "@/modules/slug/hooks/use-slug";

import { Footer, TopBar } from "@/components";

import Author from "../author/author";
import Hero from "../hero/hero";
import Related from "../related/related";

import cls from "./slug.module.scss";
import Head from "next/head";

interface SlugProps {}

const Slug: FC<SlugProps> = () => {
  const [doc, setDoc] = useState<HTMLElement>();
  const [calendly, setCalendly] = useState({ open: false, link: "" });
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { slug } = router.query;
  // @ts-ignore
  const { data, isLoading } = useSlugs({ slug });

  useEffect(() => {
    setDoc(
      (typeof window !== "undefined" && document.getElementById("root")) ||
        document.body
    );
  }, []);

  return (
    <>
      <Head>
        <Helmet script={[helmetJsonLdProp<Person>(data?.schema)]} />
        <title>{data?.title}</title>
        <meta name='description' content={data?.description} />
        <meta property='og:url' content='https://comfi.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={data?.title} />
        <meta property='og:description' content={data?.description} />
        <meta property='og:image' content={data?.url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='comfi.app' />
        <meta property='twitter:url' content='https://comfi.app/' />
        <meta name='twitter:title' content={data?.title} />
        <meta name='twitter:description' content={data?.description} />
        <meta name='twitter:image' content={data?.url} />
      </Head>
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
