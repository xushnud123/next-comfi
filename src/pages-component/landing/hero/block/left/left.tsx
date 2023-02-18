import { FC } from 'react';

import cls from './left.module.scss';

interface LeftProps {}

const Left: FC<LeftProps> = () => <div className={cls.wrapper}>Left</div>;

export default Left;
