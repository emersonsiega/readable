import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { handleFetchData } from '../../store/actions/shared'
import ThemeProvider from './theme/ThemeProvider'
import NavContainer from './NavContainer'
import MainContainer from '../presentational/MainContainer'
import PostsList from './PostsList'
import PostPageContainer from './PostPageContainer';
import NewPostContainer from './NewPostContainer'
import PostNotFound from '../presentational/PostNotFound'
import Loading from '../presentational/Loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleFetchData())
  }

  render = () => (
    <ThemeProvider>
      <Loading />
      <NavContainer />
      <MainContainer>
        <Switch>
          <Route path='/new' exact component={NewPostContainer} />
          <Route path='/:category?' exact component={PostsList} />
          <Route path='/:category/:post_id/edit' exact component={NewPostContainer} />
          <Route path='/:category/:post_id' exact component={PostPageContainer} />
          <Route component={PostNotFound} />
        </Switch>
      </MainContainer>
    </ThemeProvider>
  )
}

export default connect()(App)