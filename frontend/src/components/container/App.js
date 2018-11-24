import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { handleFetchData } from '../../store/actions/shared'
import ThemeProvider from './theme/ThemeProvider'
import NavContainer from './NavContainer'
import MainContainer from '../presentational/MainContainer'
import PostsList from './PostsList'
import PostPageContainer from './PostPageContainer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleFetchData())
  }

  render = () => (
    <ThemeProvider>
      <NavContainer />
      <MainContainer>
        <Switch>
          <Route path='/' exact component={PostsList} />
          <Route path='/:category/:post_id' component={PostPageContainer} />
          {/* <Post /> */}
          {/* <NotFound /> */}
        </Switch>
      </MainContainer>
    </ThemeProvider>
  )
}

export default connect()(App)