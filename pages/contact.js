import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import JotFormEmbed from 'react-jotform-embed'

export default function Contact() {

    return (
    <div page="contact">
      <Head>
        <title>Contact - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-center mb-6 mt-6">Contact Me</h1>
      <p className="text-center text-lg">Please feel free to get in touch with any questions or comments via the form below.</p>
      <p className="text-center mb-4 text-lg">Thank you.</p>
      <div className="text-orange">
        {error}
      </div>
        <JotFormEmbed src="https://form.jotform.com/231636346367057" />
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