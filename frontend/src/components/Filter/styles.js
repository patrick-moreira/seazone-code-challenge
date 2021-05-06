import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  margin: 65px 0 24px 0;
`;

export const WrapperLocation = styled.section`
  label {
    line-height: ${metrics.space.big * 2}rem;
    font-weight: ${metrics.font_weight.bold};
  }
  select {
    padding: ${metrics.space.small}rem;
  }
  select,
  .container-datepicker,
  .container-btns-add-remove {
    width: 200px;
    max-width: 90%;
    border: 1px solid ${colors.tertiary};
    border-radius: 5px;
    background: ${colors.white};
    color: ${colors.quaternary};
  }
`;

export const WrapperPrice = styled(WrapperLocation)``;

export const WrapperDatepicker = styled(WrapperLocation)`
  .container-datepicker {
    padding: ${metrics.space.smaller + 0.1}rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container-datepicker input {
    width: 80%;
    padding-left: ${metrics.space.small}rem;
  }
  .container-datepicker svg {
    width: 20%;
    position: relative;
    top: 3px;
  }
`;

export const WrapperBtns = styled(WrapperLocation)`
  .container-btns-add-remove {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${metrics.space.smaller + 0.1}rem;

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

  .container-btns-search-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: ${metrics.space.small}rem;
      margin-top: ${metrics.space.big * 2 - 0.4}rem;
      border-radius: 8px;
      background: ${colors.red};
      color: ${colors.secondary};
    }
    button:last-child {
      background: ${colors.secondary};
      color: ${colors.red};
    }
  }
`;

export const HorizontalRow = styled.hr`
  width: 100%;
  border: 0.5px dotted ${colors.tertiary};
`;
