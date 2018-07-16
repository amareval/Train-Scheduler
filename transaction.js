'use strict';

module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    amount: {
       type: DataTypes.DECIMAL,
       allowNull: false,
       defaultValue: 0
    },
  }, {
    classMethods: { // is this the key that links both tables?
        associate: function (models) {
            // associations can be defined here
            Transaction.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            });
            Transaction.belongsTo(models.Comment, {
                foreignKey: {
                    allowNull: false
                }
            });
        }
    }
});
return Transaction;
};