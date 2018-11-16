import { THEME_DARK, THEME_LIGHT } from '../types'

const getTheme = () =>
    new Promise( (resolve) => resolve(localStorage.getItem('theme')) )


const setTheme = (theme) => localStorage.setItem('theme', theme)

const toggleTheme = () =>
    getTheme().then(theme => {
        const newTheme = theme === null || theme === THEME_LIGHT 
            ? THEME_DARK 
            : THEME_LIGHT

        setTheme( newTheme )
        return new Promise( resolve => resolve(newTheme) )
    })

export {
    getTheme,
    toggleTheme,
}