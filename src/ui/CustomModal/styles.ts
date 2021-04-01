import styled from "@emotion/styled";

export const modalStyles = {
    content: {
        top: "40%",
        left: "50%",
        right: "40%",
        transform: "translate(-50%, -50%)",
        maxWidth: "450px",
        minWidth: "300px",
        minHeight: "min-Content",
    },
};

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.palette.divider};
  border-radius: 6px;
  box-shadow: 1px 1px 8px 2px #9899a1;
  padding: 16px;
`;