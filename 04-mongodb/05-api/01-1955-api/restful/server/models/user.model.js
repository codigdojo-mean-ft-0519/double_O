console.log('loading user model');

const mongoose = require('mongoose');
const { Schema } = mongoose;
// equivalent to above line
// const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide an author name'],
    trim: true,
  },
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
