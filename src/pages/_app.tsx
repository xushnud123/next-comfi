"use client";
import { FC, useState } from "react";
import { AppProps } from "next/app";
import localFont from "@next/font/local";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ContextProvider from "@/context/context";

import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/assets/styles/main.scss";

const work_sans = localFont({
  src: [
    {
      path: "../assets/fonts/Work_Sans/static/WorkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Work_Sans/static/WorkSans-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Work_Sans/static/WorkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/gordita/Gordita-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/gordita/Gordita-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-machina/NeueMachina-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-machina/NeueMachina-Ultrabold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-machina/NeueMachina-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-machina/NeueMachina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-machina/NeueMachina-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

interface MyAppProps extends AppProps {}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <main className={work_sans.className}>
            <Component {...pageProps} />
          </main>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </ContextProvider>
    </QueryClientProvider>
  );
};
export default MyApp;
