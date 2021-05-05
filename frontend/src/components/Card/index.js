import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { Container, Content } from './styles';
import img1 from '../../assets/images/imoveis/1.png';
import logoAirbnb from '../../assets/icons/airbnb-icon.svg';
import logoSeazone from '../../assets/icons/seazone-icon.svg';

function Card() {
  return (
    <Container>
      <Content>
        <div className="wrapper-img-background">
          <Link to="/propriedades/detalhes/1">
            <figure>
              <img src={img1} alt="Imagem 1" />
              <figcaption className="caption">
                <h1>Detalhes</h1>
              </figcaption>
            </figure>
          </Link>
          <div>
            <div>
              <img src={logoAirbnb} alt="Logo Airbnb" />
            </div>
            <div>
              <img src={logoSeazone} alt="Logo Seazone" />
            </div>
          </div>
        </div>
        <div className="wrapper-title">
          <h4>JBM202 - Suite Top vista mar resort Jurere</h4>
          <FiMoreVertical />
        </div>
        <p>Jurerê Internacional . 8 hóspedes . 2 quartos</p>
        <div className="wrapper-details">
          <div>
            <p>Valor diária</p>
            <p>Total 5 diárias</p>
            <p>Total de limpeza</p>
            <p>Caução:</p>
            <strong>Total:</strong>
          </div>
          <div>
            <p>R$700,00 / noite</p>
            <p>R$3500,00</p>
            <p>R$200,00</p>
            <p>R$1850,00</p>
            <p>
              R$3700,00 |{' '}
              <strong>
                R$3330 <br />
                <span>à vista</span>
              </strong>
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Card;
