import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.scss';

export default function Search(props) {
  return (
    <div className='search'>
      <div className="search__input-group">
        <span className="search__input-group--select">
          <select>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos y bebidas alcoholicas</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
            <option>Todos los departamentos</option>
            <option>Alimentación y bebidas</option>
            <option>Bricolaje y herramientas</option>
            <option>Electrónica</option>
          </select>
        </span>

        <input id="search" type="text" className="search__input-group--input" name="search" placeholder="Buscar Amazén.es" />

        <button className="search__input-group--button"><BsSearch /></button>
      </div>
    </div>

  );
}