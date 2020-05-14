const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");


const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	//mongo user id used to serialize for future integrations of other login styles
	//serialize gives browser cookie for future db calls
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

// 		async (accessToken, refreshToken, profile, done) => {
// 			const existingUser = await User.findOne({ googleId: profile.id });

// 			if (existingUser) {
// 				// we already have a record with the given profile ID
// 				done(null, existingUser);
// 			} else {
// 				// we don't have a user record with this ID, make a new record!
// 				const user = await new User({ googleId: profile.id }).save();
// 				done(null, user);
// 			}
// 		}
// 	)
// );
