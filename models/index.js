const User = require('./User');
const Comic = require('./Comic');

User.hasMany(Comic, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Comic };