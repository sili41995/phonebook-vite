import { FC } from 'react';
import { List, ListItem } from './NavLinks.styled';
import { IProps } from './NavLinks.types';
import { NavLink } from 'react-router-dom';

const NavLinks: FC<IProps> = ({ navLinks }) => (
  <List>
    {navLinks.map(({ href, title }) => (
      <ListItem key={href}>
        <NavLink to={href}>{title}</NavLink>
      </ListItem>
    ))}
  </List>
);

export default NavLinks;
