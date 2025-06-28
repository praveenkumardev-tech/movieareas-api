import {Schema, model} from "mongoose";


//write this schema
const schema = new Schema({
  title: String, 
  desc: String,
});

//Create your model
const Movie = model("Movies", schema);

export default Movie;