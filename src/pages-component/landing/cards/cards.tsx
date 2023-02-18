import { FC } from "react";
import Image from "next/image";
// import { LazyLoadImage } from "react-lazy-load-image-component";

import arrow from "@/assets/images/landing/statements/Icon.webp";
import slug from "@/assets/images/landing/statements/Icon-_1_.webp";
import person from "@/assets/images/landing/statements/Icon-_2_.webp";

import classes from "./cards.module.scss";

const Cards: FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.hero_container}>
      <div className={classes.statements}>
        <div className={classes.statement}>
          <div className={classes.wrap}>
            <div className={classes.wrap_images}>
              <Image loading='lazy' src={arrow} alt='img not found' />
            </div>
            <h2 className={classes.subtitle}>
              {`More customers will be opting for annual subscriptions, because they are cheaper and they don't have to
              pay upfront`}
            </h2>
          </div>
        </div>
        <div className={classes.statement}>
          <div className={classes.wrap}>
            <div className={classes.wrap_images}>
              <Image loading='lazy' src={slug} alt='img not found' />
            </div>
            <h2 className={classes.subtitle}>
              You sales team will have an additional leverage to convert a
              hesitating customer
            </h2>
          </div>
        </div>
        <div className={classes.statement}>
          <div className={classes.wrap}>
            <div className={classes.wrap_images}>
              <Image loading='lazy' src={person} alt='img not found' />
            </div>
            <h2 className={classes.subtitle}>
              More customers will commit to you for longer periods which will be
              your chance to make them your evangelists
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
