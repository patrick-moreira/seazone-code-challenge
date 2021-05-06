import React from 'react';

import Filter from '../../components/Filter';
import Card from '../../components/Card';

import data from '../../dataset/imoveis.json';

import { Container, Content, WrapperImoveis, WrapperCards } from './styles';

function Properties() {
  const imoveis = data;

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
          <WrapperCards>
            {imoveis.map((imovel) => (
              <Card key={imovel.id} data={imovel} />
            ))}
          </WrapperCards>
        </Content>
      </Container>
    </>
  );
}

export default Properties;
