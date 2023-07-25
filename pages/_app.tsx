import theme from '@/mui/theme'
import { ThemeProvider as ThemeProviderMUI } from '@mui/material';
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <ThemeProviderMUI theme={theme}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            draggableDirection="y"
          />
          <Component {...pageProps} />
        </ThemeProviderMUI>
      </ThemeProvider>
    </SessionProvider>
  )
}
