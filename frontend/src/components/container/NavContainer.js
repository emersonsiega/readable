import Nav from '../presentational/Nav'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'

import { handleToggleTheme } from '../../store/actions/theme'

const mapDispatchToProps = ({
    toggleTheme: handleToggleTheme
})

const mapStateToProps = ({theme}) => ({
    theme: theme
})

export default connect( mapStateToProps, mapDispatchToProps )(withTheme(Nav))