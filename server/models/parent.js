const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    comment: String
});

const ParentSchema = new mongoose.Schema({
    title: String,
    avgRating: Number,
    ratings: [ChildSchema]
});

mongoose.model("Movie", ParentSchema);
mongoose.model( "Review", ChildSchema);

module.exports = {
    Movie: mongoose.model("Movie"),
    Review: mongoose.model( "Review")
}