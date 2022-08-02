import React from 'react';
import { HeroesList } from '../components/'; 

export const DCPage = () => { 
  return (
    <>
      <h1>DC Comics</h1>
      <HeroesList 
        publisher='DC Comics'
      />
    </>
  )
}
