import PrivateLinks from '@/components/PrivateLinks';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { authNavLinks, privateNavLinks, publicNavLinks } from '@/constants';
import { NavContainer } from './NavigationBar.styled';
import NavLinks from '../NavLinks';

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <NavLinks
        navLinks={
          isLoggedIn ? [...publicNavLinks, ...privateNavLinks] : publicNavLinks
        }
      />
      {isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
    </NavContainer>
  );
};

export default NavigationBar;
