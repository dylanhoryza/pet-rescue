const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    
  },
  photos: [{
    type: String,
  }],
  trainingLevel: {
    type: String,
  },
  housebroken: {
    type: String,
  },
  crateTrained: {
    type: String,
  },
  currentMedication: {
    type: String,
  },
  specialNeeds: {
    type: String,
  },
  favoriteSleep: {
    type: String,
  },
  favoriteActivity: {
    type: String,
  },
  favoriteSnack: {
    type: String,
  },
  likes: {
    type: String,
  },
  dislikes: {
    type: String,
  },
  scaredOf: {
    type: String,
  },
  bestDay: {
    type: String,
  },
  otherFacts: {
    type: String,
  },
  status: {
    type: String,
  },
  fosterParent: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Pet = model('Pet', petSchema);

module.exports = Pet;