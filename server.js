// const express = require('express');
// const session = require('express-session');
// const allRoutes = require('./routes');
// const path = require('path');
// const PORT = process.env.PORT || 3001;

// require("dotenv").config();

// const sequelize = require('./config/connection');
// const { User } = require('./models');
// // const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();

// // app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', allRoutes);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
// });
var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
var allRoutes = require('./routes');
// const cors = require("cors")

// Requiring our models for syncing
var sequelize = require('./config/connection.js');
const {User} = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//LOCAL
// app.use(cors());

//DEPLOYED
// app.use(cors({
//     origin:["https://marchfishfront.herokuapp.com"]
// }));

// app.use('/',allRoutes);



sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});