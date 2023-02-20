import Image from "next/image";

import cls from "./card.module.scss";

export interface IProps {
  heading: string;
  icon: any;
  list: Array<string>;
}

const Card: React.FC<IProps> = ({ heading, icon, list }) => (
  <div className={cls.card}>
    <h2 className={cls.title}>{heading}</h2>
    <ul>
      {list.map((item) => (
        <li key={item}>
          <Image loading='lazy' src={icon} alt='icon' /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
