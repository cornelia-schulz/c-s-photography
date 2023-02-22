import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Success() {
    return (
        <div>
            <h1 className="text-center text-4xl my-4">Success!</h1>
            <div className="flex justify-center mb-10">
              <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1677057980/Cornelia%20Schulz%20Photography/Humpback.jpg"
                alt="Cornelia Schulz Photography Logo"
                className="main-image"
                width={500}
                height={200}
              />
            </div>
              
            <p className="text-center text-lg">Your message has been sent successfully. I will be in touch shortly.</p>
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