import { FC } from 'react';
import { Menu, MenuCloseBtn } from './MobileMenuContainer.styled';
import {
  IconSizes,
  authNavLinks,
  privateNavLinks,
  publicNavLinks,
} from '@/constants';
import { IoClose } from 'react-icons/io5';
import { IProps } from './MobileMenuContainer.types';
import Container from '@/components/Container';
import { createPortal } from 'react-dom';
import NavLinks from '../NavLinks';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import PrivateLinks from '../PrivateLinks';

const MobileMenuContainer: FC<IProps> = ({ setShowMobileMenu }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navLinks = isLoggedIn
    ? [...publicNavLinks, ...privateNavLinks]
    : publicNavLinks;
  const mobileMenuRoot = document.querySelector('#mobile-menu-root');

  return (
    mobileMenuRoot &&
    createPortal(
      <Menu>
        <Container>
          <MenuCloseBtn type='button' onClick={setShowMobileMenu}>
            <IoClose size={IconSizes.secondaryIconSize} />
          </MenuCloseBtn>
          <NavLinks navLinks={navLinks} setShowMobileMenu={setShowMobileMenu} />
          {isLoggedIn ? (
            <PrivateLinks />
          ) : (
            <NavLinks
              navLinks={authNavLinks}
              setShowMobileMenu={setShowMobileMenu}
            />
          )}
        </Container>
      </Menu>,
      mobileMenuRoot
    )
  );
};

export default MobileMenuContainer;
