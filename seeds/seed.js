const sequelize = require('../config/connection');
const { User, Char } = require('../models');

const userData = require("./userData.json");
const charData = require('./charData.json');

const seedDatabase = async () => {
        await sequelize.sync({ force: true });
        
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        const char = await Char.bulkCreate(charData);

    } catch (err) {
        console.log(err)
    };
    process.exit(0);
};

seedDatabase();