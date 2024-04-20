export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
};

export const getUserProfile = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/users/profile/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      throw new Error('Failed to fetch user profile');
    }
    
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const createPet = async (petData) => {
  return fetch('/api/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(petData)
  })
}