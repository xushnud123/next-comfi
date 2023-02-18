import { FC } from 'react';

import Card from './card';

import cls from './integrates.module.scss';

interface IntegratesProps {}

const Integrates: FC<IntegratesProps> = () => (
  <div className={cls.wrapper} id="how-it-works">
    <div className={cls.wrap}>
      <div className={cls.container}>
        <h3 className={cls.description}>
          <span />
          How it works?
        </h3>
        <h1 className={cls.title}>Comfi integrates into any sales process seamlessly</h1>
        <Card/>
      </div>
    </div>
  </div>
);

export default Integrates;
