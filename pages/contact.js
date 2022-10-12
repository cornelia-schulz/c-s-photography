import Navbar from '../components/navbar'
import Layout from '../components/layout'

export default function Contact() {
    return (
    <div page="contact">
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