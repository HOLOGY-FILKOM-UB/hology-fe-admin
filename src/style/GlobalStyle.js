import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

  * {
    margin:0;
    padding:0;
    font-weight:600;
   
  }
  
  *,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-size: 62.5%;
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
}
body {
  font-family: "Montserrat", sans-serif;
  color: #222;
  line-height: 1.6;
  background-image: #fff;
  min-height:100vh;
  width:100%;
}

h1 {
  font-family: "Montserrat", sans-serif;  
}

p {
  font-family: "Raleway", sans-serif;  

}
`;

export default GlobalStyle;
