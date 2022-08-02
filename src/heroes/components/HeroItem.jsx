import React from 'react'; 
import { Link } from 'react-router-dom';

export const HeroItem = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  const heroSrc = `./assets/images/${id}.jpg`;
  return (
    <div className='col'>
        <div className='card'>
          <div className='row no-gutters'>
            <div className='col-4'>
              <img src={heroSrc} className='card-img' alt={superhero} />
            </div>
            <div className='col-8'>
              <div className='card-body'>
                <h5 className='card-title' >{superhero}</h5>
                <p className='card-text'>
                  <small className='text-muted'>
                    {alter_ego}
                  </small>
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to={`/hero/${id}`} className='btn btn-sm btn-outline-info'>
                    More...
                  </Link>
                </div> 
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
