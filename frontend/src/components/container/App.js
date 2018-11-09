import React, {useState} from 'react'

import ThemeProvider from '../presentational/theme/ThemeProvider'
import {
  GlobalStyle, Button, HeaderTitle
} from '../presentational/theme/ThemedComponents'
import Post from '../presentational/Post'
import { VOTED_UP, VOTED_DOWN } from '../../types'

const App = () => {
  const [theme, setTheme] = useState('dark')

  const initialScore = 0;
  const [score, setScore] = useState(initialScore)
  const [voted, setVoted] = useState('')

  const resetVote = () => {
    setVoted('')
    setScore(initialScore)
  }

  const onVoteDown = () => {
    if (voted !== VOTED_DOWN) {
      setVoted(VOTED_DOWN)
      setScore(initialScore - 1)
    } else {
      resetVote()
    }
  }

  const onVoteUp = () => {
    if (voted !== VOTED_UP) {
      setVoted(VOTED_UP)
      setScore(initialScore + 1)
    } else {
      resetVote()
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{margin: '20px'}}>
        <GlobalStyle />
        <HeaderTitle>Readable App</HeaderTitle>
        <Button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light') }}>
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </Button>

        <Post 
          title="This is a fucking awesome post!" 
          author="John Doe" 
          timestamp={new Date().getTime()} 
          onVoteDown={onVoteDown}
          onVoteUp={onVoteUp}
          voteScore={score}
          voted={voted}
        >
        </Post>
      </div>
    </ThemeProvider>
  )
}

export default App