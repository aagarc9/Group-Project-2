const sequelize = require('../config/connection');
const { User, PlayerChar } = require('../models');

const userData = require("./userData.json");
const charData = require('./charData.json');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        
        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

            // for (const char of charData) {
            //     await Char.create({
            //         ...char,
            //     })
            // }
        await PlayerChar.bulkCreate(charData, {
            // returning: true,
        });
        
    } catch (err) {
        console.log(err)
    };
    process.exit(0);
};

seedDatabase();