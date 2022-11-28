import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Typography } from './style';
import { Colors } from '@/styles/color';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html,
    body,
    span,
    div,
    a,
    input,
    textarea,
    button {
        font-family: 'NotoSansKR', sans-serif;
    }
    a{
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    body{
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        #root {
            overflow: hidden;
        }
        svg{
            cursor: pointer;
        }
        ul, ol { 
            display: block;
            list-style: disc outside none;
            margin: 1em 0;
            padding: 0 0 0 40px;
        }
        ol { 
            list-style-type: decimal;
        }
        li { 
            display: list-item;
        }
        ul ul, ol ul {
            list-style-type: circle;
            margin-left: 15px; 
        }
        ol ol, ul ol { 
            list-style-type: lower-latin;
            margin-left: 15px; 
        }
        em {
            font-style: italic;
        }

        h1{
            ${Typography.Heading1};
        }
        h2{
            ${Typography.Heading2};
        }
        h3{
            ${Typography.Heading3};
        }
        h4{
            ${Typography.Heading4};
        }
        h5{
            ${Typography.Heading5};
        }
        h6{
            ${Typography.Heading6};
        }

        .fr-box{

            h1{
                font-size: 2em;
            }
            h2{
                font-size: 1.5em;
            }
            h3{
                font-size: 1.17em;
            }

        }
        .fr-box, .fr-wrapper, .fr-second-toolbar, .fr-toolbar {
            border: 0 !important;
        }
        .fr-toolbar .fr-btn-grp {
            margin: 0 8px 0 10px; !important
        }
        .fr-second-toolbar{
            background: transparent; !important
        }
        .fr-wrapper > .fr-element {
            max-height: 73vh !important;
            overflow-y: auto;
            &::-webkit-scrollbar{
                width: 8px;
            }
            &::-webkit-scrollbar-thumb{
                display: hidden;
                background: ${Colors.Gray1};
                border-radius: 12px;
            }
            &::-webkit-scrollbar-track {
                background-color: transparent !important;
            }
        }
        .fr-newline{
            display: none !important;
        }
        .fr-toolbar {
            background-color: ${Colors.Gray0};
            border-radius: 0 !important;
            margin: 0 !important;
        }
        .fr-view .fr-wrapper{
            overflow-y: scroll;
        }
        .fr-btn {
            margin: 0 !important;
            svg{
                margin: 5px 6px !important;
            }
        }

        #TD-PrimaryTools, #TD-Delete, #TD-Tools-Dots, #TD-Link-github, #TD-Link-twitter, #TD-Link-discord, #TD-Link-become.a.sponsor {
            display: none !important;
        }
        
        .modal {
            width: 50%;
            height: 60%;
            display: flex;
            position: relative;
            gap: 10%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${Colors.White};
            border-radius: 40px;
            &:focus{
                outline: none;
            }
        }
        .modal-overlay{
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: ${Colors.Black2};
            backdrop-filter: saturate(180%) blur(7px);
            z-index: 2;
        }
    }
`;

export default GlobalStyle;
