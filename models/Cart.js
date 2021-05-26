const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    purchaseDate: {
        type: DataTypes.Date,
        default: Date.now
    },
    
    plants: {
        type: DataTypes.Schema.Types.ObjectId,
        ref: 'Plant'
    }
}),

{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'Cart',
};

module.exports = Cart;




// module.exports = function (sequelize, DataTypes) {
//     const loan_submissions = sequelize.define("loan_submissions", {
//       first_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       last_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       }
//     });
  
//     return loan_submissions;
//   };