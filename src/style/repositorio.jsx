import { Link } from "react-router-dom";
import { styled, css, keyframes } from "styled-components";

export const Container = styled.div`
  height: 995px;
  background-color: #121131;
  
`;
export const DivPrincipal = styled.div`
  background-color: #f0f0f0;
  width: 80%;
  margin: 1.5% 0;
  max-width: 800px;
  min-height: 260px;
  position: relative;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  border-radius: 20px;
  & img {
    position: relative;
    max-width: 40%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20%;
    margin: 15px 0px;
    user-select: none;
  }
  & h1 {
    text-align: center;
    font-size: 22px;
  }
  & p {
    padding: 15px 25px;
    font-size: 16px;
    text-align: center;
  }
`;
export const Loading = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 100%;
  height: 50vh;
  ${(props) =>
    props.loading === 1 &&
    css`
      svg {
        color: #f0f0f0;
        animation: ${animate} 1s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    `}
`;
export const Back = styled(Link)`
  color: #121131;
  position: fixed;
  padding: 20px;
  user-select: none;
`;
export const DivIssues = styled.div`
  background-color: #f0f0f0;
  width: 80%;
  position: relative;
  left: 50%;
  max-width: 800px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  top: 2%;
  transform: translateX(-50%);
  border-radius: 20px;
  line-break: anywhere;
  & h2 {
    text-align: center;
    font-size: 20px;
    padding: 5px;
    font-weight: 600;
    line-break: anywhere;
  }
  & li {
    width: 90%;
    margin: 30px auto;
    list-style: none;
  }
  & li div {
    align-items: start;
    display: flex;
    margin-bottom: 15px;
  }
  & li img {
    width: 40px;
    height: 40px;
    user-select: none;
    border-radius: 50%;
    border: 2px solid #000000ac;
  }
  & li a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    padding: 0px 10px 4px 10px;
    display: block;
  }
  & li a:hover {
    text-decoration: underline;
  }
`;
export const TextI = styled.p`
  font-size: 12px;
  opacity: 0.9;
  margin: -20px 0px 10px 50px;
`;

export const DivButtons = styled.div`
  width: 90%;
  margin: 25px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    background-color: #121131;
    color: white;
    padding: 14px;
    cursor: pointer;
    border-radius: 10px;
    transition: ease 0.5s;
    width: 80px;
    & button:hover {
      background-color: #0a091f;
    }
    &:disabled {
      background-color: #121131a9;
      cursor: not-allowed;
    }
    &:disabled:hover{
        background-color: #121131a9;
      cursor: not-allowed;
      opacity: 0.9;
    }
  }
  & button:hover {
      background-color: #0a091f;
    }
`;
export const DivLoadingPage = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.loading === 1 &&
    css`
      svg {
        animation: ${animate} 1s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    `}
`;

const animate = keyframes`
from{
    transform: rotate(0deg);
}to{
    transform: rotate(360deg);
}`;

export const DivFiltros = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  align-items: center;
  margin: 20px;
  & button {
    padding: 2%;
    background-color: #121131;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: ease 0.5s;
    margin-right: 10px;
    &:hover {
      background-color: #0a091f;
    }
  }
  &:first-child {
    margin-right: 4px;
  }
  @media screen and (max-width: 430px) {
    & {
      width: 95%;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;
