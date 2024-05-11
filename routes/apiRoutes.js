const express = require("express");
const apiRouter = express.Router();
const fs = require("fs");

apiRouter.get("/api/notes", (req, res) => {

    fs.readFile('./datas/notes.json', 'utf8', (error, file) => {
        if (error) throw error;

        const parsedFile = JSON.parse(file);
        return res.send(parsedFile);
    });
});

apiRouter.post("/api/notes", (req, res) => {
    let note = req.body;
    note["id"] = Date.now();
    note["title"] = req.body.title;
    note["text"] = req.body.text;

    fs.readFile('./datas/notes.json', 'utf8', (error, file) => {
        if (error) throw error;

        const parsedFile = JSON.parse(file);
        parsedFile.push(note);

        const newStringifiedFile = JSON.stringify(parsedFile);
    
        fs.writeFile('./datas/notes.json', newStringifiedFile, 'utf8', (err) => {
            if (err) throw err;
            console.log("The new note was appended to the file!");
        });
        
        return res.send(JSON.parse(newStringifiedFile));
    });    
});

apiRouter.delete("/api/notes/:id", (req, res) => {
    fs.readFile('./datas/notes.json', 'utf8', (error, file) => {
        if (error) throw error;

        let deletedNoteId = req.params.id;

        const parsedFile = JSON.parse(file);

        const newParsedFile = parsedFile.filter(elem => elem.id != deletedNoteId);

        const newStringifiedFile = JSON.stringify(newParsedFile);

        fs.writeFile('./datas/notes.json', newStringifiedFile, 'utf8', (err) => {
            if (err) throw err;
            console.log("The note was deleted!");
        });
        
        return res.send(JSON.parse(newStringifiedFile));
    });
});

module.exports = apiRouter;

// References
// https://expressjs.com/en/guide/routing.html