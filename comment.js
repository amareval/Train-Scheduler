'use strict';

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      default: 0
    }
  }); 

  Comment.associate = function(models) {
    Comment.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Comment;
};

