"use client";
import { FC } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { Slug } from "@/pages-component/slug";
import { GetStaticPaths, GetStaticProps } from "next";
import { helmetJsonLdProp } from "react-schemaorg";
import { WebPage } from "schema-dts";
import { NextSeo } from "next-seo";
import { Slugs as SlugsMappers } from "@/modules/slug/mappers";
import useSlugs from "@/modules/slug/hooks/use-slug";
import * as Types from "@/modules/blogs/types";

interface SlugProps {
  slugs: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(
    `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/posts?orderby=date&status=publish&per_page=100`
  );
  const data = await res.data;

  const paths = await data.map((item: Types.BlogsData.Blogs) => {
    return {
      params: {
        slug: item?.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(
    // @ts-ignore
    `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/posts/?slug=${params.slug}`
  );
  const data = await res.data;

  const slug = await SlugsMappers(data);

  return {
    props: {
      slugs: slug[0],
    },
  };
};

const SlugWrapper: FC<SlugProps> = ({ slugs }) => {
  console.log(slugs);
  const router = useRouter();
  const { slug } = router.query;
  // @ts-ignore
  const { data, isLoading } = useSlugs({ slug });

  return (
    <>
      {slugs && (
        <Head>
          <title>{slugs?.title}</title>
          <meta name='description' content={slugs?.description} />
          <meta property='og:url' content='https://comfi.app/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={slugs?.title} />
          <meta property='og:description' content={slugs?.description} />
          <meta property='og:image' content={slugs?.url} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='comfi.app' />
          <meta property='twitter:url' content='https://comfi.app/' />
          <meta name='twitter:title' content={slugs?.title} />
          <meta name='twitter:description' content={slugs?.description} />
          <meta name='twitter:image' content={slugs?.url} />
        </Head>
      )}
      <NextSeo
        title={slugs.title}
        description={slugs.description}
        canonical='https://comfi.app/'
        openGraph={helmetJsonLdProp<WebPage>(slugs.schema)}
      />
      <Slug title={data?.title} data={data} isLoading={isLoading} />
    </>
  );
};

export default SlugWrapper;
