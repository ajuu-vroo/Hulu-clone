import Navbar from '../components/Navbar'
import TopNav from '../components/TopNav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div style={{backgroundColor: '#06202A'}}>
    <TopNav  />
    <Navbar />
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
