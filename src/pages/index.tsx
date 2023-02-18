"use client";
import { FC, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

import { TopBar } from "@/components";
import { analytic, Constants } from "@/helpers";
import { landingSchema } from "@/helpers/constants";

import {
  FAQ,
  Hero,
  HowWeFinance,
  Integrations,
  LandingFooter,
  Latest,
  Now,
  Results,
  TripleSlider,
  ZeroRisk,
} from "@/pages-component/landing";

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
      page_url: window.location.href,
    });
  }, []);


  return (
    <>
      <TopBar onCalendly={setCalendly} />
      <PopupModal
        url={calendly.link}
        prefill={{ email }}
        onModalClose={() => setCalendly({ open: false, link: "" })}
        open={calendly.open}
        // @ts-ignore
        rootElement={doc}
      />
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
