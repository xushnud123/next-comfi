import { FC, memo, useEffect, useState } from "react";
import cx from "classnames";
import { useGlobalContext } from "@/context/context";
import dynamic from "next/dynamic";
import { domMax, LazyMotion } from "framer-motion";

import LeadMagnet from "@/pages-component/landing/chat/lead-magnet/lead-magnet";

import Loader from "../page-loader/page-loader";
import { NavbarProps } from "./components/navbar/navbar";
import { Navbar } from "./components";
const Modal = dynamic(() => import("@/components/modal/modal"), {
  loading: () => <Loader />,
  ssr: false,
});

import cls from "./top-bar.module.scss";

interface TopBarProps extends Pick<NavbarProps, "onCalendly"> {}

const TopBar: FC<TopBarProps> = ({ onCalendly }) => {
  const [openNav, setOpenNav] = useState(false);
  const { openMail, setOpenMail } = useGlobalContext();

  useEffect(() => {
    // @ts-ignore
    setTimeout(() => setOpenMail((v) => v), 750);
  }, [setOpenMail]);

  useEffect(() => {
    typeof window !== "undefined" && openNav
      ? document.body.classList.toggle("open-modal")
      : document.body.classList.remove("open-modal");
  }, [openNav]);

  useEffect(() => {
    typeof window !== "undefined" && openMail
      ? document.body.classList.add("open-modal")
      : document.body.classList.remove("open-modal");
  }, [openMail]);

  return (
    <div className={cx(cls.wrapper, openNav && cls.active)}>
      <LazyMotion
        features={domMax}
        >
        {openMail && (
          <Modal state={openMail} onState={setOpenMail} className='landing'>
            <LeadMagnet setState={setOpenMail} />
          </Modal>
        )}
      </LazyMotion>
      <Navbar
        openNav={openNav}
        setOpenNav={setOpenNav}
        onCalendly={onCalendly}
        mail={openMail}
        onMail={setOpenMail}
      />
    </div>
  );
};

export default memo(TopBar);
