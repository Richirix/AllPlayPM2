const { Router } = require("express");
const movieRouter = require("./movieRouter");

const router = Router();


router.get("/", (req, res) => {
    res.send("mi primera API");
});


router.use(movieRouter);

module.exports = router;
