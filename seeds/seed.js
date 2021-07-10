const sequelize = require("../config/connection");
const { User, Comics } = require("../models");

const userData = require("./userData.json");
const comicData = require("./comicData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const comics of comicData) {
    await Comics.create({
      ...comics,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comics = await Comics.bulkCreate(comicData);

  process.exit(0);
};

seedDatabase();
