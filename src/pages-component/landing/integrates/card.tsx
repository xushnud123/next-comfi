import { FunctionComponent, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { Loader } from "@/components";

const Video = dynamic(() => import("@/components/video/video"), {
  loading: () => <Loader />,
  ssr: false,
});

import comfi from "@/assets/videos/Fin/Customer-Clip-(slow-20-compressed).mp4";
import vendor from "@/assets/videos/Fin/Vendor_Clip_(slow_20).mp4";

import cls from "./integrates.module.scss";

const Card: FunctionComponent = () => {
  const { ref, inView } = useInView({
    threshold: [0.1, 1, 0],
  });

  useEffect(() => {}, [inView]);

  const data = [
    {
      title1: "Payment link",
      title2: "Generate payment links",
      description: `Your sales reps can generate payment links and send them to customers via invoice or email. Customers
              are able to get 4-12-month zero interest installments.`,
      btnProps: "Learn more",
      video: <Video mainVideo={vendor} inView={inView} />,
      id: 1,
    },
    {
      title1: "Checkout API",
      title2: "Add Comfi as a payment option at checkout",
      description:
        "If you have a self-serve checkout on your website you can embed Comfi as payment option and your customers will always have an option to pay flexibly.",
      btnProps: "Add Comfi checkout",
      video: <Video mainVideo={comfi} inView={inView} />,
      id: 2,
    },
  ];

  return (
    <div className={cls.cards}>
      {data.map((item) => (
        <div key={item.id} ref={ref} className={cls.card}>
          <div className={cls.left}>
            <h3 className={cls.text}>{item.title1}</h3>
            <h2 className={cls["card-title"]}>{item.title2}</h2>
            <p className={cls["card-description"]}>{item.description}</p>
            <Link
              to='form'
              href=''
              smooth='easeInOutCubic'
              duration={2000}
              type='button'
              className={cls.btn}>
              {item.btnProps}
            </Link>
          </div>
          <div className={cls.right}>{item.video}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
