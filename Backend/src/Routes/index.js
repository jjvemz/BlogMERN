const router = require('express').Router();
const ApiRoutes = require('./API');

router.use('/api/v1', ApiRoutes);

router.use((req, res) => {
    res.send("<h1>404 not found!</h1>")
  });
  
  module.exports = router;