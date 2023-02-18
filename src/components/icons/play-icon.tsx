import { FC } from 'react';

interface PlayIconProps {
  size?: number;
  color?: string;
}

const PlayIcon: FC<PlayIconProps> = ({ size = 18, color = '#000000' }) => (
  <svg width={size} height={size + 9} viewBox="0 0 15 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.35311 2.12159C1.87923 2.29962 1.44956 2.702 1.21009 3.19226V3.19226C1.07185 3.47534 1 3.78623 1 4.10127V9.98948V15.8436C1 16.1808 1.07857 16.5134 1.22948 16.815V16.815C1.7037 17.7625 2.79806 18.2312 3.73375 17.8876C4.03488 17.777 13.377 12.2539 14.0898 11.765C15.3034 10.9327 15.3034 9.05088 14.0898 8.21853C13.377 7.72969 4.03488 2.20654 3.73375 2.09595C3.36004 1.95876 2.75703 1.9699 2.35311 2.12159Z"
      fill={color}
    />
  </svg>
);

export default PlayIcon;
