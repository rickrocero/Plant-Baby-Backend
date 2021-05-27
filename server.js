const express = require('express');
const session = require('express-session');
// const routes = require('./controllers');
const path = require('path');

require("dotenv").config();

const sequelize = require('./config/connection');
const { User } = require('./models');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = 3001;

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

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




// app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});