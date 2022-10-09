// import '../styles/globals.css'
import '../styles/test.scss'
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import { GoogleOAuthProvider } from '@react-oauth/google';
function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </GoogleOAuthProvider>
  )
}

export default MyApp
