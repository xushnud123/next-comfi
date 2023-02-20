import { FC } from "react";
import Image from "next/image";

import icon2 from "@/assets/images/zero/Icon (1).webp";
import icon3 from "@/assets/images/zero/Icon (2).webp";
import icon1 from "@/assets/images/zero/Icon.webp";

import cls from "./zero-risk.module.scss";

interface ZeroRiskProps {}

const ZeroRisk: FC<ZeroRiskProps> = () => (
  <div className={cls.wrapper} id='zero-risk'>
    <h1 className={cls.title}>Zero risk to you</h1>
    <div className={cls.container}>
      <div className={cls.card}>
        <Image
          loading='lazy'
          width={30}
          height={30}
          src={icon1}
          alt='img not found'
        />
        <h2 className={cls.text}>Get paid upfront</h2>
        <p className={cls.description}>
          {`Get your money straight into your bank account.&nbsp;We pay you in 7
          days. It's the end of cash flow problems.`}
        </p>
      </div>
      <div className={cls.card}>
        <Image
          loading='lazy'
          width={30}
          height={30}
          src={icon2}
          alt='img not found'
        />
        <h2 className={cls.text}>Comfi bears risks</h2>
        <p className={cls.description}>
          Comfi bears most of the risks and is accountable for underwriting and
          collecting the payments from your customers.
        </p>
      </div>
      <div className={cls.card}>
        <Image
          loading='lazy'
          width={30}
          height={30}
          src={icon3}
          alt='img not found'
        />
        <h2 className={cls.text}>Zero credit impact </h2>
        <p className={cls.description}>
          Comfi scores your customers via connected data sources without
          communicating with credit agencies making no impact on their credit
          score.
        </p>
      </div>
    </div>
  </div>
);

export default ZeroRisk;
