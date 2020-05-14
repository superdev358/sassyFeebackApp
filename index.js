const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser")
require("./models/user");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json())

app.use(
	//cookie session middleware for all reqs, directly storing session data
	//only need for purposes of user id so fine for our purposes, if more data needed in session store use 
	//another library such as express session
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file
	app.use(express.static('client/build'));
	// Express will serve up the index.html file
	// if it desnt recognise the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})

	}



const PORT = process.env.PORT || 5000
;

app.listen(PORT);

// 	 (req, res) => {
// 	console.log("Emaily server has started!");
// })
