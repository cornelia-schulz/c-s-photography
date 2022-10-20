import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'

export default function Contact() {
    return (
    <div page="contact">
      <Head>
        <title>Contact - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center">Please contact me with any questions or comments via the form below.</p>
      <p className="text-center mb-4">Thank you.</p>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname" className="mb-2 block">Your name:</label>
          <input type="text" name="yourname" id="yourname" className="w-full mb-4 text-black px-3" />
        </p>
        <p>
          <label htmlFor="youremail" className="mb-2 block">Your email:</label>
          <input type="email" name="email" id="youremail" className="w-full mb-4 text-black px-3" />
        </p>
        <p>
          <label htmlFor="yourmessage" className="mb-2 block">Your message:</label>
          <textarea name="message" id="yourmessage" rows="6" className="w-full mb-4 text-black px-3"></textarea>
        </p>
        <p className="flex justify-center">
          <button type="submit" className="bg-orange px-4 py-1 rounded text-black font-semibold">Send</button>
        </p>
      </form>
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