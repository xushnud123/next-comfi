import { FC } from "react";
import cx from "classnames";

import { Linkedin, Medium, Twitter, Logo } from "../icons";

import cls from "./footer.module.scss";

type FooterProps = {
  page?: "landing" | "blog" | "slug";
};

const Footer: FC<FooterProps> = ({ page }) => (
  <div className={cx(cls.wrapper, cls[`${page}`])} id='form'>
    <div className={cls.contain}>
      <div className={cls.container}>
        <div className={cls.row}>
          <div className={cls.logo}>
            <Logo />
            <a
              href='https://firebasestorage.googleapis.com/v0/b/comfi-prod.appspot.com/o/Comfi%20one-pager%20(19.10)_compressed.pdf?alt=media&token=67502f65-18af-44e0-a0b8-9fc09de259e4'
              download=''
              target='_blank'
              rel='noreferrer'
              className={cls.btn}>
              Get one-pager
              {/* <img src={download} alt="img not found" /> */}
            </a>
          </div>
          <div className={cls.links}>
            <a
              href='https://www.linkedin.com/company/comfi-payments'
              target='_blank'
              rel='noreferrer'
              className={cls.link}>
              <Linkedin />
            </a>
            <a
              href='https://twitter.com/comfi_app'
              target='_blank'
              rel='noreferrer'
              className={cls.link}>
              <Twitter />
            </a>
            <a
              href='https://medium.com/@amal_abdullaev'
              target='_blank'
              rel='noreferrer'
              className={cls.link}>
              <Medium />
            </a>
          </div>
        </div>
      </div>
      <div className={cls.container}>
        <div className={cls["text-wrap"]}>
          <p>hi@comfi.app</p>
          <div className={cls.call}>
            <span>+971</span>54 495 3954
          </div>
          <div className={cls.line} />
          <div className={cls.state}>
            31-E2, I-Rise Tower <span>UAE, Dubai</span>
          </div>
        </div>
      </div>
      <div className={cls.container}>
        <div className={cls.card}>
          <div className={cls["card-left"]}>
            <p>&copy; IMEX TRADE FZE,&nbsp;All rights reserved</p>
          </div>
          <div className={cls["card-right"]}>
            <div className={cls["card-header"]}>
              <h1>Resources</h1>
              <div className={cls["card-body"]}>
                <a
                  href='https://comfiapp.notion.site/Comfi-About-Us-40d84a639690457d96ae1d87f3af9a92'
                  target='_blank'
                  rel='noreferrer'>
                  About
                </a>
                <a
                  href='https://comfiapp.tawk.help/'
                  target='_blank'
                  rel='noreferrer'>
                  FAQs
                </a>
                <a
                  href='https://comfi.app/blog'
                  target='_blank'
                  rel='noreferrer'>
                  Blog
                </a>
              </div>
            </div>
            <div className={cls["card-header"]}>
              <h1>Legal</h1>
              <div className={cls["card-body"]}>
                <a
                  href='https://comfiapp.notion.site/Terms-and-conditions-9635df6379054b37b7d5e0a6d9d1ead5'
                  target='_blank'
                  rel='noreferrer'>
                  Terms & Conditions
                </a>
                <a
                  href='https://comfiapp.notion.site/Privacy-Policy-4022ddf56cc34842a9769c2fe192a0d6'
                  target='_blank'
                  rel='noreferrer'>
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
