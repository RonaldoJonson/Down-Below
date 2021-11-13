import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Red Hat Display', sans-serif;
}
body{
  -webkit-font-smoothing:antialiased;
}
`;