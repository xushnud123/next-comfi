import { FC, useState } from 'react';
import { m } from 'framer-motion';

import withVideo from '/public/assets/videos/difference/with.mp4';
import withoutVideo from '/public/assets/videos/difference/without.mp4';

import Plan from './components/plan';
import Switch from './components/switch';

import classes from './difference.module.scss';

const Difference: FC = () => {
  const [open, setOpen] = useState(false);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

  return (
    <div className={classes.difference}>
      <div className={classes.hero_container}>
        <div className={classes.row}>
          <Switch open={open} setOpen={setOpen} />
          <Plan open={open} />
          <div className={classes.video_container}>
            <m.video
              key={+open}
              variants={boxVariant}
              initial='hidden'
              animate='visible'
              autoPlay
              playsInline
              loop
              muted
              controls={false}>
              <source src={open ? withoutVideo : withVideo} type='video/mp4' />
              <source src={''} type='video/mp4' />
            </m.video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
