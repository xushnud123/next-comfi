import { FC, useState } from 'react';
import { Link } from 'react-scroll';

import { format } from '@/helpers';

import SliderComponent from './slider-componet/slider-component';

import classes from './slider.module.scss';

const Sliders: FC = () => {
  const [arr, setArr] = useState<number>(100000);
  const [rate, setRate] = useState<number>(1);

  return (
    <div className={classes.slider_wrapper}>
      <div className={classes.row}>
        <div className={classes.hero_container}>
          <div className={classes.card_left}>
            <div className={classes.cards}>
              <div className={classes.header}>
                <h1 className={classes.title_slider}>What is your current ARR?</h1>
                <SliderComponent
                  format={format}
                  min={100000}
                  max={5000000}
                  step={10000}
                  value={arr}
                  onChange={v => setArr(v)}
                />
              </div>
              <div className={classes.header}>
                <h2 className={classes.title_slider}>What is your current conversion rate?</h2>
                <SliderComponent min={0.5} max={10} step={0.1} value={rate} onChange={v => setRate(v)} />
              </div>
            </div>
          </div>
          <div className={classes.card_right}>
            <h3 className={classes.title}>
              You could earn additional <span>{format(arr * 0.15)}</span>&nbsp;this year and increase your conversion
              rate to <span>{(rate * 1.25).toFixed(2)}%</span>&nbsp;
              with Comfi
            </h3>
            <Link to="form" spy smooth offset={0} duration={2000} type="button" className={classes.btn}>
              <span>Grow my Revenue</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
