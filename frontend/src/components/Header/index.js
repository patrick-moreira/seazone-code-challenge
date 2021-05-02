import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { FiArrowDown, FiMenu } from 'react-icons/fi';

import { Container, Navbar, Logo, Menu, Profile } from './styles';
import logo from '../../assets/icons/seazone.svg';
import { colors } from '../../assets/styles';

function Header() {
  const [activePage, setActivePage] = useState(0);

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
            <Link
              to="/calendario"
              className="active"
              onClick={() => setActivePage(0)}
            >
              Calendário
            </Link>
          </li>
          <li>
            <Link
              to="/clientes"
              className="inactive"
              onClick={() => setActivePage(1)}
            >
              Clientes
            </Link>
          </li>
          <li>
            <Link
              to="/orcamentos"
              className="inactive"
              onClick={() => setActivePage(2)}
            >
              Orçamentos
            </Link>
          </li>
          <li>
            <Link
              to="/propriedades"
              className="inactive"
              onClick={() => setActivePage(3)}
            >
              Propriedades
            </Link>
          </li>
          <li>
            <Link
              to="/controle"
              className="inactive"
              onClick={() => setActivePage(4)}
            >
              Controle
            </Link>
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
