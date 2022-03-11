import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import {
  NavbarContainer, NavbarWrapper, TopLeft,
  Logo, TopRight, IconContainer, IconBadge, Avatar
} from './NavbarStyle';

export const Navbar = () => {
  const rndNmr = () => Math.floor(Math.random() * 99) + 1;
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>BU Admin</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>5</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar src={`https://randomuser.me/api/portraits/women/${rndNmr()}.jpg`} alt="avatar" />
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

