import '../styles/globals.css'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default store.withRedux(MyApp)
// export default MyApp
