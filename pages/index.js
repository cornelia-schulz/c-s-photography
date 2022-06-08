import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
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
      <section className="grid gap-4 grid-cols-2 grid-rows-2 mx-3 pl-3">
        <div>
          <Link href="/photographs">
          <Image
            className="border-4 border-grey-light"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
        </div>
        <div>
          <Link href="/photographs">
          <Image
            className="border-4 border-grey-light"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
        </div>
        <div>
          <Link href="/photographs">
          <Image
            className="border-4 border-grey-light"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
        </div>
      </section>
    </Layout>
  );
}