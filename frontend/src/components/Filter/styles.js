import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  border-bottom: 1px solid ${colors.tertiary};
`;

export const Content = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  align-items: center;
  padding-top: 60px;
`;

export const ContentFilter = styled.div`
  margin-bottom: 1rem;

  div > select,
  input {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    background: ${colors.white};
  }

  div > button.btns-rm-add-guests {
    width: 20px;
    height: 20px;
    margin: 0 1rem;
    border-radius: 50%;
    border: 2px solid ${colors.tertiary};
    color: ${colors.tertiary};
  }

  div > button.btns-rm-add-guests:last-child {
    border-color: ${colors.quaternary};
    color: ${colors.quaternary};
  }

  div > button.btns-search-filters {
    padding: 0.6rem;
    margin-top: 1.5rem;
    border-radius: 8px;
    background: ${colors.red};
    color: ${colors.secondary};
  }

  div > button.btns-search-filters:last-child {
    background: ${colors.secondary};
    color: ${colors.red};
  }
  /* @media (max-width: 700px) {
  } */
`;
