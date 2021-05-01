import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Container, Content, Logo, Menu, Profile } from './styles';
import logo from '../../assets/icons/seazone.svg';

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo Seazone" />
        </Logo>
        <Menu>
          <li>
            <a href="#calendario">Calendário</a>
          </li>
          <li>
            <a href="#clientes">Clientes</a>
          </li>
          <li>
            <a href="#orcamentos">Orçamentos</a>
          </li>
          <li>
            <a href="#propriedades">Propriedades</a>
          </li>
          <li>
            <a href="#controle">Controle</a>
          </li>
        </Menu>
        <Profile>
          <FaUserCircle />
        </Profile>
      </Content>
    </Container>
  );
}

export default Header;
