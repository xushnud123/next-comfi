"use client";
import { FC } from "react";
import { useRouter } from "next/router";
import { Slug } from "@/pages-component/slug";
import useSlugs from "@/modules/slug/hooks/use-slug";

interface SlugProps {}

const SlugWrapper: FC<SlugProps> = () => {
  const router = useRouter();
  const { slug } = router.query;
  // @ts-ignore
  const { data, isLoading } = useSlugs({ slug });
  return (
    <>
      <Slug title={data?.title} data={data} isLoading={isLoading}  />
    </>
  );
};
export default SlugWrapper;
