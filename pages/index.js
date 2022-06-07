import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { search, mapImageResources } from '../lib/cloudinary'

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""'
  });
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images
    },
  };
}

export default function Home({ images }) {
  console.log('hello', images)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  );
}