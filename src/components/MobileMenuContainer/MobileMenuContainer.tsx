import { FC } from 'react';
import { Menu, MenuCloseBtn } from './MobileMenuContainer.styled';
import { IconSizes } from '@/constants';
import { IoClose } from 'react-icons/io5';
import { IProps } from './MobileMenuContainer.types';
import Container from '@/components/Container';
import { createPortal } from 'react-dom';

const MobileMenuContainer: FC<IProps> = ({ onMenuCloseBtnClick }) => {
  const mobileMenuRoot = document.querySelector('#mobile-menu-root');

  return (
    mobileMenuRoot &&
    createPortal(
      <Menu>
        <Container>
          <MenuCloseBtn type='button' onClick={onMenuCloseBtnClick}>
            <IoClose size={IconSizes.secondaryIconSize} />
          </MenuCloseBtn>
        </Container>
      </Menu>,
      mobileMenuRoot
    )
  );
};

export default MobileMenuContainer;
