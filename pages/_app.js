import 'tailwindcss/tailwind.css'
import { isIE } from 'react-device-detect'

function MyApp({ Component, pageProps }) {
  if (isIE) {
    window.open(`microsoft-edge:${"https://translation.noodles.services/"}`)
    return(
      <div style={{width:"100vw", height:"100vh", display:"table-cell", verticalAlign:"middle"}}>
        <p style={{textAlign:"center"}}>Your browser is not supported. <a href='microsoft-edge:https://translation.noodles.services/' style={{color:"#10B981"}}>Open in Edge</a>.</p>
      </div>
    );
  }

  return <Component {...pageProps} />
}

export default MyApp
