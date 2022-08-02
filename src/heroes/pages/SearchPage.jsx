import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroItem } from '../components/';
import { useForm } from '../hooks/';
import queryString from 'query-string'; 
import { getHeroesByName } from '../helpers/';

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { query = '' } = queryString.parse(search);
  const heroes = getHeroesByName(query);
  const showSearch = (query.length === 0);
  const showError = (query.length > 0 && heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: query
  });
  const onSearch = (event) => {
    event.preventDefault();
    //if(searchText.trim().length === 0) return;
    navigate(`?query=${searchText.toLowerCase().trim()}`)
  } 
  return (
    <>
      <h1></h1>
      <div className='row'>
        <div className='col-5'>
          <h4>Serching</h4>
          <form onSubmit={onSearch} >
            <input 
              type='text'
              className='form-control'
              placeholder='Search a hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <div className='alert alert-primary' style={{display: (showSearch ? '' : 'none')}}>
              Search a hero
          </div>
          <div className='alert alert-danger' style={{display: (showError ? '' : 'none')}}>
            No hero with <b>{query}</b>
          </div>
          <div className='row rows-cols-1 row-cols-md-1 g-3'>
            {heroes.map( hero => (
              <HeroItem 
                key={hero.id}
                {...hero}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
