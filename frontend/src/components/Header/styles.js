import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 2;
`;

export const Content = styled.nav`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 10fr 0.5fr;
  grid-template-areas: 'logo items profiler';
  align-items: center;
  margin: 0 ${metrics.space.medium}rem 0 ${metrics.space.medium}rem;
`;

export const Logo = styled.div`
  grid-area: logo;
  width: 150px;
  margin-right: 3rem;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Menu = styled.ul`
  grid-area: items;
  display: inline-flex;
  list-style: none;

  li {
    margin-right: 5rem;
    cursor: pointer;
  }

  li:hover {
    background: ${colors.primary};
  }

  li a {
    color: ${colors.secundary};
    font: 400 ${metrics.font.smaller}rem Poppins;
  }

  li a:hover {
    color: ${colors.quaternary};
  }
`;

export const Profile = styled.div`
  grid-area: profiler;
  width: 35px;
  svg {
    fill: ${colors.tertiary};
    width: 100%;
    height: auto;
  }
`;
