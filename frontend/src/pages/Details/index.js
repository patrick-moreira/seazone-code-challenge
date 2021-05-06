import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { FiUsers, FiTrash, FiDollarSign } from 'react-icons/fi';

import Filter from '../../components/Filter';

import {
  Container,
  Content,
  WrapperHeader,
  WrapperLocation,
  WrapperImovel,
  WrapperComforts,
  StrongStyled,
} from './styles';
import img from '../../assets/images/imoveis/1.png';

function Details() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <>
      <Filter />
      <Container className="container">
        <Content>
          <WrapperHeader status={data.status}>
            <div>
              <button type="button">
                <Link to="/propriedades">Imóveis</Link>
              </button>
              <h5> &nbsp; &gt; &nbsp; {data.name}</h5>
            </div>
            <div>
              <div />
              <strong>{data.status}</strong>
            </div>
          </WrapperHeader>

          <WrapperLocation>
            <img src={img} alt={data.name} />
            <div>
              <h4>Localização</h4>
              <p>
                {data.address.lagradouro} {data.address.number},{' '}
                {data.address.district}, {data.address.citie} -{' '}
                {data.address.uf} . CEP {data.address.cep}
              </p>
              <button type="button">Ver localização</button>
            </div>
          </WrapperLocation>

          <WrapperImovel>
            <h3>{data.name}</h3>
            <p>{data.description}</p>

            <div id="cards-container">
              <div className="cards-content">
                <strong>Máx. de hóspedes</strong>
                <div>
                  <FiUsers size={30} />
                  <strong>{data.max_guests}</strong>
                </div>
              </div>
              <div className="cards-content">
                <strong>Taxa de limpeza</strong>
                <div>
                  <FiTrash size={30} />
                  <strong>
                    R$
                    {data.cleaning_fee.toFixed(2).toString().replace('.', ',')}
                  </strong>
                </div>
              </div>
              <div className="cards-content">
                <strong>Caução</strong>
                <div>
                  <FiDollarSign size={30} />
                  <strong>
                    R${data.caucao.toFixed(2).toString().replace('.', ',')}
                  </strong>
                </div>
              </div>
            </div>
          </WrapperImovel>

          <WrapperComforts>
            <h4>Comodidades</h4>

            <ul>
              {data.comforts.map((item) => (
                <li key={item}>
                  <p>
                    {item.split('=')[0]}
                    <StrongStyled hasComfort={item.split('=')[1]}>
                      {item.split('=')[1]}
                    </StrongStyled>
                  </p>
                </li>
              ))}
            </ul>

            <button type="button">
              Mais comodidades <MdArrowDropDown size={30} />
            </button>
          </WrapperComforts>
        </Content>
      </Container>
    </>
  );
}

export default Details;
