"use client";
import { FC, useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { PopupModal } from "react-calendly";
import { TopBar } from "@/components";
import { analytic, Constants } from "@/helpers";

const FAQ = dynamic(() => import("@/pages-component/landing/faq/faq"));
const Hero = dynamic(() => import("@/pages-component/landing/hero/hero"));
const HowWeFinance = dynamic(
  () => import("@/pages-component/landing/how-we-finance/how-we-finance")
);
const Integrations = dynamic(
  () => import("@/pages-component/landing/integrates/integrates")
);
const LandingFooter = dynamic(
  () => import("@/pages-component/landing/landing-footer/landing-footer")
);
const Latest = dynamic(() => import("@/pages-component/landing/latest/latest"));
const Now = dynamic(() => import("@/pages-component/landing/now/now"));
const Results = dynamic(
  () => import("@/pages-component/landing/results/results")
);
const TripleSlider = dynamic(
  () => import("@/pages-component/landing/triple-slider/triple-slider")
);
const ZeroRisk = dynamic(
  () => import("@/pages-component/landing/zero-risk/zero-risk")
);

export interface HeroesProps {}

const Landing: FC<HeroesProps> = () => {
  const [doc, setDoc] = useState<HTMLElement>();
  const [calendly, setCalendly] = useState({
    open: false,
    link: "",
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    setDoc(
      (typeof window !== "undefined" && document.getElementById("root")) ||
        document.body
    );
  }, []);

  useEffect(() => {
    analytic("pageView", {
      page_title: Constants.PAGES.MAIN_LANDING,
      // page_url: window.location.href,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Comfi: Buy Now Pay Later for B2B SaaS</title>
        <meta property='og:image' content='/OG.jpeg' />
        <meta
          data-rh='true'
          name='description'
          content='Buy now pay later technology for SaaS providers. Let your customers enjoy the annual discounts, pay monthly and stay with you longer.'
        />
      </Head>
      <TopBar onCalendly={setCalendly} />
      <PopupModal
        url={calendly.link}
        prefill={{ email }}
        onModalClose={() => setCalendly({ open: false, link: "" })}
        open={calendly.open}
        // @ts-ignore
        rootElement={doc}
      />
      hello
      <Hero calendly={calendly} onCalendly={setCalendly} />
      <TripleSlider />
      <Integrations />
      <ZeroRisk />
      <HowWeFinance />
      <Results />
      <Now />
      <Latest />
      <FAQ />
      <LandingFooter
        onEmail={setEmail}
        calendly={calendly}
        onCalendly={setCalendly}
      />
    </>
  );
};

export default Landing;
