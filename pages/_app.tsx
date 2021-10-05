import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export interface DTheme {
  margin: string;
  padding: string;
  color: string;
  backgroundColor: string;
}

export const theme: DTheme = {
  margin: '0',
  padding: '0',
  color: '#001f3f',
  backgroundColor: '#ffffff',
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
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;