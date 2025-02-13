import '@/styles/globals.css'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head';

const rootElement = () => document.getElementById("__next");

const theme = createTheme({
  typography: {
    fontFamily :
      "sov_niyai"
      // header: ["sov_niyai", "serif"], 
      // // pop: ["pop","sans"], 
    
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
  },
  components:{
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiMenu: {
      defaultProps: {
        container : rootElement
      }
    },
    MuiDrawer: {
      defaultProps: {
        container : rootElement
      }
    }
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // แก้ตรงนี้ด้วย 
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Head> 
          <title>KP's Birthday | November 29th</title>
          <meta name="title" content="KP's Birthday | November 29th" />
          <meta name="description" content={`${process.env.NEXT_PUBLIC_DESCRIPTION}`} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_PATH}`} />
          <meta property="og:title" content="KP's Birthday | November 29th" />
          <meta property="og:description" content={`เว็บไซต์อวยพรพรวันเกิดของ Kamphee จากเหล่าแพะส้ม`} />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/main_page.png`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_BASE_PATH}`} />
          <meta property="twitter:title" content="KP's Birthday | November 29th" />
          <meta property="twitter:description" content={`เว็บไซต์อวยพรพรวันเกิดของ Kamphee จากเหล่าแพะส้ม`} />
          <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/main_page.png`} />

          <meta name="robots" content="all" />
      
        </Head>
        <main className='w-full h-full flex flex-col items-center'>
          <div className='-z-[1] fixed top-0 left-0 w-full h-screen bg-[#F9D3C1]'/>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </StyledEngineProvider> 
  )
}
