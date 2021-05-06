import React, { useEffect, useState } from 'react';

import Filter from '../../components/Filter';
import Card from '../../components/Card';

import logo from '../../assets/icons/seazone-icon.svg';
import data from '../../dataset/imoveis.json';

import {
  Container,
  Content,
  WrapperImoveis,
  WrapperCards,
  LoadingStyled,
} from './styles';

function Properties() {
  const [loading, setLoading] = useState(false);
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    setLoading(true);
    setImoveis(data);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <>
      <Filter />
      <Container className="container">
        <Content>
          <WrapperImoveis>
            <div>
              <h3>Todos os imóveis</h3>
              <span>{imoveis.length} imóveis</span>
            </div>
            <div>
              <select id="sort">
                <option value="sort">Ordenar</option>
              </select>
            </div>
          </WrapperImoveis>
          {loading ? (
            <LoadingStyled>
              <img src={logo} alt="" className="" />
              <strong>Carregando...</strong>
            </LoadingStyled>
          ) : (
            <WrapperCards>
              {imoveis.map((imovel) => (
                <Card key={imovel.id} data={imovel} />
              ))}
            </WrapperCards>
          )}
        </Content>
      </Container>
    </>
  );
}

export default Properties;
