const router = require("express").Router();

const { User, Weapon } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
    try {
        const weaponData = await Weapon.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const weapons = weaponData.map((weapon) => weapon.get({ plain: true }));

        res.render('homepage', {
            weapons,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use middleware to prevent access to 'profile' route, require authorization or sign-in.
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});

module.exports = router;