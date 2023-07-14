import { styled, css, keyframes } from "styled-components"

export const Container = styled.div`
    height: 100vh;
    margin: -0px 0px;
    background-color: #121131;
`
export const DivPrincipal = styled.div`
    background-color: #f0f0f0;
    width: 80%;
    max-width: 900px;
    min-height: 150px;
    position: relative;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    border-radius: 20px;
`
export const TitleM = styled.p`
    text-align: center;
    font-size: 20px;
    display: flex;
    width: 90%;
    padding: 10px 0px 20px 10%;
    align-items: center;
    gap: 20px;
`
export const InputM = styled.input`
    padding: 6px 10px 6px 20px;
    width: 72%;
    margin: 15px 0px 0px 10%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    display: inline;
`
export const BotaoM = styled.button.attrs(p=>({
    disabled: p.loading,
}))`
    background-color: #121131;
    width: 29px;
    height: 29px;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    display: inline-block;
    color: white;
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }
    ${props=>props.loading && 
        css`
        svg{
        animation: ${animate} 1s linear infinite;
    }
        `
    }
`
const animate = keyframes`
from{
    transform: rotate(0deg);
}to{
    transform: rotate(360deg);
}`
export const DivTPMain = styled.div`
    padding-left: 10px;
`
export const ListM = styled.ul`
list-style: none;
margin-top: 20px;

& li{
    padding: 15px 0px;
    display: flex;
    flex-direction: row;
    width: 93%;
    margin-left: 10px;
    align-items: center;
    justify-content: space-between;
}
& li a{
    color: #121131;
    margin-right: 10%;
    display: flex;
    align-items: center;

}
& li div{
    display: inline-flex;
    align-items: center;
    width: 30%;
    margin: 0 10%;
}
& li div svg{
    color: #121131;
    cursor: pointer;
}
` 