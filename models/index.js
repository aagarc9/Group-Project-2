const User = require("./User");
// const Equipment = require('./Equipment');
const Weapon = require('./Weapon');

User.hasOne(Weapon, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Weapon.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Weapon };