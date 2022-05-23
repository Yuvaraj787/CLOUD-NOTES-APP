# Express.js: Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Process](#process)
* [Deployment](#deployment)
* [References](#references)
* [License](#license)

## Description

This note taker application can be used to write and save notes, allowing the user to better organize their thoughts and keep track of the important tasks they need to complete.  This application will use an Express.js back end and will save and retrieve note data from a JSON file. 

   * <strong><em>User Story</em></strong>
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
   * <strong><em>Acceptance Criteria</em></strong>
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
   
## Installation

 1.   Node.js is installed from the website, https://www.nodejs.org. 

 2.   Node Package Manager (npm) is a software manager and installer which puts the modules in 
      place so that the node project can utilize it, and also, it manages dependency conflicts intelligently.

 3.   The application is initialized using:-
 ```
            npm init
 ```
      During the installation process, the user will be asked to input some information about the project.  After initialization of the npm, a package.json will be generated in our folder.  This package.json file contains all the details of the application in which the user have inputted during the npm initialization.

 4.   This application requires the installation of express framework which is done by this command prompt 
      at the system terminal
            * <strong> npm install express --save </strong>

 5.   Body-Parser installation is installed by using
            * <strong> npm install body-parser -- save </strong>

      Body-Parser is node.js middleware that parses incoming/user request bodies in a middleware before the handlers.

  6.  Nodemon is installed as development dependency meaning that if our application ever goes into production, 
      this package will not be included.  The command to install nodemon for this case:-
             * <strong> npm i -D nodemon </strong>
 
      The purpose of this package is to watch for any changes in our files and restart the server instead of us having to do that manually ourselves.  
  
      ![alt text](./public/assets/img06.png)  

  7.  For this application, I have used Insomnia for testing the application.  This is installed from 
      [Insomnia.rest](https://insomnia.rest/download) - the link provided during the classes.
 
      The screenshot is provided below of the testing using Insomnia.

      ![alt text](./public/assets/img13.png) 

  8.          

## Process


## Deployment

The application has been deployed to Heroku and the lin
k to Heroku:-

 * [Heroku - Note Taker](https://note-taker-app-stella.herokuapp.com/)

 * ![alt text](./public/assets/img07.png)

The URL of the GitHub respository is https://github.com/stellalph/EJS-NOTE-TAKER.git and the repository name of the project is EJS-NOTE-TAKER.


## License
  
This project is licensed under the terms of the MIT license.

## References
* [How to Setup an Express Server](https://medium.com/@ralph1786/how-to-setup-an-express-server-5fd9cd9ae073)
* [Insomnia Docs](https://docs.insomnia.rest/insomnia/get-started)