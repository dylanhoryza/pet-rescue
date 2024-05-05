const router = require('express').Router();
const multer = require('multer');
const {
  createPet,
  updatePet,
  deletePet,
  getPets,
} = require('../../controllers/petController');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for the uploaded file
  }
});

// Initialize multer middleware with the configured storage
const upload = multer({ storage: storage });

// api/pets
router.route('/').get(getPets)

// router.post('/', upload.single('photo'), createPet);
router.post('/', upload.array('photos', 5), createPet); 

// api/pets/:petId
router
.route('/:petId')
.put(updatePet)
.delete(deletePet);

module.exports = router;