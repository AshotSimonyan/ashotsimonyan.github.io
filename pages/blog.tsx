import React from 'react';
import { Text, Container } from 'styles/Foundations';
import { NextSeo } from 'next-seo';
import Post from '../components/Post';
import BlogList from 'components/BlogList/BlogList';
import Sidebar from '../components/Sidebar';
import { sortByDate, ImageUrl, pageCount } from '../utils';
import { allPosts } from 'contentlayer/generated';
import { pick } from '@contentlayer/client';
import Pagnation from '../components/Pagination/Pagnation';
import { show_per_page } from '../config';
import { BlogStyle } from 'styles/pages/Blog.style';

export default function Home({ posts, totalPostCount }) {

  console.log(allPosts);

  return (
    <BlogStyle>
      <NextSeo
        title="MLOps Blog | AimStack"
        description="Aimstack's recent news on everything ML best practices and MLOps tools. Find the latest releases, tutorials, guides and industry news."
        openGraph={{
          url: 'http://officialrajdeepsingh.dev',
          title: 'Welcome to my blog home page',
          description:
            'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}
      />
      <Container>
        <Text as="h1" size={8} className="title" css={{textAlign: 'center', my: '$10'}}>
          Recent Articles
        </Text>

        <BlogList blog={posts}/>
        <Pagnation totalPostCount={totalPostCount} />
      </Container>
    </BlogStyle>
  );
}

// fetch first ten posts
export async function getStaticProps() {
  //  help of pick get require filter value
  console.log(allPosts);
  const posts = allPosts.map((post) =>
    pick(post, [
      'title',
      'date',
      'slug',
      'description',
      'draft',
      'image',
      'tags',
      'categories',
    ])
  );

  // sort article base on  date
  let postSortByDate = posts.sort(sortByDate);

  // filter publish posts
  const publish = postSortByDate.filter((post, i) => {
    // return post.draft === false;
    return !post.draft;
  });

  // count how many pages
  let totalPostCount = pageCount(allPosts.length);

  //  get only first ten post
  let totalPosts = publish.slice(0, show_per_page);

  return {
    props: {
      posts: totalPosts,
      totalPostCount,
    },
  };
}