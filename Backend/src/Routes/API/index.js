const router= require("express").Router();
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use('/blog', postRoutes);
router.use('/user', userRoutes);

module.exports = router;