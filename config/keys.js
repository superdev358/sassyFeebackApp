//keys js figure what set of credentials to return

if (process.env.NODE_ENV === "production") {
	module.exports = require("./prod.js");

	//we are in production, return the prod keys
} else {
	module.exports = require("./dev.js");
	//we are in dev mode - retun dev keys
}
