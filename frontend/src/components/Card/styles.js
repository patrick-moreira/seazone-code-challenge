import styled from 'styled-components';
import { colors, metrics } from '../../assets/styles';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin: ${metrics.space.big}rem 0;
  padding: ${metrics.space.small - 0.2}rem;
  border: 1px solid ${colors.tertiary};
  border-radius: 10px;
  background: ${colors.white};
  p,
  strong {
    font-size: ${metrics.font_size.regular}rem;
    line-height: ${metrics.space.bigger}rem;
  }

  .wrapper-img-background {
    figure img {
      width: 100%;
      height: 15vh;
      border-radius: 10px;
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
      padding: 6px;
    }

    figure figcaption {
      display: none;
      cursor: pointer;
    }

    figure:hover {
      img {
        border: 5px solid ${colors.tertiary};
        object-fit: contain;
        border-radius: 8px;
        transition: all 0.2s ease-in;
        height: auto;
        opacity: 0.6;
      }

      figcaption {
        text-align: center;
        color: ${colors.quaternary};
        position: relative;
        display: block;
        top: -140px;
      }
    }
  }

  .wrapper-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dotted ${colors.tertiary};

    svg {
      cursor: pointer;
    }
  }

  .wrapper-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px dotted ${colors.tertiary};

    div:last-child {
      text-align: right;
    }

    p > strong {
      color: ${colors.green};
    }

    p > strong > span {
      font-weight: ${metrics.font_weight.normal};
    }
  }
`;
