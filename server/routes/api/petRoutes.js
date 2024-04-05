const router = require('express').Router();
const {
  createPet,
  updatePet,
  deletePet,
  getPets,
} = require('../../controllers/petController');

// api/pets
router.route('/').get(getPets).post(createPet);

// api/pets/:petId
router
.route('/:petId')
.put(updatePet)
.delete(deletePet);

module.exports = router;