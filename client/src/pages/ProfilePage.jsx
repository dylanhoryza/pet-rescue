import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../utils/api';
import NewDogModal from '../components/CreateDog';
import '../styles/profilepage.css'

export default function Profile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        const userData = await getUserProfile(userId);
        setUserData(userData);
        console.log(userData)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfileData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error: Failed to load user profile</div>;
  }

  return (
    <div className='profile-container'>
      <h1 className='welcome-header'>Welcome, {userData.username}!</h1>
      {/* Display other user profile data */}
      <div className='button-container'>
      <NewDogModal />
      <button>Edit Dog</button>
      <button>Remove Dog</button>
      </div>
      
    </div>
  );
}