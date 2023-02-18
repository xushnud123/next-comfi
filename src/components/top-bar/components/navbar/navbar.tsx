import { Dispatch, FC, SetStateAction } from "react";
import cx from "classnames";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import { CALENDLY_LINKS } from "@/helpers/constants";

import Logo from "@/components/icons/logo";

import cls from "./navbar.module.scss";

export interface NavbarProps {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  onCalendly: ({ open, link }: { open: boolean; link: any }) => void;
  onMail: (e: boolean) => void;
  mail: boolean;
  calendly?: {
    open: boolean;
    link: string;
  };
}

const Navbar: FC<NavbarProps> = ({
  openNav,
  setOpenNav,
  onCalendly,
  onMail,
  mail,
  calendly,
}) => (
  <div className={cls.wrapper}>
    <div className={cx(cls.rows, openNav && cls["row-active"])}>
      <div className={cls["subscribe-pdf"]}>
        Download our FREE ‘
        <span>
          5-Step Guide on Revenue Growth for Bootstrapped & Seed Stage Startups
        </span>
        ’ in 2023&nbsp;
        <button
          type='button'
          className={cls.modal}
          onClick={() => onMail(!mail)}>
          Download PDF&nbsp; <div className={cls.arrow}>→</div>
        </button>
      </div>
      <div className={cls.contain}>
        <div className={cx(cls["wrapper-logo"])}>
          <Logo onClick={() => (window.location.pathname = "/")} />
          <button
            onClick={() => setOpenNav(!openNav)}
            className={cls["menu-btn"]}>
            {openNav ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                key='1'>
                Close
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                key='2'>
                Menu
              </motion.div>
            )}
          </button>
        </div>
        <div className={cx(cls.nav, openNav && cls.active)}>
          {/* <ul className={cls['nav-ul']}>
            <li className={cls['nav-li']}>
              <Link
                href=""
                activeClass="active"
                to="how-it-works"
                offset={-69}
                spy
                smooth="easeInOutCubic"
                duration={2000}
                className={cls['nav-a']}
                onClick={() => setOpenNav(!openNav)}
              >
                How it works
              </Link>
            </li>
            <li className={cls['nav-li']}>
              <Link
                href=""
                activeClass="active"
                to="zero-risk"
                offset={-69}
                spy
                smooth="easeInOutCubic"
                duration={2000}
                className={cls['nav-a']}
                onClick={() => setOpenNav(!openNav)}
              >
                Zero risk
              </Link>
            </li>
            <li className={cls['nav-li']}>
              <Link
                href=""
                activeClass="active"
                to="faq"
                offset={-69}
                spy
                smooth="easeInOutCubic"
                duration={2000}
                className={cls['nav-a']}
              >
                FAQ
              </Link>
            </li>
          </ul> */}
          <ScrollLink
            href=''
            activeClass='active'
            to=''
            smooth='easeInOutCubic'
            duration={2000}
            offset={-69}
            className={cls.btn}
            onClick={() =>
              onCalendly({ open: true, link: CALENDLY_LINKS.HEADER })
            }>
            Get in touch <div className={cls.arrow}>&nbsp;→</div>
          </ScrollLink>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
