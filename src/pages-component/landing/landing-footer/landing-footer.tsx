import { FC, useState } from "react";
import cx from "classnames";

import { CALENDLY_LINKS } from "@/helpers/constants";

import { Footer } from "@/components";

import cls from "./landing-footer.module.scss";

interface FooterProps {
  onCalendly: ({ open, link }: { open: boolean; link: any }) => void;
  calendly: { open: boolean; link: string };
  onEmail: (e: string) => void;
}

const LandingFooter: FC<FooterProps> = ({ calendly, onCalendly, onEmail }) => {
  const [email, setEmail] = useState("");

  const handleBtn = (e:any) => {
    e.preventDefault();
    onEmail(email);
    onCalendly({ open: true, link: CALENDLY_LINKS.FOOTER });
  };

  return (
    <>
      <div className={cls.wrapper} id='form'>
        <div className={cls.contain}>
          <div className={cls.container}>
            <h3 className={cls.title2}>
              No rush here. It’s never too late to close that 100k resting at
              the end of you pipe
            </h3>
          </div>
          <div className={cls.container}>
            <div className={cls.wrap}>
              <h2 className={cls["wrap-title"]}>Get the demo → today</h2>
              <form className={cls["wrap-form"]} onSubmit={(e) => handleBtn(e)}>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your Email'
                />
                <button type='submit' onClick={handleBtn} className={cls.btn}>
                  Get a demo
                </button>
              </form>
              <h3 className={cx(cls.title)}>Get in touch with us today</h3>
            </div>
          </div>
          <Footer page='landing' />
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
