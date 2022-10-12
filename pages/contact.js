import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'

export default function Contact() {
    return (
    <div page="contact">
      <Head>
        <title>Contact - Cornelia Schulz Photography</title>
      </Head>
      Contact me
    </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar page="contact" />
        {page}
      </Layout>
    )
  }