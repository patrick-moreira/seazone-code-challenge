import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${colors.tertiary};
`;

export const Content = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  align-items: center;
  margin: 65px 0 24px 0;
`;

export const ContentFilter = styled.div`
  label {
    font-size: 0.9rem;
    font-weight: bold;
  }

  .container-datepicker,
  .container-btns-rm-add-guests,
  div > select {
    width: 200px;
    max-width: 70%;
    padding: 0.5rem;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    background: ${colors.white};
    color: ${colors.quaternary};
  }

  .container-datepicker {
    padding: 0.25rem;
  }

  .container-datepicker input {
    width: 70%;
    text-align: center;
  }
  .container-datepicker svg {
    width: 30%;
    position: relative;
    top: 0.1rem;
  }

  .container-btns-rm-add-guests {
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-btns-rm-add-guests button {
    width: 20px;
    height: 20px;
    margin: 0 1rem;
    border-radius: 50%;
    border: 2px solid ${colors.tertiary};
    color: ${colors.tertiary};
  }

  .container-btns-rm-add-guests button:last-child {
    border-color: ${colors.quaternary};
    color: ${colors.quaternary};
  }

  .container-btns-search-filters button {
    padding: 0.6rem;
    margin-top: 1.5rem;
    border-radius: 8px;
    background: ${colors.red};
    color: ${colors.secondary};
  }

  .container-btns-search-filters button:last-child {
    background: ${colors.secondary};
    color: ${colors.red};
  }
`;
