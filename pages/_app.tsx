import type { AppProps } from 'next/app';
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
  color: '#001F3F',
  backgroundColor: '#55b9f3',
}

export interface ThemeWrapper {
  theme: DTheme
}

const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  * {
    margin:          ${props => props.theme.margin};
    padding:         ${props => props.theme.padding};
    color:           ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor}
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
