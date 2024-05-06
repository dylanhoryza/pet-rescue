import React, { useState, useEffect } from 'react';
import { getAllPets } from '../utils/api';
import '../styles/doglist.css'

export default function DogList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petData = await getAllPets();
        setPets(petData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);



  return (
    <div className='doglist-container row'>
    {pets.map((pet) => (
      <div className='card' key={pet._id}>
        <div className='card-title'>I'm {pet.name}</div>
        <div className='card-body'>
  
          <p> <span>Breed:</span> {pet.breed}</p>
          <p> <span>Age Group:</span> {pet.ageGroup}</p>
          <p> <span>Speacial Needs:</span> {pet.specialNeeds}</p>
         <p> <span>Status:</span> {pet.status}</p> 
          <button>More Info</button>
        </div>
      </div>
    ))}
  </div>
);
  
}