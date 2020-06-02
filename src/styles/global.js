import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-size: 14px;
        letter-spacing: 1.1px;
        color: white;
        font-family: 'Roboto', sans-serif;

        background: rgb(129,221,146);
        background: linear-gradient(155deg, rgba(129,221,146,1) 0%, rgba(58,178,163,1) 100%);
    }
`;
