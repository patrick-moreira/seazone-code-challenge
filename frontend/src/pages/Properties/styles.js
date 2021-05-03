import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
`;

export const Content = styled.div`
  width: 80%;
  margin: 1rem;

  .wrapper-imoveis {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrapper-imoveis span {
    color: ${colors.quaternary};
    font-size: 0.9rem;
  }

  .wrapper-imoveis div:last-child > select {
    padding: 0.5rem;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    background: ${colors.white};
    color: ${colors.quaternary};
  }

  .wrapper-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;
  }
`;
