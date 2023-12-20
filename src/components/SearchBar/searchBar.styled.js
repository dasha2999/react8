import styled from "styled-components";

export const Components = {
    Wrapper: styled.div`
        width: 80%;
        margin: 30px auto;
        box-shadow: 3px 3px 4px 2px rgba($color: #000000, $alpha: 0.2);
        padding: 20px;
        text-align: center;
    `,
    Input: styled.input`
        font-size: 20px;
        margin-right: 10px;
        padding: 10px;
        outline: none;
        ${(props) => props.value.length > 5 
        ? 'border: 2px solid green' 
        : 'border: 2px solid red'}
    `,
    Button: styled.button`
        cursor: pointer;
        transition: all .5s ease;
        padding: 10px;
        background-color: #2f2f2f;
        color: #fff;
        font-size: 20px;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.5);
        &:hover {
            background-color: #000000;
        }
        &:active {
            box-shadow: none;
        }
        @media screen and (max-width: 500px) {
            background: green;
        }
    `
}