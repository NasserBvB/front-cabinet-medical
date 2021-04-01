import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* border: 1px solid ${({ theme }) => theme.palette.divider}; */
  /* padding: ${({ theme }) => theme.spacing.md}; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-bottom: 0;
  border-radius: 1rem 1rem 0 0;
  color: #fff;
  padding: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0 1rem;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.divider};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-bottom: 0;
  border-radius: 0 0 1rem 1rem;
  color: #fff;
  padding: 4px 16px;
`;

export const MenuWrapper = styled.div`
  font-size: 3rem;
  margin-top: -1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const RowsWrapper = styled.div`
  padding: 0 2rem;
  /* border: ${({ theme }) => `1px solid ${theme.palette.divider}`}; */
  /* border-radius: 0 0 1rem 1rem; */
`;

type RowWrapperProps = {
  withBorder?: boolean;
};

export const RowWrapper = styled.div<RowWrapperProps>`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ withBorder, theme }) =>
    withBorder &&
    `
    border-top: 1px solid ${theme.palette.divider};
    border-bottom: 1px solid ${theme.palette.divider};
  `}
  img {
    width: 3rem;
  }
`;

export const Name = styled.div`
  margin-left: 1rem;
  font-size: 1.4rem;
`;

export const StatusWrapper = styled.div`
  color: #fff;
  font-size: 1rem;
  padding: 4px;
  border-radius: 5px;
  background-color: #26eb9f;
`;

export const SpecWrapper = styled.div`
  img {
    width: 2rem;
    margin-right: 1rem;
  }
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const SpecValue = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.4rem;
  margin-left: 0.5rem;
`;

export const Desc = styled.div`
  margin-top: 3px;
  font-size: 1rem;
  color: #363636;
`;

export const InfoWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const InfoName = styled.div`
  color: #9ba3bb;
`;

export const InfoValue = styled.div``;
