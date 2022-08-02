import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
    body{
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        h1{
            font-size: 2em;
        }
        h2{
            font-size: 1.5em;
        }
        h3{
            font-size: 1.17em;
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
    }
`;

export default GlobalStyle;
