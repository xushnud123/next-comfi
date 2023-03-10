import { FC, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, domMax, LazyMotion } from "framer-motion";
import ReactPlayer from "react-player";
import Slider from "react-slick";

import { Loader } from "@/components";
import { CALENDLY_LINKS, COMFI_INTRO_LINK } from "@/helpers/constants";
const Modal = dynamic(() => import("@/components/modal/modal"), {
  loading: () => <Loader />,
  ssr: false,
});
const Video = dynamic(() => import("@/components/video/video"), {
  loading: () => <Loader />,
  ssr: false,
});

import PlayIcon from "@/components/icons/play-icon";

import comfi from "/public/assets/images/new-hero/desktop.webp";
import watch from "/public/assets/images/new-hero/Main.webp";
import mobile from "/public/assets/images/new-hero/mobil.webp";
import heroVideo from "/public/assets/images/new-hero/video.mp4";
import img2 from "/public/assets/images/slider/Item (1).webp";
import img1 from "/public/assets/images/slider/Item.webp";
import star2 from "/public/assets/images/star/Pattern (1).webp";
import star1 from "/public/assets/images/star/Pattern.webp";

import cls from "./hero.module.scss";

interface HeroProps {
  onCalendly: ({ open, link }: { open: boolean; link: any }) => void;
  calendly: { open: boolean; link: string };
}
const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
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
        <LazyMotion features={domMax}>
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
        </LazyMotion>
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
                  src={img1}
                  fill
                  sizes='(max-width:800px) 100px'
                  priority
                  alt='img not found'
                />
              </div>
              <div className={cls.card}>
                <Image
                  src={img2}
                  fill
                  priority
                  sizes='(max-width:800px) 100px'
                  alt='img not found'
                />
              </div>
            </Slider>
          </div>
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            width={20}
            height={20}
            className={cls.images1}
          />
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            width={70}
            height={70}
            className={cls.images2}
          />
          <Image
            loading='lazy'
            src={star1}
            alt='img not found'
            width={20}
            height={20}
            className={cls.images3}
          />
          <Image
            loading='lazy'
            src={star2}
            width={35}
            height={35}
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
                <Image src={watch} width={17} height={17} alt='img not found' />
                5 min
              </div>
            </div>
            <div className={cls.images}>
              <div className={cls["hero-video"]}>
                <Video mainVideo={heroVideo} inView={false} />
              </div>
              <div className={cls.img}>
                <Image
                  fill
                  sizes='(max-width:1170px) 600px'
                  src={comfi}
                  alt='img not found'
                  priority
                />
              </div>
              <div className={cls.img2}>
                <Image
                  fill
                  sizes='(max-width:600px) 300px'
                  src={mobile}
                  alt='img not found'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
