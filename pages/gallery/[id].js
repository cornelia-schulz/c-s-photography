import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import Modal from '../../components/modal'
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
          <div className="border-solid border-8 border-grey-light-800 mb-4">
            <Modal
              title={image.title}
              images={images}
              image={index}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              onConfirm={() => console.log('Button confirm')}
              onDiscard={() => console.log('Button discard')}
              buttons={[
                { role: "custom", onClick: () => console.log("custom test"), toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "Buy print" },
                { role: "discard", toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "Close" }
              ]}
            >
              <Image 
                src={image.image}
                alt={image.title}
                layout="responsive"
                width={image.landscape ? 450 : 180}
                height={250}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </Modal>
          </div>
          <p className>{image.title}</p>
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