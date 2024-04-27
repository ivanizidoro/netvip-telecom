import styled from "styled-components";


export const Container = styled.div``

export const ContainerItens = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img{
        height: 500px;
        width: 500px;

        margin-top: 20px;


    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }

    button{

        width: 250px;
        height: 40px;

        background: rgb(255, 92, 0);

        font-size: 25px;
        font-weight: 600;
        color: #ffffff;

        margin-top: 10px;
        border: none;
        border-radius: 10px;

        cursor: pointer;
    

        &:hover{
        color: blue;
    }

        &:active{
        opacity: 0.4;
    }

    }


`

export const ContainerSobre = styled.div`

    

    video{
        width: 100%;
        padding-top: 80px;
    }
    
    h1{
        color: #ffffff;
        text-align: center;
        font-size: 90px;
        position: absolute;
        top: 2500px;
        width: 100%;
        height: 100%;

        margin-top: 120px;
        padding-top: 90px;


    }

    a{
        font-size: 30px;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 2800px;
        width: 100%;
        height: 100%;


        padding-top: 70px;
        color: #ffffff;
    }

`

export const H1 = styled.h1`

    text-align: center;
    padding: 90px;
    color: rgb(0, 163, 255);

    font-size: 90px;

`