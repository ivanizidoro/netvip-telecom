import styled from "styled-components";


export const Container = styled.div``


export const ContainerForm = styled.div`

    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;

    h1{
        margin-bottom: 50px;

        font-size: 70px;
        font-weight: 800;

        color: rgb(5,3,128);
    }

`


export const ContainerLabel = styled.label`


    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    select{

        font-size: 20px;

        border: none;
        text-align: center;
    }

    .selects{
        padding-bottom: 40px;

        select{
            color: rgb(0, 163, 255);
            font-size: 20px;
            font-weight: 900;
        }

        option{
            color: rgb(5,3,128);
        }
    }

    .cadastro{
        display: flex;
        flex-direction: column;

        gap: 20px;
        padding-top: 50px;

        input{
            width: 900px;
            height: 50px;
        }
    }


`

export const Button = styled.button`

    margin-top: 40px;

    width: 200px;
    height: 50px;

    border: none;
    border-radius: 10px;
    cursor: pointer;

    background: rgb(0, 163, 255);

    color: #ffffff;

    &:hover{
        background: rgb(5,3,128);
    }

    &:active{
        opacity: 0.4;
    }

`