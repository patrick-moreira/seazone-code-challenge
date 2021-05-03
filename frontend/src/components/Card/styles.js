import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;

  .wrapper-img-background img {
    width: 100%;
    height: 15vh;
    object-fit: cover;
    border-radius: 10px;
  }

  .wrapper-img-background div {
    display: flex;
    position: relative;
    top: -27px;
  }

  .wrapper-img-background div > div {
    width: 40px;
    height: 40px;
    margin-left: 0.5rem;
    border-radius: 50%;
    background: ${colors.secondary};
    cursor: pointer;
    :hover {
      background: ${colors.primary};
    }
  }

  .wrapper-img-background div > div img {
    width: 100%;
    height: auto;
    padding: 6px;
  }

  .wrapper-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${colors.tertiary};

    svg {
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  .wrapper-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid ${colors.tertiary};
    border-bottom: 1px solid ${colors.tertiary};
  }

  .wrapper-details div:last-child {
    text-align: right;
  }

  p,
  strong {
    font-size: 0.8rem;
    line-height: 1.4rem;
  }

  .wrapper-details p > strong {
    color: ${colors.green};
  }

  .wrapper-details p > strong > span {
    font-weight: normal;
  }
`;
