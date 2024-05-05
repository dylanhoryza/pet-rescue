const Pet = require('../models/Pet');
const User = require('../models/User');



module.exports = {
  // Create Pet
  // async createPet(req, res) {
  //   try {
  //     const petData = await Pet.create(req.body);
  //     res.json(petData);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },
  async createPet(req, res) {
    try {
      // Extract other form data from req.body
      const { name, breed, ageGroup, description, status, fosterParentUsername, trainingLevel, housebroken, crateTrained, currentMedication, specialNeeds, favoriteSleep, favoriteActivity, favoriteSnack, likes, dislikes, scaredOf, bestDay, otherFacts } = req.body;

      // Extract the file paths of the uploaded photos
      const photoPaths = req.files ? req.files.map(file => file.path) : [];
      console.log(photoPaths);

      // Create a new pet object with the form data and photo paths
      const newPet = new Pet({
        name,
        breed,
        ageGroup,
        description,
        status,
        fosterParentUsername,
        trainingLevel,
        housebroken,
        crateTrained,
        currentMedication,
        specialNeeds,
        favoriteSleep,
        favoriteActivity,
        favoriteSnack,
        likes,
        dislikes,
        scaredOf,
        bestDay,
        otherFacts,
        photos: photoPaths 
      });

      // Save the new pet to the database
      const savedPet = await newPet.save();

      res.status(201).json(savedPet);
    } catch (error) {
      res.status(500).json(error);
    }
  },



  
  // Update Pet
  async updatePet(req, res) {
    try {
      const updatedPet = await Pet.findByIdAndUpdate(
        { _id: req.params.petId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!updatedPet) {
        return res.status(404).json({ message: 'No pet with that ID' });
      }
      res.json(updatedPet);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Delete Pet
  async deletePet(req, res) {
    try {
      const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
      if (!deletedPet) {
        return res.status(404).json({ message: 'No pet with that ID' });
      }
      res.json({ message: 'Pet deleted successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Get all Pets
  async getPets(req, res) {
    try {
      const pets = await Pet.find();
      res.json(pets);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}