import { FC } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Logo: FC<LogoProps> = ({ size = 18, color = '#000000', onClick }) => (
  <motion.svg
    onClick={onClick}
    width="100"
    height="17"
    viewBox="0 0 100 17"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    // initial={{ scale: 0 }}
    // animate={{ rotate: 0, scale: 1 }}
    // transition={{
    //   type: 'spring',
    //   stiffness: 260,
    //   damping: 20
    // }}
  >
    <motion.path
      d="M38.8891 11.5341C39.2264 10.6941 38.509 9.90831 37.6435 9.90831H37.373C36.6205 9.90831 36.0267 10.5214 35.6582 11.2128C35.6303 11.2652 35.6009 11.317 35.5699 11.3683C35.3042 11.8083 34.9627 12.1683 34.5452 12.4683C34.1088 12.7683 33.6154 12.9883 33.0462 13.1483C32.4769 13.3083 31.8697 13.3883 31.2056 13.3883C30.3896 13.3883 29.6686 13.2883 29.0614 13.0483C28.4542 12.8083 27.9418 12.4883 27.5244 12.0683C27.1069 11.6483 26.7843 11.1283 26.5756 10.5283C26.3669 9.92832 26.272 9.26832 26.272 8.54832C26.272 7.78832 26.3858 7.10832 26.6135 6.46832C26.8412 5.84832 27.1828 5.30833 27.6192 4.86833C28.0557 4.42833 28.587 4.10833 29.2321 3.86833C29.8583 3.62833 30.5794 3.50833 31.3764 3.50833C31.9646 3.50833 32.5528 3.58833 33.1221 3.74833C33.6913 3.90833 34.1847 4.12833 34.6401 4.44833C35.0955 4.76833 35.456 5.16833 35.7407 5.64832C35.7854 5.73248 35.8269 5.81948 35.865 5.9093C36.2042 6.70941 36.827 7.45657 37.6584 7.46681L37.8671 7.46939C38.7124 7.47981 39.4299 6.74737 39.2106 5.88692C39.1103 5.49346 38.9715 5.12117 38.7957 4.76833C38.3783 3.96833 37.828 3.30833 37.1069 2.76833C36.3858 2.22833 35.5509 1.80833 34.6022 1.52833C33.6534 1.24833 32.6287 1.10833 31.5282 1.10833C30.2758 1.10833 29.1183 1.28833 28.0746 1.64833C27.012 2.00833 26.1202 2.50833 25.3612 3.14833C24.6022 3.80833 23.9949 4.60833 23.5775 5.52833C23.16 6.46832 22.9513 7.50832 22.9513 8.66832C22.9513 9.72832 23.1221 10.6883 23.4826 11.5483C23.8431 12.4283 24.3555 13.1683 25.0386 13.7883C25.7027 14.4083 26.5187 14.8883 27.5054 15.2283C28.4921 15.5683 29.5927 15.7283 30.8261 15.7283C31.9266 15.7283 32.9893 15.6083 33.9949 15.3283C34.9817 15.0483 35.8735 14.6683 36.6515 14.1483C37.4105 13.6483 38.0367 13.0283 38.4921 12.3083C38.6493 12.0598 38.7816 11.8017 38.8891 11.5341Z"
      fill="currentColor"
    />
    <motion.path
      d="M49.9984 1.10833C48.8409 1.10833 47.7593 1.30833 46.7726 1.68833C45.7669 2.06833 44.8941 2.58833 44.154 3.24833C43.395 3.90833 42.8068 4.68833 42.3893 5.56833C41.9529 6.44832 41.7441 7.40832 41.7441 8.42832C41.7441 9.46832 41.9529 10.4483 42.3703 11.3283C42.7878 12.2083 43.376 12.9883 44.1161 13.6283C44.8561 14.2883 45.729 14.8083 46.7347 15.1683C47.7403 15.5483 48.8219 15.7283 49.9984 15.7283C51.1559 15.7283 52.2375 15.5483 53.2432 15.1683C54.2489 14.8083 55.1218 14.2883 55.8618 13.6283C56.6018 12.9883 57.1901 12.2083 57.6075 11.3283C58.025 10.4483 58.2337 9.46832 58.2337 8.42832C58.2337 7.38832 58.006 6.42832 57.5885 5.52833C57.1711 4.64833 56.5829 3.86833 55.8428 3.20833C55.1028 2.56833 54.2299 2.04833 53.2432 1.66833C52.2375 1.30833 51.1559 1.10833 49.9984 1.10833ZM49.9984 13.1883C49.3533 13.1883 48.7271 13.0883 48.1578 12.8883C47.5886 12.6883 47.0762 12.4083 46.6588 12.0083C46.2223 11.6083 45.8808 11.1283 45.6341 10.5483C45.3684 9.96831 45.2546 9.28832 45.2546 8.50832C45.2546 7.74832 45.3684 7.06832 45.6341 6.46832C45.8808 5.86832 46.2223 5.36832 46.6588 4.96833C47.0952 4.56833 47.6075 4.24833 48.1958 4.02833C48.784 3.82833 49.4102 3.72833 50.0933 3.72833C50.7954 3.74833 51.4405 3.86833 52.0098 4.06833C52.5791 4.28833 53.0724 4.58833 53.4899 4.98833C53.8884 5.38832 54.2109 5.88832 54.4386 6.48832C54.6664 7.08832 54.7802 7.74832 54.7802 8.50832C54.7802 9.26832 54.6474 9.94832 54.4007 10.5283C54.135 11.1083 53.7935 11.5883 53.3571 11.9883C52.9206 12.3883 52.4083 12.6883 51.839 12.8883C51.2508 13.0883 50.6436 13.1883 49.9984 13.1883Z"
      fill="currentColor"
    />
    <motion.path
      d="M68.1684 2.72878C68.056 1.96327 67.4271 1.40833 66.6922 1.40833H63.758C63.0186 1.40833 62.3868 1.96985 62.2618 2.73799L60.5053 13.538C60.3463 14.5154 61.0606 15.4083 62.0015 15.4083H62.3805C63.1089 15.4083 63.7346 14.863 63.8715 14.109L64.785 9.07732C64.803 8.97821 64.8124 8.87752 64.821 8.77702C64.8301 8.67129 64.8461 8.52172 64.869 8.32832C64.888 8.02832 64.907 7.66832 64.9449 7.24832C64.9828 6.84832 65.0208 6.40832 65.0587 5.92832C65.0967 5.46833 65.1157 5.02833 65.1536 4.60833C65.1916 4.20833 65.2106 3.84833 65.2485 3.52833C65.256 3.40992 65.2635 3.30709 65.2698 3.21983C65.2815 3.05895 65.4106 2.92833 65.5636 2.92833C65.7074 2.92833 65.8274 3.04419 65.8396 3.19518C65.8703 3.5738 65.9009 3.968 65.9316 4.38833C65.9696 4.90833 66.0075 5.42833 66.0455 5.94832C66.0834 6.46832 66.1214 6.98832 66.1783 7.50832C66.2162 8.02832 66.2922 8.48832 66.387 8.92832L67.5708 14.1782C67.7334 14.8993 68.3445 15.4083 69.0477 15.4083H70.1977C70.9005 15.4083 71.5115 14.8998 71.6744 14.1791L72.8386 9.02832C72.9335 8.56832 73.0094 8.06832 73.0663 7.54832C73.1043 7.02832 73.1612 6.48832 73.1992 5.94832C73.2371 5.40833 73.2561 4.86833 73.2941 4.32833C73.3249 3.90512 73.3558 3.49515 73.3969 3.09844C73.4129 2.944 73.5375 2.82833 73.6849 2.82833C73.8463 2.82833 73.9819 2.9662 73.9991 3.13537C74.0081 3.22321 74.0197 3.32717 74.0341 3.44833C74.072 3.76833 74.11 4.14833 74.1479 4.56833C74.1859 5.00833 74.2428 5.46833 74.2997 5.94832C74.3377 6.42832 74.3946 6.88832 74.4326 7.32832C74.4705 7.76832 74.5274 8.12832 74.5654 8.44832C74.6033 8.76832 74.6223 8.96832 74.6413 9.04832L75.6426 14.1334C75.7888 14.876 76.4095 15.4083 77.129 15.4083H77.4869C78.4414 15.4083 79.1591 14.4908 78.977 13.5032L76.9862 2.70318C76.8476 1.95124 76.2228 1.40833 75.4961 1.40833H72.5366C71.8087 1.40833 71.1826 1.9528 71.0684 2.71044C71.0449 2.86587 71.0215 3.02527 70.998 3.18833C70.9032 3.86833 70.8083 4.56833 70.7324 5.30833C70.6375 6.06832 70.5426 6.82832 70.4667 7.60832C70.3908 8.38832 70.3149 9.14832 70.258 9.88832C70.1821 10.6483 70.1252 11.3483 70.0872 12.0283C70.0585 12.5423 70.0298 12.9992 70.0094 13.4163C69.9986 13.6351 69.8279 13.8083 69.62 13.8083C69.4139 13.8083 69.2441 13.6382 69.2313 13.4215C69.1901 12.7233 69.1263 11.9123 69.0625 10.9883C68.9866 9.88832 68.8728 8.74832 68.7589 7.58832C68.6451 6.42832 68.5123 5.30833 68.3794 4.20833C68.3053 3.68099 68.2357 3.18703 68.1684 2.72878Z"
      fill="currentColor"
    />
    <motion.path
      d="M85.2184 7.11573C85.4258 7.1149 85.599 7.28645 85.6042 7.50498C85.6095 7.72609 85.4407 7.9069 85.231 7.91512C84.9733 7.92522 84.7447 7.94753 84.5512 7.98832C84.2665 8.04832 84.0388 8.12832 83.868 8.22832C83.6973 8.32832 83.5644 8.44832 83.4885 8.58832C83.4126 8.74832 83.3557 8.88832 83.3557 9.04832V13.8083C83.3557 14.692 84.0354 15.4083 84.8737 15.4083H85.2533C86.0916 15.4083 86.7713 14.692 86.7713 13.8083V10.9883C86.7713 10.1047 87.4509 9.38832 88.2893 9.38832H91.572C92.1379 9.38832 92.5967 8.90478 92.5967 8.30832C92.5967 7.71185 92.1379 7.22832 91.572 7.22832H86.9421C86.3728 7.18832 85.8794 7.00832 85.4999 6.66832C85.1014 6.34832 84.8927 5.86832 84.8927 5.26833C84.8927 4.72833 85.0825 4.36833 85.462 4.16833C85.8415 3.96833 86.3538 3.86833 86.961 3.86833H92.2172C92.8669 3.86833 93.3937 3.31316 93.3937 2.62833C93.3937 1.9435 92.8669 1.38833 92.2172 1.38833H83.7922C82.9952 1.38833 82.331 1.60833 81.8377 2.04833C81.3443 2.48833 81.0787 3.16833 81.0787 4.08833C81.0787 4.74833 81.1925 5.28833 81.4582 5.68832C81.7238 6.08832 82.0654 6.40832 82.5018 6.62832C82.9193 6.84832 83.4126 6.98832 83.944 7.04832C84.3573 7.095 84.7821 7.11747 85.2184 7.11573Z"
      fill="currentColor"
    />
    <motion.path
      d="M98.0913 15.4083C98.9296 15.4083 99.6093 14.692 99.6093 13.8083V3.00833C99.6093 2.12468 98.9296 1.40833 98.0913 1.40833H97.6928C96.8544 1.40833 96.1747 2.12468 96.1747 3.00833V13.8083C96.1747 14.692 96.8544 15.4083 97.6928 15.4083H98.0913Z"
      fill="currentColor"
    />
    <motion.path
      d="M7.40482 2.93945C7.75832 3.66424 8.74136 3.66424 9.09486 2.93945L10.2633 0.543813C10.5032 0.0519205 11.076 -0.14185 11.5427 0.111015L12.2609 0.500146C12.7276 0.753011 12.9114 1.35676 12.6715 1.84865L11.543 4.16242C11.1758 4.91531 11.8055 5.77898 12.5903 5.59876L15.1751 5.00516C15.6878 4.88741 16.194 5.23004 16.3057 5.77044L16.4777 6.60206C16.5894 7.14246 16.2643 7.676 15.7516 7.79374L13.2194 8.37527C12.4339 8.55565 12.2027 9.61863 12.8352 10.1416L14.7694 11.7411C15.1823 12.0825 15.2544 12.712 14.9305 13.1472L14.432 13.8168C14.1081 14.2519 13.5108 14.3279 13.098 13.9865L11.1508 12.3764C10.5273 11.8608 9.61422 12.329 9.61422 13.1643V15.8354C9.61422 16.3885 9.18884 16.8369 8.66409 16.8369H7.85656C7.33181 16.8369 6.90642 16.3885 6.90642 15.8354V13.1468C6.90642 12.3115 5.99332 11.8433 5.36981 12.3589L3.40164 13.9865C2.98879 14.3279 2.39154 14.2519 2.06763 13.8167L1.56918 13.1471C1.24527 12.7119 1.31738 12.0824 1.73023 11.741L3.66447 10.1416C4.29695 9.61856 4.06574 8.55558 3.28026 8.37519L0.748061 7.79367C0.235344 7.67592 -0.0897328 7.14239 0.0219807 6.60199L0.193896 5.77037C0.30561 5.22997 0.81181 4.88734 1.32453 5.00508L3.90933 5.59868C4.69409 5.7789 5.32383 4.91524 4.95662 4.16235L3.82813 1.84857C3.58822 1.35668 3.77206 0.752937 4.23875 0.500072L4.95694 0.110942C5.42364 -0.141923 5.99645 0.0518459 6.23636 0.543738L7.40482 2.93945Z"
      fill="currentColor"
    />
  </motion.svg>
);

export default Logo;
