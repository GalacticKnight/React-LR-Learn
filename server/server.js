// read enviroment variables
// require('dotenv').config()

// express: js framework - interface to Node Server
const express = require('express');
const app = express();

// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
// const cookieParser = require('cookie-parser')
const PORT = 8000;


app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// app.use(cookieParser())


// connect to mongooese and routes
require('./routes/user.routes')(app)
require("./config/mongoose.config");
const messageRoutes = require("./routes/message.routes");
messageRoutes(app);


// app listen to port
app.listen(PORT, () => console.log(`Party on port: ${PORT}`) );


// LOGIN REG INSTALL
// npm i bcrypt dotenv cookie-parser jsonwebtoken































/*

const port = 8000;
const express = require('express');
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

// CORS FOR FRONT END 
// const cors = require("cors");
// app.use(cors({ //cors is going to allow different ports to send requests to our API
//     origin:"http://localhost:3000" 
// }));

// ROUTES AND CONFIG AFTER MAKING FILES
require("./config/mongoose.config");
const messageRoutes = require("./routes/message.routes");
messageRoutes(app);

app.listen(port, () => console.log(`🎉Party on port: ${port}`) );



*/