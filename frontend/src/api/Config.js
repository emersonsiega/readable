const url = process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL_PROD 
    : process.env.REACT_APP_API_URL_DEV

console.log('URL FROM CONFIG!', url)

export {
    url
}