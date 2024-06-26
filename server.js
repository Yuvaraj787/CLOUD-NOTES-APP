const express = require("express");
const app = express ();

const PORT = 3000;

const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("datas"));
app.use(apiRouter);
app.use(htmlRouter);

app.listen(PORT, () => console.log(`Server running on port 172.174.236.149:${PORT}`));

