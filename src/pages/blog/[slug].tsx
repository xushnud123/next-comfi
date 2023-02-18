"use client";
import { FC } from "react";
import { useRouter } from "next/router";
import { Slug } from "@/pages-component/slug";

interface SlugProps {}

const SlugWrapper: FC<SlugProps> = () => {
  const router = useRouter();

  return (
    <>
      <Slug />
    </>
  );
};
export default SlugWrapper;
