import Movie from "../models/movie.model1.js";

export const MovieIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const MovieCreate = async(req, res) => {
  // id, title, description
  // Validate your data.
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.disc
  });


  try {
     const movie = await newMovie.save();
     return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};

export const MovieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};