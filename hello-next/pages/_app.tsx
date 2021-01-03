import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("HELLO FROM _app - logs in client side");
  
  return <Component {...pageProps} />
}

export default MyApp
