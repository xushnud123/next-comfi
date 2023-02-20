import Image from "next/image";

import icon1 from "@/assets/images/results/Icon.webp";
import icon2 from "@/assets/images/results/Icon-_1_.webp";

import cls from "./results.module.scss";

const Results = () => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      <h1 className={cls.title}>Results</h1>
      <p className={cls.description}>
        The predictive results are based on 10+ customers from UAE and USA, 6+
        months of data.
      </p>
      <div className={cls.cards}>
        <div className={cls.card}>
          <div className={cls[`card-header`]}>
            <p className={cls.percentage}>25-40%</p>
            <Image
              loading='lazy'
              width={43}
              height={43}
              src={icon1}
              className={cls.icon}
              alt='img not found'
            />
          </div>
          <h3 className={cls.text}>Conversion into annual contracts*</h3>
        </div>
        <div className={cls.card}>
          <div className={cls[`card-header`]}>
            <p className={cls.percentage}>6-15%</p>
            <Image
              loading='lazy'
              width={43}
              height={43}
              src={icon2}
              className={cls.icon}
              alt='img not found'
            />
          </div>
          <h3 className={cls.text}>Annual retention rate*</h3>
        </div>
      </div>
    </div>
    <p>* in relative terms</p>
  </div>
);

export default Results;
