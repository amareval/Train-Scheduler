'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    about_me: {
      type: DataTypes.TEXT,
      allowNUll: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: false
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instagram_handle: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }); 

    User.associate = function(models) {
      User.hasMany(models.Project, {
        onDelete: 'cascade'
      })
    }
  
  // {
  //   classMethods: {
  //     associate: function(models) {
  //       User.hasMany(models.Project, {
  //           onDelete: "cascade"
  //       });
  //     }
  //   },
  // };
  return User;
};