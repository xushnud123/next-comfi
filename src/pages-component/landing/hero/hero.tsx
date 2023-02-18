import { FC, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import Slider from "react-slick";


import { CALENDLY_LINKS, COMFI_INTRO_LINK } from "@/helpers/constants";

import { Modal, Video } from "@/components";
import PlayIcon from "@/components/icons/play-icon";

import comfi from "@/assets/images/new-hero/desktop.webp";
import watch from "@/assets/images/new-hero/Main.webp";
import mobile from "@/assets/images/new-hero/mobil.webp";
// import heroVideo from "@/assets/images/new-hero/video.mp4";
import img2 from "@/assets/images/slider/Item (1).webp";
import img1 from "@/assets/images/slider/Item.webp";
import star2 from "@/assets/images/star/Pattern (1).webp";
import star1 from "@/assets/images/star/Pattern.webp";

import cls from "./hero.module.scss";

interface HeroProps {
  onCalendly: ({ open, link }: { open: boolean; link: any }) => void;
  calendly: { open: boolean; link: string };
}
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 750,
  draggable: true,
  autoplaySpeed: 3500,
  cssEase: "linear",
  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
};

const Hero: FC<HeroProps> = ({ onCalendly }) => {
  const [state, setState] = useState(false);

  return (
    <>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {state && (
          <Modal state={state} onState={setState}>
            <ReactPlayer
              className='player'
              controls
              width='100%'
              style={{
                height: "contain",
                borderRadius: 40,
                overflow: "hidden",
              }}
              url={COMFI_INTRO_LINK}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className={cls.wrapper}>
        <div className={cls.container}>
          <div className={cls.row}>
            <h1 className={cls.title}>
              Close 2x more <br /> annual contracts
            </h1>
            <p className={cls.description}>
              Let your customers pay flexibly while you get paid upfront.
              <br /> Built for B2B SaaS providers.
            </p>
            <button
              type='button'
              onClick={() =>
                onCalendly({ open: true, link: CALENDLY_LINKS.HERO })
              }
              className={cls.btn}>
              Talk to an expert
            </button>
            <p className={cls.text}>Zero interest. No service fees.</p>
          </div>
          <div className={cls.slider}>
            <Slider {...settings}>
              <div className={cls.card}>
                <Image
                  loading='lazy'
                  src={img1}
                  alt='Sample invoice by Comfi payments, a buy now pay later solution for b2b SaaS companies.'
                />
              </div>
              <div className={cls.card}>
                <Image
                  loading='lazy'
                  src={img2}
                  alt='Demo checkout page with the option of splitting SaaS service fees into multiple payment installments using Comfi.'
                />
              </div>
            </Slider>
          </div>
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            className={cls.images1}
          />
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            className={cls.images2}
          />
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            className={cls.images3}
          />
          <Image
            loading='lazy'
            src={star2}
            alt='img not found'
            className={cls.images4}
          />
        </div>
        <div className={cls.videos}>
          <div className={cls.wrap}>
            <div className={cls.btns}>
              <div className={cls.btn} onClick={() => setState(!state)}>
                <PlayIcon size={14} />
                Quick intro to Comfi
              </div>
              <div className={cls.watch}>
                <Image src={watch} alt='img not found' />5 min
              </div>
            </div>
            <div className={cls.images}>
              <div className={cls["hero-video"]}>
                <Video mainVideo={""} inView={false} />
              </div>
              <Image className={cls.img} src={comfi} alt='img not found' />
              <Image className={cls.img2} src={mobile} alt='img not found' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
