const User = require("./User");
const Char = require('./Char');
// const Enemy = require('./Enemy');

User.hasOne(Char, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Char.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Char };