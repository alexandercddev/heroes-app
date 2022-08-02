import React from 'react'
import { HeroesList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <HeroesList 
        publisher='Marvel Comics'
      />
    </>
  )
}
