import Image from "next/image";
// import { Image } from 'react-lazy-load-image-component';

import closeIcon from "@/assets/images/icons/icon-close-red.png";
import tickIcon from "@/assets/images/icons/icon-tick-black.svg";
import logo from "@/assets/images/logo-black.svg";

import classes from "./flexible-payment.module.scss";

export default function FlexiblePayment() {
  return (
    <div className={classes.flexible_payment}>
      <div className={classes.flexible_payment_wrap}>
        <div className={`${classes.flexible_payment_container}`}>
          <h1>Offer payment flexibility with Comfi</h1>

          <div className={classes.flexible_payment_table_wrapper}>
            {/* payment options table */}

            <div className={classes.flexible_payment_table}>
              {/* table header */}

              <div className={classes.flexible_payment_table_header}>
                <span />
                <span>Debit/Credit card</span>
                <span>Invoice finance</span>
                <span>
                  <Image loading='lazy' src={logo} alt='img not found' />
                </span>
              </div>
              {/* Table body */}
              <div className={classes.flexible_payment_table_body}>
                {/* body row */}
                <div className={classes.flexible_payment_table_body_row}>
                  <span>Customer payment terms</span>
                  <span>
                    <Image loading='lazy' src={closeIcon} alt='' />
                  </span>
                  <span>
                    30-90 <br /> days
                  </span>
                  <span>
                    4-12 <br /> months
                  </span>
                </div>
                <div className={classes.flexible_payment_table_body_row}>
                  <span>Credit risk and Collections</span>
                  <span>Supplier</span>
                  <span>Supplier</span>
                  <span>Comfi</span>
                </div>
                <div className={classes.flexible_payment_table_body_row}>
                  <span>Integrated into sales process</span>
                  <span>
                    <Image loading='lazy' src={closeIcon} alt='img not found' />
                  </span>

                  <span>
                    <Image loading='lazy' src={closeIcon} alt='' />
                  </span>
                  <span>
                    <Image loading='lazy' src={tickIcon} alt='' />
                  </span>
                </div>

                <div className={classes.flexible_payment_table_body_row}>
                  <span>Eligible customers</span>
                  <span>All</span>
                  <span>Only avalible to mature, profitable business</span>
                  <span>
                    Startups and mature <br /> businesses
                  </span>
                </div>
                <div className={classes.flexible_payment_table_body_row}>
                  <span>Cost per transaction</span>
                  <span>Free</span>
                  <span>Up to 5%</span>
                  <span>Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
