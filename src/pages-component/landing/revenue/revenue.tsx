import CountUp from "react-countup";
import Image from "next/image";

import arrowBack from "/public/assets/images/Icon-arrow-back-card.webp";
import arrowTop from "/public/assets/images/Icon-arrow-top-card.webp";
import iconShield from "/public/assets/images/icon-shield-card.webp";

import  cls from "./revenue.module.scss";

const items = [
  "CRM",
  "ERP",
  "Accounting",
  "Project Management",
  "Email Marketing",
  "HR & Payroll",
  "Cloud Computing",
  "DevOps",
  "Design",
  "Database",
  "Communication",
  "Content Management",
];

const GrowRevenue = () => (
  <div className={cls['grow-revenue']}>
    <div className={cls['grow-revenue__container']}>
      <div className={cls['grow-revenue__content']}>
        <h1 className={cls['grow-revenue__heading']}>
          Grow your Revenue <span>2x</span>
        </h1>
        {/* Card list */}
        <div className={cls['grow-revenue__cards']}>
          <div className={cls['grow-revenue__card']}>
            <Image loading='lazy' src={arrowTop} alt='img not found' />
            <div>
              <h2>
                +<CountUp start={0} end={32} duration={3} />%
              </h2>

              <p>
                In conversion rates <br />
                when using
              </p>
            </div>
          </div>
          <div className={cls['grow-revenue__card']}>
            <Image loading='lazy' src={arrowBack} alt='img not found' />
            <div>
              <h2>
                <CountUp start={0} end={2} duration={3} />x
              </h2>
              <p>More annual plans sold</p>
            </div>
          </div>
          <div className={cls['grow-revenue__card']}>
            <Image loading='lazy' src={iconShield} alt='img not found' />
            <div>
              <h2>
                <CountUp start={100} end={0} duration={3} />%
              </h2>
              <p>
                Risk to your business when Comfi <br />
                settles upfront
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* moving banner */}
      <div className={cls['grow-revenue__banner']}>
        <div className={cls['grow-revenue__banner-item']}>
          <div>
            {items.reverse().map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className={cls['grow-revenue__banner-item']}>
          <div>
            {items.reverse().map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GrowRevenue;
