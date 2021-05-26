const User = require('./User');
const Address = require('./Address');
const Inventory = require('./Inventory');
const Plant = require('./Plant');
const Tag = require ('./Tag');
const PlantTag = require('./PlantTag');

User.hasOne(Address, {
   foreignKey: 'user_id',
});

Address.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Inventory, {
    foreignKey: 'user_id'
});

Inventory.belongsTo(User, {
    foreignKey: 'user_id'
});

Plant.belongsTo(Inventory, {
  foreignKey: 'inventory_id',
  onDelete: 'CASCADE',
});
  
Inventory.hasMany(Plant, {
  foreignKey: 'inventory_id',
});

Plant.belongsToMany(Tag, {
  through: 'plant_tag',
  foreignKey: 'plant_id'
});

Tag.belongsToMany(Plant, {
  through: 'plant_tag',
  foreignKey: 'tag_id'
});

module.exports = {
    User, 
    Address,
    Inventory,
    Plant,
    Tag,
    PlantTag,
};