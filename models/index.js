const User = require("./User");
const Comics = require("./Comic");
// const Project = require('./Project')
// User.hasMany(Comic, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Comic.belongsTo(User, {
//   foreignKey: "user_id",
// });

module.exports = { User, Comics };