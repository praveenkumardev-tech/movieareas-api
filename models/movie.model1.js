import {Schema, model} from "mongoose";


//write this schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  }
});

//Create your model
const Movie = model("Movies", schema);

export default Movie;