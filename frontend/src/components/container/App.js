import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { handleFetchPosts } from '../../store/actions/posts'

import ThemeProvider from '../presentational/theme/ThemeProvider'
import { Button, AppTitle } from '../presentational/Components'
import PostContainer from '../container/PostContainer'

const App = (props) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const { dispatch } = props
    dispatch(handleFetchPosts())
  })

  return (
    <ThemeProvider theme={theme}>
      <div style={{margin: '20px'}}>
        <AppTitle>Readable App</AppTitle>
        <Button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light') }}>
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </Button>

        <PostContainer></PostContainer>
        
      </div>
    </ThemeProvider>
  )
}

export default connect()(App)