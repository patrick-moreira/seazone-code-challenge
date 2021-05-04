import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div`
  border-bottom: 1px solid ${colors.tertiary};
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  margin: 65px 0 24px 0;

  .wrapper-filter {
    label {
      line-height: ${metrics.space.big * 2}rem;
      font-weight: ${metrics.font_weight.bold};
    }

    .container-datepicker,
    .container-btns-rm-add-guests,
    div > select {
      width: 200px;
      max-width: 90%;
      padding: ${metrics.space.small}rem;
      border: 1px solid ${colors.tertiary};
      border-radius: 5px;
      background: ${colors.white};
      color: ${colors.quaternary};
    }

    .container-datepicker {
      padding: ${metrics.space.smaller + 0.2}rem;

      input {
        width: 70%;
        text-align: center;
      }

      svg {
        width: 30%;
        position: relative;
        top: 0.1rem;
      }
    }

    .container-btns-rm-add-guests {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${metrics.space.smaller + 0.2}rem;

      button {
        width: 20px;
        height: 20px;
        margin: 0 ${metrics.space.small}rem;
        border-radius: 50%;
        border: 2px solid ${colors.tertiary};
        color: ${colors.tertiary};
      }

      button:last-child {
        border-color: ${colors.quaternary};
        color: ${colors.quaternary};
      }
    }

    .container-btns-search-filters button {
      padding: ${metrics.space.small}rem;
      margin-top: ${metrics.space.big * 2 - 0.4}rem;
      border-radius: 8px;
      background: ${colors.red};
      color: ${colors.secondary};

      :last-child {
        background: ${colors.secondary};
        color: ${colors.red};
      }
    }
  }
`;
