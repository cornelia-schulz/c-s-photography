import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { search, mapImageResources } from '../../lib/cloudinary'

export async function getStaticProps() {
  const results = await search({
    expression: 'folder="Cornelia Schulz Photography/galleries"'
  })
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images
    },
  }
}

export default function Photographs({ images }) {
  return (
  <>
    <Head>
      <title>Galleries - Cornelia Schulz Photography</title>
    </Head>
    <h1 className="mb-4">Photographs</h1>
    <section className="grid gap-5 md:grid-cols-3">
      {images && images.map((image, index) => (
        <div key={index} className="text-center">
          <div className="relative border-solid border-8 border-grey-light-800 mb-4">
            <Link href={"/gallery/"+image.title.toLowerCase().replace(/ /g, '-')}>
              <a>
                <Image 
                  src={image.image}
                  alt={image.title}
                  layout="responsive"
                  width={450}
                  height={250}
                  placeholder="blur"
                  blurDataURL="/images/blur.jpg"
                />
              </a>
            </Link>
          </div>
          <Link href="/gallery">
            <a className>{image.title}</a>
          </Link>
        </div>
      ))}
    </section>
  </>
  )
}

Photographs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="photographs" />
      {page}
    </Layout>
  )
}

 

