const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Summary = sequelize.define('Summary', {
  originalText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  summaryText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Summary.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Summary, { foreignKey: 'userId' });

module.exports = Summary;
