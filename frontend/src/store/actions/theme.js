import { 
    getTheme, 
    toggleTheme as toggleThemeApi, 
} from '../../api/ThemeAPI'

const FETCH_THEME = 'FETCH_THEME'
const TOGGLE_THEME = 'TOGGLE_THEME'

const fetchTheme = (theme) => ({
    type: FETCH_THEME,
    theme
})

const handleFetchTheme = () => dispatch => {
    getTheme()
        .then( data => dispatch(fetchTheme(data)) )
}

const toggleTheme = (theme) => ({
    type: TOGGLE_THEME,
    theme
})

const handleToggleTheme = () => dispatch => 
    toggleThemeApi()
        .then(theme => dispatch(toggleTheme(theme)))

export {
    TOGGLE_THEME,
    FETCH_THEME,
    handleFetchTheme,
    handleToggleTheme,
}