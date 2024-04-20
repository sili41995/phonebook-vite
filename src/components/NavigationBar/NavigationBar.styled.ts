import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
