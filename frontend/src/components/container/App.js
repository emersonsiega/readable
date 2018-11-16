import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleFetchData } from '../../store/actions/shared'

import ThemeProvider from './theme/ThemeProvider'
import NavContainer from './NavContainer'
import PostContainer from './PostContainer'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleFetchData())
  }

  render() {
    return (
      <ThemeProvider>
        <NavContainer />
        <div style={{ marginTop: '70px' }}>
          <PostContainer></PostContainer>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect()(App)