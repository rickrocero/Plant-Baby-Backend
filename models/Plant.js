const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // image: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_indoor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    for_sale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    // Store a reference of the `id` of inventory this plant belongs to
    inventory_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'inventory',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant'
  }
);

module.exports = Plant;