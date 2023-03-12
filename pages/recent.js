import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'

import { getFlickrPhotos, mapFlickrImageResources } from '../lib/flickr'

export async function getStaticProps() {
  const results = await getFlickrPhotos()

  const { resources } = results
  console.log('Results: ', results, 'resources: ', resources)
  const images = mapFlickrImageResources(results)

  return {
    props: {
      images
    }
  }
}

export default function Recent({ images }) {
  return (
    <>
      <Head>
        <title>Recent Work - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl tracking-widest text-center mb-6 mt-6">Recent Work</h1>
      <section className="grid gap-5 md:grid-cols-3">
        {images && images.map((image) => (
          <div key={image.id} className="text-center">
            <div className="relative mb-4">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  alt={image.title}
                  src={image.url}
                  className="main-image object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw)
                         33vw"
                  placeholder="blur"
                  blurDataURL="/images/blur.jpg"
                />
              </div>
              <p className="hover:text-orange">{image.title}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

Recent.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="recent" />
      {page}
    </Layout>
  )
}