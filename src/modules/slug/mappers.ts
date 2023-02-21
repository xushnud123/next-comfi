import get from 'lodash/get';

import type * as Types from './types';

export const Slugs = (data: any[]): Types.SlugData.Slug[] => {
  const slug = data.map(item => ({
    schema: get(item, 'yoast_head_json.schema'),
    articleSection: get(item, 'yoast_head_json.schema["@graph"][0].articleSection[0]'),
    date: get(item, 'date'),
    title: get(item, 'title.rendered'),
    url: get(item, 'yoast_head_json.og_image[0]["url"]'),
    id: get(item, 'id'),
    minutes: get(item, 'yoast_head_json.twitter_misc["Est. reading time"]'),
    link: get(item, 'link'),
    slug: get(item, 'slug'),
    content: get(item, 'content["rendered"]'),
    twitter_img: get(item, 'yoast_head_json.twitter_image',null),
    description: get(item, 'yoast_head_json.og_description'),
    author: get(item, 'yoast_head_json.author'),
    avatarUrl: get(item, `yoast_head_json.schema["@graph"][5]['image']['contentUrl']`)
  }));

  return slug;
};
