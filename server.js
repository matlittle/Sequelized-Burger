const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use( require('./controllers/burgers_controller.js') );

app.listen(port, (err) => {
    if(err) console.error(err);

    console.log(`Listening on port: ${port}`);
});

