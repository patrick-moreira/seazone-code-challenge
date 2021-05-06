import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import {
  Container,
  Content,
  WrapperLocation,
  WrapperPrice,
  WrapperDatepicker,
  WrapperBtns,
  HorizontalRow,
} from './styles';

function Filter() {
  return (
    <>
      <Container className="container">
        <Content>
          <WrapperLocation>
            <label htmlFor="location">Localização</label>
            <div>
              <select id="location">
                <option value="location">Florianópolis</option>
              </select>
            </div>
          </WrapperLocation>

          <WrapperPrice>
            <label htmlFor="price">Preço</label>
            <div>
              <select id="price">
                <option value="price">300-10000</option>
              </select>
            </div>
          </WrapperPrice>

          <WrapperDatepicker>
            <label htmlFor="checkout">Check-in</label>
            <div className="container-datepicker">
              <DatePicker
                name="checkin"
                selected={new Date()}
                onChange={() => {}}
                dateFormat="dd/MM/yyyy"
                customInput={
                  <div>
                    <input placeholder="22/04/2021" />
                    <FiCalendar size={16} />
                  </div>
                }
                locale="pt"
              />
            </div>
          </WrapperDatepicker>

          <WrapperDatepicker>
            <label htmlFor="checkout">Check-out</label>
            <div className="container-datepicker">
              <DatePicker
                name="checkout"
                selected={new Date()}
                onChange={() => {}}
                dateFormat="dd/MM/yyyy"
                customInput={
                  <div>
                    <input placeholder="27/04/2021" />
                    <FiCalendar size={16} />
                  </div>
                }
                locale="pt"
              />
            </div>
          </WrapperDatepicker>

          <WrapperBtns>
            <label htmlFor="guests">N° de hóspedes</label>
            <div className="container-btns-add-remove">
              <button type="button">
                <strong>-</strong>
              </button>
              <span>2</span>
              <button type="button">
                <strong>+</strong>
              </button>
            </div>
          </WrapperBtns>

          <WrapperBtns>
            <div className="container-btns-search-filters">
              <button type="button">
                <strong>Buscar</strong>
              </button>
              <button type="button">
                <strong>+ Mais filtros</strong>
              </button>
            </div>
          </WrapperBtns>
        </Content>
      </Container>
      <HorizontalRow />
    </>
  );
}
export default Filter;
