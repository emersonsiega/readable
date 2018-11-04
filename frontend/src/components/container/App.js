import React, {useState} from 'react'

import ThemeProvider from '../presentational/theme/ThemeProvider'
import {
  GlobalStyle, Button
} from '../presentational/theme/ThemedComponents'

const App = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <h3>Readable App</h3>
        <Button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light') }}>Change theme</Button>
      </>
    </ThemeProvider>
  )
}

export default App