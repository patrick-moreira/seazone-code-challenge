import React from 'react';
import DatePicker from 'react-datepicker';
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
          <div>
            <DatePicker
              name="checkin"
              selected={new Date()}
              onChange={() => {}}
              dateFormat="dd/MM/yyyy"
              customInput={<input className="input-datepicker" />}
              locale="pt"
            />
          </div>
        </ContentFilter>

        <ContentFilter>
          <label htmlFor="checkout">Check-out</label>
          <div>
            <DatePicker
              name="checkout"
              selected={new Date()}
              onChange={() => {}}
              dateFormat="dd/MM/yyyy"
              customInput={<input className="input-datepicker" />}
              locale="pt"
            />
          </div>
        </ContentFilter>

        <ContentFilter>
          <label htmlFor="guests">N° de hóspedes</label>
          <div>
            <button className="btns-rm-add-guests" type="button">
              <strong>-</strong>
            </button>
            <span>2</span>
            <button className="btns-rm-add-guests" type="button">
              <strong>+</strong>
            </button>
          </div>
        </ContentFilter>

        <ContentFilter>
          <div>
            <button className="btns-search-filters" type="button">
              <strong>Buscar</strong>
            </button>
            <button className="btns-search-filters" type="button">
              <strong>+ Mais filtros</strong>
            </button>
          </div>
        </ContentFilter>
      </Content>
    </Container>
  );
}
export default Filter;
