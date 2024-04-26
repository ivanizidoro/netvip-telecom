import styled from "styled-components"



export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;
    padding: 30px ;

    background: rgb(0, 163, 255);

`

export const ContainerItens = styled.div`

`

export const A = styled.a`

    color: white;
    font-weight: 400;
    padding: 30px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: rgb(5,3,128);
    }

`