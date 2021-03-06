const express = require("express");
const app = express();
const path=require('path');
const port = process.env.PORT  ||3000;

//public static path
const public_path=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(public_path));


//routing
app.get("/", (req, res) => {
    res.render('index');

});

app.listen(port, () => {
    console.log(`serve is running at port : ${port}`)
});