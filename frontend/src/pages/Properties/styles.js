import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  margin: ${metrics.space.big}rem 0;

  .wrapper-imoveis {
    display: flex;
    justify-content: space-between;
  }

  .wrapper-imoveis span {
    color: ${colors.quaternary};
  }

  .wrapper-imoveis div:last-child > select {
    padding: ${metrics.space.smaller}rem;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    background: ${colors.white};
    color: ${colors.quaternary};
  }

  .wrapper-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: ${metrics.space.bigger}rem;
  }
`;
