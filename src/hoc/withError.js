import styled from "styled-components";

const Components = {
    Wrapper: styled.div`
        border: 1px solid orange;
        box-shadow: 3px 3px 4px rgba(0,0,0,.2);
        padding: 20px;
        margin: 50px;
        text-align: center;
        color: #2d2d2d;
    `
}

const ErrorCard = (props) => {
    return (
        <Components.Wrapper>
            {props.errorMsg}
        </Components.Wrapper>
    )
}


export function withError (UserComp) {
    return ({errorMsg, ...props}) => {
        return errorMsg 
        ? <ErrorCard errorMsg={errorMsg} />
        : <UserComp {...props}/>
    }
}
