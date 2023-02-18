import { FC } from 'react';
import Lottie from 'lottie-react-component';

import animateData from './loader.json';

import classes from './page-loader.module.scss';

const PageLoader: FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.loader}>
      <Lottie animationData={animateData} loop />
    </div>
  </div>
);

export default PageLoader;
