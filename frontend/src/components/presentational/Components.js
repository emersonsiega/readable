import React from 'react'
import styled, { css } from 'styled-components'
import transition from "styled-transition-group"
import { Link as RouterLink } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa'

const Button = styled.button`
    background: ${props => props.theme.link};
    color: ${props => props.theme.linkColor};
    box-shadow: 0px 0px 3px ${props => props.theme.link};
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    max-height: 35px;

    &:hover, :focus {
        box-shadow: 0px 0px 10px ${props => props.theme.link}
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

const Link = styled(RouterLink)`
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
`

const PostContainer = styled.article`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    min-height: 9em;
    width: 100%;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.8s ease;

    &:hover {
        box-shadow: 0px 0px 10px ${props => props.theme.foreground};
    }
`

const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const PostFooter = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
`

const PostFooterRight = styled.div`
    margin-left: auto;
`

const PostDetail = styled.label`
    font-size: 1em;
    font-style: italic;
    padding-left: 10px;
    font-weight: 300;
`

const PostBody = styled.p`
    font-size: 1em;
    min-height: 200px;
    margin-bottom: auto;
`

const PostActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-right: auto;
`

const inputStyle = css`
    border: none;
    box-shadow: 0px 0px 3px ${props => props.hasError ? props.theme.error : props.theme.hover};
    color: ${props => props.theme.color};
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    outline: none;

    &:focus, :hover {
        box-shadow: 0px 0px 10px ${props => props.hasError ? props.theme.error : props.theme.hover};
    }

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    animation: ${props => props.hasError === true ? 'shake' : 'unset'} 1s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
`

const Input = styled.input`${inputStyle}`

const InputArea = styled.textarea`${inputStyle}`

const Select = styled.select`
    ${inputStyle}
    cursor: pointer;
    min-width: 150px;
`

const Option = styled.option`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    cursor: pointer;
`

const ErrorLabelStyle = styled.label`
    color: ${props => props.theme.error};
    font-size: 0.9em;
    font-weight: 300;
`

const ErrorLabel = ({size, isSelect}) =>
    isSelect === true 
        ? <ErrorLabelStyle>Please select an option</ErrorLabelStyle>
        : <ErrorLabelStyle>Minimum size is { size } characters</ErrorLabelStyle>

const ArrowIndicator = styled(FaCaretRight)`
    color: ${props => props.theme.link};
    position: absolute;
    left: 15px;
    font-size: 0.8em;
`

const IndicatorDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ArrowIndicatorBefore = (props) => (
    <IndicatorDiv>
        {props.matched
            ? <ArrowIndicator />
            : null}
        {props.children}
    </IndicatorDiv>
)

const SidePanelTitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5em;
`

const SidePanelTitle = styled.label`
    margin-left: 10px;
`

const SidePanelItemList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 5px 30px;
    font-size: 1em;
`

const FullDiv = styled.div`
    width: 100%;
`

export {
    Button,
    Icon,
    IconZoom,
    Fade,
    Link,
    PostContainer,
    PostHeader,
    PostFooter,
    PostFooterRight,
    PostDetail,
    PostBody,
    PostActions,
    Input,
    InputArea,
    ErrorLabel,
    Select,
    Option,
    ArrowIndicator,
    ArrowIndicatorBefore,
    SidePanelTitleDiv,
    SidePanelTitle,
    SidePanelItemList,
    FullDiv,
}