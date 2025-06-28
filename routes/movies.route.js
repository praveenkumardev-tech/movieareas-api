import express from 'express';

const router = express.Router();

//R - for Reading 
router.get('/', (req, res) => {
  res.send("Get all movie lists");
});


//C - For creating movies
router.post('/', (req, res) => {
  res.send("Create a movie");
});


//U - for updating movies
router.put('/:id', (req, res) => {
  res.send("Update a movie");
});

//D- For Deleting movie
router.delete('/:id', (req, res) => {
  res.send("Delete a movie");
});

export default router;

