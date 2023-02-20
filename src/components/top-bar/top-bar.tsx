import { FC, memo, useEffect, useState } from "react";
import cx from "classnames";
import { useGlobalContext } from "@/context/context";
import { AnimatePresence } from "framer-motion";

import LeadMagnet from "@/pages-component/landing/chat/lead-magnet/lead-magnet";

import { NavbarProps } from "./components/navbar/navbar";
import { Navbar } from "./components";

import cls from "./top-bar.module.scss";
import Modal from "../modal/modal";

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
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {openMail && (
          <Modal state={openMail} onState={setOpenMail} className='landing'>
            <LeadMagnet setState={setOpenMail} />
          </Modal>
        )}
      </AnimatePresence>
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
