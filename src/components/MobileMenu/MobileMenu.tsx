import { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, MenuOpenBtn } from './MobileMenu.styled';
import { IconSizes } from '@/constants';
import MobileMenuContainer from '@/components/MobileMenuContainer';

const MobileMenu: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const onMenuBtnClick = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <Container>
      <MenuOpenBtn type='button' onClick={onMenuBtnClick}>
        <FaBars size={IconSizes.secondaryIconSize} />
      </MenuOpenBtn>
      {showMobileMenu && (
        <MobileMenuContainer onMenuCloseBtnClick={onMenuBtnClick} />
      )}
    </Container>
  );
};

export default MobileMenu;
