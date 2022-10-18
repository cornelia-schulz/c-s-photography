import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { search, mapImageResources } from '../../lib/cloudinary'

export async function getStaticProps(context) {
  const idArray = context.params?.id.split('-')
  function capitalieeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
  }
  const id = capitalieeWords(idArray).toString().replace(/,/g, ' ')
  const expression = 'folder="Cornelia Schulz Photography/galleries/'+ id +'"'
  const results = await search({
    expression: expression
  })
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'new-zealand-south' } },
      { params: { id: 'sydney' } },
      { params: { id: 'personal-favourites' }},
      { params: { id: 'monochrome' }},
      { params: { id: 'nightsky' }},
      { params: { id: 'new-zealand-north' }},
      { params: { id: 'australia' }}
    ],
    fallback: false,
  }
}

export default function Photograph({ images }) {

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
            <Link href="/gallery">
              <a>
                <Image 
                  src={image.image}
                  alt={image.title}
                  layout="responsive"
                  width={image.landscape ? 450 : 180}
                  height={250}
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

  Photograph.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar page="photographs" />
        {page}
      </Layout>
    )
  }