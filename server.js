const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');



const PORT = process.env.PORT || 3306;

require("dotenv").config();

const sequelize = require('./config/connection');


const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3000
=======
const PORT = 3001;
>>>>>>> develop

// const sess = {
//     secret: process.env.SECRET,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 2
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});


