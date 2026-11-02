import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const section = pathname === '/career' ? 'Career' : pathname === '/gallery' ? 'Gallery' : pathname.startsWith('/blog') ? 'Blog' : null
  const title = section ? `Sarraf Rahman | ${section}` : 'Sarraf Rahman'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:image" content="https://srrfrhmn.com/srrf_logo.png" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" key="og-type" />
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  )
}
