import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleFetchData } from '../../store/actions/shared'

import ThemeProvider from './theme/ThemeProvider'
import NavContainer from './NavContainer'
import MainContainer from '../presentational/MainContainer'
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
        <MainContainer >
          <PostContainer />
          {/* <Post /> */}
          {/* <NewPost /> */}
        </MainContainer>
        {/* <NotFound /> */}
      </ThemeProvider>
    )
  }
}

export default connect()(App)