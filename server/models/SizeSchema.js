const mongoose = require("mongoose");

const SizeSchema = new mongoose.Schema({
    chain_name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    diameter: {
        type: Number,
        required: true,
    }
}, {collection:'pizza_chain_sizes'});

const SizeModel = mongoose.model("pizza_chain_sizes", SizeSchema);
module.exports = SizeModel;