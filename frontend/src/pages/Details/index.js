import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { FiUsers, FiTrash, FiDollarSign } from 'react-icons/fi';

import Filter from '../../components/Filter';

import {
  Container,
  Content,
  Title,
  WrapperLocation,
  WrapperImovel,
  WrapperRules,
  WrapperComforts,
  DivStyled,
  StrongStyled,
} from './styles';
import img from '../../assets/images/imoveis/1.png';

function Details() {
  return (
    <>
      <Filter />
      <Container className="container">
        <Content>
          <Title>
            <Link to="/propriedades">
              <button type="button">Imóveis </button>
            </Link>
            <strong> &gt; Jurerê Internacional</strong>
          </Title>

          <WrapperLocation>
            <img src={img} alt="Imóvel 1" />
            <div>
              <h4>Localização</h4>
              <p>
                AV. Búzios 1800, Jurerê Internacional, Florianópolis - SC . CEP
                89650-100
              </p>
              <button type="button">Ver localização</button>
            </div>
          </WrapperLocation>

          <WrapperImovel>
            <h3>ILC2307 - Suite Top vista mar resort Jurere</h3>
            <div id="info-container">
              <div>
                <p>Jurerê Internacional, Florianópolis</p>
                <strong>2 quartos. 3 camas. 2 banheiros</strong>
              </div>
              <DivStyled status="active">
                <div />
                <strong>ativo</strong>
              </DivStyled>
            </div>

            <div id="cards-container">
              <div className="cards-content">
                <strong>Máx. de hóspedes</strong>
                <div>
                  <FiUsers size={30} />
                  <strong>6</strong>
                </div>
              </div>
              <div className="cards-content">
                <strong>Taxa de limpeza</strong>
                <div>
                  <FiTrash size={30} />
                  <strong>R$50,00</strong>
                </div>
              </div>
              <div className="cards-content">
                <strong>Caução</strong>
                <div>
                  <FiDollarSign size={30} />
                  <strong>R$700,00</strong>
                </div>
              </div>
            </div>

            <div id="beds-container">
              <h4>Camas</h4>
              <ul>
                <li>
                  <p>
                    <strong>1 cama de casal: </strong>duplo
                  </p>
                </li>
                <li>
                  <p>
                    <strong>1 sofá cama: </strong>sala/área comum
                  </p>
                </li>
              </ul>
            </div>
          </WrapperImovel>

          <WrapperRules>
            <h4>Regras</h4>
            <div id="rules-container">
              <ul>
                <li>
                  <p>
                    Aceita Crianças (de 02 até 12 anos)
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Aceita Bebês (abaixo de 02 anos)
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Fornece Berços
                    <StrongStyled status="não">não</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Restrição de Idade Mínima para Fazer Reserva
                    <StrongStyled status="não">não</StrongStyled>
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  <p>
                    Permitido Fumar no Quarto
                    <StrongStyled status="não">não</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Aceita animais de Estimação
                    <StrongStyled status="não">não</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Eventos são Permitidos
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>
              </ul>
            </div>
            <button type="button">
              Mais regras <MdArrowDropDown size={30} />
            </button>
          </WrapperRules>

          <WrapperComforts>
            <h4>Comodidades</h4>

            <div id="comforts-container">
              <ul>
                <li>
                  <p>
                    Estacionamento
                    <StrongStyled status="não">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Elevador
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Porteiro
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Piscina Privada
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  <p>
                    Internet
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Wi-fi
                    <StrongStyled status="sim">sim</StrongStyled>
                  </p>
                </li>

                <li>
                  <p>
                    Ar Condicionado
                    <StrongStyled status="não">não</StrongStyled>
                  </p>
                </li>
              </ul>
            </div>

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
