"use client";
import { FC, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { CALENDLY_LINKS } from "@/helpers/constants";
import { Footer, TopBar } from "@/components";
import * as Types from "@/modules/slug/types";

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
}) => {
  const [doc, setDoc] = useState<HTMLElement>();
  const [calendly, setCalendly] = useState({ open: false, link: "" });
  const [email, setEmail] = useState("");

  useEffect(() => {
    setDoc(
      (typeof window !== "undefined" && document.getElementById("root")) ||
        document.body
    );
  }, []);

  return (
    <>
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


