const express = require("express");
const { BlogModel } = require("../model/Blog.model");

const blogRouter = express.Router();

blogRouter.get("/", (req, res)=>{
    res.send("Getting All Blogs");
})

blogRouter.post("/create", async (req, res)=>{
    const payload = req.body;
    try {
        const blog = new BlogModel(payload);
        await blog.save();
        res.send({"msg" : "New blog has been created", "data" : blog});
    } catch (err) {
        res.send({"msg":err.message})
    }
})

blogRouter.delete("/delete", (req, res)=>{
    res.send("Blog deleted");
})

module.exports = { blogRouter };