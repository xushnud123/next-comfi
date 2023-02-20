import Image from "next/image";

import TinyStar from "@/assets/images/landing/triple/icon-tiny-star.webp";
import logo from "@/assets/images/landing/triple/logo-comfi.webp";

import Card, { IProps as ICardProps } from "./components/card";

import cls from "./triple.module.scss";

const items: Array<ICardProps> = [
  {
    heading: "Vendors",
    icon: TinyStar,
    list: ["Boosted revenue", "Higher retention", "Velocity in sales"],
  },
  {
    heading: "Customers",
    icon: TinyStar,
    list: ["Secured runway", "Yearly discounts", "Zero interest"],
  },
];

export default function Triple() {
  return (
    <div className={cls.triple}>
      <div className={cls.triple_container}>
        <div className={cls.triple_content}>
          <h1 className={cls.title}>Triple win</h1>
          <p className={cls.description}>
            You need more ARR to fund growth + Your customers want to pay
            monthly = Comfi ❤️
          </p>

          <div className={cls.triple_content_bottom}>
            <Card {...items[0]} />
            <Image loading='lazy' className={cls.logo} src={logo} alt='logo' />
            <Card {...items[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}
