const router = require('express').Router();
const { Weapon } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newWeapon = await Weapon.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWeapon);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const weaponData = await Weapon.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!weaponData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(weaponData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
