import { FC } from "react";
import Image from "next/image";

import shield from "@/assets/images/finance/Illustration.webp";
import block from "@/assets/images/finance/Illustration-_1_.webp";
import hour from "@/assets/images/finance/Illustration-_2_.webp";
import data from "@/assets/images/finance/Illustration-_3_.webp";

import cls from "./how-we-finance.module.scss";

interface HowWeFinanceProps {}

const HowWeFinance: FC<HowWeFinanceProps> = () => (
  <div className={cls.wrapper}>
    <h1 className={cls.title}>Who will we finance</h1>
    <div className={cls.container}>
      <div className={cls.card}>
        <h2 className={cls["card-title"]}>Worldwide operations</h2>
        <h3 className={cls.subtitle}>
          We can underwrite companies from all over the world
        </h3>
        <Image
          className={cls["card-img"]}
          loading='lazy'
          src={shield}
          alt='img not found'
        />
      </div>
      <div className={cls.card}>
        <h2 className={cls["card-title"]}>Fast onboarding</h2>
        <h3 className={cls.subtitle}>Process takes only 1-3 minutes</h3>
        <Image
          className={cls["card-img"]}
          loading='lazy'
          src={hour}
          alt='img not found'
        />
      </div>
      <div className={cls.card}>
        <h2 className={cls["card-title"]}>Simple qualification</h2>
        <div className={cls.blocs}>
          <h3 className={cls.bloc}>6+ months of revenue history</h3>
          <h3 className={cls.bloc}>MRR: {">"} $20k</h3>
          <h3 className={cls.bloc}>3-6 mo of runway</h3>
        </div>
        <Image
          className={cls["card-img"]}
          loading='lazy'
          src={block}
          alt='img not found'
        />
      </div>
      <div className={cls.card}>
        <h2 className={cls["card-title"]}>Modern underwriting</h2>
        <h3 className={cls.subtitle}>
          We score your customers based on the financial health of their
          business through Stripe or business bank account
        </h3>
        <Image
          className={cls["card-img"]}
          loading='lazy'
          src={data}
          alt='img not found'
        />
      </div>
    </div>
  </div>
);

export default HowWeFinance;
