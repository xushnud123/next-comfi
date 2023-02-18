import { FC } from "react";

import Slider from "rc-slider";

import cls from "./slider-component.module.scss";

export interface IProps {
  step: number;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
}
const SliderComponent: FC<IProps> = ({
  step,
  min,
  max,
  value,
  onChange,
  format = (c) => `${c}%`,
}) => (
  <div className={cls['wrap']}>
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={() => onChange}
    />
    <p>{format(value)}</p>
  </div>
);

export default SliderComponent;
