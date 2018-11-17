import styled from 'styled-components'
import transition from "styled-transition-group"

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

const IconZoom = styled(Icon)`
    transition: transform 300ms ease-in-out;
    transform-origin: center;

    &:hover {
        transform: scale(1.2);
    }
`

const Fade = transition.div`
  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity ${props => props.time ? props.time : 0}ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`

export {
    Button,
    Icon,
    IconZoom,
    Fade,
}