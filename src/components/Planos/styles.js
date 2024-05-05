import styled from "styled-components";

export const Container = styled.div`


.planos{

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 90px;

    h2{
        color: rgb(0, 163, 255);
        font-size: 40px;
    }

    a{
        color: rgb(0, 163, 255);
        font-size: 20px;
        font-weight: 500;
    }

     h1{
        text-align: center;
        color: rgb(0, 163, 255);
        margin-top: -10px;

        font-size: 60px;
        font-weight: 900;
    }

    }
`

export const ContainerPlanos = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img{
        height: 500px;
        width: 500px;

        margin-top: 20px;
        border: none;


    &:hover{
        opacity: 0.8;
    }

    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a{
            text-decoration: none;

            color: #ffffff;
            background: rgb(255, 92, 0);

            width: 250px;
            height: 40px;

            font-size: 20px;
            font-weight: 800;

            margin-top: 10px;
            border: none;
            border-radius: 10px;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

        &:hover{
        color: blue;
    }

        &:active{
        opacity: 0.4;
    }
        }

    }`