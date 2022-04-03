const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charRoutes = require('./charRoutes');
// const enemyRoutes = require('./enemyRoutes');
// const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/characters', charRoutes);
// router.use('/enemy', enemyRoutes);
// router.use('/game', gameRoutes);


module.exports = router;
