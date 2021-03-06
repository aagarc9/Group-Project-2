const router = require("express").Router();

const { PlayerChar } = require("../models");
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in,
            style: 'home.css'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/characters/:id', async (req, res) => {
  try {
    const playercharData = await PlayerChar.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const player = playercharData.get({ plain: true });

    res.render('game', {
      ...player,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use middleware to prevent access to 'profile' route, require authorization or sign-in.
router.get('/game', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: PlayerChar }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('game', {
        ...user,
        logged_in: true,
        style: 'game.css'
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/game');
      return;
    }
  
    res.render('login', {
      style: 'login.css'
    });
});

module.exports = router;