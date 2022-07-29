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
        .texteditor {
            width: 100%;
            height: 100%;
          }
          
        .DraftEditor-root {
            border: 1px solid #eee;
            margin: 2rem 0;
            border-radius: 0.5rem;
            width: 90%;
            height: 80%;
        }
          
          .DraftEditor-editorContainer {
            padding: 1.5rem;
            overflow-y: scroll;
          }
          
          .public-DraftEditor-content {
            min-height: 100%;
          }
    }
`;

export default GlobalStyle;
