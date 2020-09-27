import { AppProps } from 'next/app'

import 'ress'
import './app.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
