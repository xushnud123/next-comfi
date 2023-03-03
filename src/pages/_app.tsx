"use client";
import { FC, useState } from "react";
import { AppProps } from "next/app";
import localFont from "@next/font/local";
import { LazyMotion, domAnimation } from "framer-motion";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ContextProvider from "@/context/context";

import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/main.scss";

interface MyAppProps extends AppProps {}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <LazyMotion features={domAnimation}>
            <Component {...pageProps} />
          </LazyMotion>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </ContextProvider>
    </QueryClientProvider>
  );
};
export default MyApp;
