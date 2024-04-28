import styled from "styled-components"



export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;
    padding: 30px ;

    background: rgb(0, 163, 255);

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const ContainerItens = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`

export const A = styled.a`

    color: white;
    font-weight: 600;
    padding: 30px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: rgb(5,3,128);
    }

`