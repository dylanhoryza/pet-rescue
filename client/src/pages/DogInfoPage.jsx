import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/doginfo.css'

export default function DogInfoPage() {
  const { petId } = useParams(); 
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch(`/api/pets/${petId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dog');
        }
        const data = await response.json();
        console.log(data);
        setDog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog:', error);
        setLoading(false);
      }
    };

    fetchDog();
  }, [petId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
<div className='container dog-info'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='card dog-cards'>
        <div className='card-body'>
          <h5 className='card-title'></h5>
          <p className='card-text'><strong>Name:</strong> {dog.name}</p>
          <p className='card-text'><strong>Breed:</strong> {dog.breed}</p>
          <p className='card-text'><strong>Age:</strong> {dog.ageGroup}</p>
          <p className='card-text'><strong>Description:</strong> {dog.description}</p>
        </div>
      </div>
    </div>
    <div className='col-md-6'>
      <div className='card dog-cards'>
        <div className='card-body'>
          <h5 className='card-title'></h5>
          <p className='card-text'><strong>Training Level:</strong> {dog.trainingLevel}</p>
          <p className='card-text'><strong>Housebroken:</strong> {dog.housebroken}</p>
          <p className='card-text'><strong>Crate Trained:</strong> {dog.crateTrained}</p>
          <p className='card-text'><strong>Current Medication:</strong> {dog.currentMedication}</p>
          <p className='card-text'><strong>Special Needs:</strong> {dog.specialNeeds}</p>
          <p className='card-text'><strong>Favorite Place to Sleep:</strong> {dog.favoriteSleep}</p>
          <p className='card-text'><strong>Favorite Activity:</strong> {dog.favoriteActivity}</p>
          <p className='card-text'><strong>Favorite Snack:</strong> {dog.favoriteSnack}</p>
          <p className='card-text'><strong>Likes:</strong> {dog.likes}</p>
          <p className='card-text'><strong>Dislikes:</strong> {dog.dislikes}</p>
          <p className='card-text'><strong>Scared Of:</strong> {dog.scaredOf}</p>
          <p className='card-text'><strong>Best Day:</strong> {dog.bestDay}</p>
          <p className='card-text'><strong>Other Facts:</strong> {dog.otherFacts}</p>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
