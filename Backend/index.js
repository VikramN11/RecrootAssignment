const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { blogRouter } = require("./routes/Blog.routes");
const { authenticate } = require("./middleware/authenticate.middleware");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.use("/users", userRouter);

app.use(authenticate);

app.use("/blogs", blogRouter);

app.listen(8080, async ()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("err.message");
    }
    console.log("Server is running at port 8080");
})