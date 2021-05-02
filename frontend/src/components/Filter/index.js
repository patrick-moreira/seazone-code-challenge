import React from 'react';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import { Container, Content, ContentFilter } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

function Filter() {
  return (
    <Container>
      <Content>
        <ContentFilter>
          <label htmlFor="location">Localização</label>
          <div>
            <select id="location">
              <option value="location">Florianópolis</option>
            </select>
          </div>
        </ContentFilter>

        <ContentFilter>
          <label htmlFor="price">Preço</label>
          <div>
            <select id="price">
              <option value="price">300-10000</option>
            </select>
          </div>
        </ContentFilter>

        <ContentFilter>
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
        </ContentFilter>

        <ContentFilter>
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
        </ContentFilter>

        <ContentFilter>
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
        </ContentFilter>

        <ContentFilter>
          <div className="container-btns-search-filters">
            <button type="button">
              <strong>Buscar</strong>
            </button>
            <button type="button">
              <strong>+ Mais filtros</strong>
            </button>
          </div>
        </ContentFilter>
      </Content>
    </Container>
  );
}
export default Filter;
