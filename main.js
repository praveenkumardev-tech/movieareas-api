import express from "express";

const app = express();
const PORT = 6969;
app.get('/', (req, res) => {
  res.json({msg: "Hello students!"});

});

//CRUD functionalities of movies

//R - For reading movie
app.get('/movies', () => {

})


//C - For creating movies
app.post('/movies', () => {

})


//U - for updating movies
app.put('/movies/:id', () => {

})

//D- For Deleting movie
app.delete('/movies/:id', () => {
  
})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`)
});

//DRY principle - Don't Reapeat Yourself
//KISS Priniciple - Keep it Simple, Stupid




