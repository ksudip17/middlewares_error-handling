const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")


app.use("/api" , (req, res, next) => {
    let {token}   = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        throw new ExpressError(401, "ACCESS DENIED!!")
    }
 })

app.get("/err" , (req, res) => {
    sudip = sudip
})

app.get("/admin" , (req, res) => {
    throw new ExpressError(403, "Access to /admin  is Forbidden")
})

app.use((err, req, res, next ) => {
    let {status=500, message="Some error occured"} = err;
    res.status(status).send(message);
})



app.listen(8080, () => {
    console.log("App is listening on port 8080");
});
