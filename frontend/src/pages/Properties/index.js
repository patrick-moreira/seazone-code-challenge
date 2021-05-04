import React from 'react';
import { Container, Content } from './styles';

import Filter from '../../components/Filter';
import Card from '../../components/Card';

function Properties() {
  return (
    <>
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
