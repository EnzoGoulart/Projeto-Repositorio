import { createGlobalStyle } from "styled-components"
export const GS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  outline: 0;
}
body, html{
    background-color: #121131;
    height: 100%;

}
body{
  -webkit-font-smoothing: antialiased !important;
}

`