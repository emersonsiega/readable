import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.theme.link};
    color: ${props => props.theme.linkColor};
    border: solid 1px transparent;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    outline: none;

    &:hover {
        box-shadow: 0px 0px 10px 0px ${props => props.theme.link}
    }
`

const Icon = styled.div`
    color: ${props => props.highlight === true
        ? props.theme.link
        : props.theme.color};
    cursor: pointer;
    display: flex;
    transition: 0.2s linear;

    &:hover {
        color: ${props => props.theme.hover};
        transition: 0.2s linear;
    }
`

const IconRotate = styled(Icon)`
    transition: transform 300ms ease-in-out;

    &:hover {
        transform: rotate(${props => props.degress 
            ? props.degress 
            : 0 }deg);
    }
`

export {
    Button,
    Icon,
    IconRotate,
}