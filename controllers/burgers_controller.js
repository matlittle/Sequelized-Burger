/* Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file. */

const router = require('express').Router();
const db = require("../models");

db.burgers.sync({force: true});


router.get("/", (req, res) => {
    db.burgers.findAll({}).then(data => {
        console.log("'/' response =====================");
        console.log(data);
        res.render("index", {
            notEaten: data.filter(burger => !burger.dataValues.devoured),
            eaten: data.filter(burger => burger.dataValues.devoured)
        });
    }).catch(err => {
        console.log(err);
    });
});

router.post("/api/new", (req, res) => {
    db.burgers.create({
        burger_name: req.body.name
    }).then(data => {
        console.log("'/api/new' response =====================");
        console.log(data);
        console.log(req.body.name);
        res.redirect("/");
    }).catch(err => {
        console.log(err);
    });;
});

router.put("/api/devour/:id", (req, res) => {
    db.burgers.update({
        devoured: true
    },{
        where: {
            id: parseInt(req.params.id)
        }
    }).then(data => {
        console.log("'/api/devour' response =====================");
        console.log(data);
        res.set('X-HTTP-Method-Override', 'GET');
        res.redirect(303, "/");
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;

