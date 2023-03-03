"use client";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import message from "/public/assets/images/triple/Content.svg";
import star from "/public/assets/images/triple/Logo.webp";

import cls from "./triple-slider.module.scss";

interface TripleSliderProps {}

const TripleSlider: FC<TripleSliderProps> = () => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const refs = ref.current;
    const viewportHeight = (1189 - window.innerWidth) / 2;

    // @ts-ignore
    refs.scroll({ left: viewportHeight, behavior: "smooth" });
  }, []);

  return (
    <div className={cls.wrapper}>
      <div className={cls["text-slider"]}>
        <div className={cls["text-container"]}>
          <Marquee speed={100} className={cls["text-row"]}>
            <h1 className={cls["hero-title"]}>
              · What Comfi does for SaaS vendors · What Comfi does for SaaS
              vendors · What Comfi does for SaaS vendors&nbsp;
            </h1>
          </Marquee>
        </div>
        <div className={cls.wrap}>
          <h2 className={cls.title}>
            You need more ARR to fund growth, but your customers want to pay
            monthly
          </h2>
          <div ref={ref} className={cls.container}>
            <div className={cls.row}>
              <div className={cls.messages}>
                <Image
                  src={message}
                  alt='Image not found'
                  sizes='(max-width:1170px) 300px'
                />
              </div>
              <div className={cls.left}>
                <div className={cls.card}>
                  <h3 className={cls.subtitle}>Vendors</h3>
                </div>
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p className={cls.description}>Boosted revenue</p>
                </div>
                <div className={cls.line} />
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p className={cls.description}>Higher retention</p>
                </div>
                <div className={cls.line} />
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p>Increased sales velocity</p>
                </div>
              </div>
              <div className={cls.right}>
                <div className={cls.card}>
                  <h3 className={cls.subtitle}>Customers</h3>
                </div>
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p className={cls.description}>Secured runway</p>
                </div>
                <div className={cls.line} />
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p className={cls.description}>Yearly discounts</p>
                </div>
                <div className={cls.line} />
                <div className={cls.card}>
                  <Image
                    src={star}
                    width={14.43}
                    height={14.43}
                    alt='Image not found'
                  />
                  <p className={cls.description}>Zero interest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleSlider;
