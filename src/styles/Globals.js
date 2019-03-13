import { createGlobalStyle } from '../utils';

const Globals = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    margin:0;
    padding:0;
  }
  body {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
  }
`;

export default Globals;
