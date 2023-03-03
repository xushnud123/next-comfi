import { FC } from 'react';
import Image from 'next/image';

import linkedin from '/public/assets/images/footer/Frame 1321315205.webp';
import twitter from '/public/assets/images/footer/Frame 1321315206.webp';

import AuthorSkeleton from './author-skeleton/author-skeleton';

import cls from './author.module.scss';

interface AuthorProps {
  slug?: string;
  title: string;
  url?: string;
  author?: string;
  loading?: boolean;
}

const Author: FC<AuthorProps> = ({ slug, title, url, author, loading }) => {
  function formatString(str: string) {
    return str.replace(/ /g, '+');
  }

  const linkedinLink = `https://www.linkedin.com/shareArticle?title=${formatString(
    title
  )}&url=https://comfi.app/blog/${slug}`;

  const twitterLink = `https://twitter.com/intent/tweet?text=${formatString(
    title
  )}&url=https://comfi.app/blog/${slug}&via=comfi_app`;


  if (loading) return <AuthorSkeleton />;

  return (
    <div className={cls.wrapper}>
      <div className={cls.left}>
        <img src={url} className={cls.person} alt="img not found" />
        <div className={cls.wrap}>
          <h1 className={cls.title}>{author}</h1>
          {/* <p className={cls.description}>Co-Founder, Product Lead</p> */}
        </div>
      </div>
      <div className={cls.right}>
        <h1 className={cls.title}>Share it</h1>
        <div className={cls.row}>
          <a
            href={linkedinLink}
            data-network="linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image src={linkedin} alt="img not found" />
          </a>
          <a
            href={twitterLink}
            data-network="twitter"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image src={twitter} alt="img not found" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
