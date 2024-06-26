import styled from '@emotion/styled';
import { setButtonColor, setIconFill, setIconHoverEffect } from '@/utils';
import { IStyledProps } from './IconButton.types';

export const Button = styled.button<IStyledProps>`
  position: ${({ position }) => position};
  z-index: 10;
  top: ${({ top }) => (top === 'center' ? '50%' : `${top}px`)};
  right: ${({ right }) => `${right}px`};
  transform: translateY(${({ top }) => (top === 'center' ? '-50%' : '')});
  display: flex;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  justify-content: center;
  align-items: center;
  min-width: ${({ width }) => `${width}px`};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  border-color: transparent;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme, inputWrap }) =>
      !inputWrap && theme.shadows.primaryShadow};
  }
  & svg {
    color: ${({ btnType }) => setIconFill(btnType)};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
  & svg:hover,
  & svg:focus {
    color: ${({ btnType, inputWrap }) =>
      inputWrap && setIconHoverEffect(btnType)};
  }
`;
