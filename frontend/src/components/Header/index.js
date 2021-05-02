import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiArrowDown, FiMenu } from 'react-icons/fi';

import { Container, Navbar, Logo, Menu, Profile } from './styles';
import logo from '../../assets/icons/seazone.svg';
import { colors } from '../../assets/styles';

function Header() {
  const [activePage, setActivePage] = useState(3);

  const getActivePage = () => {
    const elements = document.getElementsByTagName('a');
    elements[activePage].className = 'active';

    for (let i = 0; i < elements.length; i++) {
      if (i !== activePage) {
        elements[i].className = 'inactive';
      }
    }
  };

  useEffect(() => getActivePage(), [activePage]);

  return (
    <Container>
      <Navbar>
        <Logo>
          <img src={logo} alt="Logo Seazone" />
        </Logo>
        <Menu>
          <li>
            <a
              href="#calendario"
              className="active"
              onClick={() => setActivePage(0)}
            >
              Calendário
            </a>
          </li>
          <li>
            <a
              href="#clientes"
              className="inactive"
              onClick={() => setActivePage(1)}
            >
              Clientes
            </a>
          </li>
          <li>
            <a
              href="#orcamentos"
              className="inactive"
              onClick={() => setActivePage(2)}
            >
              Orçamentos
            </a>
          </li>
          <li>
            <a
              href="#propriedades"
              className="inactive"
              onClick={() => setActivePage(3)}
            >
              Propriedades
            </a>
          </li>
          <li>
            <a
              href="#controle"
              className="inactive"
              onClick={() => setActivePage(4)}
            >
              Controle
            </a>
          </li>
        </Menu>
        <Profile>
          <div>
            <FaUserCircle />
            <FiArrowDown />
          </div>
          <div>
            <FiMenu color={colors.secondary} />
          </div>
        </Profile>
      </Navbar>
    </Container>
  );
}

export default Header;
