import styled from "styled-components";


export const Container = styled.div``

export const ContainerTopo = styled.div`

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

export const ContainerItensTopo = styled.div`

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

export const ContainerNav = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(5,3,128);
    height: 100%;
    margin-top: -25px;
`

export const Image = styled.img`

    width: 250px;

`

export const ContainerItensNav = styled.div`

    a{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        padding: 30px;
        text-decoration: none;
        cursor: pointer;

    &:hover{
        color: rgb(217,102,0);
    }

    }

`

export const ContainerForm = styled.div`

    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;

    h1{
        margin-bottom: 50px;

        font-size: 60px;
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

    background: blue;

    color: #ffffff;

`

export const ContainerFooter = styled.div`

    background: rgb(0, 163, 255);
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    H1{
        font-size: 13PX;
        font-weight: 500;

        color: #ffffff;
        text-align: center;

    }

`