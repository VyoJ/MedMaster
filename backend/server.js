const express = require("express");
const app = express();
const PORT = 2000;
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());

app.post("/dispense", (req, res) => {
    // console.log(req.body)
    const { angle } = req.body;
    axios.post(
        "http://10.16.160.32/dispense",
        { medicine: angle },
        {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        }
    );
    console.log(angle);
    res.status(200).send(angle);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));