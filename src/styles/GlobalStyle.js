import { createGlobalStyle } from "styled-components"
import Background from "../assets/img/bg.jpg"

const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Domine', serif;
    }

    body {
        background-image: url(${Background});
    }
    
`

export default GlobalStyle
