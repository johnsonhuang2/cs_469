const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const SizeModel = require("./models/SizeSchema");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://jimbob:buffbuff123@cluster0.6xqk8.mongodb.net/CS469?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
    SizeModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})


app.listen(3010, () => {
    console.log("SERVER RUNNING");
});