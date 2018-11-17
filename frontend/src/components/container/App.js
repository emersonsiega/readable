import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { handleFetchData } from '../../store/actions/shared'
import ThemeProvider from './theme/ThemeProvider'
import NavContainer from './NavContainer'
import MainContainer from '../presentational/MainContainer'
import PostsList from './PostsList'

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
          <Switch>
            <Route path='/' exact component={PostsList}></Route>
            {/* <Post /> */}
            {/* <NewPost /> */}
            {/* <NotFound /> */}
          </Switch>
        </MainContainer>
      </ThemeProvider>
    )
  }
}

export default connect()(App)