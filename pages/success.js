import Navbar from '../components/navbar'
import Layout from '../components/layout'

export default function Success() {
    return (
        <div>
            <h1 className="text-center my-4">Success!</h1>
            <p className="text-center">Your message has been sent successfully.</p>
        </div>
    )
}

Success.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar page="success" />
        {page}
      </Layout>
    )
  }