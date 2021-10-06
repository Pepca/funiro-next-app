import '../styles/globals.scss'
import type {AppProps} from 'next/app'

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <div className='wrapper'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
