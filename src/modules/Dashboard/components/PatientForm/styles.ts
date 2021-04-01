import styled from "@emotion/styled";

export const Wrapper = styled.div`
    background-color: #666;
`

export const Fields = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(180px, min-content));
    gap: 5px;
    padding: 16px;
`