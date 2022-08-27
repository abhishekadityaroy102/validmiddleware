const express = require("express");
// const morganMiddleware = require('./middleware/morgan.middleware');
const morgan = require("morgan");

const app = express();

// app.use("/morgan",morganMiddleware)
app.use(
  morgan(
    ':method ":url HTTP/:http-version" :status :res[content-length] - :response-time ms :remote-user [:date[clf]]'
  )
);

app.get("/", (req, res) => {
  // console.log(req.method.url)
  res.end();
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});