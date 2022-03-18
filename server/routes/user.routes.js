const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/random", JokeController.findRandomJoke);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke); //you need the ENTIRE ID for this to work in postman
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);

  // app.get("/api/users/", UserController.findAllUsers);
  // app.get("/api/users/:id", UserController.findOneSingleUser);
  // app.put("/api/users/update/:id", UserController.updateExistingUser);
  // app.post("/api/users/new", UserController.createNewUser);
  // app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};