import Head from 'next/head'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import Modal from '../../components/modal'
import { search, mapImageResources } from '../../lib/cloudinary'
import Image from 'next/image'
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
  const idArray = context.params?.id.split('-')
  function capitaliseWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
  }
  const id = capitaliseWords(idArray).toString().replace(/,/g, ' ')
  const expression = 'folder="Cornelia Schulz Photography/galleries/'+ id +'"'
  const results = await search({
    expression: expression
  })
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images,
      expression
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'personal-favourites' }},
      { params: { id: 'new-zealand-south' } },
      { params: { id: 'monochrome' }},
      { params: { id: 'nightsky' }},
      { params: { id: 'new-zealand-north' }},
      { params: { id: 'australia' }}
    ],
    fallback: false,
  }
}

export default function Photograph({ images, expression }) {
  const router = useRouter()

  const sortedImages = images.sort((a, b) => (a.landscape > b.landscape) ? -1 : 1)

  return (
  <>
    <Head>
      <title>Galleries - Cornelia Schulz Photography</title>
    </Head>
    <h1 className="mb-4 text-center tracking-widest">Photographs</h1>
    <section className="grid gap-5 md:grid-cols-3">
      {sortedImages && sortedImages.map((image, index) => (
        <div key={image.id} className="text-center">
          <Modal
            expression={expression}
            title={image.title}
            images={images}
            image={index}
            content={""}
            buttons={[]}
          >
            <div className="relative mb-4 overflow-hidden h-96">
              <Image 
                src={image.image}
                alt={image.title}
                className="main-image object-cover object-bottom"
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw)
                       33vw"
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </div>
            <p className="hover:text-orange">{image.title}</p>
          </Modal>
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