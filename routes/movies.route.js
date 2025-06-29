import express from 'express';
import { MovieCreate, MovieIndex, MovieUpdate, MovieDelete, MovieDetail} from '../controllers/movies.controller.js';

const router = express.Router();




//R - for Reading 
router.get('/', MovieIndex);

router.get("/:id", MovieDetail)

//C - For creating movies
router.post('/', MovieCreate);


//U - for updating movies
router.put('/:id', MovieUpdate);

//D- For Deleting movie
router.delete('/:id', MovieDelete);

export default router;

