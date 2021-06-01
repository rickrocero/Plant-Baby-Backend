const { Model, DataTypes, DATEONLY, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
<<<<<<< HEAD
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DATE.now
    },
=======
    // order_date: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: Date.now()
    // },
>>>>>>> develop
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    shipping_cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    grand_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;