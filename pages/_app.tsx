import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import Layout from '@components/layout'

export interface DTheme {
  margin: string,
  padding: string,
  color: string,
  backgroundColor: string,
  fontSize: string,
}

export const theme: DTheme = {
  margin: '0',
  padding: '0',
  color: '#001f3f',
  backgroundColor: '#FFFFFF',
  fontSize: '62.5%'
}

export interface ThemeWrapper {
  theme: DTheme
}

const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  * {
    margin:           ${props => props.theme.margin};
    padding:          ${props => props.theme.padding};
    color:            ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    font-size:        ${props => props.theme.fontSize};
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp;
