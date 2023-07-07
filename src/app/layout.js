import './globals.css'
import Header from '../../componentz/Header'

export const metadata = {
  title: 'МедУики',
  description: 'МедУики',
  icons: {
    icon: '/health.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header> </Header>
        {children}
      </body>
    </html>
  )
}
