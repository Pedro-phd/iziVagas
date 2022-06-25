import Theme from '@/context/Theme'
import { darkTheme, lightTheme } from '@/styles/themes'
import '@/translate/index'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import '@/lib/firebase'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('light')
  return (
    <>
      <Head>
        <title>IziVagas</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Theme.Provider value={{ theme, setTheme }}>
        <ThemeProvider
          theme={theme === 'dark' ? darkTheme.theme : lightTheme.theme}
        >
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Theme.Provider>
    </>
  )
}

export default App
