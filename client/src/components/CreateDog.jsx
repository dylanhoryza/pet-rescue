import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createPet } from '../utils/api';

export default function NewDogModal({ onSubmit }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    ageGroup: '',
    description: '',
    photos: [],
    trainingLevel: '',
    housebroken: '',
    crateTrained: '',
    currentMedication: '',
    specialNeeds: '',
    favoriteSleep: '',
    favoriteActivity: '',
    favoriteSnack: '',
    likes: '',
    dislikes: '',
    scaredOf: '',
    bestDay: '',
    otherFacts: '',
    status: '',
    fosterParentUsername: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to backend to get user ID based on the entered username
      const response = await fetch(
        `/api/users/username/${formData.fosterParentUsername}`
      );
      const userData = await response.json();
      const fosterParentId = userData._id;


      // Include the fosterParentId in the pet data before creating
      const petData = {
        ...formData,
        fosterParent: fosterParentId,
      };

      // Create the pet
      const createdPet = await createPet(petData);
      console.log('Pet created:', createdPet);

      // Clear the form after successful creation
      setFormData({
        name: '',
        breed: '',
        ageGroup: '',
        description: '',
        photos: [],
        trainingLevel: '',
        housebroken: '',
        crateTrained: '',
        currentMedication: '',
        specialNeeds: '',
        favoriteSleep: '',
        favoriteActivity: '',
        favoriteSnack: '',
        likes: '',
        dislikes: '',
        scaredOf: '',
        bestDay: '',
        otherFacts: '',
        status: '',
        fosterParentUsername: '',
      });
      handleClose();
    } catch (error) {
      console.error('Error creating pet:', error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Send request to backend to get user ID based on the entered username
  //     const response = await fetch(
  //       `/api/users/username/${formData.fosterParentUsername}`
  //     );
  //     const userData = await response.json();
  //     const fosterParentId = userData._id;
  
  //     // Include the fosterParentId in the pet data before creating
  //     const petData = {
  //       ...formData,
  //       fosterParent: fosterParentId,
  //     };
  
  //     // Log FormData before submitting
  //     const formDataToSend = new FormData();
  //     for (const key in petData) {
  //       formDataToSend.append(key, petData[key]);
  //     }
  //     console.log('FormData:', formDataToSend);
  
  //     // Create the pet
  //     const createdPet = await createPet(formDataToSend);
  //     console.log('Pet created:', createdPet);
  
  //     // Clear the form after successful creation
  //     setFormData({
  //       name: '',
  //       breed: '',
  //       ageGroup: '',
  //       description: '',
  //       photos: [],
  //       trainingLevel: '',
  //       housebroken: '',
  //       crateTrained: '',
  //       currentMedication: '',
  //       specialNeeds: '',
  //       favoriteSleep: '',
  //       favoriteActivity: '',
  //       favoriteSnack: '',
  //       likes: '',
  //       dislikes: '',
  //       scaredOf: '',
  //       bestDay: '',
  //       otherFacts: '',
  //       status: '',
  //       fosterParentUsername: '',
  //     });
  //     handleClose();
  //   } catch (error) {
  //     console.error('Error creating pet:', error);
  //   }
  // };
  



  const handlePhotoChange = (event) => {
    const selectedPhotos = Array.from(event.target.files);
    setFormData({
      ...formData,
      photos: selectedPhotos,
    });
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add New Dog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Input fields for dog data */}
            <Form.Group controlId='name'>
              <Form.Label style={{ marginBottom: '-10px' }}>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='breed'>
              <Form.Label style={{ marginBottom: '-10px' }}>Breed</Form.Label>
              <Form.Control
                type='text'
                name='breed'
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='ageGroup'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Age Group
              </Form.Label>
              <Form.Select
                name='ageGroup'
                value={formData.ageGroup}
                onChange={handleChange}
                required
              >
                <option value=''>Select Age Group</option>
                <option value='Puppy'>Puppy</option>
                <option value='Adolescent'>Adolescent</option>
                <option value='Senior'>Senior</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Description
              </Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='photos'>
              <Form.Label style={{ marginBottom: '-10px' }}>Photos</Form.Label>
              <Form.Control
                type='file'
                name='photos'
                onChange={handlePhotoChange}
                multiple
              />
            </Form.Group>

            <Form.Group controlId='trainingLevel'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Training Level
              </Form.Label>
              <Form.Select
                name='trainingLevel'
                value={formData.trainingLevel}
                onChange={handleChange}
              >
                <option value=''>Select Training Level</option>
                <option value='None'>None</option>
                <option value='someBasics'>Some Basics</option>
                <option value='allBasics'>All of the Basics</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='housebroken'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Housebroken
              </Form.Label>
              <Form.Select
                name='housebroken'
                value={formData.housebroken}
                onChange={handleChange}
              >
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='crateTrained'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Crate Trained
              </Form.Label>
              <Form.Select
                name='crateTrained'
                value={formData.crateTrained}
                onChange={handleChange}
              >
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='currentMedication'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Current Medication
              </Form.Label>
              <Form.Control
                type='text'
                name='currentMedication'
                value={formData.currentMedication}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='specialNeeds'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Special Needs
              </Form.Label>
              <Form.Select
                name='specialNeeds'
                value={formData.specialNeeds}
                onChange={handleChange}
              >
                <option value=''>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='favoriteSleep'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Favorite Place to Sleep
              </Form.Label>
              <Form.Control
                type='text'
                name='favoriteSleep'
                value={formData.favoriteSleep}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='favoriteActivity'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Favorite Activity
              </Form.Label>
              <Form.Control
                type='text'
                name='favoriteActivity'
                value={formData.favoriteActivity}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='favoriteSnack'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Favorite Snack
              </Form.Label>
              <Form.Control
                type='text'
                name='favoriteSnack'
                value={formData.favoriteSnack}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='likes'>
              <Form.Label style={{ marginBottom: '-10px' }}>Likes</Form.Label>
              <Form.Control
                type='text'
                name='likes'
                value={formData.likes}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='dislikes'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Dislikes
              </Form.Label>
              <Form.Control
                type='text'
                name='dislikes'
                value={formData.dislikes}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='scaredOf'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Scared Of
              </Form.Label>
              <Form.Control
                type='text'
                name='scaredOf'
                value={formData.scaredOf}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='bestDay'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                My Best Day Would Be
              </Form.Label>
              <Form.Control
                type='text'
                name='bestDay'
                value={formData.bestDay}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='otherFacts'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Any Other Facts
              </Form.Label>
              <Form.Control
                type='text'
                name='otherFacts'
                value={formData.otherFacts}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label style={{ marginBottom: '-10px' }}>Status</Form.Label>
              <Form.Select
                name='status'
                value={formData.status}
                onChange={handleChange}
              >
                <option value=''>Select</option>
                <option value='Available'>Available</option>
                <option value='Not Available Yet'>Not Available Yet</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='fosterParent'>
              <Form.Label style={{ marginBottom: '-10px' }}>
                Please enter your username
              </Form.Label>
              <Form.Control
                type='text'
                name='fosterParentUsername'
                value={formData.fosterParentUsername}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
