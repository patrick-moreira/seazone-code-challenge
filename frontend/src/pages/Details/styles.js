import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'header_ header_'
    'location info'
    'location rules'
    'location comforts';
  column-gap: ${metrics.space.big * 2}rem;

  p {
    color: ${colors.quaternary};
  }
  p,
  strong,
  button {
    font-size: ${metrics.font_size.regular}rem;
  }
  button {
    font-weight: ${metrics.font_weight.bold};
  }
  button:not(:first-child) {
    color: ${colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    grid-template-areas:
      'header_ header_'
      'location location'
      'info info'
      'rules rules'
      'comforts comforts';
  }
`;

export const Title = styled.h5`
  grid-area: header_;

  margin: ${metrics.space.small + 0.2}rem 0;
  strong {
    color: ${colors.quaternary};
  }
`;

export const WrapperLocation = styled.section`
  grid-area: location;
  img {
    width: 100%;
    height: auto;

    object-fit: cover;
    border-radius: 8px;
    margin: ${metrics.space.small - 0.2}rem 0;
  }
  div {
    margin: ${metrics.space.medium}rem 0;
  }
`;

export const WrapperImovel = styled.section`
  grid-area: info;

  #info-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${metrics.space.smaller}rem;
  }

  #cards-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${metrics.space.medium}rem 0;
    border-top: 1px solid ${colors.tertiary};

    .cards-content {
      width: 100%;
      height: auto;

      margin: 0 ${metrics.space.smaller}rem;
      padding: ${metrics.space.medium}rem;
      border: 1px solid ${colors.tertiary};
      border-radius: 8px;
      color: ${colors.quaternary};

      div {
        margin: 0;
        padding: 0;
        border: 0;
        display: flex;
        align-items: center;

        strong {
          font-size: ${metrics.font_size.xlarger}rem;
          margin-left: ${metrics.space.small}rem;
        }
      }
    }
  }

  #beds-container {
    ul {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid ${colors.tertiary};
    }
    ul li {
      color: ${colors.quaternary};
      margin: ${metrics.space.big}rem;
      strong {
        color: ${colors.primary};
      }
    }
  }
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: ${metrics.space.small}rem;
  padding: ${metrics.space.smaller - 0.4}rem ${metrics.space.smaller - 0.1}rem;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 1rem;
    background: ${(props) =>
      props.status === 'active' ? colors.green : colors.red};
  }

  strong {
    color: ${(props) =>
      props.status === 'active' ? colors.green : colors.red};
  }
`;

export const WrapperRules = styled.section`
  grid-area: rules;

  #rules-container {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.tertiary};

    ul li {
      color: ${colors.quaternary};
      margin: ${metrics.space.medium}rem 0;
      list-style: none;
    }
  }
`;

export const StrongStyled = styled.strong`
  margin-left: ${metrics.space.small}rem;
  padding: ${metrics.space.smaller - 0.4}rem ${metrics.space.smaller - 0.1}rem;
  color: ${colors.secondary};
  background: ${(props) =>
    props.status === 'sim' ? colors.green : colors.red};
  border-radius: 5px;
`;

export const WrapperComforts = styled.section`
  grid-area: comforts;
  margin: ${metrics.space.medium - 0.1}rem 0;

  #comforts-container {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.tertiary};

    ul li {
      color: ${colors.quaternary};
      margin: ${metrics.space.medium}rem ${metrics.space.big}rem;
    }
  }
  button {
    margin-left: ${metrics.space.smaller - 0.4}rem;
  }
`;
