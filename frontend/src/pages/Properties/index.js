import React from 'react';

import Filter from '../../components/Filter';
import Card from '../../components/Card';

import data from '../../dataset/imoveis.json';

import { Container, Content } from './styles';

function Properties() {
  const imoveis = data;

  return (
    <>
      {imoveis.map((i) => console.log(i.name))};
      <Filter />
      <Container className="container">
        <Content>
          <div className="wrapper-imoveis">
            <div>
              <h3>Todos os imóveis</h3>
              <span>200 imóveis</span>
            </div>
            <div>
              <select id="sort">
                <option value="sort">Ordenar</option>
              </select>
            </div>
          </div>
          <div className="wrapper-cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Properties;
