import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearchProducts from '../../../../../../../hooks/useSearchProducts';
import { BsSearch } from 'react-icons/bs';
import './Search.scss';

export default function Search() {
  const [query, setSearchParams] = useSearchProducts();
  const { pathname } = useLocation();
  const navigate = useNavigate()

  const handleInput = ({ target }) => {
    if (pathname !== '/products/all') {
      return navigate("/products/all");
    }

    const { value } = target;
    setSearchParams({ q: value });
  }

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

        <input
          id="search"
          value={query}
          type="text"
          className="search__input-group--input"
          name="search"
          placeholder="Buscar en Amazén.es"
          onChange={handleInput}
        />

        <button className="search__input-group--button">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}