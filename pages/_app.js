import '../styles/globals.css'
import Wrapper from '../context/Connector'
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
    <Toaster/>
    <Header/>
  <Component {...pageProps} />
  </Wrapper>
)}

export default MyApp
