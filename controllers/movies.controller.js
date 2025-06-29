import Movie from "../models/movie.model1.js";

export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({message: error.messgae});
  }
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

export const MovieDetail = async(req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if(movie == null){
      return res.status(404).json({message: "Cannot find Movie"});
    }
    else{
      res.json(movie)
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const MovieUpdate = async(req, res) => {


  try {
    const updatedMovie = await Movie.findOneAndUpdate({ _id: req.params.id}, 
      {
       title: req.body.title,
       desc: req.body.desc
      }, {
        ew: true, 
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({messgae: error.messgae})
  }
  //Validate the user input
  // if(re.body.title != null){
  //   res.movie.title = req.body.title;
  // }
  // if(res.body.desc != null){
  //   res.movie.desc = req.body.desc;
  // }

  // try {
  //   const updatedMovie = await res.movie.save();
  //   res.json(updatedMovie);
  // } catch (error) {
  //   res.status(400).json({messgae: error.messgae})
  // }
};

export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};