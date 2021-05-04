import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.header`
  width: 100%;
  height: 50px;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 10;
`;

export const Navbar = styled.nav`
  display: grid;
  width: calc(100% - 30px);
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: 'logo items items profiler';
  align-items: center;
`;

export const Logo = styled.div`
  grid-area: logo;
  max-width: 13rem;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Menu = styled.ul`
  grid-area: items;
  display: inline-flex;
  list-style: none;

  li a {
    color: ${colors.secondary};
    padding: 16px ${metrics.space.smaller + 0.3}rem;
    margin: 0 ${metrics.space.smaller - 0.2}rem;
  }

  li a:hover {
    background: ${colors.quaternary};
    transition: all 0.5s ease;
  }

  li a.active {
    background: ${colors.quaternary};
    border-bottom: 5px solid ${colors.red};
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    transition: all 0.2s ease;
  }

  @media (max-width: 640px) {
    li a {
      font-size: ${metrics.font_size.regular}rem;
    }
  }

  @media (max-width: 600px) {
    li a {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  grid-area: profiler;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div:first-child {
    position: absolute;
    width: 60px;
  }

  div:first-child svg {
    width: 30px;
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

  @media (max-width: 600px) {
    div:first-child {
      display: none;
    }
    div:last-child {
      display: block;
    }
  }
`;
