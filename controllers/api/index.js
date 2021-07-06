const router = require('express').Router();
const userRoutes = require('./userRoutes');
const comicRoutes = require('./comicRoutes');

router.use('/users', userRoutes);
router.use('/comics', comicRoutes);

module.exports = router;