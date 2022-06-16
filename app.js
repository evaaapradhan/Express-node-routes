const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const blogr = require("./routes/blogroute");
// const router = express.Router();

app.use("/", blogr);
// app.use("/user", function), syntax (path, function)
// error occured when /blog in app.use and router.get as
//  it was mistakenly asking Express to route requests to /blog/blog instead of /blog.

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`running on PORT: ${PORT}`);
});


// console.log(module)
