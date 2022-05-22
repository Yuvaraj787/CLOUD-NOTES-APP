// Dependencies
// Set up express server & tell node we are creating an express server

const express = require("express");
const app = express ();

// Sets the port for listener
const PORT = process.env.PORT || 4000;

// Routers
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware 
app.use(express.static("public"));
app.use(express.static("db"));
// order matters here!
app.use(apiRouter);
app.use(htmlRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//https://medium.com/@ralph1786/how-to-setup-an-express-server-5fd9cd9ae073
// Reference on installing the package called as development dependency, meaning that if 
// our application ever goes into production, this package will not be included.
// command os npm i -D nodemon - purpose of this package is to watch for any changes in our files
// and restart the server instead of us having to do that manually ourselves.