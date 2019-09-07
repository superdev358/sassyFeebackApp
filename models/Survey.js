const mongoose = require("mongoose")
const { Schema } = mongoose
const recipientSchema = require('./Recipient')

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [recipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date,
});

// create a model in mongoose, it creates a new collection in db
// that stores a list of surveys: surveys collection
mongoose.model('surveys', surveySchema) 