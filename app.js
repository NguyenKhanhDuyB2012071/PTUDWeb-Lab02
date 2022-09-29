const express = require('express');
const cors = require('cors');
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require('./app/api-error');

const app = express();

app.use(cors());
app.use(express.json());
//Router
app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
    // Code
    return next(new ApiError(404, "Resource not found!"));
});
//define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    // Code
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error!"
    });
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
