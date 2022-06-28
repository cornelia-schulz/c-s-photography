import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="grid gap-5 md:grid-cols-2 md:grid-rows-2 mx-3 pl-3">
        <div className="relative border-solid border-8 border-grey-light-800">
          <a href="/photographs">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </a>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-5xl">
            <a href="/photographs">Photographs</a>
          </div>
        </div>
        <div className="relative border-solid border-8 border-grey-light-800">
          <a href="/about">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </a>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-5xl">
            <a href="/about">About</a>
          </div>
        </div>
        <div className="relative border-solid border-8 border-grey-light-800">
          <a href="/contact">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </a>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-5xl">
            <a href="/contact">Contact</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}