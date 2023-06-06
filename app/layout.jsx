import React from 'react'
import '../styles/global.css'

const RootLayout = ({children}) => {
  return (
    <html lang='en'> 
        <body className='main'>
          {children}
        </body>
    </html>

  )
}

export default RootLayout