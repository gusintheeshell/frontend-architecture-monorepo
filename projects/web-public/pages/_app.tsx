import type { AppProps } from 'next/app'
import { createGlobalStyle,     ThemeProvider, DefaultTheme } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3'
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}