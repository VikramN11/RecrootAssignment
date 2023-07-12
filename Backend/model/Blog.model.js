const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title : String,
    body : String,
    date : String,
    author : String,
    user : String
})

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = {BlogModel}