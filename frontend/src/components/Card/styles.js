import styled, { keyframes } from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin: ${metrics.space.big}rem 0;
  padding: ${metrics.space.small - 0.2}rem;
  border: 1px solid ${colors.tertiary};
  border-radius: ${metrics.space.bigger * 4}px;
  background: ${colors.white};

  p,
  strong {
    font-size: ${metrics.font_size.regular}rem;
    line-height: ${metrics.space.medium * 2}rem;
  }
  strong {
    color: ${colors.quaternary};
  }
`;

export const WrapperImage = styled.section`
  figure img {
    width: 100%;
    height: 15vh;
    border-radius: ${metrics.space.bigger * 4}px;
    object-fit: cover;
    cursor: pointer;
  }

  div {
    width: 30%;
    display: flex;
    position: relative;
    top: -27px;
  }

  div > div {
    width: 40px;
    height: 40px;

    margin-left: ${metrics.space.smaller}rem;
    border-radius: 50%;
    background: ${colors.secondary};
    cursor: pointer;
    :hover {
      background: ${colors.primary};
    }
  }

  div > div img {
    width: 100%;
    height: auto;
    padding: ${metrics.space.big * 3}px;
  }

  figure figcaption {
    display: none;
    cursor: pointer;
  }

  figure:hover {
    img {
      border: ${metrics.space.bigger * 2}px solid ${colors.tertiary};
      object-fit: contain;
      border-radius: ${metrics.space.bigger * 4 - 2}px;
      transition: all 0.2s ease-in;
      height: auto;
      opacity: 0.6;
    }

    figcaption {
      text-align: center;
      color: ${colors.quaternary};
      position: relative;
      display: block;
      top: -135px;
    }
  }
`;

const info = keyframes`
  from {
    color: ${colors.secondary};
    fill: ${colors.blue}
  }
  to {
    color: ${colors.blue};
    fill: ${colors.secondary}
  }`;

export const WrapperTitle = styled.section`
  div {
    display: flex;
    justify-content: space-between;

    svg {
      margin-top: ${metrics.space.smaller - 0.4}rem;
      color: ${colors.blue};
    }
  }

  svg {
    animation: ${info} 2s linear infinite;
  }

  p:last-child {
    display: none;
  }

  :hover {
    p:last-child {
      display: block;
      text-align: justify;
      line-height: ${metrics.space.bigger}rem;
      text-justify: inter-word;
      border-top: 1px dotted ${colors.tertiary};
      margin: ${metrics.space.medium}rem 0;
    }
    svg {
      animation-iteration-count: 1;
    }
  }
`;

export const WrapperDetails = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px dotted ${colors.tertiary};

  div:last-child {
    p {
      text-align: right;
      color: ${colors.quaternary};
      font-weight: ${metrics.font_weight.bold};
    }
  }
`;
