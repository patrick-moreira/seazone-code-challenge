import React from 'react';
import { Link } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';

import {
  Container,
  Content,
  WrapperImage,
  WrapperTitle,
  WrapperDetails,
} from './styles';

import img1 from '../../assets/images/imoveis/1.png';
import logoAirbnb from '../../assets/icons/airbnb-icon.svg';
import logoSeazone from '../../assets/icons/seazone-icon.svg';

function Card({ data }) {
  return (
    <Container>
      <Content>
        <WrapperImage>
          <Link
            to={{
              pathname: `/propriedades/detalhes/${data.id}`,
              state: { data },
            }}
          >
            <figure>
              <img src={img1} alt="Imagem 1" />
              <figcaption>
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
        </WrapperImage>

        <WrapperTitle>
          <div>
            <h4>{data.name}</h4>
            <FiInfo size={22} />
          </div>
          <strong>{data.address.district}</strong>
          <p>
            <strong>Descrição:</strong> {data.description}
          </p>
        </WrapperTitle>

        <WrapperDetails>
          <div>
            <p>Máx. de hóspedes:</p>
            <p>Taxa de limpeza:</p>
            <p>Caução:</p>
          </div>
          <div>
            <p>{data.max_guests}</p>
            <p>R${data.cleaning_fee.toFixed(2).toString().replace('.', ',')}</p>
            <p>R${data.caucao.toFixed(2).toString().replace('.', ',')}</p>
          </div>
        </WrapperDetails>
      </Content>
    </Container>
  );
}

export default Card;
