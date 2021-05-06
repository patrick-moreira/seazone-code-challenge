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
    'location comforts';
  column-gap: ${metrics.space.big * 2}rem;

  p {
    color: ${colors.quaternary};
  }
  p,
  strong,
  button {
    font-size: ${metrics.font_size.medium - 0.1}rem;
  }
  button {
    font-weight: ${metrics.font_weight.bold};
    :first-child {
      margin-bottom: ${metrics.space.smaller}rem;
    }
    :not(:first-child) {
      color: ${colors.red};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 800px) {
    grid-template-areas:
      'header_ header_'
      'location location'
      'info info'
      'comforts comforts';
  }
`;

export const WrapperHeader = styled.section`
  grid-area: header_;

  display: flex;
  justify-content: space-between;
  margin: ${metrics.space.small}rem 0;
  border-bottom: 1px dotted ${colors.tertiary};

  div {
    display: flex;
    align-items: center;

    a {
      color: ${colors.primary};
    }
    h5 {
      color: ${colors.quaternary};
    }
  }

  div:last-child > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: ${metrics.space.small}rem;
    background: ${(props) =>
      props.status === 'ativo' ? colors.green : colors.red};
  }
  div:last-child > strong {
    color: ${(props) => (props.status === 'ativo' ? colors.green : colors.red)};
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
    border-bottom: 1px dotted ${colors.tertiary};
    padding: ${metrics.space.small}rem 0;
    line-height: ${metrics.space.bigger}rem;
  }
`;

export const WrapperImovel = styled.section`
  grid-area: info;

  #cards-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${metrics.space.medium}rem;
    padding: ${metrics.space.medium}rem 0;
    border-top: 1px dotted ${colors.tertiary};
    border-bottom: 1px dotted ${colors.tertiary};

    .cards-content {
      width: 100%;
      height: auto;

      margin-right: ${metrics.space.medium}rem;
      padding: ${metrics.space.medium}rem;
      border: 1px solid ${colors.tertiary};
      border-radius: 8px;
      color: ${colors.quaternary};

      div {
        display: flex;
        align-items: center;

        strong {
          font-size: ${metrics.font_size.xlarger}rem;
          margin-left: ${metrics.space.small}rem;
        }
      }
    }
  }
`;

export const WrapperComforts = styled.section`
  grid-area: comforts;
  margin-bottom: ${metrics.space.big * 2}rem;
  padding-top: ${metrics.space.small}rem;

  ul li {
    display: inline-flex;
    margin: ${metrics.space.medium}rem;
  }
`;

export const StrongStyled = styled.strong`
  margin-left: ${metrics.space.small}rem;
  padding: ${metrics.space.smaller - 0.4}rem ${metrics.space.smaller - 0.1}rem;
  color: ${colors.secondary};
  background: ${(props) =>
    props.hasComfort === 'sim' ? colors.green : colors.red};
  border-radius: 5px;
`;
