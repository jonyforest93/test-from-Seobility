const express = require("express");
const cors = require("cors");
const app = express();

const port = 9090;

app.use(cors());
app.use(express.json());

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    if (randomKey) {
        return randomKey;
    } else {
        return "email";
    }
}

app.post("/api/registration", (req, res) => {
    const errorField = getRandomKey(req.body);

    if (Math.random() > 0.5) {
        res.status(400);

        setTimeout(() => {
            res.json({
                status: "error",
                fields: {
                    [errorField]: `wrong data in ${errorField}`,
                },
            });
        }, Math.random() * 1000);

        return;
    }

    setTimeout(() => {
        res.status(200);
        res.json({
            status: "success",
            msg: "Ваша заявка успешно отправлена",
        });
    }, Math.random() * 1000);
});

app.get("/api/ping", (req, res) => {
    res.statusCode = 200;
    res.send({
        status: "success",
        message: "Server is ready",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
