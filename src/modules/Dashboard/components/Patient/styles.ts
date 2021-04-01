import styled from "@emotion/styled"

export const style = {
    cursor: 'pointer',
    color: "#666666",
}

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 350px));

`

export const BodyItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px;
    text-align: left;
    strong {
        text-align: right;
    }
`