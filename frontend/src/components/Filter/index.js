import React from 'react';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import { Container, Content } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

function Filter() {
  return (
    <Container className="container">
      <Content>
        <div className="wrapper-filter">
          <label htmlFor="location">Localização</label>
          <div>
            <select id="location">
              <option value="location">Florianópolis</option>
            </select>
          </div>
        </div>

        <div className="wrapper-filter">
          <label htmlFor="price">Preço</label>
          <div>
            <select id="price">
              <option value="price">300-10000</option>
            </select>
          </div>
        </div>

        <div className="wrapper-filter">
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
                  <FiCalendar />
                </div>
              }
              locale="pt"
            />
          </div>
        </div>

        <div className="wrapper-filter">
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
                  <FiCalendar />
                </div>
              }
              locale="pt"
            />
          </div>
        </div>

        <div className="wrapper-filter">
          <label htmlFor="guests">N° de hóspedes</label>
          <div className="container-btns-rm-add-guests">
            <button type="button">
              <strong>-</strong>
            </button>
            <span>2</span>
            <button type="button">
              <strong>+</strong>
            </button>
          </div>
        </div>

        <div className="wrapper-filter">
          <div className="container-btns-search-filters">
            <button type="button">
              <strong>Buscar</strong>
            </button>
            <button type="button">
              <strong>+ Mais filtros</strong>
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
export default Filter;
