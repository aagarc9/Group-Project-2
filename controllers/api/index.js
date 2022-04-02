const router = require('express').Router();
const userRoutes = require('./userRoutes');
const weaponRoutes = require('./weaponRoutes');

router.use('/users', userRoutes);
router.use('/weapons', weaponRoutes);


module.exports = router;
