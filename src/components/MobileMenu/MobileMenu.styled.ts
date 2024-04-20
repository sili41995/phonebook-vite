import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuOpenBtn = styled.button`
  /* border: none; */
  padding: ${({ theme }) => theme.spacing()};
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
