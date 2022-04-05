const User = require("./User");
const PlayerChar = require('./PlayerChar');
// const Enemy = require('./Enemy');

User.hasMany(PlayerChar, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

PlayerChar.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, PlayerChar };