import styled from 'styled-components';
import { colors } from '../../assets/styles';

export const Container = styled.header`
  width: 100%;
  height: 50px;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 10;
`;

export const Navbar = styled.nav`
  display: grid;
  width: calc(100% - 30px);
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-areas: 'logo items items profiler';
  align-items: center;
`;

export const Logo = styled.div`
  grid-area: logo;
  width: 8rem;
  img {
    width: 100%;
    height: auto;
    padding-left: 1rem;
  }
`;

export const Menu = styled.ul`
  grid-area: items;
  display: inline-flex;
  list-style: none;

  li a {
    color: ${colors.secondary};
    font: 700 1rem Poppins;
    padding: 0.8rem;
    margin: 0.3rem;
  }

  li a:hover {
    background: ${colors.quaternary};
    transition: all 0.5s ease 0s;
  }

  li a.active {
    background: ${colors.quaternary};
    border-bottom: 5px solid ${colors.red};
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    transition: all 0.2s ease;
  }

  @media (max-width: 540px) {
    li a {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  grid-area: profiler;
  display: flex;
  justify-content: center;
  align-items: center;

  div:first-child {
    position: absolute;
    width: 60px;
  }

  div:first-child svg {
    width: 50%;
    height: auto;
    fill: ${colors.tertiary};
    cursor: pointer;
  }

  div:last-child {
    position: absolute;
    display: none;
    width: 30px;
    height: 30px;
  }

  div:last-child svg {
    fill: ${colors.secondary};
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  @media (max-width: 540px) {
    div:first-child {
      display: none;
    }
    div:last-child {
      display: block;
    }
  }
`;
