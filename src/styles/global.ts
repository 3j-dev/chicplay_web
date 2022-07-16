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
    }
`;

export default GlobalStyle;
