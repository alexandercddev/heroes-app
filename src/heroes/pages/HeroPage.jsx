import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/';

export const HeroPage = () => {
  const { heroId, '*': path } = useParams(); 
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate(); 
  const onNavigateBack = () => {
    const pathTo = path.includes('marvel') ? '/marvel' : '/dc';
    navigate(pathTo);
  }

  if( !hero ){
    return <Navigate to='/marvel' />;
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={`/assets/images/${heroId}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance: </b> {hero.first_appearance}
          </li> 
        </ul>
        <h5 className='mt-3'> Characters </h5>
        <p>{hero.characters}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button 
            className='btn btn-sm btn-outline-info'
            onClick={onNavigateBack}
          >
            Back
          </button>
        </div> 
      </div>
    </div>
  )
}
