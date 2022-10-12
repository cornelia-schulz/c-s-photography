import '../styles/reset.css'
import '../styles/globals.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

